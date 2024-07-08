import React from "react";
import styles from "./button.module.scss";


interface ButtonProp {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text?: string;
  className?: string;
  isLoading?: boolean;
  style?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

export const Button = ({ onClick, text, isLoading, style, disabled, type, ...rest }: ButtonProp) => {
  return (
    <button className={`${styles.ButtonComp} ${style}`} onClick={onClick} disabled={disabled} type={type} {...rest}>
      {/* {isLoading ? (
        <span className={styles.loader}>
          <ImSpinner9 className={styles.loader} size={25} />
        </span>
      ) : (
        text
      )} */}
      {text}
    </button>
  );
};
