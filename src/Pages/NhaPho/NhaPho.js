import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./NhaPho.module.scss";

const cx = classNames.bind(styles);
const NhaPho = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={cx("")}>NhaPho</div>;
};

export default NhaPho;
