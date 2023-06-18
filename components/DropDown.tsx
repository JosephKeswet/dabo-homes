import Image from 'next/image'
import React, { useState } from 'react'
import ArrowDown from '../assets/icons/ArrowDown.svg'

type Props = {}

const DropDown = (props: Props) => {
  const nigeriaCities = [
    { name: 'Lagos' },
    { name: 'Kano' },
    { name: 'Ibadan' },
    { name: 'Kaduna' },
    { name: 'Port Harcourt' },
    { name: 'Benin City' },
    { name: 'Maiduguri' },
    { name: 'Zaria' },
    { name: 'Aba' },
    { name: 'Jos' },
    { name: 'Ilorin' },
    { name: 'Oyo' },
    { name: 'Enugu' },
    { name: 'Abeokuta' },
    { name: 'Abuja' },
    { name: 'Sokoto' },
    { name: 'Onitsha' },
    { name: 'Warri' },
    { name: 'Okene' },
    { name: 'Calabar' },
    { name: 'Katsina' },
    { name: 'Akure' },
    { name: 'Ado-Ekiti' },
    { name: 'Kano' },
    { name: 'Bauchi' },
    { name: 'Ebute Ikorodu' },
    { name: 'Makurdi' },
    { name: 'Minna' },
    { name: 'Effon Alaiye' },
    { name: 'Ilesha' },
    { name: 'Owo' },
    { name: 'Umuahia' },
    { name: 'Ikot Ekpene' },
    { name: 'Gombe' },
    { name: 'Jimeta' },
    { name: 'Gusau' },
    { name: 'Mubi' },
    { name: 'Ikire' },
    { name: 'Owerri' },
    { name: 'Shagamu' },
    { name: 'Ijebu Ode' },
    { name: 'Ugep' },
    { name: 'Nnewi' },
    { name: 'Ise Ekiti' },
    { name: 'Ila Orangun' },
    { name: 'Saki' },
    { name: 'Bida' },
    { name: 'Awka' },
    { name: 'Ijero Ekiti' },
    { name: 'Inisa' },
    { name: 'Abuja' },
    { name: 'Sapele' },
    { name: 'Kisi' },
    { name: 'Malumfashi' },
    { name: 'Kumo' },
    { name: 'Shaki' },
    { name: 'Damaturu' },
    { name: 'Azare' },
    { name: 'Gashua' },
    { name: 'Potiskum' },
    { name: 'Nguru' },
    { name: 'Hadejia' },
    { name: 'Bama' },
    { name: 'Ilobu' },
    { name: 'Jalingo' },
    { name: 'Gumel' },
    { name: 'Ijebu Igbo' },
    { name: 'Enugu Ukwu' },
    { name: 'Nnewi' },
    { name: 'Nsukka' },
    { name: 'Kontagora' },
    { name: 'Wudil' },
    { name: 'Lafia' },
    { name: 'Igboho' },
    { name: 'Katsina-Ala' },
    { name: 'Igbo-Ora' },
    { name: 'Uromi' },
    { name: 'Birnin Kebbi' },
    { name: 'Pindiga' },
    { name: 'Azare' },
    { name: 'Nkpor' },
    { name: 'Ijero-Ekiti' },
    { name: 'Amaigbo' },
    { name: 'Lafiagi' },
    { name: 'Kachia' },
    { name: 'Gombi' },
    { name: 'Biu' },
    { name: 'Keffi' },
    { name: 'Shinkafi' },
    { name: 'Baro' },
    { name: 'Birnin Kudu' },
    { name: 'Kaiama' },
    { name: 'Kukawa' },
    { name: 'Rano' },
    { name: 'Katsina' },
    { name: 'Dutse' },
    { name: 'Ikirun' },
    { name: 'Ijebu-Jesa' },
    { name: 'Badagry' },
    { name: 'Nasarawa' },
    { name: 'Kagoro' },
    { name: 'Oyan' },
    { name: 'Iwo' },
    { name: 'Buguma' },
    { name: 'Lafiagi' },
    { name: 'Obudu' },
    { name: 'Lere' },
    { name: 'Ode' },
    { name: 'Idanre' },
    { name: 'Kuje' },
    { name: 'Pankshin' },
    { name: 'Ubiaja' },
    { name: 'Yola' },
    { name: 'Lapai' },
    { name: 'Okrika' },
    { name: 'Bode Saadu' },
    { name: 'Esuk Oron' },
    { name: 'Kazaure' },
    { name: 'Aku' },
    { name: 'Igbo-Ukwu' },
    { name: 'Emure Ekiti' },
    { name: 'Kari' },
    { name: 'Gwoza' },
    { name: 'Akpafu' },
    { name: 'Daura' },
    { name: 'Funtua' },
    { name: 'Ejigbo' },
    { name: 'Fiditi' },
    { name: 'Ode' },
    { name: 'Akpabuyo' },
    { name: 'Kamba' },
    { name: 'Abejukolo' },
    { name: 'Idah' },
    { name: 'Soba' },
    { name: 'Babana' },
    { name: 'Jega' },
  ];  

  const [show,setShow] = useState<boolean>(false);
  const [selectedCity,setSelectedCity] = useState<string>('');
  console.log(selectedCity);
  return (
    <div className='relative'>
        <div 
        onClick={() => setShow(!show)}
        className='flex justify-center items-center cursor-pointer px-2  gap-2 w-[6.6rem] md:w-[6.6rem]  lg:w-48 h-[1.6rem] md:h-[1.6rem] lg:h-[3.755rem] rounded-[0.313rem] md:rounded-[0.625rem] bg-[#FFFFFF]'>
            <h1 className='w-[8rem] text-xs text-[#00000080] CircularStd opacity-50 md:text-xs lg:text-xl'>{selectedCity != '' ? selectedCity : "Select a City"}</h1>
            <div>
              <Image
              src={ArrowDown}
              width={17}
              height={13}
              className='w-2 h-2 lg:w-4 lg:h-4'
              alt='Arrow Down'
              />
            </div>
        </div>
        {show && <div className='absolute flex flex-col gap-2 w-[6.6rem] md:w-[6.6rem]  lg:w-48 h-[9rem] z-50 rounded-[0.313rem] md:rounded-[0.625rem] bg-white shadow-2xl overflow-y-scroll scrollbar-hide'>
            {nigeriaCities.map((city:any,index:any) => (
              <div key={index} className='cursor-pointer' onClick={() => {
                setSelectedCity(city?.name)
                setShow(!show)
                }}>
                <h1 className='text-center mb-2' >{city?.name}</h1>
                <hr className='border-[#E0E0E0] border-[0.0225rem]'/>
              </div>
            ))}
        </div>}
    </div>
  )
}

export default DropDown