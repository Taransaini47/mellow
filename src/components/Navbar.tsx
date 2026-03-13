import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between w-[90%] max-w-3xl ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-charcoal border border-charcoal/5' 
          : 'bg-transparent text-white'
      }`}
    >
      <a href="#" className="shrink-0 flex items-center">
        <img 
          src="/logo.png" 
          alt="Mellow Logo" 
          className={`h-8 md:h-10 object-contain transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : 'saturate-[2.5] brightness-75 contrast-125 drop-shadow-[0_1px_3px_rgba(161,98,7,0.4)]'}`} 
        />
      </a>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-light tracking-widest uppercase">
        <a href="#info" className="hover:opacity-60 transition-opacity">Info</a>
        <a href="#menu" className="hover:opacity-60 transition-opacity">Menu</a>
        <a href="#reviews" className="hover:opacity-60 transition-opacity">Reviews</a>
      </div>

      {/* Mobile Links */}
      <div className="flex md:hidden items-center gap-4 text-xs font-light tracking-widest uppercase">
        <a href="#menu" className="hover:opacity-60 transition-opacity">Menu</a>
      </div>

      <a 
        href="tel:+442382511858" 
        className={`hidden md:block px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors shadow-sm ${
          isScrolled 
            ? 'bg-accent text-charcoal hover:bg-amber-400' 
            : 'bg-accent text-charcoal hover:bg-amber-400'
        }`}
      >
        Call to Book
      </a>
    </motion.nav>
  );
}
