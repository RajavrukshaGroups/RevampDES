import DESLOGO from "../../../assets/images/header/DES_logo_white.png";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import "./StylesForPortfolioDetails.css"

import WebAppImage1 from "../../../assets/images/portfolio/portfolioDetailsImages/social-media/WebAppImage1.jpg";
import WebAppImage2 from "../../../assets/images/portfolio/portfolioDetailsImages/social-media/WebAppImage2.jpg";
import WebAppImage3 from "../../../assets/images/portfolio/portfolioDetailsImages/social-media/WebAppImage3.jpg";

// Import portfolio images
import Portfolio1 from "../../../assets/images/portfolio/portfolioDetailsImages/social-media/social-media-img-1.jpg";
import Portfolio2 from "../../../assets/images/portfolio/portfolioDetailsImages/social-media/social-media-img-2.jpg";
import Portfolio3 from "../../../assets/images/portfolio/portfolioDetailsImages/social-media/social-media-img-3.jpg";
import Portfolio4 from "../../../assets/images/portfolio/portfolioDetailsImages/social-media/social-media-img-5.png";
import Portfolio5 from "../../../assets/images/portfolio/portfolioDetailsImages/social-media/social-media-img-6.jpg";

export default function SocialMediaBrandAwareness() {
  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Lifestyle Brand Social Campaign",
      category: "Social Media Brand Awareness",
      image: Portfolio1,
      link: "#"
    },
    {
      id: 2,
      title: "Tech Startup Brand Building",
      category: "Social Media Brand Awareness",
      image: Portfolio2,
      link: "#"
    },
    {
      id: 3,
      title: "Fashion Retail Brand Awareness",
      category: "Social Media Brand Awareness",
      image: Portfolio3,
      link: "#"
    },
    {
      id: 4,
      title: "Food & Beverage Social Growth",
      category: "Social Media Brand Awareness",
      image: Portfolio4,
      link: "#"
    },
    {
      id: 5,
      title: "Wellness Brand Community Building",
      category: "Social Media Brand Awareness",
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
                        Social Media Brand
                        <br />Awareness
                    </h1>
                    <div className="breadkcum">
                        <a href="/">Home</a>
                        <span className="icon icon-chevron-right"></span>
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
                                Our Recent <span className="color-dt-blue">Brand Awareness</span> Campaigns
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
                            Build a powerful brand presence across social media platforms with our comprehensive 
                            brand awareness strategies. We create compelling content and engagement strategies 
                            that increase visibility, foster community, and establish your brand as an industry leader.
                        </p>
                    </div>

                    <div className="project-information-item mb-74">
                        <div className="image">
                            <img loading="lazy" width="960" height="570"
                                src={WebAppImage1} alt="Social Media Brand Awareness Services" />
                        </div>
                        <div className="content">
                            <p className="title h6 fw-6 letter-space--3 ">
                                Service Information
                            </p>
                            <ul>
                                <li>
                                    Service Type:
                                    <p className="h6 fw-6 letter-space--3 color-black">Social Media Brand Awareness</p>
                                </li>
                                <li>
                                    Platforms:
                                    <p className="h6 fw-6 letter-space--3 color-black">Instagram, Facebook, LinkedIn</p>
                                </li>
                                <li>
                                    Strategies:
                                    <p className="h6 fw-6 letter-space--3 color-black">Content Marketing, Influencer Collaboration</p>
                                </li>
                                <li>
                                    Deliverables:
                                    <p className="h6 fw-6 letter-space--3 color-black">Content Calendar, Engagement Reports</p>
                                </li>
                                <li>
                                    Metrics:
                                    <p className="h6 fw-6 letter-space--3 color-black">Reach, Impressions, Engagement Rate</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-challenges-item flat-spacing-2">
                        <p className="h3 title lh-100 fw-6 letter-space--3 color-dt-black mb-22">
                            Brand Awareness Strategies
                        </p>
                        <p className="desc ff-2 color-paragraph mb-30">
                            Our social media brand awareness campaigns combine creative storytelling, 
                            data-driven targeting, and consistent engagement to build a strong brand 
                            identity and loyal community across all platforms.
                        </p>

                        <ul>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Content Strategy –</span> 
                                Develop engaging, shareable content that resonates with your target audience and showcases your brand personality.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Influencer Partnerships –</span>
                                Collaborate with relevant influencers to expand reach and build credibility with new audiences.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Community Engagement –</span>
                                Foster meaningful conversations and build a loyal community through authentic interactions.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Paid Social Campaigns –</span> 
                                Targeted advertising campaigns to reach new audiences and amplify your brand message.
                            </li>
                            <li className="text-body-2 color-paragraph">
                                <span className="fw-6 color-dt-black letter-space--3">Brand Storytelling –</span>
                                Create compelling narratives that connect emotionally with your audience and differentiate your brand.
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
                                    Campaign Process
                                </p>
                                <div className="desc ff-2 color-paragraph">
                                    Our systematic approach to brand awareness ensures consistent growth, 
                                    measurable results, and a strong return on investment.
                                </div>
                                <ul>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Brand Audit & Research
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Strategy Development
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Content Creation & Curation
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Campaign Execution
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph">
                                        Monitoring & Optimization
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-7">
                            <div className="image">
                                <img loading="lazy" width="740" height="470"
                                    src={WebAppImage2} alt="Social Media Brand Awareness Process" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="image-section mb-74">
                    <img loading="lazy" 
                        src={WebAppImage3} alt="Social Media Brand Awareness Showcase" />
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
                                Social media brand awareness is the foundation of modern digital marketing, 
                                helping businesses establish their identity, connect with target audiences, 
                                and build lasting relationships that drive long-term business growth.
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="text ff-2 color-paragraph">
                                We specialize in building comprehensive brand awareness strategies across 
                                all major social media platforms. Our approach combines creative excellence 
                                with data-driven insights to ensure your brand message reaches the right 
                                audience at the right time. We develop authentic content that reflects your 
                                brand values and resonates with your target audience. Through strategic 
                                partnerships, influencer collaborations, and community management, we help 
                                you build a loyal following that advocates for your brand. Our campaigns are 
                                designed to increase brand recall, improve sentiment, and drive meaningful 
                                engagement. We provide detailed analytics and insights to measure the impact 
                                of your brand awareness efforts and continuously optimize for better results. 
                                Whether you're launching a new brand or looking to expand your market presence, 
                                our team has the expertise to help you achieve your brand awareness goals 
                                and establish a dominant social media presence.
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