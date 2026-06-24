const fs = require('fs');

const file = 'src/pages/Services/ServiceDetails/DigitalMarketingServiceDetails.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Grid replacements
content = content.replace(/className="col-lg-4"/g, 'className="col-12 col-md-6 col-lg-4"');
content = content.replace(/className="col-lg-5"/g, 'className="col-12 col-md-6 col-lg-5"');
content = content.replace(/className="col-lg-6"/g, 'className="col-12 col-md-6 col-lg-6"');
content = content.replace(/className="col-lg-8"/g, 'className="col-12 col-md-6 col-lg-8"');

// specific replacements where col-12 already exists
content = content.replace(/className="col-12 col-lg-7"/g, 'className="col-12 col-md-6 col-lg-7"');
content = content.replace(/className="col-12 col-lg-5 rotate-in"/g, 'className="col-12 col-md-6 col-lg-5 rotate-in"');

// 2. Flex-wrap replacements for common d-flex classes that need wrapping
const flexClassesToWrap = [
  'list-process-item d-flex justify-content-between mb-70'
];

flexClassesToWrap.forEach(cls => {
  // If it already has flex-wrap, don't add it again. 
  // We'll replace the exact string with the exact string + flex-wrap
  const regex = new RegExp(`className="${cls}(?!.*flex-wrap)`, 'g');
  content = content.replace(regex, `className="${cls} flex-wrap`);
});

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated DigitalMarketingServiceDetails.jsx to be responsive.');
