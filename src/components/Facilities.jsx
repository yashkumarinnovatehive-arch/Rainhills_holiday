import { facilities } from '../data/propertyData';
import { FaHome, FaCar, FaTint, FaWifi, FaUtensils, FaMapMarkedAlt } from 'react-icons/fa';

const iconMap = {
  "Non-AC Rooms": <FaHome size={28} />,
  "Parking Facility": <FaCar size={28} />,
  "24 Hours Water": <FaTint size={28} />,
  "24 Hours Wi-Fi": <FaWifi size={28} />,
  "Meals Available": <FaUtensils size={28} />,
  "Tourism Facilities": <FaMapMarkedAlt size={28} />
};

const Facilities = () => {
  return (
    <section id="facilities" className="py-24 md:py-32 bg-forest-900 relative overflow-hidden">
      {/* Background Gradients & Noise */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,73,48,0.3)_0%,transparent_70%)] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.02%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0.2 0 0 0 0 0.1 0 0 0 0.9 0%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-3">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-accent-gold uppercase font-semibold">
            Tailored Comfort
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream-50 font-normal leading-tight">
            Designed for Serenity & Splendor
          </h2>
          <div className="w-16 h-[1px] bg-accent-gold/40 mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((facility, i) => (
            <div 
              key={facility.title}
              className="group misty-glow gold-border-glow p-8 rounded-sm hover:-translate-y-1.5 flex flex-col justify-between min-h-[260px] duration-500"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-sm bg-forest-950/40 border border-forest-700/40 flex items-center justify-center text-accent-gold">
                  {iconMap[facility.title] || <FaHome size={28} />}
                </div>
                <h3 className="font-serif text-xl text-cream-100 font-medium tracking-wide">
                  {facility.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-mist-300 font-light leading-relaxed">
                  {facility.description}
                </p>
              </div>
              <div className="w-6 h-[1px] bg-accent-gold/20 mt-6 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;
