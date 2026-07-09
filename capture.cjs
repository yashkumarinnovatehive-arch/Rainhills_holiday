const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1536, height: 900 });
  await page.goto('https://rivana-villa.vercel.app/', { waitUntil: 'networkidle2' });
  
  // Dump HTML
  const html = await page.content();
  fs.writeFileSync('rivana_dump.html', html);
  
  // Take screenshot
  await page.screenshot({ path: 'rivana.png', fullPage: true });
  
  await browser.close();
  console.log('Done');
})();
