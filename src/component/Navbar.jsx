import {useState} from 'react'

import {close, logo, menu} from '../assets';
import{navLinks} from '../constants'

const Navbar = () => {
  const[toggle,setToggle]=useState(false);
  return (
    <nav className=' bg-primary w-full flex py-6 items-center navbar'><img src={logo} alt='hoobook'
    className='w-[124px] h-[32px]'/>
    <ul className='list-none sm:flex hidden flex-1 justify-end items-center'>{navLinks.map((nav,index) =>(
      <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer text-[16px] ${index  === navLinks.length - 1 ?'mr-7' : 'mr-10'} text-white`}>
      <a href={`#${nav.id}`}>
          {nav.title}
        </a>
      </li>
    ))}</ul>
    <div className='lg:hidden flex flex-1 justify-end  md:hidden sm:hidden'>
      <img src={toggle ? close : menu}
      alt="menu"
      className='w-[28px] h-[20px] pbject-contain'
      onClick={()=> setToggle((prev) => !prev)}
      />
      <div className={`${toggle ? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl slider`}>
      <ul className='list-none flex flex-col justify-end items-center flex-1'>{navLinks.map((nav,index) =>(
      <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer text-[16px] ${index  === navLinks.length - 1 ?'mr-0' : 'mb-4'} text-white`}>
      <a href={`#${nav.id}`}>
          {nav.title}
        </a>
      </li>
    ))}</ul>
      </div>
    </div>
    </nav>
  )
}

export default Navbar

