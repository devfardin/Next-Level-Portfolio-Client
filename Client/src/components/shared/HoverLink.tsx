import Link from 'next/link'
import React from 'react'

const HoverLink = ({ label, link }: { label: string, link: string }) => {
    return (
        <Link
            href={link}
            className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-primery rounded-md hover:bg-primery group 
          py-3 px-6 text-xl">
            <span className="w-56 h-48 rounded-md bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0">
            </span>
            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">{label}</span>
        </Link>
    )
}

export default HoverLink
