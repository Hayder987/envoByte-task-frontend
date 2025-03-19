import { BiSolidLike } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { motion } from "framer-motion";

const DigitalServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, amount: 0.3 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl text-center md:text-5xl lg:text-7xl font-bold mb-4 textWhite">
        DIGITAL SERVICES
      </h1>
      <p className="text-xl lg:text-2xl mb-12 font-bold textWhite text-center">
        BUILDING YOUR EMPIRE DIGITALLY
      </p>

      {/* button */}
      <div className="flex mb-14 text-sm font-semibold justify-center gap-6 items-center">
        <button className="bg-[#FF693B] rounded-sm duration-500 text-white hover:border-white hover:border  hover:bg-transparent cursor-pointer min-w-[150px] h-12 md:w-[240px]">
          See Pricing
        </button>
        <button className="min-w-[150px] rounded-sm duration-500 hover:bg-[#FF693B] hover:border-none cursor-pointer px-4 h-12 md:w-[240px] textWhite border-white border">
          Book an appointment
        </button>
      </div>

      {/* info Section */}
      <div className="textWhite grid justify-items-center gap-4 grid-cols-2 lg:grid-cols-4">
        {/* Info Cards */}
        {[
          { icon: <IoIosGlobe />, value: "2k+", text: "Websites build" },
          { icon: <BiSolidLike />, value: "97%", text: "Client satisfaction" },
          { icon: <FaUsersGear />, value: "25+", text: "Team members" },
          { icon: <FaUserCircle />, value: "500+", text: "Amazing clients" },
        ].map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }} 
            className="flex items-center gap-3 text-xl font-semibold"
          >
            <div className="w-10 h-10 rounded-sm lg:w-12 lg:h-12 flex justify-center items-center border border-white">
              {info.icon}
            </div>
            <div className={`${index !== 3 ? "border-r" : ""} pr-6 lg:pr-14 border-gray-500`}>
              <p className="text-xl font-semibold">{info.value}</p>
              <p className="text-sm md:text-base">{info.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DigitalServices;
