const https = require('https');

const urls = [
  'https://ibb.co/nN6FW64H',
  'https://ibb.co/JjDF7qSc',
  'https://ibb.co/GQKqcqf4',
  'https://ibb.co/JRZp4F4p',
  'https://ibb.co/s9c4BMWV',
  'https://ibb.co/gMTyTsQF',
  'https://ibb.co/Kj7DYDGr',
  'https://ibb.co/NgjLHsp6',
  'https://ibb.co/8DjgzY84',
  'https://ibb.co/Z1cPm5Wy',
  'https://ibb.co/s0Yqh3V'
];

async function resolve(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta property="og:image" content="([^"]+)"/);
        if (match) {
          resolve({ url, direct: match[1] });
        } else {
          resolve({ url, direct: null });
        }
      });
    }).on('error', reject);
  });
}

Promise.all(urls.map(resolve)).then(results => {
  console.log(JSON.stringify(results, null, 2));
});
