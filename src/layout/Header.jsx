import styles from "./Header.module.css";
import headerImage from "../public/431577c2eff723beafad53ad892f983ed850fc4e_1715027101.webp";
import logo from "../public/logo.svg";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { TbDiscount } from "react-icons/tb";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";
import { IoEnterOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={headerImage} className={styles.image} />
        <div className={styles.logo}>
          <img src={logo} />
          <button className={styles.searchButton}>
            <IoIosSearch className={styles.search} />
          </button>
          <input
            type="text"
            placeholder="جستجو"
            className={styles.input}></input>
          <Link to={"/auth"} className={styles.enter}>
            <IoEnterOutline className={styles.enterLogo} />
            <span>ورود | ثبت نام</span>
          </Link>
          <span className={styles.span}>|</span>
          <Link className={styles.shops}>
            <LuShoppingCart className={styles.shop} />
          </Link>
        </div>
        <div className={styles.navbar}>
          <ul className={styles.nav}>
            <li>
              <IoIosMenu className={styles.navbarLogo} />
              دسته بندی
            </li>
            <span>|</span>
            <li>
              <TbDiscount className={styles.navbarLogo} />
              شگفت انگیز 
            </li>
            <li>
              <FaShoppingBasket className={styles.navbarLogo} />
              سوپر مارکت
            </li>
            <li>
              <MdOutlineCardGiftcard className={styles.navbarLogo} />
              کارت هدیه
            </li>
            <li>
              <FaFire className={styles.navbarLogo} />
              پرفروش‌ترین‌ها
            </li>
            <li>
              <BiSolidDiscount className={styles.navbarLogo} />
            تخفیف‌ها
            </li>
            <span>|</span>
            <li>سوالی دارید؟</li>
            <li >در دیجیکالا بفروشید!</li>
            <li className={styles.ersal}>
            ارسال رایگان با پلاس
            </li>
          </ul>
          <button className={styles.locButton}>
            <CiLocationOn />
            ارسال به مازندران، رامسر
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
