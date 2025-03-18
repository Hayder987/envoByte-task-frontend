import React from "react";

const AnswerCard = ({ logo, title, subTitle, desc, color }) => {
  return (
    <div className={`px-6 py-10 ${color ? "bg-blue-800" : ""} lg:border-t lg:border-r border-gray-300`}>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <img src={logo} alt="" className="mb-6 h-[250px] w-full" />
        </div>
        <div className="flex-1 flex flex-col ">
          <h1 className={`${color ? "text-white" : ""} mb-2 text-3xl font-semibold`}>{title}</h1>
          <p className="text-blue-400 font-medium mb-4">{subTitle}</p>
          <p className={`${color ? "text-white" : ""}`}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
