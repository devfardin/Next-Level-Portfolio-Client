"use client"
import orangeDot from '../../../../public/images/orangeDot.png'
import homeNannerShape from '../../../../public/images/homeNannerShape.png'
import Image from 'next/image'
import fardinAhmed from '../../../../public/images/fardin-ahmed.png'
import { TypeAnimation } from 'react-type-animation'
import ResumiDownload from './ResumiDownload'
import Container from '@/components/shared/Container'
const HomePageHero = () => {
    return (
        <div className='bg-background'>
            <Container>
                <div className='flex flex-col-reverse lg:flex-row items-end lg:items-center justify-between pt-10 md:pt-16 gap-16'>
                    <div className='flex-1 pb-0 sm:pb-6'>
                        <div className='flex gap-3 items-center'>
                            <Image alt="Who's me" src={orangeDot} width={20} height={50} />
                            <span className=' text-base font-normal text-black_secondary'>I am Mearn-stack Web Developer</span>
                        </div>
                        <div className='flex flex-col gap-4 mt-3'>
                            <h1 className='text-4xl sm:text-5xl md:text-4xl xl:text-[75px] font-semibold leading-[1.2em] md:leading-[1.1em] inline'> Creative Design  & Web Development <TypeAnimation
                                sequence={[
                                    'Services',
                                    1000,
                                    'Solutions',
                                    1000,
                                    'Expertise',
                                    2000,
                                    'Innovation',
                                    3000,
                                    'Excellence',
                                    4000,
                                ]}
                                wrapper="span"
                                className='text-primery inline-block'
                                cursor={true}
                                repeat={Infinity}/>
                            </h1>

                            <p className='font-normal text-lg text-black_secondary mt-3'>
                                I m Fardin Ahmed, a skilled MERN Stack Developer and WordPress Expert.
                                With over 3 years of experience, I specialize in creating eCommerce sites, CMS solutions, and custom web development. I dedicate 12-14 hours a day to delivering high-quality, user-friendly websites for businesses and startups globally. Let’s create something amazing together! 🚀</p>
                            <div className='mt-8'>
                                <ResumiDownload />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[500px] mx-auto lg:place-items-end align-middle lg:align-bottom relative'>
                        <Image alt="bg move " className='text-right animate-bg-move-3d absolute sm:top-10 sm:right-12 z-0 ' src={homeNannerShape} width={400} height={500} />
                        <Image alt="Fardin Ahmed" className='text-right z-10 relative' src={fardinAhmed} width={500} height={500} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomePageHero
