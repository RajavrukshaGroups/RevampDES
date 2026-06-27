import DESLOGO from "../../../assets/images/header/DES_logo_white.png";
import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import "./StylesForPortfolioDetails.css"

import WebAppImage1 from '../../../assets/images/portfolioDetails/project-information-item-1.jpg';
import WebAppImage2 from '../../../assets/images/portfolioDetails/project-results-item-1.jpg';
import WebAppImage3 from '../../../assets/images/portfolioDetails/img-section-portfolio-detail.jpg';
import Portfolio1 from '../../../assets/images/portfolio/portfolioDetailsImages/paid-search-campaign/paid-search-campaign-img1.jpeg';
import Portfolio2 from '../../../assets/images/portfolio/portfolioDetailsImages/paid-search-campaign/paid-search-campaign-img2.jpeg';
import Portfolio3 from '../../../assets/images/portfolio/portfolioDetailsImages/paid-search-campaign/paid-search-campaign-img3.png';
import Portfolio4 from '../../../assets/images/portfolio/portfolioDetailsImages/paid-search-campaign/paid-search-campaign-img4.png';
import Portfolio5 from '../../../assets/images/portfolio/portfolioDetailsImages/paid-search-campaign/paid-search-campaign-img5.png';


export default function PaidSearchCampaign() {
  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Google Ads Campaign",
      category: "Paid Search Campaign",
      image: Portfolio1,
      link: "#"
    },
    {
      id: 2,
      title: "SaaS Lead Generation Campaign",
      category: "Paid Search Campaign",
      image: Portfolio2,
      link: "#"
    },
    {
      id: 3,
      title: "Retail PPC Campaign Management",
      category: "Paid Search Campaign",
      image: Portfolio3,
      link: "#"
    },
    {
      id: 4,
      title: "B2B Service Ads Campaign",
      category: "Paid Search Campaign",
      image: Portfolio4,
      link: "#"
    },
    {
      id: 5,
      title: "Healthcare PPC Campaign",
      category: "Paid Search Campaign",
      image: Portfolio5,
      link: "#"
    }
  ];

  // Add the JavaScript for horizontal scrolling
  useEffect(() => {
    const scrollContainer = document.querySelector('.portfolio-horizontal-scroll');
    
    if (scrollContainer) {
      let isDown = false;
      let startX;
      let scrollLeft;
      
      const handleMouseDown = (e) => {
        isDown = true;
        scrollContainer.style.cursor = 'grabbing';
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
      };
      
      const handleMouseLeave = () => {
        isDown = false;
        scrollContainer.style.cursor = 'grab';
      };
      
      const handleMouseUp = () => {
        isDown = false;
        scrollContainer.style.cursor = 'grab';
      };
      
      const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
      };
      
      // Auto-scroll on load
      let autoScroll = setInterval(() => {
        if (!isDown) {
          scrollContainer.scrollLeft += 1;
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            clearInterval(autoScroll);
          }
        }
      }, 30);
      
      const handleMouseEnter = () => {
        clearInterval(autoScroll);
      };
      
      scrollContainer.addEventListener('mousedown', handleMouseDown);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
      scrollContainer.addEventListener('mouseup', handleMouseUp);
      scrollContainer.addEventListener('mousemove', handleMouseMove);
      scrollContainer.addEventListener('mouseenter', handleMouseEnter);
      
      return () => {
        clearInterval(autoScroll);
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('mouseup', handleMouseUp);
        scrollContainer.removeEventListener('mousemove', handleMouseMove);
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      };
    }
  }, []);

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
                        Paid Search
                        <br />Campaign
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
        <section className="portfolio-horizontal-section flat-spacing-2">
            <div className="container">
                <div className="row align-items-center mb-60">
                    <div className="col-lg-8">
                        <p className="h3 letter-space--3 fw-6 color-dt-black mb-0">
                            Our Recent <span className="color-dt-blue">Paid Search</span> Campaigns
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
                <div className="portfolio-scroll-wrapper">
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
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-content">
                                            <span className="portfolio-category">{item.category}</span>
                                            <h4 className="portfolio-title">{item.title}</h4>
                                            <a href={item.link} className="portfolio-link">
                                                <span className="icon icon-arrow-up-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="section-profilio-detail flat-spacing-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <p className="h3 letter-space--3 fw-6 mb-70">
                            Drive targeted traffic and maximize conversions with our data-driven paid search campaigns. 
                            We leverage Google Ads and other search platforms to put your brand in front of high-intent 
                            customers, delivering measurable results and exceptional return on ad spend.
                        </p>
                    </div>

                    {/* Performance Metrics Section - Highlighted */}
                    <div className="col-lg-12 mb-74">
                        <div className="performance-metrics-box" style={{ 
                            backgroundColor: '#f8f9fa', 
                            padding: '40px', 
                            borderRadius: '12px',
                            borderLeft: '4px solid #0066ff'
                        }}>
                            <p className="h4 fw-6 letter-space--3 color-dt-black mb-30">
                                <span className="color-dt-blue">●</span> Performance Highlights
                            </p>
                            <div className="metrics-grid" style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                                gap: '30px',
                                marginBottom: '30px'
                            }}>
                                <div className="metric-item" style={{ 
                                    backgroundColor: 'white', 
                                    padding: '20px', 
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                }}>
                                    <span className="metric-value" style={{ 
                                        fontSize: '32px', 
                                        fontWeight: '700', 
                                        color: '#0066ff',
                                        display: 'block'
                                    }}>+65%</span>
                                    <span className="metric-label" style={{ 
                                        fontSize: '16px', 
                                        color: '#333',
                                        fontWeight: '500'
                                    }}>Increase in Managed Ad Spend</span>
                                    <span className="metric-sub" style={{ 
                                        fontSize: '14px', 
                                        color: '#666',
                                        display: 'block',
                                        marginTop: '5px'
                                    }}>Maintaining efficiency targets</span>
                                </div>
                                
                                <div className="metric-item" style={{ 
                                    backgroundColor: 'white', 
                                    padding: '20px', 
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                }}>
                                    <span className="metric-value" style={{ 
                                        fontSize: '32px', 
                                        fontWeight: '700', 
                                        color: '#0066ff',
                                        display: 'block'
                                    }}>+78%</span>
                                    <span className="metric-label" style={{ 
                                        fontSize: '16px', 
                                        color: '#333',
                                        fontWeight: '500'
                                    }}>Growth in Conversions</span>
                                    <span className="metric-sub" style={{ 
                                        fontSize: '14px', 
                                        color: '#666',
                                        display: 'block',
                                        marginTop: '5px'
                                    }}>Across all client campaigns</span>
                                </div>
                                
                                <div className="metric-item" style={{ 
                                    backgroundColor: 'white', 
                                    padding: '20px', 
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                }}>
                                    <span className="metric-value" style={{ 
                                        fontSize: '32px', 
                                        fontWeight: '700', 
                                        color: '#0066ff',
                                        display: 'block'
                                    }}>+42%</span>
                                    <span className="metric-label" style={{ 
                                        fontSize: '16px', 
                                        color: '#333',
                                        fontWeight: '500'
                                    }}>ROAS Improvement</span>
                                    <span className="metric-sub" style={{ 
                                        fontSize: '14px', 
                                        color: '#666',
                                        display: 'block',
                                        marginTop: '5px'
                                    }}>Return on Ad Spend</span>
                                </div>
                                
                                <div className="metric-item" style={{ 
                                    backgroundColor: 'white', 
                                    padding: '20px', 
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                }}>
                                    <span className="metric-value" style={{ 
                                        fontSize: '32px', 
                                        fontWeight: '700', 
                                        color: '#0066ff',
                                        display: 'block'
                                    }}>+55%</span>
                                    <span className="metric-label" style={{ 
                                        fontSize: '16px', 
                                        color: '#333',
                                        fontWeight: '500'
                                    }}>Qualified Leads Generated</span>
                                    <span className="metric-sub" style={{ 
                                        fontSize: '14px', 
                                        color: '#666',
                                        display: 'block',
                                        marginTop: '5px'
                                    }}>High-quality conversions</span>
                                </div>
                            </div>
                            
                            <div className="metrics-summary" style={{ 
                                padding: '20px', 
                                backgroundColor: '#e8f0fe', 
                                borderRadius: '8px',
                                borderLeft: '4px solid #0066ff'
                            }}>
                                <p className="text-body-2 color-paragraph mb-0" style={{ fontWeight: '500' }}>
                                    <strong>Over the past 12 months, our paid search portfolio has demonstrated strong growth across key performance metrics.</strong> 
                                    This growth reflects our ability to scale campaigns effectively while driving measurable business outcomes for clients.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="project-information-item mb-74">
                        <div className="image">
                            <img loading="lazy" width="960" height="570"
                                src={WebAppImage2} alt="Paid Search Campaign Services" />
                        </div>
                        <div className="content">
                            <p className="title h6 fw-6 letter-space--3 ">
                                Service Information
                            </p>
                            <ul>
                                <li>
                                    Service Type:
                                    <p className="h6 fw-6 letter-space--3 color-black">Paid Search Campaign</p>
                                </li>
                                <li>
                                    Platforms:
                                    <p className="h6 fw-6 letter-space--3 color-black">Google Ads, Bing Ads</p>
                                </li>
                                <li>
                                    Campaign Types:
                                    <p className="h6 fw-6 letter-space--3 color-black">Search, Display, Shopping, Remarketing</p>
                                </li>
                                <li>
                                    Optimization:
                                    <p className="h6 fw-6 letter-space--3 color-black">Keyword, Bid, Ad Copy, Landing Page</p>
                                </li>
                                <li>
                                    Reporting:
                                    <p className="h6 fw-6 letter-space--3 color-black">Real-time Analytics, ROI Tracking</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-challenges-item flat-spacing-2">
                        <p className="h3 title lh-100 fw-6 letter-space--3 color-dt-black mb-22">
                            Campaign Features & Strategies
                        </p>
                        <p className="desc ff-2 color-paragraph mb-30">
                            Our paid search campaigns are designed to capture high-intent traffic, 
                            optimize conversions, and deliver maximum ROI through strategic keyword 
                            targeting and continuous performance optimization.
                        </p>

                        <ul>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Keyword Research & Strategy –</span> 
                                Comprehensive keyword discovery and targeting to reach high-intent customers.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Ad Copy Optimization –</span>
                                Crafting compelling ad copy that drives clicks and maximizes conversion rates.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Bid Management –</span>
                                Strategic bidding strategies to maximize visibility while maintaining efficiency.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Landing Page Optimization –</span> 
                                Creating high-converting landing pages that align with ad messaging.
                            </li>
                            <li className="text-body-2 color-paragraph">
                                <span className="fw-6 color-dt-black letter-space--3">A/B Testing & Optimization –</span>
                                Continuous testing and refinement to improve campaign performance.
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
                                    Campaign Management Process
                                </p>
                                <div className="desc ff-2 color-paragraph">
                                    Our systematic campaign management process ensures continuous 
                                    optimization and maximum return on your advertising investment.
                                </div>
                                <ul>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Strategy & Discovery
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Campaign Setup & Structure
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Ongoing Optimization
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Performance Monitoring
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph">
                                        Reporting & Insights
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-7">
                            <div className="image">
                                <img loading="lazy" width="740" height="470"
                                    src={WebAppImage2} alt="Paid Search Campaign Process" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="image-section mb-74">
                    <img loading="lazy" 
                        src={WebAppImage3} alt="Paid Search Campaign Showcase" />
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
                                Paid search campaigns deliver immediate visibility and targeted traffic, 
                                connecting your brand with customers actively searching for your products 
                                or services at the moment of intent.
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="text ff-2 color-paragraph">
                                We specialize in creating and managing high-performance paid search campaigns 
                                that deliver measurable business results. Our approach is data-driven and 
                                customer-focused, ensuring every dollar of your ad spend works harder to 
                                achieve your goals. We start by understanding your business objectives and 
                                target audience to develop a comprehensive campaign strategy. Our team handles 
                                everything from keyword research and ad copy creation to bid management and 
                                performance optimization. We leverage advanced targeting options including 
                                location, device, time of day, and audience segmentation to reach the right 
                                customers at the right time. We continuously monitor and optimize campaigns 
                                to improve performance and maximize ROI. Our transparent reporting provides 
                                clear insights into campaign performance, including click-through rates, 
                                conversion rates, cost per acquisition, and return on ad spend. We also 
                                implement advanced conversion tracking to measure the impact of your campaigns 
                                on business outcomes. With our expertise in paid search, we help businesses 
                                of all sizes achieve their advertising goals and drive sustainable growth 
                                through strategic search marketing.
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