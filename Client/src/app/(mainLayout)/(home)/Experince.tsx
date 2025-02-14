import Container from '@/components/shared/Container'
import SubTitle from '@/components/shared/SubTitle'
import Title from '@/components/shared/Title'
import React from 'react'

const Experince = () => {
  return (
    <div className='bg-background_secondary py-14 mt-24'>
        <Container>
        <div>
            <div className='flex flex-col items-center justify-center'>
            <SubTitle label='My Resume Fardin'/>
            <Title label='10+ YEARS OF EXPERIENCE' align='text-center'/>
            </div>
        </div>
        </Container>      
    </div>
  )
}

export default Experince
