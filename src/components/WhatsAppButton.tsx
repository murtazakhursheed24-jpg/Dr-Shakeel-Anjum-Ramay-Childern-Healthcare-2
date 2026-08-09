import { MessageCircle } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export function WhatsAppButton() {
  return (
    <a
      href={DOCTOR_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-[10px] font-bold py-2 px-3 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap uppercase tracking-widest hidden md:block">
        WhatsApp Us
      </span>
    </a>
  );
}
