export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-[#F5F1E8] py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-[#8B7355]">Team</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a value driven organisation aspiring to meet the highest professional, legal and ethical standards.
          </p>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Career Opportunities</h2>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Requirements Section */}
            <div>
              <h3 className="font-semibold text-xl text-[#8B7355] mb-4">Requirements</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Position:</span> CA & CMA Articleship
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Kochi / Calicut
                </p>
                <p>
                  <span className="font-semibold">Job Type:</span> Full Time
                </p>
                <p>
                  <span className="font-semibold">Salary:</span> As per industry standards
                </p>
              </div>
            </div>

            {/* Candidate Profile Section */}
            <div>
              <h3 className="font-semibold text-xl text-[#8B7355] mb-4">Candidate Profile</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-[#8B7355] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  CA Aspirant Cleared CA Intermediate
                </li>
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-[#8B7355] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Strong analytical and numerical skills
                </li>
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-[#8B7355] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Good written and verbal communication
                </li>
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-[#8B7355] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Proficiency in MS Office (Excel & Word)
                </li>
                <li className="flex items-start text-gray-700">
                  <svg className="w-5 h-5 text-[#8B7355] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full-time availability
                </li>
              </ul>
            </div>
          </div>

          {/* Apply Button */}
          <div className="text-center pt-6 border-t border-gray-200">
            <a
              href="/contact"
              className="inline-block bg-[#8B7355] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#5C4A3A] transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
