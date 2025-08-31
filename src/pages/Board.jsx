import React from 'react'
import MemberCard from '../components/MemberCard'

const Board = () => {
  const boardMembers = [
    {
      name: 'Maria Rodriguez',
      role: 'President',
      image: '/src/assets/img/headshot_1.svg',
      linkedin: 'https://linkedin.com/in/maria-rodriguez'
    },
    {
      name: 'Carlos Martinez',
      role: 'Vice President',
      image: '/src/assets/img/headshot_2.svg',
      linkedin: 'https://linkedin.com/in/carlos-martinez'
    },
    {
      name: 'Ana Garcia',
      role: 'Treasurer',
      image: '/src/assets/img/headshot_3.svg',
      linkedin: 'https://linkedin.com/in/ana-garcia'
    },
    {
      name: 'Diego Lopez',
      role: 'Secretary',
      image: '/src/assets/img/headshot_4.svg',
      linkedin: 'https://linkedin.com/in/diego-lopez'
    },
    {
      name: 'Sofia Hernandez',
      role: 'Events Coordinator',
      image: '/src/assets/img/headshot_5.svg',
      linkedin: 'https://linkedin.com/in/sofia-hernandez'
    },
    {
      name: 'Javier Torres',
      role: 'Marketing Director',
      image: '/src/assets/img/headshot_6.svg',
      linkedin: 'https://linkedin.com/in/javier-torres'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cardinal text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Executive Board</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Meet the dedicated student leaders who drive our mission forward and 
            create opportunities for our community.
          </p>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">2024-2025 Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our executive board works tirelessly to create meaningful experiences 
              and opportunities for all LBSA members.
            </p>
          </div>
          
          <div className="grid grid-2 md:grid-3 lg:grid-4 gap-8">
            {boardMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Committee Chairs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our committee chairs lead specialized initiatives and programs 
              that support our four pillars.
            </p>
          </div>
          
          <div className="grid grid-2 md:grid-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Familia Committee</h3>
              <p className="text-gray-600 text-sm mb-4">Building community and relationships</p>
              <p className="text-sm text-gray-500">Chair: [Name]</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Service</h3>
              <p className="text-gray-600 text-sm mb-4">Giving back to our community</p>
              <p className="text-sm text-gray-500">Chair: [Name]</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
              <p className="text-gray-600 text-sm mb-4">Career growth and networking</p>
              <p className="text-sm text-gray-500">Chair: [Name]</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Academics Committee</h3>
              <p className="text-gray-600 text-sm mb-4">Academic support and excellence</p>
              <p className="text-sm text-gray-500">Chair: [Name]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in joining our leadership team? We're always looking for 
            passionate students to help lead our organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lbsa@scu.edu"
              className="bg-cardinal text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition inline-block"
            >
              Contact Us
            </a>
            <a
              href="/membership"
              className="border-2 border-cardinal text-cardinal px-8 py-3 rounded-lg font-semibold hover:bg-cardinal hover:text-white transition inline-block"
            >
              Join LBSA
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Board
