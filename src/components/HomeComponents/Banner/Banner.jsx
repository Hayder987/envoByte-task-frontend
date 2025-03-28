import banner from "../../../assets/images/bg-banner.png";
import DigitalServices from "./DigitalServices";
import teamImage from "../../../assets/images/image.png";
import SectionDivider from "../../common-components/SectionDivider";
import BannerSectionTitle from "../../common-components/BannerSectionTitle";
import ServiceSlider from "./ServiceSlider";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-[#03135b] pt-10 relative">
      {/* Banner Section with Background */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(4, 19, 91, 0.8), rgba(4, 19, 91, 0.8)), url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="py-6 relative"
      >
        {/* Blur Effect (Top & Bottom) */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#03135b] via-transparent to-transparent blur-lg"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#03135b] via-transparent to-transparent blur-lg"></div>

        {/* Content */}
        <div className="lg:max-w-[1440px] mt-8 lg:mt-16 mx-auto">
          <DigitalServices />
          {/* banner Img */}
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={teamImage} alt="Team" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
      <SectionDivider></SectionDivider>
      <BannerSectionTitle
        shortTitle={"DIGITAL SERVICES"}
        mainTitle={"Check Our Available Services"}
        color={true}
        btnName={"All Services"}
      />
      <ServiceSlider></ServiceSlider>
    </div>
  );
};

export default Banner;
