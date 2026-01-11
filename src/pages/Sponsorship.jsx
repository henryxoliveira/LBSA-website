import React from 'react'
import amazonLogo from '../assets/img/amazonlogo.png'
import deloitteLogo from '../assets/img/deloittelogo.avif'
import googleLogo from '../assets/img/googlelogo.webp'
import kpmgLogo from '../assets/img/kpmglogoo.png'
import mossLogo from '../assets/img/mosslogo.jpg'
import pwcLogo from '../assets/img/pwclogo.jpg'
import snowflakeLogo from '../assets/img/snowflakelogo.svg'
import targetLogo from '../assets/img/targetlogo.jpg'

const Sponsorship = () => {
  const sponsors = [
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Deloitte', logo: deloitteLogo },
    { name: 'Google', logo: googleLogo },
    { name: 'KPMG', logo: kpmgLogo },
    { name: 'Moss', logo: mossLogo },
    { name: 'PwC', logo: pwcLogo },
    { name: 'Snowflake', logo: snowflakeLogo },
    { name: 'Target', logo: targetLogo }
  ]

  const getBenefitIcon = (benefit) => {
    const lowerBenefit = benefit.toLowerCase()
    
    if (lowerBenefit.includes('logo on website') || lowerBenefit.includes('logo on event')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('social media')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('event attendance') || lowerBenefit.includes('events')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('newsletter')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('resume book') || lowerBenefit.includes('book')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('networking')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('featured sponsor') || lowerBenefit.includes('recognition')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('presentation')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('custom') || lowerBenefit.includes('package')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('naming rights')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('executive board') || lowerBenefit.includes('meetings')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('mentorship') || lowerBenefit.includes('mentor')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('recruitment') || lowerBenefit.includes('hosting')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    }
    if (lowerBenefit.includes('all bronze') || lowerBenefit.includes('all silver') || lowerBenefit.includes('all gold')) {
      return (
        <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      )
    }
    
    // Default icon
    return (
      <svg className="w-6 h-6 text-cardinal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    )
  }
  const sponsorshipTiers = [
    {
      name: 'Bronze',
      amount: '$500',
      benefits: [
        'Logo on website',
        'Social media recognition',
        'Event attendance (2 events)',
        'Newsletter mention'
      ]
    },
    {
      name: 'Silver',
      amount: '$1,000',
      benefits: [
        'All Bronze benefits',
        'Logo on event materials',
        'Event attendance (4 events)',
        'Resume book access',
        'Networking event participation'
      ]
    },
    {
      name: 'Gold',
      amount: '$2,500',
      benefits: [
        'All Silver benefits',
        'Featured sponsor at events',
        'Event attendance (all events)',
        'Exclusive networking opportunities',
        'Student presentation opportunities',
        'Recognition at annual banquet'
      ]
    },
    {
      name: 'Platinum',
      amount: '$5,000+',
      benefits: [
        'All Gold benefits',
        'Custom sponsorship package',
        'Naming rights for events',
        'Executive board meetings',
        'Mentorship program participation',
        'Recruitment event hosting'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-burgundy text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)', color: '#F5F5F5'}}>
            Our Corporate Partners
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
            We are proud to collaborate with industry leaders who share our mission of empowering Latinx students in business.
          </p>
        </div>
      </section>

      {/* Sponsors Grid Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-2 md:grid-4 lg:grid-4 gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex items-center justify-center p-8 bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[120px]">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-20 bg-light-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              Why Partner With Us?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
              Partner with SCU LBSA to support the next generation of Latinx business leaders and connect with talented students.
            </p>
          </div>
          <div className="grid grid-2 md:grid-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Access to Top Talent</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>Connect with high-achieving Latinx business students from Santa Clara University.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Diversity & Inclusion</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>Support diversity initiatives and demonstrate your commitment to inclusive hiring.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Brand Visibility</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>Increase your brand awareness among students, alumni, and the broader community.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'var(--font-subheading)'}}>Community Impact</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>Make a meaningful difference in the lives of students and the Latinx community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sponsorship Tiers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the sponsorship level that best fits your organization's goals and budget
            </p>
          </div>
          
          <div className="grid grid-1 md:grid-2 lg:grid-4 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-cardinal text-white text-center" style={{padding: '0.05rem'}}>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold">{tier.amount}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                        <div className="mt-0.5">
                          {getBenefitIcon(benefit)}
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed flex-1">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sponsorship Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Sponsorship Packages</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see a tier that fits your needs? We're happy to work with you to create 
            a custom sponsorship package that aligns with your organization's goals.
          </p>
          <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold mb-8">Custom Package Benefits</h3>
            <div className="grid grid-1 md:grid-2 lg:grid-4 gap-6 text-left">
              <div className="bg-beige border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center text-center gap-3 hover:border-cardinal hover:shadow-md transition-all duration-200">
                <div>
                  {getBenefitIcon('Tailored event sponsorship')}
                </div>
                <span className="text-gray-700 text-sm leading-relaxed font-medium">Tailored event sponsorship</span>
              </div>
              <div className="bg-beige border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center text-center gap-3 hover:border-cardinal hover:shadow-md transition-all duration-200">
                <div>
                  {getBenefitIcon('Exclusive networking opportunities')}
                </div>
                <span className="text-gray-700 text-sm leading-relaxed font-medium">Exclusive networking opportunities</span>
              </div>
              <div className="bg-beige border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center text-center gap-3 hover:border-cardinal hover:shadow-md transition-all duration-200">
                <div>
                  {getBenefitIcon('Student mentorship programs')}
                </div>
                <span className="text-gray-700 text-sm leading-relaxed font-medium">Student mentorship programs</span>
              </div>
              <div className="bg-beige border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center text-center gap-3 hover:border-cardinal hover:shadow-md transition-all duration-200">
                <div>
                  {getBenefitIcon('Recruitment event hosting')}
                </div>
                <span className="text-gray-700 text-sm leading-relaxed font-medium">Recruitment event hosting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-burgundy text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200" style={{fontFamily: 'var(--font-body)'}}>
            Join us in empowering the next generation of Latinx business leaders. 
            Contact us to discuss sponsorship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lbsa@scu.edu?subject=Sponsorship%20Inquiry"
              className="bg-white text-burgundy px-8 py-3 rounded-lg font-semibold hover:bg-beige transition inline-block"
              style={{fontFamily: 'var(--font-subheading)'}}
            >
              Email Us
            </a>
            <a
              href="tel:+1-408-554-4000"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-burgundy transition inline-block"
              style={{fontFamily: 'var(--font-subheading)'}}
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sponsorship
