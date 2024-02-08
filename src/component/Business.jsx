import React from 'react'
import { features } from '../constants';
import { layout } from '../style';
import Button from './Button';
import styles from '../style';

const FeatureCard = ({icon, title, content, index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] 
  ${index !== features.length - 1 ? "mb-6" : "mb-0"} 
  feature-card`}>
<div className={`w-[64px] h-[64px] rounded-full 
${styles.flexCenter} bg-dimBlue`}>
  <img src={icon} alt='icon' 
  className='w-[50%] h-[50%] object-contain'/>
</div>
<div className={`flex-1 flex-col flex ml-3`}>
  <h4 className="font-poppins font-semibold text-white text-[18px] leadind-[23px] mb-1">
    {title}
    </h4>
  <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
    {content}
    </p>
</div>
  </div>
)
const Business = () => {
  return (
    <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You do the business, 
      <br className='sm:block hidden '/>We'll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-[470px] `}>
        With the right credit card, You can improve your
        financial life by building credit,
        earning rewards and svaing money.
        But with hundreds of credit cards on they market.</p>
  
   <Button style="mt-10 text-center md:text-center"/> 
  
  </div>
  <div className={`${layout.sectionImg} flex-col`}>
    {features.map((feature ,index) => (
      <FeatureCard key={feature.id}
       {...feature} index={index}/>
    ))}
  </div>
    </section>
  )
}

export default Business