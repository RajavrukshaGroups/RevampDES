import DESLOGO from "../../../assets/images/header/DES_logo_white.png";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import "./StylesForPortfolioDetails.css"

import WebAppImage1 from "../../../assets/images/portfolio/portfolioDetailsImages/brand-identity/WebAppImage1.jpg";
import WebAppImage2 from "../../../assets/images/portfolio/portfolioDetailsImages/brand-identity/WebAppImage2.jpg";
import WebAppImage3 from "../../../assets/images/portfolio/portfolioDetailsImages/brand-identity/WebAppImage3.jpg";

// Import portfolio images
import Portfolio1 from '../../../assets/images/portfolio/portfolioDetailsImages/brand-identity/Portfolio1.jpg'
import Portfolio2 from '../../../assets/images/portfolio/portfolioDetailsImages/brand-identity/Portfolio2.jpg'
import Portfolio3 from '../../../assets/images/portfolio/portfolioDetailsImages/brand-identity/Portfolio3.jpg'
import Portfolio4 from '../../../assets/images/portfolio/portfolioDetailsImages/brand-identity/Portfolio4.jpeg'
import Portfolio5 from '../../../assets/images/portfolio/portfolioDetailsImages/brand-identity/Portfolio5.jpeg'

export default function BrandIdentityDigitalBranding() {
  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Tech Startup Brand Identity",
      category: "Brand Identity & Digital Branding",
      image: Portfolio1,
      link: "#"
    },
    {
      id: 2,
      title: "Luxury Brand Digital Rebranding",
      category: "Brand Identity & Digital Branding",
      image: Portfolio2,
      link: "#"
    },
    {
      id: 3,
      title: "Sustainable Fashion Brand Identity",
      category: "Brand Identity & Digital Branding",
      image: Portfolio3,
      link: "#"
    },
    {
      id: 4,
      title: "Fintech Brand Digital Presence",
      category: "Brand Identity & Digital Branding",
      image: Portfolio4,
      link: "#"
    },
    {
      id: 5,
      title: "Wellness Brand Visual Identity",
      category: "Brand Identity & Digital Branding",
      image: Portfolio5,
      link: "#"
    }
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, (pos) => {
    return `calc(-${pos * 100}% + ${pos * 100}vw)`;
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
                        Brand Identity & 
                        <br />Digital Branding
                    </h1>
                    <div className="breadkcum">
                        <a href="/">Home</a>
                        <span className="icon icon-chevron-right"></span>
                        <span className="breadkcum-active">Service Details</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Portfolio horizontal scrolling */}
        <div ref={targetRef} className="portfolio-horizontal-container">
            <section className="portfolio-horizontal-section flat-spacing-2">
            <div className="container">
                <div className="row align-items-center mb-60">
                    <div className="col-lg-8">
                        <p className="h3 letter-space--3 fw-6 color-dt-black mb-0">
                            Our Recent <span className="color-dt-blue">Brand Identity</span> Projects
                        </p>
                    </div>
                    {/* <div className="col-lg-4 text-lg-end">
                        <a href="/portfolio" className="tf-btn style-outline style-big">
                            <span className="text-btn">View All Projects</span>
                            <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                        </a>
                    </div> */} 
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
                                                <span className="icon icon-arrow-up-right"></span>
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
                            Create a powerful and memorable brand identity that resonates with your target audience 
                            and stands out in the digital landscape. Our comprehensive branding services help you 
                            define your brand's visual identity, voice, and digital presence to build lasting 
                            connections with your customers.
                        </p>
                    </div>

                    <div className="project-information-item mb-74">
                        <div className="image">
                            <img loading="lazy" width="960" height="570"
                                src={WebAppImage1} alt="Brand Identity Services" />
                        </div>
                        <div className="content">
                            <p className="title h6 fw-6 letter-space--3 ">
                                Service Information
                            </p>
                            <ul>
                                <li>
                                    Service Type:
                                    <p className="h6 fw-6 letter-space--3 color-black">Brand Identity & Digital Branding</p>
                                </li>
                                <li>
                                    Deliverables:
                                    <p className="h6 fw-6 letter-space--3 color-black">Logo Design, Brand Guidelines, Visual Assets</p>
                                </li>
                                <li>
                                    Brand Elements:
                                    <p className="h6 fw-6 letter-space--3 color-black">Typography, Color Palette, Iconography</p>
                                </li>
                                <li>
                                    Digital Presence:
                                    <p className="h6 fw-6 letter-space--3 color-black">Website Design, Social Media Branding</p>
                                </li>
                                <li>
                                    Brand Strategy:
                                    <p className="h6 fw-6 letter-space--3 color-black">Positioning, Messaging, Brand Voice</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-challenges-item flat-spacing-2">
                        <p className="h3 title lh-100 fw-6 letter-space--3 color-dt-black mb-22">
                            Brand Identity Components
                        </p>
                        <p className="desc ff-2 color-paragraph mb-30">
                            We build comprehensive brand identities that translate your brand's essence into 
                            visual and digital experiences that connect with your audience and differentiate 
                            your brand in the market.
                        </p>

                        <ul>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Visual Identity Design –</span> 
                                Creating distinctive logos, color palettes, typography, and visual systems that represent your brand.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Brand Strategy & Positioning –</span>
                                Defining your brand's purpose, values, and unique position in the market.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Brand Guidelines –</span>
                                Comprehensive documentation ensuring consistent brand application across all platforms.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Digital Branding –</span> 
                                Extending your brand identity across digital platforms including websites, social media, and marketing materials.
                            </li>
                            <li className="text-body-2 color-paragraph">
                                <span className="fw-6 color-dt-black letter-space--3">Brand Voice & Messaging –</span>
                                Developing a consistent brand tone and key messages that resonate with your audience.
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
                                    Brand Development Process
                                </p>
                                <div className="desc ff-2 color-paragraph">
                                    Our strategic brand development process ensures your brand identity 
                                    is authentic, cohesive, and positioned for long-term success.
                                </div>
                                <ul>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Discovery & Research
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Brand Strategy Definition
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Visual Identity Creation
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Brand Guidelines Development
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph">
                                        Digital Asset Delivery
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-7">
                            <div className="image">
                                <img loading="lazy" width="740" height="470"
                                    src={WebAppImage2} alt="Brand Development Process" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="image-section mb-74">
                    <img loading="lazy" 
                        src={WebAppImage3} alt="Brand Identity Showcase" />
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
                                Brand identity and digital branding are essential for creating a cohesive 
                                brand experience that builds recognition, trust, and emotional connections 
                                with your audience across all digital touchpoints.
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="text ff-2 color-paragraph">
                                We specialize in creating comprehensive brand identities that capture the 
                                essence of your business and resonate with your target audience. Our approach 
                                combines strategic thinking with creative excellence to build brands that 
                                are memorable, authentic, and distinctive. We start by deeply understanding 
                                your business, your audience, and your competitive landscape to define a 
                                brand strategy that positions you for success. Our team then translates this 
                                strategy into a visual identity that includes logo design, color palettes, 
                                typography, and imagery that reflects your brand personality. We create 
                                comprehensive brand guidelines that ensure consistent application across all 
                                touchpoints. Beyond visual identity, we extend your brand into the digital 
                                space through website design, social media branding, and digital marketing 
                                assets. Our digital branding ensures your brand delivers a consistent and 
                                compelling experience across all digital platforms. We provide ongoing 
                                support to help you evolve your brand as your business grows. With our 
                                expertise, you can build a brand that not only looks great but also drives 
                                business results and creates lasting relationships with your customers.
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
                                <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
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