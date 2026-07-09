import { motion } from 'framer-motion';
import { FaStar, FaGoogle, FaQuoteLeft } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import { reviews, property } from '../data/propertyData';

const StarRating = ({ count = 5 }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(count)].map((_, i) => (
      <FaStar key={i} size={13} className="text-[#c9a84c]" />
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12"
        >
          <div className="text-center lg:text-left">
            <SectionHeading
              eyebrow="Guest Reviews"
              title="What Our Guests Say"
              subtitle="Real experiences from real guests who stayed at Rainhills."
            />
          </div>

          {/* Rating Hero Card */}
          <div className="bg-[#1a3a2e] rounded-2xl p-6 text-center min-w-48 shrink-0 shadow-xl">
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <FaGoogle size={14} className="text-[#c9a84c]" />
              <span className="text-white/60 text-sm font-medium">Google Reviews</span>
            </div>
            <div className="font-heading text-[#c9a84c] text-6xl font-bold leading-none mb-2">
              {property.rating}
            </div>
            <StarRating />
            <div className="text-white font-semibold text-sm mt-2">Excellent</div>
            <div className="text-white/50 text-xs mt-1">{property.reviewCount}</div>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col p-5 bg-[#fdfaf5] border border-[#e2d9cc] hover:border-[#c9a84c]/40 rounded-2xl hover:shadow-lg hover:shadow-[#1a3a2e]/8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <FaQuoteLeft size={20} className="text-[#c9a84c]/30 mb-3" />

              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Review Text */}
              <p className="text-[#4a5568] text-sm leading-relaxed mt-3 flex-1">
                "{review.review}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#e2d9cc]">
                <div className="w-9 h-9 rounded-full bg-[#1a3a2e] flex items-center justify-center text-[#c9a84c] font-bold text-sm shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="text-[#1a3a2e] font-semibold text-sm">{review.name}</div>
                  <div className="text-[#9dada6] text-xs">{review.location} · {review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Review CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-[#718096] text-sm mb-4">
            Loved your stay? Share your experience with others.
          </p>
          <a
            href={`${property.location.googleMaps}&action=write-review`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#1a3a2e] text-[#1a3a2e] hover:bg-[#1a3a2e] hover:text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300"
          >
            <FaGoogle size={15} />
            Write a Google Review
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
