import banner from "../../../assets/images/bg-banner.png";
import DigitalServices from "./DigitalServices";
import teamImage from '../../../assets/images/image.png'
import SectionDivider from "../../common-components/SectionDivider";

const Banner = () => {
  return (
    <div className="bg-[#03135b] py-10 relative">
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
        <div className="lg:max-w-[1440px] mx-auto">
         <DigitalServices />
         {/* banner Img */}
         <div className="mt-14">
            <img src={teamImage} alt="" className="" />
         </div>
        </div>
      </div>
      <SectionDivider></SectionDivider>
      
    </div>
  );
};

export default Banner;
