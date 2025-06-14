'use client';
import React from 'react';
import Link from 'next/link';

const FpoTemplate = ({ stateName, bannerImages, fpoListings, eventName }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-[250px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-green-700 to-emerald-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center z-10 text-center">
          {/* Text Section */}
          <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            {stateName}
          </h1>
          <h2 className="text-2xl sm:text-lg md:text-2xl font-semibold text-orange-300 mt-2">
            {eventName}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-100 mt-3 max-w-md">
            Explore vibrant agricultural communities and their innovative offerings.
          </p>
          {/* Images Section */}
          <div className="hidden sm:flex flex-wrap justify-center gap-4 mt-4">
            {bannerImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-full shadow-md border-2 border-white hover:border-green-400 transition-colors duration-200"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* FPO Listing Section */}
      <div className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-12">
            Featured FPOs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {fpoListings.map((fpo, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:border-green-200 border border-transparent transition-all duration-200"
                role="article"
                aria-labelledby={`fpo-${index}-title`}
              >
                <div className="relative">
                  <img
                    src={fpo.imageSrc}
                    alt={fpo.name}
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-200"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3
                    id={`fpo-${index}-title`}
                    className="text-lg sm:text-xl font-bold text-gray-800 truncate"
                  >
                    {fpo.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-2 line-clamp-3">
                    {fpo.description}
                  </p>
                  <Link
                    href={fpo.link}
                    className="block mt-3 sm:mt-4 text-green-600 text-sm sm:text-base font-semibold hover:text-green-800 transition-colors duration-200"
                    aria-label={`Visit ${fpo.name}`}
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