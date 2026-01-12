import React from 'react'

const Privacy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cardinal text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-heading)'}}>
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-200" style={{fontFamily: 'var(--font-body)'}}>
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                The Santa Clara University Latinx Business Student Association (SCU LBSA) is committed to protecting the privacy and accuracy of your confidential information to the extent possible, subject to provisions of state and federal law. Other than as required by laws that guarantee public access to certain types of information, or in response to subpoenas or other legal instruments that authorize access, personally identifiable information is not actively shared. In particular, we do not re-distribute or sell personal information collected on our web servers.
              </p>
            </div>

            {/* Information Collected */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-cardinal" style={{fontFamily: 'var(--font-heading)'}}>
                Information Collected
              </h2>
              <p className="text-gray-700 mb-4" style={{fontFamily: 'var(--font-body)'}}>
                Our web servers may log the following information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4" style={{fontFamily: 'var(--font-body)'}}>
                <li>Internet Protocol (IP) address of the computer being used</li>
                <li>Web pages requested</li>
                <li>Referring web page</li>
                <li>Browser used</li>
                <li>Date and time</li>
              </ul>
              <p className="text-gray-700 mt-4" style={{fontFamily: 'var(--font-body)'}}>
                This website does not associate this data with individual user identities.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-cardinal" style={{fontFamily: 'var(--font-heading)'}}>
                Cookies and Other Tracking Technologies
              </h2>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-body)'}}>
                This website may use cookies for session maintenance: they allow us to see which pages a given user visited but do not have any identifying information about the user.
              </p>
            </div>

            {/* Analytics */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-cardinal" style={{fontFamily: 'var(--font-heading)'}}>
                Analytics Partners
              </h2>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-body)'}}>
                We may partner with third-party analytics providers to help us understand how visitors use our site. We use this information to improve our content and your experience visiting our site. In order to generate this information, these analytics partners may set their own cookies. We do not pass any personally identifying information about users to our partners.
              </p>
            </div>

            {/* Opting Out */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-cardinal" style={{fontFamily: 'var(--font-heading)'}}>
                Opting Out
              </h2>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-body)'}}>
                You can configure your browser to stop accepting cookies or to prompt you before accepting a cookie from websites you visit. Also, Google offers a browser extension to opt out of Google Analytics.
              </p>
            </div>

            {/* Webforms */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-cardinal" style={{fontFamily: 'var(--font-heading)'}}>
                Webforms
              </h2>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-body)'}}>
                This website may use webforms. Contact information from these webforms is used only to send material relating to the purpose for which it was collected and will not be sold to another party. This website will only use personal information collected from this site for the purpose of communicating with individuals who contact us via the site.
              </p>
            </div>

            {/* Distribution */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-cardinal" style={{fontFamily: 'var(--font-heading)'}}>
                Distribution of Collected Information
              </h2>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-body)'}}>
                This website will not disclose, without your consent, personal information collected about you, except for certain explicit circumstances in which disclosure is required by law. This website will not distribute or sell personal information to third-party organizations.
              </p>
            </div>

            {/* External Sites */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-cardinal" style={{fontFamily: 'var(--font-heading)'}}>
                Responsibility for External Sites
              </h2>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-body)'}}>
                This website may contain links to other websites. Some of those websites may be operated by third parties. We provide the links for your convenience, but we do not review, control, or monitor the privacy practices of websites operated by others. We are not responsible for the performance of websites operated by third parties or for your business dealings with them. Therefore, whenever you leave this website, we recommend that you review each website's privacy practices and make your own conclusions regarding the adequacy of these practices.
              </p>
            </div>

            {/* Revisions */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-cardinal" style={{fontFamily: 'var(--font-heading)'}}>
                Privacy Statement Revisions
              </h2>
              <p className="text-gray-700" style={{fontFamily: 'var(--font-body)'}}>
                We may change this Privacy Statement at any time and for any reason. We encourage you to review this Privacy Statement each time you visit the website. If we make a significant change to our Privacy Statement, we will post a notice on the homepage of our website for a period of time after the change is made.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-cardinal" style={{fontFamily: 'var(--font-heading)'}}>
                How to Contact Us
              </h2>
              <p className="text-gray-700 mb-4" style={{fontFamily: 'var(--font-body)'}}>
                If you have questions or complaints about our treatment of your personal data, or about our privacy practices more generally, please feel free to contact us at:
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="font-semibold text-cardinal" style={{fontFamily: 'var(--font-subheading)'}}>
                  SCU Latinx Business Student Association
                </p>
                <p className="text-gray-700" style={{fontFamily: 'var(--font-body)'}}>
                  Santa Clara University<br />
                  Leavey School of Business<br />
                  500 El Camino Real<br />
                  Santa Clara, CA 95053
                </p>
                <p className="mt-4">
                  <a 
                    href="mailto:lbsa@scu.edu" 
                    className="text-cardinal hover:underline font-medium"
                    style={{fontFamily: 'var(--font-body)'}}
                  >
                    lbsa@scu.edu
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Privacy

