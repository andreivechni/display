import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import { routes } from "../../../constants";
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
          <Link href={routes.home}>
            <a>Home</a>
          </Link>{" "}
          /{" "}
          <Link href={routes.about}>
            <a>About</a>
          </Link>{" "}
          /{" "}
          <Link href={routes.work}>
            <a>Work</a>
          </Link>{" "}
          /{" "}
          <Link href={routes.contact}>
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
