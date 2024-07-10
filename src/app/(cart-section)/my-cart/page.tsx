"use client";
import React from "react";
import styles from "./my-cart.module.scss";
import Image from "next/image";
import { Minus, Plus } from "../../../../component/icons";
import { useState } from "react";
import { Button } from "@/components";
import { Select } from 'antd';
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

const MyCart = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  return (
    <div className={styles.cart}>
      <div className={styles.col}>
        <div className={styles.cartbag1}>
          <Image
            src="/images/cartbag1.png"
            alt="bag image"
            width={300}
            height={350}
          />
        </div>

        <div className={styles.description}>
          <p className={styles.bagName}>Prada Bag</p>
          <p className={styles.bagPrice}>#100,000</p>
          <p className={styles.bagdesc}>
            A sleek, high profile and elegant Bag that compliment your outfit
            and give you and elegant outlook for all your event
          </p>

          <Select
            defaultValue="More Product"
            style={{ width: 150 }}
            onChange={handleChange}
            options={[{ value: 'More Product', label: 'More Product' },]}
          />

          <div className={styles.color}>
            <p>Select color</p>
            <div className={styles.colorselector}>
              <div className={styles.red}></div>
              <div className={styles.blue}></div>
              <div className={styles.black}></div>
              <div className={styles.white}></div>
              <div className={styles.orange}></div>
            </div>
          </div>

          <div className={styles.flexdesc}>
            <p className={styles.bagdesc}>Description</p><IoMdArrowForward size={20}/><p className={styles.bagdesc}>Medium size</p>
          </div>
          <div className={styles.flexdesc}>
            <p className={styles.bagdesc}>Free shipping</p><IoMdArrowForward size={20}/><p className={styles.bagdesc}>Free Delivery</p>
          </div>
        </div>

        <div className={`${styles.flex} ${styles.showcase}`}>
          <div>
            {" "}
            <Image
              src="/images/bagblue.png"
              alt="bag image"
              width={120}
              height={120}
            />
          </div>
          <div>
            {" "}
            <Image
              src="/images/bagred.png"
              alt="bag image"
              width={120}
              height={120}
            />
          </div>
        </div>


     <div className={styles.section}>
        <div className={styles.flex}>
          <p className={`${styles.color} ${styles.bagdesc}`}>Qty</p>
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

          <div>
            <Button text="CHECKOUT" type="button"
            style={styles.fillBtn}
            onClick = {() => router.push(`my-cart/checkout`)}
            />
            
          </div>
      </div>
    </div>
    </div>
  );
};

export default MyCart;
