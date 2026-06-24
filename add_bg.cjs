const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src/pages');
files.push('./src/components/Header.jsx');

let changed = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/style=\{\{maxWidth:\s*"150px"\}\}/g, 'style={{maxWidth: "150px", backgroundColor: "#1c1c1c", padding: "8px", borderRadius: "6px"}}');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated background in: ' + file);
    changed++;
  }
});
console.log('Total files updated with background: ' + changed);
