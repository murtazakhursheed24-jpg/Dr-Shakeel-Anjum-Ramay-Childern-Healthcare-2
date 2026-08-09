import { Calendar, Send, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    num: "01",
    title: "Choose Your Date & Time",
    description: "Select a convenient time for your child's visit.",
    icon: Calendar
  },
  {
    num: "02",
    title: "Submit Appointment Request",
    description: "Provide basic details through our secure form.",
    icon: Send
  },
  {
    num: "03",
    title: "Clinic Confirms Your Appointment",
    description: "Our staff will quickly verify and confirm your slot.",
    icon: CheckCircle
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy text-heading mb-4">
            How Appointment Booking Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've made it simple to schedule your visit with Dr. Shakeel Anjum Ramay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -z-10 -translate-y-1/2"></div>
          
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col items-center text-center group bg-white">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-brand-teal mb-6 group-hover:border-brand-teal group-hover:bg-teal-50 transition-colors shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="absolute top-0 right-[calc(50%-2rem)] text-6xl font-extrabold text-slate-50 opacity-50 pointer-events-none select-none">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
