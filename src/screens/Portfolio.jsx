import React, { useState } from "react";
import { highlights } from "../static/data";

const Portfolio = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleSeeMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  return (
    <React.Fragment>
      <div className="bg-black/90 p-4 mb-7">
        <h1 className="text-2xl md:text-4xl pt-4 font-bold mb-4 text-white text-center">
          Highlights of Past Solutions Provided to Industries
        </h1>
        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
          Over the years, we've delivered transformative AI solutions to a wide
          range of industries. Below are some of the highlights of our past
          projects.
          <br />
          From predictive maintenance in automotive to intelligent learning in
          education, our tools are built to create real impact.
        </p>
      </div>

      <div className="w-[90%] mx-auto mb-10 text-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 text-left overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.industry}
                className="w-full h-46 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-full w-fit mb-4">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.industry}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold text-gray-700">
                    Solution:{" "}
                  </span>
                  {item.solution}
                </p>

                {expandedCard === index && (
                  <>
                    <p className="text-gray-600 text-sm mb-2">
                      <span className="font-semibold text-gray-700">
                        Impact:{" "}
                      </span>
                      {item.impact}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold text-gray-700">
                        Result:{" "}
                      </span>
                      {item.result}
                    </p>
                  </>
                )}

                <button
                  onClick={() => toggleSeeMore(index)}
                  className="mt-1 hover:underline cursor-pointer font-mw text-base font-bold"
                >
                  {expandedCard === index ? "See Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
