import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./NhaCap4.module.scss";

const cx = classNames.bind(styles);
const NhaCap4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={cx("")}>NhaCap4</div>;
};

export default NhaCap4;