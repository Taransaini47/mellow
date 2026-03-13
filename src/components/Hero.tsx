import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
          alt="The Mellow Restaurant Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          {/* Custom Logo */}
          <div className="mx-auto mb-6 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Mellow Logo" 
              className="h-24 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]" 
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl md:text-5xl font-serif font-light tracking-wide mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8"
        >
          <span>Café & Breakfast</span>
          <span className="hidden md:block text-accent/50">•</span>
          <span>Bar & Restaurant</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl font-light tracking-widest uppercase text-accent mb-8"
        >
          Southampton
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center gap-2 text-sm md:text-base text-white/90 mb-10 font-medium"
        >
          <MapPin size={18} className="text-accent" />
          <span>325 Shirley Rd, Shirley, Southampton SO15 3HW</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a 
            href="#menu" 
            className="px-8 py-3 bg-accent text-charcoal hover:bg-amber-400 transition-colors duration-300 font-bold tracking-widest uppercase text-sm rounded-full shadow-lg"
          >
            View Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
