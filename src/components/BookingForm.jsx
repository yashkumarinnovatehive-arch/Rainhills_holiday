import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { property } from '../data/propertyData';

const ROOM_TYPES = ['Family Room', 'Couple Room', 'Group Stay Room', 'Any Available'];

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    checkin: '',
    checkout: '',
    guests: '2',
    roomType: '',
    foodRequired: 'Yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `Hello Rainhills Holiday Home,%0A%0A` +
      `I would like to make a booking enquiry:%0A%0A` +
      `👤 Name: ${form.name}%0A` +
      `📱 Mobile: ${form.mobile}%0A` +
      `📅 Check-in: ${form.checkin || 'Not specified'}%0A` +
      `📅 Check-out: ${form.checkout || 'Not specified'}%0A` +
      `👥 Guests: ${form.guests}%0A` +
      `🏠 Room Type: ${form.roomType || 'Any'}%0A` +
      `🍽️ Food Required: ${form.foodRequired}%0A` +
      `📝 Message: ${form.message || 'None'}%0A%0A` +
      `Please confirm availability. Thank you!`;
    window.open(`https://wa.me/${property.whatsapp}?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const today = new Date().toISOString().split('T')[0];
  const inputCls =
    'w-full bg-white border border-[#e2d9cc] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 text-[#2d3748] text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder-[#9dada6]';
  const labelCls = 'block text-[#1a3a2e] text-sm font-medium mb-1.5';

  return (
    <section id="booking" className="py-16 md:py-20 lg:py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionHeading
            eyebrow="Book Your Stay"
            title="Reserve Your Perfect Escape"
            subtitle="Fill in the form below and we'll confirm availability directly on WhatsApp."
            centered
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg shadow-[#1a3a2e]/8 p-6 sm:p-8 border border-[#e2d9cc]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputCls}
                      placeholder="Your full name"
                    />
                  </div>
                  {/* Mobile */}
                  <div>
                    <label className={labelCls}>Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={form.mobile}
                      onChange={handleChange}
                      className={inputCls}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Check-in */}
                  <div>
                    <label className={labelCls}>Check-in Date *</label>
                    <input
                      type="date"
                      name="checkin"
                      required
                      min={today}
                      value={form.checkin}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                  {/* Check-out */}
                  <div>
                    <label className={labelCls}>Check-out Date *</label>
                    <input
                      type="date"
                      name="checkout"
                      required
                      min={form.checkin || today}
                      value={form.checkout}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Guests */}
                  <div>
                    <label className={labelCls}>Number of Guests *</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputCls}
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(n => (
                        <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                      ))}
                      <option value="10+">10+ Guests</option>
                    </select>
                  </div>
                  {/* Room Type */}
                  <div>
                    <label className={labelCls}>Room Type</label>
                    <select
                      name="roomType"
                      value={form.roomType}
                      onChange={handleChange}
                      className={inputCls}
                    >
                      <option value="">Select room type</option>
                      {ROOM_TYPES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                {/* Food Required */}
                <div>
                  <label className={labelCls}>Food Required?</label>
                  <div className="flex gap-3">
                    {['Yes', 'No', 'Maybe'].map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer text-sm transition-all ${
                          form.foodRequired === opt
                            ? 'border-[#c9a84c] bg-[#c9a84c]/10 text-[#1a3a2e] font-semibold'
                            : 'border-[#e2d9cc] text-[#4a5568] hover:border-[#c9a84c]/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="foodRequired"
                          value={opt}
                          checked={form.foodRequired === opt}
                          onChange={handleChange}
                          className="hidden"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelCls}>Special Request / Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder="Any special requests, dietary requirements, or questions..."
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1a3a2e] hover:bg-[#2d5a45] text-white font-bold text-base py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <FaWhatsapp size={18} />
                    Submit Booking Enquiry
                  </button>
                  <a
                    href={`tel:${property.contacts[0].number}`}
                    className="flex items-center justify-center gap-2 border-2 border-[#1a3a2e] text-[#1a3a2e] hover:bg-[#1a3a2e] hover:text-white font-semibold text-base py-3.5 px-5 rounded-xl transition-all"
                  >
                    <FaPhone size={15} />
                    Call Now
                  </a>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm font-medium"
                  >
                    <FaCheckCircle size={16} />
                    WhatsApp opened! Your enquiry is ready to send.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {/* Contact Card */}
            <div className="bg-[#1a3a2e] rounded-2xl p-6 text-white shadow-xl">
              <h3 className="font-heading text-xl font-bold text-white mb-4">
                Contact Directly
              </h3>
              <div className="space-y-3">
                {property.contacts.map((c) => (
                  <a
                    key={c.number}
                    href={`tel:${c.number}`}
                    className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center shrink-0">
                      <FaPhone size={13} className="text-[#0f2218]" />
                    </div>
                    <div>
                      <div className="text-[#c9a84c] text-xs font-medium">{c.label}</div>
                      <div className="text-white font-semibold text-sm">{c.display}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#e2d9cc] shadow-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt size={18} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[#1a3a2e] font-semibold text-sm mb-1">Location</h4>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{property.location.full}</p>
                  <a
                    href={property.location.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[#c9a84c] hover:text-[#a8893c] text-xs font-semibold underline underline-offset-2"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white border border-[#e2d9cc] shadow-sm rounded-2xl p-5">
              <h4 className="text-[#1a3a2e] font-heading text-base font-bold mb-3">
                Why Book Directly?
              </h4>
              <ul className="space-y-2">
                {[
                  'Best available price',
                  'No booking fees',
                  'Instant WhatsApp response',
                  'Flexible cancellation',
                  'Personalised assistance',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[#1a3a2e] text-sm">
                    <FaCheckCircle size={12} className="text-[#c9a84c] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Check-in Note */}
            <div className="p-4 bg-white rounded-xl border border-[#e2d9cc] text-sm text-[#4a5568]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#c9a84c]">ℹ️</span>
                <span className="font-semibold text-[#1a3a2e]">Check-in / Check-out</span>
              </div>
              <p>Standard check-in from <strong>12:00 PM</strong>. Early check-in subject to availability. Contact us for flexible timings.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
