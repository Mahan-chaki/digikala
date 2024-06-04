import styles from "./Footer.module.css";
import digi from "../public/footer/digi.svg";
import { IoIosArrowUp } from "react-icons/io";

import op1 from "../public/footer/express-delivery.svg";
import op2 from "../public/footer/cash-on-delivery.svg";
import op3 from "../public/footer/support.svg";
import op4 from "../public/footer/days-return.svg";
import op5 from "../public/footer/original-products.svg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import footerdigi from "../public/footer/footerlogo2.webp";
import bazar from "../public/footer/coffe-bazzar.svg";
import mayket from "../public/footer/myket.svg";
import sibapp from "../public/footer/sib-app.svg";
import more from "../public/footer/More.svg";
import namad1 from "../public/footer/rezi.webp";
import namad2 from "../public/footer/kasbokar.webp";
import namad3 from "../public/footer/logo.png";
import footerLogo1 from "../public/footer/jet.svg";
import footerLogo2 from "../public/footer/digiplus.svg";
import footerLogo3 from "../public/footer/smartech.svg";
import footerLogo4 from "../public/footer/digiMehr.svg";
import footerLogo5 from "../public/footer/digimag.svg";
import footerLogo6 from "../public/footer/digify.svg";
import footerLogo7 from "../public/footer/magnet.svg";
import { Navigate } from "react-router-dom";

function Footer() {
  const upHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.digiLogo}>
        <img src={digi} />
        <button onClick={upHandler}>
          بازگشت به بالا
          <IoIosArrowUp className={styles.arrowUp} />
        </button>
      </div>
      <div className={styles.tele}>
        <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
        <span>|</span>
        <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
        <span>|</span>
        <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
      </div>
      <div className={styles.options}>
        <img src={op1} />
        <img src={op2} />
        <img src={op3} />
        <img src={op4} />
        <img src={op5} />
      </div>
      <div className={styles.optionsText}>
        <p> ‌امکان تحویل اکسپرس</p>
        <p>امکان پرداخت در محل</p>
        <p>هرروز هفته،24ساعته</p>
        <p>هفت روز ضمانت بازگشت کالا</p>
        <p>ضمانت اصل بودن کالا</p>
      </div>
      <div className={styles.aboutUs}>
        <div>
          <ul>
            <p>با دیجی‌کالا</p>
            <li>اتاق خبر دیجی‌کالا</li>
            <li>فروش در دیجی‌کالا</li>
            <li>فرصا های شغلی</li>
            <li>گزارش تخلف در دیجی‌کالا</li>
            <li>تماس با دیجی‌کالا</li>
            <li>درباره دیجی‌کالا</li>
          </ul>
        </div>
        <div>
          <ul>
            <p>خدمات مشتریان</p>
            <li>پاسخ به پرسش های متداول</li>
            <li>رویه های بازگرداندن کالا</li>
            <li>شرایط استفاده</li>
            <li>حریم خصوصی</li>
            <li>گزارش باگ</li>
          </ul>
        </div>
        <div>
          <p>راهنمای خرید از دیجی‌کالا</p>
          <li>نحوه ثبت سفارش</li>
          <li>رویه ارسال سفارش</li>
          <li>شیوه های پرداخت</li>
        </div>
        <div>
          <p>همراه ما باشید!</p>
          <div className={styles.socialLogos}>
            <FaInstagram className={styles.socialLogo} />
            <FaTwitter className={styles.socialLogo} />
            <FaLinkedin className={styles.socialLogo} />
            <SiAparat className={styles.socialLogo} />
          </div>
          <p>با ثبت ایمیل، از تخفیف ها باخبر شوید</p>
          <div>
            <input type="text" placeholder="ایمیل شما" />
            <button>ثبت</button>
          </div>
        </div>
      </div>
      <div className={styles.digiApp}>
        <img src={footerdigi} />
        <p>دانلود اپلیکیشن دیجی‌کالا</p>
        <img src={bazar} />
        <img src={mayket} />
        <img src={sibapp} />
        <img src={more} className={styles.more} />
      </div>
      <div className={styles.footer3}>
        <div className={styles.largText}>
          <div>
            <h3>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h3>
            <p>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
          </div>
          <img src={namad1} className={styles.namad} />
          <img src={namad2} className={styles.namad} />
          <img src={namad3} className={styles.namad} />
        </div>
        <p className={styles.copy}>
          رای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </p>
      </div>
      <div>
        <div className={styles.footerLogos}>
          <img src={footerLogo1} className={styles.footerLogo} />
          <img src={footerLogo2} className={styles.footerLogo} />
          <img src={footerLogo3} className={styles.footerLogo} />
          <img src={footerLogo4} className={styles.footerLogo} />
          <img src={footerLogo5} className={styles.footerLogo} />
          <img src={footerLogo6} className={styles.footerLogo} />
          <img src={footerLogo7} className={styles.footerLogo} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
