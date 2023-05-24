import Image from 'next/image'
import React from 'react'

type Props = {
  image:any
}

const Card = ({image}: Props) => {
  const SeemoreButton = () => (
    <button className="w-[12.75rem] h-[3.75rem] rounded-[1.25rem] bg-[#DFAA5B] text-white text-2xl" onClick={() => {}}>
      Seemore
    </button>
  )
  return (
    <div>
        <div className='w-[9.5rem] h-[10.07rem] md:w-[30rem] md:h-[36rem] lg:w-[39rem] lg:h-[40.85rem] rounded-[0.625rem] md:rounded-[2.625rem] lg:rounded-[2.625rem] bg-[#DFAA5BB0]'>
          <div className='relative w-[9.5rem] h-[10.07rem] md:w-[30rem] md:h-[36rem] lg:w-[39rem] lg:h-[28.325rem] border-[#DFAA5B] border-2'>
            <div className=''>
              <Image 
              className='rounded-[0.625rem] md:rounded-[2.625rem] lg:rounded-[2.625rem]'
              src={image} 
              width={624}
              height={453}
              alt="Card Image" />
            </div>
            <div className='absolute bottom-3 left-6 '>
              <SeemoreButton/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card