import DESLOGO from "../../assets/images/header/DES_logo_white.png";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidePopup from '../../components/sidePopup';
import Services1Image from '../../assets/images/services/img-page-title-3.jpg';
import Services2Image from '../../assets/images/services/img-section-strategy-2.jpg';
import Services3Image from '../../assets/images/services/services-list-1.jpg';
import Services4Image from '../../assets/images/services/services-list-2.jpg';
import Services5Image from '../../assets/images/services/services-list-3.jpg';
import Services6Image from '../../assets/images/services/services-list-4.jpg';
import Services7Image from '../../assets/images/services/services-list-5.jpg';
import Services8Image from '../../assets/images/services/img-cta-p-services-2.jpg';
import Services9Image from '../../assets/images/services/img-cta-p-services-1.jpg';
import logoWhiteMarketingCard from '../../assets/images/services/logo-white-marketing-card.svg';

export default function SEO() {
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
        

        
        <div className="page-title">
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
            <div className="container w-1810">
                <div className="page-title-content">
                    <div className="content content-2">
                        <h1 className="title mb-xl-50">
                            <span style={{ color: "var(--digital-marketing-light)" }}>SEO</span>-
                            <br />{" "}Driven Growth
                            <br />{" "}Strategies
                        </h1>
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">SEO</span>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="915" height="470"
                            src={Services1Image} alt="SEO Services" />
                    </div>
                </div>
            </div>
        </div>
        

        
        <section className="section-strategy p-services flat-spacing-1">
            <div className="container">
                <div className="heading-section mb-70 text-center">
                    <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                        Organic Growth. <span>Measurable Rankings.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        <span style={{color:"var(--digital-marketing-blue)"}}>We believe in </span> sustainable SEO
                        <br />{" "}strategies, <span style={{color:"var(--digital-marketing-light)" }}>not shortcuts</span>. Our approach
                        <br />{" "}combines data, content, and technical excellence.
                    </h2>
                </div>

                <div className="row rg-30">
                    <div className="col-lg-4">
                        <div className="marketing-card style-2">
                            <div className="img-sharp">
                                <div className="blob-wrapper">
                                    <div className="blob"></div>
                                </div>
                            </div>
                            <div className="logo">
                                <img src={logoWhiteMarketingCard} alt="image" />
                                
                            </div>
                            <div className="content">
                                <div className="h5 title fw-6 letter-space--3">
                                    Driving organic traffic, building authority, and boosting search rankings.
                                </div>
                                <p className="desc ff-2 fw-5">
                                    We ensure every SEO effort drives qualified traffic and sustainable growth
                                </p>
                                <div className="list-benefit d-flex g-8 flex-wrap">
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Data-Driven SEO Solutions</span>
                                    </div>
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Proven Ranking Strategies</span>
                                    </div>
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Sustainable Organic Growth</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="image">
                            <img loading="lazy" width="553" height="500"
                                src={Services2Image} alt="SEO Strategy" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="growth-card style-2">
                            <div className="top-card">
                                <div className="counter-item">
                                    <div className="counter mb-25">
                                        <div className="number-counter flex fs-65 fw-6">
                                            <span className="number odometer color-primary h1 letter-space--3 fw-6"
                                                data-to="87" data-inviewport="yes"> 0 </span>
                                            <span className="fs-60 lh-100 fw-6">%</span>
                                        </div>
                                    </div>
                                    <p className="text-body-1 fw-6 lh-100 ff-2 fw-6 color-paragraph letter-space--2">
                                        Average organic traffic increase</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="content-card">
                                <p className="desc mb-50 ff-2 color-paragraph">
                                    We help businesses improve visibility, attract qualified leads, and achieve top search engine rankings through proven SEO strategies.
                                </p>
                                <a href="/contact" className="tf-btn style-big style-color-dt-blue">
                                    <span className="text-btn">Get Started</span>
                                    <span className="icon-btn">
                                        <i className="icon-arrow-up-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-services p-services">

            <div className="container">
                <div className="heading-section mb-70 text-center">
                    <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                        Comprehensive SEO Services. <span>Rank Higher, Grow Faster.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        <span style={{color:"var(--digital-marketing-blue)"}}>We deliver</span> <span style={{color:"var(--digital-marketing-light)"}}>top-tier</span> SEO
                        <br />{" "}solutions for sustainable growth
                    </h2>
                </div>

                <div className="services-item-list mb-20 hover-img" style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}>
                    <div className="left-item">
                        <span className="number ff-2 " style={{color:"#ffffff"}}>01</span>
                        <div className="item-content">
                            <a href="/seo-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Keyword Research & Strategy</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We identify high-value keywords that drive targeted traffic and align with your business goals through comprehensive market analysis and competitor research.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Competitor Keyword Analysis</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Long-Tail Keyword Optimization</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Search Intent Analysis</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Keyword Mapping & Planning</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/seo-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/seo-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        src={Services3Image} alt="Keyword Research" />
                    </a>
                </div>

                <div className="services-item-list mb-20 hover-img" style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}>
                    <div className="left-item">
                        <span className="number ff-2" style={{color:"#ffffff"}}>02</span>
                        <div className="item-content">
                            <a href="/seo-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>On-Page SEO Optimization</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We optimize every element of your website—from meta tags to content structure—ensuring search engines understand and rank your pages effectively.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Meta Tag & Title Optimization</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Content Structure & Headings</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Image & Schema Optimization</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Internal Linking Strategy</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/seo-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/seo-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                       src={Services4Image} alt="On-Page SEO" />
                    </a>
                </div>

                <div className="services-item-list mb-20 hover-img" style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}>
                    <div className="left-item">
                        <span className="number ff-2" style={{color:"#ffffff"}}>03</span>
                        <div className="item-content">
                            <a href="/seo-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Technical SEO & Site Audit</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We conduct comprehensive technical audits to identify and fix issues that impact search performance, from site speed to mobile responsiveness.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Crawling & Indexing Optimization</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Site Architecture & UX</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Core Web Vitals Optimization</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">HTTPS & Security Implementation</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/seo-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/seo-service-details" className="image">
                        <img loading="lazy" width="550" height="300"
                        src={Services5Image} alt="Technical SEO" />
                    </a>
                </div>

                <div className="services-item-list mb-20 hover-img" style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}>
                    <div className="left-item">
                        <span className="number ff-2" style={{color:"#ffffff"}}>04</span>
                        <div className="item-content">
                            <a href="/seo-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Link Building & Authority Growth</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We build high-quality, authoritative backlinks that boost your domain authority and improve search rankings through ethical white-hat techniques.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Quality Backlink Acquisition</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Guest Posting Strategy</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Authority & Trust Building</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Competitor Backlink Analysis</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/seo-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/seo-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        src={Services6Image} alt="Link Building" />
                    </a>
                </div>

                <div className="services-item-list" style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}>
                    <div className="left-item">
                        <span className="number ff-2" style={{color:"#ffffff"}}>05</span>
                        <div className="item-content">
                            <a href="/seo-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>SEO Analytics & Performance Tracking</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We provide comprehensive analytics and transparent reporting, tracking key metrics to measure success and continuously optimize your SEO strategy.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Keyword Ranking Monitoring</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Traffic & Conversion Analysis</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Custom Dashboard Reports</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Continuous Optimization Insights</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/seo-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/seo-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        src={Services7Image} alt="SEO Analytics" />
                    </a>
                </div>
            </div>

        </section>
        

        
        <section className="section-cta p-services flat-spacing-1">
            <div className="container">
                <div className="heading-section">
                    <h1 className="title fw-6 letter-space--3 color-dt-black mb-70">
                        <span style={{ color: "var(--digital-marketing-blue)" }}>Ready to rank</span> at the top
                        <br />{" "}of search results
                        <br />{" "}with <span style={{ color: "var(--digital-marketing-light)" }}>SEO expertise</span>
                    </h1>
                </div>
                <div className="section-cta-inner d-flex align-items-end justify-content-between g-30">
                    <div className="left">
                        <div className="text h5 fw-5 color-paragraph lh-35 ff-2 letter-space--2">
                            SEO is the foundation of sustainable 
                            digital growth, helping your brand 
                            become discoverable and authoritative.
                        </div>

                        <div className="bottom d-flex g-10 rg-30 align-items-end justify-content-between">
                            <div className="image img-min">
                                <img loading="lazy" width="270" height="215"
                                    src={Services9Image} alt="SEO Growth" />
                                </div>
                            <div className="right-bottom">
                                <ul className="list-benefit d-flex flex-column g-8 mb-25">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Comprehensive SEO Audit</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Custom Growth Strategy</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Monthly Performance Reports</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Dedicated SEO Expert Support</span>
                                    </li>
                                </ul>
                                <a href="/contact" className="tf-btn style-color-dt-blue">
                                    <span className="text-btn">Get Started</span>
                                    <span className="icon-btn">
                                        <i className="icon-arrow-up-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="630" height="430"
                            src={Services8Image} alt="SEO Success" />
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
    
    <SidePopup />
    
    
    <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style={{"transition":"strokeDashoffset 10ms linear","strokeDasharray":"307.919, 307.919","strokeDashoffset":"277.672"}}>
            </path>
        </svg>
    </div>
    
    </>
  );
}