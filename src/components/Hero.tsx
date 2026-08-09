import { motion } from 'motion/react';
import { DOCTOR_INFO, IMAGES } from '../data';
import { Button } from './ui/button';
import { Calendar, PhoneCall, MessageCircle, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-[72px] md:pt-[84px] bg-white">
      <div className="grid lg:grid-cols-12 gap-0 items-stretch min-h-[calc(100vh-84px)] border-b border-slate-200">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 p-8 md:p-16 lg:p-20 flex flex-col justify-center relative bg-gradient-to-br from-white to-blue-50"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-blue-600 bg-blue-100 border border-blue-200 rounded-full w-max"
          >
            {DOCTOR_INFO.experience.toUpperCase()}
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Compassionate Child Healthcare, <span className="text-blue-600">Expertly Delivered.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
            Experienced medical guidance for children and families in Okara. Dedicated to professional assessment and thoughtful child-centered care.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">MD (Medicine)</p>
                <p className="text-[10px] text-slate-500">Professional Qualification</p>
              </div>
            </div>
            <div className="flex items-center px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">DCH</p>
                <p className="text-[10px] text-slate-500">Diploma in Child Health</p>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:space-x-12 border-t border-slate-200 pt-8">
            <div>
              <p className="text-2xl font-bold text-blue-900">20+</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">MBBS</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Medical Degree</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">RMP</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Registered Prof.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:col-span-5 relative flex items-end justify-center bg-blue-100 border-l border-slate-200 min-h-[500px]"
        >
          <img 
            src={IMAGES.hero} 
            alt={`Portrait of ${DOCTOR_INFO.name}`} 
            className="h-[90%] w-auto object-contain z-10"
            fetchPriority="high"
          />
          <div className="absolute top-10 right-10 bg-white/90 backdrop-blur p-4 rounded-2xl border border-slate-200 shadow-xl z-20 max-w-[200px] hidden md:block">
            <p className="text-xs font-bold text-blue-900 mb-1">Clinic Location</p>
            <p className="text-[11px] text-slate-600 leading-tight mb-3">AI Shifa Children and Maternity Home, Okara. Serving the community for 2 decades.</p>
            <a href={DOCTOR_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-blue-600 flex items-center hover:underline">
              GET DIRECTIONS <span className="ml-1">→</span>
            </a>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/20 to-transparent z-0"></div>
        </motion.div>
        
      </div>
    </section>
  );
}
