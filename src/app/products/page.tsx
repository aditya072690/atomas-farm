'use client';

import Navbar from '@/components/Navbar';
import Services from '@/sections/Services';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
