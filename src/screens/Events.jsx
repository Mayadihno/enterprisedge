import React, { useState } from "react";
import { eventsData } from "../static/data";
import { ICONS } from "../static/icons";

const Events = () => {
  const [activeTab, setActiveTab] = useState("promotional");
  const [selectedImages, setSelectedImages] = useState(null);

  const openGallery = (images) => {
    setSelectedImages(images);
  };

  const closeGallery = () => {
    setSelectedImages(null);
  };

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.02] overflow-hidden">
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
          className="mt-4 inline-block px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
        >
          View Gallery
        </button>
      </div>
    </div>
  );

  const promotionalEvents = eventsData.promotionalEvents;
  const upcomingEvents = eventsData.upcomingEvents;

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Events & Promotions
        </h2>
        <p className="text-gray-500">
          Stay updated with our latest happenings and offers
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab("promotional")}
          className={`px-6 py-2 cursor-pointer rounded-full text-sm font-medium transition ${
            activeTab === "promotional"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Promotional Events
        </button>
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-6 py-2 cursor-pointer rounded-full text-sm font-medium transition ${
            activeTab === "upcoming"
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Upcoming Events
        </button>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(activeTab === "promotional" ? promotionalEvents : upcomingEvents).map(
          (event, index) => (
            <EventCard key={index} event={event} />
          )
        )}
      </div>

      {/* Modal Gallery */}
      {selectedImages && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center transition-all">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 md:mx-8 p-6 overflow-y-auto max-h-[90vh] relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
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
    </div>
  );
};

export default Events;
