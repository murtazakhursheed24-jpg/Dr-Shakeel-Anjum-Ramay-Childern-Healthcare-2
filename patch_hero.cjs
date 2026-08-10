const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

code = code.replace(
  /"text-\[11px\] text-slate-600 leading-tight mb-3">AI Shifa Children and Maternity Home, Okara. Serving the community for 2 decades.<\/p>/g,
  '"text-[11px] text-slate-600 leading-tight mb-3">Al Shifa Children and Maternity Home, Gamber. Serving the community for 2 decades.</p>'
);

fs.writeFileSync('src/components/Hero.tsx', code);
console.log('Update Hero text complete');
