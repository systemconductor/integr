# Link preview artwork

- `share-card.html` is the editable source for the 1200x630 sharing image. It uses the existing INTEGR logo and brand colors, without external fonts or image services.
- `../public/assets/integr-share-v1.png` is the exported image referenced by the homepage metadata.
- The sharing title, description, image alternative text, and Open Graph / Twitter Card tags live in `../src/pages/index.astro`.
- The production origin is configured in `../astro.config.mjs`. Metadata URLs are derived from that origin, including during local preview.

To regenerate the image after editing the artwork, run this from the repository root in PowerShell:

```powershell
@'
import { chromium } from 'playwright-core';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.goto(pathToFileURL(path.resolve('design/share-card.html')).href);
  await page.locator('img').evaluate(image => image.decode());
  await page.screenshot({ path: 'public/assets/integr-share-v1.png' });
} finally {
  await browser.close();
}
'@ | node --input-type=module
```

Local card preview: `http://localhost:4321/assets/integr-share-v1.png`.

The wide and compact mockups are saved locally in `../checkpoints/share-preview/preview.png`. They illustrate potential layouts; sharing platforms determine their final cropping and truncation.

The new image and metadata must be deployed to the public site before external apps can read them. Deployment and pushing require the user's approval. When replacing a previously deployed card, use a new image filename and update the metadata URL to distinguish the new asset. A new filename does not guarantee that every platform immediately refreshes its cached page preview.
