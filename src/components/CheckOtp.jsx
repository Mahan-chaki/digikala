import styles from "./CheckOtp.module.css";
import logo from "../public/logo.svg";
import Timer from "./Timer";
import { FaArrowLeft } from "react-icons/fa6";

function CheckOtp({ mobile, setStep }) {
  return (
    <div className={styles.container}>
      <FaArrowLeft className={styles.backarrow} onClick={() => setStep(1)} />
      <img src={logo} className={styles.img} />
      <p className={styles.enter}>کد تایید را وارد کنید</p>
      <span className={styles.span1}>کد تایید به شماره {mobile} ارسال شد</span>
      <input type="text" maxLength={5} />
      <button>تایید</button>
      <span className={styles.codeagain}>
        <Timer />
      </span>
    </div>
  );
}

export default CheckOtp;
