"use client";
import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { useRouter, usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { Button } from "../custom-button";
import { navLinks } from "./navlink"
import { IoMdClose } from "react-icons/io";
import { 
  BrandName, 
  MenuIcon,
  CartIcon,
} from "@/assets";

export const NavBar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 898px)" });
  const [mobileNav, setMobileNav] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (link: string) => {
    return pathname === link;
  };

  const handleMobileNav = () => {
    setMobileNav((prev) => !prev);
  };


  return (
    <div className={styles.Container}>
      {!isTabletOrMobile && (
        <div className={styles.Content}>
            <div className={styles.brand}><BrandName /></div>  
          <nav className={styles.NavBody}>
            <div className={styles.NavLinks}>
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className = {isActive(link.link) ? `${styles.Icon}` :`${styles.Link}`}
                  onClick={() => router.push(link.link)}
                >
                    {link.title.toUpperCase()}
                </div>
              ))}
            </div>
            <div className={styles.Register}>
           
                <Button type="button" text="LOGIN" />
        
            </div>
          </nav>
        </div>
      )}

      {isTabletOrMobile && (
        <main className={styles.mobileNavHeader}>
          <div className={styles.imgContainer} onClick={handleMobileNav}>
          <MenuIcon />
          </div>
          <BrandName />
          <div className={styles.cart} onClick={() => router.push(`/my-cart`)}>
          <CartIcon />
          </div>
        </main>
      )}
      {mobileNav && (
        <main className={styles.MobileNav}>
          <section className={styles.header}>
            <span onClick={handleMobileNav}>
            <IoMdClose size={30}/>
            </span>
          </section>

          <aside>
            <main className={styles.NavLinks}>
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className={isActive(link.link) ? `${styles.Icon}` : `${styles.Link}`}
                  onClick={() => {
                    handleMobileNav(), router.push(link.link);
                  }}
                >
                  {link.title}
                 
                </div>
              ))}
            </main>
          </aside>
         
        </main>
      )}
    </div>
  );
};


