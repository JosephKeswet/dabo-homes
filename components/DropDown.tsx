import React from 'react'

type Props = {}

const DropDown = (props: Props) => {
  return (
    <div>
        <div className='flex justify-center items-center w-[3.125rem] md:w-24  lg:w-48 h-4 md:h-8 lg:h-[3.755rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#FFFFFF]'>
            <h1 className='text-[0.313rem] md:text-xs lg:text-xl'>Select a City</h1>
            
        </div>
    </div>
  )
}

export default DropDown