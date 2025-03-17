import { BiSolidLike } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"
import { FaUsersGear } from "react-icons/fa6"
import { IoIosGlobe } from "react-icons/io"


const DigitalServices = () => {
  return (
    <div>
        <h1 className="text-4xl text-center md:text-5xl lg:text-7xl font-bold mb-4 textWhite">DIGITAL SERVICES</h1>
        <p className="text-xl lg:text-2xl mb-12 font-bold textWhite text-center">BUILDING YOUR EMPIRE DIGITALLY</p>
        {/* button */}
        <div className="flex mb-14 text-sm font-semibold justify-center gap-6 items-center">
          <button className="bg-[#FF693B] rounded-sm duration-500 text-white hover:border-white hover:border  hover:bg-transparent cursor-pointer min-w-[150px]  h-12 md:w-[240px]">See Pricing</button>
          <button className="min-w-[150px] rounded-sm duration-500 hover:bg-[#FF693B] hover:border-none cursor-pointer px-4 h-12 md:w-[240px] textWhite border-white border">Book an appointment</button>
        </div>
        {/* info Section */}
        <div className="textWhite grid justify-items-center gap-4 grid-cols-2 lg:grid-cols-4">
            {/* info-1 */}
            <div className="flex items-center gap-3 text-xl font-semibold">
              <div className="w-10 h-10 rounded-sm lg:w-12 lg:h-12 flex justify-center items-center border border-white">
              <IoIosGlobe className="text-2xl lg:text-3xl" />
              </div>
              <div className="border-r pr-6 lg:pr-14 border-gray-500">
                <p className="text-xl font-semibold">2k+</p>
                <p className="text-sm md:text-base">Websites build</p>
              </div>
            </div>

            {/* info-2 */}
            <div className="flex items-center gap-3 text-xl font-semibold">
              <div className="w-10 h-10 rounded-sm lg:w-12 lg:h-12 flex justify-center items-center border border-white">
              <BiSolidLike className="text-2xl lg:text-3xl" />
              </div>
              <div className="lg:border-r pr-6 lg:pr-14 border-gray-500">
                <p className="text-xl font-semibold">97%</p>
                <p className="text-sm md:text-base">Client satisfaction</p>
              </div>
            </div>

            {/* info-3 */}
            <div className="flex items-center gap-3 text-xl font-semibold">
              <div className="w-10 h-10 rounded-sm lg:w-12 lg:h-12 flex justify-center items-center border border-white">
              <FaUsersGear className="text-2xl lg:text-3xl" />
              </div>
              <div className="border-r pr-6 lg:pr-14 border-gray-500">
                <p className="text-xl font-semibold">25+</p>
                <p className="text-sm md:text-base">Team members</p>
              </div>
            </div>

            {/* info-4 */}
            <div className="flex items-center gap-3 text-xl font-semibold">
              <div className="w-10 h-10 rounded-sm lg:w-12 lg:h-12 flex justify-center items-center border border-white">
              <FaUserCircle className="text-2xl lg:text-3xl" />
              </div>
              <div className=" pr-6 lg:pr-14 ">
                <p className="text-xl font-semibold">500+</p>
                <p className="text-sm md:text-base">Amazing clients</p>
              </div>
            </div>

        </div>
    </div>
  )
}

export default DigitalServices