import fs from 'fs';
import path from 'path';

const htmlPath = path.resolve('../seonex/index.html');
const html = fs.readFileSync(htmlPath, 'utf-8');

// Basic HTML to JSX conversion
let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    // Remove comments completely to avoid JSX parsing issues
    .replace(/<!--(.*?)-->/gs, '')
    // Self close tags
    .replace(/<img([^>]*?)>/g, (match, p1) => {
        if (match.endsWith('/>')) return match;
        return `<img${p1} />`;
    })
    .replace(/<br([^>]*?)>/g, (match, p1) => {
        if (match.endsWith('/>')) return match;
        return `<br${p1} />`;
    })
    .replace(/<input([^>]*?)>/g, (match, p1) => {
        if (match.endsWith('/>')) return match;
        return `<input${p1} />`;
    })
    .replace(/<hr([^>]*?)>/g, (match, p1) => {
        if (match.endsWith('/>')) return match;
        return `<hr${p1} />`;
    });
// Removed <path> self closing as it has </path>

// Fix style attributes
jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(style => {
        if (!style.trim()) return;
        const [key, ...valueParts] = style.split(':');
        if (key) {
            const value = valueParts.join(':');
            const camelKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[camelKey] = value.trim();
        }
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

// Fix svg camelCase attributes
jsx = jsx.replace(/xmlns:xlink/g, 'xmlnsXlink');
jsx = jsx.replace(/xml:space/g, 'xmlSpace');
jsx = jsx.replace(/stroke-dashoffset/g, 'strokeDashoffset');
jsx = jsx.replace(/stroke-dasharray/g, 'strokeDasharray');
jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
jsx = jsx.replace(/viewBox/gi, 'viewBox');

// Extract body content exactly between <body class="counter-scroll"> and </body>
const bodyMatch = jsx.match(/<body[^>]*>(.*?)<\/body>/s);
let bodyContent = '';
if (bodyMatch) {
    bodyContent = bodyMatch[1].trim();
} else {
    console.log("Could not find body content properly");
}

// Ensure no script tags are included inside the body JSX
bodyContent = bodyContent.replace(/<script.*?<\/script>/gs, '');

const componentStr = `import React from 'react';

export default function Home() {
  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync(path.resolve('./src/pages/Home.jsx'), componentStr);
console.log('Conversion done, saved to src/pages/Home.jsx');
