import Link from 'next/link';
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  const pages = [{title:"Home",route:'/'}, {title:"Contact",route:'/contact'}, {title:"Gallery",route:'/gallery'},{title:"About Us",route:"/about"},{title:"Terms & Conditions",route:'/terms-conditions'}];

    
  return (
    <div>
        <div className='flex justify-center items-center w-full h-[4rem] md:h-[10rem] lg:h-[15rem] bg-[#111111]'>
            <ul className='flex justify-center items-center gap-4 md:gap-20'>
                {pages?.map((page,index) => (<Link href={page?.route} key={index} className='text-[#DFAA5B] CircularStd text-[0.4375rem] md:text-[1.5rem] lg:text-[2rem]'>{page?.title}</Link>))}
            </ul>
        </div>
    </div>
  )
}

export default Footer