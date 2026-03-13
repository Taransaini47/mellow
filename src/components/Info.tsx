import { motion } from 'motion/react';
import { Clock, MapPin, Phone } from 'lucide-react';

export default function Info() {
  return (
    <section id="info" className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-charcoal">
          A Modern Culinary Experience
        </h2>
        <p className="text-lg text-charcoal/70 font-light leading-relaxed mb-8">
          Located in the heart of Southampton, The Mellow offers a relaxed dining atmosphere with a focus on modern European cuisine. We source the finest local ingredients to create dishes that are both beautiful and delicious.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-accent/10 p-5 rounded-2xl border border-accent/30 shadow-sm">
            <Clock className="w-6 h-6 text-accent mt-1 shrink-0" />
            <div className="w-full">
              <h3 className="font-serif text-xl mb-3 font-bold text-charcoal">Opening Hours</h3>
              <ul className="text-sm text-charcoal space-y-2 font-medium">
                <li className="flex justify-between w-full max-w-[250px] border-b border-charcoal/10 pb-1">
                  <span>Monday</span>
                  <span className="text-red-600 font-bold tracking-wide">CLOSED</span>
                </li>
                <li className="flex justify-between w-full max-w-[250px] border-b border-charcoal/10 pb-1">
                  <span>Tue - Sat</span>
                  <span>8:30am - 10:30pm</span>
                </li>
                <li className="flex justify-between w-full max-w-[250px]">
                  <span>Sunday</span>
                  <span>8:30am - 8:30pm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-accent mt-1" />
            <div>
              <h3 className="font-serif text-xl mb-2">Location</h3>
              <p className="text-sm text-charcoal/70 font-light">
                325 Shirley Rd, Shirley<br />
                Southampton SO15 3HW<br />
                United Kingdom
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-accent mt-1" />
            <div>
              <h3 className="font-serif text-xl mb-2">Contact</h3>
              <p className="text-sm text-charcoal/70 font-light">
                <a href="tel:+442382511858" className="hover:text-accent transition-colors">+44 23 8251 1858</a><br />
                hello@themellow.co.uk
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[600px] rounded-2xl overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop"
          alt="Plated Food"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
