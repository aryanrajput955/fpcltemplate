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
      imageSrc: 'https://via.placeholder.com/400x200?text=FPO+1',
      description: 'Providing fresh, organic produce directly from our farms to your table.',
      link: '/fpos/wapung-farm-fresh',
    },
    {
      name: 'Chibasal FPCL',
      imageSrc: 'https://via.placeholder.com/400x200?text=FPO+2',
      description: 'Empowering farmers with sustainable practices for better yields.',
      link: '/fpos/chibasal-fpcl',
    },
    {
      name: 'Mawrang FPCL',
      imageSrc: 'https://via.placeholder.com/400x200?text=FPO+3',
      description: 'Supporting local farmers with access to markets and resources.',
      link: '/fpos/mawrang-fpcl',
    },
    {
      name: 'Green Valley FPCL',
      imageSrc: 'https://via.placeholder.com/400x200?text=FPO+4',
      description: 'Delivering high-quality organic vegetables grown with care.',
      link: '/fpos/green-valley-fpcl',
    },
    {
      name: 'Sohra Farmers',
      imageSrc: 'https://via.placeholder.com/400x200?text=FPO+5',
      description: 'Promoting traditional farming methods for sustainable growth.',
      link: '/fpos/sohra-farmers',
    },
    {
      name: 'Laitkynsew FPCL',
      imageSrc: 'https://via.placeholder.com/400x200?text=FPO+6',
      description: 'Connecting farmers to markets for better income opportunities.',
      link: '/fpos/laitkynsew-fpcl',
    },
    {
      name: 'Nongstoin FPCL',
      imageSrc: 'https://via.placeholder.com/400x200?text=FPO+7',
      description: 'Offering training and support for modern farming techniques.',
      link: '/fpos/nongstoin-fpcl',
    },
    {
      name: 'Jowai Organic',
      imageSrc: 'https://via.placeholder.com/400x200?text=FPO+8',
      description: 'Specializing in organic farming for a healthier community.',
      link: '/fpos/jowai-organic',
    },
  ];

  return (
    <FpoTemplate
      stateName="Meghalya"
      eventName="Ugrami Haat"
      bannerImages={bannerImages}
      fpoListings={fpoListings}
    />
  );
}