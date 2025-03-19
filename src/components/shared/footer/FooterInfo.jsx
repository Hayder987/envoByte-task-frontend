import React from "react";
import FooterCard from "./FooterCard";
import whatsapp from "../../../assets/logo/whatsapp.png";
import linkedin from "../../../assets/logo/linkedin.png";
import sms from "../../../assets/logo/sms.png";

const FooterInfo = () => {
  return (
    <div className="text-white">
      <div className="lg:w-9/12">
        <h1 className="text-3xl font-semibold md:text-5xl mb-6">
          Let us know what you think!
        </h1>
        <p className="text-gray-300">
          {`Got something on your mind? Share it with us! Drop a
         message, and we’ll respond quickly to assist you`}
        </p>
      </div>
      {/* footer card */}
      <div className="">
        <FooterCard
          logo={sms}
          title={"Business"}
          desc={"support@envobyte.com"}
        />
        <FooterCard
          logo={whatsapp}
          title={"Whatsapp"}
          desc={"+1 (667) 777 2477"}
        />
        <FooterCard
          logo={linkedin}
          title={"Linkiedin"}
          desc={"www.linkedin.com/company/envobyte"}
        />
      </div>
    </div>
  );
};

export default FooterInfo;
