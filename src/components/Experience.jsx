import { images } from '../data/images';

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-cream-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-forest-900/5 rounded-full filter blur-3xl -ml-20 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28 space-y-3">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-olive-600 uppercase font-semibold">
            Monsoon Story
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-forest-950 font-normal leading-tight">
            Sensory Experiences at Rainhills
          </h2>
          <p className="font-sans text-sm text-forest-900/60 max-w-md mx-auto">
            Slow down, connect with nature, and feel the soul of Amboli's wild rainy season.
          </p>
          <div className="w-16 h-[1px] bg-olive-600/30 mx-auto mt-4" />
        </div>

        {/* Chapters */}
        <div className="space-y-24 md:space-y-36">
          
          {/* Chapter 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-1">
              <div className="relative group overflow-hidden rounded-sm shadow-xl border border-forest-950/10">
                <img
                  src={images.hero}
                  alt="Misty Amboli nature scenery"
                  className="w-full object-cover aspect-[16/10] transform transition-transform duration-[1500ms] group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-forest-950/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4 lg:order-2 lg:pl-8">
              <span className="font-sans text-[10px] tracking-[0.4em] text-accent-gold-hover uppercase font-bold">Chapter 01</span>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-forest-950 font-normal leading-tight">
                Wake up to misty mornings
              </h3>
              <p className="font-sans text-sm md:text-base text-forest-900/70 leading-relaxed font-light">
                Open your eyes to a canvas of pure emerald. Watch the soft fog drift slowly past your window, wrapping the forest trees in a silent, magical white blanket. The air is crisp, cool, and loaded with the fresh scent of mountain rain.
              </p>
            </div>
          </div>

          {/* Chapter 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <div className="relative group overflow-hidden rounded-sm shadow-xl border border-forest-950/10">
                <img
                  src={images.food.main}
                  alt="Authentic Maharashtrian Food"
                  className="w-full object-cover aspect-[16/10] transform transition-transform duration-[1500ms] group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-forest-950/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4 lg:order-1 lg:pr-8">
              <span className="font-sans text-[10px] tracking-[0.4em] text-accent-gold-hover uppercase font-bold">Chapter 02</span>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-forest-950 font-normal leading-tight">
                Taste authentic local flavors
              </h3>
              <p className="font-sans text-sm md:text-base text-forest-900/70 leading-relaxed font-light">
                Enjoy a steaming cup of spiced Chai and indulge in freshly prepared, authentic Maharashtrian meals. Every dish is cooked with love and local spices in our restaurant, perfectly complementing the cool monsoon weather outside.
              </p>
            </div>
          </div>

          {/* Chapter 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-1">
              <div className="relative group overflow-hidden rounded-sm shadow-xl border border-forest-950/10">
                <img
                  src={images.garden.main}
                  alt="Relaxing on the lawn"
                  className="w-full object-cover aspect-[16/10] transform transition-transform duration-[1500ms] group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-forest-950/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4 lg:order-2 lg:pl-8">
              <span className="font-sans text-[10px] tracking-[0.4em] text-accent-gold-hover uppercase font-bold">Chapter 03</span>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-forest-950 font-normal leading-tight">
                Spend peaceful evenings
              </h3>
              <p className="font-sans text-sm md:text-base text-forest-900/70 leading-relaxed font-light">
                As dusk falls over Amboli, Rainhills transforms into a cozy sanctuary in the wild. Warm lighting glows through the windows, casting a golden hue over the private lawns and providing a secure, comfortable shelter against the dark, rainy night.
              </p>
            </div>
          </div>

          {/* Chapter 04 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <div className="relative group overflow-hidden rounded-sm shadow-xl border border-forest-950/10">
                <img
                  src={images.about.main}
                  alt="Amboli Waterfall Nature Trail"
                  className="w-full object-cover aspect-[16/10] transform transition-transform duration-[1500ms] group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-forest-950/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4 lg:order-1 lg:pr-8">
              <span className="font-sans text-[10px] tracking-[0.4em] text-accent-gold-hover uppercase font-bold">Chapter 04</span>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-forest-950 font-normal leading-tight">
                Explore Amboli’s rainy beauty
              </h3>
              <p className="font-sans text-sm md:text-base text-forest-900/70 leading-relaxed font-light">
                Amboli is a paradise for rain-seekers. Walk along wet pathways, witness raw, roaring waterfalls cascading down basalt cliffs, and walk through mossy trails. Then, return to the absolute privacy and comfort of your premium stay.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
