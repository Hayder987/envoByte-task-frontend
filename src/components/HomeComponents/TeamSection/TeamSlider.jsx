import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

import man1 from '../../../assets/images/man-1.png';
import man2 from '../../../assets/images/man-2.png';
import man3 from '../../../assets/images/man-3.png';
import man4 from '../../../assets/images/man-4.png';
import TeamSlide from "./TeamSlide";

const teamMembers = [
  { logo: man1, name: 'Mr Anik', title: 'Backend Developer' },
  { logo: man2, name: 'Mr Shahed', title: 'Frontend Developer' },
  { logo: man3, name: 'Mr Mainul Islam', title: 'SEO Expert' },
  { logo: man4, name: 'Mr Hasib', title: 'Content Writer' },
  { logo: man2, name: 'Mr Hayder', title: 'Frontend Developer' },
  { logo: man1, name: 'Mr Jakariya', title: 'Fullstack Developer' }
];

const TeamSlider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Swiper with Motion Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.2 } }}
        viewport={{ once: false, amount: 0.3 }}
      >
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
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <TeamSlide {...member} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Navigation Buttons with Motion */}
      <div className="flex justify-center gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="prev-2 text-xl border cursor-pointer border-gray-600 p-2 hover:text-white rounded-lg shadow-md hover:bg-[#FF693B] transition"
        >
          <FaAngleLeft />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="next-2 text-xl border cursor-pointer border-gray-600 p-2 hover:text-white rounded-lg shadow-md hover:bg-[#FF693B] transition"
        >
          <FaAngleRight />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TeamSlider;
