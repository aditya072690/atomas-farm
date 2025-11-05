import Navbar from '@/components/Navbar';
import About from '@/sections/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}
