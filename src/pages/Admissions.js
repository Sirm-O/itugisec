import React from 'react';

const Admissions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl md:text-2xl">Join Our Community</p>
        </div>
      </div>

      {/* Admission Process */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Admission Process</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">KCPE score of 300 and above</li>
                <li className="text-gray-600">Good conduct record</li>
                <li className="text-gray-600">Recommendation from primary school</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Application Steps</h3>
              <ol className="space-y-2">
                <li className="text-gray-600">
                  <span className="font-semibold">1. </span>
                  Submit completed application form
                </li>
                <li className="text-gray-600">
                  <span className="font-semibold">2. </span>
                  Pay application fee
                </li>
                <li className="text-gray-600">
                  <span className="font-semibold">3. </span>
                  Submit required documents
                </li>
                <li className="text-gray-600">
                  <span className="font-semibold">4. </span>
                  Attend interview (if required)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">For New Students</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">KCPE certificate</li>
                <li className="text-gray-600">Birth certificate</li>
                <li className="text-gray-600">Primary school report</li>
                <li className="text-gray-600">2 passport photos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">For Transfer Students</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Previous school report</li>
                <li className="text-gray-600">Transfer letter</li>
                <li className="text-gray-600">KCPE certificate</li>
                <li className="text-gray-600">Birth certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Application Form</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="kcpe" className="block text-sm font-medium text-gray-700">
                  KCPE Score
                </label>
                <input
                  type="number"
                  id="kcpe"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
