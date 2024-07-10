import React from "react";
import styles from "./styles.module.scss";
import { CustomInputNumber, CustomInput, CustomPhoneInput } from "../custom-input";


export const BillingInfo = () => {
  return (
    <div className={styles.billing}>
      <div className={styles.col}>
        <CustomInput placeholder="First Name" labelText="Full Name" />
        <CustomInput placeholder="Last Name" />
      </div>

      <CustomInput labelText="Address" />
      <div className={styles.col}>
      <CustomInput labelText="Email" />
      <CustomPhoneInput labelText="Phone" />
      </div>

      <div className={styles.col}>
        <CustomInput placeholder="First Name" labelText="Full Name" />
        <CustomInput placeholder="Last Name" />
      </div>

      <CustomInput labelText="Cardholder Name" />


  
      <CustomInputNumber labelText="Card Number"/>
     
      <CustomInput labelText="Cardholder Name" />

      <div className={styles.col}>
      <CustomInput labelText="Expiry Date" placeholder="month" />
      <CustomInput placeholder="year" />
      <CustomInput labelText="CVV" />

      </div>
    </div>
  );
};
