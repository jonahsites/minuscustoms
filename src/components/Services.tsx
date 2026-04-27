import { motion } from 'motion/react';
import { Shield, Zap, Droplets, Layers, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: 'NANO-CERAMIC TINT',
    description: 'Bespoke window film solutions with 99.9% UV rejection and heat shielding technology.',
    icon: Zap,
    specs: ['IR REJECTION: 98%', 'VLT RANGE: 5-70%', 'WARRANTY: LIFETIME']
  },
  {
    id: '02',
    title: 'PROTECTION FILM',
    description: 'Optically clear, self-healing polyurethane barriers against environmental impacts.',
    icon: Shield,
    specs: ['THICKNESS: 8 MIL', 'SELF-HEALING: YES', 'FINISH: GLOSS/MATTE']
  },
  {
    id: '03',
    title: 'QUARTZ COATINGS',
    description: 'Permanent molecular bonding for extreme hydrophobicity and chemical resistance.',
    icon: Droplets,
    specs: ['DURABILITY: 5+ YEARS', 'HARDNESS: 9H+', 'GLOSS SCALE: 10/10']
  },
  {
    id: '04',
    title: 'VINYL WRAPS',
    description: 'Full-spectrum aesthetic transformations using premium aerospace-grade polymers.',
    icon: Layers,
    specs: ['FINISHES: 500+', 'BRAND: 3M/AVERY', 'REMOVABLE: YES']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full technical-grid opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-brand-blue" />
              <span className="text-technical text-brand-blue">Core Operations</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
              PRECISION<br />
              <span className="text-gray-700">SERVICES</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
            Our workshop operates at the intersection of architectural precision and automotive performance. Every service is calibrated to factory-plus standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-surface p-12 group hover:bg-white/[0.02] transition-all relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl font-black text-white/10 group-hover:text-brand-blue/20 transition-colors font-mono">
                  {service.id}
                </span>
                <service.icon className="w-8 h-8 text-gray-600 group-hover:text-brand-blue transition-colors" />
              </div>

              <h3 className="text-3xl font-black mb-4 tracking-tighter">{service.title}</h3>
              <p className="text-gray-500 mb-10 max-w-xs font-light leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 pt-8 border-t border-white/5">
                {service.specs.map((spec) => (
                  <div key={spec} className="flex items-center justify-between font-mono text-[10px] tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors">
                    <span>{spec.split(': ')[0]}</span>
                    <span className="text-white/40">{spec.split(': ')[1]}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-2 text-brand-blue text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <span>CONFIGURE OPTION</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
