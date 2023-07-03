import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Livingroom2 from '../assets/Livingroom2.jpg';
import Livingroom3 from '../assets/Livingroom3.jpg';
import Livingroom4 from '../assets/Livingroom4.jpg';
import Livingroom5 from '../assets/Livingroom5.jpg';
import Livingroom6 from '../assets/Livingroom6.jpg';

type Props = {}

const Livingroom = (props: Props) => {
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
    <div className='h-full'>
      <div className='flex justify-center'>
          <div className='absolute top-24 max-[280px]:top-16 md:top-48 lg:top-96 z-30  flex flex-col items-center gap-3 '>
              <h1 className='shadow-lg text-xl text-center md:text-5xl text-white lg:text-[4.325rem] font-Lexend font-normal max-[280px]:text-sm'>IDABO HOMES</h1>
              <p className='text-center text-white text-xs md:text-2xl lg:text-[1.825rem] lg:leading-10 w-[21.5rem] max-[280px]:w-[16rem] md:w-[40rem] lg:w-[50rem]'>Luxurious waterfront living space specially curated to fill you with joy for your short, medium, and extended stay.</p>
          </div>
        </div>
        <div className='mt-7 lg:mt-16'>
            <h1 className='text-center md:text-[2rem] lg:text-[2.5rem] text-[#DFAA5B] lg:font-extrabold mb-3 lg:mb-16'>Our Livingroom</h1>
            <div className='mx-6 max-[280px]:mx-2 md:mx-9 lg:mx-12 mb-4 lg:mb-24'>
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
                        <Image 
                        src={Livingroom2} 
                        alt='Bedroom' 
                        className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]' />
                    </div>
                    <div>
                    <Image src={Livingroom3} alt='Bedroom'
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Livingroom4} alt='Bedroom' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Livingroom5} alt='Bedroom' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Livingroom6} alt='Bedroom'
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                </Carousel>
            </div>
            <div className='mx-11 lg:mx-[10.5rem] mb-[5rem] lg:mb-[6.44rem]'>
                <p className='text-center text-[#000000] text-[0.625rem] md:text-[2rem] lg:text-[2rem] font-Inter font-medium '>Possessing a spacious environ, our living rooms
are adequately equipped with double air conditioners, a 65inch TV set, sofas, mini library, and a lounge facing 
the waterview and adorned with the best of artworks.</p>
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

export default Livingroom