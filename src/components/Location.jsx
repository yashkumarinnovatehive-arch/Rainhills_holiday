import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdDirections } from 'react-icons/md';
import SectionHeading from './ui/SectionHeading';
import { property, nearbyAttractions } from '../data/propertyData';

const Location = () => {
  return (
    <section id="location" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionHeading
            eyebrow="Find Us"
            title="Located in the Heart of Amboli"
            subtitle="Nestled in the misty hills of Western Ghats, Rainhills is your perfect nature retreat."
            centered
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Map — takes 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#1a3a2e]/10 h-72 sm:h-96 lg:h-full min-h-72">
              <iframe
                title="Rainhills Holiday Home Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15262.4!2d74.0!3d15.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc01c9ad2e95b13%3A0x1f3bf0e1f9be5498!2sAmboli%2C%20Maharashtra%20416510!5e0!3m2!1sen!2sin!4v1720500000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Info — takes 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Address Card */}
            <div className="p-5 bg-[#1a3a2e] rounded-2xl text-white shadow-xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt size={14} className="text-[#0f2218]" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-base font-bold mb-1">Our Address</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {property.location.full}
                  </p>
                </div>
              </div>
              <a
                href={property.location.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#c9a84c] hover:bg-[#e8c96a] text-[#0f2218] font-bold text-sm py-3 rounded-xl transition-all hover:shadow-lg"
              >
                <MdDirections size={18} />
                Get Directions on Google Maps
              </a>
            </div>

            {/* Contact Numbers */}
            <div className="p-5 bg-[#fdfaf5] border border-[#e2d9cc] rounded-2xl">
              <h4 className="text-[#1a3a2e] font-semibold text-sm mb-3">Contact Numbers</h4>
              <div className="space-y-2">
                {property.contacts.map((c) => (
                  <a
                    key={c.number}
                    href={`tel:${c.number}`}
                    className="flex items-center gap-3 p-3 bg-white border border-[#e2d9cc] hover:border-[#c9a84c]/50 rounded-xl transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#1a3a2e] flex items-center justify-center shrink-0">
                      <FaPhone size={11} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <div className="text-[#9dada6] text-xs">{c.label}</div>
                      <div className="text-[#1a3a2e] font-bold text-sm group-hover:text-[#c9a84c] transition-colors">
                        {c.display}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="p-5 bg-[#fdfaf5] border border-[#e2d9cc] rounded-2xl">
              <h4 className="text-[#1a3a2e] font-semibold text-sm mb-3">
                🗺️ Nearby Attractions
              </h4>
              <div className="flex flex-wrap gap-2">
                {nearbyAttractions.map((place) => (
                  <span
                    key={place}
                    className="text-xs text-[#1a3a2e] bg-[#1a3a2e]/8 border border-[#1a3a2e]/15 rounded-full px-3 py-1"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>

            {/* How to Reach */}
            <div className="p-4 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-xl text-sm text-[#1a3a2e]">
              <div className="font-semibold mb-1">🚗 How to Reach</div>
              <ul className="space-y-1 text-[#4a5568] text-xs">
                <li>• From Kolhapur: ~65 km via NH 66</li>
                <li>• From Goa: ~90 km via NH 66</li>
                <li>• Nearest railway: Sawantwadi / Kolhapur</li>
                <li>• Nearest airport: Dabolim Goa (~80 km)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
