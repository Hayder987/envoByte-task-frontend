import { motion } from "framer-motion";

const BannerSectionTitle = ({ shortTitle, mainTitle, color, btnName }) => {
  return (
    <motion.div
      className="px-4 lg:px-12 mb-14"
      initial={{ opacity: 0, y: -50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, amount: 0.3 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
    >
      <p
        className={`mb-2 ${
          color ? "text-[#FF693B]" : "text-blue-500"
        } text-sm md:text-base uppercase`}
      >
        {shortTitle}
      </p>
      <div
        className={`flex justify-between items-center border-b ${
          color ? "border-gray-600" : "border-gray-300"
        } pb-4`}
      >
        <h1
          className={`text-xl lg:text-5xl font-bold ${
            color ? "text-white" : ""
          }`}
        >
          {mainTitle}
        </h1>
        <button
          className={`bg-[#FF693B] border border-[#FF693B] rounded-sm duration-500 text-white ${
            color
              ? "hover:border-white"
              : "hover:text-black hover:border-gray-900"
          }  hover:bg-transparent cursor-pointer py-2 px-4 md:px-8`}
        >
          {btnName}
        </button>
      </div>

      {/* menu */}
      <ul
        className={`uppercase text-sm cursor-pointer ${
          color ? "text-white" : ""
        } lg:text-base flex-wrap flex items-center gap-6 pt-4`}
      >
        <li className="hover:text-blue-500">Website</li>
        <li className="hover:text-blue-500">UI/UX</li>
        <li className="hover:text-blue-500">SEO</li>
        <li className="hover:text-blue-500">Logo Design</li>
        <li className="hover:text-blue-500">Banner Design</li>
        <li className="hover:text-blue-500">Google Ads</li>
      </ul>
    </motion.div>
  );
};

export default BannerSectionTitle;
