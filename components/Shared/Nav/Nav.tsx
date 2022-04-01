import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import { ROUTES } from "../../../constants";
import styles from "./Nav.module.scss";

type NavProps = {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

const Nav = ({ isShown, setIsShown }: NavProps) => {
  const { pathname } = useRouter();
  return (
    <nav className={classnames(styles.root, { [styles.hidden]: !isShown })}>
      <Link href={ROUTES.home}>
        <a
          onClick={() => setIsShown(false)}
          className={classnames(styles.item, {
            [styles.active]: ROUTES.home === pathname,
          })}
        >
          Home
        </a>
      </Link>
      <Link href={ROUTES.about}>
        <a
          onClick={() => setIsShown(false)}
          className={classnames(styles.item, {
            [styles.active]: ROUTES.about === pathname,
          })}
        >
          About
        </a>
      </Link>
      <Link href={ROUTES.work}>
        <a
          onClick={() => setIsShown(false)}
          className={classnames(styles.item, {
            [styles.active]: ROUTES.work === pathname,
          })}
        >
          Work
        </a>
      </Link>
      <Link href={ROUTES.contact}>
        <a
          onClick={() => setIsShown(false)}
          className={classnames(styles.item, {
            [styles.active]: ROUTES.contact === pathname,
          })}
        >
          Contact
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
