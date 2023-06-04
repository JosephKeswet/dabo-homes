import React from 'react'
import Bedroom from '../assets/book/Bedroom.svg'
import Livingroom from '../assets/book/Livingroom.svg'
import Dinning from '../assets/book/Dinning.svg'
import Image from 'next/image'
import BedroomCarousel from '@/components/BedroomCarousel'
import Footer from '@/components/Footer'
import Background from '../assets/Background.svg'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Dinning2 from '../assets/Dinning2.jpg';
import Dinning3 from '../assets/Dinning3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import DinningCarousel from '@/components/DinningCarousel'
import LivingroomCarousel from '@/components/LivingroomCarousel'
import KitchenCarousel from '@/components/KitchenCarousel'
import Link from 'next/link'


type Props = {}

const About = (props: Props) => {
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
    <div className="min-w-screen bg-cover  h-full bg-[url('../assets/Background.svg')]">
       {/* <div className='bg-cover bg-no-repeat bg-center h-auto'>
        <Image src={Bedroom} alt="Bedroom" />
        <Image src={Livingroom} alt="Livingroom" />
        <Image src={Dinning} alt="Dinning" />
      </div> */}
      <div className=''>
            <div className='w-full md:pt-16 pb-[1rem] lg:pb-[10rem]'>
                <h1 className='text-base md:text-[2.5rem] text-center text-[#DFAA5B] CircularStd font-bold leading-10 '>About Us</h1>
                <h2 className='text-base md:text-[4.3125rem] text-center text-[#DFAA5B] CircularStd font-semibold capitalize pt-1 md:leading-[3.6rem] md:pt-8 lg:mt-8'>Welcome to idabo homes</h2>
                <div className='w-screen flex justify-center md:mt-4 lg:mt-7'>
                    <p className='w-[20rem] md:w-[40rem] lg:w-[65rem] text-sm md:text-xl text-[#000000] capitalize text-center CircularStd font-normal'>Luxurious waterfront living space specially curated to fill you with joy for your short, medium, and extended stay.</p>
                </div>
                <div className='w-screen flex justify-center mt-8 md:mt-12'>
                    <p className='w-[20rem] md:w-[40rem] lg:w-[76.5rem] text-sm md:text-2xl lg:text-[1.4rem] text-[#000000] capitalize text-center CircularStd font-normal lg:leading-[2.5rem]'>Idabo Homes is a Luxurious Hospitality Brand Located in the Centre of Lagos Island, Lagos Nigeria. Idabo Homes boasts of a luxurious Waterfront living space specifically and specially designed to fill you with joy for your short, medium, and extended stay.</p>
                </div>
                <h1 className='mt-6 md:mt-[3.32rem] text-base md:text-[2.5rem] text-center text-[#DFAA5B] CircularStd font-bold leading-10 '>Our Vision</h1>
                <div className='w-screen flex justify-center mt-0 md:mt-4'>
                    <p className='w-[15rem] md:w-[30rem] lg:w-[65rem] text-sm md:text-[1.625rem] text-[#000000] capitalize text-center CircularStd font-normal md:leading-[2rem]'>{`To be Africa’s most trusted Luxurious Hospitality Brand.`}</p>
                </div>
                <h1 className='mt-6 md:mt-[3.32rem] text-base md:text-[2.5rem] text-center text-[#DFAA5B] CircularStd font-bold leading-10 '>Our mission</h1>
                <div className='w-screen flex justify-center mt-4'>
                    <p className='w-[20rem] md:w-[38rem] lg:w-[53.75rem] text-sm md:text-[1.625rem] text-[#000000] capitalize text-center CircularStd font-normal md:leading-[2rem] lg:leading-[2.5rem]'>To create quality and Class in the hospitality industry in Africa that will help Africa compete globally while providing exceptional value for our customers..</p>
                </div>
                <h1 className='mt-2 md:mt-[3.32rem] text-base md:text-[2.5rem] text-center text-[#DFAA5B] CircularStd font-bold leading-10 '>Core values</h1>
                <div className='w-screen flex justify-center mt-0 md:mt-4'>
                    <ul className='w-[20rem] md:w-[37.825rem] flex items-center justify-between text-[#000000] text-sm md:text-[1.625rem] CircularStd font-medium '>
                        <li className='list-disc'>Excellence</li>
                        <li className='list-disc'>Integrity</li>
                        <li className='list-disc'>Passion For Innovation </li>
                    </ul>
                </div>
                <div className='w-screen flex justify-center mt-5'>
                    <p className='w-[20rem] md:w-[40rem] lg::w-[53.75rem] text-sm md:text-[1.625rem] text-[#000000] capitalize text-center CircularStd font-normal md:leading-[2rem] lg:leading-[2.5rem]'>Living the golden rule (treat others and  their property the way you will like to be treated)</p>
                </div>
                <div className='w-screen flex justify-center mt-4'>
                    <p className='w-[20rem] md:w-[42rem] text-sm md:text-[1.625rem] text-[#000000] capitalize text-center CircularStd font-normal md:leading-[2rem] lg:leading-[2.2rem]'>These values are what build our corporate culture and help us here at idabo homes serve our community and customers with a high level of professionalism</p>
                </div>
                <h1 className='mt-6 lg:mt-[8rem] text-base md:text-[2.5rem] text-center text-[#DFAA5B] CircularStd font-bold leading-10 '>Our Apartment</h1>
            </div>
            <div className='flex flex-col gap-16 lg:gap-36 mx-4 pb-8 lg:pb-48 lg:mx-44'>
                <BedroomCarousel/>
                <DinningCarousel/>
                <LivingroomCarousel/>
                <KitchenCarousel/>
            </div>
            <div className='pb-14 lg:pb-56 mt-8 lg:mt-52'>
                <h1 className='text-center text-[#957554] text-[1rem] md:text-[2rem] lg:text-[2rem] font-Lexend font-semibold'>Let Us welcome you Home!</h1>
                <div className='flex justify-center mt-4 md:mt-8'>
                <Link href='/book'>
                    <button className='w-[8.5rem] h-6 md:w-[20rem] md:h-[4.75rem] lg:w-[26.125rem] lg:h-[4.75rem] rounded-[0.313rem] md:rounded-[0.625rem] text-white text-[0.375rem] md:text-xl lg:text-2xl font-Lexend font-semibold bg-[#DFAA5B]'>
                    Book a stay Now
                    </button>
                </Link>
                </div>
      </div>
      </div>
  
            {/* <div className='absolute right-0 left-0 bottom-0 top-[60rem] lg:top-[200rem]'>
                <Footer/>
            </div> */}
    </div>
  )
}

export default About