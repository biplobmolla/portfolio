# Biplob Molla - Portfolio Website

A modern, highly interactive, animated portfolio website built with Next.js 15, TypeScript, TailwindCSS v4, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Performance Optimized**: Lazy loading, code splitting, and optimized images
- **SEO Friendly**: Meta tags, structured data, and performance optimizations
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Mobile First**: Responsive design that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Custom Components
- **Forms**: React Hook Form + Zod validation
- **Email**: EmailJS integration
- **Icons**: Lucide React + React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/biplobmolla/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/portfolio.ts`:
- Personal details
- Skills and experience
- Projects and contributions
- Contact information

### Styling
- Modify colors and themes in `tailwind.config.ts`
- Update global styles in `src/app/globals.css`
- Customize component styles in individual component files

### Content
- Replace placeholder images in `public/images/`
- Update project data in `src/data/portfolio.ts`
- Modify section content in respective component files

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── animations/       # Animation components
│   ├── layout/          # Layout components
│   ├── sections/        # Page sections
│   └── ui/             # UI components
├── data/                # Static data
├── lib/                 # Utility functions
└── types/              # TypeScript types
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Images**: Next.js Image component with automatic optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: biplob.molla@email.com
- **LinkedIn**: [linkedin.com/in/biplobmolla](https://linkedin.com/in/biplobmolla)
- **GitHub**: [github.com/biplobmolla](https://github.com/biplobmolla)
- **Website**: [biplobmolla.dev](https://biplobmolla.dev)

---

Built with ❤️ by Biplob Molla