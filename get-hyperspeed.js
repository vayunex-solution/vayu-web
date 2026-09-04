const fs = require('fs');
fetch('https://raw.githubusercontent.com/DavidHDev/react-bits/main/public/r/Hyperspeed-JS-CSS.json')
  .then(r => r.json())
  .then(data => {
    if(!fs.existsSync('src/components/Hyperspeed')) fs.mkdirSync('src/components/Hyperspeed', { recursive: true });
    data.files.forEach(f => {
      fs.writeFileSync('src/components/Hyperspeed/' + f.path.split('/').pop(), f.content);
    });
    console.log("Successfully extracted Hyperspeed components!");
  });
