import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import { Pagination, Navigation } from "swiper/modules"; 
import InfoSlider from "../../common-components/InfoSlider";
import logo1 from "../../../assets/images/feature1.png";
import logo2 from "../../../assets/images/feature-2.png";
import logo3 from "../../../assets/images/feature3.png";
import banner from "../../../assets/images/sectionBg.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { motion } from "framer-motion";

const ServiceSlider = () => {
  return (
    <motion.div
    style={{
      backgroundImage: `linear-gradient(rgba(4, 19, 91, 0.2), rgba(4, 19, 91, 0.2)), url(${banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
    }}
    className="px-4 lg:px-12 py-8 relative"
    initial={{ opacity: 0, y: 50, scale: 0.9 }} 
    whileInView={{ opacity: 1, y: 0, scale: 1 }} 
    viewport={{ once: false, amount: 0.3 }} 
    transition={{ duration: 0.8, ease: "easeOut" }} 
  >
    {/* Swiper Slider */}
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }} 
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 40 },
        1024: { slidesPerView: 3, spaceBetween: 50 },
      }}
      modules={[Pagination, Navigation]} 
      className="mySwiper"
    >
      <SwiperSlide>
        <InfoSlider logo={logo1} title={"WordPress Website"} desc={"Design & Development"} />
      </SwiperSlide>
      <SwiperSlide>
        <InfoSlider logo={logo2} title={"Content Writing"} desc={"For entire project"} />
      </SwiperSlide>
      <SwiperSlide>
        <InfoSlider logo={logo3} title={"Monthly SEO"} desc={"Rank #1 on Google"} />
      </SwiperSlide>
      <SwiperSlide>
        <InfoSlider logo={logo1} title={"WordPress Website"} desc={"Design & Development"} />
      </SwiperSlide>
    </Swiper>
  
    {/* Navigation Buttons */}
    <motion.div 
      className="flex justify-center gap-4 mb-4 md:mb-3 mt-6"
      initial={{ opacity: 0, scale: 0.8 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <button className="prev-btn text-xl border cursor-pointer border-gray-600 p-2 text-white rounded-lg shadow-md hover:bg-[#FF693B] transition">
        <FaAngleLeft />
      </button>
      <button className="next-btn text-xl border cursor-pointer border-gray-600 p-2 text-white rounded-lg shadow-md hover:bg-[#FF693B] transition">
        <FaAngleRight />
      </button>
    </motion.div>
  
    <motion.p 
      className="flex mb-10 items-center gap-3 justify-end text-gray-400 uppercase text-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Creative Solution 
      <span className="flex"><TfiLayoutLineSolid /><TfiLayoutLineSolid /> <TfiLayoutLineSolid /></span>
    </motion.p>
  </motion.div>
  );
};

export default ServiceSlider;
