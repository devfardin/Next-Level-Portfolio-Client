import Container from '@/components/shared/Container'
import Counter from '@/components/shared/Counter'
import SubTitle from '@/components/shared/SubTitle'
import Title from '@/components/shared/Title'
import AboutIconOne from '../../../../public/images/aboutIconOne.png'
import AboutIconTwo from '../../../../public/images/aboutIconTwo.png'
import Image from 'next/image'
import { FaRegSquareCheck } from 'react-icons/fa6'
import ResumiDownload from './ResumiDownload'
import AboutMe from '@/../../public/images/aboutMe.webp'
const About = () => {
    return (
        <div className='my-24'>
            <Container>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='flex-1'>
                        <Image className='min-h-full rounded-lg object-cover' alt='About Me' src={AboutMe} 
                        width={1000} height={1000}/>
                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <div>
                            <SubTitle label='About Me' />
                            <Title label='I Can Design Anything You Want' />
                        </div>
                        <p className='text-lg text-secondary font-normal'>{`I bring your ideas to life with creative, modern, and user-friendly designs. Whether it's a stunning website, an engaging eCommerce platform, or a fully customized solution, I ensure high-quality, pixel-perfect designs that match your vision. Let’s create something extraordinary together! 🚀`}</p>

                        {/* Counter wrapper */}
                        <div className='flex flex-col sm:flex-row justify-between lg:items-center gap-6 lg:gap-16 mt-3'>
                            {/* First counter */}
                            <div className='flex-1'>
                                <div className='flex gap-3'>
                                    <div>
                                        <Image alt='about icon one' src={AboutIconOne} width={60} height={60} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <Counter className='text-primery text-xl font-bold' end={30} suffix=' +' />
                                        <h2 className='text-[21px] font-medium text-black'>Complete Project</h2>
                                    </div>
                                </div>
                            </div>
                            {/* Second Counter */}
                            <div className='flex-1'>
                                <div className='flex gap-3'>
                                    <div>
                                        <Image alt='about icon one' src={AboutIconTwo} width={60} height={60} />
                                    </div>
                                    <div className='flex flex-col'>
                                        <Counter className='text-primery text-xl font-bold' end={3} suffix=' +' />
                                        <h2 className='text-[21px] font-medium text-black'>
                                            Year of experience
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Counter wrapper end */}

                        {/* Features wrapper Start */}
                        <div className='flex flex-col sm:flex-row justify-between lg:items-center gap-2 mt-5 lg:mt-0 lg:gap-16'>
                            {/* Feature One */}
                            <div className='flex-1 flex flex-col gap-3'>
                                <div className='flex gap-2 items-center'>
                                    <FaRegSquareCheck
                                        className='text-lg text-primery' />
                                    <h3 className='text-lg font-normal text-black_secondary'>
                                        Work simple and cline design
                                    </h3>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaRegSquareCheck
                                        className='text-lg text-primery' />
                                    <h3 className='text-lg md:text-base font-normal text-black_secondary'>
                                        New idea and user friendly design
                                    </h3>
                                </div>
                            </div>
                            {/* Feature Two */}
                            <div className='flex-1 flex flex-col gap-3'>
                                <div className='flex gap-2 items-center'>
                                    <FaRegSquareCheck
                                        className='text-lg text-primery' />
                                    <h3 className='text-lg font-normal text-black_secondary'>
                                        Web Design Full stack
                                    </h3>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FaRegSquareCheck
                                        className='text-lg text-primery' />
                                    <h3 className='text-lg font-normal text-black_secondary'>
                                        Unlimited Revisions
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* Feature wrapper end */}
                        <div className='mt-3'>
                            <ResumiDownload/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About
