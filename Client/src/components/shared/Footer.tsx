import React from 'react'
import logo from '../../../public/images/white-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoFacebook } from 'react-icons/bi'
import { TbBrandFiverr } from 'react-icons/tb'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineGithub } from 'react-icons/ai'
import { PiMapPinFill } from 'react-icons/pi'
const Footer = () => {
  const exporeLink = [
    {
      lable: "About Us",
      link: '/about',
    },
    {
      lable: "Resume",
      link: '/resume',
    },
    {
      lable: "Portfolio",
      link: '/portfolio',
    },
    {
      lable: "Blog",
      link: '/blog',
    },
  ]
  return (
    <div className='bg-black'>
      <div className='container mx-auto py-10 lg:py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-10 lg:gap-32 justify-between px-10'>
          {/* First items */}
          <div className='flex flex-col gap-5 sm:col-span-6 xl:col-span-2'>
            <Image alt="Fardin's Logo" src={logo} width={300} height={200} />
            <p className='font-normal text-base text-white mt-3'>Fardin Ahmed is a skilled web developer specializing in Next.js, React, WordPress, and custom web solutions. With expertise in e-commerce, plugin development, and website optimization, he builds high-performance, user-friendly digital experiences. 🚀</p>
            <a className='font-medium text-white text-xl md:text-2xl hover:text-primery duration-300 transition-colors' 
            href="mailto:contactfardin22@gmail.com">
              contactfardin22@gmail.com
            </a>
          </div>
          {/* second column */}
          <div className='sm:col-span-3 md:col-span-1'>
            <h1 className='font-normal text-white text-2xl'>Explore Link</h1>
            <div className='flex flex-col gap-4 mt-4 xl:mt-14'>
              {
                exporeLink?.map((link, index) => <Link className='text-white hover:text-primery transition-colors duration-300 text-lg' key={index} href={link.link}>{link.lable}</Link>)
              }
            </div>
          </div>
          {/* Thired column */}
          <div>
            <h1 className='font-normal text-white text-2xl'>My Services</h1>
            <div className='flex flex-col gap-4 mt-4 xl:mt-14'>
              {
                exporeLink?.map((link, index) => <Link className='text-white hover:text-primery transition-colors duration-300 text-lg' key={index} href={link.link}>{link.lable}</Link>)
              }
            </div>
          </div>
          {/* Fourth column */}
          <div className='lg:col-span-2'>
            <h1 className='font-normal text-white text-2xl'>Follow me</h1>
            <div className='mt-4 xl:mt-14'>
              <div className='flex gap-3 items-center mb-7'>
                <a href='https://www.facebook.com/devfardin' target='_blank' className='text-white hover:text-primery bg-primery hover:bg-white duration-300 transition-colors p-1.5 rounded-md border-r-[3px] border-t-[3px] border-transparent hover:!border-primery'><BiLogoFacebook size={28} /></a>
                <a href='https://www.linkedin.com/in/fardinahmed2020' target='_blank' className='text-white hover:text-primery bg-primery hover:bg-white duration-300 transition-colors p-1.5 rounded-md border-r-[3px] border-t-[3px] border-transparent hover:!border-primery'><RiLinkedinFill size={26} /></a>
                <a href='https://github.com/devfardin' target='_blank' className='text-white hover:text-primery bg-primery hover:bg-white duration-300 transition-colors p-1.5 rounded-md border-r-[3px] border-t-[3px] border-transparent hover:!border-primery'><AiOutlineGithub size={26} /></a>
                <a href='https://www.fiverr.com/fardin_ahmed_1' target='_blank' className='text-white hover:text-primery bg-primery hover:bg-white duration-300 transition-colors p-1.5 rounded-md border-r-[3px] border-t-[3px] border-transparent hover:!border-primery'><TbBrandFiverr size={26} /></a>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                  <span>
                    <PiMapPinFill size={22} className='text-primery' />
                  </span>
                  <span className='text-white text-lg'>Tangail, Dhaka, Bangladesh</span>
                </div>
                <a href='tel:+8801316049157' className='flex gap-2 items-center group'>
                  <span>
                    <PiMapPinFill size={22} className='text-primery' />
                  </span>
                  <span className='text-white group-hover:text-primery text-lg'>+8801316049157</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
