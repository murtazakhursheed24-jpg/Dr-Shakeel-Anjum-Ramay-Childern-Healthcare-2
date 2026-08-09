import { DOCTOR_INFO, IMAGES } from '../data';
import { Button } from './ui/button';
import { Calendar, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1 flex items-center justify-center p-8 bg-blue-50 border border-slate-200 rounded-xl">
            <img 
              src={IMAGES.gallery[0]} 
              alt={`Dr. Shakeel Anjum Ramay with patient`} 
              className="relative z-10 w-full h-auto rounded-lg shadow-sm object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-blue-600 bg-blue-100 border border-blue-200 rounded-full w-max">
              ABOUT DOCTOR
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-heading leading-tight">
              Meet {DOCTOR_INFO.name}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dr. Shakeel Anjum Ramay is an experienced medical practitioner providing child healthcare services to families in Gamber and Okara. With more than 20 years of experience in treating children's diseases, his approach focuses on professional assessment, thoughtful medical guidance and compassionate care for children and their families.
            </p>
            
            <div className="mt-4 space-y-4">
              <h3 className="text-xl font-semibold text-brand-navy">Professional Background</h3>
              <ul className="space-y-3">
                {DOCTOR_INFO.memberships.map((membership, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                    <span className="text-slate-700">{membership}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 p-5 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-2">Qualifications</h4>
              <p className="font-bold text-slate-800 text-sm">{DOCTOR_INFO.credentials.join(' • ')}</p>
            </div>

            <div className="mt-6">
              <a href="#appointment" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-all uppercase tracking-widest">
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
