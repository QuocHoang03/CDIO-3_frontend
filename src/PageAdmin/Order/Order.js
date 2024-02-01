import React from "react";
import classNames from "classnames/bind";
import styles from "./Order.module.scss";
import { IoMenuOutline, IoAddOutline } from "react-icons/io5";
import { LuListTree } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const cx = classNames.bind(styles);

const Order = () => {
  const fakeDemoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("heading")}>
        <div className={cx("heading-left")}>
          <IoMenuOutline className={cx("heading-icon")} />
          <span>Products</span>
        </div>
        <div className={cx("heading-right")}>
          <button className={cx("btn-create")}>
            <IoAddOutline className={cx("btn-icon")} />
            <span>New Product</span>
          </button>
        </div>
      </h2>
      <div className={cx("container")}>
        <table className={cx("table-inner")}>
          <tr className={cx("row-inner")}>
            <th>
              <div className={cx("th-content")}>
                <LuListTree className={cx("th-content-icon")} />
                ID
              </div>
            </th>
            <th>Title</th>
            <th>Published at</th>
            <th>enabled</th>
            <th>Action</th>
          </tr>
          {fakeDemoArray.map((index) => {
            return (
              <tr key={index} className={cx("row-inner")}>
                <td>{index}</td>
                <td>Phạm Quốc Hoàng</td>
                <td>2024-11-1</td>
                <td>
                  <input className={cx("input-checkbox")} type="checkbox" checked={false} />
                </td>
                <td>
                  <div className={cx("action")}>
                    <div className={cx("action-upd")}>
                      <FaRegEdit className={cx("action-upd-icon")} />
                    </div>
                    <div className={cx("action-del")}>
                      <MdDeleteForever className={cx("action-del-icon")} />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Order;
