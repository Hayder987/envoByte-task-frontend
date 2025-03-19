import React from "react";
import { FiExternalLink } from "react-icons/fi";

const FooterCard = ({ logo, title, desc }) => {
  return (
    <div className={`flex max-w-9/12 items-center pb-4 gap-2 ${title==='Linkiedin'?'':'border-b border-gray-600'} mt-6`}>
      <div className={`
         border  p-2 rounded-sm 
         ${title==='Business' && 'border-slate-600'}
         ${title==='Whatsapp' && 'border-green-700'}
         ${title==='Linkiedin' && 'border-blue-700'}
        `}>
        <div className={`
          ${title==='Whatsapp' && 'bg-green-500 shadow-green-300 '}
          ${title==='Business' && 'bg-slate-500 shadow-slate-300 '}
          ${title==='Linkiedin' && 'bg-blue-500 shadow-blue-300 '}
          shadow-md w-6 rounded-full
            `}>
          <img src={logo} alt="" className="" />
        </div>
      </div>
      {/* --- */}
      <div className="">
        <h1 className="text-sm text-gray-300">{title}</h1>
        <p className="font-semibold flex items-center gap-3">{desc} <span className="text-blue-500 cursor-pointer"><FiExternalLink /></span></p>
      </div>
    </div>
  );
};

export default FooterCard;
