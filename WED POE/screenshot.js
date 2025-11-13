const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const pages = [
  'Home page.html',
  'About page.html',
  'Services.html',
  'Sponser page.html',
  'Enquiries.html',
  'Contact page.html',
  'Donate.html'
];

const sizes = [
  { name: 'desktop', width: 1366, height: 768 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 }
];

(async () => {
  const outDir = path.resolve(__dirname, 'screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const file of pages) {
    const fileUrl = 'file://' + path.resolve(__dirname, file);
    for (const s of sizes) {
      await page.setViewport({ width: s.width, height: s.height });
      await page.goto(fileUrl, { waitUntil: 'networkidle2' });
      const nameSafe = file.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_.]/g, '');
      const out = path.join(outDir, `${nameSafe}-${s.name}.png`);
      await page.screenshot({ path: out, fullPage: true });
      console.log('Saved', out);
    }
  }

  await browser.close();
})();
