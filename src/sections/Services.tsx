'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Services = () => {
  const router = useRouter();
  const products = [
    {
      icon: '🌸',
      title: 'Pure Kashmiri Saffron',
      description: 'Grown in carefully controlled conditions, our saffron is known for its rich aroma, deep color, and high crocin content.',
      features: ['Hand-harvested and hygienically processed', 'Maximum purity and potency', 'Rich aroma and deep color', 'High crocin content'],
      image: '/Image/Saffrom Image.jpg'
    },
    {
      icon: '🍄',
      title: 'Cordyceps Mushrooms',
      description: 'Highly valued for their adaptogenic and medicinal properties, grown using advanced cultivation techniques.',
      features: ['Adaptogenic properties', 'Medicinal benefits', 'Premium quality', 'Advanced cultivation techniques'],
      image: '/Image/Cordyceps .jpeg'
    },
    {
      icon: '🍄',
      title: 'Button Mushrooms',
      description: 'Classic, delicious, and a staple in kitchens worldwide, grown in our climate-controlled environment.',
      features: ['Classic and delicious', 'Kitchen staple worldwide', 'Nutrient-rich', 'Consistent quality'],
      image: '/Image/Mushroom buttom.jpg'
    },
    {
      icon: '🍄',
      title: 'Oyster Mushrooms',
      description: 'Nutrient-rich, versatile, and packed with antioxidants, perfect for various culinary applications.',
      features: ['Nutrient-rich and versatile', 'Packed with antioxidants', 'Versatile culinary uses', 'Premium quality'],
      image: '/Image/Mushroom Oyster.jpeg'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#2E3A6B] mb-6">
                    Our Products
                  </h2>
                  <div className="w-24 h-1 bg-[#00A950] mx-auto mb-8"></div>
                  <p className="text-xl text-[#333333] max-w-3xl mx-auto">
                    We specialize in cultivating high-value crops and functional foods in a clean, climate-controlled environment—delivering quality, purity, and nutritional excellence.
                  </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-0 border border-gray-100 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Product Badge */}
                <div className="absolute top-4 left-4 bg-[#2E3A6B] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  {product.icon} Premium
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2E3A6B] mb-2">
                  {product.title}
                </h3>

                <p className="text-[#333333] mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[#333333]">
                      <svg className="w-4 h-4 text-[#00A950] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
                  <div className="bg-gradient-to-r from-[#2E3A6B] to-[#1e2a4f] rounded-2xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-4">
                      Ready to Experience Fresh, Sustainable Produce?
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                      Contact us to learn more about our products and place your order for premium mushrooms and saffron.
                    </p>
                    <motion.button
                      onClick={() => router.push('/contact')}
                      className="bg-[#00A950] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008a42] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Order Now
                    </motion.button>
                  </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
