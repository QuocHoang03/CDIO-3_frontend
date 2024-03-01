import React from "react";
import classNames from "classnames/bind";
import styles from "./ProductItemBlock.module.scss";
import { Link } from "react-router-dom";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";

const cx = classNames.bind(styles);

const ProductItemBlock = () => {
  return (
    <Link to={"/111"} className={cx("product-item-block")}>
      <div className={cx("heart")}>
        <FaRegHeart className={cx("heart-icon-empty")} />
        {/* <FaHeart className={cx("heart-icon-fill")} /> */}
      </div>
      <div className={cx("avatar")}>
        <img
          className={cx("img")}
          src="https://sieuthibanve.com/thumb/images/202202/151617-products-2021-11-30-1638234751-pc3.png"
          alt=""
        />
      </div>
      <div className={cx("content")}>
        <div className={cx("check-design")}>
          <IoShieldCheckmarkSharp className={cx("check-icon")} />
          Thiết kế bởi WanFit
        </div>
        <div className={cx("title")}>Mẫu nhà phố 2 tầng 9x18m 4 phòng ngủ</div>
        <div className={cx("information")}>
          <span className={cx("information")}>Số tầng 2</span>
          <span className={cx("information", "center")}>Phòng ngủ 4</span>
          <span className={cx("information")}>Diện tích 262 m2</span>
        </div>
        <div className={cx("btn-price")}>
          <button className={cx("btn")}>
            Khám Phá
            <MdOutlineArrowOutward className={cx("btn-icon")} />
          </button>
          <div className={cx("price")}>6,990,000 ₫</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItemBlock;
