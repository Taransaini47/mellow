import { Instagram, Facebook, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="mb-6">
            <img 
              src="/logo.png" 
              alt="Mellow Logo" 
              className="h-14 object-contain brightness-0 invert opacity-90" 
            />
          </div>
          <h3 className="text-3xl font-serif font-light mb-4">The Mellow</h3>
          <p className="text-cream/60 font-light max-w-sm mb-8">
            A modern, minimalistic dining experience in the heart of Southampton.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-accent">Links</h4>
          <ul className="space-y-3 text-cream/70 font-light text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Reservations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Private Dining</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-accent">Visit Us</h4>
          <ul className="space-y-3 text-cream/70 font-light text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>325 Shirley Rd, Shirley<br />Southampton SO15 3HW<br />United Kingdom</span>
            </li>
            <li>
              <a href="tel:+442382511858" className="hover:text-accent transition-colors">+44 23 8251 1858</a>
            </li>
            <li>hello@themellow.co.uk</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40 font-light">
        <p>&copy; {new Date().getFullYear()} The Mellow Restaurant. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
