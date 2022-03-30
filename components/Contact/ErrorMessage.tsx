import React, { ReactNode } from "react";
import styles from './ErrorMessage.module.scss';

type ErrorMessageProps = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <div className={styles.errorMessage}>{children}</div>;
};

export default ErrorMessage;
