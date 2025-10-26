import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const events = [
    {
      date: 'OCTOBER 18',
      title: 'PwC Panel & Network Night',
      description: 'Join us for an evening of networking and professional insights from PwC representatives.',
      image: '/src/assets/img/hero.jpg'
    },
    {
      date: 'NOV. 3',
      title: 'Building Career Workshop: Building Your Brand',
      description: 'Learn how to build and maintain your professional brand in today\'s competitive market.',
      image: '/src/assets/img/hero.jpg'
    },
    {
      date: 'SEPT. 15',
      title: 'Latinx Heritage Month Celebration',
      description: 'Celebrate Latinx Heritage Month with cultural events, food, and community building.',
      image: '/src/assets/img/hero.jpg'
    }
  ]

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(/src/assets/img/hero.jpg)'}}>
        <div className="absolute inset-0 bg-burgundy opacity-80"></div>
        <div className="relative z-10 text-center text-white">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              Connect. Lead. Empower.
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
            The Latinx Business Student Association at Santa Clara University builds a community for Latinx students to grow professionally and personally in the business world.
          </p>
          <Link
            to="/about"
            className="bg-white text-burgundy px-8 py-4 rounded-lg font-semibold hover:bg-beige transition inline-block text-lg"
            style={{fontFamily: 'var(--font-subheading)'}}
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* About Section */}
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
                About LBSA at SCU
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

      {/* Board Section */}
      <section className="py-20 bg-light-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              Meet Our 2025 Board
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
              A team of dedicated students committed to empowering the next generation of Latinx leaders.
            </p>
          </div>
          <div className="grid grid-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img
                src="/src/assets/img/headshot_1.svg"
                alt="Sophia Martinez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1" style={{fontFamily: 'var(--font-subheading)'}}>Sophia Martinez</h3>
              <p className="text-gray-600 italic" style={{fontFamily: 'var(--font-body)'}}>President</p>
            </div>
            <div className="text-center">
              <img
                src="/src/assets/img/headshot_1.svg"
                alt="Carlos Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1" style={{fontFamily: 'var(--font-subheading)'}}>Carlos Rodriguez</h3>
              <p className="text-gray-600 italic" style={{fontFamily: 'var(--font-body)'}}>Vice President</p>
            </div>
            <div className="text-center">
              <img
                src="/src/assets/img/headshot_1.svg"
                alt="Isabella Gomez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1" style={{fontFamily: 'var(--font-subheading)'}}>Isabella Gomez</h3>
              <p className="text-gray-600 italic" style={{fontFamily: 'var(--font-body)'}}>Treasurer</p>
            </div>
            <div className="text-center">
              <img
                src="/src/assets/img/headshot_1.svg"
                alt="Juan Lopez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1" style={{fontFamily: 'var(--font-subheading)'}}>Juan Lopez</h3>
              <p className="text-gray-600 italic" style={{fontFamily: 'var(--font-body)'}}>Secretary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-burgundy text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              Events
            </h2>
          </div>
          <div className="grid md:grid-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="font-bold text-burgundy mb-2" style={{fontFamily: 'var(--font-subheading)'}}>
                    {event.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{fontFamily: 'var(--font-subheading)'}}>
                    {event.title}
                  </h3>
                  <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
