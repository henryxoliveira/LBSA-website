import React from 'react'
import { Link } from 'react-router-dom'
import MemberCard from '../components/MemberCard'

const Board = () => {
  const boardMembers = [
    {
      name: 'Adrian Pina',
      role: 'Co-President',
      image: '/src/assets/img/headshot_1.jpg',
      linkedin: 'https://www.linkedin.com/in/adrian-pina2022/'
    },
    {
      name: 'Jacky Ceja',
      role: 'Co-President',
      image: '/src/assets/img/headshot_2.jpg',
      linkedin: 'https://www.linkedin.com/in/jacqueline-ceja/'
    },
    {
      name: 'Karla Hernandez',
      role: 'Director of Marketing',
      image: '/src/assets/img/headshot_3.jpg',
      linkedin: 'https://www.linkedin.com/in/karla-martinez-karla-martinez/'
    },
    {
      name: 'Gavin Hall',
      role: 'Director of Member Relations',
      image: '/src/assets/img/headshot_4.jpg',
      linkedin: 'https://www.linkedin.com/in/gavin-hall/'
    },
    {
      name: 'Jahir De Los Santos',
      role: 'Director of Internal Affairs',
      image: '/src/assets/img/headshot_5.jpg',
      linkedin: 'https://www.linkedin.com/in/jahirdelossantos/'
    },
    {
      name: 'Juan Macias',
      role: 'Finance Coordinator',
      image: '/src/assets/img/headshot_6.jpg',
      linkedin: 'https://www.linkedin.com/in/juan-mac%C3%ADas-02599b240/'
    },
    {
      name: 'Jeffrey Leon',
      role: 'Internal Relations',
      image: '/src/assets/img/headshot_7.jpg',
      linkedin: 'https://www.linkedin.com/in/jeffrey-leon-249819219/'
    },
    {
      name: 'Jasmin Gonzalez-Ortiz',
      role: 'Creative Media Manager',
      image: '/src/assets/img/headshot_8.jpg',
      linkedin: 'https://www.linkedin.com/in/jasmingonzalez-ortiz/'
    },
    {
      name: 'Daniel Barandica',
      role: 'Internal Relations',
      image: '/src/assets/img/headshot_9.jpg',
      linkedin: 'https://www.linkedin.com/in/daniel-barandica-/'
    },
    {
      name: 'Emily Robles',
      role: 'Marketing Coordinator',
      image: '/src/assets/img/headshot_10.jpg',
      linkedin: 'https://www.linkedin.com/in/emily-robles-9669602a9/'
    },
    {
      name: 'Jesus Cruz',
      role: 'Financial Advisor',
      image: '/src/assets/img/headshot_11.jpg',
      linkedin: 'https://www.linkedin.com/in/jesus-cruz72/'
    },
    {
      name: 'Jasmine Arizpe',
      role: 'Marketing Coordinator',
      image: '/src/assets/img/headshot_12.jpg',
      linkedin: 'https://www.linkedin.com/in/jasmine-arizpe-a24789342/'
    },
    {
      name: 'Camilo Ramirez',
      role: 'Director of AR & Alumni Engagement Coordinator',
      image: '/src/assets/img/headshot_13.jpg',
      linkedin: 'https://www.linkedin.com/in/camilo-ramirez-/'
    },
    {
      name: 'Stephanie Andrade',
      role: 'Sponsorship Outreach',
      image: '/src/assets/img/headshot_14.jpg',
      linkedin: 'https://www.linkedin.com/in/stephanie-andrade-chavez/'
    },
    {
      name: 'Henrique Olivera',
      role: 'VP of External Affairs',
      image: '/src/assets/img/headshot_15.jpg',
      linkedin: 'https://www.linkedin.com/in/henrique-de-mello-oliveira/'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-burgundy text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
            Meet Our 2025 Board
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
            A team of dedicated students committed to empowering the next generation of Latinx leaders.
          </p>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-light-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">2025-2026 Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our executive board works tirelessly to create meaningful experiences 
              and opportunities for all LBSA members.
            </p>
          </div>
          
          <div className="grid grid-2 md:grid-3 lg:grid-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-burgundy opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-burgundy" style={{fontFamily: 'var(--font-subheading)'}}>
                    {member.name}
                  </h3>
                  <p className="text-gray-600 italic mb-4" style={{fontFamily: 'var(--font-body)'}}>
                    {member.role}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-burgundy hover:text-black transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Board Highlights</h2>
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
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
            Get Involved
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
            Interested in joining our leadership team? We're always looking for 
            passionate students to help lead our organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-cardinal text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition inline-block"
            >
              Contact Us
            </a>
            <Link
              to="/membership"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById('how-to-join')
                  if (element) {
                    const elementRect = element.getBoundingClientRect()
                    const absoluteElementTop = elementRect.top + window.pageYOffset
                    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2)
                    window.scrollTo({
                      top: middle,
                      behavior: 'smooth'
                    })
                  }
                }, 100)
              }}
              className="border-2 border-cardinal text-cardinal px-8 py-3 rounded-lg font-semibold hover:bg-cardinal hover:text-white transition inline-block"
            >
              Join LBSA
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Board
