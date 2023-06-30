import React, { useRef, useState } from 'react'
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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar'
import Item1 from '../assets/new/Item1.jpg'
import Item2 from '../assets/new/Item2.jpg';
import Item3 from '../assets/new/Item3.jpg';
import Item4 from '../assets/new/Item4.jpg';
import Item5 from '../assets/new/Item5.jpg';
import Item6 from '../assets/new/Item6.jpg';
import Item7 from '../assets/new/Item7.jpg';
import Item8 from '../assets/new/Item8.jpg';
import Item9 from '../assets/new/Item9.jpg';








type Props = {}

const Book = (props: Props) => {

  const NEXT_PUBLIC_SERVICE_ID = "service_oicwdyu"
  const NEXT_PUBLIC_TEMPLATE_ID = "template_c0poxrj"
  const NEXT_PUBLIC_KEY = "DULPyqYfN6S9Nvw66"

  const form:any = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm(NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID, form.current,NEXT_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          toast.success('Email sent successfully! We will get back to you soon.')
      }, (error) => {
          toast.error('We had a problem sending email')
          console.log(error.text);
      });
        // Reset the form fields
    if (form.current) {
      form.current.reset();
    }
      // Reset the date fields
      setSelectedDate(null);
      setSelectedDate2(null);
      setSelectedValue("Select")
  };

  const [selectedValue, setSelectedValue] = useState<any>(null);
  const dropdownOptions = [1, 2, 3, 4,5,6];

  const handleSelect = (value:any) => {
    setSelectedValue(value);
  };
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [isDatePickerOpen2, setIsDatePickerOpen2] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);


