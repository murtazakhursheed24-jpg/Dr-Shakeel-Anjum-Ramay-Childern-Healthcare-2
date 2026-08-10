const fs = require('fs');
let code = fs.readFileSync('src/components/About.tsx', 'utf8');

const replacement = `            <div className="mt-6">
              <a href="#appointment" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-all uppercase tracking-widest">
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </a>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Watch Introduction</h3>
            <p className="text-slate-600 mt-2">A message from Dr. Shakeel Anjum Ramay</p>
          </div>
          <div className="relative aspect-video bg-blue-900 rounded-xl overflow-hidden shadow-lg border border-slate-200 group">
            <iframe 
              src="https://streamable.com/e/9z370l?autoplay=0"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen"
              title="Introduction to Dr. Shakeel Anjum Ramay"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`;

code = code.replace(/            <div className="mt-6">[\s\S]*?<\/section>\s*?}\s*?$/, replacement);
fs.writeFileSync('src/components/About.tsx', code);
console.log('done');
