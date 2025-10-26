import React from 'react'

const Board = () => {
  const boardMembers = [
    {
      name: 'Sophia Martinez',
      role: 'President',
      image: '/src/assets/img/headshot_1.svg',
      linkedin: 'https://linkedin.com/in/sophia-martinez',
      bio: 'Leading our organization with passion and dedication to empower Latinx students in business.'
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Vice President',
      image: '/src/assets/img/headshot_1.svg',
      linkedin: 'https://linkedin.com/in/carlos-rodriguez',
      bio: 'Supporting our mission through strategic planning and community engagement initiatives.'
    },
    {
      name: 'Isabella Gomez',
      role: 'Treasurer',
      image: '/src/assets/img/headshot_1.svg',
      linkedin: 'https://linkedin.com/in/isabella-gomez',
      bio: 'Ensuring financial stability and transparency in all our organization\'s activities.'
    },
    {
      name: 'Juan Lopez',
      role: 'Secretary',
      image: '/src/assets/img/headshot_1.svg',
      linkedin: 'https://linkedin.com/in/juan-lopez',
      bio: 'Maintaining clear communication and documentation for our growing community.'
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
          <div className="grid grid-2 md:grid-4 gap-8 max-w-6xl mx-auto">
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
                  <p className="text-gray-700 text-sm mb-4" style={{fontFamily: 'var(--font-body)'}}>
                    {member.bio}
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
              href="mailto:lbsa@scu.edu"
              className="bg-burgundy text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition inline-block"
              style={{fontFamily: 'var(--font-subheading)'}}
            >
              Contact Us
            </a>
            <a
              href="/membership"
              className="border-2 border-burgundy text-burgundy px-8 py-3 rounded-lg font-semibold hover:bg-burgundy hover:text-white transition inline-block"
              style={{fontFamily: 'var(--font-subheading)'}}
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
