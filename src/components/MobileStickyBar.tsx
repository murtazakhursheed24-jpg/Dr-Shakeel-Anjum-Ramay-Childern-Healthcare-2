import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export function MobileStickyBar() {
  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        <a 
          href={DOCTOR_INFO.phoneUrl}
          className="flex flex-col items-center justify-center py-3 gap-1 text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wider">CALL</span>
        </a>
        <a 
          href={DOCTOR_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-[#25D366] hover:bg-green-50 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wider">WHATSAPP</span>
        </a>
        <a 
          href="#appointment"
          className="flex flex-col items-center justify-center py-3 gap-1 text-brand-blue bg-blue-50 hover:bg-blue-100 transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wider text-center leading-tight">BOOK<br/>APPT</span>
        </a>
      </div>
    </div>
  );
}
