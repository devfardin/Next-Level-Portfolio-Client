import ClientFeedbackSlider from '@/components/shared/ClientFeedbackSlider'
import Container from '@/components/shared/Container'
import SubTitle from '@/components/shared/SubTitle'
import Title from '@/components/shared/Title'
import React from 'react'


const ClientFeedback = () => {
    return (
        <div className='mt-16 md:mt-24'>
            <Container>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <SubTitle label='Testimonial' />
                        <Title label='Client Feedback' align='text-center' />
                    </div>
                    <div className='mt-10'>
                        <ClientFeedbackSlider/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ClientFeedback
