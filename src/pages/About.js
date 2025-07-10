import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl">Excellence in Education</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4 md:px-16">
        {/* History Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-600">Our History</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Utugi Secondary School was established in 1960 with a vision to provide quality education to students in the region. 
                We have grown from humble beginnings to become one of the leading secondary schools in the area.
                Our journey of excellence continues as we strive to provide the best educational experience for our students.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a center of academic excellence that produces well-rounded individuals who are equipped to face the challenges of the modern world.
                We aim to foster a learning environment that promotes intellectual growth, character development, and community service.
              </p>
            </div>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src="/images/principal.jpg" 
                    alt="Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">Message from the Principal</h2>
                  <p className="text-gray-600 leading-relaxed">
                    "At Utugi Secondary School, we believe in nurturing excellence through holistic education. Our dedicated staff and modern facilities create an environment where students can thrive academically, socially, and personally.
                    We are committed to providing quality education that prepares our students for success in their future endeavors."
                  </p>
                  <p className="text-gray-600 mt-4 font-semibold text-lg">Mr. John Mwangi, Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Modern Classrooms', description: 'Equipped with modern teaching aids and comfortable learning environment.', icon: 'book' },
                { title: 'Science Labs', description: 'Fully equipped laboratories for practical learning in Physics, Chemistry, and Biology.', icon: 'flask' },
                { title: 'Sports Facilities', description: 'Sports fields, basketball courts, and other facilities for physical development.', icon: 'trophy' },
                { title: 'Library', description: 'Well-stocked library with extensive collection of academic resources.', icon: 'bookshelf' },
                { title: 'ICT Center', description: 'Modern computer lab with high-speed internet access.', icon: 'computer' },
                { title: 'Dining Hall', description: 'Nutritious meals served in a clean and comfortable environment.', icon: 'utensils' }
              ].map((facility, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {facility.icon === 'book' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                        {facility.icon === 'flask' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />}
                        {facility.icon === 'trophy' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.34 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 5.42 16.5 8.5c0 3.78-3.4 6.84-8.5 11.85zM10 11a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM11 21h2a1 1 0 001-1v-1a2 2 0 00-2-2 2 2 0 00-2 2v1a1 1 0 001 1z" />}
                        {facility.icon === 'bookshelf' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2zM7 2h10a2 2 0 002-2H5a2 2 0 00-2 2z" />}
                        {facility.icon === 'computer' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                        {facility.icon === 'utensils' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17l3-3m0 0l3 3m-3-3v12" />}
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-600">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
