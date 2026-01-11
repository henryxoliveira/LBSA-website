import React from 'react'
import styles from './About.module.css'
import logo from '../assets/img/Latinx Business Student Association Logo.png'

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cardinal text-white py-20">
        <div className="container text-center">
          <div className="mb-8">
            <img 
              src={logo} 
              alt="LBSA Logo" 
              className="h-20 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About SCU LBSA</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Empowering Latinx business students at Santa Clara University through 
            leadership development, community engagement, and professional growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Latinx Business Student Association (LBSA) at Santa Clara University 
                is dedicated to fostering a supportive community for Latinx business students. 
                We strive to promote academic excellence, professional development, and 
                cultural awareness while building lasting relationships within our community.
              </p>
              <p className="text-lg text-gray-600">
                Through our four pillars—Familia, Community Service, Professional Development, 
                and Academics—we create opportunities for growth, leadership, and success 
                in the business world.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/src/assets/img/about_mission.jpg"
                alt="SCU LBSA members working together"
                className="rounded-lg shadow-lg max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do as an organization
            </p>
          </div>
          
          <div className="grid grid-2 md:grid-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in everything we do</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building strong, supportive relationships</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-gray-600">Developing the next generation of business leaders</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Heritage</h3>
              <p className="text-gray-600">Celebrating and honoring our Latinx culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-2 gap-12 items-center">
            <div className="text-center">
              <img
                src="/src/assets/img/about_history.jpg"
                alt="Historical photo of SCU LBSA founding members"
                className="rounded-lg shadow-lg max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our History</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in [YEAR], the Latinx Business Student Association at Santa Clara 
                University has grown from a small group of dedicated students to one of 
                the most active and influential student organizations on campus.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have established strong partnerships with leading 
                companies, created impactful community service programs, and helped 
                hundreds of students achieve their academic and professional goals.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to build on this legacy, creating opportunities 
                for current and future Latinx business leaders at Santa Clara University.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-100">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Meet the dedicated students who lead our organization and drive our mission forward
          </p>
          <div className="grid grid-2 md:grid-4 gap-8">
            {/* Placeholder for leadership cards */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">President</h3>
              <p className="text-gray-600 text-sm">[Name]</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Vice President</h3>
              <p className="text-gray-600 text-sm">[Name]</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Treasurer</h3>
              <p className="text-gray-600 text-sm">[Name]</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Secretary</h3>
              <p className="text-gray-600 text-sm">[Name]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
