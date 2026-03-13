import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section className="py-12 bg-charcoal overflow-hidden">
      <div className="mb-8 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-cream font-light">A Taste of Mellow</h2>
        <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="flex overflow-hidden relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-6 px-3 min-w-max"
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="w-[280px] md:w-[400px] h-[350px] md:h-[450px] rounded-2xl overflow-hidden shrink-0 shadow-xl border border-white/10">
              <img 
                src={src} 
                alt="Food gallery" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
