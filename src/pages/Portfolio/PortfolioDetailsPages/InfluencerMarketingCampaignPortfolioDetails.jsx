import DESLOGO from "../../../assets/images/header/DES_logo_white.png";
import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import "./StylesForPortfolioDetails.css"

import WebAppImage1 from '../../../assets/images/portfolioDetails/project-information-item-1.jpg';
import WebAppImage2 from '../../../assets/images/portfolioDetails/project-results-item-1.jpg';
import WebAppImage3 from '../../../assets/images/portfolioDetails/img-section-portfolio-detail.jpg';

// Import portfolio images
const Portfolio1 = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Portfolio2 = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Portfolio3 = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Portfolio4 = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Portfolio5 = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function InfluencerMarketingCampaign() {
  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Fashion Brand Influencer Campaign",
      category: "Influencer Marketing",
      image: Portfolio1,
      link: "#"
    },
    {
      id: 2,
      title: "Beauty Product Launch Campaign",
      category: "Influencer Marketing",
      image: Portfolio2,
      link: "#"
    },
    {
      id: 3,
      title: "Fitness Brand Ambassador Program",
      category: "Influencer Marketing",
      image: Portfolio3,
      link: "#"
    },
    {
      id: 4,
      title: "Travel & Lifestyle Influencer Collaboration",
      category: "Influencer Marketing",
      image: Portfolio4,
      link: "#"
    },
    {
      id: 5,
      title: "Tech Product Influencer Review Campaign",
      category: "Influencer Marketing",
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
                        Influencer Marketing
                        <br />Campaigns
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
                            Our Recent <span className="color-dt-blue">Influencer Marketing</span> Campaigns
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
                            Amplify your brand's reach and credibility through strategic influencer marketing campaigns. 
                            We connect your brand with authentic influencers who resonate with your target audience, 
                            driving engagement, building trust, and delivering measurable business results.
                        </p>
                    </div>

                    <div className="project-information-item mb-74">
                        <div className="image">
                            <img loading="lazy" width="960" height="570"
                                src={WebAppImage1} alt="Influencer Marketing Services" />
                        </div>
                        <div className="content">
                            <p className="title h6 fw-6 letter-space--3 ">
                                Service Information
                            </p>
                            <ul>
                                <li>
                                    Service Type:
                                    <p className="h6 fw-6 letter-space--3 color-black">Influencer Marketing Campaigns</p>
                                </li>
                                <li>
                                    Influencer Tiers:
                                    <p className="h6 fw-6 letter-space--3 color-black">Micro, Macro, Mega, Celebrity</p>
                                </li>
                                <li>
                                    Campaign Types:
                                    <p className="h6 fw-6 letter-space--3 color-black">Product Reviews, Giveaways, Brand Ambassadors</p>
                                </li>
                                <li>
                                    Platforms:
                                    <p className="h6 fw-6 letter-space--3 color-black">Instagram, YouTube, LinkedIn</p>
                                </li>
                                <li>
                                    Deliverables:
                                    <p className="h6 fw-6 letter-space--3 color-black">Content Creation, Performance Reports</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-challenges-item flat-spacing-2">
                        <p className="h3 title lh-100 fw-6 letter-space--3 color-dt-black mb-22">
                            Campaign Features & Benefits
                        </p>
                        <p className="desc ff-2 color-paragraph mb-30">
                            Our influencer marketing campaigns are designed to build authentic connections, 
                            increase brand visibility, and drive conversions through trusted voices in your industry.
                        </p>

                        <ul>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Strategic Influencer Selection –</span> 
                                Data-driven influencer discovery and vetting to ensure perfect brand-influencer alignment.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Campaign Strategy & Planning –</span>
                                Comprehensive campaign development with clear objectives and creative direction.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Content Creation & Management –</span>
                                Collaborate with influencers to create authentic, engaging content that resonates with audiences.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Performance Tracking –</span> 
                                Real-time monitoring of campaign performance and ROI metrics.
                            </li>
                            <li className="text-body-2 color-paragraph">
                                <span className="fw-6 color-dt-black letter-space--3">Long-term Partnerships –</span>
                                Build sustainable brand ambassador relationships for ongoing brand advocacy.
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
                                    Campaign Lifecycle
                                </p>
                                <div className="desc ff-2 color-paragraph">
                                    Our proven campaign management process ensures smooth execution, 
                                    authentic content, and maximum return on your influencer investment.
                                </div>
                                <ul>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Strategy & Planning
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Influencer Discovery & Vetting
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Outreach & Negotiation
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Campaign Execution & Management
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph">
                                        Analysis & Optimization
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-7">
                            <div className="image">
                                <img loading="lazy" width="740" height="470"
                                    src={WebAppImage2} alt="Influencer Marketing Process" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="image-section mb-74">
                    <img loading="lazy" 
                        src={WebAppImage3} alt="Influencer Marketing Showcase" />
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
                                Influencer marketing leverages the trust and reach of social media personalities 
                                to build brand awareness, drive authentic engagement, and generate conversions 
                                through genuine content and recommendations.
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="text ff-2 color-paragraph">
                                We specialize in creating influencer marketing campaigns that deliver real 
                                business results. Our team takes a strategic approach to influencer selection, 
                                identifying partners who align with your brand values and have genuine influence 
                                over your target audience. We manage every aspect of your campaign from start 
                                to finish, including influencer outreach, contract negotiation, content brief 
                                development, and performance tracking. Our campaigns are built on authentic 
                                relationships that translate into meaningful content and genuine audience 
                                connections. We work with influencers across all tiers - from micro-influencers 
                                with highly engaged niche audiences to mega influencers with massive reach. 
                                Whether you're looking for product reviews, brand ambassador programs, or large-scale 
                                campaigns, we have the expertise and relationships to make it happen. We provide 
                                comprehensive reporting that demonstrates the impact of your investment, including 
                                reach, engagement, sentiment analysis, and conversion metrics. With our influencer 
                                marketing services, you can build brand credibility, expand your audience, and 
                                drive sustainable business growth through the power of authentic recommendations.
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