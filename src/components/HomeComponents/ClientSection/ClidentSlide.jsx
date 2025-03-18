import { FaStar } from "react-icons/fa";
import fiverr from "../../../assets/manImg/logofiverr.png";
import upWork from "../../../assets/manImg/logoup.png";

const ClidentSlide = ({ desc, name, company, logo }) => {
  return (
    <div className="border rounded-md p-4 border-gray-300 h-[190px] flex flex-col justify-between">
      {/* Stars */}
      <div className="flex flex-col flex-1">
        <p className="flex mb-3 text-blue-500 items-center gap-1 text-xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
        <p className="text-gray-600 mb-4">{desc}</p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-2/12">
          <img src={logo} alt="User" className="w-full h-auto" />
        </div>
        <div className="w-8/12">
          <p className="font-medium text-blue-900 text-[18px]">{name}</p>
          <p className="flex items-center gap-1">
            {company === "From fiverr" ? (
              <img src={fiverr} alt="Fiverr" className="w-5 h-5" />
            ) : (
              <img src={upWork} alt="Upwork" className="w-5 h-5" />
            )}
            <span className="text-sm">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClidentSlide;
