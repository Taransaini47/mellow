import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: "Sarah Jenkins",
    rating: 5,
    text: "Absolutely fantastic experience. The breakfast here is unmatched in Southampton. The full English was cooked to perfection and the coffee was excellent!"
  },
  {
    author: "Mark Thompson",
    rating: 5,
    text: "Loved the modern minimalistic decor. The staff were incredibly attentive without being intrusive. Highly recommend the tapas and cocktails in the evening."
  },
  {
    author: "Emma Williams",
    rating: 5,
    text: "A hidden gem! The pizzas are incredible - proper stone baked style with generous toppings. The Mellow Special is a must-try."
  },
  {
    author: "James Lawson",
    rating: 5,
    text: "Perfect for a date night. The lighting, the music, and the culinary experience were all top-notch. The pan-seared seabass was cooked beautifully."
  },
  {
    author: "Chloe Smith",
    rating: 5,
    text: "Great vegetarian options! It's rare to find a place that puts so much thought into plant-based dishes. The vegetarian breakfast is huge and delicious."
  },
  {
    author: "David Chen",
    rating: 5,
    text: "Stopped by for drinks and ended up staying for dinner. The cocktail menu is extensive and the sirloin steak was one of the best I've had locally."
  },
  {
    author: "Sophie Taylor",
    rating: 5,
    text: "Such a lovely atmosphere! We came for a family brunch and the pancakes were a massive hit with the kids. Will definitely be returning."
  },
  {
    author: "Michael Brown",
    rating: 5,
    text: "Excellent service from start to finish. The seafood linguini was packed with flavor. Great selection of draft beers too."
  },
  {
    author: "Rachel Davies",
    rating: 5,
    text: "Beautiful restaurant with a really relaxed vibe. The baked camembert starter is incredible. Highly recommend booking in advance as it gets busy!"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">What Our Guests Say</h2>
          <div className="flex items-center justify-center gap-2 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" size={20} />
            ))}
          </div>
          <p className="text-cream/60 font-light mt-4">4.8/5 on Google Reviews</p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Gradient masks for smooth fade in/out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-8 py-4 px-4">
          {/* Double the reviews array to create a seamless loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[450px] shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col"
            >
              <div className="flex items-center gap-1 text-accent mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-lg font-light italic text-cream/90 flex-grow mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-serif font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-medium text-sm">{review.author}</p>
                  <p className="text-xs text-cream/50">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
