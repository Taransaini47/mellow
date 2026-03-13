/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingCall from './components/FloatingCall';

export default function App() {
  return (
    <main className="min-h-screen bg-cream font-sans text-charcoal selection:bg-accent/30">
      <Navbar />
      <Hero />
      <Info />
      <Gallery />
      <Menu />
      <Reviews />
      <Location />
      <Footer />
      <FloatingCall />
    </main>
  );
}
