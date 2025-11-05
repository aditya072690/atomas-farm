// components/Navbar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import TopBanner from './TopBanner';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PRODUCTS', href: '/products' },
    { name: 'PROCESS', href: '/process' },
    { name: 'BENEFITS', href: '/benefits' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <div className="sticky top-0 z-50">
      <TopBanner />
      <header className="w-full bg-white shadow-sm">
      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Tagline */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
              <Image
                src="/atmos-farms-logo1.png" // **IMPORTANT**: Place your logo in the /public folder
                alt="Atmos Farms Logo"
                width={56}
                height={36}
                priority
              />
              {/* Brand + Tagline to the right of the logo (visible on mobile too) */}
              <div className="flex flex-col justify-center ml-3 leading-tight">
                <span className="text-[#2E3A6B] font-extrabold text-base sm:text-lg lg:text-2xl">Atmos Farms</span>
                <div className="flex items-center text-[#00A950] font-semibold text-[10px] sm:text-xs lg:text-sm">
                  <span>Clean</span>
                  <span className="mx-2 h-3 sm:h-4 w-px bg-[#00A950]"></span>
                  <span>Pure</span>
                  <span className="mx-2 h-3 sm:h-4 w-px bg-[#00A950]"></span>
                  <span>Fresh</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium tracking-wider transition-colors duration-300 pb-2
                      ${
                        pathname === link.href
                          ? 'text-[#2E3A6B] border-b-2 border-[#2E3A6B]'
                          : 'text-gray-600 hover:text-[#00A950]'
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2E3A6B] hover:text-[#00A950] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with sidebar positioning */}
      {isMenuOpen && (
        <>
          {/* Semi-transparent overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 top-[120px] bg-black/20 z-40 md:hidden"
          />
          
          {/* Sidebar Menu */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-[120px] w-64 h-[calc(100vh-120px)] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            id="mobile-menu"
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="px-4 pt-4 pb-6 space-y-2"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
                      ${
                        pathname === link.href
                          ? 'bg-[#F4F6F9] text-[#2E3A6B]'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </>
      )}
    </header>
    </div>
  );
};

export default Navbar;