import React from "react";
import bg from '../../../assets/images/footer-bg-2.png';
import FooterForm from "./FooterForm";
import FooterInfo from "./FooterInfo";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(4, 19, 91, 0.8), rgba(4, 19, 91, 0.8)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="py-4 pt-24 px-4"
    >
      <div className="lg:max-w-[1440px] mx-auto">
        {/* footer -1 */}
        <div className="lg:max-w-[1110px] mx-auto flex gap-12 lg:gap-8 flex-col-reverse lg:flex-row">
          {/* form */}
          <div className="lg:w-1/2 rounded-md border bg-[#0A2C8C33] p-6 border-blue-900">
           <FooterForm/>
          </div>
          {/* text */}
           <div className="lg:w-1/2">
            <FooterInfo/>
           </div>
        </div>
      </div>
      <div className="border-b border-blue-900 my-20"></div>
        {/* footer -2 */}
        <div className="lg:max-w-[1440px] mx-auto">
           <FooterMenu/>
        </div>
        <div className="border-b border-blue-900 "></div>
        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400 mt-8">
          ©2025 - <span className="font-semibold">ENVOBYTE</span>, All rights
          are reserved.
        </div>
    </div>
  );
};

export default Footer;
