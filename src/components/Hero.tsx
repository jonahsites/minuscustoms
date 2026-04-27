import { motion } from 'motion/react';
import { ArrowRight, MapPin, Gauge, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20 technical-grid">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-surface via-dark-surface/80 to-transparent z-10" />
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-px h-full bg-white/5" />
        <div className="absolute bottom-0 left-2/4 w-px h-full bg-white/5" />
      </div>

      <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="lg:col-span-7 space-y-8"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-technical px-3 py-1 border border-white/10 rounded bg-white/5">
              EST. CHICAGO // 2024
            </span>
            <div className="flex items-center gap-2 text-brand-blue font-mono text-[10px] uppercase tracking-widest">
              <MapPin className="w-3 h-3" />
              <span>Illinois Premium Customs HQ</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter text-white">
            MINUS<br />
            <span className="text-brand-blue">CUSTOMS</span>
          </h1>

          <div className="max-w-xl space-y-6">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              We specialize in aerospace-grade window films and advanced surface protection. Engineered for precision, designed for the modern enthusiast.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-brand-blue hover:bg-blue-600 text-white font-bold rounded shadow-lg shadow-brand-blue/20 transition-all flex items-center justify-between gap-4 group">
                <span>START CUSTOMIZATION</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:bg-white hover:text-black transition-all rounded font-bold">
                VIEW SHOWCASE
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block relative"
        >
          <div className="relative glass-panel rounded-lg p-2 blue-glow-subtle overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury car showcase"
              className="w-full h-auto rounded grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute top-6 left-6 p-4 glass-panel rounded border-white/10 backdrop-blur-xl">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                 <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Calibration Active</span>
               </div>
               <div className="text-2xl font-black italic">ULTRA-S 5%</div>
            </div>

            <div className="absolute bottom-6 right-6 flex gap-4">
               <div className="p-3 glass-panel rounded">
                  <Gauge className="w-5 h-5 text-brand-blue" />
               </div>
               <div className="p-3 glass-panel rounded">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
               </div>
            </div>
          </div>

          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-brand-blue/20 rounded-lg scale-105" />
        </motion.div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="writing-vertical text-technical tracking-[0.5em] opacity-30">
          PRECISION AUTOMOTIVE CUSTOMS
        </span>
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}
