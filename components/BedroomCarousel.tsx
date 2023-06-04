import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Bedroom2 from '../assets/Bedroom2.jpg';
import Bedroom3 from '../assets/Bedroom3.jpg';
import Bedroom4 from '../assets/Bedroom4.jpg';
import Bedroom5 from '../assets/Bedroom5.jpg';
import Bedroom6 from '../assets/Bedroom6.jpg';

type Props = {}

const BedroomCarousel = (props: Props) => {
    const renderCustomNextArrow = (onClickHandler:any, hasPrev:any, label:any) => {
        return (
        <div
        onClick={onClickHandler} 
        className='absolute  top-[50%] md:top-[45%]  lg:top-[20rem] left-[85%] lg:left-[90%] flex justify-center items-center w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] lg:w-[5.25rem] lg:h-[5.25rem] bg-[#D9D9D9C9] rounded-full cursor-pointer'>
            <FontAwesomeIcon icon={faChevronRight} className='w-4 h-4  md:w-[2rem] md:h-[2rem] lg:w-[3.625rem] lg:h-[3.575rem] text-white'/>
        </div>)
    }

    const renderCustomPrevArrow = (onClickHandler:any, hasNext:any, label:any) => {
        return (
            <div>
                <div 
                onClick={onClickHandler}
                className='absolute z-30 top-[50%] md:top-[45%] lg:top-[20rem] left-[4%] lg:left-[3%] flex justify-center items-center w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] lg:w-[5.25rem] lg:h-[5.25rem] bg-[#D9D9D9C9] rounded-full cursor-pointer'>
                    <FontAwesomeIcon icon={faChevronLeft} className='w-4 h-4  md:w-[2rem] md:h-[2rem] lg:w-[3.625rem] lg:h-[3.575rem] text-white'/>
                </div>
            </div>
        )
    }
  return (<div>
        <div className='relative'>
            <h1 className='absolute z-30 top-5 left-6 md:top-12 md:left-10 lg:top-8 lg:left-20 text-[#FFFFFF] CircularStd font-normal md:text-[2rem] lg:text-[2rem]'>Bedroom</h1>
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
                    <Image src={Bedroom2}
                    className='h-[15rem] md:h-[35rem] lg:h-[44.7rem] rounded-[2.625rem]'
                    alt='Bedroom'/>
                </div>
                       <div>
                    <Image src={Bedroom3}
                    className='h-[15rem] md:h-[35rem] lg:h-[44.7rem] rounded-[2.625rem]'
                    alt='Bedroom'/>
                </div>
              
            </Carousel>
        </div>
        
    </div>
  )
}

export default BedroomCarousel