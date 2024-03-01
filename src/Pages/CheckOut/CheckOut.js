import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CheckOut.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { HiMinus, HiPlus } from "react-icons/hi";
import { GoTrash } from "react-icons/go";

const cx = classNames.bind(styles);

const CheckOut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const arrDemo = [1, 1, 1, 1];

  return (
    <>
      <div className={cx("bl-logo-checkout")}>
        <div className={cx("logo-checkout")}>
          <div className={cx("logo")}>
            <img
              src="https://res.cloudinary.com/daofedrqe/image/upload/v1707379342/wanfit_apple_imageAvt/mhf6siicj77fofhuvfcm.png"
              alt=""
            />
            WanFit
          </div>
          <div className={cx("checkout")}>Thanh Toán</div>
        </div>
      </div>
      <div className={cx("bg-wrapper")}>
        <div className={cx("wrapper")}>
          <div className={cx("bg-top")}></div>
          <div className={cx("location")}>
            <div className={cx("title")}>
              <IoLocationSharp className={cx("logo")} />
              Địa chỉ nhận hàng
            </div>
            <div className={cx("content")}>
              <div className={cx("content-1")}>Phạm Quốc Hoàng (+84) 971955144</div>
              <div className={cx("content-2")}>
                322/60 Đường Hải Phòng, Phường Chính Gián, Quận Thanh Khê, Đà Nẵng
              </div>
              <Link className={cx("content-3")}>Thay Đổi</Link>
            </div>
          </div>
          <div className={cx("title-product")}>Sản phẩm</div>
          <div className={cx("bl-product")}>
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
                            <div className={cx("number")}>1</div>
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
              <div className={cx("bl-total")}>
                <div className={cx("total-1")}>
                  <div className={cx("title-1")}>Tổng tiền hàng</div>
                  <div className={cx("text-1")}>₫407.200</div>
                </div>
                <div className={cx("total-2")}>
                  <div className={cx("title-2")}>Phí vận chuyển</div>
                  <div className={cx("text-2")}>₫92.200</div>
                </div>
                <div className={cx("total-3")}>
                  <div className={cx("title-3")}>Tổng thanh toán</div>
                  <div className={cx("text-3")}>₫474.400</div>
                </div>
                <div className={cx("bl-btn")}>
                  <div className={cx("btn")}>Đặt hàng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
