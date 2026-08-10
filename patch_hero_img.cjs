const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

code = code.replace(
  /<img\s+src={IMAGES\.hero}\s+alt={`Portrait of \${DOCTOR_INFO\.name}`}\s+className="h-\[90%\] w-auto object-contain z-10"\s+fetchPriority="high"\s+\/>/g,
  `<motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            src={IMAGES.hero} 
            alt={\`Portrait of \${DOCTOR_INFO.name}\`} 
            className="h-[90%] w-auto object-contain z-10"
            fetchPriority="high"
          />`
);

fs.writeFileSync('src/components/Hero.tsx', code);
console.log('Update Hero image complete');
