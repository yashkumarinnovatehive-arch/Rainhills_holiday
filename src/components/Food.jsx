import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaLeaf } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import ImageWithFallback from './ui/ImageWithFallback';
import { images } from '../data/images';
import { property } from '../data/propertyData';

const menuItems = [
  { time: 'Morning', label: 'Breakfast', items: ['Poha, Upma', 'Bread & Butter', 'Chai / Coffee', 'Fresh Fruits'] },
  { time: 'Afternoon', label: 'Lunch', items: ['Rice, Dal, Sabzi', 'Chapati / Bhakri', 'Salad & Pickle', 'Buttermilk'] },
  { time: 'Evening', label: 'Dinner', items: ['Full Maharashtrian Thali', 'Seasonal Vegetable', 'Chapati & Rice', 'Dessert on Request'] },
];

const Food = () => {
  const whatsappUrl = `https://wa.me/${property.whatsapp}?text=Hello%20Rainhills%2C%20I%20would%20like%20to%20know%20about%20food%20availability%20and%20meal%20timings%20during%20my%20stay.`;

  return (
    <section id="food" className="py-16 md:py-20 lg:py-24 bg-[#fdfaf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="Food & Dining"
              title="Homely Meals, Made with Love"
              subtitle="Experience the warmth of authentic Maharashtrian cuisine — fresh, simple, and full of local flavour."
            />

            <p className="text-[#4a5568] text-base leading-relaxed mb-6">
              At Rainhills, every meal is prepared with fresh, locally sourced ingredients.
              Our in-house kitchen serves traditional Maharashtrian food that feels just like
              home — comforting, wholesome, and delicious. No restaurant menus or fancy
              presentations — just genuine, hearty food that guests love.
            </p>

            {/* Menu Overview */}
            <div className="space-y-3 mb-8">
              {menuItems.map((meal) => (
                <div
                  key={meal.label}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 bg-white rounded-xl border border-[#e2d9cc] hover:border-[#D8A73A]/40 transition-colors"
                >
                  <div className="w-24 sm:w-28 shrink-0">
                    <div className="text-xs text-[#9dada6] font-medium uppercase tracking-wide">{meal.time}</div>
                    <div className="font-heading text-[#1a3a2e] text-base font-bold">{meal.label}</div>
                  </div>
                  <div className="pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l border-[#e2d9cc] sm:pl-6 w-full">
                    <div className="flex flex-wrap gap-2">
                      {meal.items.map((item) => (
                        <span key={item} className="text-[#4a5568] text-xs bg-[#f5f0e8] rounded-full px-2.5 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Food Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Freshly Prepared', 'Local Ingredients', 'Vegetarian Available', 'Family Style', 'On Request Basis'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-[#1a3a2e] text-xs font-medium bg-[#1a3a2e]/8 border border-[#1a3a2e]/15 rounded-full px-3 py-1.5">
                  <FaLeaf size={10} className="text-[#c9a84c]" />
                  {f}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e8c96a] text-[#0f2218] font-bold text-sm px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-[#c9a84c]/30 hover:-translate-y-0.5"
              >
                <FaWhatsapp size={16} />
                Ask About Food Availability
              </a>
              <a
                href={`tel:${property.contacts[0].number}`}
                className="flex items-center justify-center gap-2 border border-[#1a3a2e] text-[#1a3a2e] hover:bg-[#1a3a2e] hover:text-white font-semibold text-sm px-6 py-3 rounded-full transition-all"
              >
                <FaPhone size={14} />
                Call for Details
              </a>
            </div>
          </motion.div>

          {/* Right — Food Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="h-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#1a3a2e]/10">
              <ImageWithFallback
                src={images.food.main}
                alt="Homely Maharashtrian food at Rainhills"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-44 rounded-xl overflow-hidden shadow-lg ring-1 ring-[#1a3a2e]/10">
                <ImageWithFallback
                  src={images.food.secondary}
                  alt="Indian thali meal"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-44 rounded-xl overflow-hidden shadow-lg ring-1 ring-[#1a3a2e]/10 relative">
                <ImageWithFallback
                  src={images.food.tertiary}
                  alt="Fresh local food"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2218]/50 to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-semibold">Fresh & Homely</span>
                </div>
              </div>
            </div>
            {/* Quote */}
            <div className="p-4 bg-[#1a3a2e]/5 border border-[#1a3a2e]/10 rounded-xl">
              <p className="text-[#1a3a2e] text-sm italic font-accent leading-relaxed">
                "The food was just like home — simple, fresh, and absolutely delicious.
                We loved every meal at Rainhills."
              </p>
              <p className="text-[#9dada6] text-xs mt-2">— A Happy Guest, 2025</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Food;
