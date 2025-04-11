import React, { useState } from "react";
import { highlights } from "../../static/data";
import { useNavigate } from "react-router-dom";

const Highlight = () => {
  const data = highlights.slice(0, 6);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleSeeMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Highlights of Past Solutions Provided to Industries
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Over the years, we've delivered transformative AI solutions to a
            wide range of industries. From predictive maintenance in automotive
            to intelligent learning in education, our tools are built to create
            real impact.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
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

          <div className="mt-12">
            <button
              onClick={() => navigate("/portfolio")}
              className="bg-blue-500 cursor-pointer text-xl font-bold font-mw text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              View More
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Highlight;
