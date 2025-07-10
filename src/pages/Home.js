import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedHero from '../components/AnimatedHero';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedHero />

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">1200+</div>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">80+</div>
              <p className="text-gray-600">Teachers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <p className="text-gray-600">KCSE Pass Rate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">University Placement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Excellence */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Academic Excellence</h3>
              <p className="text-gray-600">
                Consistently high KCSE results with a focus on personalized learning.
              </p>
              <ul className="mt-4 space-y-2 text-blue-600">
                <li>Small class sizes</li>
                <li>Experienced teachers</li>
                <li>Modern teaching methods</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art infrastructure designed for modern education.
              </p>
              <ul className="mt-4 space-y-2 text-blue-600">
                <li>Smart classrooms</li>
                <li>Science laboratories</li>
                <li>Computer labs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm transform hover:scale-105 transition-transform">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20l-7-7 7-7m0 14H7m5 3H7v-4a3 3 0 016 0v4h4v-6a3 3 0 00-6 0v6zM7 15h4v-4H7v4zm0 4h4v-6a3 3 0 00-6 0v6H7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Holistic Development</h3>
              <p className="text-gray-600">
                Well-rounded education focusing on academics and character.
              </p>
              <ul className="mt-4 space-y-2 text-blue-600">
                <li>Sports programs</li>
                <li>Music and arts</li>
                <li>Leadership training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Utugi Secondary School has been a transformative experience for me. 
                The teachers are dedicated and the facilities are top-notch."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-500">Class of 2023</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The extracurricular activities have helped me develop my leadership skills 
                and made my school experience truly memorable."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h3 className="font-semibold">Mary Smith</h3>
                  <p className="text-sm text-gray-500">Class of 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Sports Day</h3>
              <p className="text-gray-600 mb-2">July 20, 2025</p>
              <p className="text-gray-600">
                Annual sports day featuring various competitions and fun activities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Science Fair</h3>
              <p className="text-gray-600 mb-2">August 15, 2025</p>
              <p className="text-gray-600">
                Student-led science projects and demonstrations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Parent-Teacher Meeting</h3>
              <p className="text-gray-600 mb-2">September 10, 2025</p>
              <p className="text-gray-600">
                Quarterly meeting for parent-teacher communication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Music Festival</h3>
              <p className="text-gray-600 mb-2">October 5, 2025</p>
              <p className="text-gray-600">
                Annual music showcase featuring student performances.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8">
            Start your journey towards academic excellence and personal growth.
          </p>
          <div className="flex justify-center gap-8">
            <Link to="/admissions" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105">
              Apply Now
            </Link>
            <Link to="/about" className="text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-colors transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to Utugi Secondary School</h2>
          <p className="text-gray-600 mb-8">
            Utugi Secondary School is a leading educational institution in Kenya, 
            dedicated to providing quality education and nurturing future leaders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">High academic standards and dedicated faculty</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
              <p className="text-gray-600">Focus on character building and extracurricular activities</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art infrastructure and resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-16">
          <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/academics" className="text-blue-600 hover:text-blue-800">Academics</Link>
            <Link to="/admissions" className="text-blue-600 hover:text-blue-800">Admissions</Link>
            <Link to="/news" className="text-blue-600 hover:text-blue-800">News & Events</Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
