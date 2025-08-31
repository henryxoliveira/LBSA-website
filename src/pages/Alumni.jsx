import React from 'react'

const Alumni = () => {
  const alumniStories = [
    {
      name: 'Isabella Rodriguez',
      class: 'Class of 2023',
      company: 'Google',
      role: 'Product Manager',
      story: 'LBSA provided me with the networking opportunities and mentorship that helped me land my dream job at Google. The familia I found here continues to support me in my career.',
      image: '/src/assets/img/alumni_1.jpg'
    },
    {
      name: 'Miguel Santos',
      class: 'Class of 2022',
      company: 'Salesforce',
      role: 'Senior Consultant',
      story: 'Through LBSA\'s professional development programs, I gained the skills and confidence to excel in consulting. The organization\'s focus on community service also shaped my values.',
      image: '/src/assets/img/alumni_2.jpg'
    },
    {
      name: 'Carmen Vega',
      class: 'Class of 2021',
      company: 'Netflix',
      role: 'Business Analyst',
      story: 'LBSA taught me the importance of representation and giving back. I now mentor current students and help create opportunities for the next generation of Latinx leaders.',
      image: '/src/assets/img/alumni_3.jpg'
    },
    {
      name: 'Alejandro Morales',
      class: 'Class of 2020',
      company: 'Tesla',
      role: 'Operations Manager',
      story: 'The leadership skills I developed as LBSA president have been invaluable in my career. The organization\'s emphasis on academic excellence prepared me for the challenges ahead.',
      image: '/src/assets/img/alumni_4.jpg'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cardinal text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">LBSA Alumni Network</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our graduates are making an impact across industries and around the world. 
            Stay connected with your LBSA familia and support the next generation.
          </p>
        </div>
      </section>

      {/* Alumni Impact Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alumni Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our alumni are thriving in their careers and making a difference in their communities. 
              Here are just a few of their inspiring stories.
            </p>
          </div>
          
          <div className="grid grid-1 md:grid-2 gap-8">
            {alumniStories.map((alumni, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{alumni.name}</h3>
                      <p className="text-cardinal font-medium mb-1">{alumni.class}</p>
                      <p className="text-gray-600 mb-2">{alumni.role} at {alumni.company}</p>
                      <p className="text-gray-600 leading-relaxed">{alumni.story}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="grid md:grid-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our alumni network spans across industries and geographic locations. 
                Stay connected with your LBSA familia and continue to grow your professional network.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cardinal rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Alumni Events</h3>
                    <p className="text-gray-600">Join us for networking events, reunions, and professional development opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cardinal rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Mentorship Program</h3>
                    <p className="text-gray-600">Give back by mentoring current students and sharing your professional experience.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cardinal rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Career Opportunities</h3>
                    <p className="text-gray-600">Access job postings and recruitment opportunities from our corporate partners.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/src/assets/img/alumni_network.jpg"
                alt="LBSA alumni networking event"
                className="rounded-lg shadow-lg max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Statistics Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alumni Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our alumni are making waves across industries and around the world
            </p>
          </div>
          
          <div className="grid grid-2 md:grid-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cardinal mb-2">300+</div>
              <p className="text-gray-600">Alumni Worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cardinal mb-2">25+</div>
              <p className="text-gray-600">Industries Represented</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cardinal mb-2">15+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cardinal mb-2">85%</div>
              <p className="text-gray-600">Graduate School Acceptance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-cardinal text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Whether you want to mentor students, attend events, or simply stay connected, 
            there are many ways to remain part of the LBSA familia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lbsa@scu.edu?subject=Alumni%20Inquiry"
              className="bg-white text-cardinal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Contact Us
            </a>
            <a
              href="https://linkedin.com/groups/scu-lbsa-alumni"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cardinal transition inline-block"
            >
              Join Alumni Group
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Alumni
