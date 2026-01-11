import React from 'react'
import logoScu from '../assets/img/logo_scu.svg'

const Sponsorship = () => {
  const sponsors = [
    { name: 'PwC', logo: logoScu },
    { name: 'Deloitte', logo: logoScu },
    { name: 'Target', logo: logoScu },
    { name: 'Google', logo: logoScu },
    { name: 'Microsoft', logo: logoScu },
    { name: 'Amazon', logo: logoScu },
    { name: 'Salesforce', logo: logoScu },
    { name: 'Netflix', logo: logoScu }
  ]
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
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
              <div key={index} className="flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 w-auto"
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
                <div className="bg-cardinal text-white p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold">{tier.amount}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-cardinal mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
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
          <div className="bg-gray-100 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Custom Package Benefits</h3>
            <div className="grid grid-1 md:grid-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cardinal mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-600">Tailored event sponsorship</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cardinal mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-600">Exclusive networking opportunities</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cardinal mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-600">Student mentorship programs</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cardinal mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-600">Recruitment event hosting</span>
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
