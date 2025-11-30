import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Gallery from '../components/Gallery'
import { photoBookYears } from '../App'

const PhotoBook = () => {
  const { year } = useParams()
  const [selectedYear, setSelectedYear] = useState(year || photoBookYears[0])

  // Placeholder images for each year
  const yearImages = {
    '2024-2025': [
      { src: '/src/assets/img/photobook_2024_1.jpg', alt: 'Fall Welcome Event 2024' },
      { src: '/src/assets/img/photobook_2024_2.jpg', alt: 'Networking Mixer 2024' },
      { src: '/src/assets/img/photobook_2024_3.jpg', alt: 'Community Service Day 2024' },
      { src: '/src/assets/img/photobook_2024_4.jpg', alt: 'Professional Development Workshop 2024' },
      { src: '/src/assets/img/photobook_2024_5.jpg', alt: 'Cultural Celebration 2024' },
      { src: '/src/assets/img/photobook_2024_6.jpg', alt: 'End of Year Banquet 2024' }
    ],
    '2023-2024': [
      { src: '/src/assets/img/photobook_2023_1.jpg', alt: 'Fall Welcome Event 2023' },
      { src: '/src/assets/img/photobook_2023_2.jpg', alt: 'Networking Mixer 2023' },
      { src: '/src/assets/img/photobook_2023_3.jpg', alt: 'Community Service Day 2023' },
      { src: '/src/assets/img/photobook_2023_4.jpg', alt: 'Professional Development Workshop 2023' },
      { src: '/src/assets/img/photobook_2023_5.jpg', alt: 'Cultural Celebration 2023' },
      { src: '/src/assets/img/photobook_2023_6.jpg', alt: 'End of Year Banquet 2023' }
    ],
    '2022-2023': [
      { src: '/src/assets/img/photobook_2022_1.jpg', alt: 'Fall Welcome Event 2022' },
      { src: '/src/assets/img/photobook_2022_2.jpg', alt: 'Networking Mixer 2022' },
      { src: '/src/assets/img/photobook_2022_3.jpg', alt: 'Community Service Day 2022' },
      { src: '/src/assets/img/photobook_2022_4.jpg', alt: 'Professional Development Workshop 2022' },
      { src: '/src/assets/img/photobook_2022_5.jpg', alt: 'Cultural Celebration 2022' },
      { src: '/src/assets/img/photobook_2022_6.jpg', alt: 'End of Year Banquet 2022' }
    ],
    '2021-2022': [
      { src: '/src/assets/img/photobook_2021_1.jpg', alt: 'Fall Welcome Event 2021' },
      { src: '/src/assets/img/photobook_2021_2.jpg', alt: 'Networking Mixer 2021' },
      { src: '/src/assets/img/photobook_2021_3.jpg', alt: 'Community Service Day 2021' },
      { src: '/src/assets/img/photobook_2021_4.jpg', alt: 'Professional Development Workshop 2021' },
      { src: '/src/assets/img/photobook_2021_5.jpg', alt: 'Cultural Celebration 2021' },
      { src: '/src/assets/img/photobook_2021_6.jpg', alt: 'End of Year Banquet 2021' }
    ]
  }

  const currentImages = yearImages[selectedYear] || yearImages[photoBookYears[0]]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-cardinal text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Book</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Relive the memories and moments that make our LBSA familia special. 
            Browse through photos from our events and activities throughout the years.
          </p>
        </div>
      </section>

      {/* Year Selector Section */}
      <section className="py-8 bg-gray-100">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Select Academic Year</h2>
            <p className="text-gray-600">Choose a year to view photos from that period</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {photoBookYears.map((yearOption) => (
              <Link
                key={yearOption}
                to={`/photobook/${yearOption}`}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  selectedYear === yearOption
                    ? 'bg-cardinal text-white'
                    : 'bg-white text-cardinal border-2 border-cardinal hover:bg-cardinal hover:text-white'
                }`}
                onClick={() => setSelectedYear(yearOption)}
              >
                {yearOption}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {selectedYear} Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through photos from our events, activities, and special moments 
              during the {selectedYear} academic year.
            </p>
          </div>
          
          <Gallery
            images={currentImages}
            title={`${selectedYear} Memories`}
          />
        </div>
      </section>

      {/* Year Highlights Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {selectedYear} Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key events and achievements from the {selectedYear} academic year
            </p>
          </div>
          
          <div className="grid grid-1 md:grid-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Events Hosted</h3>
              <p className="text-3xl font-bold text-cardinal mb-2">25+</p>
              <p className="text-gray-600">Professional and social events</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Service</h3>
              <p className="text-3xl font-bold text-cardinal mb-2">500+</p>
              <p className="text-gray-600">Hours of volunteer work</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-cardinal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Members</h3>
              <p className="text-3xl font-bold text-cardinal mb-2">150+</p>
              <p className="text-gray-600">Active student members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Memories Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Memories</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have photos from LBSA events that you'd like to share? 
            Send them to us and they might be featured in our photo book!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lbsa@scu.edu?subject=Photo%20Submission"
              className="bg-cardinal text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition inline-block"
            >
              Submit Photos
            </a>
            <a
              href="https://www.instagram.com/lbsa_scu/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cardinal text-cardinal px-8 py-3 rounded-lg font-semibold hover:bg-cardinal hover:text-white transition inline-block"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default PhotoBook
