const fs = require('fs');
const path = require('path');

// Next.js standalone server listens on localhost by default.
// We must bind to 0.0.0.0 so that PaaS providers (like Koyeb, Render, Railway) can route traffic to it.
process.env.HOSTNAME = '0.0.0.0';
process.env.PORT = process.env.PORT || 3000;

const standaloneDir = path.join(__dirname, '.next', 'standalone');

// Helper to copy directories recursively
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

// Next.js standalone requires 'public' and '.next/static' to be inside the standalone directory
console.log('Copying static assets to standalone directory...');
copyDir(path.join(__dirname, 'public'), path.join(standaloneDir, 'public'));
copyDir(path.join(__dirname, '.next', 'static'), path.join(standaloneDir, '.next', 'static'));

// Start the server
console.log(`Starting Next.js standalone server on ${process.env.HOSTNAME}:${process.env.PORT}...`);
require(path.join(standaloneDir, 'server.js'));
