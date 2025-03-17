import React from 'react'

const InfoSlider = ({logo, title, desc}) => {
  return (
    <div className='bg-[#3158C733] flex flex-col justify-center items-center p-10'>
      <img src={logo} alt="" className="mb-4" />  
      <h1 className="text-xl font-semibold textWhite">{title}</h1>
      <p className="text-gray-400">{desc}</p>
      {/* button */}
      <div className="mt-4 flex gap-4 items-center ">
        <button className="py-2 text-sm bg-blue-600 hover:border hover:text-blue-500 hover:border-blue-600 duration-300 cursor-pointer hover:bg-transparent text-white rounded-full px-8">Portfolio</button>
        <button className="py-2 text-sm px-8 border rounded-full hover:bg-blue-600 hover:text-white text-blue-500 border-blue-600 cursor-pointer duration-300">Order</button>
      </div>
    </div>
  )
}

export default InfoSlider