import { Instagram, Facebook, Phone, Mail, MapPin, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-muted)] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-sm transform -skew-x-12 flex items-center justify-center font-display font-black text-white italic">
                M
              </div>
              <span className="font-display font-black text-xl uppercase tracking-tighter italic">
                Minus<span className="text-blue-600">Customs</span>
              </span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs font-light">
              Providing premium automotive solutions across Illinois. Precision focused. Results driven.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm border border-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm border border-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-black uppercase tracking-widest text-[10px] text-gray-400">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#simulator" className="hover:text-blue-500 transition-colors">Tint Simulator</a></li>
              <li><a href="#gallery" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-black uppercase tracking-widest text-[10px] text-gray-400">Contact Info</h4>
            <ul className="space-y-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
              <li className="flex items-center gap-3">
                <Phone className="w-3 h-3 text-blue-600" />
                <span>(312) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-3 h-3 text-blue-600" />
                <span>info@minuscustoms.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-3 h-3 text-blue-600" />
                <span>Chicago Metro, IL</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-mono">Join the Insider List</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-blue transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-blue rounded text-white hover:bg-blue-600 transition-colors">
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-mono tracking-widest uppercase">
          <p>© 2026 MinusCustoms. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
