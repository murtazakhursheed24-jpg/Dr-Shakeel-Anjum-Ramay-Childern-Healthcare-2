const fs = require('fs');
let code = fs.readFileSync('src/components/Location.tsx', 'utf8');

code = code.replace(
  /<h4 className="font-bold text-sm text-slate-900 mb-1">Clinic Address<\/h4>\s*<p className="text-slate-600 text-sm">\s*AI Shifa Children and Maternity Home<br \/>\s*Okara, Pakistan\s*<\/p>/,
  `<h4 className="font-bold text-sm text-slate-900 mb-1">CLINIC LOCATION</h4>
                    <p className="text-slate-600 text-sm">
                      Al Shifa Children and Maternity Home<br />
                      Gamber, Pakistan
                    </p>`
);

fs.writeFileSync('src/components/Location.tsx', code);
console.log('Update Location complete');
