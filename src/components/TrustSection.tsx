import { DOCTOR_INFO } from '../data';
import { ShieldCheck, Heart, Calendar } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-blue-900 text-white p-6 gap-6 md:gap-0">
      <div className="flex items-start space-x-3 lg:border-r border-blue-800 lg:pr-4">
        <div className="bg-blue-800 p-2 rounded-lg">
          <ShieldCheck className="w-5 h-5 text-blue-300" />
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-blue-300">Child Health</h4>
          <p className="text-[10px] leading-snug mt-1 opacity-80">Complete assessment of common illnesses & growth guidance.</p>
        </div>
      </div>
      <div className="flex items-start space-x-3 lg:border-r border-blue-800 lg:px-4">
        <div className="bg-blue-800 p-2 rounded-lg">
          <Heart className="w-5 h-5 text-blue-300" />
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-blue-300">Compassionate Care</h4>
          <p className="text-[10px] leading-snug mt-1 opacity-80">Guidance and support for parents through every childhood stage.</p>
        </div>
      </div>
      <div className="flex items-start space-x-3 lg:border-r border-blue-800 lg:px-4">
        <div className="bg-blue-800 p-2 rounded-lg">
          <Calendar className="w-5 h-5 text-blue-300" />
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-blue-300">Easy Booking</h4>
          <p className="text-[10px] leading-snug mt-1 opacity-80">Fast appointment scheduling via WhatsApp and Phone.</p>
        </div>
      </div>
      <div className="flex items-center justify-center lg:pl-4">
        <a href="#appointment" className="w-full text-center py-3 bg-white text-blue-900 text-xs font-bold rounded-lg hover:bg-blue-50 transition-colors uppercase tracking-widest block">
          Book Now
        </a>
      </div>
    </section>
  );
}
