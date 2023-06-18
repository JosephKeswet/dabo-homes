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

const Navbar = (props: Props) => {
    const routes = [{title:"Home",route:'/'}, {title:"Contact",route:'/contact'}, {title:"Gallery",route:'/gallery'},{title:"About Us",route:"/about"},{title:"Terms & Conditions",route:'/terms-conditions'}];

    
  return (
    <div>
        <div className='w-auto h-[18.5rem]'>
           <div className='flex justify-center'>
           <div className='absolute top-[10%] lg:top-[20%] flex justify-center items-center w-[17.94rem] md:w-[37rem] lg:w-[64.65rem] h-6 md:h-[4rem] lg:h-[6.5rem] bg-[#111111] rounded-[0.313rem] md:rounded-[0.625rem]'>
            <ul className='flex justify-center items-center gap-4 md:gap-12 lg:gap-20'>
                {routes.map((item,index) => (
                <Link key={index} href={item.route}>
                  <li key={index} className='text-[#DFAA5B] text-[0.4375rem] md:text-[1rem] lg:text-[1.35rem]'>{item.title}</li>
                </Link>
                ))}
            </ul>
        </div>
        </div>
       
        </div>
    </div>
  )
}

export default Navbar