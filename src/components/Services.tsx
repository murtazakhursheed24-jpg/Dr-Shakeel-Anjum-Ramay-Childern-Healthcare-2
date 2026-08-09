import React from 'react';
import { SERVICES } from '../data';
import * as Icons from 'lucide-react';
import { Button } from './ui/button';

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-blue-600 bg-blue-100 border border-blue-200 rounded-full w-max">
            OUR EXPERTISE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            Child Healthcare Services
          </h2>
          <p className="text-lg text-slate-600">
            Providing comprehensive care and professional medical guidance for infants, children, and adolescents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;
            return (
              <div 
                key={idx} 
                className="group flex flex-col p-6 rounded-lg bg-white border border-slate-200 hover:border-blue-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2 leading-tight uppercase tracking-wide">{service.title}</h3>
                <p className="text-slate-600 text-xs mb-6 flex-grow leading-relaxed">{service.description}</p>
                <a href="#appointment" className="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center uppercase tracking-widest mt-auto">
                  Book Appointment <Icons.ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
