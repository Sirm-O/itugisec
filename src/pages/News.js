import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    {
      title: "KCSE Results 2023 Announced",
      date: "July 10, 2025",
      content: "Utugi Secondary School students have excelled in the 2023 KCSE examinations, with a mean score of 8.5. Congratulations to all our students!",
      image: "https://via.placeholder.com/600x400",
      category: "Academics"
    },
    {
      title: "New Science Lab Inauguration",
      date: "June 20, 2025",
      content: "We are proud to announce the inauguration of our new state-of-the-art science laboratory, equipped with the latest technology and equipment.",
      image: "https://via.placeholder.com/600x400",
      category: "Facilities"
    },
    {
      title: "Sports Day 2025",
      date: "May 30, 2025",
      content: "Join us for our annual Sports Day featuring exciting competitions and fun activities for students and staff.",
      image: "https://via.placeholder.com/600x400",
      category: "Events"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl md:text-2xl">Stay Updated with Utugi Secondary School</p>
        </div>
      </div>

      {/* News Categories */}
      <div className="py-8 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/news/academics" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Academics
            </Link>
            <Link to="/news/events" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Events
            </Link>
            <Link to="/news/facilities" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Facilities
            </Link>
            <Link to="/news/announcements" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Announcements
            </Link>
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <Link
                  to={`/news/${index}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-8">Subscribe to Our Newsletter</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="newsletter-email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
