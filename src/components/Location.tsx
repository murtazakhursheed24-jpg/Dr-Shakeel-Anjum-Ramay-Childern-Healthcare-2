import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { DOCTOR_INFO, IMAGES } from '../data';
import { Button } from './ui/button';

export function Location() {
  return (
    <section id="location" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
          <div className="grid lg:grid-cols-2">
            
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-blue-600 bg-blue-100 border border-blue-200 rounded-full w-max">
                LOCATION
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 leading-tight">
                Conveniently Located in Okara
              </h2>
              
              <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md">
                Providing accessible, high-quality child healthcare services to families across the region.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 mb-1">CLINIC LOCATION</h4>
                    <p className="text-slate-600 text-sm">
                      Al Shifa Children and Maternity Home<br />
                      Gamber, Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 mb-1">Operating Hours</h4>
                    <p className="text-slate-600 text-sm">By Appointment</p>
                  </div>
                </div>
              </div>
              
              <a href={DOCTOR_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-all uppercase tracking-widest w-fit">
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
            
            <div className="relative h-64 lg:h-auto border-t lg:border-t-0 lg:border-l border-slate-200">
              <img 
                src={IMAGES.gallery[3]} 
                alt="Clinic exterior view" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
