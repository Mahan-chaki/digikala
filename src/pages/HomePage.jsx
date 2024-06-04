import Footer from "../layout/Footer";
import Header from "../layout/Header";
import styles from "./HomePage.module.css";
import story1 from "../public/footerlogo2.webp";
import mainimg from "../public/0f4a9c07a249f8a5bf4527e5b2fe94de00cc42e1_1715872780.webp";
import homeimage from "../public/afb3c938fd3149d7587b59919bfc500a461693a6_1709571657.png";
import homeimage2 from "../public/787a330f980d0cb7583d5d3316a868757535ea79_1708970899.png";
import homeimage3 from "../public/625d8883f37944f3f0c4af5fe39435600931ab22_1713343293.png";
import homeimage4 from "../public/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png";
import bigimage1 from "../public/8c1dee04442635b8d0dc50aa978205c9315276a0_1716546615.webp";
import bigimage2 from "../public/63d98c4ad3dd6a2b3083223f0b7bfd9eafee3ba3_1716624041.webp";
import daste1 from "../public/daste/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1692600876.png";
import daste2 from "../public/daste/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1692600287.png";
import daste3 from "../public/daste/3582bbed0a53318c2332d2c79b051b226f02a3bb_1692600677.png";
import daste4 from "../public/daste/5795b31a635f1e23df96a908c009f31744ede38f_1692600481.png";
import daste5 from "../public/daste/a8579f44936c7fdff292b005a5d927601cb67cb9_1714224510.jpg";
import daste6 from "../public/daste/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1692600155.png";
import daste7 from "../public/daste/c16b7dff700a9d99880174c32ec233d20ddb531c_1703057953.png";
import daste8 from "../public/daste/d17e98a20e1681c7bac5af856aa9552250ec9a96_1710666504.png";
import image41 from "../public/daste/1dc2124b00b236f04685fd583e315f7d3940414d_1716566032.webp";
import image42 from "../public/daste/c136d35001896bb847c6ca90246811e09d8e8a3c_1702498334.webp";
import image43 from "../public/daste/d051ffd5990a9964da1ee9c9d1c715cd69dd0fcd_1716565911.webp";
import image44 from "../public/daste/d62693807295a8f8fdf913dbf7250b9d1ef6377d_1716621247.webp";

function HomePage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.stories}>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>تبلت و گوشی موبایل</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>سفر در اتاق تحریر</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>ماشین پرنده</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>تبلت و گوشی موبایل</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>ناتینگ فون 2</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>تبلت و گوشی موبایل</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>دیجی‌ پلاس</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>تبلت و گوشی موبایل</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>کفش و کتانی پاما</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>تبلت و گوشی موبایل</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>تبلت و گوشی موبایل</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>تبلت و گوشی موبایل</span>
          </div>
          <div className={styles.story}>
            <img src={story1} className={styles.storylogo} />
            <span>ایران را سراسر اباد کنیم</span>
          </div>
        </div>
        <div>
          <img src={mainimg} className={styles.mainimg} />
        </div>
        <div className={styles.homeicons}>
          <div className={styles.homeicon}>
            <img src={homeimage} />
            <span>حراج سوپر مارکت</span>
          </div>
          <div className={styles.homeicon}>
            <img src={homeimage4} />
            <span>دیجی موبایل</span>
          </div>
          <div className={styles.homeicon}>
            <img src={homeimage} />
            <span>ارزان ترین ها</span>
          </div>
          <div className={styles.homeicon}>
            <img src={homeimage3} />
            <span>حراجی</span>
          </div>
          <div className={styles.homeicon}>
            <img src={homeimage} />
            <span>با ما بهترینی</span>
          </div>
          <div className={styles.homeicon}>
            <img src={homeimage2} />
            <span>دیجی جت</span>
          </div>
          <div className={styles.homeicon}>
            <img src={homeimage} />
            <span>ارسال رایگان</span>
          </div>
        </div>
        <div className={styles.bigimages}>
          <img src={bigimage1} />
          <img src={bigimage2} />
        </div>
        <div className={styles.dastebandi}>
          <p>خرید بر اساس دسته بندی</p>
          <div className={styles.dasteimg}>
            <div>
              <img src={daste1} />
              <span>آرایشی </span>
            </div>
            <div>
              <img src={daste2} />
              <span>دیجیتال</span>
            </div>
            <div>
              <img src={daste3} />
              <span>تحریر</span>
            </div>
            <div>
              <img src={daste4} />
              <span>پوشاک</span>
            </div>
            <div>
              <img src={daste5} />
              <span>دارو</span>
            </div>
            <div>
              <img src={daste6} />
              <span>موبایل</span>
            </div>
            <div>
              <img src={daste7} />
              <span>خانگی</span>
            </div>
            <div>
              <img src={daste8} />
              <span>زیورالات</span>
            </div>
          </div>
        </div>
        <div className={styles.image40}>
          <img src={image41} />
          <img src={image42} />
          <img src={image43} />
          <img src={image44} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
