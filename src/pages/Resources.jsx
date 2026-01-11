import React from 'react'
import styles from './Resources.module.css'

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Academic Resources',
      description: 'Tools and resources to support your academic success',
      resources: [
        {
          name: 'SCU Academic Calendar',
          description: 'Important dates and deadlines for the academic year',
          url: 'https://www.scu.edu/registrar/ugrd-academic-calendar/',
          external: true,
          image: '/src/assets/img/scu logo.png'
        },
        {
          name: 'Leavey School of Business',
          description: 'Official website with program information and resources',
          url: 'https://www.scu.edu/business/',
          external: true,
          image: '/src/assets/img/lsb logo.png'
        },
        {
          name: 'SCU Library',
          description: 'Access to research databases, study spaces, and research help',
          url: 'https://www.scu.edu/library/',
          external: true,
          image: '/src/assets/img/library.png'
        },
        {
          name: 'Academic Advising',
          description: 'Schedule appointments with your academic advisor',
          url: 'https://www.scu.edu/drahmann/',
          external: true,
          image: '/src/assets/img/academic advising.webp'
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
          external: true,
          image: '/src/assets/img/career%20center.png'
        },
        {
          name: 'Handshake',
          description: 'SCU\'s job and internship platform',
          url: 'https://scu.joinhandshake.com/',
          external: true,
          image: '/src/assets/img/handshake.svg'
        },
        {
          name: 'LinkedIn Learning',
          description: 'Free access to professional development courses',
          url: 'https://www.linkedin.com/learning/',
          external: true,
          image: '/src/assets/img/LI.png'
        },
        {
          name: 'Resume Templates',
          description: 'Professional resume templates and examples',
          url: 'https://docs.google.com/document/d/1ZYMYr_Q2x3j6wbMqeX0qJ79Xd8-If5f8Z41aNhe_tuY/edit?tab=t.0#heading=h.d9nxhggkkrtp',
          external: true,
          image: '/src/assets/img/jobscan.png'
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
                    <a
                      key={resourceIndex}
                      href={resource.url}
                      target={resource.external ? "_blank" : "_self"}
                      rel={resource.external ? "noopener noreferrer" : ""}
                      className={styles.resourceCard}
                    >
                      <div className={styles.resourceCardContent}>
                        {resource.image && (
                          <div className={styles.resourceImageContainer}>
                            <img 
                              src={resource.image} 
                              alt={`${resource.name} Logo`} 
                              className={styles.resourceImage}
                            />
                          </div>
                        )}
                        <h3 className={styles.resourceTitle}>{resource.name}</h3>
                        <p className={styles.resourceDescription}>{resource.description}</p>
                      </div>
                      <div className={styles.hoverOverlay}>
                        <div className={styles.hoverText}>Visit Resource</div>
                      </div>
                    </a>
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
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/src/assets/img/scu logo.png" 
                  alt="SCU Logo" 
                  className="w-12 h-12 object-contain"
                />
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
