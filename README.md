# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases professional work, skills, and experience with a beautiful and interactive user interface.

## 🌟 Features

### Core Features
- **Modern Design**: Clean and professional layout with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Automatic theme switching with system preference support
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Optimized for search engines with proper metadata
- **PWA Support**: Installable as a Progressive Web App
- **Accessibility**: Built with accessibility in mind

### Technical Features
- **Image Optimization**: Lazy loading with blur placeholder
- **Component Lazy Loading**: Optimized bundle size
- **Social Media Integration**: Open Graph and Twitter Card support
- **Interactive UI**: Smooth animations and transitions
- **Type Safety**: Full TypeScript implementation
- **Modern Stack**: Latest web technologies and best practices

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Image Processing**: Sharp
- **Development Tools**: ESLint, Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/TheSpaghettiCode/Portfolio_Web.git
```

2. Navigate to the project directory:
```bash
cd Portfolio_Web
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

## 📁 Project Structure

```
├── app/
│   ├── components/     # Reusable UI components
│   │   ├── LazyImage/  # Optimized image component
│   │   ├── LazyLoad/   # Component lazy loading
│   │   └── ThemeToggle/# Theme switching
│   ├── sections/      # Page sections
│   │   ├── Hero/      # Landing section
│   │   ├── About/     # About section
│   │   ├── Projects/  # Projects showcase
│   │   └── Contact/   # Contact form
│   ├── config/        # Configuration files
│   └── hooks/         # Custom React hooks
├── public/            # Static assets
│   ├── icons/        # PWA and favicon icons
│   └── images/       # Image assets
└── scripts/          # Utility scripts
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

### SEO Configuration
Update `app/config/metadata.ts` with your information:
- Site title and description
- Social media handles
- Google site verification
- Open Graph images

## 🎨 Customization

### Theme Colors
The color scheme can be customized in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#00FF9D',
  dark: '#0A0A0A',
  'dark-light': '#1A1A1A',
  'dark-lighter': '#2A2A2A',
}
```

### Content
- Update project information in `app/sections/ProjectsSection.tsx`
- Modify skills in `app/sections/SkillsSection.tsx`
- Edit personal information in `app/sections/HeroSection.tsx`

## 📱 PWA Features

- Installable on mobile devices
- Offline support
- Custom app icons
- Splash screen
- Theme color support

## 🔍 SEO Features

- Meta tags optimization
- Open Graph support
- Twitter Cards
- Sitemap generation
- Robots.txt configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Andrea - [GitHub](https://github.com/TheSpaghettiCode)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/) 