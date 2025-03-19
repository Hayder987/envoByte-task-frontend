import React from "react";
import bg from '../../../assets/images/footer-bg-2.png';
import FooterForm from "./FooterForm";
import FooterInfo from "./FooterInfo";

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
      className="px-4 py-16 md:py-20 lg:py-24"
    >
      <div className="lg:max-w-[1440px] mx-auto">
        {/* footer -1 */}
        <div className="lg:max-w-[1110px] mx-auto flex gap-8 flex-col lg:flex-row">
          {/* form */}
          <div className="lg:w-1/2 rounded-md border bg-[#0A2C8C33] p-6 border-blue-900">
           <FooterForm/>
          </div>
          {/* text */}
           <div className="lg:w-1/2">
            <FooterInfo/>
           </div>
        </div>
        {/* footer -2 */}
        <div className="">

        </div>
      </div>
    </div>
  );
};

export default Footer;
