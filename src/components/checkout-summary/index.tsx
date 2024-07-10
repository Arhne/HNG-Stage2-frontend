"use client";
import React, { useState } from "react";
import { Button } from "@/components";
import Image from "next/image";
import styles from "./checkout.module.scss";
import { Minus, Plus } from "../../../component/icons";
import { useRouter } from "next/navigation";
import { CustomInput } from "@/components";
import { CouponModal } from "../modal";

export const CheckoutSummaryComp = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const [addCoupon, setAddCoupon] = useState(false);
  return (
    <div className={styles.summary}>
      <p className={styles.title}>Order Summary</p>

      <div className={styles.col}>
        <div className={styles.cartbag1}>
          <Image
            src="/images/cartbag1.png"
            alt="bag image"
            width={60}
            height={90}
          />
        </div>

<div className={styles.coldire}>
<p className={styles.bagName}>Prada Bag</p>
        <div className={styles.flex}>
          <p className={styles.bagdesc}>Qty</p>
          <Minus
            onClick={() => {
              setCount(count - 1);
            }}
            className={styles.plus}
          />
          <p className={styles.bagdesc}>{count}</p>

          <Plus
            onClick={() => {
              setCount(count + 1);
            }}
            className={styles.plus}
          />
        </div>
        </div>
      </div>

      <div className={styles.flexCoupon}>
        <CustomInput placeholder="Coupon code" labelText="Coupon code" />
        <Button type="button" text="Apply" onClick={() => setAddCoupon(true)} />
      </div>

      {addCoupon && <CouponModal onClickClose={() => setAddCoupon(false)} />}

      <div className={styles.section}>
      <div className={styles.footerPrices}>
                    <h3>Subtotal: #100000</h3>
                    <h3>Tax(After Discount): #0.00</h3>
                    <h3>Shooping Fee: #0.00 </h3>
                    <h2>Total: #100000</h2>

                </div>

        <div>
          <Button
            text={"Pay Now".toUpperCase()}
            type="button"
            style={styles.btn}
            // onClick={() => router.push(`my-cart/checkout`)}
          />
        </div>
      </div>
    </div>
  );
};
