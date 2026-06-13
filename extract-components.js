import fs from 'fs';
import path from 'path';

const pagesDir = path.resolve('./src/pages');
const componentsDir = path.resolve('./src/components');

if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
}

// 1. Extract from Home.jsx
const homePath = path.join(pagesDir, 'Home.jsx');
const homeContent = fs.readFileSync(homePath, 'utf-8');

const headerMatch = homeContent.match(/<header[\s\S]*?<\/header>/);
const footerMatch = homeContent.match(/<footer[\s\S]*?<\/footer>/);

if (!headerMatch || !footerMatch) {
    console.error('Could not find header or footer in Home.jsx');
    process.exit(1);
}

const headerContent = headerMatch[0];
const footerContent = footerMatch[0];

// 2. Create Header.jsx and Footer.jsx
const headerComponentStr = `import React from 'react';

export default function Header() {
  return (
    <>
      ${headerContent}
    </>
  );
}
`;

const footerComponentStr = `import React from 'react';

export default function Footer() {
  return (
    <>
      ${footerContent}
    </>
  );
}
`;

fs.writeFileSync(path.join(componentsDir, 'Header.jsx'), headerComponentStr);
fs.writeFileSync(path.join(componentsDir, 'Footer.jsx'), footerComponentStr);
console.log('Created Header.jsx and Footer.jsx');

// 3. Update all pages
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace header and footer
    content = content.replace(/<header[\s\S]*?<\/header>/, '<Header />');
    content = content.replace(/<footer[\s\S]*?<\/footer>/, '<Footer />');
    
    // Add imports if not present
    if (!content.includes('import Header from')) {
        content = content.replace(
            "import React from 'react';", 
            "import React from 'react';\nimport Header from '../components/Header';\nimport Footer from '../components/Footer';"
        );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
console.log('Finished updating all pages.');
