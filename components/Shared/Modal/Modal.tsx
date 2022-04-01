import React, { ReactNode } from "react";
import classnames from "classnames";
import Close from "../../../assets/img/home/close.svg";
import useLockScroll from "../../../hooks/useLockScroll";
import Portal from "../Portal/Portal";
import styles from "./Modal.module.scss";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  isCloseButtonHidden?: boolean;
  verticalCentered?: boolean;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  useLockScroll(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.root}>
        <div className={classnames(styles.modal)}>
          <div className={styles.header}>
            <Close className={styles.closeIcon} onClick={onClose} />
          </div>
          <div>{children}</div>
        </div>
      </div>

      <div onClick={onClose} className={styles.overlay} />
    </Portal>
  );
};

export default Modal;
