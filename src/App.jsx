import React from 'react'
import styles from './style';
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import { Billing, Business, CTA, CardDeal, Clients, Footer, Stats, Testimonials } from './component';

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
 <div className={`${styles.boxWidth}`} >
<Navbar/>
 </div>
 </div>
 <div  className={`'bg-primary' ${styles.flexStart}`}>
 <div className={`${styles.boxWidth}`} >
<Hero/>

 </div>
 </div>
 <div  className={`'bg-primary' ${styles.flexStart} ${styles.flexCenter}`}>
 <div className={`${styles.boxWidth}`} >
<Stats/>
<Business/>
<Billing/>
<CardDeal/>
<Testimonials/>
<Clients/>
<CTA/>
<Footer/>
 </div>
 </div>
 
 </div>
  )

export default App
