import React from 'react';

const Academics = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl md:text-2xl">Pathways to Success</p>
        </div>
      </div>

      {/* Academic Programs */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Form 1-4 Curriculum</h3>
              <p className="text-gray-600">
                Comprehensive curriculum aligned with Kenya's education system
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">KCSE Preparation</h3>
              <p className="text-gray-600">
                Intensive preparation for Kenya Certificate of Secondary Education
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Extracurricular Programs</h3>
              <p className="text-gray-600">
                Clubs, sports, and other co-curricular activities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Calendar */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Academic Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">First Term</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">January - April</li>
                <li className="text-gray-600">Mid-term break: February</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Second Term</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">May - August</li>
                <li className="text-gray-600">Mid-term break: July</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Third Term</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">September - December</li>
                <li className="text-gray-600">Mid-term break: November</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Sections */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">Our Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Department Heads</h3>
              <div className="space-y-4">
                {[
                  { name: 'Mr. John Mwangi', role: 'Principal' },
                  { name: 'Ms. Sarah Omondi', role: 'Deputy Principal' },
                  { name: 'Dr. James Otieno', role: 'Head of Science' },
                  { name: 'Mr. David Kimani', role: 'Head of Mathematics' }
                ].map((staff, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{staff.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{staff.name}</p>
                      <p className="text-xs text-gray-500">{staff.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Teaching Staff</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated teaching staff consists of experienced and highly qualified educators with advanced degrees.
                They are passionate about teaching and committed to the academic success of our students.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Non-Teaching Staff</h3>
              <p className="text-gray-600 leading-relaxed">
                Our support staff ensures the smooth operation of the school through their dedication and expertise.
                They play a crucial role in creating a conducive learning environment.
              </p>
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Board Members</h3>
              <div className="space-y-4">
                {[
                  { name: 'Mr. Peter Oduor', role: 'Chairperson' },
                  { name: 'Ms. Mary Wairimu', role: 'Vice Chair' },
                  { name: 'Dr. John Ochieng', role: 'Secretary' },
                  { name: 'Mr. James Otieno', role: 'Treasurer' }
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{member.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Committees</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Academic Committee</li>
                <li>Finance Committee</li>
                <li>Discipline Committee</li>
                <li>Health & Safety Committee</li>
                <li>Curriculum Committee</li>
                <li>Examinations Committee</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700">Email</p>
                    <p className="text-sm text-gray-600">board@utugi.ac.ke</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700">Phone</p>
                    <p className="text-sm text-gray-600">+254 722 000 000</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                We focus on providing personalized attention to each student, 
                ensuring they reach their full potential.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Support Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Tutoring programs</li>
                <li className="text-gray-600">Study groups</li>
                <li className="text-gray-600">Career guidance</li>
                <li className="text-gray-600">Counseling services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
