import React, { useRef } from 'react'
import Bedroom from '../assets/book/Bedroom.svg'
import Livingroom from '../assets/book/Livingroom.svg'
import LivingroomLarge from '../assets/book/LivingroomLarge.svg'
import Dinning from '../assets/book/Dinning.svg'
import Image from 'next/image'
import CalendarIcon from '../assets/icons/Calendar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Book = (props: Props) => {
  // const hiddenCheckInInput:any = useRef()
  // const  handleClickCheckIn = () => {
  //   hiddenCheckInInput.current.click()
  // }
  return (
    <div className='relative'>
      <div className=''>
        <Image src={Bedroom} alt="Bedroom" />
        <Image src={Livingroom} alt="Livingroom" />
        <Image src={Dinning} alt="Dinning" />
      </div>
      <div className='w-full flex flex-col gap-10 lg:gap-52 absolute z-40 bottom-52 max-[280px]:top-20  max-[360px]:bottom-24 max-[375px]:bottom-28  md:bottom-[55rem] lg:bottom-[35rem] justify-center items-center'>
        <div className='flex flex-col gap-9'>
            <div className='flex justify-center items-center w-[18.125rem] max-[280px]:w-[18rem] md:w-[40rem] lg:w-[56.875rem] h-[21.2rem] md:h-[30rem] lg:h-[70rem] bg-[#000000] rounded-[0.625rem]'>
              <div className='flex flex-col'>
                <h1 className='text-center text-[#DFAA5B] text-sm md:text-[3rem] lg:text-[4.5rem] mb-[1.875rem] md:mb-12 lg:mb-28 font-Lexend font-bold'>Your Reservation</h1>
                <form className='flex flex-col gap-[0.875rem] md:gap-[1rem] lg:gap-[3.875rem]'>
                  <div 
                  // onClick={handleClickCheckIn}
                  className='flex items-center justify-between px-3 lg:px-8 w-[15.25rem] md:w-[30rem] lg:w-[48.2rem] h-9 md:h-[4rem] lg:h-[7.255rem] bg-white rounded-[0.313rem]'>
                    <h1 className='text-[0.625rem] md:text-3xl lg:text-4xl text-[#000000] font-Lexend font-medium leading-3'>Check-In</h1>
                    <Image
                    src={CalendarIcon}
                    alt='Calendar Icon'
                    width={18}
                    height={18}
                    className='w-[1.125rem] h-[1.125rem] md:w-[2rem]  lg:w-[3.625rem] md:h-[2rem] lg:h-[3.575rem]'
                    />
                    {/* <input type="date" className='' ref={hiddenCheckInInput} /> */}
                  </div>
                  <div 
                  // onClick={handleClickCheckIn}
                  className='flex items-center justify-between px-3 lg:px-8 w-[15.25rem] md:w-[30rem] lg:w-[48.2rem] h-9 md:h-[4rem] lg:h-[7.255rem] bg-white rounded-[0.313rem]'>
                    <h1 className='text-[0.625rem] md:text-3xl lg:text-4xl text-[#000000] font-Lexend font-medium leading-3'>Check-In</h1>
                    <Image
                    src={CalendarIcon}
                    alt='Calendar Icon'
                    width={18}
                    height={18}
                    className='w-[1.125rem] h-[1.125rem] md:w-[2rem]  lg:w-[3.625rem] md:h-[2rem] lg:h-[3.575rem]'
                    />
                    {/* <input type="date" className='' ref={hiddenCheckInInput} /> */}
                  </div>
                  <div className='flex items-center justify-between px-3 lg:px-8 w-[15.25rem] md:w-[30rem] lg:w-[48.2rem] h-9 md:h-[4rem] lg:h-[7.255rem] bg-white rounded-[0.313rem]'>
                    <h1 className='text-[0.625rem] md:text-3xl lg:text-4xl text-[#000000] font-Lexend font-medium leading-3'>Guests</h1>
                    <FontAwesomeIcon icon={faChevronDown} className='w-4 h-4  md:w-[2rem] md:h-[2rem] lg:w-[3.625rem] lg:h-[3.575rem] text-[#DFAA5B]'/>
                  </div>
                  <button className='flex justify-center items-center w-[15.25rem] md:w-[30rem] md:h-[4rem] lg:w-[48.2rem] h-9 lg:h-[7.255rem] bg-[#DFAA5B] text-[#000000] text-xs md:text-2xl lg:text-[2.625rem] font-Lexend font-bold leading-4 mt-2 rounded-[0.313rem]' type='submit' onClick={() => console.log("Works")}>
                      Book Apartment
                  </button>
                </form>
              </div>
            </div>
         
        </div>
      
        <div className='relative flex justify-center w-[18.875rem] max-[280px]:w-[18rem] max-[280px]:h-[8rem]  lg:w-[80.25rem] h-[15.25rem] lg:h-[64.375rem] bg-[#DFAA5B] rounded-[0.9rem] md:rounded-[2.625rem] lg:rounded-[4.125rem]'>
          <div className='flex justify-center items-center absolute top-1 lg:top-14 right-[11.5rem] lg:right-[48rem] z-30 bg-[#00000077] w-[6.375rem] h-9 lg:w-[27.325rem] lg:h-[8.2rem] rounded-[0.625rem] lg:rounded-[1.255rem]'>
            <h1 className='text-white text-xs lg:text-[3.5rem] font-Inter font-black'>N450,000/day</h1>
          </div>
          <div className='absolute top-[5rem] lg:top-[25rem] z-30 w-[18.875rem] max-[280px]:w-[18rem]  lg:w-[80.25rem] px-2 lg:px-12  flex justify-between items-center'>
            <FontAwesomeIcon icon={faChevronLeft} className="text-white w-4 h-4 lg:w-[5rem] lg:h-[5rem]"/>
            <FontAwesomeIcon icon={faChevronRight} className="text-white w-4 h-4 lg:w-[5rem] lg:h-[5rem]"/>
          </div>
          <div className='absolute w-[18.875rem] max-[280px]:w-[18rem] lg:w-[80.25rem] h-[4rem]'>
              <Image 
              className='w-full h-[11.755rem] md:h-[23rem] lg:h-[50.125rem] object-cover rounded-[0.625rem] md:rounded-[2.625rem] lg:rounded-[4.125rem]'
              src={LivingroomLarge} 
              width={1284}
              height={802}
              alt="Card Image" />
          </div>
          <div className=' flex justify-center items-center mt-[11.5rem] lg:mt-[45rem]'>
            <p className='text-center text-white text-[0.5rem] md:text-2xl lg:text-2xl  w-[14rem] md:w-[26rem] lg:w-[61.5rem] font-Lexend font-medium leading-2 '>Our Bedrooms are fully equipped with fully  functional Air conditioners, A king sized bed 
with 7 pillows and various duvets, a TV console
and an Ensuite bathroom.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Book