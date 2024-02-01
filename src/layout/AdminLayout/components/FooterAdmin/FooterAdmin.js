import React from "react";
import classNames from "classnames/bind";
import styles from "./FooterAdmin.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const cx = classNames.bind(styles);

const FooterAdmin = () => {
  return (
    <div className={cx("footing")}>
      <div className={cx("page")}>
        <div className={cx("page-list")}>
          <FaAngleLeft className={cx("page-icon")} />
        </div>
        <div className={cx("page-list")}>1</div>
        <div className={cx("page-list")}>2</div>
        <div className={cx("page-list")}>
          <FaAngleRight className={cx("page-icon")} />
        </div>
      </div>
    </div>
  );
};

export default FooterAdmin;
