import React from "react";
import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%]  sm:w-[90%] xs:w-[85%] xs:w-[75%] relative z-[5]"
      /> 
      <div
        className="absolute z-[3] 
        -left-1/2 top-0 w-[50%] h-[50%]
         rounded-full white__gradient "
      />
      <div
        className="absolute z-[3] 
        -left-1/2 bottom-0 w-[50%] h-[50%] 
        rounded-full pink__gradient "
      />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easyly control your
        <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttior integer plateger placerat.
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                <img src={apple} alt='apple_store'
                className="w-[128px] h-[42px] object-contain mr-5 
                cursor-ponter"/>
                <img src={google} alt='google_store'
                className="w-[128px] h-[42px] object-contain 
                 cursor-ponter"/>
               </div>
    
    </div>
  </section>
);

export default Billing;
