import Footer from '@/components/Footer';
import SingleTopSection from '@/components/SingleTopSection';
import { useRouter } from 'next/router';
import React from 'react'

type Props = {}

const Layout = ({children}:any) => {
  const router = useRouter();

  const bedroomRoute = router.pathname === '/bedroom'
  const livingroomRoute = router.pathname === '/livingroom'
  const kitchenRoute = router.pathname === '/kitchen'
  const dinningRoute = router.pathname === '/dinning'
  const contact = router.pathname === '/contact'





  return (
    <div>
        {(bedroomRoute || livingroomRoute || kitchenRoute || dinningRoute ) && <SingleTopSection/>}
        <div>{children}</div>
        <div className=''>
         <Footer/>
        </div>
    </div>
  )
}

export default Layout