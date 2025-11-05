'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2E3A6B] mb-6">
                Farming & Process
              </h1>
              <div className="w-24 h-1 bg-[#00A950] mx-auto mb-8"></div>
              <p className="text-xl text-[#333333] max-w-3xl mx-auto">
                At our facility, farming is not just about growing—it&apos;s about growing smarter, safer, and more sustainably.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg h-80 w-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-[#00A950] text-xl">🔬</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E3A6B] mb-4">Climate-Controlled Environment</h3>
                      <p className="text-[#333333] leading-relaxed">
                        Our crops are grown in fully monitored environments where temperature, humidity, light, and CO₂ levels are precisely regulated. This eliminates dependency on weather, minimizes disease risk, and creates perfect growing conditions all year long.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-lg h-80 w-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-[#00A950] text-xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E3A6B] mb-4">Hygiene-First Farming</h3>
                      <p className="text-[#333333] leading-relaxed mb-4">
                        Cleanliness is at the core of our process. We follow strict hygiene protocols including:
                      </p>
                      <ul className="space-y-2 text-[#333333]">
                        <li>• Sterilized growing media and equipment</li>
                        <li>• Controlled entry zones with sanitation checkpoints</li>
                        <li>• Contactless harvesting and packaging where possible</li>
                        <li>• Zero use of chemical pesticides or harmful additives</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-lg h-80 w-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-[#00A950] text-xl">⚙️</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E3A6B] mb-4">Advanced Cultivation Techniques</h3>
                      <p className="text-[#333333] leading-relaxed">
                        We use vertical farming systems, automation, and IoT-based monitoring to optimize growth cycles and resource use. Our mushroom and saffron production also benefits from lab-grade incubation and drying facilities that preserve medicinal properties and flavor.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg h-80 w-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-[#00A950] text-xl">💧</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E3A6B] mb-4">Sustainable Resource Use</h3>
                      <p className="text-[#333333] leading-relaxed">
                        Our process uses up to 90% less water than traditional farming and significantly reduces land use. Closed-loop nutrient systems and energy-efficient technologies reduce waste and promote environmental balance.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
