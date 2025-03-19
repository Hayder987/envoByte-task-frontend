import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ClidentSlide from "./ClidentSlide";
import man1 from "../../../assets/manImg/man1.png";
import man2 from "../../../assets/manImg/man2.png";
import man3 from "../../../assets/manImg/man3.png";
import man4 from "../../../assets/manImg/man4.png";
import { motion } from "framer-motion";

const testimonials = [
  { desc: "Excellent service and great support!", name: "Stephanie Powell", company: "From Fiverr", logo: man1 },
  { desc: "Highly recommended for web development!", name: "John smith", company: "From Upwork", logo: man2 },
  { desc: "Delivered exactly what I needed!", name: "Alex Smith", company: "From Fiverr", logo: man3 },
  { desc: "Very professional and skilled developer!", name: "Emma Wilson", company: "From Upwork", logo: man4 },
  { desc: "Quick response and quality work!", name: "Michael Brown", company: "From Fiverr", logo: man1 },
  { desc: "Amazing experience working with them!", name: "Sarah Johnson", company: "From Upwork", logo: man2 },
  { desc: "Superb communication and expertise!", name: "David Martinez", company: "From Fiverr", logo: man3 },
  { desc: "Would definitely hire again!", name: "Olivia Taylor", company: "From Upwork", logo: man4 },
];

const ClientSlider = () => {
  const slideVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };
  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        grid={{ rows: 2, fill: "row" }}
        loop={true}
        navigation={{ nextEl: ".next-1", prevEl: ".prev-1" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1, grid: { rows: 1 } },
          768: { slidesPerView: 2, grid: { rows: 2 } },
          1024: { slidesPerView: 3, grid: { rows: 2 } },
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <ClidentSlide
                desc={testimonial.desc}
                name={testimonial.name}
                company={testimonial.company}
                logo={testimonial.logo}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="prev-1 text-xl border cursor-pointer border-gray-600 p-2 hover:text-white rounded-lg shadow-md hover:bg-[#FF693B] transition">
          <FaAngleLeft />
        </button>
        <button className="next-1 text-xl border cursor-pointer border-gray-600 p-2 hover:text-white rounded-lg shadow-md hover:bg-[#FF693B] transition">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default ClientSlider;
