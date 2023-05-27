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
    const routes = [{title:"Home",route:'/'}, {title:"Rooms",route:'#'}, {title:"Contact",route:'#'},{title:"About Us",route:"#"}];

    
  return (
    <div>
        <div className='relative inset-0 bg-[url("../assets/HomeBackground.svg")] w-auto h-[18.5rem] 
      max-[280px]:h-[14rem]
      max-[540px]:bg-cover
      md:h-[42rem] md:bg-contain 
      lg:h-[50rem] bg-no-repeat bg-contain lg:bg-cover'>
           <div className='flex justify-center'>
           <div className='absolute top-[10%] lg:top-[20%] flex justify-center items-center w-[14.94rem] md:w-[30rem] lg:w-[54.65rem] h-6 md:h-[4rem] lg:h-[6.5rem] bg-[#111111] rounded-[0.313rem] md:rounded-[0.625rem]'>
            <ul className='flex justify-center items-center gap-8 md:gap-12 lg:gap-20'>
                {routes.map((item,index) => (
                <Link href={item.route}>
                  <li key={index} className='text-[#DFAA5B] text-[0.4375rem] md:text-[1rem] lg:text-[2.5rem]'>{item.title}</li>
                </Link>
                ))}
            </ul>
        </div>
        </div>
       
        </div>
    </div>
  )
}

export default SingleTopSection