import classNames from "classnames/bind";

import styles from "./Login.module.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("instructions")}>
        <img
          className={cx("instructions-img")}
          src="https://shopdunk.com/images/uploaded/banner/TND_M402_010%201.jpeg"
          alt="Not found!"
        />
      </div>
      <div className={cx("login")} onSubmit={handleSubmit}>
        <form className={cx("form-login")}>
          <h1 className={cx("heading")}>Đăng Nhâp</h1>
          <div className={cx("login-item")}>
            <label className={cx("login-item-label")}>E-mail:</label>
            <input
              className={cx("login-item-input")}
              name="email"
              type="email"
              onChange={handleOnChange}
            />
          </div>
          <div className={cx("login-item")}>
            <label className={cx("login-item-label")}>Mật khẩu:</label>
            <input
              className={cx("login-item-input")}
              name="password"
              type="password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className={cx("btnSubmit")}>
            Đăng nhập
          </button>
          <div className={cx("register")}>
            <b className={cx("register-question")}>Bạn Chưa Có Tài Khoản?</b>
            <Link className={cx("register-link")} to="/register">
              Đăng Ký Ngay
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
