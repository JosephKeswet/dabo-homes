import Card from '@/components/Card'
import DropDown from '@/components/DropDown'
import Image from 'next/image'
import KitchenIcon from '../assets/icons/Kitchen.svg'
import Bedroom from '../assets/Bedroom.svg'
import Livingroom from '../assets/Livingroom.svg'
import Dinning from '../assets/Dinning.svg'
import Kitchen from '../assets/Kitchen.svg'
import Link from 'next/link'
import PoolIcon from '../assets/icons/Pool.svg'
import WifiIcon from '../assets/icons/Wifi.svg'
import GymIcon from '../assets/icons/Gym.svg'
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
import { Carousel } from 'react-responsive-carousel'
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'








export default function Home() {

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


  const cardInfo = [
    {mainText: 'Bedroom',subText: `Our ensuite Bedrooms are fully equipped with fully 
    functional Air conditioners, A king sized bed 
    with  TVs, wardrobes, and dedicated workspaces.
    `,
    image: Bedroom,
    route:'/bedroom'
  },
    {mainText:"Living Room",subText: `Possessing a spacious environ, our living rooms
    are adequately equipped with double air conditioners, a 65inch TV set, sofas, mini library, and a lounge facing 
    the waterview and adorned with the best of artworks.`,
    image: Livingroom,
    route:'/livingroom'
  },
    {mainText: "Dinning Section",subText:`Family and friends are not left out in our apartment
    plans, sit and eat together away from home but just 
    like home with our six-seat capacitated dining set.    
    `,
    image: Dinning,
    route:'/dinning'
  },
    {mainText: "Kitchen",subText:`We know how being away from home can be, but our
    well-equipped kitchen will bring home to you: it is 
    fully stacked with kitchenware, an air conditioner
    a two-seater dining table and a water heater.`,
    image: Kitchen,
    route:'/kitchen'
  }

  ]
  const Facilities = (img:any) => (
    <div>
      
        <div className='flex flex-col md:gap-5 lg:gap-6 items-center'>
            <div className='w-2 h-3 md:w-auto lg:w-auto'>
              <Image
                src={img}
                width={28}
                height={36}
                alt="Kitchen Icon"
              />
            </div>
            <h1 className='text-[#DFAA5B] text-[0.313rem] md:text-2xl lg:text-2xl'>Kitchen</h1>
        </div>
    </div>
  )
  return (
    <main
      className=''
    >
      <Head>
        <title>Idabohomes</title>
        <meta name="description" content="This is my apartment booking site" />
      </Head>
      <div className="relative inset-0 bg-[url('../assets/HomeBackground.svg')] w-auto h-[18.5rem] 
      max-[280px]:h-[25rem] max-[280px]:bg-center
      max-[540px]:bg-cover
      md:h-[42rem] md:bg-contain 
      lg:h-[65rem] bg-no-repeat bg-contain lg:bg-cover
      ">
        <div>
          <Navbar/>
        </div>
        {/* <div className='flex justify-center'>
          <div className='absolute top-8 md:top-20 lg:top-44 z-30  flex items-center justify-center flex-wrap gap-3'>
            <div className='hidden lg:flex pt-5 md:pt-0'>
            <DropDown/>
            </div>

            <div className='lg:hidden w-[17rem] flex items-center gap-5 justify-center'>
                <div className='pt-5 md:pt-5'>
                <DropDown/>
                </div>
                <Link href='/book' className='lg:hidden cursor-pointer flex  justify-center items-center gap-2 w-[6.7rem] mt-5 h-[1.6rem] rounded-[0.313rem] bg-[#DFAA5B]'>
                  <h1 className='text-[0.6rem] CircularStd text-white md:text-xs lg:text-xl'>Check Availability</h1>
                </Link>
            </div>
            <div className='lg:hidden cursor-pointer flex flex-col'>
              <h1 className='text-sm text-[#00000080] CircularStd opacity-50  md:text-xs lg:text-xl'>Check In</h1>
              <input type="date" name="" id="" className='px-2 rounded-[0.313rem]'/>
            </div>
            <div className='lg:hidden cursor-pointer flex flex-col'>
              <h1 className='text-sm text-[#00000080] CircularStd opacity-50 md:text-xs lg:text-xl'>Check Out</h1>
              <input type="date" name="" id="" className='px-2 rounded-[0.313rem]'/>
            </div>

            <div className='hidden lg:flex cursor-pointer items-center px-5 gap-2   md:rounded-[0.625rem] bg-[#FFFFFF]'>
              <h1 className='text-[0.313rem] CircularStd text-[#00000080] opacity-50 md:text-xs lg:text-lg'>Check In</h1>
              <input type="date" name="" id="" className='flex justify-center items-center outline-none gap-2 text-[#00000080] opacity-50 w-[3.125rem] md:w-24  lg:w-36 h-4 md:h-8 lg:h-[3.755rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#FFFFFF]'/>
            </div>
            <div className='hidden lg:flex cursor-pointer  items-center px-5 gap-2 w-[3.125rem] md:hidden  lg:w-[18rem] h-4 md:h-8 lg:h-[3.755rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#FFFFFF]'>
              <h1 className='text-[0.313rem] CircularStd text-[#00000080] opacity-50 md:text-xs lg:text-lg'>Check Out</h1>
              <input type="date" name="" id="" className='flex justify-center items-center outline-none gap-2 text-[#00000080] opacity-50 w-[3.125rem] md:w-24  lg:w-36 h-4 md:h-8 lg:h-[3.755rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#FFFFFF]'/>
            </div>
            <Link href='/book' className='hidden lg:flex CircularStd  cursor-pointer justify-center items-center gap-2 w-[3.125rem] md:w-24  lg:w-48 h-4 md:h-8 lg:h-[3.755rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#DFAA5B]'>
              <h1 className='text-[0.313rem] text-white md:text-xs lg:text-xl'>Check Availability</h1>
            </Link>
          </div>
        </div> */}
        <div className='flex justify-center'>
          <div className='absolute top-[4.5rem] max-[280px]:top-[14rem] md:top-48 lg:top-96 z-30  flex flex-col items-center gap-3 '>
              <h1 className='shadow-lg text-xl text-center md:text-5xl text-white lg:text-[4.325rem] font-Lexend font-normal max-[280px]:text-sm'>WELCOME TO IDABO HOMES</h1>
              <p className='text-center CircularStd text-white text-xs md:text-2xl lg:text-[1.825rem] lg:leading-10 w-[21.5rem] max-[280px]:w-[16rem] md:w-[40rem] lg:w-[50rem]'>Luxurious waterfront living space specially curated to fill you with joy for your short, medium, and extended stay.</p>
          </div>
          <div className='mb-14 lg:mb-56 mt-8 lg:mt-[20rem] absolute bottom-[2rem] '>
        <h1 className='text-center text-[#E0AC5F] text-[1rem] md:text-[2rem] lg:text-[2.5rem] CircularStd font-black'>Let Us welcome you Home!</h1>
        <div className='flex justify-center mt-1 md:mt-8'>
          <Link href='/book'>
            <button className='w-[8.5rem] h-6 CircularStd md:w-[20rem] md:h-[4.75rem] lg:w-[26.125rem] lg:h-[4.75rem] rounded-[0.313rem] md:rounded-[0.625rem] text-white text-[0.375rem] md:text-xl lg:text-2xl font-Lexend font-semibold bg-[#DFAA5B]'>
              Book a stay Now
            </button>
          </Link>
        </div>
      </div>
        </div>
        <div className='flex justify-center'>
          <div className='absolute top-[14.5rem] max-[280px]:top-[22rem] max-[360px]:top-[13rem] md:top-[30rem] lg:top-[56rem] z-30  flex flex-col items-center gap-3 '>
              <h1 className='shadow-lg md:text-3xl lg:text-[2rem] text-center  text-[#DFAA5B]  CircularStd font-bold max-[280px]:text-sm'>Facilities</h1>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='shadow-xl flex flex-row items-center justify-center gap-4 md:gap-10 lg:gap-24 absolute top-[17rem] max-[280px]:top-[24rem] max-[360px]:top-[15rem] max-[375px]:top-[16rem] md:top-[34rem] lg:top-[61rem] z-30  w-44 md:w-[38rem] lg:w-[48rem] h-[2.125rem]  md:h-[6rem] lg:h-[6.5rem] rounded-[0.625rem] bg-[#000000]'>
          <div className='flex flex-col md:gap-5 lg:gap-6 items-center'>
            <div className='w-2 h-3 md:w-auto lg:w-auto'>
                  <Image
                    src={KitchenIcon}
                    width={28}
                    height={36}
                    alt="Kitchen Icon"
                  />
                </div>
                <h1 className='text-[#DFAA5B] CircularStd text-[0.313rem] md:text-2xl lg:text-2xl'>Kitchen</h1>
            </div>
            <div className='flex flex-col md:gap-5 lg:gap-6 items-center'>
            <div className='w-2 h-3 md:w-auto lg:w-auto'>
              <Image
                src={PoolIcon}
                width={36}
                height={36}
                alt="Kitchen Icon"
              />
            </div>
            <h1 className='text-[#DFAA5B] CircularStd text-[0.313rem] md:text-2xl lg:text-2xl'>Pool</h1>
        </div>          
        <div className='flex flex-col md:gap-5 lg:gap-6 items-center'>
            <div className='w-2 h-3 md:w-auto lg:w-auto'>
              <Image
                src={WifiIcon}
                width={28}
                height={36}
                alt="Kitchen Icon"
              />
            </div>
            <h1 className='text-[#DFAA5B] CircularStd text-[0.313rem] md:text-2xl lg:text-2xl'>Wifi</h1>
        </div>
        <div className='flex flex-col md:gap-5 lg:gap-6 items-center'>
            <div className='w-2 h-3 md:w-auto lg:w-auto'>
              <Image
                src={GymIcon}
                width={28}
                height={36}
                alt="Kitchen Icon"
              />
            </div>
            <h1 className='text-[#DFAA5B] CircularStd text-[0.313rem] md:text-2xl lg:text-2xl'>Gym</h1>
        </div>
        </div>
        </div>
      </div>
      {/* Our appartments */}
      <div className='mt-4 max-[280px]:mt-8 lg:mt-24'>
          <h1 className='text-[#DFAA5B] CircularStd text-center text-[1rem] md:text-[2rem] lg:text-[2rem] '>Our Apartment</h1>
          <div className='flex flex-wrap justify-center gap-6 md:gap-20 items-center mt-4 lg:mt-20 '>
            {cardInfo.map((item:any,index:any) => (
            <Card 
            key={item}
            mainText={item?.mainText} 
            subText={item?.subText} 
            image={item?.image}
            route={item?.route}
            />))}
          </div>
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
      
      {/* <div className=' mt-7 lg:mt-16'>
            <div className='mx-6 lg:mx-12 mb-4 lg:mb-24'>
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
                    <Image src={Item1} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    
                    />
                    </div>
                    <div>
                    <Image src={Item2} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Item3} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Item4} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Item5} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Item6} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Item7} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Item8} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
                    <div>
                    <Image src={Item9} alt='Kitchen' 
                    className='h-[16.35rem] max-[280px]:h-[14rem] md:h-[40rem] lg:h-[55.825rem] rounded-[0.625rem]'
                    />
                    </div>
            
                </Carousel>
            </div>
        </div> */}
    </main>
  )
}
