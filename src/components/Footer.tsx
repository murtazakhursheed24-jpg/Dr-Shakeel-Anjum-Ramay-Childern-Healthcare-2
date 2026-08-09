import { DOCTOR_INFO } from '../data';
import { Phone, MapPin, MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 pt-20 pb-8 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-widest uppercase">{DOCTOR_INFO.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Experienced Child Healthcare in Okara. Compassionate care backed by over 20 years of experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold mb-6 text-slate-500 tracking-[0.2em] uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Doctor', 'Services', 'Videos', 'Appointment', 'Location', 'FAQs', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold mb-6 text-slate-500 tracking-[0.2em] uppercase">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={DOCTOR_INFO.phoneUrl} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-slate-500" />
                  {DOCTOR_INFO.phone}
                </a>
              </li>
              <li>
                <a href={DOCTOR_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 text-slate-500" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  {DOCTOR_INFO.location}
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold mb-6 text-slate-500 tracking-[0.2em] uppercase">Book Appointment</h4>
            <p className="text-slate-400 text-sm mb-6">
              Schedule a visit for your child. We ensure timely and professional care.
            </p>
            <a href="#appointment" className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest gap-2 h-12 rounded-lg transition-colors">
              <Calendar className="w-4 h-4" /> Book Appointment
            </a>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {year} {DOCTOR_INFO.name}. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-xs max-w-xl text-right">
            Medical information on this website is for general informational purposes and does not replace professional medical consultation.
          </p>
        </div>
      </div>
    </footer>
  );
}
