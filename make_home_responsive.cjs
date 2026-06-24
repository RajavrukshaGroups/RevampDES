const fs = require('fs');

const file = 'src/pages/Home/Home.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Grid replacements
content = content.replace(/className="col-lg-4"/g, 'className="col-12 col-md-6 col-lg-4"');
content = content.replace(/className="col-lg-5"/g, 'className="col-12 col-md-6 col-lg-5"');
content = content.replace(/className="col-lg-6"/g, 'className="col-12 col-md-6 col-lg-6"');
content = content.replace(/className="col-lg-8"/g, 'className="col-12 col-md-6 col-lg-8"');

// 2. Flex-wrap replacements for common d-flex classes that need wrapping
const flexClassesToWrap = [
  'bottom-hero-right d-flex g-10',
  'list-btn-bottom d-flex g-10',
  'list-btn-social d-flex g-10',
  'left d-flex align-items-center g-70',
  'benefit-item d-flex align-items-center g-10',
  'user-blog d-flex align-items-center g-15',
  'h5 fw-6 marquee-item d-flex align-items-center g-20',
  'list-img d-flex align-items-center g-20'
];

flexClassesToWrap.forEach(cls => {
  // If it already has flex-wrap, don't add it again. 
  // We'll replace the exact string with the exact string + flex-wrap
  const regex = new RegExp(`className="${cls}(?!.*flex-wrap)`, 'g');
  content = content.replace(regex, `className="${cls} flex-wrap`);
});

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated Home.jsx to be responsive.');
