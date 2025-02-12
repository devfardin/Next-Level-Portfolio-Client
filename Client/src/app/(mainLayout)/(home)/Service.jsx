import Container from '@/components/shared/Container';
import SubTitle from '@/components/shared/SubTitle';
import Title from '@/components/shared/Title';
import Image from 'next/image';
import React from 'react'

const Service = async () => {
    const response = await fetch('http://localhost:3000/services.json', {
        cache: 'no-store'
    });
    const data = await response.json();

    return (
        <div>
            <Container>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <SubTitle label='My Services' />
                        <Title label='Services I offer' />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            data.map((item, index) => <div key={index}>
                                <div className='bg-background_secondary border border-primery hover:bg-background transition-all duration-300 p-10 rounded-md flex flex-col justify-center items-center gap-3'>
                                    <Image alt={item?.title} src={item?.image} width={50} height={50}/>
                                    <h1 className='text-2xl font-medium text-black'>{item?.title}</h1>
                                    <p className='text-lg font-normal text-black_secondary'>{item?.description}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Service
