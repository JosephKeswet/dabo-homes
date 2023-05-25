import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  image:any,
  mainText:string
  subText:string
  route:string
}

const Card = ({image,mainText,subText,route}: Props) => {
  const SeemoreButton = () => (
    <button className="w-[3.94rem] h-[1.125rem] md:w-[12.7rem] md:h-[3.75rem] lg:w-[12.75rem] lg:h-[3.75rem] rounded-[1.25rem] bg-[#DFAA5B] text-white text-[0.375rem] md:text-2xl lg:text-2xl" onClick={() => {}}>
      See more
    </button>
  )
  return (
    <div>
        <div className='w-[9.5rem] h-[12.07rem] md:w-[30rem] md:h-[37rem] lg:w-[39rem] lg:h-[42.85rem] rounded-[0.625rem] md:rounded-[2.625rem] lg:rounded-[2.625rem] bg-[#DFAA5BB0]'>
          <div className='relative w-[9.5rem] h-[10.07rem] md:w-[30rem] md:h-[25rem] lg:w-[39rem] lg:h-[28.325rem] border-[#DFAA5B] border-2'>
          <h1 className='absolute top-0 md:top-8 left-1 md:left-6 lg:left-6 text-white text-base md:text-[2rem] lg:text-[2rem] font-Lexend font-medium leading-10'>{mainText}</h1>
            <div className='bg-gradient-to-tl from-[#000000C2] to-[#FFFFFF40]'>
              <Image 
              className='w-full h-[7.5rem] md:h-[23rem] lg:h-[28.7rem] object-cover rounded-[0.625rem] md:rounded-[2.625rem] lg:rounded-[2.625rem]'
              src={image} 
              width={624}
              height={453}
              alt="Card Image" />
            </div>
            <Link href={route} className='absolute bottom-3 md:bottom-14 lg:bottom-3 left-1 md:left-6 lg:left-6 '>
              <SeemoreButton/>
            </Link>
          </div>
          <div className=' flex justify-center items-center mt-0 lg:mt-10'>
            <p className='text-center text-white text-[0.375rem] md:text-2xl lg:text-2xl  w-[8rem] md:w-[26rem] lg:w-[31.5rem] font-Lexend font-medium leading-[0.375rem] '>{subText}</p>
          </div>
        </div>
    </div>
  )
}

export default Card