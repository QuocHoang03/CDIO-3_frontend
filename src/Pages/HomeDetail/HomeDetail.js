import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./HomeDetail.module.scss";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa";
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
import ContactOrder from "../../layout/components/ContactOrder/ContactOrder";

const cx = classNames.bind(styles);

const HomeDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const arrDemo = [1, 1, 1, 1, 1, 1, 1, 1, 1];
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
          <ContactOrder />
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
