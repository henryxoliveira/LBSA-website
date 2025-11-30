import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cardinal text-white py-20">
        <div className="container text-center">
          <div className="mb-8">
            <img 
              src="/src/assets/img/Latinx Business Student Association Logo.png" 
              alt="LBSA Logo" 
              className="h-20 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About SCU LBSA</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We are dedicated to empowering Latinx students within the Leavey School of Business and beyond.
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
                The Latinx Business Student Association (LBSA) at Santa Clara University is dedicated to empowering Latinx students within the Leavey School of Business and beyond. Our mission is to cultivate leadership, foster community, and promote professional growth through mentorship, networking opportunities, and cultural celebration.
              </p>
              <p className="text-lg text-gray-600">
                We strive to bridge the gap between students and the corporate world by providing the tools, connections, and confidence needed to succeed. At LBSA, every member is encouraged to embrace their identity, share their story, and lead with purpose.
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
          
          <div className="grid grid-2 md:grid-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/src/assets/img/leadership logo.png" 
                  alt="Leadership Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Providing the tools for professional growth. Through workshops, schoolwide events, and connections with various companies and recruiters, our goal is to develop the next generation of business leaders.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/src/assets/img/Empowerment logo.png" 
                  alt="Empowerment Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
              <p className="text-gray-600">Where students embrace their identities and step into the business world with confidence. We believe empowerment begins with representation. LBSA mentorship and community support aims to uplift members to pursue their goals and inspire others to do the same.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/src/assets/img/Community logo.png" 
                  alt="Community Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building strong relationships based on collaboration and teamwork. Latinx students connect and grow together. Through cultural events, mentorship, and shared experiences, we strengthen our sense of belonging and uplift one another as future business leaders.</p>
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
