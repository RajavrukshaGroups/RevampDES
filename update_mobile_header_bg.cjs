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

let changed = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // 1. Remove the inline background styles from the logo img
  content = content.replace(/style=\{\{maxWidth:\s*"150px",\s*backgroundColor:\s*"#1c1c1c",\s*padding:\s*"8px",\s*borderRadius:\s*"6px"\}\}/g, 'style={{maxWidth: "150px"}}');

  // 2. Add background color to canvas-header
  content = content.replace(/<div className="canvas-header">/g, '<div className="canvas-header" style={{backgroundColor: "#1c1c1c"}}>');

  // 3. Add white color to the close icon
  content = content.replace(/className="icon icon-close"(\s*)data-bs-dismiss="offcanvas"/g, 'className="icon icon-close" style={{color: "white"}} data-bs-dismiss="offcanvas"');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated header styling in: ' + file);
    changed++;
  }
});
console.log('Total files updated with new header styling: ' + changed);
