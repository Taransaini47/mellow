import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCall() {
  return (
    <motion.a
      href="tel:+442382511858"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-accent text-charcoal p-4 rounded-full shadow-[0_8px_30px_rgba(234,179,8,0.4)] hover:shadow-[0_12px_40px_rgba(234,179,8,0.6)] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center group"
      aria-label="Call us"
    >
      <Phone size={28} className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-charcoal text-cream px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Call to Book
      </span>
    </motion.a>
  );
}
