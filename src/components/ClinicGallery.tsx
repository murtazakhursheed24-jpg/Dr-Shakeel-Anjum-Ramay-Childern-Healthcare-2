import { IMAGES } from '../data';

export function ClinicGallery() {
  const remainingImages = IMAGES.gallery.slice(4);

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-blue-600 bg-blue-100 border border-blue-200 rounded-full w-max">
            CLINIC GALLERY
          </div>
          <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-4">
            Our Clinic Environment
          </h2>
          <p className="text-lg text-slate-600">
            A welcoming, safe, and child-friendly space designed for professional medical care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {remainingImages.map((src, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-lg bg-slate-100 group border border-slate-200">
              <img 
                src={src} 
                alt="Clinic visual" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
