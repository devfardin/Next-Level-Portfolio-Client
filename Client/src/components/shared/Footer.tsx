import React from 'react'
import logo from '../../../public/white-logo.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='container mx-auto py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {/* First items */}
            <div className='flex flex-col gap-5'>
            <Image alt="Fardin's Logo" src={logo} width={300} height={200} />
            <p className='font-normal text-base text-white'>Fardin Ahmed is a skilled web developer specializing in Next.js, React, WordPress, and custom web solutions. With expertise in e-commerce, plugin development, and website optimization, he builds high-performance, user-friendly digital experiences. 🚀</p>
            <a className='font-medium text-white text-2xl hover:text-primery duration-300 transition-colors' href="mailto:contactfardin22@gmail.com">contactfardin22@gmail.com</a>
            </div>
            {/* second column */}
            <div className='text-center'>
                <h1 className='font-normal text-white text-2xl'>Explore Link</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
