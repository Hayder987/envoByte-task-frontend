import React from 'react'

const BannerSectionTitle = ({shortTitle, mainTitle, color, btnName}) => {
  return (
    <div className='px-4 lg:px-12 mb-14'>
       <p className={`mb-2 ${color ? 'text-[#FF693B]':'text-blue-500'} text-sm md:text-base uppercase`}>{shortTitle}</p>
       <div className={`flex justify-between items-center border-b ${color?'border-gray-600': "border-gray-300"} pb-4`}>
        <h1 className={`text-xl lg:text-5xl font-bold ${color?'text-white':''}`}>{mainTitle}</h1>
        <button className="btnBg py-2 px-4 lg:px-8 text-sm md:text-base rounded-sm font-medium">{btnName}</button>
       </div>
       {/* menu */}
       <ul className={`uppercase text-sm cursor-pointer ${color?'text-white':''} lg:text-base flex-wrap flex items-center gap-6 pt-4`}>
        <li className="hover:text-blue-500">Website</li>
        <li className="hover:text-blue-500">UI/UX</li>
        <li className="hover:text-blue-500">seo</li>
        <li className="hover:text-blue-500">logo design</li>
        <li className="hover:text-blue-500">banner design</li>
        <li className="hover:text-blue-500">google ads</li>
       </ul>
    </div>
  )
}

export default BannerSectionTitle