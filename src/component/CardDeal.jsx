import React from 'react';
import styles, { layout } from "../style";
import Button from './Button';
import { card } from '../assets';


const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal 
        <br className="sm:block hidden"/>
        In a few easy steps.</h2>
        <p className={`${styles.paragraph} 
        max-w-[490px] `}>arcu tortor, purus
        in mattis at sed integer faucibus. 
        Aliquet quis aliques eget mauris
        tortor.c Aliquet ultrices ac, ametau.
        </p>
   <Button/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%] sm:w-[90%] xs:w-[85%] xs:w-[75%]'/>
      </div>
    </section>
  )


export default CardDeal