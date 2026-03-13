import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-cream px-6 md:px-12 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Find Us</h2>
          <p className="text-charcoal/60 font-light max-w-xl mx-auto">
            Join us at our Southampton location for an unforgettable dining experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-1 bg-white p-8 rounded-3xl shadow-sm border border-charcoal/5"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-amber-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Address</h3>
                <p className="text-charcoal/70 font-light">325 Shirley Rd, Shirley<br/>Southampton SO15 3HW<br/>United Kingdom</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-amber-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Contact</h3>
                <a href="tel:+442382511858" className="text-charcoal/70 font-light hover:text-accent transition-colors">
                  +44 23 8251 1858
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-accent/10 p-5 rounded-2xl border border-accent/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-bl-full -z-10"></div>
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 text-charcoal shadow-md">
                <Clock size={24} />
              </div>
              <div className="w-full">
                <h3 className="font-serif text-xl mb-3 font-bold text-charcoal">Opening Hours</h3>
                <ul className="text-charcoal font-medium space-y-2">
                  <li className="flex justify-between gap-4 border-b border-charcoal/10 pb-1">
                    <span>Monday</span>
                    <span className="text-red-600 font-bold tracking-wide">CLOSED</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-charcoal/10 pb-1">
                    <span>Tue - Sat</span>
                    <span>8:30am - 10:30pm</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span>8:30am - 8:30pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-charcoal/10 lg:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-accent/10 pointer-events-none z-10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
            <iframe
              src="https://maps.google.com/maps?q=Mellow%20Restaurant,%20325%20Shirley%20Rd,%20Southampton&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-125 group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
