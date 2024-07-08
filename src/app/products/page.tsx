import React from "react";
import styles from "./style.module.scss";
import { bags } from "./data";
import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io";
import { Rating } from "@/assets";
import { IoIosSearch } from "react-icons/io";

const products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.caption}>
        <h3>Best Selling</h3>
        <p>
          Select from Our of quality and Trending bags tailored to your Elegant
          taste.
        </p>
      </div>
      <div className={styles.search}>
      <IoIosSearch size={30}/>
        <input type="search" name="" id="" placeholder="Search" className={styles.searchInput}/>
      </div>

      <div className={styles.col}>
        {bags.filter((item, index)=> index < 3).map((bag) => (
          <div key={bag.id} className={styles.bestselling}>
            <div className={styles.flexEnd}>
            <IoIosHeartEmpty />
            </div>
            <div className={styles.center}> 
            <Image src={bag.pic} alt="bag image" width={120} height={120} />
            <p>{bag.brand}</p>
            </div>
            
            <div className={styles.rating}>
              <p> 11.6K Reveiws</p>
              <Rating />
            </div>
          </div>
        ))}
      </div>

      <p>Discover For You</p>
      <div className={styles.col}>
        {bags.slice(3, 6).map((bag) => (
          <div key={bag.id} className={styles.bestselling}>
            <div className={styles.flexEnd}>
            <IoIosHeartEmpty />
            </div>
            <div className={styles.center}> 
            <Image src={bag.pic} alt="bag image" width={120} height={120}/>
            <p>{bag.brand}</p>
            </div>
            <div className={styles.rating}>
              <p> 11.6K Reveiws</p>
              <Rating />
            </div>
          </div>
        ))}
      </div>

      <p>You May Like This</p>
      <div className={styles.col}>
        {bags.slice(6, 9).map((bag) => (
          <div key={bag.id} className={styles.bestselling}>
            <div className={styles.flexEnd}>
            <IoIosHeartEmpty />
            </div>
            <div className={styles.center}> 
            <Image src={bag.pic} alt="bag image" width={120} height={120}/>
            <p>{bag.brand}</p>
            </div>
            <div className={styles.rating}>
              <p> 11.6K Reveiws</p>
              <Rating />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default products;
