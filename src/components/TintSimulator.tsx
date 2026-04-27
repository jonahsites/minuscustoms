import { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Shield, Thermometer, Eye } from 'lucide-react';

const TINT_LEVELS = [
  { level: '100%', opacity: 0, vlt: 100, rejection: 0, label: 'FACTORY' },
  { level: '50%', opacity: 0.3, vlt: 50, rejection: 45, label: 'CITY-LEGAL' },
  { level: '35%', opacity: 0.5, vlt: 35, rejection: 58, label: 'SUBTLE' },
  { level: '20%', opacity: 0.7, vlt: 20, rejection: 72, label: 'PRIVACY' },
  { level: '05%', opacity: 0.9, vlt: 5, rejection: 94, label: 'ULTRA' },
];

export default function TintSimulator() {
  const [selected, setSelected] = useState(TINT_LEVELS[2]);

  return (
    <div className="w-full max-w-7xl mx-auto py-32 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Configuration Controls */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-brand-blue font-mono text-[10px] uppercase tracking-[0.4em]">
              <Activity className="w-3 h-3" />
              <span>Sim_Mode: Calibration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
              Optical <span className="text-brand-blue">Analysis</span>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Adjust the Variable Light Transmission (VLT) parameters to observe real-time performance metrics on our ceramic series.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-technical">Select VLT Profile</p>
            <div className="grid grid-cols-1 gap-2">
              {TINT_LEVELS.map((t) => (
                <button
                  key={t.level}
                  onClick={() => setSelected(t)}
                  className={`flex items-center justify-between p-4 rounded border transition-all ${
                    selected.level === t.level
                      ? 'border-brand-blue bg-brand-blue/5 text-white'
                      : 'border-white/5 bg-white/[0.01] text-gray-500 hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-mono text-[10px] tracking-widest text-brand-blue mb-1">{t.level}</span>
                    <span className="font-black italic text-lg uppercase">{t.label}</span>
                  </div>
                  <div className="flex flex-col items-end opacity-40">
                     <span className="text-[10px] font-mono tracking-widest">IRR: {t.rejection}%</span>
                     <span className="text-[10px] font-mono tracking-widest">UV: 99.9%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center: The Technical Simulation */}
        <div className="lg:col-span-8 relative">
           <div className="relative aspect-[16/9] glass-panel rounded-lg overflow-hidden group">
              <div className="absolute inset-0 technical-grid opacity-10" />
              
              <motion.div
                key={selected.level}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600" 
                  alt="Luxury vehicle interior"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* The "3D" Window Panes */}
              <div className="absolute inset-x-20 inset-y-16 flex items-center justify-center perspective-[1000px]">
                 <motion.div
                   animate={{ rotateY: 20, rotateX: 5 }}
                   transition={{ repeat: Infinity, repeatType: 'reverse', duration: 10, ease: 'easeInOut' }}
                   className="relative w-[70%] h-[80%] transform-gpu"
                 >
                    {/* Shadow Frame */}
                    <div className="absolute inset-0 border border-brand-blue/20 rounded-xl translate-x-4 translate-y-4 -z-10" />
                    
                    {/* Glass Surface */}
                    <div 
                      className="absolute inset-0 rounded-xl border border-white/20 shadow-2xl transition-all duration-700 ease-in-out flex flex-col items-center justify-center p-12 overflow-hidden"
                      style={{ 
                        backgroundColor: `rgba(0, 0, 0, ${selected.opacity + 0.2})`,
                        backdropFilter: `blur(8px) brightness(${1 - selected.opacity * 0.5})`
                      }}
                    >
                       <div className="absolute top-4 left-6 pointer-events-none opacity-20">
                          <Eye className="w-32 h-32 text-white" />
                       </div>

                       <div className="relative z-10 text-center space-y-2">
                          <div className="text-technical text-brand-blue">Active Parameter</div>
                          <div className="text-7xl font-black italic text-white tracking-tighter">
                            {selected.level}
                          </div>
                          <div className="w-12 h-0.5 bg-brand-blue mx-auto mt-4" />
                       </div>

                       {/* Scannelines/Technical artifacts */}
                       <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] z-20 opacity-50" />
                    </div>
                 </motion.div>
              </div>

              {/* Technical Readouts Overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end border-t border-white/10 pt-6">
                 <div className="flex gap-12">
                    <div className="space-y-1">
                       <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] tracking-widest uppercase mb-1">
                          <Shield className="w-3 h-3 text-brand-blue" />
                          <span>Solar Energy Reject</span>
                       </div>
                       <div className="text-2xl font-black italic">{selected.rejection}%</div>
                    </div>
                    <div className="space-y-1">
                       <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] tracking-widest uppercase mb-1">
                          <Thermometer className="w-3 h-3 text-brand-blue" />
                          <span>Temp Delta</span>
                       </div>
                       <div className="text-2xl font-black italic">-{Math.round(selected.rejection * 0.2)}°F</div>
                    </div>
                 </div>
                 
                 <div className="hidden md:block text-right">
                    <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">Current Config Serial</div>
                    <div className="text-xs font-bold text-gray-400">MC-TS-2024-{selected.level.replace('%', '')}</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
