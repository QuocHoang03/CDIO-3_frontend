import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./HomeDetail.module.scss";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FaChevronDown, FaRegHeart, FaRegSquare } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

import {
  FiLayers,
  FiSmartphone,
  FiAirplay,
  FiInfo,
  FiLayout,
  FiCreditCard,
  FiHome,
  FiDollarSign,
  FiHash,
} from "react-icons/fi";

const cx = classNames.bind(styles);

const HomeDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const arrDemo = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const arrDemo2 = [
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
    "https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg",
  ];
  const [overflow, setOverflow] = useState(false);
  const refImgSub = useRef();
  const handleLeft = () => {
    refImgSub.current.scrollLeft -= 80;
  };
  const handleRight = () => {
    refImgSub.current.scrollLeft += 80;
  };

  const handleShowImg = async (arr) => {
    await setOverflow(true);
    let imgHtml = await document.getElementsByClassName(`${styles.imgSrc}`);
    let imgArray = await Array.from(imgHtml);
    imgArray[0].src = arr;
  };

  const handleCloseImg = () => {
    setOverflow(false);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("information")}>
          <div className={cx("title")}>Nhà phố 2 tầng 4 phòng ngủ 5x16m</div>
          <div className={cx("img-avatar")}>
            <img
              src="https://sieuthibanve.com/upload/images/202202/151617-products-2021-11-30-1638234751-pc3.png"
              alt=""
            />
          </div>
          <div className={cx("img-sub")}>
            <div className={cx("img-sub-icon")}>
              <div className={cx("sub-icon-left")} onClick={handleLeft}>
                <FaCircleChevronLeft />
              </div>
              <div className={cx("sub-icon-right")} onClick={handleRight}>
                <FaCircleChevronRight />
              </div>
            </div>
            <div className={cx("img-sub-list")} ref={refImgSub}>
              {arrDemo.map((arr, index) => {
                return (
                  <div key={index} className={cx("img-sub-item")}>
                    <img
                      src="https://sieuthibanve.com/upload/images/202202/151617-products-2021-11-30-1638234751-pc2.png"
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <hr className={cx("hr")} />
          <div className={cx("specifications")}>
            <div className={cx("title")}>Thông số kỹ thuật</div>
            <div className={cx("table-detail")}>
              <table className={cx("table-left")}>
                <tbody>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FiLayers className={cx("icon")} />
                        <span className={cx("text")}>Số tầng</span>
                      </div>
                    </th>
                    <td className={cx("text")}>3</td>
                  </tr>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FaRegSquare className={cx("icon")} />
                        <span className={cx("text")}>Diện tích</span>
                      </div>
                    </th>
                    <td className={cx("text")}>247m2</td>
                  </tr>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FiSmartphone className={cx("icon")} />
                        <span className={cx("text")}>Chiều dài</span>
                      </div>
                    </th>
                    <td className={cx("text")}>16m</td>
                  </tr>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FiAirplay className={cx("icon")} />
                        <span className={cx("text")}>Phong cách</span>
                      </div>
                    </th>
                    <td className={cx("text")}>Mái bằng</td>
                  </tr>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FiInfo className={cx("icon")} />
                        <span className={cx("text")}>Thiết kế bởi</span>
                      </div>
                    </th>
                    <td className={cx("text")}>WanFit</td>
                  </tr>
                </tbody>
              </table>
              <table className={cx("table-right")}>
                <tbody>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FiLayout className={cx("icon")} />
                        <span className={cx("text")}>Phòng ngủ</span>
                      </div>
                    </th>
                    <td className={cx("text")}>4</td>
                  </tr>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FiCreditCard className={cx("icon")} />
                        <span className={cx("text")}>Mặt tiền</span>
                      </div>
                    </th>
                    <td className={cx("text")}>5m</td>
                  </tr>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FiHome className={cx("icon")} />
                        <span className={cx("text")}>Loại hình</span>
                      </div>
                    </th>
                    <td className={cx("text")}>Nhà phố</td>
                  </tr>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FiDollarSign className={cx("icon")} />
                        <span className={cx("text")}>Chi phí</span>
                      </div>
                    </th>
                    <td className={cx("text")}>Liên hệ</td>
                  </tr>
                  <tr>
                    <th>
                      <div className={cx("two-row")}>
                        <FiHash className={cx("icon")} />
                        <span className={cx("text")}>Mã SP</span>
                      </div>
                    </th>
                    <td className={cx("text")}>BV2038</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={cx("contact")}>
          <form className={cx("contact-form")}>
            <div className={cx("title")}>Liên hệ đặt hàng</div>
            {/* name */}
            <div className={cx("block-input")}>
              <label className={cx("bl-label")} htmlFor="name">
                Tên của bạn
              </label>
              <input
                className={cx("bl-input")}
                id="name"
                type="text"
                placeholder="Nhập tên của bạn"
              />
            </div>
            {/* phone */}
            <div className={cx("block-input")}>
              <label className={cx("bl-label")} htmlFor="phone">
                Số điện thoại
              </label>
              <input
                className={cx("bl-input")}
                id="phone"
                type="text"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className={cx("two-select")}>
              {/* province/city */}
              <div className={cx("block-select", "mr-12")}>
                <label className={cx("bl-label")} htmlFor="province-city">
                  Tỉnh/Thành phố *
                </label>
                <div className={cx("bl-down")}>
                  <select className={cx("bl-select")} id="province-city">
                    <option>- chọn -</option>
                  </select>
                  <FaChevronDown className={cx("bl-icon")} />
                </div>
              </div>
              {/* district */}
              <div className={cx("block-select")}>
                <label className={cx("bl-label")} htmlFor="district">
                  Quận huyện *
                </label>
                <div className={cx("bl-down")}>
                  <select className={cx("bl-select")} id="district">
                    <option>- chọn -</option>
                  </select>
                  <FaChevronDown className={cx("bl-icon")} />
                </div>
              </div>
            </div>
            <div className={cx("sum-price")}>
              <div className={cx("sum")}>Tổng tiền:</div>
              <div className={cx("price")}>6,990,000 ₫</div>
            </div>
            <p className={cx("note")}>Bạn chưa cần phải thanh toán tiền ở bước này</p>
            <button className={cx("btn", "cl-primary")}>Liên hệ đặt hàng</button>
            <button className={cx("btn", "cl-white")}>
              <FaRegHeart className={cx("icon")} /> Thêm vào hồ sơ yêu thích
            </button>
          </form>
        </div>
      </div>
      <div className={cx("detail-product")}>
        <div className={cx("title")}>Chi tiết sản phẩm</div>
        <div className={cx("block-img")}>
          {arrDemo2.map((arr, index) => {
            return (
              <img
                key={index}
                className={cx("detail-img")}
                src="https://sieuthibanve.com/upload/images/202112/181508-bv2038---01.jpg"
                alt=""
                onClick={() => handleShowImg(arr)}
              />
            );
          })}
        </div>
        {overflow && (
          <div className={cx("overflow-img")}>
            <IoIosClose className={cx("overflow-close")} onClick={handleCloseImg} />
            <img className={cx("imgSrc")} src="" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeDetail;
