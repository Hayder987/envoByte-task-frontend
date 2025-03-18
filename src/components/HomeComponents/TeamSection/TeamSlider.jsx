import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import man1 from '../../../assets/images/man-1.png'
import man2 from '../../../assets/images/man-2.png'
import man3 from '../../../assets/images/man-3.png'
import man4 from '../../../assets/images/man-4.png'
import TeamSlide from "./TeamSlide";

const TeamSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={{ nextEl: ".next-2", prevEl: ".prev-2" }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TeamSlide
          logo={man1}
          name={'Mr Anik'}
          title={'Backend Developer'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TeamSlide
          logo={man2}
          name={'Mr Shahed'}
          title={'Frontend Developer'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TeamSlide
          logo={man3}
          name={'Mr Mainul Islam'}
          title={'SEO Expert'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TeamSlide
          logo={man4}
          name={'Mr Hasib'}
          title={'Content Writer'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TeamSlide
          logo={man2}
          name={'Mr Hayder'}
          title={'Frontend Developer'}
          />
        </SwiperSlide>

        <SwiperSlide>
          <TeamSlide
          logo={man1}
          name={'Mr Jakariya'}
          title={'Fullstack Developer'}
          />
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="prev-2 text-xl border cursor-pointer border-gray-600 p-2 hover:text-white rounded-lg shadow-md hover:bg-[#FF693B] transition">
          <FaAngleLeft />
        </button>
        <button className="next-2 text-xl border cursor-pointer border-gray-600 p-2 hover:text-white rounded-lg shadow-md hover:bg-[#FF693B] transition">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default TeamSlider;
