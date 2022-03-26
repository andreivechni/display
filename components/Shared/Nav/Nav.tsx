import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { routes } from "../../../constants";
import styles from "./Nav.module.scss";

type NavProps = {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
};

const Nav = ({ isShown, setIsShown }: NavProps) => {
  const { pathname } = useRouter();
  return (
    <nav className={cn(styles.root, { [styles.hidden]: !isShown })}>
      <Link href={routes.home}>
        <a
          onClick={() => setIsShown(false)}
          className={cn(styles.item, {
            [styles.active]: routes.home === pathname,
          })}
        >
          Home
        </a>
      </Link>
      <Link href={routes.about}>
        <a
          onClick={() => setIsShown(false)}
          className={cn(styles.item, {
            [styles.active]: routes.about === pathname,
          })}
        >
          About
        </a>
      </Link>
      <Link href={routes.work}>
        <a
          onClick={() => setIsShown(false)}
          className={cn(styles.item, {
            [styles.active]: routes.work === pathname,
          })}
        >
          Work
        </a>
      </Link>
      <Link href={routes.contact}>
        <a
          onClick={() => setIsShown(false)}
          className={cn(styles.item, {
            [styles.active]: routes.contact === pathname,
          })}
        >
          Contact
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
