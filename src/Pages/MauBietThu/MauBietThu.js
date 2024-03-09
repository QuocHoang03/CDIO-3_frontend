import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./MauBietThu.module.scss";
import ProductItemBlockCategory from "../../layout/components/ProductItemBlockCategory/ProductItemBlockCategory";
import ReactPaginate from "react-paginate";

const cx = classNames.bind(styles);
const MauBietThu = () => {
  const listDemo = [1, 1, 1, 1];
  const listDemo2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const listDemo3 = [1, 2, 3, 4, 5, 6, 7, 8];
  const listDemo4 = [
    "Đề xuất bởi STBV",
    "Giá tăng dần",
    "Giá giảm dần",
    "Nhiều người xem nhất",
    "Đặt hàng nhiều nhất",
  ];
  const listCategoryProductBl = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [numberFloor, setNumberFloor] = useState(false);
  const [bedRoom, setBedRoom] = useState(false);
  const [totalPages, setTotalPages] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleNumberFloor = (e) => {
    setNumberFloor(e.target.value);
  };
  const handleBedRoom = (e) => {
    setBedRoom(e.target.value);
  };
  // Page
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner-left")}>
        <div className={cx("bl-filter")}>
          <div className={cx("heading")}>
            <div className={cx("heading-left")}>Bộ lọc</div>
            <div className={cx("heading-right")}>Về mặc định</div>
          </div>
          <hr className={cx("hr-border")} />
          <div className={cx("content")}>
            <div className={cx("title")}>Loại nhà</div>
            <ul className={cx("list-check-home")}>
              {listDemo.map((arr, index) => {
                return (
                  <li key={`home-${index}`} className={cx("list-item")}>
                    <input id={`check-home-${index}`} className={cx("check")} type="checkbox" />
                    <label htmlFor={`check-home-${index}`} className={cx("name")}>
                      Nhà cấp 4 đẹp
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className={cx("hr-border")} />
          <div className={cx("content")}>
            <div className={cx("title")}>Số tầng</div>
            <ul className={cx("list-number-floor")}>
              {listDemo2.map((arr, index) => {
                return (
                  <li key={`floor-${index}`} className={cx("list-item")}>
                    <label
                      htmlFor={`check-number-floor-${index}`}
                      className={cx("bl-number", +numberFloor === +arr ? "active" : "")}
                    >
                      {arr}
                      <input
                        id={`check-number-floor-${index}`}
                        className={cx("check")}
                        type="radio"
                        name="check-number-floor"
                        onChange={handleNumberFloor}
                        value={arr}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className={cx("hr-border")} />
          <div className={cx("content")}>
            <div className={cx("title")}>Số phòng ngủ</div>
            <ul className={cx("list-bed-room")}>
              {listDemo3.map((arr, index) => {
                return (
                  <li key={`floor-${index}`} className={cx("list-item")}>
                    <label
                      htmlFor={`check-bed-room-${index}`}
                      className={cx("bl-number", +bedRoom === +arr ? "active" : "")}
                    >
                      {arr}
                      <input
                        id={`check-bed-room-${index}`}
                        className={cx("check")}
                        type="radio"
                        name="check-number-floor"
                        onChange={handleBedRoom}
                        value={arr}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={cx("inner-right")}>
        <div className={cx("heading")}>
          {listDemo4.map((arr, index) => {
            return <div className={cx("heading-item")}>{arr}</div>;
          })}
        </div>
        <div className={cx("product-list")}>
          {listCategoryProductBl.map(() => {
            return <ProductItemBlockCategory />;
          })}
        </div>
        {totalPages > 0 && (
          <div className={cx("page")}>
            <ReactPaginate
              className={cx("pagination", "hello")}
              nextLabel="Next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={totalPages}
              previousLabel="< Prev"
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
        )}
      </div>
    </div>
  );
};

export default MauBietThu;
