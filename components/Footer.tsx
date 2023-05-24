import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    const routes = ["Home", "Rooms", "Contact", "About Us"]
  return (
    <div>
        <div className='flex justify-center items-center w-full h-[4rem] md:h-[10rem] lg:h-[15rem] bg-[#111111]'>
            <ul className='flex justify-center items-center gap-4 md:gap-20'>
                {routes.map((route) => (<li className='text-[#DFAA5B] text-[0.4375rem] md:text-[1.5rem] lg:text-[2.5rem]'>{route}</li>))}
            </ul>
        </div>
    </div>
  )
}

export default Footer