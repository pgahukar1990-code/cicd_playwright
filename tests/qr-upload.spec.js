const { test, expect } = require('@playwright/test');
const path = require('path');

test('Upload QR to webqr.com', async ({ page }) => {
  const qrPath = path.resolve(__dirname, '../qr.png');

  await page.goto('https://webqr.com/');

  // Click upload icon
  await page.click('#mainbody > table td:nth-child(2) img');

  // Upload QR file
  await page.setInputFiles('input[type=file]', qrPath);

  // The result actually appears in #result (not #qrresult)
  const result = page.locator('#result');

  // Wait up to 20s for decoded text
  await expect(result).toHaveText(/.+/, { timeout: 20000 });

  console.log('Decoded QR:', await result.innerText());
});
