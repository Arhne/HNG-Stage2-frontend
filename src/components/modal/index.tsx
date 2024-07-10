import React from "react";
import styles from "./styles.module.scss";

interface IModal {
  cartItem: string;
  onClickClose: () => void;
}

export const Modal = ({
  cartItem,
  onClickClose,
}: IModal) => {
  return (
    <div className={styles.DeleteModal}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.subTitle}>
           Sucessfully added <span>{cartItem}</span> to cart.
          </p>
        </div>
        <div className={styles.buttonFlex}>
          <button className={styles.closeButton} onClick={onClickClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
