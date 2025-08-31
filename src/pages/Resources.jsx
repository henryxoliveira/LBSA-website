import React from 'react'

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Academic Resources',
      description: 'Tools and resources to support your academic success',
      resources: [
        {
          name: 'SCU Academic Calendar',
          description: 'Important dates and deadlines for the academic year',
          url: 'https://www.scu.edu/academic-calendar/',
          external: true
        },
        {
          name: 'Leavey School of Business',
          description: 'Official website with program information and resources',
          url: 'https://www.scu.edu/business/',
          external: true
        },
        {
          name: 'SCU Library',
          description: 'Access to research databases, study spaces, and research help',
          url: 'https://www.scu.edu/library/',
          external: true
        },
        {
          name: 'Academic Advising',
          description: 'Schedule appointments with your academic advisor',
          url: 'https://www.scu.edu/advising/',
          external: true
        }
      ]
    },
    {
      title: 'Career Development',
      description: 'Resources to help you prepare for your professional career',
      resources: [
        {
          name: 'SCU Career Center',
          description: 'Career counseling, resume reviews, and job search assistance',
          url: 'https://www.scu.edu/career-center/',
          external: true
        },
        {
          name: 'Handshake',
          description: 'SCU\'s job and internship platform',
          url: 'https://scu.joinhandshake.com/',
          external: true
        },
        {
          name: 'LinkedIn Learning',
          description: 'Free access to professional development courses',
          url: 'https://www.linkedin.com/learning/',
          external: true
        },
        {
          name: 'Resume Templates',
          description: 'Professional resume templates and examples',
          url: '#',
          external: false
        }
      ]
    },
    {
      title: 'Professional Organizations',
      description: 'Industry-specific organizations and networking opportunities',
      resources: [
        {
          name: 'National Society of Hispanic MBAs',
          description: 'Professional development and networking for Hispanic business professionals',
          url: 'https://nshmba.org/',
          external: true
        },
        {
          name: 'Hispanic Chamber of Commerce',
          description: 'Business networking and advocacy organization',
          url: 'https://www.uschamber.com/',
          external: true
        },
        {
          name: 'Society for Human Resource Management',
          description: 'Professional association for HR professionals',
          url: 'https://www.shrm.org/',
          external: true
        },
        {
          name: 'American Marketing Association',
          description: 'Professional association for marketing professionals',
          url: 'https://www.ama.org/',
          external: true
        }
      ]
    },
    {
      title: 'Scholarships & Financial Aid',
      description: 'Financial resources and scholarship opportunities',
      resources: [
        {
          name: 'SCU Financial Aid',
          description: 'University financial aid and scholarship information',
          url: 'https://www.scu.edu/financialaid/',
          external: true
        },
        {
          name: 'Hispanic Scholarship Fund',
          description: 'Scholarships for Hispanic students',
          url: 'https://www.hsf.net/',
          external: true
        },
        {
          name: 'Gates Millennium Scholars',
          description: 'Scholarship program for outstanding minority students',
          url: 'https://gmsp.org/',
          external: true
        },
        {
          name: 'LBSA Scholarship',
          description: 'Internal scholarship opportunities for LBSA members',
          url: '#',
          external: false
        }
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cardinal text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Access helpful tools, links, and resources to support your academic and 
            professional development journey.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-1 md:grid-2 gap-8">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-cardinal">{resource.name}</h3>
                          {resource.external && (
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <polyline points="15,3 21,3 21,9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <a
                          href={resource.url}
                          target={resource.external ? "_blank" : "_self"}
                          rel={resource.external ? "noopener noreferrer" : ""}
                          className="inline-flex items-center text-cardinal font-semibold hover:text-red-700 transition"
                        >
                          Visit Resource
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Links</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Frequently accessed resources and important links
            </p>
          </div>
          
          <div className="grid grid-2 md:grid-4 gap-6">
            <a
              href="https://www.scu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="9,22 9,12 15,12 15,22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">SCU Homepage</h3>
              <p className="text-sm text-gray-600">Official university website</p>
            </a>
            
            <a
              href="https://www.scu.edu/business/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Leavey School</h3>
              <p className="text-sm text-gray-600">Business school resources</p>
            </a>
            
            <a
              href="https://www.scu.edu/career-center/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Career Center</h3>
              <p className="text-sm text-gray-600">Career development resources</p>
            </a>
            
            <a
              href="https://www.scu.edu/student-life/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Student Life</h3>
              <p className="text-sm text-gray-600">Campus activities and events</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you find 
            the resources you need for your academic and professional success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lbsa@scu.edu?subject=Resource%20Inquiry"
              className="bg-cardinal text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition inline-block"
            >
              Email Us
            </a>
            <a
              href="/contact"
              className="border-2 border-cardinal text-cardinal px-8 py-3 rounded-lg font-semibold hover:bg-cardinal hover:text-white transition inline-block"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resources
