import React from "react";
import { articles } from "../../static/data";
import { useNavigate } from "react-router-dom";

const Articule = () => {
  const data = articles.slice(0, 6);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Latest Insights & Innovations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore how our company is reshaping industries with cutting-edge
            solutions and meaningful impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((article, i) => (
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
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/insights")}
            className="bg-blue-500 cursor-pointer text-white font-bold text-lg px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            View All Articles
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Articule;
