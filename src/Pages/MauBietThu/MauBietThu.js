import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./MauBietThu.module.scss";

const cx = classNames.bind(styles);
const MauBietThu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={cx("")}>MauBietThu</div>;
};

export default MauBietThu;
