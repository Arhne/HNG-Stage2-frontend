import React from 'react'
import { CheckoutSummaryComp, BillingInfo } from '@/components'
import styles from "./final.module.scss"

const page = () => {
  return (
    <div className={styles.col}>
    <BillingInfo />
    <CheckoutSummaryComp />
    </div>
  )
}

export default page
