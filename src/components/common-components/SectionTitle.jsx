import React from 'react'

const SectionTitle = ({subHeading, Heading}) => {
  return (
    <div className='mb-8'>
       <p className="font-semibold text-center mb-2 text-[#0C89FF]">{subHeading}</p>
       <p className="text-3xl md:text-5xl font-bold text-center">{Heading}</p>
    </div>
  )
}

export default SectionTitle