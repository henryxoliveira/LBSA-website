import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    // For now, we'll just show an alert and reset the form
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-burgundy text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>
            Stay Connected with LBSA SCU
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
            Follow us and get involved with our growing community.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{fontFamily: 'var(--font-subheading)'}}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                    placeholder="Your full name"
                    style={{fontFamily: 'var(--font-body)'}}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{fontFamily: 'var(--font-subheading)'}}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                    placeholder="your.email@scu.edu"
                    style={{fontFamily: 'var(--font-body)'}}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2" style={{fontFamily: 'var(--font-subheading)'}}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                    style={{fontFamily: 'var(--font-body)'}}
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="sponsorship">Sponsorship Opportunities</option>
                    <option value="events">Event Information</option>
                    <option value="alumni">Alumni Relations</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{fontFamily: 'var(--font-subheading)'}}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                    style={{fontFamily: 'var(--font-body)'}}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-burgundy text-white py-3 px-6 rounded-lg font-semibold hover:bg-black transition"
                  style={{fontFamily: 'var(--font-subheading)'}}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{fontFamily: 'var(--font-heading)'}}>Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-subheading)'}}>Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold" style={{fontFamily: 'var(--font-subheading)'}}>Address</h4>
                        <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>
                          Santa Clara University<br />
                          Leavey School of Business<br />
                          500 El Camino Real<br />
                          Santa Clara, CA 95053
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold" style={{fontFamily: 'var(--font-subheading)'}}>Email</h4>
                        <a href="mailto:lbsa@scu.edu" className="text-burgundy hover:text-black transition">
                          lbsa@scu.edu
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-burgundy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold" style={{fontFamily: 'var(--font-subheading)'}}>Phone</h4>
                        <a href="tel:+1-408-554-4000" className="text-burgundy hover:text-black transition">
                          (408) 554-4000
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{fontFamily: 'var(--font-subheading)'}}>Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/lbsa_scu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center text-white hover:bg-black transition"
                      aria-label="Follow us on Instagram"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    
                    <a
                      href="https://linkedin.com/company/scu-lbsa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center text-white hover:bg-black transition"
                      aria-label="Connect with us on LinkedIn"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
              Find answers to common questions about LBSA
            </p>
          </div>
          
          <div className="grid md:grid-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3" style={{fontFamily: 'var(--font-subheading)'}}>How do I join LBSA?</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>
                Attend one of our events, submit an application, and complete a brief interview. 
                Visit our <a href="/membership" className="text-burgundy hover:text-black transition">Membership page</a> for more details.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3" style={{fontFamily: 'var(--font-subheading)'}}>What events do you host?</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>
                We host networking events, professional development workshops, community service 
                activities, and social gatherings throughout the year.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3" style={{fontFamily: 'var(--font-subheading)'}}>Are there membership fees?</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>
                LBSA membership is free for current SCU students. We're funded through 
                sponsorships and university support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3" style={{fontFamily: 'var(--font-subheading)'}}>How can companies partner with LBSA?</h3>
              <p className="text-gray-600" style={{fontFamily: 'var(--font-body)'}}>
                We offer various sponsorship tiers and custom partnership opportunities. 
                Visit our <a href="/sponsorship" className="text-burgundy hover:text-black transition">Sponsorship page</a> for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
