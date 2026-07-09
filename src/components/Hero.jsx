import { motion } from 'framer-motion';
import { FaCompass, FaImage, FaChevronDown } from 'react-icons/fa';
import { images } from '../data/images';
import { property } from '../data/propertyData';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Rainhills Holiday Home Landscape"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 luxury-overlay z-10" />
        
        {/* Noise Texture */}
        <div 
          className="absolute inset-0 opacity-15 z-15 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.015%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0.1 0 0 0 0 0.05 0 0 0 0.9 0%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mt-12 animate-fade-in">
        
        {/* Top Pill */}
        <div className="inline-flex items-center space-x-2 bg-forest-900/50 backdrop-blur-md border border-accent-gold/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
          <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-cream-50 uppercase font-medium">
            Exclusive Farmstay & Nature Retreat
          </p>
        </div>
        
        {/* Title */}
        <h1 className="font-serif text-5xl md:text-8xl tracking-[0.1em] text-cream-50 font-normal leading-tight mb-4 select-none">
          Rainhills
        </h1>
        
        <p className="font-serif italic text-xl md:text-3xl text-accent-gold font-light tracking-wide mb-3">
          Holiday Home & Restaurant in Amboli
        </p>
        
        <p className="font-sans text-sm md:text-base tracking-[0.2em] text-cream-200 uppercase font-light max-w-xl mx-auto mb-10 border-t border-b border-cream-200/10 py-3">
          Where privacy meets the wilderness.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#booking"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-accent-gold hover:bg-accent-gold-hover text-forest-950 font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm shadow-lg transition-all duration-300 hover:translate-y-[-2px] border border-accent-gold hover:border-accent-gold-hover"
          >
            <FaCompass size={14} />
            <span>Book Your Stay</span>
          </a>
          
          <a
            href="#gallery"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent hover:bg-cream-50/10 text-cream-100 hover:text-cream-50 font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm border border-cream-100/40 hover:border-cream-50 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <FaImage size={14} />
            <span>View Gallery</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="font-sans text-[9px] tracking-[0.3em] text-cream-100/60 uppercase mb-2">
          Discover More
        </span>
        <a
          href="#about"
          className="w-6 h-10 border border-cream-100/30 rounded-full flex items-start justify-center p-1 hover:border-accent-gold transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-bounce mt-1" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
