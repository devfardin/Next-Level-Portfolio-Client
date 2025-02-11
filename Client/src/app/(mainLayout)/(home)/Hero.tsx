"use client"
import orangeDot from '../../../../public/images/orangeDot.png'
import Image from 'next/image'
import fardinAhmed from '../../../../public/images/fardin-ahmed.png'
import { TypeAnimation } from 'react-type-animation'
import ResumiDownload from './ResumiDownload'
const HomePageHero = () => {
    return (
        <div className='bg-background'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-between pt-16'>
                    <div className='col-span-2'>
                        <div className='flex gap-3 items-center'>
                            <Image alt="Who's me" src={orangeDot} width={20} height={50} />
                            <span className=' text-base font-normal text-black_secondary'>I am Mearn-stack Web Developer</span>
                        </div>
                        <div className='flex flex-col gap-4 mt-3'>
                            <h1 className='text-[84px] font-semibold text-black 
                            leading-[1.1em]'>Creative Design <br /> and Web  <TypeAnimation
                                    sequence={[
                                        'Design',
                                        1000,
                                        'Solutions',
                                        2000,

                                    ]}
                                    wrapper="span"
                                    className='text-primery inline-block'
                                    cursor={true}
                                    repeat={Infinity}
                                /></h1>

                            <p className='font-normal text-base text-black_secondary mt-3'>
                                I m Fardin Ahmed, a skilled MERN Stack Developer and WordPress Expert.
                                With over 3 years of experience, I specialize in creating eCommerce sites, CMS solutions, and custom web development. I dedicate 12-14 hours a day to delivering high-quality, user-friendly websites for businesses and startups globally. Let’s create something amazing together! 🚀</p>
                                <div className='mt-10'>

                                {/* <HoverLink label='Download My CV' link='/'/> */}
                                <ResumiDownload/>
                                </div>

                        </div>
                    </div>
                    <div className='col-span-2 place-items-end align-bottom'>
                        <Image alt="Fardin Ahmed" className='text-right' src={fardinAhmed} width={550} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageHero
