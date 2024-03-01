import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./NhaCap4.module.scss";

const cx = classNames.bind(styles);
const NhaCap4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner-left")}>111</div>
      <div className={cx("inner-right")}>
        <div className={cx("heading")}>
          <div className={cx("heading")}></div>
        </div>
        <div className={cx("")}></div>
      </div>
    </div>
  );
};

export default NhaCap4;
