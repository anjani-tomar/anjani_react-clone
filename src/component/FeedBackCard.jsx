import React from 'react'
import { quotes } from '../assets'

const FeedBackCard = ({content, name, title, img}) =>(
    <div className=' card flex justify-between flex-col px-10 py-12 rounded-[20px] 
    max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card card-border'>
      <img src={quotes} alt='double_quotes' className='w-[42px] h-[27px]
       object-contain'/>
      <p className='font-poppins font-normal text-[18px] 
      leading-[32px] text-white my-10'>
        {content}
      </p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full'/>
        <div className='ml-6'>
          <h4 className='font-poppins font-semibold text-[20px] 
          leading-[32px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[16px]
           leading-[24px] text-dimWhite '>{title}</p>
        </div>
      </div>
    </div>
  )


export default FeedBackCard