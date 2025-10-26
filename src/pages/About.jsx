import React from 'react'

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-burgundy text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
            About LBSA at SCU
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
            Founded to create inclusive spaces within the Leavey School of Business, LBSA fosters professional development, cultural pride, and leadership opportunities for Latinx students.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/src/assets/img/hero.jpg"
                alt="LBSA students networking"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-4xl font-bold" style={{fontFamily: 'var(--font-heading)'}}>BSA</div>
                <div className="text-lg" style={{fontFamily: 'var(--font-subheading)'}}>SCU</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
                Our Mission
              </h2>
              <p className="text-lg mb-8" style={{fontFamily: 'var(--font-body)'}}>
                Founded to create inclusive spaces within the Leavey School of Business, LBSA fosters professional development, cultural pride, and leadership opportunities for Latinx students. We connect students with industry professionals, alumni, and peers who share a passion for business and community impact.
              </p>
              <div className="grid grid-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <h3 className="font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Professional Growth</h3>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌎</div>
                  <h3 className="font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Cultural Identity</h3>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <h3 className="font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Community Leadership</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              Our Values
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
              The principles that guide everything we do as an organization
            </p>
          </div>
          
          <div className="grid grid-2 md:grid-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Excellence</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>Striving for the highest standards in everything we do</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Community</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>Building strong, supportive relationships</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Leadership</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>Developing the next generation of business leaders</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Heritage</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>Celebrating and honoring our Latinx culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-2 gap-12 items-center">
            <div className="text-center">
              <img
                src="/src/assets/img/hero.jpg"
                alt="Historical photo of SCU LBSA founding members"
                className="rounded-lg shadow-lg max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
                Our History
              </h2>
              <p className="text-lg mb-6" style={{fontFamily: 'var(--font-body)'}}>
                Founded in 2020, the Latinx Business Student Association at Santa Clara 
                University has grown from a small group of dedicated students to one of 
                the most active and influential student organizations on campus.
              </p>
              <p className="text-lg mb-6" style={{fontFamily: 'var(--font-body)'}}>
                Over the years, we have established strong partnerships with leading 
                companies, created impactful community service programs, and helped 
                hundreds of students achieve their academic and professional goals.
              </p>
              <p className="text-lg" style={{fontFamily: 'var(--font-body)'}}>
                Today, we continue to build on this legacy, creating opportunities 
                for current and future Latinx business leaders at Santa Clara University.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
