import React from 'react'
import LocationIcon from '../assets/icons/Location.svg'
import PhoneIcon from '../assets/icons/Phone.svg'
import EmailIcon from '../assets/icons/Email.svg'
import Image from 'next/image'



type Props = {}

const contact = (props: Props) => {
  return (
    <div>
            <div className="min-w-screen bg-cover  h-full bg-[url('../assets/Background.svg')]">
                <div className='h-screen lg:h-auto md:pt-20 '>
                    <h1 className='text-base md:text-[2.5rem] text-center text-[#DFAA5B] font-Lexend font-bold leading-10 '>Contact Us</h1>
                    <h2 className='text-base md:text-[2.5rem] lg:text-[2.825rem] text-center text-[#DFAA5B] font-Lexend font-semibold capitalize pt-1 md:leading-[3.6rem] md:pt-8 lg:mt-8'>For Bookings & Reservations</h2>
                    <div className='flex justify-center pt-2 lg:pt-[7rem] lg:pb-[10.875rem]'>
                        <div className='flex justify-between px-5 lg:px-[5.3rem] items-center w-[22rem] h-[4.7rem] md:w-[47rem] md:h-[10rem] lg:w-[75.525rem] lg:h-[19.875rem] bg-white shadow-xl rounded-[0.625rem]'>
                            <div className='w-auto'>
                                <div className='flex justify-center'>
                                    <Image 
                                    src={LocationIcon} 
                                    width={100}
                                    height={100}
                                    className='w-[1.125rem] h-[1.125rem] md:w-[5rem] md:h-[5rem] lg:w-[6.275rem] lg:h-[6.275rem]'
                                    alt=''/>
                                </div>
                                <div className='mt-2'>
                                    <h1 className='text-[0.45rem] md:text-lg lg:text-2xl text-center text-[#000000] font-Lexend font-bold lg:leading-8'>Address</h1>
                                    <h2 className='text-[0.475rem] md:text-lg lg:text-2xl text-center text-[#000000] font-Lexend font-medium lg:leading-8'>Lagos, Nigeria</h2>
                                </div>
                            </div>
                            <div className='w-auto'>
                                <div className='flex justify-center'>
                                    <Image 
                                    src={PhoneIcon} 
                                    width={100}
                                    height={100}
                                    className='w-[1.125rem] h-[1.125rem]  md:w-[5rem] md:h-[5rem] lg:w-[6.275rem] lg:h-[6.275rem]'
                                    alt=''/>
                                </div>
                                <div className='mt-2'>
                                    <h1 className='text-[0.45rem] md:text-lg lg:text-2xl text-center text-[#000000] font-Lexend font-bold lg:leading-8'>Phone</h1>
                                    <h2 className='text-[0.475rem] md:text-lg lg:text-2xl text-center text-[#000000] font-Lexend font-medium lg:leading-8'> 09129299090, 09128288080</h2>
                                </div>
                            </div>
                            <div className='w-auto'>
                                <div className='flex justify-center'>
                                    <Image 
                                    src={EmailIcon} 
                                    width={100}
                                    height={100}
                                    className='w-[1.125rem] h-[1.125rem] md:w-[5rem] md:h-[5rem]  lg:w-[6.275rem] lg:h-[6.275rem]'
                                    alt=''/>
                                </div>
                                <div className='mt-2'>
                                    <h1 className='text-[0.45rem] md:text-lg lg:text-2xl text-center text-[#000000] font-Lexend font-bold lg:leading-8'>Email</h1>
                                    <h2 className='text-[0.475rem] md:text-lg lg:text-2xl text-center text-[#000000] font-Lexend font-medium lg:leading-8'>idabo.lagos@idabohomes.com</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-14 lg:pb-56 pt-8 lg:pt-[3rem]'>
                    <h1 className='text-center text-[#957554] text-[1rem] md:text-[2rem] lg:text-[2rem] font-Lexend font-semibold'>Let Us welcome you Home!</h1>
                    <div className='flex justify-center mt-4 md:mt-8'>
                    <button className='w-[8.5rem] h-6 md:w-[20rem] md:h-[4.75rem] lg:w-[26.125rem] lg:h-[4.75rem] rounded-[0.313rem] md:rounded-[0.625rem] text-white text-[0.375rem] md:text-xl lg:text-2xl font-Lexend font-semibold bg-[#DFAA5B]'>
                        Book a stay Now
                    </button>
                    </div>
                    <h1 className='mt-6 md:mt-[5rem] lg:mt-[8rem] text-base md:text-[2.5rem] text-center text-[#DFAA5B] font-Lexend font-bold leading-10 '>Our Apartment</h1>
                </div>
                </div>
            </div>
    </div>
  )
}

export default contact