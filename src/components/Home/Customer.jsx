import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { customerFeedbacks } from "../../static/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const CustomerFeedback = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from real customers who’ve experienced the impact of our AI
          solutions.
        </p>

        <div className="my-4">
          <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 15 },
              1280: { slidesPerView: 3, spaceBetween: 20 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {customerFeedbacks.map((feedback, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition h-full flex flex-col justify-between min-h-[270px]">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-semibold text-lg text-gray-800">
                    {feedback.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-1">
                    {feedback.position}
                  </p>

                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) =>
                      i < feedback.rating ? (
                        <FaStar key={i} className="text-yellow-400" />
                      ) : (
                        <FaRegStar key={i} className="text-gray-300" />
                      )
                    )}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{feedback.feedback}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
