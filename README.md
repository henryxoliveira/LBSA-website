# SCU LBSA Website

A production-ready React website for the Santa Clara University Latinx Business Student Association (LBSA).

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
scu-lbsa-website/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── img/           # Images and SVGs
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── styles.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Adding a New Year to PhotoBook

1. Add the year to the `photoBookYears` array in `src/App.jsx`
2. Add corresponding route in the Routes section
3. Add year option to the PhotoBook dropdown in `src/components/Navbar.jsx`

### Replacing Images

- Replace files in `/src/assets/img/` directory
- Update image imports in components as needed
- Recommended image formats: JPG, PNG, SVG
- Optimize images for web (compress, resize appropriately)

### Updating Content

- Edit content in individual page components
- Update meta descriptions in `index.html`
- Modify global styles in `src/styles.css`

## 🎯 Features

- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **Performance** - Code splitting, lazy loading, optimized assets
- **SEO** - Meta tags, structured data, semantic markup
- **Modern UI** - Clean design with SCU branding colors

## 🎨 Design System

### Colors
- **Cardinal Red**: `#B30738` (Primary brand color)
- **Charcoal**: `#1F2937` (Text and dark elements)
- **Gray Scale**: Various shades for UI elements
- **White**: `#FFFFFF` (Backgrounds and text)

### Typography
- **Font Family**: System UI stack for optimal performance
- **Responsive**: Fluid typography that scales with viewport
- **Hierarchy**: Clear heading and text size progression

### Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Contact info and social links
- **Cards**: Reusable card components for content
- **Gallery**: Image gallery with modal functionality
- **Forms**: Accessible form components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Skip-to-content link
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast design

## 🔧 Technical Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS Modules** - Component-scoped styles
- **Vanilla CSS** - Global styles and utilities

## 📄 Pages

1. **Home** - Hero section, stats, pillars, logo grid
2. **About** - Mission, values, history, leadership
3. **Board** - Executive board members and committees
4. **Sponsorship** - Partnership opportunities and tiers
5. **Alumni** - Success stories and network
6. **Membership** - How to join and benefits
7. **Resources** - Helpful links and tools
8. **PhotoBook** - Year-based photo galleries
9. **Contact** - Contact form and information

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Use GitHub Actions
- **Traditional Hosting**: Upload `dist` contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: lbsa@scu.edu
- Website: [scu-lbsa.org](https://scu-lbsa.org)

## 📄 License

This project is for the Santa Clara University Latinx Business Student Association.

---

**Built with ❤️ for the SCU LBSA community**
