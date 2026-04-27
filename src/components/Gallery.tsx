import { motion } from 'motion/react';

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1549399542-7ec3cf1565e2?auto=format&fit=crop&q=80&w=800", size: "lg" },
  { src: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800", size: "sm" },
  { src: "https://images.unsplash.com/photo-1621932953912-0b6dc3bcc46b?auto=format&fit=crop&q=80&w=800", size: "sm" },
  { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800", size: "sm" },
  { src: "https://images.unsplash.com/photo-1621271111623-10e309cc6b58?auto=format&fit=crop&q=80&w=800", size: "lg" },
  { src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800", size: "sm" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-24">
          <div className="space-y-6">
            <span className="text-technical text-brand-blue">Operational Output</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">
              The <span className="text-gray-700 not-italic">Archive</span>
            </h2>
          </div>
          <div className="hidden lg:block text-right">
             <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-2">Total Deployments</div>
             <div className="text-4xl font-black">2,480+</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[120px]">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden bg-white/5 ${
                img.size === 'lg' ? 'md:col-span-2 md:row-span-4' : 'md:col-span-1 md:row-span-2'
              }`}
            >
              <img 
                src={img.src} 
                className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                alt="Custom vehicle work"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="font-mono text-[10px] text-white/60 mb-2 uppercase tracking-widest">Serial: MC-{i+1000}</p>
                    <p className="font-black text-2xl uppercase italic text-white tracking-tighter">Full Enhancement</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
