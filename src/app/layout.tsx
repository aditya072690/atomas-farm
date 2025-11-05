import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atmos Farms | Sustainable Agriculture & Premium Mushrooms",
  description: "Growing fresh, nutritious, and safe produce using sustainable, climate-controlled farming technology. Premium mushrooms and Kashmiri saffron available year-round.",
  keywords: "mushrooms, saffron, sustainable farming, climate-controlled agriculture, pesticide-free, organic farming, Atmos Farms",
  authors: [{ name: "Atmos Farms" }],
  icons: {
    icon: '/atmos-farms-logo.png',
    shortcut: '/atmos-farms-logo.png',
    apple: '/atmos-farms-logo.png',
  },
  openGraph: {
    title: "Atmos Farms | Sustainable Agriculture & Premium Mushrooms",
    description: "Growing fresh, nutritious, and safe produce using sustainable, climate-controlled farming technology. Premium mushrooms and Kashmiri saffron available year-round.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atmos Farms | Sustainable Agriculture & Premium Mushrooms",
    description: "Growing fresh, nutritious, and safe produce using sustainable, climate-controlled farming technology. Premium mushrooms and Kashmiri saffron available year-round.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
