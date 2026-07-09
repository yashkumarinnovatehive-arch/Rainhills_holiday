import { images } from '../data/images';
import { property } from '../data/propertyData';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-100 relative overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-900/5 rounded-full filter blur-3xl -mr-20 -mt-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-olive-600 uppercase font-semibold">
                Welcome to {property.name}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest-950 font-normal leading-tight">
                Where Comfort Meets the Monsoon Wilderness
              </h2>
            </div>
            
            <p className="font-serif italic text-lg md:text-xl text-accent-gold-hover leading-relaxed">
              “Hidden in the green landscapes of Amboli, Rainhills is a peaceful nature retreat designed for families, friends, and monsoon lovers who want comfort, delicious food, and nature together.”
            </p>
            
            <div className="space-y-4 text-forest-900/80 font-sans text-sm md:text-base leading-relaxed font-light">
              <p>
                Amboli is famous for its misty, rain-soaked landscapes, cascading waterfalls, and rich biodiversity. Rainhills Holiday Home offers a front-row seat to this natural spectacle. Crafted as a warm farmstay retreat, our property combines the comfort of clean, spacious rooms with heartfelt Maharashtrian hospitality.
              </p>
              <p>
                Whether you want to witness the pouring rain from our wide outdoor spaces, enjoy authentic homely meals prepared with love, or gather with loved ones for laughter and stories, Rainhills is your perfect sanctuary.
              </p>
            </div>
            
            <div className="pt-6 border-t border-forest-800/10 flex items-center space-x-6">
              <div>
                <p className="font-serif text-lg text-forest-950 italic">The Rainhills Experience</p>
                <p className="font-sans text-xs tracking-widest text-olive-500 uppercase mt-1">
                  Nature Retreat • Homely Food • Family-friendly
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Offset Gold Border */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-accent-gold/40 rounded-sm pointer-events-none" />
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-sm shadow-2xl border border-forest-950/20 group">
              <img
                src={images.about.main}
                alt="Rainhills Holiday Home Exterior"
                className="w-full object-cover aspect-[4/5] transform transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-forest-950/70 backdrop-blur-md border border-cream-200/10 rounded-sm text-center">
                <span className="font-sans text-[10px] tracking-[0.3em] text-accent-gold uppercase font-semibold">
                  Monsoon Escape
                </span>
                <h3 className="font-serif text-xl text-cream-50 font-normal mt-1">
                  Peaceful & Serene
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
