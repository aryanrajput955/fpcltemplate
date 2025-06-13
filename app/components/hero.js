'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from './button';

const Hero = () => (
  <section className="relative px-6 md:px-20 py-24 bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
    <div className="absolute inset-0 bg-[url('/bg.jpg')] opacity-10"></div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          A Nation-Wide Consortium for <span className="text-green-600">Farmers Producer Company Limited in India</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-lg">
          A trusted B2B platform connecting farmer producer organizations with high-quality agricultural inputs and reliable logistics.
        </p>
        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
          Join Us <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
      <div className="relative">
        <Image
          src="/bg2.jpg"
          alt="Farming B2B Platform"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </section>
);

export default Hero;