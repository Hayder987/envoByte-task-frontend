import React from "react";
import logo from '../../../assets/images/logo.png'
import { FaPhoneSquareAlt, FaRegEnvelope } from "react-icons/fa";
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitterLink.png'
import linkedin from '../../../assets/images/linkedin.png'
import instrgram from '../../../assets/images/instagram.png'
import pinterest from '../../../assets/images/pinterest.png'

const FooterMenu = () => {
  return (
    <div>
      <footer className=" text-white py-10 ">
        <div className="max-w-7xl mx-auto grid mb-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="" className="mb-6" />
            <p className="text-sm text-gray-300 mt-2">
              We are an IT Company. We help businesses to bring ideas to life
              easily and affordably.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="mt-2 space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="mt-2 text-gray-300 space-y-2 text-sm">
              <li>
                <a href="#">Combo Offer</a>
              </li>
              <li>
                <a href="#">Service Industries</a>
              </li>
              <li>
                <a href="#">Envobyte Apps</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="mt-2 text-gray-300 space-y-2 text-sm">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="mt-2 text-sm text-gray-300 flex gap-3 items-center mb-2"><span className="text-xl text-yellow-600"><FaRegEnvelope /></span> support@envobyte.com</p>
            <p className="text-sm text-gray-300 flex gap-3 items-center mb-8"><span className="text-xl text-yellow-600"><FaPhoneSquareAlt /></span> +1 (667) 777 2477</p>
            <div className="flex cursor-pointer text-gray-300 space-x-4 mt-3">
              <a href="#" className=""><img src={facebook} alt="" className="" /></a>
              <a href="#" className=""><img src={linkedin} alt="" className="" /></a>
              <a href="#" className=""><img src={instrgram} alt="" className="" /></a>
              <a href="#" className=""><img src={twitter} alt="" className="" /></a>
              <a href="#" className=""><img src={pinterest} alt="" className="" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterMenu;
