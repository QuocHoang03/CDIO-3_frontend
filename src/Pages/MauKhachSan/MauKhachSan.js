import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./MauKhachSan.module.scss";

const cx = classNames.bind(styles);
const MauKhachSan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={cx("")}>MauKhachSan</div>;
};

export default MauKhachSan;
