import React, { ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
  children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default Heading;
