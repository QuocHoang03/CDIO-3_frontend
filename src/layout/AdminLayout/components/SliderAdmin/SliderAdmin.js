import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SliderAdmin.module.scss";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { PiSignOut } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import config from "../../../../config";

const cx = classNames.bind(styles);

const SliderAdmin = () => {
  // add active slider
  useEffect(() => {
    const listItem = document.getElementsByClassName(styles["list-item"]);
    const listItemArray = Array.from(listItem);

    listItemArray.map((item) => {
      item.onclick = () => {
        listItemArray.map((removeAllClass) => {
          return removeAllClass.classList.remove(styles["active"]);
        });
        item.classList.add(styles["active"]);
      };
      return item;
    });
  }, []);
  return (
    <div className={cx("wrapper")}>
      <Link className={cx("heading")}>
        <MdDashboard className={cx("heading-icon")} to={`/${config.routes.adminHome}`} />
        <span>WanFit</span>
      </Link>
      <div className={cx("list")}>
        <Link className={cx("list-item", "active")} to={`/${config.routes.homeAdmin}`}>
          <RxDashboard className={cx("list-icon")} />
          <span className={cx("list-content")}>Dashboard</span>
        </Link>
        <Link className={cx("list-item")} to={`/${config.routes.orderAdmin}`}>
          <MdOutlineShoppingCart className={cx("list-icon")} />
          <span className={cx("list-content")}>Order</span>
        </Link>
        <Link className={cx("list-item")} to={`/${config.routes.productAdmin}`}>
          <HiOutlineShoppingBag className={cx("list-icon")} />
          <span className={cx("list-content")}>Products</span>
        </Link>
        <Link className={cx("list-item")} to={`/${config.routes.settingAdmin}`}>
          <IoSettingsOutline className={cx("list-icon")} />
          <span className={cx("list-content")}>Settings</span>
        </Link>
        <Link className={cx("list-item")} to={`/${config.routes.signOutAdmin}`}>
          <PiSignOut className={cx("list-icon")} />
          <span className={cx("list-content")}>Sign Out</span>
        </Link>
      </div>
    </div>
  );
};

export default SliderAdmin;
