"use client"
import React from "react";
import styles from "./style.module.scss";
import { listingMenu } from "@/components/data";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { usePathname } from "next/navigation";

const CategoryNav = () => {
  const pathname = usePathname();
  const isActive = (menu: string) => {
    return pathname === menu;
  };

  return (
    <div className={styles.category}>
      <div className={styles.caption}>
        <h3>Category</h3>
        {listingMenu.map((menu, index)=> <Link className={isActive(menu.href) ? `${styles.link}` : `${styles.Link}`} href={menu.href} key={index}>{menu.name.toUpperCase()}</Link>)}
      </div>
      <div className={styles.search}>
      <IoIosSearch size={30}/>
        <input type="search" name="" id="" placeholder="Search" className={styles.searchInput}/>
      </div>

      </div>

     
       
  );
};

export default CategoryNav;
