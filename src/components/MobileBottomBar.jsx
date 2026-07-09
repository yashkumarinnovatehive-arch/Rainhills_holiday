import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { property } from '../data/propertyData';

const MobileBottomBar = () => {
  const whatsappUrl = `https://wa.me/${property.whatsapp}?text=Hello%20Rainhills%20Holiday%20Home%2C%20I%20would%20like%20to%20make%20a%20booking%20enquiry.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 xl:hidden">
      <div className="bg-[#0f2218]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-area-bottom">
        <div className="flex gap-3 max-w-sm mx-auto">
          <a
            href={`tel:${property.contacts[0].number}`}
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm py-3 rounded-xl transition-all border border-white/20"
          >
            <FaPhone size={15} />
            Call Now
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e8c96a] text-[#0f2218] font-bold text-sm py-3 rounded-xl transition-all shadow-lg shadow-[#c9a84c]/30"
          >
            <FaWhatsapp size={15} />
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileBottomBar;
