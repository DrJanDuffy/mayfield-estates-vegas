const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const images = [
  {
    name: 'logo.png',
    url: 'https://placehold.co/180x50/FFFFFF/000000.png?text=Mayfield+Estates'
  },
  {
    name: 'logo-white.png',
    url: 'https://placehold.co/180x50/000000/FFFFFF.png?text=Mayfield+Estates'
  },
  {
    name: 'hero-1.jpg',
    url: 'https://placehold.co/1280x720/123456/FFFFFF.jpg?text=Luxury+Desert+Estate'
  },
  {
    name: 'hero-2.jpg',
    url: 'https://placehold.co/1280x720/234567/FFFFFF.jpg?text=Modern+Penthouse'
  },
  {
    name: 'hero-3.jpg',
    url: 'https://placehold.co/1280x720/345678/FFFFFF.jpg?text=Golf+Course+Villa'
  },
  {
    name: 'property-1.jpg',
    url: 'https://placehold.co/600x400/456789/FFFFFF.jpg?text=Modern+Desert+Oasis'
  },
  {
    name: 'property-2.jpg',
    url: 'https://placehold.co/600x400/567890/FFFFFF.jpg?text=Luxury+High-Rise'
  },
  {
    name: 'property-3.jpg',
    url: 'https://placehold.co/600x400/678901/FFFFFF.jpg?text=Mediterranean+Villa'
  },
  {
    name: 'market-featured.jpg',
    url: 'https://placehold.co/800x600/789012/FFFFFF.jpg?text=Market+Update'
  }
];

async function downloadAllImages() {
  const publicDir = path.join(process.cwd(), 'public');
  
  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  console.log('Downloading images...');
  
  for (const image of images) {
    const filepath = path.join(publicDir, image.name);
    try {
      await downloadImage(image.url, filepath);
      console.log(`Downloaded: ${image.name}`);
    } catch (error) {
      console.error(`Error downloading ${image.name}:`, error.message);
    }
  }

  console.log('All images downloaded successfully!');
}

downloadAllImages().catch(console.error); 