const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src/pages');
files.push(path.join('./src/components', 'Header.jsx'));

let changed = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('logo-mobi-1.svg')) {
    const depth = file.split(path.sep).length - 2; // './src/pages/Home/Home.jsx' -> depth is 3. Actually path.sep on Windows is '\\'. 
    // Let's use relative path calculation properly.
    const fileDir = path.dirname(file);
    const targetPath = path.resolve(__dirname, 'src', 'assets', 'images', 'header', 'DES_logo_white.png');
    let relPath = path.relative(path.resolve(__dirname, fileDir), targetPath).replace(/\\/g, '/');

    if (!content.includes('DESLOGO')) {
      content = content.replace(/import React[^;]*;?\n/, match => match + 'import DESLOGO from "' + relPath + '";\n');
      if (!content.includes('import DESLOGO')) {
        content = 'import DESLOGO from "' + relPath + '";\n' + content;
      }
    }

    content = content.replace(/<img[^>]*logo-mobi-1\.svg[^>]*\/>/g, '<img src={DESLOGO} alt="Digital Elite Service" className="des-logo" style={{maxWidth: "150px"}} />');

    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
    changed++;
  }
});
console.log('Total files updated: ' + changed);
