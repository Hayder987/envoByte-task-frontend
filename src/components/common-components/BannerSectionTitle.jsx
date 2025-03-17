import React from 'react'

const BannerSectionTitle = ({shortTitle, mainTitle, color, btnName}) => {
  return (
    <div className='px-4 lg:px-12 mb-14'>
       <p style={{ color: color }} className={`mb-2 text-sm md:text-base uppercase`}>{shortTitle}</p>
       <div className="flex justify-between items-center border-b border-gray-600 pb-4">
        <h1 className="text-xl lg:text-5xl font-bold textWhite">{mainTitle}</h1>
        <button className="btnBg py-2 px-4 lg:px-8 text-sm md:text-base rounded-sm font-medium">{btnName}</button>
       </div>
       {/* menu */}
       <ul className="uppercase text-sm lg:text-base flex-wrap flex items-center gap-6 textWhite pt-4">
        <li className="">Website</li>
        <li className="">UI/UX</li>
        <li className="">seo</li>
        <li className="">logo design</li>
        <li className="">banner design</li>
        <li className="">google ads</li>
       </ul>
    </div>
  )
}

export default BannerSectionTitle