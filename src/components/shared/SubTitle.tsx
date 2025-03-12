import Image from 'next/image'
import orangeDot from '../../../public/images/orangeDot.png'
const SubTitle = ({ label }: { label: string }) => {
    return (
        <div className='flex gap-2.5 items-center mb-2'>
            <Image alt="Who's me" src={orangeDot} width={20} height={50} />
            <span className=' text-base font-normal text-black_secondary'> {label} </span>
        </div>
    )
}

export default SubTitle
