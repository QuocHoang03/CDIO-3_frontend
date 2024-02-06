import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import config from "../../config";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <>
      {/*  */}
      <div className={cx("video-block")}>
        <video className={cx("video-source")} autoPlay={true} muted loop>
          <source
            src="https://sbshouse.vn/wp-content/uploads/2022/08/sbs-house-video-web-fix-2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/*  */}
      <div className={cx("video-slice")}>
        <div className={cx("slice-container")}>
          <form className={cx("search-option")}>
            {/* Loại nhà */}
            <div className={cx("search-item")}>
              <label className={cx("search-title")}>Loại nhà</label>
              <select className={cx("search-select")}>
                <option>Chọn loại nhà</option>
              </select>
            </div>
            {/* Số phòng ngủ */}
            <div className={cx("search-item")}>
              <label className={cx("search-title")}>Số phòng ngủ</label>
              <select className={cx("search-select")}>
                <option>Chọn số lượng</option>
              </select>
            </div>
            {/* Chiều rộng */}
            <div className={cx("search-item")}>
              <label className={cx("search-title")}>Chiều rộng</label>
              <select className={cx("search-select")}>
                <option>Chọn số mét</option>
              </select>
            </div>
            {/* Chiều dài */}
            <div className={cx("search-item")}>
              <label className={cx("search-title")}>Chiều dài</label>
              <select className={cx("search-select")}>
                <option>Chọn số mét</option>
              </select>
            </div>
            <button type="submit" className={cx("search-btn")}>
              <FaSearch className={cx("search-btn-icon")} />
            </button>
          </form>
          <div className={cx("select-menu")}>
            {/* Nhà cấp 4 đẹp */}
            <Link className={cx("item")} to={config.routes.nhaCap4Dep}>
              <div className={cx("img-item")}>
                <img
                  className={cx("img")}
                  src="https://sieuthibanve.com/themes/icons/24.png"
                  alt=""
                />
              </div>
              <div className={cx("title-item")}>Nhà cấp 4 đẹp</div>
              <div className={cx("content-item")}>
                Nhà 1 tầng, 3 gian, được xây dựng phù hợp với không gian ven thành phố, nông thôn
              </div>
            </Link>
            {/* Nhà phố đẹp  */}
            <Link className={cx("item")} to={config.routes.nhaPhoDep}>
              <div className={cx("img-item")}>
                <img
                  className={cx("img")}
                  src="https://sieuthibanve.com/themes/icons/22.png"
                  alt=""
                />
              </div>
              <div className={cx("title-item")}>Nhà phố đẹp</div>
              <div className={cx("content-item")}>
                Là nhà được xây dựng tại những khu đất được chia lô, từ 2 tầng trở lên
              </div>
            </Link>
            {/* Mẫu biệt thự đẹp */}
            <Link className={cx("item")} to={config.routes.mauBietThuDep}>
              <div className={cx("img-item")}>
                <img
                  className={cx("img")}
                  src="https://sieuthibanve.com/themes/icons/26.png"
                  alt=""
                />
              </div>
              <div className={cx("title-item")}>Mẫu biệt thự đẹp</div>
              <div className={cx("content-item")}>
                Tổng hợp những mẫu thiêt kế biệt thự đẹp và hiện đại nhất
              </div>
            </Link>
            {/* Công trình dịch vụ */}
            <Link className={cx("item")} to={config.routes.mauKhachSanDep}>
              <div className={cx("img-item")}>
                <img
                  className={cx("img")}
                  src="https://sieuthibanve.com/themes/icons/21.png"
                  alt=""
                />
              </div>
              <div className={cx("title-item")}>Mẫu khách sạn đẹp</div>
              <div className={cx("content-item")}>
                Tổng hợp những mẫu thiêt kế khách sạn đẹp và hiện đại nhất
              </div>
            </Link>
            {/* Xây dựng trọn gói */}
            <Link className={cx("item")}>
              <div className={cx("img-item")}>
                <img
                  className={cx("img")}
                  src="https://sieuthibanve.com/themes/icons/21.png"
                  alt=""
                />
              </div>
              <div className={cx("title-item")}>Xây dựng trọn gói</div>
              <div className={cx("content-item")}>
                Là dịch vụ xây nhà trọn gói, chìa khóa trao tay
              </div>
            </Link>
            {/* Dự toán công trình */}
            <Link className={cx("item")}>
              <div className={cx("img-item")}>
                <img
                  className={cx("img")}
                  src="https://sieuthibanve.com/themes/icons/25.png"
                  alt=""
                />
              </div>
              <div className={cx("title-item")}>Dự toán công trình</div>
              <div className={cx("content-item")}>
                Công cụ giúp bạn tính toán nhanh chi phí xây dựng, xây dựng cho ngôi nhà của mình
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={cx("container")}></div>
    </>
  );
};

export default Home;
