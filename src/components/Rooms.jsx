import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaLeaf, FaUsers, FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { property, rooms } from '../data/propertyData';
import { images } from '../data/images';

const roomIconMap = {
  "family": <FaHome size={20} />,
  "couple": <FaLeaf size={20} />,
  "group": <FaUsers size={20} />
};

const roomImages = {
  family: images.rooms.family,
  couple: images.rooms.couple,
  group: images.rooms.family, // Using family image as fallback for group
};

const Rooms = () => {
  const [activeTab, setActiveTab] = useState(rooms[0].id);
  
  const activeRoom = rooms.find(r => r.id === activeTab) || rooms[0];

  const buildWhatsAppUrl = (roomName) => {
    const text = `Hello ${property.name}, I would like to book the ${roomName}. Please let me know the availability.`;
    return `https://wa.me/${property.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rooms" className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-olive-500/5 rounded-full filter blur-3xl -ml-20 -mb-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-3">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-olive-600 uppercase font-semibold">
            The Sanctuary
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-forest-950 font-normal leading-tight">
            Our Accommodations
          </h2>
          <p className="font-sans text-sm text-forest-900/60 max-w-md mx-auto">
            Thoughtfully planned spaces blending natural beauty with modern holiday comfort.
          </p>
          <div className="w-16 h-[1px] bg-olive-600/30 mx-auto mt-4" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b border-forest-800/10 mb-12 md:mb-16">
          <div className="flex space-x-2 md:space-x-8 overflow-x-auto no-scrollbar">
            {rooms.map(room => (
              <button
                key={room.id}
                onClick={() => setActiveTab(room.id)}
                className={`flex items-center space-x-2 pb-4 px-2 md:px-4 font-sans text-xs md:text-sm tracking-widest uppercase font-semibold transition-all duration-300 border-b-2 focus:outline-none whitespace-nowrap ${
                  activeTab === room.id
                    ? 'border-accent-gold text-forest-950'
                    : 'border-transparent text-forest-900/40 hover:text-forest-900/70'
                }`}
              >
                {roomIconMap[room.id]}
                <span>{room.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[500px]">
          
          <AnimatePresence mode="wait">
            {/* Left Info */}
            <motion.div
              key={`info-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 space-y-6 order-2 lg:order-1"
            >
              <div className="space-y-2">
                <span className="font-sans text-[10px] tracking-[0.3em] text-accent-gold uppercase font-bold bg-forest-950 text-cream-100 px-3 py-1 rounded-sm">
                  {activeRoom.guests}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-forest-950 font-normal mt-3">
                  {activeRoom.title}
                </h3>
              </div>
              
              <p className="font-sans text-sm md:text-base text-forest-900/80 leading-relaxed font-light">
                {activeRoom.description}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-forest-800/10">
                <p className="font-sans text-xs tracking-widest text-olive-500 uppercase font-semibold">
                  Included Features
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeRoom.amenities.map(amenity => (
                    <div key={amenity} className="flex items-start space-x-2">
                      <FaCheckCircle className="text-accent-gold mt-1 shrink-0" size={14} />
                      <span className="font-sans text-xs md:text-sm text-forest-900/70">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href={buildWhatsAppUrl(activeRoom.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-accent-gold hover:bg-accent-gold-hover text-forest-950 font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm shadow-md transition-all duration-300 border border-accent-gold hover:border-accent-gold-hover"
                >
                  <FaWhatsapp size={14} />
                  <span>Book {activeRoom.title}</span>
                </a>
                <a
                  href={`tel:${property.contacts[0].number}`}
                  className="flex items-center justify-center space-x-2 bg-transparent hover:bg-forest-900/5 text-forest-950 font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm border border-forest-950/20 hover:border-forest-950 transition-all duration-300"
                >
                  <FaPhone size={12} />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {/* Right Image */}
            <motion.div
              key={`img-${activeTab}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-accent-gold/40 pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-accent-gold/40 pointer-events-none" />
                
                <div className="overflow-hidden rounded-sm shadow-xl border border-forest-950/10">
                  <img
                    src={roomImages[activeRoom.id]}
                    alt={activeRoom.title}
                    className="w-full object-cover aspect-[4/3] transform transition-all duration-700 hover:scale-103"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Rooms;
