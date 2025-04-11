import React from "react";

import { solutions } from "../../static/data";
import { useNavigate } from "react-router-dom";

const Solution = () => {
  const data = solutions.slice(0, 6);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Software Solutions
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the wide range of AI-powered solutions we offer to optimize
            your workflows, boost employee experience, and digitally transform
            your business.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
            {data.map((sol, idx) => (
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
          <div className="mt-12">
            <button
              onClick={() => navigate("/solution")}
              className="bg-blue-500 cursor-pointer text-xl font-bold font-mw text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              View All Solutions
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Solution;
