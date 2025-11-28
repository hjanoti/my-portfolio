# Heera Singh Janoti - Modern React Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS.

## 🚀 Features

- ✨ Modern and clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with React 18 and Tailwind CSS 3
- 🎨 Beautiful gradients and animations
- 🧭 React Router for smooth navigation
- 🎯 SEO-friendly structure
- 💫 Smooth transitions and hover effects

## 📁 Project Structure

```
react-portfolio/
├── public/
│   ├── assets/
│   │   └── projects/
│   │       ├── E-com.png
│   │       └── Edu.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   └── Skills.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Projects.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update name, role, and intro text
   - Replace profile image placeholder

2. **Projects** (`src/pages/Projects.js`):
   - Add/remove projects
   - Update project details, images, and links

3. **Contact** (`src/pages/Contact.js`):
   - Update email, phone, and social links

4. **Skills** (`src/components/Skills.js`):
   - Add/remove skills
   - Update skill icons and colors

### Replace Placeholder Images

Replace the placeholder images in `public/assets/projects/`:
- `E-com.png` - Your ClickCart project screenshot
- `Edu.png` - Your MyEdHub project screenshot

Add your profile image to `public/assets/profile.png`

### Update GitHub Repository Links

In `src/pages/Projects.js`, update the `codeUrl` property for each project with your actual GitHub repository URLs.

## 🎯 Pages

- **Home** (`/`) - Hero section with introduction and skills
- **Projects** (`/projects`) - Showcase of featured projects
- **About** (`/about`) - About me and biography
- **Contact** (`/contact`) - Contact form and contact information

## 🔧 Technologies Used

- **React 18** - UI library
- **React Router v6** - Navigation
- **Tailwind CSS 3** - Styling
- **Font Awesome** - Icons
- **Google Fonts (Inter)** - Typography

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Scheme

- Primary: Purple (#8b5cf6)
- Secondary: Blue (#3b82f6)
- Accent: Various gradients
- Background: Gray-50 (#f9fafb)

## 🚀 Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Heera Singh Janoti**
- Email: hjanoti9098@gmail.com
- GitHub: [@hjanoti](https://github.com/hjanoti)
- LinkedIn: [Heera Singh Janoti](https://www.linkedin.com/in/heera-singh-janoti-2ab7b6179)

---

Built with ❤️ using React and Tailwind CSS
