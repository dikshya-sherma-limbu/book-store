import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/footer-logo.png";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import pinterest from "../assets/socials/pinterest.png";
import twitter from "../assets/socials/twitter.png";
function Footer() {
  return (
    <footer className="bg-secondary    text-white py-10">
      {/* Top section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left side - logo | Nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="logo" className=" mb-5 w-32 px-4" />
          <ul className="flex  flex-col md:flex-row gap-4 px-2 text-black font-semibold items-center">
            <li>
              <a href="#home" className="hover:text-favourite ">
                Home
              </a>
            </li>
            <li>
              {" "}
              <a href="#services" className="hover:text-favourite ">
                Services
              </a>
            </li>
            <li>
              {" "}
              <a href="#about" className="hover:text-favourite ">
                About Us
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#contact" className="hover:text-favourite">
                Contact
              </a>{" "}
            </li>
          </ul>
        </div>
        {/* Middle side - socials */}
        <div className="md:w-1/2 w-full">
          <ul className="flex  flex-row md:flex-row sm:flex-col  gap-6  justify-center items-center">
            <li>
              <a href="#facebook" className="hover:text-favourite">
                <img src={facebook} alt="facebook" className="size-10" />
              </a>
            </li>
            <li>
              <a href="#intagram" className="hover:text-favourite">
                <img src={instagram} alt="insta" className="size-10" />
              </a>
            </li>
            <li>
              <a href="#pinterest" className="hover:text-favourite">
                <img src={pinterest} alt="pinterest" className="size-10" />
              </a>
            </li>
            <li>
              <a href="#twitter" className="hover:text-favourite">
                <img src={twitter} alt="twitter" className="size-10" />
              </a>
            </li>
          </ul>
        </div>
        {/* Right side - newsletter */}
        <div className="md:w-1/2 w-full ">
          <p className="mb-4 m-2">Subscribe to our newsletter !</p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white px-2 py-1 rounded-l-md focus:outline-none"
            />
            <button className="bg-primary px-4 py-1 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
