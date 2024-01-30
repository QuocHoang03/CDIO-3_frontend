import classNames from "classnames/bind";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, createContext } from "react";
import { Link } from "react-router-dom";

//
import config from "../../../config";
import styles from "./Header.module.scss";
import HeaderItem from "./HeaderItem";
import User from "./User";
import Search from "../Search/Search";
import BaoGia from "./BaoGia";
import DuAn from "./DuAn";

//
const cx = classNames.bind(styles);
export const ToggleSearchFullscreenContext = createContext(null);

const Header = () => {
  const [blockSearchFullscreen, setBlockSearchFullscreen] = useState(false);

  // handle search fullscreen
  const handleSearchFullscreen = (e) => {
    e.preventDefault();
    setBlockSearchFullscreen((pre) => !pre);
    console.log(blockSearchFullscreen);
  };

  // handle close
  const handleClose = () => {
    setBlockSearchFullscreen((pre) => !pre);
  };
  return (
    <div className={cx("wrapper")}>
      <nav className={cx("navbar")}>
        {/* logo */}
        <div className={cx("navbar-item-logo")}>
          <a className={cx("logo-link")} href="/">
            <img
              className={cx("logo")}
              src="https://sbshouse.vn/wp-content/uploads/2022/07/logo.svg"
              alt="logo"
            />
          </a>
        </div>
        {/* menu category */}
        <div className={cx("navbar-item-menu")}>
          <HeaderItem name={"TRANG CHỦ"} linkUrl={""} />
          <DuAn name={"Dự án"} linkUrl={"du-an"} icon={<MdKeyboardArrowDown />} />
          <HeaderItem name={"DỊCH VỤ"} linkUrl={"bao-gia"} />
          <BaoGia name={"Báo giá"} linkUrl={"bao-gia"} icon={<MdKeyboardArrowDown />} />
          <HeaderItem name={"Phản hồi"} linkUrl={"phan-hoi"} />
          <HeaderItem name={"Tuyển dụng"} linkUrl={"tuyen-dung"} />
        </div>
        {/* social */}
        <div className={cx("navbar-item-social")}>
          <div className={cx("social-category")}>
            <a href="tel:0971955144" className={cx("social-category-link", "tel-link")}>
              Tel: 0971955144
            </a>
          </div>
          <div className={cx("social-category")}>
            <Link to="/" className={cx("social-category-link")} onClick={handleSearchFullscreen}>
              <FiSearch />
            </Link>
          </div>
          <div className={cx("social-category")}>
            <Link to={`/${config.routes.cart}`} className={cx("social-category-link")}>
              <FiShoppingCart />
              <div className={cx("car-quantity")}>0</div>
            </Link>
          </div>
          <div className={cx("social-category")}>
            <User icon={<FiUser />} />
          </div>
        </div>
        {/* search fullscreen */}
        <ToggleSearchFullscreenContext.Provider value={handleClose}>
          <Search blockSearchFullscreen={blockSearchFullscreen} handleClose={handleClose} />
        </ToggleSearchFullscreenContext.Provider>
      </nav>
    </div>
  );
};

export default Header;
