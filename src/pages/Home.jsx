import React from 'react'
import { Link } from 'react-router-dom'
import StatCard, { StatsGrid } from '../components/StatCard'
import PillarCard from '../components/PillarCard'
import LogoGrid from '../components/LogoGrid'
import logoPlaceholder1 from '../assets/img/logo_placeholder_1.svg'
import logoPlaceholder2 from '../assets/img/logo_placeholder_2.svg'
import heroBackground from '../assets/img/UCB-LBSA.webp'
import styles from './Home.module.css'

const Home = () => {
  const stats = [
    { number: '150+', label: 'Members', description: 'Active student members' },
    { number: '300+', label: 'Alumni', description: 'Graduated members' },
    { number: '15+', label: 'Sponsors', description: 'Corporate partners' },
    { number: '25+', label: 'Events/Year', description: 'Professional & social events' },
    { number: '$10k+', label: 'Scholarships', description: 'Awarded annually' }
  ]

  const pillars = [
    {
      title: 'Familia',
      description: 'Building lasting relationships and creating a supportive community where every member feels valued and connected.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Community Service',
      description: 'Giving back to our community through volunteer work, mentorship programs, and charitable initiatives.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Professional Development',
      description: 'Providing opportunities for career growth through workshops, networking events, and industry connections.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Academics',
      description: 'Supporting academic excellence through study groups, tutoring programs, and educational resources.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  const logos = [
    { src: logoPlaceholder1, alt: 'Company 1' },
    { src: logoPlaceholder2, alt: 'Company 2' },
    { src: logoPlaceholder1, alt: 'Company 3' },
    { src: logoPlaceholder2, alt: 'Company 4' },
    { src: logoPlaceholder1, alt: 'Company 5' },
    { src: logoPlaceholder2, alt: 'Company 6' },
    { src: logoPlaceholder1, alt: 'Company 7' },
    { src: logoPlaceholder2, alt: 'Company 8' },
    { src: logoPlaceholder1, alt: 'Company 9' },
    { src: logoPlaceholder2, alt: 'Company 10' },
    { src: logoPlaceholder1, alt: 'Company 11' },
    { src: logoPlaceholder2, alt: 'Company 12' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className="sr-only">
          Your Familia in Business at Santa Clara University
        </h1>
        <img
          src={heroBackground}
          alt="LBSA members gathered on campus"
          className={styles.heroImage}
        />
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building a strong community of Latinx business leaders at Santa Clara University
            </p>
          </div>
          
          <StatsGrid>
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </StatsGrid>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Four Pillars</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundation of our organization and what drives everything we do
            </p>
          </div>
          
          <div className="grid grid-2 md:grid-4 gap-8">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={index}
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Where We Go Section */}
      <LogoGrid
        title="Where We Go"
        subtitle="Our members and alumni work at leading companies across various industries"
        logos={logos}
      />

      {/* Community & Belonging Section */}
      <section className="py-16 bg-cardinal text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Community & Belonging
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Join a community where you'll find mentorship, friendship, and opportunities 
            to grow both personally and professionally. Our familia is here to support 
            your journey every step of the way.
          </p>
          <Link
            to="/membership"
            className="bg-white text-cardinal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
