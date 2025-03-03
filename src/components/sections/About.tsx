import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-2">
        <h2 className="text-gray-600 text-sm">About description cards with visual image</h2>
        <p className="text-gray-600 text-sm mt-2">
          This about us tailwind CSS example shows about description cards on one side and visual image on the other side.
        </p>
      </div>

      <div className="flex gap-4 mt-4 mb-6">
        <button className="flex items-center gap-2 text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Preview
        </button>
        <button className="flex items-center gap-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
          Code
        </button>
        <div className="ml-auto flex items-center gap-2">
          <div className="bg-black p-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 9C11.7614 9 14 6.76142 14 4C14 1.23858 11.7614 -1 9 -1C6.23858 -1 4 1.23858 4 4C4 6.76142 6.23858 9 9 9Z" fill="#1ABCFE"/>
              <path d="M4 14C6.76142 14 9 11.7614 9 9C9 6.23858 6.76142 4 4 4C1.23858 4 -1 6.23858 -1 9C-1 11.7614 1.23858 14 4 14Z" fill="#0ACF83"/>
              <path d="M9 19C11.7614 19 14 16.7614 14 14C14 11.2386 11.7614 9 9 9C6.23858 9 4 11.2386 4 14C4 16.7614 6.23858 19 9 19Z" fill="#FF7262"/>
              <path d="M14 14C16.7614 14 19 11.7614 19 9C19 6.23858 16.7614 4 14 4C11.2386 4 9 6.23858 9 9C9 11.7614 11.2386 14 14 14Z" fill="#F24E1E"/>
              <path d="M14 4C16.7614 4 19 1.76142 19 -1C19 -3.76142 16.7614 -6 14 -6C11.2386 -6 9 -3.76142 9 -1C9 1.76142 11.2386 4 14 4Z" fill="#A259FF"/>
            </svg>
          </div>
          Figma File
        </div>
      </div>

      <div className="border rounded-xl p-8">
        <div className="text-gray-600 text-sm mb-2">About Our Agency</div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Exploring the Strategies and Vision That Define Our Digital Agency's Success
          </h1>
          <div className="flex justify-end">
            <button className="flex items-center text-blue-500 border border-blue-500 rounded-md px-4 py-2">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column with laptop image */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="Laptop on wooden desk" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right column with stats cards */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-blue-600">40k+</div>
                  <div className="text-gray-500 text-sm">Task Fulfilled</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Prepared for the Journey Ahead</h3>
              <p className="text-gray-600 text-sm">
                Every detail is planned, ensuring we're ready for the journey ahead.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-blue-600">18</div>
                  <div className="text-gray-500 text-sm">Years of Experience</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Extensive Experience Backed by Time</h3>
              <p className="text-gray-600 text-sm">
                Years of experience guarantee exceptional results.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-blue-600">24k+</div>
                  <div className="text-gray-500 text-sm">Satisfied Client</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Prepared for Any Client Challenge</h3>
              <p className="text-gray-600 text-sm">
                We're ready to meet client needs with tailored solutions and great service.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-blue-600">35</div>
                  <div className="text-gray-500 text-sm">Awards Achieved</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Prestigious Awards Earned and Celebrated</h3>
              <p className="text-gray-600 text-sm">
                We celebrate awards earned, reflecting our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;