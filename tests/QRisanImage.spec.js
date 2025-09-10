// tests/qr-image-decode.spec.js
const { test, expect } = require('@playwright/test');
const QRCode = require('qrcode-reader');
const Jimp = require('jimp').Jimp; 

// Jimp is a pure JavaScript image processing library in Node.js. 
// In my Playwright tests, I used it to read QR images and convert them into a bitmap format. 
// That bitmap was then passed to qrcode-reader to decode the text behind the QR. 
// Essentially, Jimp acts as the bridge between the raw image and the QR decoding process.

// bitmap refers to the raw pixel data (RGBA buffer + width + height).
//  It’s not a .bmp file, but a way to represent an image in memory so that libraries like qrcode-reader can process the pixels directly to decode the QR code.

test('Decode QR from image', async ({ page }) => {
  // Go to a site with QR image
  await page.goto('https://api.qrserver.com/v1/create-qr-code/?data=PlaywrightRocks');

  // Grab the QR image
  const qrImage = page.locator('img');
  const qrBuffer = await qrImage.screenshot();

  // Decode QR
  const image = await Jimp.read(qrBuffer);
  const qr = new QRCode();

  const decodedText = await new Promise((resolve, reject) => {
    qr.callback = (err, value) => (err ? reject(err) : resolve(value.result));
    qr.decode(image.bitmap);
  });

  console.log('Decoded QR:', decodedText);
  expect(decodedText).toContain('PlaywrightRocks');
});
