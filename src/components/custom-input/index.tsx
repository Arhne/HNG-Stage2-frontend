"use client"
import React, { useState } from "react";
import styles from "./custom-input.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";

interface IFormInput {
  placeholder?: string;
  labelText?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  type?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
}

interface IFormInputNumber {
  placeholder?: string;
  labelText?: string;
  value?: number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  disabled?: boolean;
}

// interface ICustomPhoneInput {
//   placeholder?: string;
//   customStyle?: object;
//   value: Value;
//   labelText?: string;
//   errorMessage?: string;
//   onChange: (e: string) => void | undefined;
// }

export const CustomInput = ({
  placeholder,
  labelText,
  errorMessage,
  onChange,
  ...rest
}: IFormInput) => {
  return (
    <div className={styles.InputComp}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export const CustomPasswordInput = ({
  placeholder,
  labelText,
  errorMessage,
  ...rest
}: IFormInput) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.InputComp}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <div className={styles.passwordInputWrap}>
        <input
          type={showPassword ? "text" : "password"}
          className={styles.passwordInput}
          placeholder={placeholder}
          {...rest}
        />
        <button
          className={styles.iconButton}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export const CustomInputNumber = ({
  placeholder,
  labelText,
  errorMessage,
  onChange,
  ...rest
}: IFormInputNumber) => {
  return (
    <div className={styles.InputComp}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <div className={styles.new}>
      <IoCardOutline size={30}/>
      <input
        type="number"
        className={styles.overide}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      </div>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};


export const CustomPhoneInput = ({
  placeholder,
  labelText,
  errorMessage,
  onChange,
  ...rest
}: IFormInputNumber) => {
  return (
    <div className={styles.InputComp}>
      {labelText && <label className={styles.label}>{labelText}</label>}
     
     
      <input
        type="number"
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};