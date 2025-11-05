import Navbar from '@/components/Navbar';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
