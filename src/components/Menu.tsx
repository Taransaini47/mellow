import { motion } from 'motion/react';

const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Mixed Olives", price: "£4.50", desc: "" },
      { name: "Garlic Bread/Cheesy Garlic Bread", price: "£6.00", desc: "" },
      { name: "Soup Of The Day", price: "£6.95", desc: "Served with fresh bread" },
      { name: "Prawn Cocktail", price: "£7.95", desc: "Gem lettuce, king prawns, marie rose sauce, fresh bread" },
      { name: "Mussels Mariniere", price: "£11.95", desc: "In creamy white wine sauce, fresh bread" },
      { name: "Baked Camembert", price: "£8.95", desc: "Recommended as a sharer, fresh bread" }
    ]
  },
  {
    category: "Breakfast",
    items: [
      { name: "Full English Breakfast", price: "£10.95", desc: "Sausage, bacon, mushroom, tomato, egg, hash brown beans, toast (traditional, large)" },
      { name: "Vegetarian Breakfast", price: "£10.95", desc: "Vegetarian sausage, mushroom, tomato, egg, hash brown beans, toast (eggs can be fried, scrambled or poached)" },
      { name: "Breakfast Butty (Fried Egg)", price: "£6.95", desc: "Served in either an english muffin or toasted brioche bun" },
      { name: "Breakfast Butty (Sausage)", price: "£7.95", desc: "Served in either an english muffin or toasted brioche bun" },
      { name: "Breakfast Butty (Bacon)", price: "£7.95", desc: "Served in either an english muffin or toasted brioche bun" },
      { name: "Breakfast Butty (Full Works)", price: "£9.95", desc: "Served in either an english muffin or toasted brioche bun" },
      { name: "Eggs Benedict", price: "£8.95", desc: "English muffin, poached egg, ham, hollandaise sauce" },
      { name: "Eggs Royale", price: "£9.95", desc: "English muffin, poached egg, smoked salmon, hollandaise sauce" },
      { name: "Breakfast Pancakes", price: "£8.95", desc: "Bacon & syrup / fruit & cream" }
    ]
  },
  {
    category: "Tapas",
    items: [
      { name: "Tempura Prawns", price: "£5.95", desc: "(3 for £14.95 deal available)" },
      { name: "Chicken Wings", price: "£5.95", desc: "(3 for £14.95 deal available)" },
      { name: "Calamari", price: "£5.95", desc: "(3 for £14.95 deal available)" },
      { name: "Roasted Veg & Pesto", price: "£5.95", desc: "(3 for £14.95 deal available)" },
      { name: "Whitebait", price: "£5.95", desc: "(3 for £14.95 deal available)" },
      { name: "Fried Brie", price: "£5.95", desc: "(3 for £14.95 deal available)" },
      { name: "Meatballs In Tomato Sauce", price: "£5.95", desc: "(3 for £14.95 deal available)" },
      { name: "Garlic Mushrooms", price: "£5.95", desc: "(3 for £14.95 deal available)" }
    ]
  },
  {
    category: "Pizza",
    items: [
      { name: "Margherita", price: "£9.95", desc: "" },
      { name: "Pepperoni", price: "£12.95", desc: "" },
      { name: "Hawaiian Ham & Pineapple", price: "£12.95", desc: "" },
      { name: "Meat Feast", price: "£14.95", desc: "Chicken, pepperoni, ham, meatballs" },
      { name: "Seafood Mixed Seafood", price: "£14.95", desc: "" },
      { name: "Vegetarian Mixed Vegetables", price: "£12.95", desc: "" },
      { name: "Mellow Special", price: "£14.95", desc: "Anchovies, olives, capers" }
    ]
  },
  {
    category: "Pasta",
    items: [
      { name: "Spaghetti Carbonara", price: "£12.95", desc: "" },
      { name: "Spaghetti Bolognese", price: "£12.95", desc: "" },
      { name: "Lasagna", price: "£14.95", desc: "Fries & side salad" },
      { name: "Penne Arrabiata", price: "£10.95", desc: "" },
      { name: "Seafood Linguini", price: "£14.95", desc: "" }
    ]
  },
  {
    category: "Mains",
    items: [
      { name: "Seafood Risotto", price: "£14.95", desc: "" },
      { name: "Mushroom & Vegetable Risotto", price: "£12.95", desc: "" },
      { name: "Ceaser Salad", price: "£10.95", desc: "Gem lettuce, croutons, italian hard cheese, ceaser dressing" },
      { name: "Pan-Seared Seabass", price: "£16.95", desc: "Served with seasoned potatoes & seasonal veg" },
      { name: "Pan-Seared Salmon", price: "£16.95", desc: "Served with seasoned potatoes & seasonal veg" },
      { name: "Mellow Special Cheeseburger", price: "£14.95", desc: "Lettuce, tomato, gherkins, burger sauce, fries & slaw" },
      { name: "Mellow Chicken Burger", price: "£14.95", desc: "Breaded crispy chicken fillet, lettuce, mayo, fries & slaw" },
      { name: "Sirloin Steak", price: "£21.95", desc: "Fries, mushroom, tomato" },
      { name: "Fillet Steak", price: "£25.95", desc: "Fries, mushroom, tomato" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Selection Of Ice-Creams", price: "£6.95", desc: "Served with choice of sauce & a wafter" },
      { name: "Brownie", price: "£6.95", desc: "Served warm with ice-cream" },
      { name: "Pancake", price: "£6.95", desc: "Served warm with ice-cream & chocolate sauce" },
      { name: "New York Cheesecake", price: "£6.95", desc: "Ask for daily flavor" },
      { name: "Profiteroles", price: "£6.95", desc: "" }
    ]
  },
  {
    category: "Sides",
    items: [
      { name: "Fries", price: "£3.95", desc: "" },
      { name: "Side Salad", price: "£3.95", desc: "" },
      { name: "Ciabatta, Olive Oil, Balsamic", price: "£3.95", desc: "" }
    ]
  },
  {
    category: "Soft Drinks",
    items: [
      { name: "Pepsi", price: "£3.90", desc: "" },
      { name: "Pepsi Max", price: "£3.90", desc: "" },
      { name: "Coca-Cola", price: "£3.00", desc: "Glass bottle" },
      { name: "Diet Coke", price: "£3.00", desc: "Glass bottle" },
      { name: "Lemonade", price: "£3.90", desc: "" },
      { name: "Orange Tango", price: "£3.90", desc: "" },
      { name: "Orange/Blackcurrant Squash", price: "£50.00", desc: "" },
      { name: "Fruit Juice", price: "£2.80", desc: "Orange, apple, pineapple, cranberry" },
      { name: "J20", price: "£3.00", desc: "Orange & passionfruit, apple & raspberry, apple & mango" },
      { name: "Appletizer", price: "£3.00", desc: "" },
      { name: "Redbull", price: "£3.00", desc: "" },
      { name: "Still Water", price: "£2.50", desc: "Small glass bottle" },
      { name: "Tonic Water", price: "£2.50", desc: "" }
    ]
  },
  {
    category: "Spirits",
    items: [
      { name: "Smirnoff Vodka", price: "£6.00", desc: "All single measures with choice of mixer" },
      { name: "Bacardi", price: "£6.00", desc: "All single measures with choice of mixer" },
      { name: "Gordon's Gin", price: "£6.00", desc: "All single measures with choice of mixer" },
      { name: "Gordon's Pink Gin", price: "£6.00", desc: "All single measures with choice of mixer" },
      { name: "Lambs Navy Dark Rum", price: "£6.00", desc: "All single measures with choice of mixer" },
      { name: "Captain Morgan's Spiced Rum", price: "£6.00", desc: "All single measures with choice of mixer" },
      { name: "Jack Daniels", price: "£6.00", desc: "All single measures with choice of mixer" },
      { name: "House Whiskey", price: "£6.00", desc: "All single measures with choice of mixer" },
      { name: "House Brandy", price: "£6.00", desc: "All single measures with choice of mixer" },
      { name: "Malibu", price: "£6.00", desc: "All single measures with choice of mixer" }
    ]
  },
  {
    category: "Liquors",
    items: [
      { name: "Sambuca", price: "£3.50", desc: "" },
      { name: "Baileys", price: "£3.50", desc: "" },
      { name: "Cointreau", price: "£3.50", desc: "" },
      { name: "Grand Mariner", price: "£3.50", desc: "" },
      { name: "Tia Maria", price: "£3.50", desc: "" },
      { name: "Disaronno", price: "£3.50", desc: "" },
      { name: "Tequila/Tequila Rose", price: "£3.50", desc: "" },
      { name: "Limonchello", price: "£3.50", desc: "" },
      { name: "Jagermeister", price: "£3.50", desc: "" }
    ]
  },
  {
    category: "Draft Beers",
    items: [
      { name: "Angelo Poretti", price: "£3.00", desc: "(Half pint, pint)" },
      { name: "Heineken Silver", price: "£3.00", desc: "(Half pint, pint)" },
      { name: "Birra Moretti", price: "£3.00", desc: "(Half pint, pint)" },
      { name: "Amstel Bier", price: "£3.00", desc: "(Half pint, pint)" },
      { name: "Heineken", price: "£4.00", desc: "0% alcohol" }
    ]
  },
  {
    category: "Cider/Bottled Beer",
    items: [
      { name: "Magners Cider", price: "£4.00", desc: "" },
      { name: "Budwiser", price: "£4.00", desc: "" },
      { name: "Peroni", price: "£4.00", desc: "" },
      { name: "Corona", price: "£4.00", desc: "" }
    ]
  },
  {
    category: "White Wine",
    items: [
      { name: "Pinot Grigio Previata", price: "£6.95", desc: "Italian. Dry, light & refreshing (175ml, 250ml, bottle)" },
      { name: "Sauvignon Blanc, Patterson's Grove", price: "£7.95", desc: "Marlborough. Powerful, aromatic & zesty (175ml, 250ml, bottle)" },
      { name: "Chardonnay, Valle Central", price: "£6.95", desc: "Chile. Crisp & elegant with tropical notes (175ml, 250ml, bottle)" }
    ]
  },
  {
    category: "Rose Wine",
    items: [
      { name: "Blush Pinot Grigio, Previata", price: "£6.95", desc: "Italian. Pale, refreshing & delicate (175ml, 250ml, bottle)" },
      { name: "Pinot Grigio Dele Venezie", price: "£6.95", desc: "Italian. Fresh & fruity (175ml, 250ml, bottle)" },
      { name: "White Zinfandel", price: "£6.95", desc: "California. Juicy & refreshing (175ml, 250ml, bottle)" }
    ]
  },
  {
    category: "Red Wine",
    items: [
      { name: "Montepulciano D'arbuzzo", price: "£6.95", desc: "Italian. Rich with cherry & blackberry notes (175ml, 250ml, bottle)" },
      { name: "Merlot", price: "£6.95", desc: "French. Fruity & soft (175ml, 250ml, bottle)" },
      { name: "Chianti Reserva", price: "£5.50", desc: "Italian. Fruity notes of cherry, vanilla & spice (175ml, bottle)" }
    ]
  },
  {
    category: "Sparkling Wine",
    items: [
      { name: "Prosecco Vino Frizzante", price: "£23.95", desc: "Italian. Light, fresh & bubbly" },
      { name: "Canti Prosecco", price: "£7.95", desc: "Personal 20cl bottle" }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="relative py-24 px-6 md:px-12 bg-stone-50 overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1000&auto=format&fit=crop" alt="Food" referrerPolicy="no-referrer" className="absolute top-[2%] -left-20 w-96 h-96 object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop" alt="Food" referrerPolicy="no-referrer" className="absolute top-[9%] -right-10 w-[300px] h-[300px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" alt="Coffee" referrerPolicy="no-referrer" className="absolute top-[16%] -left-16 w-[350px] h-[350px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop" alt="Food" referrerPolicy="no-referrer" className="absolute top-[23%] -right-32 w-[450px] h-[450px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" alt="Food" referrerPolicy="no-referrer" className="absolute top-[30%] -left-32 w-[500px] h-[500px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop" alt="Cocktail" referrerPolicy="no-referrer" className="absolute top-[37%] -right-20 w-[400px] h-[400px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop" alt="Food" referrerPolicy="no-referrer" className="absolute top-[44%] -left-40 w-[600px] h-[600px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop" alt="Food" referrerPolicy="no-referrer" className="absolute top-[51%] -right-20 w-[400px] h-[400px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=1000&auto=format&fit=crop" alt="Beer" referrerPolicy="no-referrer" className="absolute top-[58%] -left-24 w-[450px] h-[450px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000&auto=format&fit=crop" alt="Food" referrerPolicy="no-referrer" className="absolute top-[65%] -right-20 w-[450px] h-[450px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop" alt="Red Wine" referrerPolicy="no-referrer" className="absolute top-[72%] -left-32 w-[500px] h-[500px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop" alt="White Wine" referrerPolicy="no-referrer" className="absolute top-[79%] -right-24 w-[400px] h-[400px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1599939571322-792a326e9086?q=80&w=1000&auto=format&fit=crop" alt="Champagne" referrerPolicy="no-referrer" className="absolute top-[86%] -left-16 w-[350px] h-[350px] object-cover rounded-full shadow-2xl" />
        <img src="https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=1000&auto=format&fit=crop" alt="Dessert" referrerPolicy="no-referrer" className="absolute top-[93%] -right-10 w-[350px] h-[350px] object-cover rounded-full shadow-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="bg-white/95 backdrop-blur-md px-12 py-8 rounded-3xl shadow-xl border border-charcoal/5 inline-block">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Our Menu</h2>
            <p className="text-charcoal/60 font-light max-w-xl mx-auto">
              A selection of our dishes and drinks, crafted with passion and precision.
            </p>
          </div>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {menuItems.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-charcoal/5"
            >
              <h3 className="text-2xl font-serif italic text-accent mb-6 border-b border-charcoal/10 pb-3">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((item) => {
                  const isMellow = item.name.toLowerCase().includes('mellow');
                  return (
                    <div 
                      key={item.name} 
                      className={`flex flex-col p-4 rounded-xl transition-colors ${
                        isMellow 
                          ? 'bg-accent/10 border border-accent/30 shadow-sm' 
                          : 'hover:bg-charcoal/5'
                      }`}
                    >
                      <div className="flex items-baseline justify-between mb-1 gap-4">
                        <h4 className="text-lg font-bold tracking-wide leading-tight flex items-center gap-2 flex-wrap">
                          {item.name}
                          {isMellow && (
                            <span className="text-[10px] uppercase tracking-wider bg-accent text-charcoal px-2 py-0.5 rounded-full font-bold">
                              Signature
                            </span>
                          )}
                        </h4>
                        <span className="text-lg font-serif font-bold shrink-0">{item.price}</span>
                      </div>
                      {item.desc && (
                        <p className="text-sm text-charcoal/80 font-medium leading-snug">{item.desc}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
