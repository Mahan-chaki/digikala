import React from "react";
import { Link } from "react-router-dom";
import styles from "./404.module.css";
import image from "../public/page-not-found.webp";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function PageNotFound() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <p>صفحه ای که دنبال آن بودید پیدا نشد!</p>
        <div>
          <Link to={"/"} className={styles.link}>
            صفحه اصلی
            <IoIosArrowBack className={styles.logo} />
          </Link>
        </div>
        <img src={image} alt="PageNotFound" />
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
