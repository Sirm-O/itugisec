import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const galleryCategories = [
    {
      title: 'Academic Life',
      images: [
        'https://via.placeholder.com/800x600?text=Classroom',
        'https://via.placeholder.com/800x600?text=Library',
        'https://via.placeholder.com/800x600?text=Lab',
        'https://via.placeholder.com/800x600?text=Study',
      ]
    },
    {
      title: 'Sports & Games',
      images: [
        'https://via.placeholder.com/800x600?text=Football',
        'https://via.placeholder.com/800x600?text=Basketball',
        'https://via.placeholder.com/800x600?text=Track',
        'https://via.placeholder.com/800x600?text=Netball',
      ]
    },
    {
      title: 'Events & Activities',
      images: [
        'https://via.placeholder.com/800x600?text=Assembly',
        'https://via.placeholder.com/800x600?text=Debate',
        'https://via.placeholder.com/800x600?text=Music',
        'https://via.placeholder.com/800x600?text=Drama',
      ]
    },
    {
      title: 'Facilities',
      images: [
        'https://via.placeholder.com/800x600?text=Hostel',
        'https://via.placeholder.com/800x600?text=Cafeteria',
        'https://via.placeholder.com/800x600?text=Science+Lab',
        'https://via.placeholder.com/800x600?text=Computer+Lab',
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">School Gallery</h1>
          <p className="text-xl md:text-2xl">Explore Our School Through Photos</p>
        </div>
      </div>

      {/* Gallery Categories */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          {galleryCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative group">
                    <img
                      src={image}
                      alt={`${category.title} ${imgIndex + 1}`}
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-xl mb-8">
            Visit our campus or contact us for more information.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
