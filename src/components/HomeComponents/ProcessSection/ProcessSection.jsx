import banner from "../../../assets/images/sectionBg.png";
import processImg from "../../../assets/images/process-task.png";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const ProcessSection = () => {
  return (
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
      className="py-20 mt-4"
    >
      <div className="max-w-[1400px] text-white mx-auto relative">
        <div className="mb-12 lg:mb-20">
          <p className="text-base mb-4 md:text-xl font-semibold text-center">
            HOW WE WORK
          </p>
          <h1 className="text-3xl mb-4 md:text-5xl font-bold text-center">
            Our Process For Delivering <br /> Results
          </h1>
          <p className="text-center text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry’s standard dummy
            text ever.
          </p>
        </div>
        {/* process */}
        <div className="px-4 mb-12 lg:mb-20">
          <img src={processImg} alt="" className="" />
        </div>
        {/* button */}
        <div className="flex justify-center">
          <button className="bg-[#FF693B] rounded-sm duration-500 text-white hover:text-blue-800 font-medium hover:border-blue-900 hover:border  hover:bg-transparent cursor-pointer min-w-[150px]  h-12 md:w-[240px]">
          Contact Now
          </button>
        </div>
        {/* side text */}
        <div className="lg:flex hidden">
          <p className="flex -rotate-90 absolute right-6 top-[240px] mb-10 items-center gap-3 justify-end text-gray-400 uppercase text-sm">
            <span className="flex">
              <TfiLayoutLineSolid />
              <TfiLayoutLineSolid /> <TfiLayoutLineSolid />
            </span>
            Project in steps
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
