const fs = require('fs');
let code = fs.readFileSync('src/data.ts', 'utf8');

code = code.replace(
  /"The clinic is located at AI Shifa Children and Maternity Home, Okara, Pakistan."/g,
  '"The clinic is located at Al Shifa Children and Maternity Home, Gamber, Pakistan."'
);
code = code.replace(
  /"A brief look at our clinic facilities in Okara."/g,
  '"A brief look at our clinic facilities."'
);
fs.writeFileSync('src/data.ts', code);
console.log('Done');
