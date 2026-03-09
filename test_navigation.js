
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'screenshot_before_start.png' });
  await page.click('#startGameBtn');
  await page.waitForSelector('#gameCanvas');
  await page.screenshot({ path: 'screenshot_after_start.png' });
  await browser.close();
})();
