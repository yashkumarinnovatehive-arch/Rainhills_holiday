import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { property } from '../data/propertyData';

const BookingBar = () => {
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    guests: '2 Guests',
    roomType: 'Any Room',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `Hello Rainhills Holiday Home,%0A%0AI want to enquire about room availability.%0A%0A` +
      `📅 Check-in: ${form.checkin || 'Not specified'}%0A` +
      `📅 Check-out: ${form.checkout || 'Not specified'}%0A` +
      `👥 Guests: ${form.guests}%0A` +
      `🏠 Room Type: ${form.roomType || 'Any'}%0A%0A` +
      `Please let me know the availability and best price.%0AThank you!`;
    window.open(`https://wa.me/${property.whatsapp}?text=${msg}`, '_blank');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-16 bg-transparent px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#122c22] rounded-2xl shadow-xl shadow-black/20 p-5 sm:p-6 md:p-8 border border-white/5">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-heading text-white text-2xl sm:text-3xl font-bold tracking-wide">
              Quick Enquiry
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Fill in your details and we'll respond instantly on WhatsApp
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-3 py-1.5 shrink-0">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="text-[#d4af37] text-xs font-semibold tracking-wide uppercase">
              Usually replies instantly
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            
            {/* Check-in */}
            <div className="col-span-1">
              <label className="text-white/60 text-xs font-medium mb-1.5 flex items-center gap-1.5">
                <FaCalendarAlt size={11} className="mb-0.5" /> Check-in
              </label>
              <input
                type="date"
                name="checkin"
                min={today}
                value={form.checkin}
                onChange={handleChange}
                className="w-full bg-[#0a1913] border border-white/10 focus:border-[#d4af37] text-white text-sm rounded-lg px-3 py-2.5 outline-none transition-colors cursor-pointer"
                style={{ colorScheme: 'dark' }}
              />
            </div>

            {/* Check-out */}
            <div className="col-span-1">
              <label className="text-white/60 text-xs font-medium mb-1.5 flex items-center gap-1.5">
                <FaCalendarAlt size={11} className="mb-0.5" /> Check-out
              </label>
              <input
                type="date"
                name="checkout"
                min={form.checkin || today}
                value={form.checkout}
                onChange={handleChange}
                className="w-full bg-[#0a1913] border border-white/10 focus:border-[#d4af37] text-white text-sm rounded-lg px-3 py-2.5 outline-none transition-colors cursor-pointer"
                style={{ colorScheme: 'dark' }}
              />
            </div>

            {/* Guests */}
            <div className="col-span-1">
              <label className="text-white/60 text-xs font-medium mb-1.5 flex items-center gap-1.5">
                <FaUsers size={12} className="mb-0.5" /> Guests
              </label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full bg-[#0a1913] border border-white/10 focus:border-[#d4af37] text-white text-sm rounded-lg px-3 py-2.5 outline-none transition-colors cursor-pointer appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={`${n} Guests`}>{n} Guest{n > 1 ? 's' : ''}</option>
                ))}
                <option value="10+ Guests">10+ Guests</option>
              </select>
            </div>

            {/* Room Type */}
            <div className="col-span-1">
              <label className="text-white/60 text-xs font-medium mb-1.5 flex items-center gap-1.5">
                Room Type
              </label>
              <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className="w-full bg-[#0a1913] border border-white/10 focus:border-[#d4af37] text-white text-sm rounded-lg px-3 py-2.5 outline-none transition-colors cursor-pointer appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
              >
                <option value="Any Room">Any Room</option>
                <option value="Family Room">Family Room</option>
                <option value="Couple Room">Couple Room</option>
                <option value="Group Stay">Group Stay</option>
              </select>
            </div>

            {/* Submit */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#e8c96a] text-black font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <FaWhatsapp size={16} />
                Send Enquiry
              </button>
            </div>
          </div>
        </form>

        {/* Footer Contacts */}
        <div className="mt-5 flex items-center flex-wrap gap-3">
          <span className="text-white/50 text-xs mr-1">Or contact directly:</span>
          {property.contacts.map((c) => (
            <a
              key={c.number}
              href={`tel:${c.number}`}
              className="flex items-center gap-1.5 text-white/70 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-3 py-1 text-[11px] font-medium transition-all bg-white/5 hover:bg-white/10"
            >
              <FaPhone size={9} />
              {c.display}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BookingBar;
