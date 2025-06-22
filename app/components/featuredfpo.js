'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const fpoListings = [
  {
    name: 'Green Valley FPO',
    imageSrc: '/bg2.jpg', // Pexels image URL
    description: 'Specializing in organic vegetables with sustainable farming practices.',
    link: '/fpos/green-valley',
  },
  {
    name: 'Sunrise Farmers Co.',
    imageSrc: '/bg2.jpg', // Placeholder for other images
    description: 'Leading producer of high-quality grains and pulses.',
    link: '/fpos/sunrise',
  },
  {
    name: 'AgriUnity FPO',
    imageSrc: '/bg2.jpg',
    description: 'Empowering farmers with advanced agricultural techniques.',
    link: '/fpos/agriunity',
  },
  {
    name: 'Harvest Hub',
    imageSrc: '/bg2.jpg',
    description: 'Focused on horticulture and fruit cultivation.',
    link: '/fpos/harvest-hub',
  },
  {
    name: 'EcoFarm Collective',
    imageSrc: '/bg2.jpg',
    description: 'Promoting eco-friendly farming and community growth.',
    link: '/fpos/ecofarm',
  },
];

const FeaturedFPOs = () => (
  <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured FPOs</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Meet our top Farmer Producer Organizations driving agricultural excellence.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
      {fpoListings.map((fpo, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative">
        <img
  src={fpo.imageSrc}
  alt={fpo.name}
  width={300}
  height={192}
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
  </section>
);

export default FeaturedFPOs;