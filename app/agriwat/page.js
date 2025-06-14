'use client';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const totalPages = 2;

  const blogs = [
    {
      title: "Prospects of Bay Leaf Oil Processing in Barakot Block (Champawat), Uttarakhand",
      subtitle: "Can Bhumiya Hill FPCL be more adaptive under collective power of hundred plus farmer shareholders and opt for operationalizing bay leaf oil processing unit in its farmers?",
      image: "/4.avif", // Placeholder image path
      date: "2/27/2024",
      readTime: "2 min read",
    },
    {
      title: "Empowering Small and Medium Farm Holders in Agricultural and Horticultural Development",
      subtitle: "",
      image: "/5.avif", // Placeholder image path
      date: "2/27/2024",
      readTime: "2 min read",
    },
    {
      title: "Advancements in Sustainable Farming Techniques",
      subtitle: "Exploring new methods to enhance productivity while preserving the environment.",
      image: "/4.avif", // Placeholder image path
      date: "3/15/2024",
      readTime: "3 min read",
    },
    {
      title: "The Role of Technology in Modern Agriculture",
      subtitle: "How tech innovations are transforming the agricultural landscape.",
      image: "/5.avif", // Placeholder image path
      date: "3/20/2024",
      readTime: "4 min read",
    },
    {
      title: "Organic Farming: A Path to Healthier Future",
      subtitle: "The benefits and challenges of adopting organic farming practices.",
      image: "/images/organic-farming.jpg", // Placeholder image path
      date: "4/10/2024",
      readTime: "3 min read",
    },
    {
      title: "Water Conservation Strategies for Farmers",
      subtitle: "Effective techniques to manage water resources in agriculture.",
      image: "/images/water-conservation.jpg", // Placeholder image path
      date: "4/15/2024",
      readTime: "2 min read",
    },
    {
      title: "Boosting Crop Yields with Precision Agriculture",
      subtitle: "Using data-driven approaches to maximize agricultural output.",
      image: "/images/precision-agriculture.jpg", // Placeholder image path
      date: "4/20/2024",
      readTime: "3 min read",
    },
    {
      title: "Supporting Rural Farmers Through Government Schemes",
      subtitle: "An overview of initiatives aimed at empowering rural agriculture.",
      image: "/images/rural-farmers.jpg", // Placeholder image path
      date: "4/25/2024",
      readTime: "2 min read",
    },
  ];

  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-green-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">AgriTalk</h1>
          <p className="mt-2 text-xl md:text-2xl">
            शुरु करें, पहाड़ एव मेदानी की सच्ची और आखरी परिचय
          </p>
          <p className="mt-1 text-lg md:text-xl text-green-100">
            Start here, the true and final introduction to the hills and plains
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-700">{blog.title}</h2>
                {blog.subtitle && (
                  <p className="mt-2 text-gray-600">{blog.subtitle}</p>
                )}
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}