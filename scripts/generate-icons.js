const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64, 96, 128, 192, 256, 384, 512];
const sourceFile = path.join(__dirname, '../public/icons/icon.svg');
const outputDir = path.join(__dirname, '../public/icons');

// Assicurati che la directory di output esista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Genera le icone in diverse dimensioni
sizes.forEach(size => {
  sharp(sourceFile)
    .resize(size, size)
    .png()
    .toFile(path.join(outputDir, `icon-${size}x${size}.png`))
    .then(() => console.log(`Generated ${size}x${size} icon`))
    .catch(err => console.error(`Error generating ${size}x${size} icon:`, err));
});

// Genera il favicon.ico
sharp(sourceFile)
  .resize(32, 32)
  .toFile(path.join(__dirname, '../public/favicon.ico'))
  .then(() => console.log('Generated favicon.ico'))
  .catch(err => console.error('Error generating favicon.ico:', err));

// Genera l'apple-touch-icon
sharp(sourceFile)
  .resize(180, 180)
  .png()
  .toFile(path.join(__dirname, '../public/apple-touch-icon.png'))
  .then(() => console.log('Generated apple-touch-icon.png'))
  .catch(err => console.error('Error generating apple-touch-icon.png:', err)); 