const handleDateChange = (date:any) => {
  setSelectedDate(date);
  setIsDatePickerOpen(false);
};
const handleDateChange2 = (date2:any) => {
  setSelectedDate2(date2);
  setIsDatePickerOpen2(false);
};

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
  return (
    <div className='relative'>
      <ToastContainer/>
      <div className='w-screen'>
        <Image src={Bedroom} alt="Bedroom" className='w-screen' />
        <Image src={Livingroom} alt="Livingroom" className='w-screen' />
        <Image src={Dinning} alt="Dinning" className='w-screen' />
      </div>
      <div className='w-full flex flex-col gap-10 lg:gap-52 absolute z-40 bottom-32  max-[280px]:top-20  max-[360px]:bottom-24 max-[375px]:bottom-28  md:bottom-[15rem] lg:bottom-[100rem] justify-center items-center'>
          <div className='absolute bottom-[26rem] md:bottom-[72rem] lg:flex lg:bottom-[80rem]'>
            <Navbar/>
          </div>
        <div className='flex flex-col gap-9  '>
            <div className='flex justify-center items-center w-[18.125rem] max-[280px]:w-[18rem] md:w-[40rem] lg:w-[42.875rem] h-[21.2rem] md:h-[38rem] lg:h-[40rem] bg-[#000000] rounded-[0.625rem]'>
              <div className='flex flex-col'>
                <h1 className='text-center text-[#DFAA5B] text-sm md:text-[3rem] lg:text-[2.275rem] mb-[1.875rem] md:mb-12 lg:mt-[1rem] CircularStd font-bold'>Your Reservation</h1>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-[0.875rem] md:gap-[1rem] lg:gap-[1.5rem] lg:ml-[0.8rem]'>
                <div className='flex cursor-pointer items-center px-5 gap-2 w-[13.25rem] md:w-[30rem] lg:w-[30.2rem] h-9 md:h-[4rem] lg:h-[4.255rem] md:rounded-[0.625rem] bg-[#FFFFFF]'>
                  <h1 className='text-[0.625rem] md:text-sm lg:text-xl text-[#000000] CircularStd  font-medium leading-3'>Check-In</h1>
                  <div className="relative">
                    <DatePicker
                      name='check-in'
                      required
                      selected={selectedDate}
                      onChange={handleDateChange}
                      onClickOutside={() => setIsDatePickerOpen(false)}
                      onFocus={() => setIsDatePickerOpen(true)}
                      open={isDatePickerOpen}
                      dateFormat="yyyy-MM-dd"
                      className='flex justify-center items-center ml-2 md:ml-36  lg:ml-40 outline-none pl-2 pr-3 w-[11rem] md:w-[14rem] lg:w-[22.2rem] h-9 md:h-[4rem] lg:h-[4.255rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#FFFFFF]'
                    />
                    <Image
                      src={CalendarIcon}
                      alt='Calendar Icon'
                      width={18}
                      height={18}
                      className='absolute top-1/2 transform -translate-y-1/2 right-3 lg:right-2 w-[1.125rem] h-[1.125rem] md:w-[2rem] lg:w-[2.625rem] md:h-[2rem] lg:h-[3.575rem]'
                      onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                    />
                  </div>
                </div>
                <div className='flex cursor-pointer items-center px-5 gap-2 w-[13.25rem] md:w-[30rem] lg:w-[38.2rem] h-9 md:h-[4rem] lg:h-[4.255rem] md:rounded-[0.625rem] bg-[#FFFFFF]'>
                  <h1 className='text-[0.625rem] md:text-sm lg:text-xl text-[#000000] CircularStd font-medium leading-3'>Check-Out</h1>
                  <div className="relative">
                    <DatePicker
                      name='check-out'
                      required
                      selected={selectedDate2}
                      onChange={handleDateChange2}
                      onClickOutside={() => setIsDatePickerOpen2(false)}
                      onFocus={() => setIsDatePickerOpen2(true)}
                      open={isDatePickerOpen2}
                      dateFormat="yyyy-MM-dd"
                      className='flex justify-center items-center ml-2 md:ml-[8.5rem] lg:ml-[5rem] outline-none pl-2 lg:pl-[4.5rem] pr-3 w-[11rem] md:w-[14rem] lg:w-[25.2rem] h-9 md:h-[4rem] lg:h-[4.255rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#FFFFFF]'
                    />
                    <Image
                      src={CalendarIcon}
                      alt='Calendar Icon'
                      width={18}
                      height={18}
                      className='absolute top-1/2 transform -translate-y-1/2 right-3 lg:right-0 lg:left-[27.5rem] w-[1.125rem] h-[1.125rem] md:w-[2rem] lg:w-[3.625rem] md:h-[2rem] lg:h-[2.575rem]'
                      onClick={() => setIsDatePickerOpen2(!isDatePickerOpen2)}
                    />
                  </div>
                </div>
                  {/* <div 
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
                    <input type="date" className='' ref={hiddenCheckInInput} />
                  </div> */}
                  {/* <div 
                  onClick={handleClickCheckIn}
                  className='flex items-center justify-between px-3 lg:px-8 w-[15.25rem] md:w-[30rem] lg:w-[48.2rem] h-9 md:h-[4rem] lg:h-[7.255rem] bg-white rounded-[0.313rem]'>
                    <h1 className='text-[0.625rem] md:text-3xl lg:text-4xl text-[#000000] font-Lexend font-medium leading-3'>Check-In</h1>
                    <Image
                    src={CalendarIcon}
                    alt='Calendar Icon'
                    width={18}
                    height={18}
                    className='w-[1.125rem] h-[1.125rem] md:w-[2rem]  lg:w-[3.625rem] md:h-[2rem] lg:h-[3.575rem]'
                    />
                    <input type="date" className='' ref={hiddenCheckInInput} />
                  </div> */}
                  <div className='flex cursor-pointer items-center justify-between px-5 gap-2 w-[13.25rem] md:w-[30rem] lg:w-[38.2rem] h-9 md:h-[4rem] lg:h-[4.255rem] md:rounded-[0.625rem] bg-[#FFFFFF]'>
                      <h1 className='text-[0.625rem] md:text-sm lg:text-[1.325rem] text-[#000000] CircularStd font-medium leading-3'>Email</h1>
                      <input type='email' required name='email' className='flex cursor-pointer items-center outline-none  md:text-3xl  px-5 gap-2 w-[12rem] md:w-[35rem] lg:w-[38.2rem] h-9 md:h-[4rem] lg:h-[4.255rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#FFFFFF]'/>
                  </div>
                  <div className='flex items-center justify-between px-3 md:px-6 lg:px-5 w-[15.25rem] md:w-[30rem] lg:w-[38.2rem] h-9 md:h-[4rem] lg:h-[4.255rem] bg-white rounded-[0.313rem]'>
                    <h1 className='text-[0.625rem] ml-2 md:text-base lg:text-[1.325rem] text-[#000000] CircularStd font-medium leading-3'>Guests</h1>
                    <div className='relative'>
                      <select
                        name='guest-number'
                        required
                        value={selectedValue}
                        onChange={(e) => handleSelect(e.target.value)}
                        className=' appearance-none w-[8.25rem] md:w-[16rem] lg:w-[25.2rem] bg-transparent border-none outline-none text-[0.625rem] md:text-base lg:text-3xl pl-0 lg:pl-[4.5rem] text-[#DFAA5B]'
                      >
                        <option value="">Select</option>
                        {dropdownOptions.map((option) => (
                          <option className='relative top-[12rem] z-50' key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className='absolute right-0 top-0 h-full w-8 pointer-events-none flex items-center justify-center'>
                        <FontAwesomeIcon icon={faChevronDown} className='w-4 h-4 md:w-[2rem] md:h-[2rem] lg:w-[2.625rem] lg:h-[2.575rem] text-[#DFAA5B]'/>
                      </div>
                    </div>
                  </div>
                  {/* <div className='flex items-center justify-between px-3 md:px-6 lg:px-8 w-[15.25rem] md:w-[30rem] lg:w-[48.2rem] h-9 md:h-[4rem] lg:h-[7.255rem] bg-white rounded-[0.313rem]'>
                    <h1 className='text-[0.625rem] md:text-base lg:text-3xl text-[#000000] CircularStd font-medium leading-3'>Guests</h1>
                    <FontAwesomeIcon icon={faChevronDown} className='w-4 h-4  md:w-[2rem] md:h-[2rem] lg:w-[3.625rem] lg:h-[3.575rem] text-[#DFAA5B]'/>
                  </div> */}
                  <button typeof='submit' className='flex justify-center items-center CircularStd w-[15.25rem] md:w-[30rem] md:h-[4rem] lg:w-[37.975rem] h-9 lg:h-[4rem] bg-[#DFAA5B] text-[#000000] text-xs md:text-2xl lg:text-[1.5rem] font-Lexend font-bold leading-4 mt-2 rounded-[0.313rem]' type='submit' onClick={() => console.log("Works")}>
                      Book Apartment
                  </button>
                </form>
              </div>
            </div>
        </div>

        <div className='relative top-20 w-[18.875rem] md:w-[45rem] lg:w-[55.2rem] h-[10rem] md:h-[40rem] lg:h-[29.375rem]  rounded-[0.625rem] md:rounded-[4.125rem] lg:rounded-[4.125rem] lg:top-[20rem]'>
                    <div className='absolute z-50 CircularStd flex justify-center items-center  bg-[#00000078] rounded-[0.625rem] lg:rounded-[1.25rem] left-3 md:left-10 md:top-4 lg:left-10  bottom-[11rem] lg:top-[-16rem] opacity-70 w-[6.4rem] h-[2.325rem] md:w-[8rem] md:h-[4rem] lg:w-[18.325rem] lg:h-[5.6rem] '>
                      <div className='flex justify-center items-center text-sm md:text-lg lg:text-[2rem] text-white'>
                        <h1>N250,000/day</h1>
                      </div>
                    </div>
          <div className='absolute bottom-0   md:bottom-[7rem] lg:bottom-0 lg:top-[-17.675rem] '>
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
      src={Item1}
      alt="Item 1"
      className='rounded-2xl lg:rounded-3xl'
/>
  </div>
  <div>
    <Image
      src={Item2}
      alt="Item 2"
      className='rounded-2xl lg:rounded-3xl'

    />
  </div>
  <div>
    <Image
      src={Item3}
      alt="Item 3"
      className='rounded-2xl lg:rounded-3xl'
    />
  </div>
  <div>
    <Image
      src={Item4}
      alt="Item 4"
      className='rounded-2xl lg:rounded-3xl'
    />
  </div>
  <div>
    <Image
      src={Item5}
      alt="Item 5"
      className='rounded-2xl lg:rounded-3xl'
    />
  </div>
  <div>
    <Image
      src={Item6}
      alt="Item 6"
      className='rounded-2xl lg:rounded-3xl'
    />
  </div>
  <div>
    <Image
      src={Item7}
      alt="Item 7"
      className='rounded-2xl lg:rounded-3xl'
    />
  </div>
  <div>
    <Image
      src={Item8}
      alt="Item 8"
      className='rounded-2xl lg:rounded-3xl'
    />
  </div>
  {/* <div>
    <Image
      src={Item9}
      alt="Item 9"
      className=""
    />
  </div> */}

                </Carousel>
          </div>
          {/* <div className=' flex justify-center items-center mx-4 lg:mx-24 mt-[11rem] md:mt-[30rem] lg:mt-[55rem]'>
            <p className='text-center text-white text-[0.675rem] CircularStd md:text-2xl lg:text-2xl   font-Lexend font-medium  '>Our Bedrooms are fully equipped with fully  functional Air conditioners, A king sized bed 
with 7 pillows and various duvets, a TV console
and an Ensuite bathroom.</p>
          </div> */}
        </div>
        
 
        
      </div>
    </div>
  )
}

export default Book
