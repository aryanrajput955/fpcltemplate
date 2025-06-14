'use client';
import React from 'react';
import FpoTemplate from '../components/fpotemplate';

export default function MeghalayaPage() {
  const bannerImages = [
    { src: '/1.avif', alt: 'Image 1' },
    { src: '/2.avif', alt: 'Image 2' },
    { src: '/3.avif', alt: 'Image 3' },
  ];

  const fpoListings = [
    {
      name: 'Wapung Farm Fresh',
      imageSrc: '/p1.jpg',
      description: 'Providing fresh, organic produce directly from our farms to your table.',
      link: '/fpos/wapung-farm-fresh',
    },
    {
      name: 'Chibasal FPCL',
      imageSrc: '/p2.jpg',
      description: 'Empowering farmers with sustainable practices for better yields.',
      link: '/fpos/chibasal-fpcl',
    },
    {
      name: 'Mawrang FPCL',
      imageSrc: '/p1.jpg',
      description: 'Supporting local farmers with access to markets and resources.',
      link: '/fpos/mawrang-fpcl',
    },
    {
      name: 'Green Valley FPCL',
      imageSrc: '/p1.jpg',
      description: 'Delivering high-quality organic vegetables grown with care.',
      link: '/fpos/green-valley-fpcl',
    },
    {
      name: 'Sohra Farmers',
      imageSrc: '/p1.jpg',
      description: 'Promoting traditional farming methods for sustainable growth.',
      link: '/fpos/sohra-farmers',
    },
    {
      name: 'Laitkynsew FPCL',
      imageSrc: '/p1.jpg',
      description: 'Connecting farmers to markets for better income opportunities.',
      link: '/fpos/laitkynsew-fpcl',
    },
    {
      name: 'Nongstoin FPCL',
        imageSrc: '/p1.jpg',
      description: 'Offering training and support for modern farming techniques.',
      link: '/fpos/nongstoin-fpcl',
    },
    {
      name: 'Jowai Organic',
     imageSrc: '/p1.jpg',
      description: 'Specializing in organic farming for a healthier community.',
      link: '/fpos/jowai-organic',
    },
  ];

  return (
    <FpoTemplate
      stateName="Meghalaya"
      eventName="Ugrami Haat"
      bannerImages={bannerImages}
      fpoListings={fpoListings}
    />
  );
}