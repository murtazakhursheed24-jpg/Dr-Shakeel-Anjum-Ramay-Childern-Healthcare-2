const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

code = code.replace(
  /className="h-\[90%\] w-auto object-contain z-10"/,
  'className="absolute inset-0 w-full h-full object-cover object-[70%_20%] lg:object-center z-10"'
);

fs.writeFileSync('src/components/Hero.tsx', code);
console.log('Update Hero image classes complete');
