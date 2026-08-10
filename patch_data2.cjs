const fs = require('fs');
let code = fs.readFileSync('src/data.ts', 'utf8');

code = code.replace(
  /hero: ".*?",/g,
  'hero: "https://i.ibb.co/Fkp4CNhp/Whats-App-Image-2026-08-10-at-9-22-02-AM.jpg",'
);

fs.writeFileSync('src/data.ts', code);
console.log('Update complete');
