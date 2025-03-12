import React from 'react'

const Title = ({label, align}: {label: string, align?: string}) => {
  return (
    <div>
      <h1 className={`text-3xl md:text-[44px] md:leading-[1.3em] font-bold text-black ${align}`}>{label}</h1>
    </div>
  )
}

export default Title
