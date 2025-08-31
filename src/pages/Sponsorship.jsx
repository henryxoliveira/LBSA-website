import React from 'react'

const Sponsorship = () => {
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
      <section className="bg-cardinal text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sponsorship Opportunities</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Partner with SCU LBSA to support the next generation of Latinx business leaders 
            and connect with talented students.
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cardinal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Access to Top Talent</h3>
                    <p className="text-gray-600">Connect with high-achieving Latinx business students from Santa Clara University.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cardinal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Diversity & Inclusion</h3>
                    <p className="text-gray-600">Support diversity initiatives and demonstrate your commitment to inclusive hiring.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cardinal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Brand Visibility</h3>
                    <p className="text-gray-600">Increase your brand awareness among students, alumni, and the broader community.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cardinal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Community Impact</h3>
                    <p className="text-gray-600">Make a meaningful difference in the lives of students and the Latinx community.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/src/assets/img/sponsorship_hero.jpg"
                alt="Corporate networking event"
                className="rounded-lg shadow-lg max-w-md mx-auto"
              />
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
      <section className="py-16 bg-cardinal text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Join us in empowering the next generation of Latinx business leaders. 
            Contact us to discuss sponsorship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lbsa@scu.edu?subject=Sponsorship%20Inquiry"
              className="bg-white text-cardinal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Email Us
            </a>
            <a
              href="tel:+1-408-554-4000"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cardinal transition inline-block"
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
