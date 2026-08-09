const https = require('https');

function resolve(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta property="og:image" content="([^"]+)"/);
        if (match) {
          resolve(match[1]);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const urls = [
    'https://ibb.co/Y7p2LC7g',
    'https://ibb.co/dwHwfbSX'
  ];
  const results = {};
  for (const url of urls) {
    results[url] = await resolve(url);
  }
  console.log(JSON.stringify(results, null, 2));
}

main();
