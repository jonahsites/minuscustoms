/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TintSimulator from './components/TintSimulator';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-dark-surface)] selection:bg-brand-blue selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />
        
        <section id="simulator" className="overflow-hidden">
           <TintSimulator />
        </section>

        <Gallery />

        {/* CTA Section */}
        <section className="py-40 px-6 relative overflow-hidden technical-grid">
           <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent pointer-events-none" />
           <div className="max-w-5xl mx-auto relative z-10 text-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                 <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-px bg-brand-blue" />
                    <span className="text-technical text-brand-blue">System Ready</span>
                    <div className="w-12 h-px bg-brand-blue" />
                 </div>
                 <h2 className="text-7xl md:text-[8rem] font-black uppercase tracking-tighter italic leading-none">
                   SYNC YOUR<br /> <span className="text-brand-blue not-italic">VISION</span>
                 </h2>
                 <p className="mt-8 text-gray-500 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                   Our customization slots are limited to ensure 100% precision for every client. Initiate your transformation protocol today.
                 </p>
                 <div className="pt-12">
                    <button className="px-16 py-6 bg-brand-blue text-white font-black uppercase tracking-[0.3em] transition-all hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-brand-blue/40 flex items-center justify-center mx-auto gap-4 group">
                       <span>INITIATE BOOKING</span>
                       <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
              </motion.div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
