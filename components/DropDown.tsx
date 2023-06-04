import Image from 'next/image'
import React from 'react'
import ArrowDown from '../assets/icons/ArrowDown.svg'

type Props = {}

const DropDown = (props: Props) => {
  return (
    <div>
        <div className='flex justify-center items-center cursor-pointer  gap-2 w-[6.6rem] md:w-[6.6rem]  lg:w-48 h-[1.6rem] md:h-[1.6rem] lg:h-[3.755rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#FFFFFF]'>
            <h1 className='text-xs text-[#00000080] CircularStd opacity-50 md:text-xs lg:text-xl'>Select a City</h1>
            <div>
              <Image
              src={ArrowDown}
              width={17}
              height={13}
              className='w-2 h-2 lg:w-4 lg:h-4'
              alt='Arrow Down'
              />
            </div>
        </div>
    </div>
  )
}

export default DropDown