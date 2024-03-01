import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { HiMinus, HiPlus } from "react-icons/hi";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
import ContactOrderCart from "../../layout/components/ContactOrderCart/ContactOrderCart";

const cx = classNames.bind(styles);

const Cart = () => {
  const arrDemo = [1, 1, 1, 1];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner-left")}>
        <div className={cx("bl-table")}>
          <div className={cx("title")}>
            <div className={cx("title-1")}>Hình ảnh</div>
            <div className={cx("title-2")}>Tên sản phẩm</div>
            <div className={cx("title-3")}>Giá bán</div>
            <div className={cx("title-4")}>Số lượng</div>
            <div className={cx("title-5")}></div>
          </div>
          <div className={cx("container")}>
            {arrDemo.map((arr, index) => {
              return (
                <div key={index} className={cx("content")}>
                  <div className={cx("content-1")}>
                    <img
                      src="https://sieuthibanve.com/thumb/images/202202/151617-products-2021-11-30-1638234751-pc3.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("content-2")}>
                    <div className={cx("heading")}>iPad gen 9 10.2 inch WiFi 64GB</div>
                    <div className={cx("address")}>Khu vực: Khu vực miền Bắc</div>
                    <div className={cx("color")}>Màu sắc: Space Gray</div>
                  </div>
                  <div className={cx("content-3")}>6.990.000₫</div>
                  <div className={cx("content-4")}>
                    <div className={cx("quantity")}>
                      <div className={cx("bl-icon-left")}>
                        <HiMinus className={cx("icon")} />
                      </div>
                      <div className={cx("number")}>1</div>
                      <div className={cx("bl-icon-right")}>
                        <HiPlus className={cx("icon")} />
                      </div>
                    </div>
                  </div>
                  <div className={cx("content-5")}>
                    <div className={cx("bl-trash")}>
                      <GoTrash className={cx("trash")} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={cx("bl-buy")}>
            <Link to={"/"} className={cx("buy")}>
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
      <div className={cx("inner-right")}>
        <div className={cx("bg-color")}>
          <ContactOrderCart />
        </div>
      </div>
    </div>
  );
};

export default Cart;
