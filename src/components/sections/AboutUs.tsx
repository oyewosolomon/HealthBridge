import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <div className="border rounded-xl dark:text-white p-8">
        <div className="text-gray-600 text-sm dark:text-white mb-2">About Our Platform</div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white  mb-4">
            Connecting Patients with Specialists Through Advanced Telehealth Solutions
          </h1>
          <div className="flex justify-end">
            <button className="flex items-center text-indigo-500 border border-indigo-500 rounded-md px-4 py-2">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column with telehealth image */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/h.jpg" 
                alt="Doctor using telehealth platform" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right column with stats cards */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-indigo-600">100k+</div>
                  <div className="text-gray-500 dark:text-gray-300 text-sm">Monthly Consultations</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Wide-Reaching Healthcare Access</h3>
              <p className="text-gray-600 dark:text-gray-300  text-sm">
                Supporting over 100,000 consultations monthly, connecting patients with the care they need.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-indigo-600">30</div>
                  <div className="text-gray-500 dark:text-gray-300 text-sm ">Countries Served</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Healthcare Network</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Connecting patients with specialists across 30 countries for truly borderless healthcare.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-indigo-600">EHR</div>
                  <div className="text-gray-500 dark:text-gray-300 text-sm">Integration</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Seamless Health Record Integration</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Fully integrates with electronic health records for comprehensive, continuous care management.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-indigo-600">24/7</div>
                  <div className="text-gray-500 dark:text-gray-300 text-sm">Remote Monitoring</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Care Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Remote monitoring for chronic conditions and specialized mental health services available around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;