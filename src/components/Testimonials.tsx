import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-blue-600 bg-blue-100 border border-blue-200 rounded-full w-max">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-slate-600">
            Experiences from families who have trusted us with their children's healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-8 rounded-lg bg-slate-50 border border-slate-200 flex flex-col relative">
              <Quote className="w-8 h-8 text-slate-200 absolute top-8 right-8" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-slate-300 text-slate-300" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                "Verified patient review will appear here once submitted by families who have visited the clinic."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Patient Family</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Pending Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
