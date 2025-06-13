'use client';
import React from 'react';
import Hero from './components/hero';

import './globals.css'; // Ensure global styles are imported
import FeaturedFPOs from './components/featuredfpo';
import ImageGallery from './components/imagegallery';
import FPOSection from './components/map';

export default function Home() {
  return (
    <>
       <main className="min-h-screen bg-white text-gray-900">
      <Hero />
    <FeaturedFPOs />
    <ImageGallery />
    <FPOSection />
    </main>
    </>
  );
}