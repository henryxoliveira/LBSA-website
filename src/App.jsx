/*
 * SCU LBSA Website
 * 
 * SETUP INSTRUCTIONS:
 * 1. Run: npm install
 * 2. Run: npm run dev
 * 3. Open http://localhost:5173
 * 
 * TO ADD A NEW YEAR TO PHOTOBOOK:
 * 1. Add the year to the photoBookYears array in this file
 * 2. Create corresponding route in the Routes section
 * 3. Add year option to the PhotoBook dropdown in Navbar.jsx
 * 
 * TO REPLACE IMAGES:
 * - Replace files in /src/assets/img/ directory
 * - Update image imports in components
 * 
 * TO UPDATE TEXT:
 * - Edit content in individual page components
 * - Update meta descriptions in index.html
 */

import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load pages for code splitting
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Board = React.lazy(() => import('./pages/Board'))
const Sponsorship = React.lazy(() => import('./pages/Sponsorship'))
const Alumni = React.lazy(() => import('./pages/Alumni'))
const Membership = React.lazy(() => import('./pages/Membership'))
// Resources page hidden for now - uncomment when ready
// const Resources = React.lazy(() => import('./pages/Resources'))
const PhotoBook = React.lazy(() => import('./pages/PhotoBook'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Privacy = React.lazy(() => import('./pages/Privacy'))
const Terms = React.lazy(() => import('./pages/Terms'))

// Available years for PhotoBook
export const photoBookYears = [
  '2024-2025',
  '2023-2024',
  '2022-2023',
  '2021-2022'
]

function App() {
  return (
    <div className="App">
      {/* Skip to content link for accessibility */}
      <a href="#content" className="skip-link">
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="content" tabIndex="-1">
        <Suspense fallback={
          <div className="container py-12">
            <div className="text-center">
              <h2>Loading...</h2>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/board" element={<Board />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/membership" element={<Membership />} />
            {/* <Route path="/resources" element={<Resources />} /> */}
            <Route path="/photobook/:year" element={<PhotoBook />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
