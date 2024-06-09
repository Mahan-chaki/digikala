import styles from "./SendOtp.module.css";
import logo from "../public/logo.svg";
import toast from "react-hot-toast";

function SendOtp({ setStep, mobile, setMobile }) {
  const enterHandler = () => {
    const regex = /09\d{9}/;
    const result = regex.test(mobile);
    console.log(result);
    result ? setStep(2) : toast.error("شماره موبایل خود را درست وارد کنید");
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.img} />
      <p className={styles.enter}>ورود | ثبت نام</p>
      <span className={styles.salam}>سلام!</span>
      <span className={styles.salam2}>لطفا شماره موبایل خود را وارد کنید</span>
      <input
        type="text"
        value={mobile}
        maxLength={11}
        onChange={(e) => setMobile(e.target.value)}
        onTouchStart={(event) => event.preventDefault()}
      />
      <span className={styles.span3}>لطفا این قسمت را خالی نگذارید</span>
      <button onClick={enterHandler}>ورود</button>
      <p className={styles.valid}>
        ورود شما به معنای پذیرش شرایط دیجیکالا و قوانین حریم خصوصی است
      </p>
    </div>
  );
}

export default SendOtp;
