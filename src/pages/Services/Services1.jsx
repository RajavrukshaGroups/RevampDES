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

export default function Services1() {
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
                            <span style={{ color: "var(--digital-marketing-light)" }}>Performance</span>-
                            <br />Driven Digital
                            <br />Services
                        </h1>
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">Services 01</span>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="915" height="470"
                            // src="./assets/images/page-title/img-page-title-3.jpg" alt="Image" />
                            src={Services1Image} alt="Image" />
                    </div>
                </div>
            </div>
        </div>
        

        
        <section className="section-strategy p-services flat-spacing-1">
            <div className="container">
                <div className="heading-section mb-70 text-center">
                    <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                        Real strategies. <span>Real results.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        <span style={{ color:"var(--digital-marketing-blue)"}}>We believe success </span> comes from
                        <br />{" "}strategy, <span style={{ color:"var(--digital-marketing-light)" }}>not guesswork</span>. Approach
                        <br />{" "} combines deep market insight.
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
                                    Helping businesses connect, convert, and scale digitally.
                                </div>
                                <p className="desc ff-2 fw-5">
                                    We ensure every marketing drives results increased traffic and engagement
                                </p>
                                <div className="list-benefit d-flex g-8 flex-wrap">
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">End-to-End Digital Solutions</span>
                                    </div>
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Smart Strategies. Powerful Results.</span>
                                    </div>
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Helping Brands Grow Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="image">
                            <img loading="lazy" width="553" height="500"
                                // src="./assets/images/section/img-section-strategy-2.jpg" alt="Image" />
                                src={Services2Image} alt="Image" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="growth-card style-2">
                            <div className="top-card">
                                <div className="counter-item">
                                    <div className="counter mb-25">
                                        <div className="number-counter flex fs-65 fw-6">
                                            <span className="number odometer color-primary h1 letter-space--3 fw-6"
                                                data-to="63" data-inviewport="yes"> 0 </span>
                                            <span className="fs-60 lh-100 fw-6">%</span>
                                        </div>
                                    </div>
                                    <p className="text-body-1 fw-6 lh-100 ff-2 fw-6 color-paragraph letter-space--2">
                                        Business develop growth</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="content-card">
                                <p className="desc mb-50 ff-2 color-paragraph">
                                    We help brands increase visibility, engage the right audience, and convert leads
                                    into loyal customers.
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
                        Smart Digital Services. <span>Measurable Results.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        <span style={{color:"var(--digital-marketing-blue)"}}>We provide</span> <span style={{color:"var(--digital-marketing-light)"}}>heigh-quality</span> digital
                        <br />{" "}marketing services
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
                            <a href="/digital-marketing-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Search Engine
                                Optimization
                                (SEO)</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We help attract targeted organic traffic by continuously monitoring performance and
                                adapting
                                to search algorithm changes.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Keyword Research & Strategy</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Link Building & Authority Growth</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">On-Page SEO Optimization</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">SEO Analytics & Reporting</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/digital-marketing-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/digital-marketing-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        //src="./assets/images/widget/services-list-1.jpg" alt="Image" />
                        src={Services3Image} alt="Image" />
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
                        <span className="number ff-2 " style={{color:"#ffffff"}}>02</span>
                        <div className="item-content">
                            <a href="/digital-marketing-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Pay-Per-Click
                                Advertising
                                (PPC)</a>

                            <div className="text ff-2 mb-25 " style={{color:"#ffffff"}}>
                                Pay-Per-Click Advertising (PPC) is a powerful way to drive instant traffic, qualified
                                leads, and measurable results.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Advanced Keyword Research</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Landing Page Optimization</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Conversion-Focused Ad Copy</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Transparent Reporting</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/digital-marketing-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/digital-marketing-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                       // src="./assets/images/widget/services-list-2.jpg" alt="Image" />
                       src={Services4Image} alt="Image" />
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
                        <span className="number ff-2 " style={{color:"#ffffff"}}>03</span>
                        <div className="item-content">
                            <a href="/digital-marketing-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Branding &
                                Digital
                                Strategy</a>

                            <div className="text ff-2 mb-25 " style={{color:"#ffffff"}}>
                                We help brands define a clear identity, compelling message, and strong online presence
                                through research-driven .
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Brand Identity & Positioning</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Strategic Digital Roadmap</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Market & Audience Research</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Consistent Brand Messaging</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/digital-marketing-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/digital-marketing-service-details" className="image">
                        <img loading="lazy" width="550" height="300"
                        //  src="./assets/images/widget/services-list-3.jpg"
                        //     alt="Image" />
                        src={Services5Image} alt="Image" />
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
                        <span className="number ff-2 " style={{color:"#ffffff"}}>04</span>
                        <div className="item-content">
                            <a href="/digital-marketing-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Web Design &
                                Development</a>

                            <div className="text ff-2 mb-25 " style={{color:"#ffffff"}}>
                                Web Design & Development combines creativity, technology, and strategy to build websites
                                that look great better.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Responsive & Friendly Design</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">SEO-Optimized Structure</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Fast & Secure Performance</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Scalable & Future-Ready</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/digital-marketing-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/digital-marketing-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        // src="./assets/images/widget/services-list-4.jpg"
                        //     alt="Image" />
                        src={Services6Image} alt="Image" />
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
                        <span className="number ff-2 " style={{color:"#ffffff"}}>05</span>
                        <div className="item-content">
                            <a href="/digital-marketing-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Influencer
                                Marketing</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We connect your business with relevant influencers across social media platforms to
                                create authentic, engaging campaigns.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Targeted Influencer Selection</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Brand Awareness & Growth</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Cross-Platform Management</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 " style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Strategy & Collaboration</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/digital-marketing-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/digital-marketing-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        // src="./assets/images/widget/services-list-5.jpg"
                        //     alt="Image" />
                        src={Services7Image} alt="Image" />
                    </a>
                </div>
            </div>

        </section>
        

        
        <section className="section-cta p-services flat-spacing-1">
            <div className="container">
                <div className="heading-section">
                    <h1 className="title fw-6 letter-space--3 color-dt-black mb-70">
                        <span style={{ color: "var(--digital-marketing-blue)" }}>Let's create</span> the best
                        <br />{" "}product experience
                        <br />{" "}for <span style={{ color: "var(--digital-marketing-light)" }}>your project</span>
                    </h1>
                </div>
                <div className="section-cta-inner d-flex align-items-end justify-content-between g-30">
                    <div className="left">
                        <div className="text h5 fw-5 color-paragraph lh-35 ff-2 letter-space--2">
                            Influencer Marketing helps your
                            brand connect authentically with
                            your audience trusted voices.
                        </div>

                        <div className="bottom d-flex g-10 rg-30 align-items-end justify-content-between">
                            <div className="image img-min">
                                <img loading="lazy" width="270" height="215"
                                    //src="./assets/images/section/img-cta-p-services-1.jpg" alt="Image" />
                                    src={Services9Image} alt="Image" />
                                </div>
                            <div className="right-bottom">
                                <ul className="list-benefit d-flex flex-column g-8 mb-25">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Targeted Influencer Selection</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Brand Awareness & Growth</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Cross-Platform Management</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Strategy & Collaboration</span>
                                    </li>
                                </ul>
                                <a href="#" className="tf-btn style-color-dt-blue">
                                    <span className="text-btn">Read more</span>
                                    <span className="icon-btn">
                                        <i className="icon-arrow-up-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="630" height="430"
                            //src="./assets/images/section/img-cta-p-services-2.jpg" alt="Image" />
                            src={Services8Image} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
        

        <Footer />

        <div className="overlay-filter" id="overlay-filter"></div>
    </main>

    
    <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="pop-up-nav-mobile">
            <div className="canvas-header">
                <a href="#" className="logo-site">
                    <img src="./assets/images/logo/logo-mobi-1.svg" alt="" />
                </a>
                <span className="icon icon-close" data-bs-dismiss="offcanvas"></span>
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
    

    
    {/* <div className="modal fade modalRight pop-up-menu-mobile" id="pop-up-sidebar">
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
                            <a href="#" className="text-body-2 ff-2">245 Park Avenue, Suite 300 New York</a>
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
    </div> */}

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
