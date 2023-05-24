import Card from '@/components/Card'
import DropDown from '@/components/DropDown'
import Image from 'next/image'
import KitchenIcon from '../assets/icons/Kitchen.svg'
import Bedroom from '../assets/Bedroom.svg'
import Livingroom from '../assets/Livingroom.svg'
import Dinning from '../assets/Dinning.svg'
import Kitchen from '../assets/Kitchen.svg'





export default function Home() {
  const cardInfo = [
    {mainText: 'Bedroom',subText: `Our Bedrooms are fully equipped with fully 
    functional Air conditioners, A king sized bed 
    with 7 pillows and various duvets, a TV console
    and an Ensuite bathroom.`,
    image: Bedroom
  },
    {mainText:"Living Room",subText: `Possessing a spacious environ, our living rooms
    are properly equipped with a 72inch TV set, a
    proper set of Sofas, a dinning section, bean bags
    and adorned with the best of artworks to your 
    taste. `,
    image: Livingroom
  },
    {mainText: "Dinning Section",subText:`Family and friends are not left out in our apartment
    plans, sit and eat together away from home but just 
    like home with our 7 seat capacitated dinning set
    `,
    image: Dinning
  },
    {mainText: "Kitchen",subText:`We know how it can be being away from home but
    our well-equipped, Ensuite Kitchen will bring home
    to you, it is fully stacked with pots, plates, an electric
    cooker, dishwasher and many more`,
    image: Kitchen
  }

  ]
  const Facilities = () => (
    <div>
        <div className='flex flex-col md:gap-5 lg:gap-6 items-center'>
            <div className='w-2 h-3 md:w-auto lg:w-auto'>
              <Image
                src={KitchenIcon}
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
      <div className="relative inset-0 bg-[url('../assets/HomeBackground.svg')] w-auto h-[18.5rem] 
      max-[280px]:h-[14rem]
      max-[540px]:bg-cover
      md:h-[42rem] md:bg-contain 
      lg:h-[65rem] bg-no-repeat bg-contain lg:bg-cover
      ">
        <div className='flex justify-center'>
          <div className='absolute top-8 md:top-20 lg:top-44 z-30  flex items-center gap-3 border-[#DFAA5B] border-2 '>
            {[1,2,3,4].map(() => (<DropDown/>))}
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='absolute top-24 max-[280px]:top-16 md:top-48 lg:top-96 z-30  flex flex-col items-center gap-3 '>
              <h1 className='shadow-lg text-xl text-center md:text-5xl text-white lg:text-[4.325rem] font-Lexend font-normal max-[280px]:text-sm'>WELCOME TO IDABO HOMES</h1>
              <p className='text-center text-white text-xs md:text-2xl lg:text-[1.825rem] lg:leading-10 w-[21.5rem] max-[280px]:w-[16rem] md:w-[40rem] lg:w-[50rem]'>Luxurious waterfront living space specially curated to fill you with joy for your short, medium, and extended stay.</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='absolute top-[14.5rem] max-[280px]:top-[10rem] max-[360px]:top-[13rem] md:top-[30rem] lg:top-[54rem] z-30  flex flex-col items-center gap-3 '>
              <h1 className='shadow-lg md:text-3xl lg:text-[2rem] text-center  text-[#DFAA5B]  font-Lexend font-bold max-[280px]:text-sm'>Facilities</h1>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='shadow-xl flex items-center justify-center gap-4 md:gap-10 lg:gap-24 absolute top-[17rem] max-[280px]:top-[11.5rem] max-[360px]:top-[15rem] max-[375px]:top-[16rem] md:top-[34rem] lg:top-[58.2rem] z-30  w-44 md:w-[38rem] lg:w-[48rem] h-[2.125rem]  md:h-[6rem] lg:h-[6.5rem] rounded-[0.625rem] bg-[#000000]'>
            {[1,2,3,4].map(() => (<Facilities/>))}
          </div>
        </div>
      </div>
      {/* Our appartments */}
      <div className='mt-4 lg:mt-24'>
          <h1 className='text-[#DFAA5B] text-center text-[1rem] md:text-[2rem] lg:text-[2rem] '>Our Apartment</h1>
          <div className='flex flex-wrap justify-center gap-6 md:gap-20 items-center mt-4 lg:mt-20 '>
            {cardInfo.map((item:any) => (<Card mainText={item?.mainText} subText={item?.subText} image={item?.image}/>))}
          </div>
      </div>
      <div className='mb-14 lg:mb-56 mt-8 lg:mt-52'>
        <h1 className='text-center text-[#957554] text-[1rem] md:text-[2rem] lg:text-[2rem] font-Lexend font-semibold'>Let Us welcome you Home!</h1>
        <div className='flex justify-center mt-4 md:mt-8'>
          <button className='w-[8.5rem] h-6 md:w-[20rem] md:h-[4.75rem] lg:w-[26.125rem] lg:h-[4.75rem] rounded-[0.313rem] md:rounded-[0.625rem] text-white text-[0.375rem] md:text-xl lg:text-2xl font-Lexend font-semibold bg-[#DFAA5B]'>
            Book a stay Now
          </button>
        </div>
      </div>
    </main>
  )
}
