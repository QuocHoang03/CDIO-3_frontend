import classNames from "classnames/bind";
import { Link } from "react-router-dom";
//
import config from "../../../config";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const User = ({ icon }) => {
  const user = false;
  const role = false;
  const lastName = 1;
  const firstName = 1;
  // const user = !!localStorage.getItem("user");
  // const role = localStorage.getItem("role");
  // // const email = localStorage.getItem("email");
  // const lastName = localStorage.getItem("lastName");
  // const firstName = localStorage.getItem("firstName");
  return (
    <div className={cx("social-category-user")}>
      {user ? (
        <div className={cx("social-category-link")}>{icon}</div>
      ) : (
        <Link className={cx("social-category-link")} to={`/${config.routes.login}`}>
          {icon}
        </Link>
      )}

      <div className={cx("subnav-user")}>
        {/* no user */}
        {!user && (
          <Link className={cx("subnav-user-link")} to={`/${config.routes.register}`}>
            Tạo tài khoản ngay
          </Link>
        )}
        {!user && (
          <Link className={cx("subnav-user-link")} to={`/${config.routes.login}`}>
            Đăng nhập
          </Link>
        )}
        {/* exist user */}
        {user && role === "user" && (
          <>
            {/* <a className={cx("subnav-user-link")} href={`/${config.routes.quanLy}`}>
              Quản lý
            </a>
            <a className={cx("subnav-user-link")} href={`/${config.routes.createProduct}`}>
              Thêm sản phẩm
            </a> */}
            <div className={cx("subnav-user-link")}>
              {lastName}
              {firstName}
            </div>
            <a className={cx("subnav-user-link")} href={`/${config.routes.logout}`}>
              Đăng xuất
            </a>
          </>
        )}
        {/* Admin */}
        {user && role === "admin" && (
          <>
            <div className={cx("subnav-user-link")}>
              {lastName}
              {firstName}
            </div>
            <a className={cx("subnav-user-link")} href={`/${config.routes.quanLy}`}>
              Quản lý
            </a>
            <a className={cx("subnav-user-link")} href={`/${config.routes.createProduct}`}>
              Thêm sản phẩm
            </a>
            <a className={cx("subnav-user-link")} href={`/${config.routes.logout}`}>
              Đăng xuất
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default User;
