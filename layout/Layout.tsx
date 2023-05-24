import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import React from 'react'

type Props = {}

const Layout = ({children}:any) => {

  return (
    <div>
        <div>{children}</div>
        <div className=''>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout