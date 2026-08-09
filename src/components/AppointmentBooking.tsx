import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Calendar, User, Phone, MessageSquare, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

type FormData = {
  parentName: string;
  childName: string;
  childAge: string;
  gender: string;
  phone: string;
  whatsapp: string;
  date: string;
  time: string;
  reason: string;
  consent: boolean;
};

export function AppointmentBooking() {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmittedData(data);
  };

  return (
    <section id="appointment" className="py-24 bg-slate-50 border-t border-slate-200">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-5">
            
            {/* Form Sidebar */}
            <div className="md:col-span-2 bg-blue-900 p-8 md:p-10 text-white flex flex-col justify-between">
              
              <div>
                <div className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-blue-300 bg-blue-800 border border-blue-700 rounded-full w-max">
                  BOOKING
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 leading-tight">Book an Appointment</h2>
                <p className="text-blue-200 text-sm leading-relaxed mb-10">
                  Schedule a visit for your child with Dr. Shakeel Anjum Ramay. Fill out the form, and our clinic will contact you to confirm the time.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-blue-300 font-bold mb-1">Clinic Location</p>
                      <p className="font-medium text-sm leading-snug">{DOCTOR_INFO.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-blue-300 font-bold mb-1">Call Us</p>
                      <p className="font-medium text-sm">{DOCTOR_INFO.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-blue-800 p-5 rounded-lg border border-blue-700">
                <p className="text-xs font-medium text-blue-100">
                  Need immediate assistance? 
                  <br/>
                  <a href={DOCTOR_INFO.whatsappUrl} className="text-white hover:text-blue-200 underline underline-offset-4 mt-2 inline-block font-bold">
                    Message us on WhatsApp
                  </a>
                </p>
              </div>
            </div>

            {/* Form Area */}
            <div className="md:col-span-3 p-8 md:p-10">
              
              {submittedData ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Appointment Request Received</h3>
                  <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                    Thank you. Your appointment request has been received. The clinic will contact you to confirm availability.
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 w-full max-w-sm text-left mb-8 space-y-3">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500 text-sm">Patient</span>
                      <span className="font-medium text-slate-900">{submittedData.childName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500 text-sm">Date</span>
                      <span className="font-medium text-slate-900">{submittedData.date}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500 text-sm">Preferred Time</span>
                      <span className="font-medium text-slate-900">{submittedData.time}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500 text-sm">Location</span>
                      <span className="font-medium text-slate-900">{DOCTOR_INFO.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 text-sm">Contact</span>
                      <span className="font-medium text-slate-900">{submittedData.phone}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSubmittedData(null)} 
                    className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors uppercase tracking-widest"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-brand-navy border-b pb-2">Patient Details</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                          <User className="w-4 h-4 text-slate-400" /> Parent / Guardian Name *
                        </label>
                        <input 
                          {...register("parentName", { required: true })} 
                          className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                          placeholder="Full Name"
                        />
                        {errors.parentName && <span className="text-xs text-red-500">This field is required</span>}
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                          <User className="w-4 h-4 text-slate-400" /> Child's Name *
                        </label>
                        <input 
                          {...register("childName", { required: true })} 
                          className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                          placeholder="Child's Full Name"
                        />
                        {errors.childName && <span className="text-xs text-red-500">This field is required</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Child's Age *</label>
                        <input 
                          {...register("childAge", { required: true })} 
                          className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                          placeholder="e.g. 5 Years"
                        />
                        {errors.childAge && <span className="text-xs text-red-500">Required</span>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Gender *</label>
                        <select 
                          {...register("gender", { required: true })}
                          className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors bg-white"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        {errors.gender && <span className="text-xs text-red-500">Required</span>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-brand-navy border-b pb-2">Contact Details</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                          <Phone className="w-4 h-4 text-slate-400" /> Phone Number *
                        </label>
                        <input 
                          {...register("phone", { required: true })} 
                          type="tel"
                          className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                          placeholder="03XX XXXXXXX"
                        />
                        {errors.phone && <span className="text-xs text-red-500">This field is required</span>}
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                          <MessageSquare className="w-4 h-4 text-slate-400" /> WhatsApp Number
                        </label>
                        <input 
                          {...register("whatsapp")} 
                          type="tel"
                          className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-brand-navy border-b pb-2">Appointment Details</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-slate-400" /> Preferred Date *
                        </label>
                        <input 
                          {...register("date", { required: true })} 
                          type="date"
                          className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                        />
                        {errors.date && <span className="text-xs text-red-500">This field is required</span>}
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-slate-400" /> Preferred Time
                        </label>
                        <select 
                          {...register("time")}
                          className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors bg-white"
                        >
                          <option value="">Select Time Preference</option>
                          <option value="Morning">Morning</option>
                          <option value="Afternoon">Afternoon</option>
                          <option value="Evening">Evening</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Reason for Visit</label>
                      <textarea 
                        {...register("reason")} 
                        rows={3}
                        className="w-full p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors resize-none"
                        placeholder="Briefly describe the health concern..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="flex items-center h-5">
                        <input 
                          type="checkbox" 
                          {...register("consent", { required: true })}
                          className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue cursor-pointer"
                        />
                      </div>
                      <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                        I confirm that the information provided is correct.
                      </span>
                    </label>
                    {errors.consent && <span className="text-xs text-red-500 block ml-7">You must confirm to proceed</span>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center h-14 px-8 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-all uppercase tracking-widest"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Request Appointment'}
                  </button>
                </form>
              )}
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
