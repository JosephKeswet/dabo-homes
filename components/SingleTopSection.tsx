import Image from 'next/image';
import React from 'react'
import Bedroom from '../assets/Bedroom.svg';
import Livingroom from '../assets/Livingroom.svg';
import Kitchen from '../assets/Kitchen.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DropDown from './DropDown';
import Link from 'next/link';



type Props = {}

const SingleTopSection = (props: Props) => {
    const routes = [{title:"Home",route:'/'}, {title:"Contact",route:'/contact'}, {title:"Gallery",route:'/gallery'},{title:"About Us",route:"/about"},{title:"Terms & Conditions",route:'/terms-conditions'}];

    
  return (
    <div>
        <div className='relative inset-0 bg-[url("../assets/HomeBackground.svg")] w-auto h-[18.5rem] 
      max-[280px]:h-[14rem]
      max-[540px]:bg-cover
      md:h-[42rem] md:bg-contain 
      lg:h-[50rem] bg-no-repeat bg-contain lg:bg-cover'>
           <div className='flex justify-center'>
           <div className='absolute top-[10%] lg:top-[20%] flex justify-center items-center w-[14.94rem] md:w-[30rem] lg:w-[64.65rem] h-6 md:h-[4rem] lg:h-[6.5rem] bg-[#111111] rounded-[0.313rem] md:rounded-[0.625rem]'>
            <ul className='flex justify-center items-center gap-3 md:gap-12 lg:gap-20'>
                {routes.map((item,index) => (
                <Link key={index} href={item.route}>
                  <li key={index} className='text-[#DFAA5B] text-[0.4375rem] md:text-[1rem] lg:text-[1.35rem]'>{item.title}</li>
                </Link>
                ))}
            </ul>
        </div>
        </div>
        <div className='absolute right-0 left-0 top-[14rem] md:top-[25rem] lg:top-[37rem] mb-14  lg:mb-56'>
                <h1 className='text-center text-[#E0AC5F] font-extrabold text-[1rem] md:text-[2rem] lg:text-[2rem] font-Lexend '>Let Us welcome you Home!</h1>
                <Link href='/book' className='flex justify-center mt-4 md:mt-8'>
                <button className='w-[8.5rem] h-6 md:w-[20rem] md:h-[4.75rem] lg:w-[26.125rem] lg:h-[4.75rem] rounded-[0.313rem] md:rounded-[0.625rem] text-white text-[0.375rem] md:text-xl lg:text-2xl font-Lexend font-semibold bg-[#DFAA5B]'>
                    Book a stay Now
                </button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default SingleTopSection