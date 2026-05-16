const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimizeImages() {
  const publicDir = path.join(__dirname, 'public');
  
  // compress profile.jpg
  const profilePath = path.join(publicDir, 'profile.jpg');
  if (fs.existsSync(profilePath)) {
    console.log('optimizing profile.jpg');
    const outPath = path.join(publicDir, 'profile_opt.jpg');
    await sharp(profilePath).resize(800).jpeg({ quality: 80 }).toFile(outPath);
    fs.renameSync(outPath, profilePath);
  }

  // compress home_banner.jpg
  const bannerPath = path.join(publicDir, 'home_banner.jpg');
  if (fs.existsSync(bannerPath)) {
    console.log('optimizing home_banner.jpg');
    const outPath = path.join(publicDir, 'home_opt.jpg');
    await sharp(bannerPath).resize(1920).jpeg({ quality: 75 }).toFile(outPath);
    fs.renameSync(outPath, bannerPath);
  }

  // compress images?
  const p2 = path.join(publicDir, 'Picture2.png');
  if (fs.existsSync(p2)) {
    console.log('optimizing Picture2.png');
    const outPath = path.join(publicDir, 'p2_opt.png');
    await sharp(p2).png({ quality: 80 }).toFile(outPath);
    fs.renameSync(outPath, p2);
  }
  
  const p3 = path.join(publicDir, 'Picture3.png');
  if (fs.existsSync(p3)) {
    console.log('optimizing Picture3.png');
    const outPath = path.join(publicDir, 'p3_opt.png');
    await sharp(p3).png({ quality: 80 }).toFile(outPath);
    fs.renameSync(outPath, p3);
  }
}

optimizeImages().then(() => console.log('Done optimizing jpg and png images.')).catch(console.error);
