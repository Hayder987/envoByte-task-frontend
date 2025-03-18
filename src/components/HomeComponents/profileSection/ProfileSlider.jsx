import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import project1 from "../../../assets/images/project-1.png";
import project2 from "../../../assets/images/project-2.png";
import project3 from "../../../assets/images/project-3.png";
import project4 from "../../../assets/images/project-4.png";
import project5 from "../../../assets/images/project-5.png";
import project6 from "../../../assets/images/project-6.png";
import { TfiLayoutLineSolid } from "react-icons/tfi";


const images = [project1, project2, project3, project4, project5, project6, project4, project1];

const ProfileSlider = () => {
  return (
    <div className="px-4 lg:px-12 py-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1} 
        loop={true}
        grid={{ rows: 2, fill: "row" }} 
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1, grid: { rows: 2 } }, 
          768: { slidesPerView: 2, grid: { rows: 2 } }, 
          1024: { slidesPerView: 3, grid: { rows: 2 } }, 
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full cursor-pointer h-[270px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="prev text-xl border cursor-pointer border-gray-600 p-2 hover:text-white rounded-lg shadow-md hover:bg-[#FF693B] transition">
          <FaAngleLeft />
        </button>
        <button className="next text-xl border cursor-pointer border-gray-600 p-2 hover:text-white rounded-lg shadow-md hover:bg-[#FF693B] transition">
          <FaAngleRight />
        </button>
      </div>

      {/* Footer Text */}
      <p className="flex mb-10 items-center gap-3 justify-end text-gray-600 uppercase text-sm">
        Creative Solution
        <span className="flex">
          <TfiLayoutLineSolid />
          <TfiLayoutLineSolid />
          <TfiLayoutLineSolid />
        </span>
      </p>
    </div>
  );
};

export default ProfileSlider;
