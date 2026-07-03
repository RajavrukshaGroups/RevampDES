import DESLOGO from "../../../assets/images/header/DES_logo_white.png";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import "./StylesForPortfolioDetails.css"
import { 
  TrendingUp, 
  Search, 
  Rocket, 
  Users, 
  Globe, 
  BarChart3, 
  CheckCircle,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

import WebAppImage2 from "../../../assets/images/portfolio/portfolioDetailsImages/seo/seo-details-img-2.jpg";
import WebAppImage3 from "../../../assets/images/portfolio/portfolioDetailsImages/seo/seo-details-img-3.jpg";
import WebAppImage1 from "../../../assets/images/portfolio/portfolioDetailsImages/seo/seo-details-img-1.jpg";
import GrowthImage from  "../../../assets/images/portfolio/portfolioDetailsImages/seo/seo-details-img-4.jpg";

// Import portfolio images
const Portfolio1 = WebAppImage1;
import Portfolio2 from '../../../assets/images/portfolio/portfolioDetailsImages/seo/seo-img-2.jpg'
import Portfolio3 from '../../../assets/images/portfolio/portfolioDetailsImages/seo/seo-img-3.jpg'
import Portfolio4 from '../../../assets/images/portfolio/portfolioDetailsImages/seo/seo-img-4.jpg'
import Portfolio5 from '../../../assets/images/portfolio/portfolioDetailsImages/seo/seo-img-5.jpg'


export default function SEO() {
  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce SEO Strategy",
      category: "Search Engine Optimization",
      image: Portfolio1,
      link: "#"
    },
    {
      id: 2,
      title: "SaaS Organic Growth Campaign",
      category: "Search Engine Optimization",
      image: Portfolio2,
      link: "#"
    },
    {
      id: 3,
      title: "Local Business SEO Optimization",
      category: "Search Engine Optimization",
      image: Portfolio3,
      link: "#"
    },
    {
      id: 4,
      title: "Enterprise SEO Program",
      category: "Search Engine Optimization",
      image: Portfolio4,
      link: "#"
    },
    {
      id: 5,
      title: "Content & SEO Strategy",
      category: "Search Engine Optimization",
      image: Portfolio5,
      link: "#"
    }
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Create the horizontal scroll transform
  const x = useTransform(scrollYProgress, (pos) => {
    // Calculate the total width of all items plus gaps
    const totalWidth = portfolioItems.length * (350 + 30); // 350px item width + 30px gap
    const viewportWidth = window.innerWidth;
    const maxScroll = totalWidth - viewportWidth + 60; // 60px for padding
    
    // Return the translation value
    return `-${pos * maxScroll}px`;
  });

  return (
    <>
      <main id="wrapper">
        
        <div className="preload preload-container">
            <div className="spinner-circle lg">
                <span className="spinner-circle1 spinner-child"></span>
                <span className="spinner-circle2 spinner-child"></span>
                <span className="spinner-circle3 spinner-child"></span>
                <span className="spinner-circle4 spinner-child"></span>
                <span className="spinner-circle5 spinner-child"></span>
                <span className="spinner-circle6 spinner-child"></span>
                <span className="spinner-circle7 spinner-child"></span>
                <span className="spinner-circle8 spinner-child"></span>
                <span className="spinner-circle9 spinner-child"></span>
            </div>
        </div>
        
        <Header />
        
        <div className="page-title style-4">
            <div className="img-sharp sharp-1">
                <div className="blob-wrapper">
                    <div className="blob"></div>
                </div>
            </div>
            <div className="img-sharp sharp-2">
                <div className="blob-wrapper">
                    <div className="blob"></div>
                </div>
            </div>
            <div className="container">
                <div className="page-title-content">
                    <h1 className="title">
                        Search Engine
                        <br />Optimization (SEO)
                    </h1>
                    <div className="breadkcum">
                        <a href="/">Home</a>
                        <span className="icon icon-chevron-right"><ChevronRight size={14} /></span>
                        <span className="breadkcum-active">Service Details</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Portfolio horizontal scrolling with Framer Motion */}
        <div ref={targetRef} className="portfolio-horizontal-container">
            <section className="portfolio-horizontal-section flat-spacing-2">
                <div className="container">
                    <div className="row align-items-center mb-60">
                        <div className="col-lg-8">
                            <p className="h3 letter-space--3 fw-6 color-dt-black mb-0">
                                Our Recent <span className="color-dt-blue">SEO</span> Projects
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <a href="/portfolio" className="tf-btn style-outline style-big">
                                <span className="text-btn">View All Projects</span>
                                <span className="icon-btn"><ArrowUpRight size={18} /></span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="portfolio-horizontal-scroll">
                    <motion.div style={{ x }} className="portfolio-scroll-wrapper">
                        {portfolioItems.map((item) => (
                            <div key={item.id} className="portfolio-horizontal-item">
                                <div className="portfolio-card">
                                    <div className="portfolio-image">
                                        <img 
                                            loading="lazy" 
                                            src={item.image} 
                                            alt={item.title}
                                            className="portfolio-img"
                                        />
                                        {/* <div className="portfolio-overlay">
                                            <div className="portfolio-content">
                                                <span className="portfolio-category">{item.category}</span>
                                                <h4 className="portfolio-title">{item.title}</h4>
                                                <a href={item.link} className="portfolio-link">
                                                    <span className="icon"><ArrowUpRight size={20} /></span>
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
        
        <section className="section-profilio-detail flat-spacing-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <p className="h3 letter-space--3 fw-6 mb-70">
                            Drive sustainable growth through strategic search engine optimization. 
                            Our data-driven SEO services improve your organic visibility, attract 
                            qualified traffic, and deliver long-term business results that reduce 
                            dependency on paid acquisition channels.
                        </p>
                    </div>

                    {/* Performance Metrics Section with Image on Right */}
                    <div className="col-lg-12 mb-74">
                        <div className="project-challenges-item" style={{ padding: '0' }}>
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="h3 title lh-100 fw-6 letter-space--3 color-dt-black mb-22">
                                        Driving Sustainable Growth Through SEO
                                    </p>
                                    <p className="desc ff-2 color-paragraph mb-30">
                                        Our SEO portfolio has achieved significant growth by improving organic visibility, 
                                        increasing qualified traffic, and delivering long-term business results across client accounts.
                                    </p>

                                    <p className="h6 fw-6 letter-space--3 color-dt-black mb-22">
                                        Growth Highlights
                                    </p>

                                    <ul style={{ marginBottom: '30px', paddingLeft: '0' }}>
                                        <li className="text-body-2 color-paragraph mb-10" style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px',
                                            listStyle: 'none'
                                        }}>
                                            <TrendingUp size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">Organic Traffic Growth</span>
                                                <span style={{ color: '#28a745', fontWeight: '600', marginLeft: '8px' }}>+75%</span>
                                                <span style={{ color: '#666', marginLeft: '4px' }}>YoY across managed accounts</span>
                                            </span>
                                        </li>
                                        <li className="text-body-2 color-paragraph mb-10" style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px',
                                            listStyle: 'none'
                                        }}>
                                            <Search size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">Keyword Rankings</span>
                                                <span style={{ color: '#28a745', fontWeight: '600', marginLeft: '8px' }}>+120%</span>
                                                <span style={{ color: '#666', marginLeft: '4px' }}>increase in Top 10 keyword positions</span>
                                            </span>
                                        </li>
                                        <li className="text-body-2 color-paragraph mb-10" style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px',
                                            listStyle: 'none'
                                        }}>
                                            <Rocket size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">Organic Leads</span>
                                                <span style={{ color: '#28a745', fontWeight: '600', marginLeft: '8px' }}>+68%</span>
                                                <span style={{ color: '#666', marginLeft: '4px' }}>increase in qualified lead generation</span>
                                            </span>
                                        </li>
                                        <li className="text-body-2 color-paragraph mb-10" style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px',
                                            listStyle: 'none'
                                        }}>
                                            <Users size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">New Client Portfolio</span>
                                                <span style={{ color: '#28a745', fontWeight: '600', marginLeft: '8px' }}>2X</span>
                                                <span style={{ color: '#666', marginLeft: '4px' }}>growth in SEO accounts managed</span>
                                            </span>
                                        </li>
                                        <li className="text-body-2 color-paragraph mb-10" style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px',
                                            listStyle: 'none'
                                        }}>
                                            <Globe size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">Organic Revenue</span>
                                                <span style={{ color: '#28a745', fontWeight: '600', marginLeft: '8px' }}>+85%</span>
                                                <span style={{ color: '#666', marginLeft: '4px' }}>increase in revenue attributed to organic search</span>
                                            </span>
                                        </li>
                                    </ul>

                                    <div style={{ 
                                        padding: '16px 0', 
                                        borderTop: '1px solid #e5e5e5',
                                        borderBottom: '1px solid #e5e5e5',
                                        marginBottom: '30px'
                                    }}>
                                        <p className="text-body-2 color-paragraph mb-0" style={{ 
                                            fontWeight: '500', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px'
                                        }}>
                                            <BarChart3 size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">Domain Visibility</span>
                                                <span style={{ color: '#666', marginLeft: '8px' }}>→ Significant improvement in search visibility across competitive industries</span>
                                            </span>
                                        </p>
                                    </div>

                                    <p className="h6 fw-6 letter-space--3 color-dt-black mb-22">
                                        Impact Delivered
                                    </p>

                                    <ul style={{ paddingLeft: '0' }}>
                                        <li className="text-body-2 color-paragraph mb-10" style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px',
                                            listStyle: 'none'
                                        }}>
                                            <CheckCircle size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">Enhanced search engine visibility</span>
                                                <span style={{ color: '#666', marginLeft: '8px' }}>→ for high-value keywords</span>
                                            </span>
                                        </li>
                                        <li className="text-body-2 color-paragraph mb-10" style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px',
                                            listStyle: 'none'
                                        }}>
                                            <CheckCircle size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">Improved website authority</span>
                                                <span style={{ color: '#666', marginLeft: '8px' }}>→ and technical SEO performance</span>
                                            </span>
                                        </li>
                                        <li className="text-body-2 color-paragraph mb-10" style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px',
                                            listStyle: 'none'
                                        }}>
                                            <CheckCircle size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">Increased engagement</span>
                                                <span style={{ color: '#666', marginLeft: '8px' }}>→ through optimized content strategies</span>
                                            </span>
                                        </li>
                                        <li className="text-body-2 color-paragraph" style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '12px',
                                            listStyle: 'none'
                                        }}>
                                            <CheckCircle size={18} className="color-dt-blue" style={{ flexShrink: 0 }} />
                                            <span>
                                                <span className="fw-6 color-dt-black letter-space--3">Sustainable growth</span>
                                                <span style={{ color: '#666', marginLeft: '8px' }}>→ with reduced reliance on paid acquisition channels</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5">
                                    <div style={{
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        height: '100%',
                                        minHeight: '400px'
                                    }}>
                                        <img 
                                            src={GrowthImage} 
                                            alt="SEO Growth Dashboard"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-information-item mb-74">
                        <div className="image">
                            <img loading="lazy" width="960" height="570"
                                src={WebAppImage1} alt="SEO Services" />
                        </div>
                        <div className="content">
                            <p className="title h6 fw-6 letter-space--3 ">
                                Service Information
                            </p>
                            <ul>
                                <li>
                                    Service Type:
                                    <p className="h6 fw-6 letter-space--3 color-black">Search Engine Optimization</p>
                                </li>
                                <li>
                                    SEO Components:
                                    <p className="h6 fw-6 letter-space--3 color-black">On-Page, Off-Page, Technical, Local</p>
                                </li>
                                <li>
                                    Deliverables:
                                    <p className="h6 fw-6 letter-space--3 color-black">Keyword Strategy, Content Optimization, Link Building</p>
                                </li>
                                <li>
                                    Tools:
                                    <p className="h6 fw-6 letter-space--3 color-black">SEMrush, Ahrefs, Google Search Console</p>
                                </li>
                                <li>
                                    Metrics:
                                    <p className="h6 fw-6 letter-space--3 color-black">Organic Traffic, Rankings, Conversions, Revenue</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-challenges-item flat-spacing-2">
                        <p className="h3 title lh-100 fw-6 letter-space--3 color-dt-black mb-22">
                            SEO Strategies & Components
                        </p>
                        <p className="desc ff-2 color-paragraph mb-30">
                            Our comprehensive SEO approach covers all aspects of search optimization, 
                            from technical foundations to content strategy and authority building, 
                            ensuring sustainable growth in organic visibility and traffic.
                        </p>

                        <ul>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Technical SEO –</span> 
                                Site architecture optimization, page speed improvement, and mobile responsiveness.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">On-Page Optimization –</span>
                                Strategic keyword integration, meta data optimization, and content structuring.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Content Strategy –</span>
                                Creating valuable, search-optimized content that engages and converts visitors.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Link Building –</span> 
                                Building high-quality backlinks through strategic outreach and content promotion.
                            </li>
                            <li className="text-body-2 color-paragraph">
                                <span className="fw-6 color-dt-black letter-space--3">Local SEO –</span>
                                Optimizing for local search with Google Business Profile and local citations.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="project-results-item flat-spacing-2">
                <div className="container">
                    <div className="row rg-30">
                        <div className="col-sm-6 col-lg-5">
                            <div className="project-results-content">
                                <p className="h3 title lh-100 fw-6 letter-space--3 mb-22">
                                    SEO Implementation Process
                                </p>
                                <div className="desc ff-2 color-paragraph">
                                    Our systematic approach to SEO ensures comprehensive optimization 
                                    and continuous improvement of your organic search performance.
                                </div>
                                <ul>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Technical Audit & Analysis
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Keyword Research & Strategy
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        On-Page & Content Optimization
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Off-Page & Link Building
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph">
                                        Monitoring & Continuous Improvement
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-7">
                            <div className="image">
                                <img loading="lazy" width="740" height="470"
                                    src={WebAppImage2} alt="SEO Process" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="image-section mb-74">
                    <img loading="lazy" 
                        src={WebAppImage3} alt="SEO Showcase" />
                </div>
            </div>

            <div className="project-summery-item">
                <div className="container">
                    <p className="h3 title lh-100 fw-6 letter-space--3 mb-32">
                        Service Summary
                    </p>
                </div>
                <div className="container">
                    <div className="row justify-content-between rg-30">
                        <div className="col-lg-6">
                            <div className="desc text-body-1 ff-2 fw-5 letter-space--2 lh-35">
                                Search Engine Optimization is the foundation of sustainable digital growth, 
                                enabling businesses to attract qualified traffic, build brand authority, 
                                and generate consistent organic revenue without ongoing ad spend.
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="text ff-2 color-paragraph">
                                We specialize in comprehensive SEO strategies that deliver measurable, 
                                long-term results. Our approach combines technical expertise with creative 
                                content development to improve your search visibility across all major 
                                search engines. We start with a thorough audit of your website's technical 
                                SEO, content, and backlink profile to identify opportunities for improvement. 
                                Our keyword research identifies high-value search terms that align with your 
                                business objectives and target audience. We then implement on-page optimization 
                                strategies that make your content more discoverable and engaging for both 
                                search engines and users. Our content strategy focuses on creating valuable, 
                                authoritative content that addresses your audience's needs and builds trust 
                                with search engines. Through strategic link building, we increase your website's 
                                authority and relevance in your industry. We provide transparent reporting with 
                                actionable insights to help you understand the impact of our efforts on your 
                                business. With our proven SEO strategies, you can build a sustainable competitive 
                                advantage in search results and reduce your dependency on paid advertising channels.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer />

        <div className="overlay-filter" id="overlay-filter"></div>
    </main>
    
    <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="pop-up-nav-mobile">
            <div className="canvas-header" style={{backgroundColor: "#1c1c1c", margin: "-15px -15px 15px -15px", padding: "15px"}}>
                <a href="#" className="logo-site">
                    <img src={DESLOGO} alt="Digital Elite Service" className="des-logo" style={{maxWidth: "150px"}} />
                </a>
                <span className="icon icon-close" style={{color: "white"}} data-bs-dismiss="offcanvas"></span>
            </div>
            <div className="canvas-body">
                <div className="mb-content-top">
                    <ul className="nav-ul-mb" id="wrapper-menu-navigation"></ul>
                </div>
            </div>
            <div className="canvas-bottom">
            </div>
        </div>
    </div>
    
    <div className="modal fade modalRight pop-up-menu-mobile" id="pop-up-sidebar">
        <div className="modal-dialog" role="document">
            <div className="modal-content modal-sidebar">
                <div className="sidebar-header d-flex align-items-center justify-content-between">
                    <a href="/" className="logo-sidebar">
                        <img src="./assets/images/logo/logo-2.svg" alt="" />
                    </a>
                    <span className="icon icon-close-popup" data-bs-dismiss="modal"><i className="icon-x-circle"></i></span>
                </div>
                <div className="sidebar-content mb-70">
                    <p className="h5 title fw-6">
                        Learn About Us
                    </p>
                    <p className="text text-body-2 ff-2 mb-70">
                        We are a results-driven digital marketing agency dedicated to helping brands grow, connect, and
                        thrive in the digital world. By combining data-driven strategy, creative storytelling, and the
                        latest marketing technologies
                    </p>
                    <div className="list-img d-flex align-items-center g-20">
                        <div className="img">
                            <img loading="lazy" width="115" height="115"
                                src="./assets/images/widget/pop-up-siderbar-1.jpg" alt="Image" />
                        </div>
                        <div className="img">
                            <img loading="lazy" width="115" height="115"
                                src="./assets/images/widget/pop-up-siderbar-2.jpg" alt="Image" />
                        </div>
                        <div className="img">
                            <img loading="lazy" width="115" height="115"
                                src="./assets/images/widget/pop-up-siderbar-3.jpg" alt="Image" />
                        </div>
                        <div className="img">
                            <img loading="lazy" width="115" height="115"
                                src="./assets/images/widget/pop-up-siderbar-4.jpg" alt="Image" />
                        </div>
                    </div>
                </div>
                <div className="sidebar-content mb-70">
                    <p className="h5 title fw-6">
                        Contact Us
                    </p>
                    <ul>
                        <li className="contact-list-item">
                            <a href="#" className="text-body-2 ff-2">245 Park Avenue, Suite 300, New York</a>
                        </li>
                        <li className="contact-list-item">
                            <a href="#" className="text-body-2 ff-2">supporttech@gmail.com</a>
                        </li>
                        <li className="contact-list-item">
                            <a href="#" className="text-body-2 ff-2">+1 (200) 555-876</a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-content newsletter-form">
                    <p className="h5 title fw-6">
                        Newsletter
                    </p>
                    <p className="text ff-2 mb-30">
                        Stay ahead in the digital world by subscribing to our newsletter.
                    </p>
                    <form action="#" className="form-newsletter">
                        <fieldset className="d-flex align-items-center flex-wrap g-10">
                            <input type="text" name="email-input" id="email-input" className="input-newsletter flex-grow-1"
                                placeholder="Email address" />
                            <button className="tf-btn style-big style-color-dt-blue">
                                <span className="text-btn">Subscribe</span>
                                <span className="icon-btn"><ArrowUpRight size={18} /></span>
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style={{transition: "strokeDashoffset 10ms linear", strokeDasharray: "307.919, 307.919", strokeDashoffset: "277.672"}}>
            </path>
        </svg>
    </div>
    </>
  );
}