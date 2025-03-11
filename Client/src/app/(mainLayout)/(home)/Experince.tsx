import Container from '@/components/shared/Container'
import SubTitle from '@/components/shared/SubTitle'
import Title from '@/components/shared/Title'
import React from 'react'

const Experince = () => {
  const education = [
    {
      "degree": "BSc in Computer Science",
      "university": "University of ULAV",
      "year": "2018 - 2022",
      "description": "Pomnis voluptas assumenda est, omnis dolor repellendus."
    },
    {
      "degree": "BSc in Computer Science",
      "university": "University of ULAV",
      "year": "2018 - 2022",
      "description": "Pomnis voluptas assumenda est, omnis dolor repellendus."
    },
    {
      "degree": "Secondary School Education",
      "university": "Kindergarten",
      "year": "2006 - 2016",
      "description": "Pomnis voluptas assumenda est, omnis dolor repellendus."
    }
  ]
  return (
    <div className='bg-background py-14 mt-16 md:mt-24'>
      <Container>
        <div>
          <div className='flex flex-col items-center justify-center'>
            <SubTitle label='My Resume Fardin' />
            <Title label='10+ YEARS OF EXPERIENCE' align='text-center' />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-11 mt-7 relative">
            {/* Left Sidebar (Full Height Line) */}
            <div className="hidden lg:flex flex-col col-span-2 relative py-10">

              {/* Vertical Line spanning full height */}
              <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-[#929292]">
              </div>

              {/* Education Items */}
              <div className="relative flex items-center mt-10">
                {/* Circle Indicator */}
                <div className={`absolute -left-[0px] w-[18px] h-[18px] bg-primery rounded-full`}></div>
                <h1 className="text-2xl font-medium text-black ml-8">Education</h1>
              </div>

              {/* Software Skills Items */}
              <div className="relative flex items-center mt-48">
                {/* Circle Indicator */}
                <div className={`absolute -left-[0px] w-[18px] h-[18px] bg-primery rounded-full`}></div>
                <h1 className="text-2xl font-medium text-black ml-8">Software Skills</h1>
              </div>

              {/* Experince Skills Items */}
              <div className="relative flex items-center mt-48">
                {/* Circle Indicator */}
                <div className={`absolute -left-[0px] w-[18px] h-[18px] bg-primery rounded-full`}></div>
                <h1 className="text-2xl font-medium text-black ml-8"> Experience </h1>
              </div>

            </div>
            <div className="col-span-11 lg:col-span-9 flex flex-col gap-8">

              {/* Right Sidebar (Education List) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 justify-between items-center bg-white rounded-md w-full px-8 py-10 shadow-sm hover:shadow">
                {education?.map((item, index) => (
                  <div key={index} className='border-0 md:border-r border-neutral-300 last:border-r-0 flex flex-col gap-2.5 lg:gap-4 md:pr-5 lg:pr-0'>
                      <div className="flex flex-col gap-1.5 lf:gap-2">
                        <h1 className="text-[21px] font-medium text-black">{item.degree}</h1>
                        <h3 className="text-base font-normal text-secondary">
                          {item.university} <span>({item.year})</span>
                        </h3>
                      </div>
                      <p className="text-base font-normal text-secondary">{item.description}</p>
                    </div>
                ))}
              </div>

              {/* Right Sidebar (Software Skills List) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 justify-between items-center bg-white rounded-md w-full px-8 py-10 shadow-sm hover:shadow">
                {education?.map((item, index) => (
                  <div key={index} className='border-0 md:border-r border-neutral-300 last:border-r-0 flex flex-col gap-2.5 lg:gap-4 md:pr-5 lg:pr-0'>
                      <div className="flex flex-col gap-1.5 lf:gap-2">
                        <h1 className="text-[21px] font-medium text-black">{item.degree}</h1>
                        <h3 className="text-base font-normal text-secondary">
                          {item.university} <span>({item.year})</span>
                        </h3>
                      </div>
                      <p className="text-base font-normal text-secondary">{item.description}</p>
                    </div>
                ))}
              </div>

              {/* Right Sidebar (Experince Skills List) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 justify-between items-center bg-white rounded-md w-full  px-8 py-10  shadow-sm hover:shadow">
                {education?.map((item, index) => (
                  <div key={index} className='border-0 md:border-r border-neutral-300 last:border-r-0 flex flex-col gap-2.5 lg:gap-4 md:pr-5 lg:pr-0'>
                      <div className="flex flex-col gap-1.5 lf:gap-2">
                        <h1 className="text-[21px] font-medium text-black">{item.degree}</h1>
                        <h3 className="text-base font-normal text-secondary">
                          {item.university} <span>({item.year})</span>
                        </h3>
                      </div>
                      <p className="text-base font-normal text-secondary">{item.description}</p>
                    </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Experince
