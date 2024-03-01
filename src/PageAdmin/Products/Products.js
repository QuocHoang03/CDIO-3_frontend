import React from "react";
import ReactPaginate from "react-paginate";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { IoMenuOutline, IoAddOutline } from "react-icons/io5";
import { LuListTree } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

const Order = () => {
  const handleNewProduct = (e) => {
    e.preventDefault();
    toast("Chức năng đang phát triển");
  };
  const handleUpdate = () => {
    toast("Chức năng đang phát triển");
  };
  const handleDelete = () => {
    toast("Chức năng đang phát triển");
  };
  const fakeDemoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handlePageClick = (event) => {
    console.log(event.selected);
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <h2 className={cx("heading")}>
          <div className={cx("heading-left")}>
            <IoMenuOutline className={cx("heading-icon")} />
            <span>Products</span>
          </div>
          <div className={cx("heading-right")}>
            <button className={cx("btn-create")} onClick={handleNewProduct}>
              <IoAddOutline className={cx("btn-icon")} />
              <span>New Product</span>
            </button>
          </div>
        </h2>
        <div className={cx("container")}>
          <table className={cx("table-inner")}>
            <thead>
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
            </thead>
            <tbody>
              {fakeDemoArray.map((index) => {
                return (
                  <tr key={index} className={cx("row-inner")}>
                    <td>{index}</td>
                    <td>Phạm Quốc Hoàng</td>
                    <td>2024-11-1</td>
                    <td>
                      <input className={cx("input-checkbox")} type="checkbox" />
                    </td>
                    <td>
                      <div className={cx("action")}>
                        <div className={cx("action-upd")} onClick={handleUpdate}>
                          <FaRegEdit className={cx("action-upd-icon")} />
                        </div>
                        <div className={cx("action-del")} onClick={handleDelete}>
                          <MdDeleteForever className={cx("action-del-icon")} />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className={cx("page")}>
        <ReactPaginate
          className={cx("pagination", "hello")}
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={11}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default Order;
