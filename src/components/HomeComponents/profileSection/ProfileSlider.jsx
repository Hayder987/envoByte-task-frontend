import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import project1 from "../../../assets/images/project-1.png";
import project2 from "../../../assets/images/project-2.png";
import project3 from "../../../assets/images/project-3.png";
import project4 from "../../../assets/images/project-4.png";
import project5 from "../../../assets/images/project-5.png";
import project6 from "../../../assets/images/project-6.png";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const arr = [project1, project3,  project5, project3, project4]
const arr2 = [ project2, project4,  project6, project2, project1]

const ProfileSlider = () => {
  return (
    <div className="px-4 lg:px-12 py-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        // grid={{ rows: 2 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="">
          {arr.map(
            (img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="w-full cursor-pointer h-[270px] object-cover rounded-lg"
                />
              </SwiperSlide>
            )
          )}
          
        </div>
      </Swiper>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        // grid={{ rows: 2 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-5"
      >
        <div className="grid grid-cols-3">
          {arr2.map(
            (img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Project ${index + 2}`}
                  className="w-full cursor-pointer h-[270px] object-cover rounded-lg"
                />
              </SwiperSlide>
            )
          )}
          
        </div>
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
      <p className="flex mb-10 items-center gap-3 justify-end text-gray-600 uppercase text-sm">Creative Solution <span className="flex"><TfiLayoutLineSolid /><TfiLayoutLineSolid /> <TfiLayoutLineSolid /></span></p>
    </div>
  );
};

export default ProfileSlider;
