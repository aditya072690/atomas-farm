'use client';

import { motion } from 'framer-motion';

const TopBanner = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-[#00A950] to-[#008a42] text-white py-2 px-4 text-center text-sm font-medium"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 flex-wrap">
        <a 
          href="mailto:info@atmosfarms.com"
          className="inline-flex items-center gap-2 hover:underline"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          info@atmosfarms.com
        </a>
        <a 
          href="tel:+919725775583"
          className="inline-flex items-center gap-2 hover:underline"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          +91 97257 75583
        </a>
      </div>
    </motion.div>
  );
};

export default TopBanner;
