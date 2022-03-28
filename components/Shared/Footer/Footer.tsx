import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import { ROUTES } from "../../../constants";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.clickBait}>
        <span className={styles.clickBaitMessage}>
          are you ready to be blown away?
        </span>
        <Button>click here to find out</Button>
      </div>
      <div className={styles.footer}>
        <div className={styles.credentials}>
          Copyright 2013 Display. All Rights Reserved.
        </div>
        <div className={styles.nav}>
          <Link href={ROUTES.home}>
            <a>Home</a>
          </Link>{" "}
          /{" "}
          <Link href={ROUTES.about}>
            <a>About</a>
          </Link>{" "}
          /{" "}
          <Link href={ROUTES.work}>
            <a>Work</a>
          </Link>{" "}
          /{" "}
          <Link href={ROUTES.contact}>
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
