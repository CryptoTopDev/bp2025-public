const obfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const buildDir = path.resolve('build', 'static', 'js');

// Read all files in the build folder
fs.readdirSync(buildDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const filePath = path.join(buildDir, file);
    const sourceCode = fs.readFileSync(filePath, 'utf-8');

    const obfuscatedCode = obfuscator.obfuscate(sourceCode, {
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      stringArray: true,
      stringArrayEncoding: ['base64'], // Encode strings for extra security
    }).getObfuscatedCode();

    fs.writeFileSync(filePath, obfuscatedCode, 'utf-8');
    console.log(`Obfuscated: ${file}`);
  }
});
