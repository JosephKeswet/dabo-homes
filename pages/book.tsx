import React, { useRef } from 'react'
import Bedroom from '../assets/book/Bedroom.svg'
import Livingroom from '../assets/book/Livingroom.svg'
import LivingroomLarge from '../assets/book/LivingroomLarge.svg'
import Dinning from '../assets/book/Dinning.svg'
import Image from 'next/image'
import CalendarIcon from '../assets/icons/Calendar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


type Props = {}

const Book = (props: Props) => {
  const renderCustomNextArrow = (onClickHandler:any, hasPrev:any, label:any) => {
    return (
    <div
    onClick={onClickHandler} 
    className='absolute  top-[50%] md:top-[45%]  lg:top-[32rem] left-[85%] lg:left-[90%] flex justify-center items-center w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] lg:w-[5.25rem] lg:h-[5.25rem] bg-[#D9D9D9C9] rounded-full cursor-pointer'>
        <FontAwesomeIcon icon={faChevronRight} className='w-4 h-4  md:w-[2rem] md:h-[2rem] lg:w-[3.625rem] lg:h-[3.575rem] text-white'/>
    </div>)
}

const renderCustomPrevArrow = (onClickHandler:any, hasNext:any, label:any) => {
    return (
        <div>
            <div 
            onClick={onClickHandler}
            className='absolute z-30 top-[50%] md:top-[45%] lg:top-[32rem] left-[4%] lg:left-[3%] flex justify-center items-center w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] lg:w-[5.25rem] lg:h-[5.25rem] bg-[#D9D9D9C9] rounded-full cursor-pointer'>
                <FontAwesomeIcon icon={faChevronLeft} className='w-4 h-4  md:w-[2rem] md:h-[2rem] lg:w-[3.625rem] lg:h-[3.575rem] text-white'/>
            </div>
        </div>
    )
}
  return (
    <div className='relative'>
      <div className=''>
        <Image src={Bedroom} alt="Bedroom" />
        <Image src={Livingroom} alt="Livingroom" />
        <Image src={Dinning} alt="Dinning" />
      </div>
      <div className='w-full flex flex-col gap-10 lg:gap-52 absolute z-40 bottom-52  max-[280px]:top-20  max-[360px]:bottom-24 max-[375px]:bottom-28  md:bottom-[30rem] lg:bottom-[35rem] justify-center items-center'>
        <div className='flex flex-col gap-9'>
            <div className='flex justify-center items-center w-[18.125rem] max-[280px]:w-[18rem] md:w-[40rem] lg:w-[56.875rem] h-[21.2rem] md:h-[30rem] lg:h-[70rem] bg-[#000000] rounded-[0.625rem]'>
              <div className='flex flex-col'>
                <h1 className='text-center text-[#DFAA5B] text-sm md:text-[3rem] lg:text-[4.5rem] mb-[1.875rem] md:mb-12 lg:mb- font-Lexend font-bold'>Your Reservation</h1>
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

        <div className='relative top-20 w-[18.875rem] md:w-[45rem] lg:w-[80.275rem] h-[15rem] md:h-[40rem] lg:h-[64.375rem] bg-[#DFAA5BED] rounded-[0.625rem] md:rounded-[4.125rem] lg:rounded-[4.125rem]'>
          <div className='absolute bottom-12 md:bottom-[7rem] lg:bottom-48'>
                <Carousel 
                renderArrowNext={renderCustomNextArrow}
                renderArrowPrev={renderCustomPrevArrow}
                useKeyboardArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
                >
                    <div>
                    <Image src={LivingroomLarge} alt='Bedroom'                     
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={LivingroomLarge} alt='Bedroom'
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                </Carousel>
          </div>
          <div className=' flex justify-center items-center mx-4 lg:mx-24 mt-[11rem] md:mt-[30rem] lg:mt-[55rem]'>
            <p className='text-center text-white text-[0.675rem] md:text-2xl lg:text-2xl   font-Lexend font-medium  '>Our Bedrooms are fully equipped with fully  functional Air conditioners, A king sized bed 
with 7 pillows and various duvets, a TV console
and an Ensuite bathroom.</p>
          </div>
        </div>
        
 
        
      </div>
    </div>
  )
}

export default Book
