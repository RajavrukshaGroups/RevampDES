import fs from 'fs';
import path from 'path';

const sourceDir = path.resolve('../seonex');
const destDir = path.resolve('./src/pages');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Helper to convert filename to PascalCase component name
function toPascalCase(str) {
    return str
        .replace(/\.html$/, '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.html'));

files.forEach(file => {
    const htmlPath = path.join(sourceDir, file);
    const html = fs.readFileSync(htmlPath, 'utf-8');

    let jsx = html
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--(.*?)-->/gs, '')
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

    jsx = jsx.replace(/xmlns:xlink/g, 'xmlnsXlink');
    jsx = jsx.replace(/xml:space/g, 'xmlSpace');
    jsx = jsx.replace(/stroke-dashoffset/g, 'strokeDashoffset');
    jsx = jsx.replace(/stroke-dasharray/g, 'strokeDasharray');
    jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
    jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
    jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
    jsx = jsx.replace(/viewBox/gi, 'viewBox');
    jsx = jsx.replace(/href="index\.html"/g, 'href="/"');
    jsx = jsx.replace(/href="([^"]+)\.html"/g, 'href="/$1"');

    const bodyMatch = jsx.match(/<body[^>]*>(.*?)<\/body>/s);
    let bodyContent = '';
    if (bodyMatch) {
        bodyContent = bodyMatch[1].trim();
    } else {
        console.log(`Could not find body content for ${file}`);
        return;
    }

    bodyContent = bodyContent.replace(/<script.*?<\/script>/gs, '');

    const componentName = toPascalCase(file);
    // 404 is an invalid component name, so prefix with Page
    const finalComponentName = /^[0-9]/.test(componentName) ? `Page${componentName}` : componentName;

    const componentStr = `import React from 'react';

export default function ${finalComponentName}() {
  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

    const destPath = path.join(destDir, `${finalComponentName}.jsx`);
    fs.writeFileSync(destPath, componentStr);
    console.log(`Converted ${file} -> src/pages/${finalComponentName}.jsx`);
});
