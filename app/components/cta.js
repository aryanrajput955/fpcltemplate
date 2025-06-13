'use client';
import React from 'react';
import { Button } from './button';

const CallToAction = () => (
  <section className="bg-gradient-to-r from-green-600 to-emerald-700 py-16 px-6 md:px-20 text-white text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Agri-Business?</h2>
    <p className="text-lg mb-8 max-w-xl mx-auto">
      Join our platform today and experience the future of B2B farming solutions.
    </p>
    <Button className="  text-amber-700 font-semibold px-8 py-4 text-lg hover:bg-gray-100">
      Join Now
    </Button>
  </section>
);

export default CallToAction;