import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Image from "next/image";
import logo from "../../../assets/img/logo.png";
import Link from "next/link";
import Twitter from "../../../assets/img/socials/twitter.svg";
import Facebook from "../../../assets/img/socials/facebook.svg";
import Rss from "../../../assets/img/socials/rss.svg";
import Pinterest from "../../../assets/img/socials/pinterest.svg";
import Google from "../../../assets/img/socials/google.svg";
import Dribbble from "../../../assets/img/socials/dribbble.svg";
import Bars from "../../../assets/img/bars-solid.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  useEffect(() => {
    if (isNavShown) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isNavShown]);

  return (
    <div className={styles.root}>
      <div className={styles.subheader}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={logo} alt="" />
            <span className={styles.logoText}>display</span>
          </div>
        </Link>
        <div className={styles.social}>
          <Link href="#">
            <a>
              <Twitter className={styles.twitter}></Twitter>
            </a>
          </Link>
          <Link href="#">
            <a>
              <Facebook className={styles.facebook}></Facebook>
            </a>
          </Link>
          <Link href="#">
            <a>
              <Rss className={styles.rss}></Rss>
            </a>
          </Link>
          <Link href="#">
            <a>
              <Pinterest className={styles.pinterest}></Pinterest>
            </a>
          </Link>
          <Link href="#">
            <a>
              <Google className={styles.google}></Google>
            </a>
          </Link>
          <Link href="#">
            <a>
              <Dribbble className={styles.dribbble}></Dribbble>
            </a>
          </Link>
        </div>
        <Bars
          className={styles.menuIcon}
          onClick={() => setIsNavShown(!isNavShown)}
        />
      </div>
      <Nav isShown={isNavShown} setIsShown={setIsNavShown} />
    </div>
  );
};

export default Header;
