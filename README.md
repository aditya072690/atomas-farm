# Atmos Farms - Sustainable Agriculture Website

A modern, responsive website for Atmos Farms built with Next.js 15, TypeScript, and Tailwind CSS. This website showcases sustainable farming practices, premium mushrooms, and Kashmiri saffron produced using climate-controlled technology.

## 🌱 About Atmos Farms

Atmos Farms specializes in growing fresh, nutritious, and safe produce using sustainable, climate-controlled farming technology. We offer:
- **Premium Mushrooms**: Button Mushrooms, Oyster Mushrooms, and Cordyceps Mushrooms
- **Pure Kashmiri Saffron**: Hand-harvested and hygienically processed
- **Year-Round Production**: 365 days of fresh produce
- **Sustainable Practices**: 90% less water usage, zero pesticides

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth fade-in animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Components**: 
  - Sticky navigation with mobile sidebar menu
  - Top banner with contact information
  - Animated hero section with call-to-action buttons
  - Product showcase cards with hover effects
  - Contact form with validation
  - Google Maps integration
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Ready**: Complete meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 12.23
- **Form Handling**: React Hook Form with Yup validation
- **Icons**: Custom SVG icons
- **Fonts**: Inter & Playfair Display (Google Fonts)
- **React**: 19.1.0

## 📁 Project Structure

```
atomas-farm/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── benefits/
│   │   │   └── page.tsx          # Benefits page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── process/
│   │   │   └── page.tsx          # Process page
│   │   ├── products/
│   │   │   └── page.tsx          # Products page
│   │   ├── globals.css           # Global styles and Tailwind config
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── page.tsx              # Home page
│   │   ├── favicon.ico           # Favicon
│   │   ├── icon.png              # App icon
│   │   └── apple-icon.png        # Apple touch icon
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation component with mobile menu
│   │   ├── TopBanner.tsx         # Top contact banner
│   │   └── Footer.tsx            # Footer component
│   └── sections/
│       ├── Hero.tsx              # Hero section
│       ├── About.tsx             # About section
│       ├── Services.tsx           # Products/Services section
│       ├── Contact.tsx            # Contact form section
│       └── Testimonials.tsx       # Testimonials carousel
├── public/
│   ├── Image/                    # Product images
│   │   ├── Saffrom Image.jpg
│   │   ├── Cordyceps .jpeg
│   │   ├── Cordyceps 1.jpeg
│   │   ├── Mushroom buttom.jpg
│   │   └── Mushroom Oyster.jpeg
│   ├── atmos-farms-logo.png      # Main logo
│   ├── atmos-farms-logo1.png     # Alternative logo
│   └── Farm background.jpg       # Farm background image
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Design System

### Colors
- **Primary**: #2E3A6B (Dark Blue)
- **Primary Dark**: #1e2a4f
- **Secondary**: #00A950 (Green)
- **Accent**: #F4F6F9 (Light Gray)
- **Background**: #FFFFFF (White)
- **Foreground**: #333333 (Dark Gray)
- **Text Muted**: #6b7280 (Gray)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

### Spacing
- **Container**: max-w-7xl mx-auto px-6
- **Sections**: py-20
- **Components**: Consistent spacing scale

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "atomas farm"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Pages & Sections

### 1. Home Page (`/`)
- Hero section with company introduction
- About teaser section
- Products teaser section
- Process teaser section
- Benefits teaser section

### 2. About Page (`/about`)
- Detailed company information
- Mission and values
- Company story and approach

### 3. Products Page (`/products`)
- Product showcase with images
- Detailed product descriptions
- Features and benefits for each product
- Call-to-action buttons

### 4. Process Page (`/process`)
- Farming process explanation
- Climate-controlled environment details
- Technology and methods used
- Step-by-step process visualization

### 5. Benefits Page (`/benefits`)
- Environmental benefits
- Health benefits
- Economic benefits
- Sustainability advantages

### 6. Contact Page (`/contact`)
- Contact form with validation
- Contact information display
- Google Maps integration
- Business hours and location

## 🧩 Key Components

### Navigation (`Navbar.tsx`)
- Sticky header with logo and navigation
- Mobile sidebar menu (doesn't cover full screen)
- Smooth animations
- Active page highlighting

### Top Banner (`TopBanner.tsx`)
- Displays contact email and phone
- Sticky positioning with header
- Green gradient background

### Footer (`Footer.tsx`)
- Company information
- Quick navigation links
- Product links
- Contact details
- Social media links

## 🎨 Animation Features

- **Fade-in Only**: All animations use fade-in effects (no exit animations)
- **Scroll Animations**: Elements fade in as they enter viewport
- **Smooth Transitions**: Consistent animation timing across the site
- **Performance Optimized**: Animations don't affect page performance

## 📝 Content Management

Content is managed directly in component files. To update:
- **Products**: Edit `src/sections/Services.tsx`
- **Contact Info**: Edit `src/components/Footer.tsx` and `src/sections/Contact.tsx`
- **Company Info**: Edit `src/app/layout.tsx` for metadata
- **Images**: Replace files in `public/Image/` directory

## 🔧 Customization

### Adding New Products
1. Add product information to `src/sections/Services.tsx`
2. Add product image to `public/Image/` directory
3. Update product array with new product details

### Updating Contact Information
1. Update email in `src/components/TopBanner.tsx`
2. Update phone in `src/components/TopBanner.tsx`
3. Update address in `src/components/Footer.tsx`
4. Update contact form in `src/sections/Contact.tsx`

### Changing Colors
1. Edit `tailwind.config.ts` for theme colors
2. Update component classes for specific color changes

## 📈 Performance

- **Next.js Image Optimization**: All images optimized automatically
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Images and components load on demand
- **Bundle Size**: Optimized with tree shaking
- **SEO**: Meta tags and structured data for search engines

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from GitHub
- **Docker**: Use provided Dockerfile

## 🌍 Environment Variables

No environment variables are currently required for this project.

## 📞 Contact Information

**Atmos Farms**
- **Email**: info@atmosfarms.com
- **Phone**: +91 97257 75583
- **Address**: 130, 1st Floor, Phoneix Complex, Jetalpur Bridge, Near Suraj Plaza, Sarod, Sayajiganj, Vadodara, Gujarat 390005, India
- **Business Hours**: Monday to Saturday: 9:00 AM – 6:00 PM, Sunday: Closed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from custom SVG designs

---

**Built with ❤️ for sustainable agriculture and fresh produce**
