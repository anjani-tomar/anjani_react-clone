import React from 'react'
import { feedback } from '../constants';
import styles from '../style';
import FeedBackCard from './FeedBackCard';
const Testimonials = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div/>
      <div className='w-full flex justify-between
       iteams-center md:flex-row flex-col sm:mb-16
        mb-6 raltive z-[1]'>
        <h1 className={styles.heading2}>
          What people are <br 
          className='sm:block hidden'/>
          saying about us</h1>
        <div className='w-full  mt-6'>
          <p className={`${styles.paragraph}`}>
            Everyrhing you need to accept card
            payments and grow ypur bsiness anywhere 
            on the planet.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
<FeedBackCard key = {card.id} {...card} />
        ))}
      </div>
    </section>
  )

export default Testimonials