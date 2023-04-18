const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://stackoverflow.com/questions/46938073/nodemon-internal-watch-failed-error');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();