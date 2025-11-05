'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function BenefitsPage() {
  const benefits = [
    {
      icon: '🌱',
      title: 'Year-Round Freshness',
      description: 'Our climate-controlled environments allow us to grow fresh produce 365 days a year, unaffected by weather or seasonal changes.',
      details: 'Traditional farming is limited by seasons, weather conditions, and natural cycles. Our controlled environment technology eliminates these limitations, ensuring consistent, high-quality produce year-round.'
    },
    {
      icon: '🛡️',
      title: 'Enhanced Food Safety & Hygiene',
      description: 'We follow strict cleanliness protocols and grow in sterile conditions, reducing the risk of contamination and ensuring safe, healthy food for consumers.',
      details: 'Our sterile growing environment, combined with rigorous hygiene protocols, ensures that our products are free from harmful bacteria, pesticides, and contaminants that can be found in traditional farming.'
    },
    {
      icon: '⚙️',
      title: 'Precision-Grown with Technology',
      description: 'From automated climate control to real-time monitoring, our use of advanced technology guarantees optimal plant health, faster growth, and higher yields.',
      details: 'Advanced sensors, automated systems, and AI-driven monitoring ensure that every plant receives exactly what it needs for optimal growth, resulting in superior quality and consistency.'
    },
    {
      icon: '💧',
      title: 'Water-Efficient Farming',
      description: 'We use up to 90% less water than traditional farming methods, helping to conserve precious resources and protect the environment.',
      details: 'Our closed-loop water system recycles and reuses water efficiently, while precise irrigation systems deliver exactly the right amount of water to each plant, eliminating waste.'
    },
    {
      icon: '🚫',
      title: 'Pesticide-Free Produce',
      description: 'Our enclosed, controlled environments eliminate the need for harmful pesticides, resulting in cleaner, more natural food.',
      details: 'By controlling the growing environment, we prevent pest infestations naturally, eliminating the need for chemical pesticides and ensuring truly organic, clean produce.'
    },
    {
      icon: '🌍',
      title: 'Sustainable & Scalable',
      description: 'Our method reduces land usage, carbon footprint, and food waste—supporting a more sustainable food system for the future.',
      details: 'Vertical farming uses significantly less land than traditional agriculture, while our efficient systems reduce energy consumption and carbon emissions, making it a truly sustainable solution for the future.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20 bg-[#F4F6F9]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2E3A6B] mb-6">
                Benefits of Our Farming Approach
              </h1>
              <div className="w-24 h-1 bg-[#00A950] mx-auto mb-8"></div>
              <p className="text-xl text-[#333333] max-w-3xl mx-auto">
                Discover how our innovative methods bring better food and a better future for everyone.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#00A950] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">{benefit.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2E3A6B] mb-3">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#333333] leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {benefit.details}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-[#2E3A6B] to-[#1e2a4f] rounded-2xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Experience the Future of Farming?
                </h3>
                <p className="text-xl mb-8 opacity-90">
                  Join us in revolutionizing agriculture with sustainable, technology-driven farming that benefits everyone.
                </p>
                <a 
                  href="/contact" 
                  className="bg-[#00A950] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008a42] transition-colors duration-300 inline-block"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
