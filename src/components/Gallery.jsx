import { images } from '../data/images';
import { FaExpandArrowsAlt } from 'react-icons/fa';

const Gallery = () => {
  const galleryItems = [
    { src: images.about.main, title: 'Lush Green Farm View', tag: 'Exterior', span: 'col-span-1 md:col-span-2 row-span-1' },
    { src: images.rooms.family, title: 'Spacious Family Room', tag: 'Interiors', span: 'col-span-1' },
    { src: images.garden.main, title: 'Private Lawn Area', tag: 'Outdoors', span: 'col-span-1' },
    { src: images.food.secondary, title: 'Authentic Veg Thali', tag: 'Food', span: 'col-span-1 md:col-span-2' },
    { src: images.rooms.couple, title: 'Cozy Couple Room', tag: 'Interiors', span: 'col-span-1' },
    { src: images.food.tertiary, title: 'Delicious Local Meals', tag: 'Food', span: 'col-span-1' },
    { src: images.hero, title: 'Rainy Amboli Landscape', tag: 'Nature', span: 'col-span-1 md:col-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-3">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-olive-600 uppercase font-semibold">
            Visual Story
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-forest-950 font-normal leading-tight">
            Capturing the Escape
          </h2>
          <p className="font-sans text-sm text-forest-900/60 max-w-md mx-auto">
            Take a visual tour of our homestay, the delicious food, and the lush nature surrounding it.
          </p>
          <div className="w-16 h-[1px] bg-olive-600/30 mx-auto mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-sm group cursor-pointer shadow-md hover:shadow-xl border border-forest-950/5 transition-all duration-500 ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-[1500ms] group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-forest-950/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                  <span className="font-sans text-[9px] tracking-[0.3em] text-accent-gold uppercase font-bold bg-forest-900/80 px-2 py-1 rounded-sm inline-block">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-cream-50 font-normal">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-accent-gold/80 text-xs font-sans tracking-wider pt-2">
                    <FaExpandArrowsAlt size={12} />
                    <span>Expand View</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
