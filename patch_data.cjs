const fs = require('fs');
let code = fs.readFileSync('src/data.ts', 'utf8');

code = code.replace(
  /"AI Shifa Children and Maternity Home, Okara, Pakistan"/g,
  '"Al Shifa Children and Maternity Home, Gamber, Pakistan"'
);
code = code.replace(
  /hero: ".*?",/g,
  'hero: "https://i.ibb.co/HLTg7YY6/Whats-App-Image-2026-08-10-at-7-40-21-AM.jpg",'
);

fs.writeFileSync('src/data.ts', code);
console.log('Update complete');
