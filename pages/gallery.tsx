import Image from 'next/image';
import React from 'react';
import Bedroom1 from '../assets/gallery/Bedroom1.svg';
import Livingroom1 from '../assets/gallery/Livingroom1.svg';
import Dining1 from '../assets/gallery/Dining1.svg';
import Kitchen1 from '../assets/gallery/Kitchen1.svg';
import Bedroom2 from '../assets/gallery/Bedroom2.svg';
import Apartments from '../assets/gallery/Apartments.svg';
import Bedroom3 from '../assets/gallery/Bedroom3.svg';
import CourtYard from '../assets/gallery/CourtYard.svg';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const images = [
  Bedroom1,
  Livingroom1,
  Dining1,
  Kitchen1,
  Bedroom2,
  Apartments,
  Bedroom3,
  CourtYard,
];


const Gallery = () => {
  return (
    <div>
      <div className='pb-[6rem] h-[0.2rem] lg:h-auto lg:pb-0'>
        <Navbar/>
      </div>
    <div className='mt-4 md:mt-32 lg:mt-12 '>
        <h1 className='text-base md:text-[2.5rem] text-center text-[#DFAA5B] CircularStd font-bold leading-10 '>Gallery</h1>
        <h2 className='text-base md:text-[4.3125rem] text-center text-[#DFAA5B] CircularStd font-semibold capitalize pt-1 md:leading-[3.6rem] md:pt-8 lg:mt-8'>Check out pictures of our Apartment</h2>
    <div className="grid grid-cols-2 gap-4 px-4 lg:px-14 py-8 lg:mt-20">
      {images.map((image, index) => (
        <div key={index} className="">
          <Image src={image} alt={`Image ${index + 1}`}
          width={400}
          height={300}
          className="w-full h-auto" />
        </div>
      ))}
    </div>
    <div className='mb-14 lg:mb-56 mt-8 lg:mt-52'>
        <h1 className='text-center text-[#957554] text-[1rem] md:text-[2rem] lg:text-[2rem] CircularStd font-semibold'>Let Us welcome you Home!</h1>
        <div className='flex justify-center mt-4 md:mt-8'>
          <Link href='/book'>
            <button className='w-[8.5rem] h-6 CircularStd md:w-[20rem] md:h-[4.75rem] lg:w-[26.125rem] lg:h-[4.75rem] rounded-[0.313rem] md:rounded-[0.625rem] text-white text-[0.375rem] md:text-xl lg:text-2xl font-Lexend font-semibold bg-[#DFAA5B]'>
              Book a stay Now
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;

