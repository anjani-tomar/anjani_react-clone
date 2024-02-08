import React from 'react'
import Button from './Button'
import styles from '../style'

const CTA = () => (
    <section className={`hello ${styles.flexCenter} 
    ${styles.marginY}
     sm:flex-row flex-col 
    bg-black-gradient-2 rounded-[20px] 
    box-shadow w-[100%] xs:w-[90%] m-4 xs:ml-7 sm:p-4  p-4`}>
      <div>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] md:mr-40 
        `}>
          Everything you need to accept
          card payments and grow your
          business anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} md:ml-40 `}>
      <Button/></div>
    </section>
  )


export default CTA