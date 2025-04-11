import React, { useState } from "react";
import { eventsData } from "../../static/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { ICONS } from "../../static/icons";

const Events = () => {
  const promotionalEvents = eventsData.promotionalEvents.slice(0, 6);
  const upcomingEvents = eventsData.upcomingEvents.slice(0, 6);

  const [selectedImages, setSelectedImages] = useState(null);

  const openGallery = (images) => {
    setSelectedImages(images);
  };

  const closeGallery = () => {
    setSelectedImages(null);
  };

  const EventCard = ({ event }) => (
    <SwiperSlide className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.02] overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h4 className="text-xl font-semibold text-gray-800 mb-1">
          {event.title}
        </h4>
        <p className="text-gray-500 text-sm">
          {event.date} | {event.location}
        </p>
        <p className="text-gray-600 mt-3 text-sm line-clamp-3">
          {event.description}
        </p>
        <button
          onClick={() => openGallery(event.images)}
          className="mt-4 cursor-pointer inline-block px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
        >
          View Gallery
        </button>
      </div>
    </SwiperSlide>
  );

  return (
    <>
      <section className="md:py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-extrabold text-gray-800 mb-4">
            Upcoming & Promotional Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our upcoming events and promotional activities. Get
            ready for exciting experiences and exclusive offers.
          </p>
        </div>

        {/* Promotional Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-5 border-l-4 border-blue-600 pl-3">
            Promotional Events
          </h3>
          <Swiper
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {promotionalEvents.map((event, index) => (
              <SwiperSlide key={index}>
                <EventCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="my-10 flex justify-center items-center">
            <button className="bg-blue-500 cursor-pointer text-xl font-bold font-mw text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
              View More
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-5 border-l-4 border-indigo-600 pl-3">
            Upcoming Events
          </h3>
          <Swiper
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {upcomingEvents.map((event, index) => (
              <SwiperSlide key={index}>
                <EventCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="my-10 flex justify-center items-center">
            <button className="bg-blue-500 cursor-pointer text-xl font-bold font-mw text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Modal Gallery */}
      {selectedImages && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center transition-all">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 md:mx-8 p-6 overflow-y-auto max-h-[90vh] relative animate-fadeIn">
            <button
              className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-red-500 transition"
              onClick={closeGallery}
            >
              <ICONS.close size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-5 text-center text-gray-800">
              Event Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-lg transition"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
