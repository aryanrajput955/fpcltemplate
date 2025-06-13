'use client';
import React from 'react';
import Link from 'next/link';

const FpoTemplate = ({ stateName, bannerImages, fpoListings, eventName }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-green-600 to-emerald-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              {stateName}
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-orange-400 mt-2">
              {eventName}
            </h2>
            <p className="text-lg text-gray-200 mt-4 max-w-md">
              Discover the vibrant agricultural communities and their offerings.
            </p>
          </div>

          {/* Images Section */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            {bannerImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* FPO Listing Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Featured FPOs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {fpoListings.map((fpo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={fpo.imageSrc}
                    alt={fpo.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 truncate">{fpo.name}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">{fpo.description}</p>
                  <Link
                    href={fpo.link}
                    className="block mt-4 text-green-600 font-semibold hover:text-green-800 transition-colors duration-200"
                  >
                    Visit Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FpoTemplate;