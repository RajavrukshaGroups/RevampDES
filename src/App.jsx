// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import AboutUs from './pages/Company/AboutUs';
// import BlogDetail from './pages/Blog/BlogDetail';
// import BlogGird from './pages/Blog/BlogGird';
// import BlogListing from './pages/Blog/BlogListing';
// import Contact from './pages/Company/Contact';
// import Faqs from './pages/Company/Faqs';
// import HomeBrandingAgency from './pages/Home/HomeBrandingAgency';
// import HomeSeo from './pages/Home/HomeSeo';
// import HomeSeoMarketing from './pages/Home/HomeSeoMarketing';
// import Index from './pages/Home/Index';
// import OurTeam from './pages/Company/OurTeam';
// import Page404 from './pages/Misc/Page404';
// import Portfolio1 from './pages/Portfolio/Portfolio1';
// import Portfolio2 from './pages/Portfolio/Portfolio2';
// import PortfolioDetails from './pages/Portfolio/PortfolioDetails';
// import PricingPlan from './pages/Company/PricingPlan';
// import ServiceDetails from './pages/Services/ServiceDetails';
// import Services1 from './pages/Services/Services1';
// import Services2 from './pages/Services/Services2';
// import TeamDetails from './pages/Company/TeamDetails';
// import SEO from './pages/Services/SEO';
// import SocialMediaMarketing from './pages/Services/SocialMediaMarketing';
// import WebDevelopment from './pages/Services/WebDevelopment';
// import GraphicDesign from './pages/Services/GraphicDesign';
// import LeadGeneration from './pages/Services/LeadGeneration';
// import WhatsappAutomation from './pages/Services/WhatsappAutomation';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/blog-detail" element={<BlogDetail />} />
//         <Route path="/blog-grid" element={<BlogGird />} />
//         <Route path="/blog-listing" element={<BlogListing />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/faqs" element={<Faqs />} />
//         <Route path="/home-branding-agency" element={<HomeBrandingAgency />} />
//         <Route path="/home-seo" element={<HomeSeo />} />
//         <Route path="/home-seo-marketing" element={<HomeSeoMarketing />} />
//         <Route path="/index" element={<Index />} />
//         <Route path="/our-team" element={<OurTeam />} />
//         <Route path="/portfolio-1" element={<Portfolio1 />} />
//         <Route path="/portfolio-2" element={<Portfolio2 />} />
//         <Route path="/portfolio-details" element={<PortfolioDetails />} />
//         <Route path="/pricing-plan" element={<PricingPlan />} />
//         <Route path="/service-details" element={<ServiceDetails />} />

//         <Route path="/services/Digital-marketing-agency-in-bangalore" element={<Services1 />} />
//         <Route path="/services-2" element={<Services2 />} />
//         <Route path="/team-details" element={<TeamDetails />} />
//         <Route path="/services-seo" element={<SEO />} />
//         <Route path="/services-social-media-marketing" element={<SocialMediaMarketing />} />
//         <Route path="/services-web-development" element={<WebDevelopment />} />
//         <Route path="/services-graphic-design" element={<GraphicDesign />} />
//         <Route path="/services-lead-generation" element={<LeadGeneration />} />
//         <Route path="/services-whatsapp-automation" element={<WhatsappAutomation />} />
//         <Route path="*" element={<Page404 />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/Company/AboutUs';
import BlogDetail from './pages/Blog/BlogDetail';
import BlogGird from './pages/Blog/BlogGird';
import BlogListing from './pages/Blog/BlogListing';
import Contact from './pages/Company/Contact';
import Faqs from './pages/Company/Faqs';
import HomeBrandingAgency from './pages/Home/HomeBrandingAgency';
import HomeSeo from './pages/Home/HomeSeo';
import HomeSeoMarketing from './pages/Home/HomeSeoMarketing';
import Index from './pages/Home/Index';
import OurTeam from './pages/Company/OurTeam';
import Page404 from './pages/Misc/Page404';
import Portfolio1 from './pages/Portfolio/Portfolio1';
import Portfolio2 from './pages/Portfolio/Portfolio2';
import PortfolioDetails from './pages/Portfolio/PortfolioDetails';
import PricingPlan from './pages/Company/PricingPlan';
import ServiceDetails from './pages/Services/ServiceDetails';
import Services1 from './pages/Services/Services1';
import Services2 from './pages/Services/Services2';
import TeamDetails from './pages/Company/TeamDetails';
import SEO from './pages/Services/SEO';
import SocialMediaMarketing from './pages/Services/SocialMediaMarketing';
import WebDevelopment from './pages/Services/WebDevelopment';
import GraphicDesign from './pages/Services/GraphicDesign';
import LeadGeneration from './pages/Services/LeadGeneration';
import WhatsappAutomation from './pages/Services/WhatsappAutomation';
import GraphicDesignServiceDetails from './pages/Services/ServiceDetails/GraphicDesignServiceDetails'
import DigitalMarketingServiceDetails from './pages/Services/ServiceDetails/DigitalMarketingServiceDetails';
import SEOServiceDetails from './pages/Services/ServiceDetails/SEOServiceDetails';
import SocialMediaMarketingServiceDetails from './pages/Services/ServiceDetails/SocialMediaMarketingServiceDetails';
import WebDevelopmentServiceDetails from './pages/Services/ServiceDetails/WebDevelopmentServiceDetails';
import LeadGenerationServiceDetails from './pages/Services/ServiceDetails/LeadGenerationServiceDetails';
import WhatsappAutomationServiceDetails from './pages/Services/ServiceDetails/WhatsappAutomationServiceDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/blog-grid" element={<BlogGird />} />
        <Route path="/blog-listing" element={<BlogListing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/home-branding-agency" element={<HomeBrandingAgency />} />
        <Route path="/home-seo" element={<HomeSeo />} />
        <Route path="/home-seo-marketing" element={<HomeSeoMarketing />} />
        <Route path="/index" element={<Index />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/portfolio-1" element={<Portfolio1 />} />
        <Route path="/portfolio-2" element={<Portfolio2 />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/pricing-plan" element={<PricingPlan />} />
        <Route path="/service-details" element={<ServiceDetails />} />

        <Route path="/services/Digital-marketing-agency-in-bangalore" element={<Services1 />} />
        <Route path="/services-2" element={<Services2 />} />
        <Route path="/team-details" element={<TeamDetails />} />
        
        <Route path="/services/seo-services-in-bangalore" element={<SEO />} />
        <Route path="/services/social-media-marketing-company-bangalore" element={<SocialMediaMarketing />} />
        <Route path="/services/web-development-company-bangalore" element={<WebDevelopment />} />
        <Route path="/services/graphic-design-company-bangalore" element={<GraphicDesign />} />
        <Route path="/services/lead-generation-companies-in-bangalore" element={<LeadGeneration />} />
        <Route path="/services/whatsapp-automation-AI-providers-india" element={<WhatsappAutomation />} />


        <Route path="/graphic-design-service-details" element={<GraphicDesignServiceDetails />} />
        <Route path="/digital-marketing-service-details" element={<DigitalMarketingServiceDetails />} />
        <Route path="/seo-service-details" element={<SEOServiceDetails />} />
        <Route path="/social-media-marketing-service-details" element={<SocialMediaMarketingServiceDetails />} />
        <Route path="/web-development-service-details" element={<WebDevelopmentServiceDetails />} />
        <Route path="/lead-generation-service-details" element={<LeadGenerationServiceDetails />} />
        <Route path="/whatsapp-automation-service-details" element={<WhatsappAutomationServiceDetails />} />
        

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
