import fs from 'fs';
import path from 'path';

const pagesDir = path.resolve('./src/pages');
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace href="index.html" with href="/"
    content = content.replace(/href="index\.html"/g, 'href="/"');
    
    // Replace href="something.html" with href="/something"
    content = content.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
    
    fs.writeFileSync(filePath, content);
});
console.log('Fixed links in all pages.');
