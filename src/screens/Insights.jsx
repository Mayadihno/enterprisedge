import React from "react";
import { articles } from "../static/data";

const Insights = () => {
  return (
    <React.Fragment>
      <div className="bg-black/90 p-4 mb-7">
        <h2 className="text-3xl md:text-4xl pt-4 font-bold mb-4 text-white text-center">
          Latest Insights & Innovations
        </h2>
        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
          Explore how our company is reshaping industries with cutting-edge
          solutions and meaningful impact.
        </p>
      </div>
      <div className="w-[90%] mx-auto mb-10 text-center">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    By {article.author} • {article.date}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.description}
                  </p>
                  <h1 className="text-red-400 pt-3 font-bold font-mw underline cursor-pointer">
                    Read more
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Insights;
