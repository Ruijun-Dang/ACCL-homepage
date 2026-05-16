const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  const stats = fs.statSync(filePath);
  console.log(`${file}: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
});
