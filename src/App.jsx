import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BlogDetail from './pages/BlogDetail';
import BlogGird from './pages/BlogGird';
import BlogListing from './pages/BlogListing';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import HomeBrandingAgency from './pages/HomeBrandingAgency';
import HomeSeo from './pages/HomeSeo';
import HomeSeoMarketing from './pages/HomeSeoMarketing';
import Index from './pages/Index';
import OurTeam from './pages/OurTeam';
import Page404 from './pages/Page404';
import Portfolio1 from './pages/Portfolio1';
import Portfolio2 from './pages/Portfolio2';
import PortfolioDetails from './pages/PortfolioDetails';
import PricingPlan from './pages/PricingPlan';
import ServiceDetails from './pages/ServiceDetails';
import Services1 from './pages/Services1';
import Services2 from './pages/Services2';
import TeamDetails from './pages/TeamDetails';

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
        <Route path="/services-1" element={<Services1 />} />
        <Route path="/services-2" element={<Services2 />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
