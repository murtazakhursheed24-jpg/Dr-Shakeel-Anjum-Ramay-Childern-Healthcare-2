import { Phone, MessageCircle, MapPin, Calendar, Mail } from 'lucide-react';
import { DOCTOR_INFO } from '../data';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <div className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-blue-600 bg-blue-100 border border-blue-200 rounded-full w-max">
              CONTACT US
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Contact {DOCTOR_INFO.name}
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We are here to assist you. Reach out to schedule an appointment or if you have any questions regarding our child healthcare services.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-bold text-slate-900 mt-1">{DOCTOR_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-lg font-bold text-slate-900 mt-1">{DOCTOR_INFO.whatsapp}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-lg font-bold text-slate-900 mt-1">{DOCTOR_INFO.location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href={DOCTOR_INFO.phoneUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all uppercase tracking-widest">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={DOCTOR_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 rounded-lg hover:bg-teal-100 transition-all uppercase tracking-widest">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-lg border border-slate-200 h-fit">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Full Name</label>
                <input required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Phone Number</label>
                <input required type="tel" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors" placeholder="03XX XXXXXXX" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea required rows={4} className="w-full p-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-colors resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center h-12 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg uppercase tracking-widest transition-colors">
                <Mail className="w-4 h-4 mr-2" /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
