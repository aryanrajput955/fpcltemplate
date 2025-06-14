'use client';
import { useState } from 'react';
import { FiFilter, FiSearch } from 'react-icons/fi';

export default function Schemes() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('MINISTRY OF AGRICULTURE');

  const categories = [
    'MINISTRY OF AGRICULTURE',
    'MINISTRY OF EDUCATION',
    'MINISTRY OF HEALTH',
    'MINISTRY OF FINANCE',
    'MINISTRY OF TECHNOLOGY',
    'MINISTRY OF COMMERCE',
  ];

  const schemesData = {
    'MINISTRY OF AGRICULTURE': [
      { name: 'Farmers Empowerment Scheme', ministry: 'Ministry of Agriculture', sector: 'Agriculture' },
      { name: 'Green Harvest Initiative', ministry: 'Ministry of Agriculture', sector: 'Agriculture' },
    ],
    'MINISTRY OF EDUCATION': [
      { name: 'Education for All', ministry: 'Ministry of Education', sector: 'Education' },
    ],
    'MINISTRY OF HEALTH': [
      { name: 'HealthCare Access Program', ministry: 'Ministry of Health', sector: 'Healthcare' },
    ],
    'MINISTRY OF FINANCE': [
      { name: 'Startup Funding Scheme', ministry: 'Ministry of Finance', sector: 'Finance' },
    ],
    'MINISTRY OF TECHNOLOGY': [
      { name: 'Tech Innovate Grant', ministry: 'Ministry of Technology', sector: 'Technology' },
    ],
    'MINISTRY OF COMMERCE': [
      { name: 'Trade Expansion Program', ministry: 'Ministry of Commerce', sector: 'Commerce' },
    ],
  };

  const relatedLinks = [
    'FPCL Startup Hub',
    'DST Schemes',
    'DST Programs & Initiatives',
    'Atal Innovation Mission',
    'BIRAC Support for Startups',
  ];

  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* Top Section */}
      <div className="bg-green-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Government and FPCL Schemes
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto">
            Discover a wide range of schemes by the Government and FPCL to support innovation, growth, and development across various sectors.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-700 text-center">
            Overview
          </h2>
          <p className="mt-4 text-gray-600 text-center max-w-4xl mx-auto">
            Welcome to the Government and FPCL Schemes section. This section provides a list of all the schemes initiated to support and promote startups and businesses. The government recognizes the importance of startups in driving innovation and economic growth. Various ministries and departments have introduced schemes to provide financial, infrastructural, and regulatory support to startups across sectors like technology, agriculture, healthcare, and more.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Enter Keyword Search"
              className="w-full p-3 pl-10 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 pb-10">
        {/* Left: Categories */}
        <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <FiFilter />
              <span>Filter</span>
            </button>
          </div>
          {isFilterOpen && (
            <div className="mb-4 p-4 bg-green-100 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700">Filter Options</h3>
              <div className="mt-2">
                <label className="block text-sm text-gray-600">Sector</label>
                <select className="w-full p-2 mt-1 rounded-lg border border-green-300">
                  <option>All Sectors</option>
                  <option>Agriculture</option>
                  <option>Education</option>
                  <option>Healthcare</option>
                </select>
              </div>
              <div className="flex space-x-2 mt-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Search
                </button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                  Reset
                </button>
              </div>
            </div>
          )}
          <h3 className="text-lg font-semibold text-green-700 mb-4">Ministries & Departments</h3>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer py-2 px-3 rounded-lg mb-2 ${
                  selectedCategory === category ? 'bg-green-200 text-green-800' : 'hover:bg-green-100'
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Middle: Schemes (Scrollable) */}
        <div className="lg:w-2/4 bg-white p-6 rounded-lg shadow-md max-h-[500px] overflow-y-auto">
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            {selectedCategory}
          </h3>
          {schemesData[selectedCategory].map((scheme, index) => (
            <div key={index} className="mb-4 p-4 bg-green-50 rounded-lg">
              <h4 className="text-md font-semibold text-green-800">{scheme.name}</h4>
              <p className="text-sm text-gray-600">Ministry: {scheme.ministry}</p>
              <p className="text-sm text-gray-600">Key Sector Covered: {scheme.sector}</p>
              <p className="text-sm text-gray-600 mt-2">
                Brief: This scheme aims to support {scheme.sector.toLowerCase()} development and innovation.
              </p>
            </div>
          ))}
        </div>

        {/* Right: Related Links */}
        <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-700 mb-4">Related Links</h3>
          <ul>
            {relatedLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-green-600 hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}