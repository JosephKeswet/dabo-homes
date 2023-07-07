import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Kitchen1 from '../assets/Kitchen2.jpg';
import Kitchen2 from '../assets/new/KitchenX1.png';




type Props = {}

const Kitchen = (props: Props) => {
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
    <div>
      <div className='flex justify-center'>
          <div className='absolute top-24 max-[280px]:top-16 md:top-48 lg:top-96 z-30  flex flex-col items-center gap-3 '>
              <h1 className='shadow-lg text-xl text-center md:text-5xl text-white lg:text-[4.325rem] font-Lexend font-normal max-[280px]:text-sm'>IDABO HOMES</h1>
              <p className='text-center text-white text-xs md:text-2xl lg:text-[1.825rem] lg:leading-10 w-[21.5rem] max-[280px]:w-[16rem] md:w-[40rem] lg:w-[50rem]'>Luxurious waterfront living space specially curated to fill you with joy for your short, medium, and extended stay.</p>
          </div>
        </div>
        <div className='mt-7 lg:mt-16'>
            <h1 className='text-center md:text-[2rem] lg:text-[2.5rem] text-[#DFAA5B] lg:font-extrabold mb-3 lg:mb-16'>Our Kitchen</h1>
            <div className='mx-6 lg:mx-12 mb-4 lg:mb-24'>
                <Carousel 
                renderArrowNext={renderCustomNextArrow}
                renderArrowPrev={renderCustomPrevArrow}
                useKeyboardArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                autoPlay={false}
                infiniteLoop={true}
                >
                    <div>
                    <Image src={Kitchen1} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    
                    />
                    </div>
                    <div>
                    <Image src={Kitchen2} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
            
                </Carousel>
            </div>
            <div className='mx-11 lg:mx-[10.5rem] mb-[5rem] lg:mb-[6.44rem]'>
                <p className='text-center text-[#000000] text-[0.625rem] md:text-[2rem] lg:text-[2rem] font-Inter font-medium '>We know how being away from home can be, but our
well-equipped kitchen will bring home to you; it is 
fully stacked with kitchenware, an air conditioner
a two-seater dining table and a water heater.e</p>
            </div>
            <div className='mb-14  lg:mb-56'>
                <h1 className='text-center text-[#957554] text-[1rem] md:text-[2rem] lg:text-[2rem] font-Lexend font-semibold'>Let Us welcome you Home!</h1>
                <div className='flex justify-center mt-4 md:mt-8'>
                <button className='w-[8.5rem] h-6 md:w-[20rem] md:h-[4.75rem] lg:w-[26.125rem] lg:h-[4.75rem] rounded-[0.313rem] md:rounded-[0.625rem] text-white text-[0.375rem] md:text-xl lg:text-2xl font-Lexend font-semibold bg-[#DFAA5B]'>
                    Book a stay Now
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Kitchen