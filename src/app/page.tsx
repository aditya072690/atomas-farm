'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-[#2E3A6B]" />,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* About teaser between hero and footer */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: image */}
              <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/wmremove-transformed (1).jpeg"
                  alt="About Atmos Farms"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Right: content */}
              <div>
                <h3 className="text-3xl font-bold text-[#2E3A6B] mb-3">About Atmos Farms</h3>
                <p className="text-[#333333] leading-relaxed mb-4">
                  We grow fresh, nutritious, and safe produce using sustainable, climate‑controlled
                  farming technology. Year‑round freshness, 90% less water usage, and zero pesticides
                  ensure consistently clean quality.
                </p>
                <ul className="space-y-1.5 text-[#333333] mb-6">
                  <li>• Pesticide‑free, climate‑controlled environment</li>
                  <li>• Closed‑loop, water‑efficient systems</li>
                  <li>• Premium mushrooms and pure Kashmiri saffron</li>
                </ul>
                <Link href="/about" className="inline-block bg-[#00A950] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#008a42] transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Products teaser section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F4F6F9]"
        >
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: content */}
              <div>
                <h3 className="text-3xl font-bold text-[#2E3A6B] mb-3">Our Premium Products</h3>
                <p className="text-[#333333] leading-relaxed mb-6">
                  We specialize in cultivating high-value crops and functional foods in a clean, 
                  climate-controlled environment—delivering quality, purity, and nutritional excellence.
                </p>
                
                {/* Product descriptions */}
                <div className="space-y-4">
                  {/* Premium Mushrooms */}
                  <div className="flex items-start">
                    <span className="text-[#00A950] text-xl mr-3 mt-1">🍄</span>
                    <div>
                      <h4 className="text-lg font-semibold text-[#333333] mb-1">Premium Mushrooms:</h4>
                      <p className="text-[#333333] text-sm">
                        We grow a variety of gourmet and medicinal mushrooms with advanced cultivation techniques. 
                        Rich in antioxidants and nutrients, including Button Mushrooms, Cordyceps Militaris, 
                        and Oyster Mushrooms grown in climate-controlled environments.
                      </p>
                    </div>
                  </div>

                  {/* Pure Kashmiri Saffron */}
                  <div className="flex items-start">
                    <span className="text-[#00A950] text-xl mr-3 mt-1">🌸</span>
                    <div>
                      <h4 className="text-lg font-semibold text-[#333333] mb-1">Pure Kashmiri Saffron:</h4>
                      <p className="text-[#333333] text-sm">
                        Hand-harvested and hygienically processed to retain maximum purity and potency. 
                        Known for its rich aroma and deep color with high crocin content. 
                        Grown in carefully controlled conditions for premium quality.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Learn Our Products Button */}
                <div className="mt-6">
                  <Link href="/products" className="inline-block bg-[#00A950] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#008a42] transition-colors">
                    Learn Our Products
                  </Link>
                </div>
              </div>

              {/* Right: Large image */}
              <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Image/Saffrom Image.jpg"
                  alt="Atmos Farms Premium Products"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Process teaser section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Title and intro */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#2E3A6B] mb-3">Our Farming Process</h3>
              <p className="text-[#333333] leading-relaxed max-w-3xl mx-auto">
                We combine traditional agricultural wisdom with the latest innovations in 
                climate-controlled farming to ensure consistent quality, year-round production, 
                and maximum food safety.
              </p>
            </div>

            {/* Main content with centered images */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              {/* Left content */}
              <div className="flex-1 max-w-md">
                <div className="space-y-6">
                  {/* Climate-Controlled Environment */}
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-2">
                      <span className="text-[#00A950] text-2xl mr-2">🔬</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2E3A6B] mb-2">Climate-Controlled Environment</h4>
                    <p className="text-[#333333] text-sm leading-relaxed">
                      Precise regulation of temperature, humidity, light, and CO₂ levels for optimal growing conditions.
                    </p>
                  </div>

                  {/* Hygiene-First Farming */}
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-2">
                      <span className="text-[#00A950] text-2xl mr-2">🛡️</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2E3A6B] mb-2">Hygiene-First Farming</h4>
                    <p className="text-[#333333] text-sm leading-relaxed">
                      Strict cleanliness protocols, sterilized equipment, and zero chemical pesticides for contamination-free crops.
                    </p>
                  </div>
                </div>
              </div>

              {/* Center images */}
              <div className="flex items-center space-x-6">
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/Image/Saffrom Image.jpg"
                    alt="Climate-Controlled Farming"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 192px, 192px"
                  />
                </div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/Image/Mushroom buttom.jpg"
                    alt="Advanced Technology"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 192px, 192px"
                  />
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 max-w-md">
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <span className="text-[#00A950] text-2xl mr-2">⚙️</span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#2E3A6B] mb-2">Advanced Technology</h4>
                  <p className="text-[#333333] text-sm leading-relaxed">
                    Vertical farming systems, automation, and IoT-based monitoring for optimal growth cycles.
                  </p>
                </div>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="text-center mt-12">
              <Link href="/process" className="inline-block bg-[#00A950] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#008a42] transition-colors">
                Learn About Our Process
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Benefits teaser section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F4F6F9]"
        >
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: content */}
              <div>
                <h3 className="text-3xl font-bold text-[#2E3A6B] mb-3">Benefits of Our Approach</h3>
                <p className="text-[#333333] leading-relaxed mb-6">
                  Discover how our innovative farming methods bring better food and a better future 
                  for consumers, communities, and the environment.
                </p>
                
                {/* Benefit Cards */}
                <div className="space-y-4 mb-8">
                  {/* Card 1 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl flex-shrink-0">🌱</span>
                      <div>
                        <h4 className="text-lg font-semibold text-[#2E3A6B] mb-1">Year-Round Freshness</h4>
                        <p className="text-[#333333] text-sm leading-relaxed">
                          Climate-controlled environments allow us to grow fresh produce 365 days a year, 
                          unaffected by weather or seasonal changes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl flex-shrink-0">💧</span>
                      <div>
                        <h4 className="text-lg font-semibold text-[#2E3A6B] mb-1">Water-Efficient</h4>
                        <p className="text-[#333333] text-sm leading-relaxed">
                          Up to 90% less water usage than traditional farming methods, helping to conserve 
                          precious resources and protect the environment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl flex-shrink-0">🚫</span>
                      <div>
                        <h4 className="text-lg font-semibold text-[#2E3A6B] mb-1">Pesticide-Free</h4>
                        <p className="text-[#333333] text-sm leading-relaxed">
                          Enclosed, controlled environments eliminate the need for harmful pesticides, 
                          resulting in cleaner, more natural food.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/benefits" className="inline-block bg-[#00A950] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#008a42] transition-colors">
                  Discover All Benefits
                </Link>
              </div>

              {/* Right: Circular Images */}
              <div className="flex justify-center items-center space-x-8">
                {/* First circular image */}
                <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/wmremove-transformed.jpeg"
                    alt="Vertical Farming"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 224px, 224px"
                  />
                </div>
                
                {/* Second circular image */}
                <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/Image/Mushroom Oyster.jpeg"
                    alt="Fresh Produce"
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 224px, 224px"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
