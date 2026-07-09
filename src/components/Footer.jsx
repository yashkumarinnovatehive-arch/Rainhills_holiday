import { FaWhatsapp, FaPhone, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { property } from '../data/propertyData';

const Footer = () => {
  return (
    <footer className="bg-forest-950 text-cream-50 pt-20 pb-10 border-t border-forest-800 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-accent-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <a href="#home" className="flex flex-col inline-block mb-2">
              <span className="font-serif text-2xl tracking-[0.2em] text-cream-50 font-medium leading-none">
                RAINHILLS
              </span>
              <span className="font-sans text-[9px] tracking-[0.4em] text-accent-gold uppercase mt-1">
                Holiday Home
              </span>
            </a>
            <p className="font-sans text-sm text-forest-300 font-light leading-relaxed">
              A peaceful nature retreat in the heart of Western Ghats. Experience comfort, delicious food, and the magic of Amboli's monsoon.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs tracking-widest text-accent-gold uppercase font-semibold">
              Explore
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Rooms', 'Gallery', 'Experience'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="font-sans text-sm text-cream-100/70 hover:text-accent-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs tracking-widest text-accent-gold uppercase font-semibold">
              Contact
            </h4>
            <ul className="space-y-3">
              {property.contacts.map((c) => (
                <li key={c.number}>
                  <a 
                    href={`tel:${c.number}`} 
                    className="flex items-center space-x-3 text-sm text-cream-100/70 hover:text-accent-gold transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-full border border-forest-700 flex items-center justify-center group-hover:border-accent-gold/50 transition-colors">
                      <FaPhone size={10} />
                    </span>
                    <span>{c.display}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs tracking-widest text-accent-gold uppercase font-semibold">
              Location
            </h4>
            <a 
              href={property.location.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-3 text-sm text-cream-100/70 hover:text-accent-gold transition-colors group"
            >
              <span className="w-8 h-8 rounded-full border border-forest-700 flex items-center justify-center group-hover:border-accent-gold/50 transition-colors shrink-0">
                <FaMapMarkerAlt size={12} />
              </span>
              <span className="leading-relaxed pt-1">
                {property.location.full}
              </span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-forest-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-forest-400">
            © {new Date().getFullYear()} {property.fullName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href={property.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-400 hover:text-accent-gold transition-colors"
              title="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a 
              href={`https://wa.me/${property.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-400 hover:text-accent-gold transition-colors"
              title="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
