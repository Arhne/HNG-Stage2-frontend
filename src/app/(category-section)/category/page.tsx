"use client"
import React, { useState } from 'react'
import { Listings } from '@/components/data'
import { Button } from '@/components'
import Image from 'next/image'
import styles from "./new-arrivals.module.scss"
import { Modal } from "@/components"

const NewArrival= () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.category}>

     <div className={styles.col}>
        {Listings.map((listing) => (
          <div key={listing.id} className={styles.bestselling}>
            <div className={styles.flexEnd}>
            </div>
            <div className={styles.center}> 
            <Image src={listing.pic} alt="bag image" width={180} height={180} />
            <p className={styles.bagName}>{listing.brand}</p>
            <p className={styles.bagPrice}>{listing.price}</p>
            </div>
            
            <div className={styles.listingBtn}>
              <Button type='submit' text='View Details' style={styles.transparentBtn}/>
              <Button type='submit' text='Add To Cart'style={styles.fillBtn} onClick={() => setShowModal(true)}/>
            </div>
            {showModal && <Modal 
            cartItem={listing.brand} 
            onClickClose = {()=> setShowModal(false)}
            />}
          </div>
        ))}


      </div>

      
    </div>
  )
}

export default NewArrival
