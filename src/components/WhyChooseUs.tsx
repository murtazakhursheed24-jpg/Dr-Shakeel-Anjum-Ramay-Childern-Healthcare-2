import { CheckCircle } from 'lucide-react';
import { IMAGES } from '../data';

const REASONS = [
  "20+ Years Experience",
  "Child-Focused Care",
  "Professional Medical Background",
  "Compassionate Approach",
  "Easy Appointment Booking",
  "Direct WhatsApp & Phone Contact",
  "Convenient Adda Gamber Location"
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-8">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-blue-200 bg-blue-800 border border-blue-700 rounded-full w-max">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Families Choose Experienced Care
              </h2>
              <p className="text-lg text-blue-200 leading-relaxed max-w-lg">
                We are dedicated to providing the highest standard of medical care for your children in a warm, welcoming, and professional environment.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {REASONS.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-blue-800 border border-blue-700">
                  <CheckCircle className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="font-bold text-white text-xs md:text-sm uppercase tracking-wide">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={IMAGES.gallery[1]} 
                alt="Clinic interior" 
                className="w-full h-48 md:h-64 object-cover rounded-lg border border-white/20"
                loading="lazy"
              />
              <img 
                src={IMAGES.gallery[2]} 
                alt="Doctor consultation" 
                className="w-full h-48 md:h-64 object-cover rounded-lg border border-white/20 mt-8"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
