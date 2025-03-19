import { motion } from 'framer-motion';

import AnswerCard from "./AnswerCard";
import card1 from "../../../assets/images/card-1.png";
import card2 from "../../../assets/images/card-2.png";
import card3 from "../../../assets/images/card-3.png";

const AnswerSection = () => {
  return (
    <div className="lg:max-w-[1440px] my-16 mx-auto">
      <p className="uppercase text-[#0C89FF] text-center text-sm md:text-base">
        MORE DETAILS
      </p>
      <h1 className="text-[#0A2C8C] mb-6 text-2xl text-center md:text-4xl lg:text-5xl font-bold">
        Get Your Answers
      </h1>
      {/* Card Section with Animation */}
      <div className="grid mb-10 grid-cols-1 lg:max-w-[1200px] mx-auto md:grid-cols-2 lg:grid-cols-3 bg-white">
        {[{
          logo: card3,
          title: "Why Chose Envobyte",
          subTitle: "Experienced & trustworthy",
          desc: "We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.",
          color: true,
        }, {
          logo: card1,
          title: "What’s Your Benefit",
          subTitle: "No hassle with best price",
          desc: "A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.",
          color: false,
        }, {
          logo: card2,
          title: "What is Combo Offer",
          subTitle: "Get 9 services in one package",
          desc: "You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!",
          color: false,
        }].map((card, index) => (
          <motion.div
            key={index}
            className="p-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}  
            whileInView={{ opacity: 1, y: 0, scale: 1 }}  
            viewport={{ once: false, amount: 0.3 }}  
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }} 
          >
            <AnswerCard
              logo={card.logo}
              title={card.title}
              subTitle={card.subTitle}
              desc={card.desc}
              color={card.color}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#FF693B] rounded-sm duration-500 text-white hover:text-blue-800 font-medium hover:border-blue-900 hover:border hover:bg-transparent cursor-pointer min-w-[150px] h-12 md:w-[240px]">
          See Pricing
        </button>
      </div>
    </div>
  );
};

export default AnswerSection;
