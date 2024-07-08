"use client";
import React from "react";
import styles from "./my-cart.module.scss";
import Image from "next/image";
import { Minus, Plus } from "../../../component/icons";
import { useState } from "react";
import { Button } from "@/components";

const myCart = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.cart}>
      <div className={styles.col}>
        <div className={styles.cartbag1}>
          <Image
            src="/images/cartbag1.png"
            alt="bag image"
            width={220}
            height={280}
          />
        </div>

        <div className={styles.description}>
          <p className={styles.bagName}>Prada Bag</p>
          <p className={styles.bagPrice}>#1000</p>
          <p className={styles.bagdesc}>
            A sleek, high profile and elegant Bag that compliment your outfit
            and give you and elegant outlook for all your event
          </p>

          <div className={styles.color}>
            <p>Select color</p>
            <div className={styles.flex}>
              <div className={styles.red}></div>
              <div className={styles.blue}></div>
              <div className={styles.black}></div>
              <div className={styles.white}></div>
              <div className={styles.orange}></div>
            </div>
          </div>

          <div className={styles.flex}>
            <Minus
              onClick={() => {
                setCount(count - 1);
              }}
              className={styles.plus}
            />
            <p>{count}</p>

            <Plus
              onClick={() => {
                setCount(count + 1);
              }}
              className={styles.plus}
            />
          </div>
        </div>

        <div className={`${styles.flex} ${styles.showcase}`}>
          <div>
            {" "}
            <Image
              src="/images/bagblue.png"
              alt="bag image"
              width={180}
              height={180}
            />
          </div>
          <div>
            {" "}
            <Image
              src="/images/bagred.png"
              alt="bag image"
              width={180}
              height={180}
            />
          </div>
        </div>

        <div className={styles.flex}>
            <Minus
              onClick={() => {
                setCount(count - 1);
              }}
              className={styles.plus}
            />
            <p>{count}</p>

            <Plus
              onClick={() => {
                setCount(count + 1);
              }}
              className={styles.plus}
            />
          </div>

          <div>
            <Button text="CHECKOUT" style={styles.fillBtn}/>
          </div>
      </div>
    </div>
  );
};

export default myCart;
