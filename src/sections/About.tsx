'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const benefits = [
    {
      icon: '🌱',
      title: 'Year-Round Freshness',
      description: 'Our climate-controlled environments allow us to grow fresh produce 365 days a year, unaffected by weather or seasonal changes.'
    },
    {
      icon: '🛡️',
      title: 'Enhanced Food Safety & Hygiene',
      description: 'We follow strict cleanliness protocols and grow in sterile conditions, reducing the risk of contamination and ensuring safe, healthy food for consumers.'
    },
    {
      icon: '⚙️',
      title: 'Precision-Grown with Technology',
      description: 'From automated climate control to real-time monitoring, our use of advanced technology guarantees optimal plant health, faster growth, and higher yields.'
    },
    {
      icon: '💧',
      title: 'Water-Efficient Farming',
      description: 'We use up to 90% less water than traditional farming methods, helping to conserve precious resources and protect the environment.'
    },
    {
      icon: '🚫',
      title: 'Pesticide-Free Produce',
      description: 'Our enclosed, controlled environments eliminate the need for harmful pesticides, resulting in cleaner, more natural food.'
    },
    {
      icon: '🌍',
      title: 'Sustainable & Scalable',
      description: 'Our method reduces land usage, carbon footprint, and food waste—supporting a more sustainable food system for the future.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - Titles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2E3A6B] mb-6">
            About Atmos Farms
          </h2>
          <div className="w-24 h-1 bg-[#00A950] mx-auto mb-8"></div>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto mb-12">
            Redefining modern agriculture with sustainable, climate-controlled farming technology
          </p>
          
          {/* Mission Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Mission Content */}
            <div className="text-left">
              <h3 className="text-3xl font-bold text-[#2E3A6B] mb-6">Our Mission</h3>
              <div>
                <p className="text-lg text-[#333333] mb-6 leading-relaxed">
                  At the heart of our work is a simple yet powerful mission: To grow fresh,
                  nutritious, and safe produce using sustainable, climate-controlled farming
                  technology. We are redefining modern agriculture by cultivating crops in a
                  controlled environment that ensures optimal growing conditions year-round—regardless of external weather or seasonal changes.
                </p>
                <p className="text-lg text-[#333333] leading-relaxed">
                  Through the integration of cutting-edge technologies, automation, and stringent
                  hygiene protocols, we produce food that is not only clean and consistent but
                  also resource-efficient and environmentally responsible.
                </p>
              </div>
            </div>

            {/* Right - Mission Image */}
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Image/Mushroom buttom.jpg"
                alt="Atmos Farms Mission"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Content - Single Column Layout */}
        <div className="space-y-16">
          {/* Benefits Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-[#2E3A6B] mb-2">Our commitment is to:</h4>
              <h5 className="text-xl font-semibold text-[#2E3A6B]">Benefits of Our Farming Approach</h5>
            </div>

            {/* Benefits Cards - 2x3 Grid (Column-wise) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                    <div>
                      <h5 className="text-lg font-semibold text-[#2E3A6B] mb-2">
                        {benefit.title}
                      </h5>
                      <p className="text-[#333333] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Our Commitment & Values */}
            <div className="mt-8 text-center">
              <h4 className="text-2xl font-bold text-[#2E3A6B] mb-4">Our Commitment & Values</h4>
              <p className="text-lg text-[#333333] mb-6 leading-relaxed">
                By combining innovation with care, we are building a smarter way to farm—one that puts people, the planet, and future generations first.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div className="flex items-start">
                  <span className="text-[#00A950] mr-2">•</span>
                  <span className="text-lg text-[#333333]">Deliver high-quality, pesticide-free produce</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#00A950] mr-2">•</span>
                  <span className="text-lg text-[#333333]">Minimize environmental impact through water and energy efficiency</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#00A950] mr-2">•</span>
                  <span className="text-lg text-[#333333]">Ensure food safety with strict hygiene standards</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#00A950] mr-2">•</span>
                  <span className="text-lg text-[#333333]">Support a future of secure and sustainable food systems</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
