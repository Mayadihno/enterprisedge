import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="md:h-[80vh] h-[65vh] bg-banner flex items-center justify-center">
        <div className="text-white text-center px-4">
          <div className="bg-black/30 p-3 md:w-1/2 w-[90%] mx-auto rounded-md mb-30">
            <h3 className="md:text-3xl text-xl font-bold mb-4 pt-30">
              Empowering Innovation with AI-Driven Solutions
            </h3>
            <p className="mb-6 w-full mx-auto italic font-mw md:text-base text-sm leading-9">
              AI-Solutions helps businesses elevate their digital employee
              experience through intelligent, affordable software designed to
              transform workflows and drive global growth.
            </p>
          </div>
          <div className="flex justify-center gap-4 mb-10 font-mw">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-xl cursor-pointer text-black md:px-20 px-4 md:py-5 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Contact
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-500 text-xl cursor-pointer text-white md:px-20 px-4 md:py-5 py-3 rounded-md hover:bg-black/80 transition"
            >
              Try Demo
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:flex-row flex-col">
        <div className="md:p-10 p-4 md:w-1/2 w-full">
          <h3 className=" text-xl font-bold text-zinc-500">WHO WE ARE</h3>
          <h2 className="md:text-5xl text-3xl font-semibold pt-3">
            A consulting firm with a unique approach.
          </h2>
          <p className="md:text-base text-sm leading-8 py-4">
            From strategy through to execution, we work with our clients from
            end-to-end to create real results. We leverage our global expertise
            that combines business transformation capabilities with deep
            technology insight to accelerate growth and build valuable customer
            experiences. Our one-of-a-kind, tailored approach powers us to work
            with client challenges like they are our own.
          </p>
        </div>
        <div className="md:w-1/2 w-full h-full md:block hidden">
          <img
            src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/11/marquee-agentforce-bg-alt1.jpg?resize=2048,1240"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
