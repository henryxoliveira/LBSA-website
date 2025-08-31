import React from 'react'

const Membership = () => {
  const joinSteps = [
    {
      number: '1',
      title: 'Attend an Event',
      description: 'Join us at one of our upcoming events to meet current members and learn more about LBSA.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '2',
      title: 'Submit Application',
      description: 'Complete our membership application form and submit it along with your resume.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="14,2 14,8 20,8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="10,9 9,9 8,9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '3',
      title: 'Interview',
      description: 'Meet with our executive board for a brief interview to discuss your goals and interests.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '4',
      title: 'Welcome to the Familia',
      description: 'Once accepted, you\'ll receive a welcome package and be invited to our new member orientation.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  const committees = [
    {
      name: 'Familia Committee',
      description: 'Build community and foster relationships among members through social events and activities.',
      responsibilities: [
        'Organize social events and mixers',
        'Plan cultural celebrations',
        'Create mentorship programs',
        'Foster inclusive environment'
      ]
    },
    {
      name: 'Community Service Committee',
      description: 'Give back to our community through volunteer work and charitable initiatives.',
      responsibilities: [
        'Coordinate volunteer opportunities',
        'Organize fundraising events',
        'Partner with local organizations',
        'Plan service trips'
      ]
    },
    {
      name: 'Professional Development Committee',
      description: 'Provide career development opportunities and industry connections.',
      responsibilities: [
        'Organize networking events',
        'Coordinate career workshops',
        'Manage corporate partnerships',
        'Plan industry panels'
      ]
    },
    {
      name: 'Academics Committee',
      description: 'Support academic excellence through study groups and educational resources.',
      responsibilities: [
        'Organize study groups',
        'Coordinate tutoring programs',
        'Plan academic workshops',
        'Manage scholarship programs'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cardinal text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Familia</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Become part of a supportive community that empowers Latinx business students 
            to achieve their academic and professional goals.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Member Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As an LBSA member, you'll have access to exclusive opportunities and resources
            </p>
          </div>
          
          <div className="grid grid-2 md:grid-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">Connect with peers, alumni, and industry professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-gray-600">Develop leadership skills through committee involvement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Opportunities</h3>
              <p className="text-gray-600">Access to internships, jobs, and exclusive events</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Academic support and mentorship programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Join</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to become part of the LBSA familia
            </p>
          </div>
          
          <div className="grid grid-1 md:grid-2 lg:grid-4 gap-8">
            {joinSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join one of our committees to make a difference and develop your leadership skills
            </p>
          </div>
          
          <div className="grid grid-1 md:grid-2 gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-cardinal text-white p-6">
                  <h3 className="text-xl font-semibold">{committee.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{committee.description}</p>
                  <h4 className="font-semibold mb-3">Responsibilities:</h4>
                  <ul className="space-y-2">
                    {committee.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-cardinal mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="grid md:grid-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Membership Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cardinal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Current SCU Student</h3>
                    <p className="text-gray-600">Must be enrolled at Santa Clara University</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cardinal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Good Academic Standing</h3>
                    <p className="text-gray-600">Maintain a minimum GPA of 2.5</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cardinal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Commitment to Mission</h3>
                    <p className="text-gray-600">Demonstrate interest in our four pillars</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cardinal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Active Participation</h3>
                    <p className="text-gray-600">Attend meetings and events regularly</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/src/assets/img/membership_hero.jpg"
                alt="LBSA members at a meeting"
                className="rounded-lg shadow-lg max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cardinal text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Start your journey with LBSA today and become part of a community that will 
            support you throughout your academic and professional career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lbsa@scu.edu?subject=Membership%20Inquiry"
              className="bg-white text-cardinal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cardinal transition inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Membership
