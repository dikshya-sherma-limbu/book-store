import React from "react";
import bannerImg from "../../assets/banner.png";
function Banner() {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center  gap-12 ">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="banner" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium md-7">
          New Release This Week
        </h1>
        <p className="mb-10">
          Discover our newest release, "Echoes of the Forgotten"—a mesmerizing
          tale that takes you on a journey of mystery, courage, and unyielding
          hope. Whether you’re looking for a thrilling escape or a cozy read,
          this book promises to captivate your heart and soul. Grab your copy
          today and join the adventure!
        </p>
        <button className="btn-primary"> Subscribe</button>
      </div>
    </div>
  );
}

export default Banner;
