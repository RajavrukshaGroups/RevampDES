import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidePopup from '../../components/sidePopup';
import Services2Image from '../../assets/images/services2/img-features-p-services.jpg';
import FaqServices2Image from '../../assets/images/services2/img-faqs-p-services.jpg';
import BgServices2Image from '../../assets/images/services2/img-bg-cta-p-service-2.jpg';

export default function Services2() {
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
                            <span className="breadkcum-active">Services 02</span>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="915" height="470"
                            // src="./assets/images/page-title/img-page-title-3.jpg" alt="Image" />
                            src={Services2Image} alt="Image" />
                    </div>
                </div>
            </div>
        </div>
        

        
        <section className="section-features p-services2 flat-spacing-1">
            <div className="container">
                <div className="section-features-inner d-flex justify-content-between">
                    <div className="heading-section">
                        <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                            Real strategies. <span>Real strategies.</span>
                        </div>
                        <h2 className="title letter-space--3 fw-6 mb-30">
                            <span style={{ color: "var(--digital-marketing-blue)" }}>Solutions</span> for growth
                            <br /> {" "}minded <span style={{ color: "var(--digital-marketing-light)" }}>brands</span>
                        </h2>
                        <div className="desc color-paragraph ff-2">
                            We offer a full suite of digital marketing services designed to help your brand grow,
                            engage, and succeed online. From SEO and PPC to social media, branding, and web development,
                            our strategies are tailored to your business.
                        </div>
                        <div className="line-header-section"></div>

                        <div className="d-flex justify-content-between flex-wrap g-30">
                            <div className="list-box-icon">
                                <div className="box-icon mb-30 hover-dt-blue">
                                    <div className="icon">
                                        <i className="icon-targeted-audience"></i>
                                    </div>
                                    <div className="box-content">
                                        <a href="#" className="title text-body-1 lh-30 fw-6 letter-space--3">
                                            Targeted Audience
                                            <br />Engagement
                                        </a>
                                    </div>
                                </div>
                                <div className="box-icon hover-dt-blue">
                                    <div className="icon">
                                        <i className="icon-proven-ranking"></i>
                                    </div>
                                    <div className="box-content">
                                        <a href="#" className="title text-body-1 lh-30 fw-6 letter-space--3">
                                            Proven ranking &
                                            <br />traffic results
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-box-icon">
                                <div className="box-icon mb-30 hover-dt-blue">
                                    <div className="icon">
                                        <i className="icon-roket-4"></i>
                                    </div>
                                    <div className="box-content">
                                        <a href="#" className="title text-body-1 lh-30 fw-6 letter-space--3">
                                            Transparent tech
                                            <br />reporting & results
                                        </a>
                                    </div>
                                </div>

                                <div className="box-icon hover-dt-blue">
                                    <div className="icon">
                                        <i className="icon-integrated-marketing"></i>
                                    </div>
                                    <div className="box-content">
                                        <a href="#" className="title text-body-1 lh-30 fw-6 letter-space--3">
                                            Integrated marketing
                                            <br />roadmap approach
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="630" height="570"
                            // src="./assets/images/section/img-features-p-services.jpg" alt="Image" />
                            src={Services2Image} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-services flat-spacing-3">
            <div className="container">
                <div className="heading-section text-center mb-70">
                    <div className="sub-title h5 mb-15 letter-space--2 fw-5">
                        Smarter Servicves. <span className="color-dt-blue">Stronger Results.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        Services Designed for Results
                    </h2>
                    <div className="desc ff-2 text-body-1 lh-35 fw-5 color-paragraph">
                        Our SEO services are designed to help your business achieve higher visibility,
                        <br />increased website traffic, and measurable growth.
                    </div>
                </div>
                <div className="row rg-30">
                    <div className="col-xl-4 col-md-6">
                        <div className="services-item-2">
                            <div className="img-sharp">
                                <div className="blob-wrapper">
                                    <div className="blob"></div>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="icon-keyword2"></i>
                            </div>
                            <a href="/service-details" className="name-services h5 fw-6 letter-space--3">Keyword
                                Research & Analysis</a>
                            <p className="desc ff-2">
                                We identify the most valuable keywords for your business by analyzing search volume,
                                competition, and user intent.
                            </p>
                            <ul className="list-benefit d-flex flex-column g-8">
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Search Intent Optimization</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Performance Tracking & Updates</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Competitive Keyword Analysis</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-item-2">
                            <div className="img-sharp">
                                <div className="blob-wrapper">
                                    <div className="blob"></div>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="icon-on-page"></i>
                            </div>
                            <a href="/service-details" className="name-services h5 fw-6 letter-space--3">On-Page SEO
                                Optimization</a>
                            <p className="desc ff-2">
                                We optimize every element on your website to improve search engine visibility and user
                                experience.
                            </p>
                            <ul className="list-benefit d-flex flex-column g-8">
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Meta & Description Optimization</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Content Optimization & Keyword</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Internal Linking Strategy</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-item-2">
                            <div className="img-sharp">
                                <div className="blob-wrapper">
                                    <div className="blob"></div>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="icon-link-2"></i>
                            </div>
                            <a href="/service-details" className="name-services h5 fw-6 letter-space--3">Link Building &
                                Outreach</a>
                            <p className="desc ff-2">
                                We strengthen your website’s authority through high-quality, ethical link-building
                                strategies backlinks .
                            </p>
                            <ul className="list-benefit d-flex flex-column g-8">
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">High-Authority Backlink</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Niche-Relevant Link Placement</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Guest Posting & Digital PR</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-item-2">
                            <div className="img-sharp">
                                <div className="blob-wrapper">
                                    <div className="blob"></div>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="icon-seo-audits2"></i>
                            </div>
                            <a href="/service-details" className="name-services h5 fw-6 letter-space--3">SEO Audits &
                                Reporting</a>
                            <p className="desc ff-2">
                                We conduct comprehensive SEO audits to uncover technical issues, content gaps, and
                                optimization opportunities across.
                            </p>
                            <ul className="list-benefit d-flex flex-column g-8">
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Keyword & Ranking Analysis</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Competitor SEO Benchmarking</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Transparent Performance Reporting</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-item-2">
                            <div className="img-sharp">
                                <div className="blob-wrapper">
                                    <div className="blob"></div>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="icon-content2"></i>
                            </div>
                            <a href="/service-details" className="name-services h5 fw-6 letter-space--3">Content
                                Strategy & Creation</a>
                            <p className="desc ff-2">
                                We develop a strategic content plan that strengthens your online presence. For blog
                                posts and landing pages to website.
                            </p>
                            <ul className="list-benefit d-flex flex-column g-8">
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">SEO-Driven Content Planning</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">High-Quality Content Creation</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Brand Voice & Messaging</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-item-2">
                            <div className="img-sharp">
                                <div className="blob-wrapper">
                                    <div className="blob"></div>
                                </div>
                            </div>
                            <div className="icon">
                                <i className="icon-technical2"></i>
                            </div>
                            <a href="/service-details" className="name-services h5 fw-6 letter-space--3">Technical SEO
                                Solutions</a>
                            <p className="desc ff-2">
                                We optimize the technical foundation of your website to ensure search engines can crawl,
                                index, rank pages effectively.
                            </p>
                            <ul className="list-benefit d-flex flex-column g-8">
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Security & HTTPS Optimization</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Mobile & Core Web Vitals Optimization</span>
                                </li>
                                <li className="benefit-item d-flex align-items-center g-7">
                                    <i className="icon-check fs-24"></i>
                                    <span className="ff-2 fw-5">Crawlability & Indexing Fixes</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-cta p-about">
            <div className="image">
                {/* <img src="./assets/images/section/img-bg-cta-p-service-2.jpg" alt="Image" /> */}
                <img loading="lazy" 
                src={BgServices2Image} alt="Image" />
            </div>
            <div className="container">
                <div className="content">
                    <div className="heading-section style-white">
                        <div className="sub-title h5 mb-15 letter-space--2 fw-5">
                            Get Consultations - <span>work together</span>
                        </div>
                        <h2 className="title letter-space--3 fw-6 mb-50">
                            <span style={{ color: "var(--digital-marketing-ligh)" }}>Let’s build </span>a <span style={{ color: "var(--digital-marketing-light)" }}>smarter
                            <br />{" "}marketing strategy</span>
                        </h2>
                        <a href="/contact" className="tf-btn style-big style-color-dt-light">
                            <span className="text-btn">Get Started</span>
                            <span className="icon-btn">
                                <i className="icon-arrow-up-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-faqs p-services-2 flat-spacing-1">
            <div className="container">
                <div className="heading-section text-center mb-70">
                    <div className="sub-title h5 mb-15 letter-space--2 fw-5">
                        Questions & <span className="color-dt-blue">Answers</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6">
                       <span style={{ color: "var(--digital-marketing-blue)" }}>SEO insights</span> & frequently
                        <br />{" "}asked questions
                    </h2>
                </div>
                <div className="row rg-30">
                    <div className="col-lg-6">
                        <div className="wg-according" id="According1">
                            <div className="according-item-2 style-icon-bg-blue mb-20">
                                <p className="header-according">
                                    <a href="#according1" data-bs-toggle="collapse"
                                        className="title-according h6 fw-6 letter-space--3 collapsed">
                                        <span className="text-title">
                                            1. What is SEO and why is it important?
                                        </span>
                                        <span className="icon">
                                            <span></span>
                                        </span>
                                    </a>
                                </p>
                                <div id="according1" className="collapse" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2">
                                            SEO is a long-term strategy. Most websites seeing noticeable improvements
                                            within 3–6 months, depending.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="according-item-2 style-icon-bg-blue mb-20">
                                <p className="header-according">
                                    <a href="#according2" data-bs-toggle="collapse"
                                        className="title-according h6 fw-6 letter-space--3">
                                        <span className="text-title">
                                            2. How long does SEO take to show results?
                                        </span>
                                        <span className="icon">
                                            <span></span>
                                        </span>
                                    </a>
                                </p>
                                <div id="according2" className="collapse show" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2">
                                            SEO is a long-term strategy. Most websites seeing noticeable improvements
                                            within 3–6 months, depending.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="according-item-2 style-icon-bg-blue mb-20">
                                <p className="header-according">
                                    <a href="#according3" data-bs-toggle="collapse"
                                        className="title-according h6 fw-6 letter-space--3 collapsed">
                                        <span className="text-title">
                                            3. Do you guarantee #1 rankings on Google?
                                        </span>
                                        <span className="icon">
                                            <span></span>
                                        </span>
                                    </a>
                                </p>
                                <div id="according3" className="collapse" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2">
                                            SEO is a long-term strategy. Most websites seeing noticeable improvements
                                            within 3–6 months, depending.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="according-item-2 style-icon-bg-blue mb-20">
                                <p className="header-according">
                                    <a href="#according4" data-bs-toggle="collapse"
                                        className="title-according h6 fw-6 letter-space--3 collapsed">
                                        <span className="text-title">
                                            4. What SEO services do you offer?
                                        </span>
                                        <span className="icon">
                                            <span></span>
                                        </span>
                                    </a>
                                </p>
                                <div id="according4" className="collapse" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2">
                                            SEO is a long-term strategy. Most websites seeing noticeable improvements
                                            within 3–6 months, depending.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="according-item-2 style-icon-bg-blue">
                                <p className="header-according">
                                    <a href="#according5" data-bs-toggle="collapse"
                                        className="title-according h6 fw-6 letter-space--3 collapsed">
                                        <span className="text-title">
                                            5. Is SEO suitable for small businesses?
                                        </span>
                                        <span className="icon">
                                            <span></span>
                                        </span>
                                    </a>
                                </p>
                                <div id="according5" className="collapse" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2">
                                            SEO is a long-term strategy. Most websites seeing noticeable improvements
                                            within 3–6 months, depending.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image">
                            <img loading="lazy" width="570" height="670"
                                // src="./assets/images/section/img-faqs-p-services.jpg" alt="Image" />
                                src={FaqServices2Image} alt="Image" />
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
