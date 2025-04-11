import React from "react";
import { solutions } from "../static/data";

const Solution = () => {
  return (
    <React.Fragment>
      <div className="bg-black/90 p-4 mb-7">
        <h1 className="text-3xl md:text-4xl pt-4 font-bold mb-4 text-white text-center">
          Our Software Solutions
        </h1>
        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
          Discover the wide range of AI-powered solutions we offer to optimize
          your business operations and drive growth. Our solutions are designed
          to enhance productivity, improve employee experience, and boost
          customer satisfaction.
        </p>
      </div>
      <div className="w-[90%] mx-auto mb-10 text-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              <div className="bg-black p-4 rounded-full w-fit mb-4">
                {<sol.icon size={30} className="text-white" />}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {sol.title}
              </h3>
              <p className="text-neutral-500 font-mw text-sm leading-6">
                {sol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Solution;
