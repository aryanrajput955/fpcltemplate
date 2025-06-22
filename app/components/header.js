'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, UserPlus, LogIn, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // List of all Indian states and union territories
  const indianStates = [
    'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
    'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand',
    'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ];

  // News-like messages for the marquee
  const newsItems = [
    'Exclusive Membership Platform for FPOs',
    'Join our network to boost agricultural growth!',
    'New schemes launched for FPO partners!',
    'Connect with farmers across India today!',
    'Explore sustainable farming solutions with us!'
  ];

  return (
    <header className="bg-gradient-to-r from-green-800 to-gray-900 shadow-lg sticky top-0 z-50">
      {/* Sticky Top Section with Marquee */}
      <div className="bg-gray-800 text-center py-2.5 border-b border-gray-700 overflow-hidden">
        <div className="inline-block whitespace-nowrap animate-marquee">
          {newsItems.map((item, index) => (
            <span key={index} className="text-sm text-gray-200 mx-10">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Section */}
      <div className="container mx-auto flex items-center justify-between py-4 pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-6 lg:pr-8">
        {/* Logo Placeholder */}
        <div className="text-2xl font-bold text-white flex-shrink-0">
          <Link href="/">
        <img
  src="/logo2.png"
  alt="Logo"
  className="h-10 w-auto"

/>
          </Link>
        </div>
        {/* Mobile Search Bar (Centered) */}
        <div className="flex-1 mx-6 md:hidden">
          <div className="relative max-w-[200px] mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-1.5 rounded-full bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Hamburger Menu for Mobile (Moved to Right) */}
        <button
          className="md:hidden text-gray-200 hover:text-green-400 flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center flex-1">
          <div className="flex items-center space-x-5 lg:space-x-8">
            <Link href="/" className="text-gray-200 hover:text-green-400 text-base whitespace-nowrap">Home</Link>
            <Link href="/services" className="text-gray-200 hover:text-green-400 text-base whitespace-nowrap">Services</Link>

            {/* Dropdown for FPO Partners */}
            <div className="relative group">
              <button className="text-gray-200 hover:text-green-400 flex items-center text-base whitespace-nowrap">
                FPO Partners
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 top-6 h-6 w-full opacity-0 pointer-events-none group-hover:pointer-events-auto"></div>
              <div className="absolute left-0 mt-1 w-64 bg-yellow-100 shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50 max-h-96 overflow-y-auto">
                {indianStates.map((state) => (
                  <Link
                    key={state}
                    href={`/partners/${state.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2.5 text-gray-800 hover:bg-green-200 text-sm"
                  >
                    {state}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown for Schemes */}
            <div className="relative group">
              <button className="text-gray-200 hover:text-green-400 flex items-center text-base whitespace-nowrap">
                Schemes
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 top-6 h-6 w-full opacity-0 pointer-events-none group-hover:pointer-events-auto"></div>
              <div className="absolute left-0 mt-1 w-48 bg-yellow-100 shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50">
                <Link href="/schemes" className="block px-4 py-2.5 text-gray-800 hover:bg-green-200 text-sm">Scheme 1</Link>
                <Link href="/schemes/scheme2" className="block px-4 py-2.5 text-gray-800 hover:bg-green-200 text-sm">Scheme 2</Link>
              </div>
            </div>

            <Link href="/agriwat" className="text-gray-200 hover:text-green-400 text-base whitespace-nowrap">Agriwat</Link>
          </div>
        </nav>

        {/* Desktop Search and Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-shrink-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1.5 rounded-full bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm w-36 lg:w-48"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <Link href="/register" className="flex items-center text-gray-200 hover:text-green-400 text-sm whitespace-nowrap">
            <UserPlus className="h-4 w-4 mr-1.5" />
            Register
          </Link>
          <Link href="/login" className="flex items-center text-gray-200 hover:text-green-400 text-sm whitespace-nowrap">
            <LogIn className="h-4 w-4 mr-1.5" />
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-6">
          <div className="flex flex-col space-y-5">
            <Link href="/" className="text-gray-200 hover:text-green-400 text-base whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className="text-gray-200 hover:text-green-400 text-base whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>

            {/* Mobile FPO Partners Dropdown */}
            <div>
              <button className="text-gray-200 hover:text-green-400 flex items-center text-base whitespace-nowrap">
                FPO Partners
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="mt-3 w-full bg-yellow-100 shadow-lg rounded-md max-h-64 overflow-y-auto">
                {indianStates.map((state) => (
                  <Link
                    key={state}
                    href={`/partners/${state.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-3 text-gray-700 hover:bg-green-100 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {state}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Schemes Dropdown */}
            <div>
              <button className="text-gray-200 hover:text-green-400 flex items-center text-base whitespace-nowrap">
                Schemes
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="mt-3 w-full bg-yellow-100 shadow-lg rounded-md">
                <Link href="/schemes" className="block px-4 py-3 text-gray-700 hover:bg-green-100 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Scheme 1</Link>
                <Link href="/schemes/scheme2" className="block px-4 py-3 text-gray-700 hover:bg-green-100 text-sm" onClick={() => setIsMobileMenuOpen(false)}>Scheme 2</Link>
              </div>
            </div>

            <Link href="/agriwat" className="text-gray-200 hover:text-green-400 text-base whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>Agriwat</Link>
            <Link href="/register" className="flex items-center text-gray-200 hover:text-green-400 text-sm whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>
              <UserPlus className="h-4 w-4 mr-2" />
              Register
            </Link>
            <Link href="/login" className="flex items-center text-gray-200 hover:text-green-400 text-sm whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
          </div>
        </div>
      )}

      {/* Inline CSS for Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;