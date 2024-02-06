import classNames from "classnames/bind";
import { AiOutlineMail } from "react-icons/ai";

//
import styles from "./SendEmail.module.scss";

const cx = classNames.bind(styles);

const SendEmail = () => {
  return (
    <div className={cx("footer-new-letter-bg")}>
      <div className={cx("footer-new-letter")}>
        <div className={cx("heading-letter")}>Liên hệ với chúng tôi</div>
        <form className={cx("send-email")}>
          {/* Họ và tên */}
          <div className={cx("email-letter")}>
            <label htmlFor="name" className={cx("email-letter-title")}>
              Họ và tên
            </label>
            <input id="name" className={cx("email-letter-input")} name="name" />
          </div>
          {/* Số điện thoại */}
          <div className={cx("email-letter")}>
            <label htmlFor="phone" className={cx("email-letter-title")}>
              Số điện thoại
            </label>
            <input id="phone" className={cx("email-letter-input")} name="phone" />
          </div>
          {/* Diện tích đất */}
          <div className={cx("email-letter")}>
            <label htmlFor="landArea" className={cx("email-letter-title")}>
              Diện tích đất
            </label>
            <input id="landArea" className={cx("email-letter-input")} name="landArea" />
          </div>
          {/* Ngân sách */}
          <div className={cx("email-letter")}>
            <label className={cx("email-letter-title")}>Ngân sách</label>
            <div className={cx("budget-content")}>
              {/* Từ 1.3 - 1.5 tỷ */}
              <div className={cx("budget-block")}>
                <input id="budget-1" type="checkbox" className={cx("budget-input")} name="budget" />
                <label htmlFor="budget-1" className={cx("budget-title")}>
                  Từ 1.3 - 1.5 tỷ
                </label>
              </div>
              {/* Từ 1.5 - 2 tỷ */}
              <div className={cx("budget-block")}>
                <input id="budget-2" type="checkbox" className={cx("budget-input")} name="budget" />
                <label htmlFor="budget-2" className={cx("budget-title")}>
                  Từ 1.5 - 2 tỷ
                </label>
              </div>
              {/* Từ 2 - 2.5 tỷ */}
              <div className={cx("budget-block")}>
                <input id="budget-3" type="checkbox" className={cx("budget-input")} name="budget" />
                <label htmlFor="budget-3" className={cx("budget-title")}>
                  Từ 2 - 2.5 tỷ
                </label>
              </div>
              {/* Trên 2.5 tỷ */}
              <div className={cx("budget-block")}>
                <input id="budget-4" type="checkbox" className={cx("budget-input")} name="budget" />
                <label htmlFor="budget-4" className={cx("budget-title")}>
                  Trên 2.5 tỷ
                </label>
              </div>
            </div>
          </div>
          {/* Lời nhắn */}
          <div className={cx("email-letter")}>
            <label htmlFor="message" className={cx("email-letter-title")}>
              Lời nhắn
            </label>
            <textarea
              rows={3}
              id="message"
              className={cx("email-letter-input", "input-area")}
              name="message"
            />
          </div>
          <button htmlFor="" className={cx("email-letter-register")}>
            Gửi cho chúng tôi
            <AiOutlineMail className={cx("email-letter-register-icon")} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
