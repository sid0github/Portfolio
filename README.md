# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Components**: Dynamic navigation, contact form, and project showcase
- **Performance Optimized**: Fast loading times and smooth scrolling
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Sections

1. **Hero Section**: Introduction and call-to-action
2. **About**: Personal information and services offered
3. **Projects**: Showcase of portfolio projects with technologies used
4. **Skills**: Technical skills with proficiency levels
5. **Contact**: Contact form and social media links

## Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic markup
- **CSS3**: Custom animations and styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.jsx`: Change name, title, and description
- `src/components/About.jsx`: Update personal story and services
- `src/components/Projects.jsx`: Add your own projects
- `src/components/Skills.jsx`: Update skills and proficiency levels
- `src/components/Contact.jsx`: Update contact information and social links

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for custom styles
- Change colors, fonts, and animations as needed

### Adding Images

Place your images in the `src/assets/images/` directory and import them in your components.

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy your site

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/portfolio"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please open an issue on GitHub or contact me directly. 