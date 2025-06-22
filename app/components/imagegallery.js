'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { src: '/p1.jpg', alt: 'Organic Fertilizer', name: 'Organic Fertilizer' },
  { src: '/p2.jpg', alt: 'Hybrid Seeds', name: 'Hybrid Seeds' },
  { src: '/p1.jpg', alt: 'Eco-Friendly Pesticide', name: 'Eco-Friendly Pesticide' },
  { src: '/p2.jpg', alt: 'Farming Tools', name: 'Farming Tools' },
  { src: '/p1.jpg', alt: 'Irrigation System', name: 'Irrigation System' },
  { src: '/p2.jpg', alt: 'Organic Compost', name: 'Organic Compost' },
  { src: '/p1.jpg', alt: 'Tractor Parts', name: 'Tractor Parts' },
  { src: '/p2.jpg', alt: 'Soil Enhancer', name: 'Soil Enhancer' },
];

const ImageGallery = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const itemWidth = 300 + 24; // Image width (300px) + total margin (24px)
      const itemsVisible = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 2 : 1;
      const scrollAmount = itemWidth * itemsVisible;
      const currentScroll = scrollRef.current.scrollLeft;
      scrollRef.current.scrollTo({
        left: Math.max(0, currentScroll - scrollAmount),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const itemWidth = 300 + 24; // Image width (300px) + total margin (24px)
      const itemsVisible = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 2 : 1;
      const scrollAmount = itemWidth * itemsVisible;
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: Math.min(maxScroll, currentScroll + scrollAmount),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Top Products</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our premium range of agricultural inputs designed to boost productivity and sustainability.
        </p>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-none w-[300px] mx-3 snap-center"
            >
              <div className="relative group rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
           <img
  src={product.src}
  alt={product.alt}
  width={300}
  height={300}
  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default ImageGallery;