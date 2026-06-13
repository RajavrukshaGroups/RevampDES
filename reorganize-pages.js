import fs from 'fs';
import path from 'path';

const pagesDir = path.resolve('./src/pages');

const mapping = {
  'Home.jsx': 'Home',
  'HomeBrandingAgency.jsx': 'Home',
  'HomeSeo.jsx': 'Home',
  'HomeSeoMarketing.jsx': 'Home',
  'Index.jsx': 'Home',
  'BlogDetail.jsx': 'Blog',
  'BlogGird.jsx': 'Blog',
  'BlogListing.jsx': 'Blog',
  'Portfolio1.jsx': 'Portfolio',
  'Portfolio2.jsx': 'Portfolio',
  'PortfolioDetails.jsx': 'Portfolio',
  'Services1.jsx': 'Services',
  'Services2.jsx': 'Services',
  'ServiceDetails.jsx': 'Services',
  'AboutUs.jsx': 'Company',
  'Contact.jsx': 'Company',
  'Faqs.jsx': 'Company',
  'OurTeam.jsx': 'Company',
  'PricingPlan.jsx': 'Company',
  'TeamDetails.jsx': 'Company',
  'Page404.jsx': 'Misc',
};

Object.values(mapping).forEach(folder => {
  const dirPath = path.join(pagesDir, folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

Object.entries(mapping).forEach(([file, folder]) => {
  const oldPath = path.join(pagesDir, file);
  const newPath = path.join(pagesDir, folder, file);
  
  if (fs.existsSync(oldPath)) {
    let content = fs.readFileSync(oldPath, 'utf-8');
    
    // Update component imports to go up one more directory
    content = content.replace(/from '\.\.\/components\//g, "from '../../components/");
    
    fs.writeFileSync(newPath, content);
    fs.unlinkSync(oldPath);
    console.log(`Moved ${file} to ${folder}/`);
  }
});

console.log('Done reorganizing files.');
