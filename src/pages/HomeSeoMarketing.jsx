import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomeSeoMarketing() {
  return (
    <>
      <main id="wrapper">
        
        <div className="preload preload-container">
            <div className="spinner-circle lg style-color-sm-pink">
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
        

        
        <section className="section-hero-2">
            <div className="image-bg">
                <img src="./assets/images/section/bg-s-hero-h-sm.jpg" alt="Image" />
            </div>
            <div className="image-sharp">
                <div className="image-icon">
                    <img loading="lazy" width="214" height="500" src="./assets/images/icon/img-rocket.png" alt="Image" />
                </div>
                <div className="img-sharp-bg">
                    <img src="./assets/images/section/sharp-section-hero-4.png" alt="Image" />
                </div>
            </div>
            <div className="container w-1490">
                <div className="section-inner">
                    <div className="text-big text-uppercase fs-200 lh-100 letter-space--7 fw-7 split-text effect-right">
                        SEO Marketing
                    </div>

                    <div className="content-section">
                        <div className="title fs-85 lh-100 fw-6 letter-space--3 title-animation">
                            Results-driven SEO marketing
                            solutions
                        </div>

                        <div className="content">
                            <p className="text mb-30 h6 ff-2 fw-5 lh-35 title-animation">
                                We are a results-focused SEO marketing agency dedicated to helping businesses increase
                                visibility customers.
                            </p>
                            <a href="#" className="tf-btn style-big style-sm-color-pink title-animation">
                                <span className="text-btn">Learn more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        

        
        <section className="section-services h-sm flat-spacing-13">
            <div className="container w-1810">
                <div
                    className="heading-section style-home-sm mb-70 d-flex align-items-center justify-content-between flex-wrap g-30">
                    <div className="left">
                        <div className="sub-title h5 fw-5 letter-space--2 mb-20 wow fadeInUp">
                            We provide, <span>SEO marketing</span>
                        </div>
                        <div className="title h2 fw-6 letter-space--3 title-animation">
                            Data-Driven SEO Agency
                            <br />Helping Businesses Rank
                            <br />& Scale
                        </div>
                    </div>
                    <div className="right">
                        <div
                            className="desc text-body-1 lh-30 letter-space--2 ff-2 fw-5 color-paragraph mb-30 title-animation">
                            We are a growth-driven SEO marketing agency focused
                            <br />on helping brands rank higher, reach the right audience,
                            <br />and achieve measurable results.
                        </div>
                        <a href="/services-1" className="tf-btn style-big style-border border-color-8 title-animation">
                            <span className="text-btn">View more</span>
                            <span className="icon-btn">
                                <i className="icon-arrow-up-right"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div dir="ltr" className="sw-services-h-sm swiper tf-swiper" data-laptop="4" data-preview="3"
                    data-tablet="2" data-mobile-sm="1" data-mobile="1" data-space-lg="30" data-space-md="30"
                    data-space="30" data->
                    <div className="swiper-wrapper">
                        
                        <div className="swiper-slide">
                            <div className="services-item style-3">
                                <div className="top-item">
                                    <a href="/service-details" className=" name-services h5 fw-6 letter-space--3">SEO
                                        Strategy &
                                        Consulting</a>
                                    <i className="icon-seo-strategy"></i>
                                </div>

                                <div className="content-item">
                                    <p className="desc ff-2">
                                        We create a clear roadmap to improve search visibility and sustainable
                                        growth
                                        consulting
                                        approach focuses.
                                    </p>
                                    <ul className="list-benefit">
                                        <li className="benefit-item d-flex align-items-center g-7 mb-15">
                                            <i className="icon-check"></i>
                                            <span className="fw-5 letter-space--2 lh-100">Customized SEO roadmap</span>
                                        </li>
                                        <li className="benefit-item d-flex align-items-center g-7">
                                            <i className="icon-check"></i>
                                            <span className="fw-5 letter-space--2 lh-100">In-depth website and SEO
                                                audit</span>
                                        </li>
                                    </ul>
                                    <a href="/service-details" className="tf-btn style-border border-color-8">
                                        <span className="text-btn">View Details</span>
                                        <span className="icon-btn">
                                            <i className="icon-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className="services-item style-3">
                                <div className="top-item">
                                    <a href="/service-details"
                                        className=" name-services h5 fw-6 letter-space--3">Keyword Research &
                                        competitive analysis</a>
                                    <i className="icon-keyword-research"></i>
                                </div>

                                <div className="content-item">
                                    <p className="desc ff-2">
                                        We identify high-value keywords uncover competitive opportunities to
                                        position
                                        your brand ahead in search results.
                                    </p>
                                    <ul className="list-benefit">
                                        <li className="benefit-item d-flex align-items-center g-7 mb-15">
                                            <i className="icon-check"></i>
                                            <span className="fw-5 letter-space--2 lh-100">High-intent keyword
                                                identification</span>
                                        </li>
                                        <li className="benefit-item d-flex align-items-center g-7">
                                            <i className="icon-check"></i>
                                            <span className="fw-5 letter-space--2 lh-100">Search volume and difficulty
                                                analysis</span>
                                        </li>
                                    </ul>
                                    <a href="/service-details" className="tf-btn style-border border-color-8">
                                        <span className="text-btn">View Details</span>
                                        <span className="icon-btn">
                                            <i className="icon-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className="services-item style-3">
                                <div className="top-item">
                                    <a href="/service-details" className=" name-services h5 fw-6 letter-space--3">Link
                                        Building authority
                                        development</a>
                                    <i className="icon-link-building"></i>
                                </div>

                                <div className="content-item">
                                    <p className="desc ff-2">
                                        We create a clear roadmap to improve search visibility and sustainable
                                        growth
                                        consulting approach focuses.
                                    </p>
                                    <ul className="list-benefit">
                                        <li className="benefit-item d-flex align-items-center g-7 mb-15">
                                            <i className="icon-check"></i>
                                            <span className="fw-5 letter-space--2 lh-100">Competitor backlink
                                                analysis</span>
                                        </li>
                                        <li className="benefit-item d-flex align-items-center g-7">
                                            <i className="icon-check"></i>
                                            <span className="fw-5 letter-space--2 lh-100">Digital PR and brand
                                                mentions</span>
                                        </li>
                                    </ul>
                                    <a href="/service-details" className="tf-btn style-border border-color-8">
                                        <span className="text-btn">View Details</span>
                                        <span className="icon-btn">
                                            <i className="icon-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className="services-item style-3">
                                <div className="top-item">
                                    <a href="/service-details" className=" name-services h5 fw-6 letter-space--3">SEO
                                        Audits and
                                        performance tracking</a>
                                    <i className="icon-seo-audits"></i>
                                </div>

                                <div className="content-item">
                                    <p className="desc ff-2">
                                        We conduct comprehensive SEO audits to uncover technical issues,
                                        optimization
                                        gaps, and growth opportunities impacting.
                                    </p>
                                    <ul className="list-benefit">
                                        <li className="benefit-item d-flex align-items-center g-7 mb-15">
                                            <i className="icon-check"></i>
                                            <span className="fw-5 letter-space--2 lh-100">Keyword ranking and
                                                monitoring</span>
                                        </li>
                                        <li className="benefit-item d-flex align-items-center g-7">
                                            <i className="icon-check"></i>
                                            <span className="fw-5 letter-space--2 lh-100">Custom dashboards and
                                                reports</span>
                                        </li>
                                    </ul>
                                    <a href="/service-details" className="tf-btn style-border border-color-8">
                                        <span className="text-btn">View Details</span>
                                        <span className="icon-btn">
                                            <i className="icon-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sw-dot-pagination tf-sw-pagination style-seo-pink d-xxl-none mt-20"></div>
                </div>

            </div>
        </section>
        

        
        <section className="section-about h-sm mb-70">
            <div className="container w-1810">
                <div className="section-top d-flex">
                    <div className="image-parallx parallax-main overflow-hidden img-1 wow fadeInLeft">
                        <div className="image parallax-scaleInUp-large">
                            <img loading="lazy" width="545" height="570"
                                src="./assets/images/section/img-section-about-h-sm-1.jpg" alt="Image" />
                        </div>
                    </div>
                    <div className="heading-section style-home-sm mb-70">
                        <div className="sub-title h5 fw-5 letter-space--2 mb-20 wow fadeInUp">
                            Learn, <span>About us</span>
                        </div>
                        <div className="title h2 fw-6 letter-space--3 mb-40 title-animation">
                            Driving Growth Through
                            <br />SEO Excellence
                        </div>
                        <div className="desc text-body-1 lh-30 fw-5 ff-2 color-paragraph mb-70 title-animation">
                            We are a results-driven SEO marketing agency committed to
                            <br />helping businesses increase visibility, attract the right audience,
                            <br />and achieve measurable growth.
                        </div>
                        <a href="/about-us" className="tf-btn style-big style-sm-color-purple title-animation">
                            <span className="text-btn">Learn more us</span>
                            <span className="icon-btn">
                                <i className="icon-arrow-up-right"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="section-bottom d-flex align-items-end">
                    <div className="wg-counter d-flex justify-content-between g-30">
                        <div className="counter-item">
                            <div className="counter mb-10">
                                <div className="number-counter flex">
                                    <span className="number odometer color-sm-blue h1 fw-6" data-to="98"
                                        data-inviewport="yes"> 0
                                    </span>
                                    <span className="h1 fw-6 color-sm-blue">%</span>
                                </div>
                            </div>
                            <p className="text h5 fw-6 ff-2 color-paragraph lh-35">
                                Clients satisfied and repeating
                            </p>
                        </div>
                        <div className="counter-item">
                            <div className="counter mb-10">
                                <div className="number-counter flex">
                                    <span className="number odometer color-sm-blue h1 fw-6" data-to="4.9"
                                        data-inviewport="yes"> 0
                                    </span>
                                </div>
                            </div>
                            <p className="text h5 fw-6 ff-2 color-paragraph lh-35">
                                Based on clients reviews (1000+)
                            </p>
                        </div>
                        <div className="counter-item">
                            <div className="counter mb-10">
                                <div className="number-counter flex">
                                    <span className="number odometer color-sm-blue h1 fw-6" data-to="10"
                                        data-inviewport="yes"> 0
                                    </span>
                                    <span className="h1 fw-6 color-sm-blue">+</span>
                                </div>
                            </div>
                            <p className="text h5 fw-6 ff-2 color-paragraph lh-35">
                                Years of experience in SEO Marketing
                            </p>
                        </div>
                    </div>

                    <div className="image-parallx parallax-main overflow-hidden img-2  wow fadeInRight">
                        <div className="image parallax-scaleInUp-large">
                            <img loading="lazy" width="545" height="570"
                                src="./assets/images/section/img-section-about-h-sm-2.jpg" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-process h-sm">
            <div className="section-process-inner flat-spacing-1">
                <div className="img-sharp-section sharp-1">
                    <img src="./assets/images/icon/img-sharp-s-process-top.png" alt="Image" />
                </div>
                <div className="img-sharp-section sharp-2">
                    <img src="./assets/images/icon/img-sharp-s-process-bottom.png" alt="Image" />
                </div>
                <div className="container">
                    <div className="heading-section style-home-sm mb-58 d-flex align-items-center flex-column">
                        <div className="sub-title style-bg-5 h5 fw-5 letter-space--2 mb-20 wow fadeInUp">
                            How does <span>it work</span>
                        </div>
                        <div className="title h2 fw-6 letter-space--3 color-white title-animation">
                            Built on Best-Practice Workflows
                        </div>
                    </div>
                </div>
                <div className="content-section">
                    <div className="img-sharp-2 d-none d-md-block">
                        <img src="./assets/images/icon/img-sharp-s-process-h-sm-2.png" alt="Image" />
                    </div>

                    <div className="container">
                        <div className="row rg-30">
                            <div className="col-md-4">
                                <div className="left d-flex flex-column justify-content-end">
                                    <div className="process-item item-1">
                                        <p className="number text-body-1 fw-6 letter-space--3 mb-30">
                                            01
                                        </p>
                                        <a href="#" className="name-process text-body-1 letter-space--3 fw-6 mb-15">Website
                                            Technical
                                            Audit</a>
                                        <p className="desc ff-2">
                                            A Website Technical Audit is the foundation
                                            <br />of any successful SEO strategy.
                                        </p>
                                    </div>

                                    <div className="image img-1 d-none d-md-block">
                                        <img loading="lazy" width="350" height="230"
                                            src="./assets/images/widget/img-s-process-h-sm-1.jpg" alt="Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img-icon">
                                    <div className="sharp-blur"></div>
                                    <div className="ellipse ellipse-1"></div>
                                    <img loading="lazy" width="224" height="400"
                                        src="./assets/images/icon/img-rocket-2.png" alt="Image" className="icon-img" />
                                </div>

                                <div className="process-item item-2">
                                    <p className="number text-body-1 fw-6 letter-space--3 mb-30">
                                        02
                                    </p>
                                    <a href="#" className="name-process text-body-1 letter-space--3 fw-6 mb-15">Technical
                                        SEO
                                        Monitoring</a>
                                    <p className="desc ff-2">
                                        Technical SEO Monitoring is a continuous
                                        <br />process that keeps your website.
                                    </p>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="right d-flex flex-column justify-content-end">
                                    <div className="process-item item-3">
                                        <p className="number text-body-1 fw-6 letter-space--3 mb-30">
                                            03
                                        </p>
                                        <a href="#"
                                            className="name-process text-body-1 letter-space--3 fw-6 mb-15">Reporting &
                                            Optimization</a>
                                        <p className="desc ff-2">
                                            Reporting & Optimization is the key to measuring
                                            <br />success and continuously improving.
                                        </p>
                                    </div>
                                    <div className="image img-2  d-none d-md-block">
                                        <img loading="lazy" width="350" height="230"
                                            src="./assets/images/widget/img-s-process-h-sm-2.jpg" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-projects h-sm flat-spacing-1">
            <div className="container w-1810">
                <div
                    className="heading-section style-home-sm mb-70 d-flex align-items-center justify-content-between flex-wrap g-30">
                    <div className="left">
                        <div className="sub-title h5 letter-space--2 fw-5 mb-15 wow fadeInUp">
                            Explore our works. <span>100+ projects</span>
                        </div>
                        <div className="title h2 fw-6 letter-space--3 title-animation">
                            Let’s explore our awards
                            <br />winning projects
                        </div>
                    </div>
                    <div className="right">
                        <div className="desc text-body-1 ff-2 lh-32 color-paragraph mb-30 title-animation">
                            We focus on quality, efficiency, and impact, helping
                            <br />businesses achieve growth operations.
                        </div>
                        <a href="/portfolio-1" className="tf-btn style-big style-sm-color-blue title-animation">
                            <span className="text-btn">View All Works</span>
                            <span className="icon-btn">
                                <i className="icon-arrow-up-right"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="list-project-item">
                    <div className="project-item style-2 hover-img">
                        <a href="/portfolio-details" className="image">
                            <img loading="lazy" width="552" height="530"
                                src="./assets/images/project/project-item-7.jpg" alt="Image" />
                        </a>
                        <div className="content">
                            <div className="meta-project">
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Branding</a>
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Design</a>
                            </div>
                            <a href="/portfolio-details" className="name-project h4 fw-6 letter-space--3">
                                Search Visibility Boost Campaign
                            </a>
                        </div>
                    </div>

                    <div className="project-item style-2 hover-img">
                        <a href="/portfolio-details" className="image">
                            <img loading="lazy" width="552" height="530"
                                src="./assets/images/project/project-item-8.jpg" alt="Image" />
                        </a>
                        <div className="content">
                            <div className="meta-project">
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Branding</a>
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Design</a>
                            </div>
                            <a href="/portfolio-details" className="name-project h4 fw-6 letter-space--3">
                                Keyword Domination Project
                            </a>
                        </div>
                    </div>

                    <div className="project-item style-2 hover-img">
                        <a href="/portfolio-details" className="image">
                            <img loading="lazy" width="552" height="530"
                                src="./assets/images/project/project-item-9.jpg" alt="Image" />
                        </a>
                        <div className="content">
                            <div className="meta-project">
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Branding</a>
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Design</a>
                            </div>
                            <a href="/portfolio-details" className="name-project h4 fw-6 letter-space--3">
                                High-Impact SEO Transformation
                            </a>
                        </div>
                    </div>

                    <div className="project-item style-2 hover-img">
                        <a href="/portfolio-details" className="image">
                            <img loading="lazy" width="552" height="530"
                                src="./assets/images/project/project-item-10.jpg" alt="Image" />
                        </a>
                        <div className="content">
                            <div className="meta-project">
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Branding</a>
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Design</a>
                            </div>
                            <a href="/portfolio-details" className="name-project h4 fw-6 letter-space--3">
                                Top Rankings SEO Initiative
                            </a>
                        </div>
                    </div>

                    <div className="project-item style-2 hover-img">
                        <a href="/portfolio-details" className="image">
                            <img loading="lazy" width="552" height="530"
                                src="./assets/images/project/project-item-11.jpg" alt="Image" />
                        </a>
                        <div className="content">
                            <div className="meta-project">
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Branding</a>
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Design</a>
                            </div>
                            <a href="/portfolio-details" className="name-project h4 fw-6 letter-space--3">
                                Data-Driven Search Growth
                            </a>
                        </div>
                    </div>

                    <div className="project-item style-2 hover-img">
                        <a href="/portfolio-details" className="image">
                            <img loading="lazy" width="552" height="530"
                                src="./assets/images/project/project-item-12.jpg" alt="Image" />
                        </a>
                        <div className="content">
                            <div className="meta-project">
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Branding</a>
                                <a href="#" className="ff-2 fw-5 letter-space--2 lh-100">Design</a>
                            </div>
                            <a href="/portfolio-details" className="name-project h4 fw-6 letter-space--3">
                                Conversion-Focused SEO Strategy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-features h-sm bg-color-sm-gray flat-spacing-1 pb-50">
            <div className="container w-1810">
                <div
                    className="heading-section style-home-sm mb-77 d-flex align-items-center justify-content-between flex-wrap g-30">
                    <div className="left">
                        <div className="sub-title h5 letter-space--2 mb-15 wow fadeInUp">
                            What We Provide, <span>Best features</span>
                        </div>
                        <div className="title h2 fw-6 letter-space--3 title-animation">
                            Core features are designed
                            <br />deliver results, streamline
                        </div>
                    </div>
                    <div className="right">
                        <div className="desc ff-2 text-body-1 lh-32 color-paragraph mb-30 title-animation">
                            We focus on quality, efficiency, and impact, helping
                            <br />businesses achieve growth operations.
                        </div>
                        <a href="/about-us" className="tf-btn style-big style-sm-color-blue title-animation">
                            <span className="text-btn">View More</span>
                            <span className="icon-btn">
                                <i className="icon-arrow-up-right"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="row rg-30">
                    <div className="col-sm-6">
                        <div className="features-item">
                            <div className="image-hover">
                                <img loading="lazy" width="875" height="345"
                                    src="./assets/images/widget/img-hover-features-h-sm.jpg" alt="Image" />
                            </div>
                            <div className="icon mb-40">
                                <i className="icon-trust-built"></i>
                            </div>
                            <a href="#" className="name-features fw-6 fs-35 lh-100 letter-space--3 mb-22">Trust Built on
                                Clarity & Consistency</a>
                            <p className="desc ff-2">
                                Reliability and transparency are at the core of everything we do. We believe in
                                clear
                                communication, honest strategies, and realistic expectations—so you always know
                                what’s
                                happening and why.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="features-item">
                            <div className="image-hover">
                                <img loading="lazy" width="875" height="345"
                                    src="./assets/images/widget/img-hover-features-h-sm.jpg" alt="Image" />
                            </div>
                            <div className="icon mb-40">
                                <i className="icon-top-tier"></i>
                            </div>
                            <a href="#" className="name-features fw-6 fs-35 lh-100 letter-space--3 mb-22">Top-Tier
                                Service,
                                Trusted Worldwide</a>
                            <p className="desc ff-2">
                                We deliver world-class service by combining global best practices with deep industry
                                expertise. Every solution is crafted with precision, innovation, and a commitment to
                                excellence—ensuring the highest standards in quality and performance.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="features-item">
                            <div className="image-hover">
                                <img loading="lazy" width="875" height="345"
                                    src="./assets/images/widget/img-hover-features-h-sm.jpg" alt="Image" />
                            </div>
                            <div className="icon mb-40">
                                <i className="icon-technology-built"></i>
                            </div>
                            <a href="#" className="name-features fw-6 fs-35 lh-100 letter-space--3 mb-22">Technology
                                Built
                                for Performance</a>
                            <p className="desc ff-2">
                                Technology Built for Performance means using advanced, reliable, and scalable tools
                                designed to deliver speed, accuracy, a measurable results. We leverage modern
                                platforms,
                                automation, and data-driven systems to optimize workflows, enhance efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="features-item">
                            <div className="image-hover">
                                <img loading="lazy" width="875" height="345"
                                    src="./assets/images/widget/img-hover-features-h-sm.jpg" alt="Image" />
                            </div>
                            <div className="icon mb-40">
                                <i className="icon-industry-awards"></i>
                            </div>
                            <a href="#" className="name-features fw-6 fs-35 lh-100 letter-space--3 mb-22">Industry
                                Awards &
                                Achievements</a>
                            <p className="desc ff-2">
                                Our Industry Awards & Achievements reflect a consistent commitment excellence,
                                innovation, and measurable results. These recognitions highlight expertise,
                                dedication,
                                and ability to deliver high-quality solutions that meet industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-team h-sm flat-spacing-7">
            <div className="container w-1810">
                <div className="heading-section style-home-sm mb-70 d-flex align-items-center flex-column">
                    <div className="sub-title h5 letter-space--2 mb-15 wow fadeInUp">
                        Meet Our, <span>Team members</span>
                    </div>
                    <div className="title h2 fw-6 letter-space--3 title-animation">
                        We’ve 100+ Professional Team members
                    </div>
                </div>

                <div dir="ltr" className="swiper tf-swiper" data-laptop="4" data-preview="3" data-tablet="3"
                    data-mobile-sm="2" data-mobile="1" data-space-lg="30" data-space-md="30" data-space="30">
                    <div className="swiper-wrapper">
                        
                        <div className="swiper-slide">
                            <div className="team-item hover-img">
                                <div className="top-item mb-30">
                                    <a href="/team-details" className="image">
                                        <img loading='lazy' alt='Image' width='422' height='470'
                                            src='./assets/images/team/img-team-6.jpg' />
                                    </a>
                                    <ul className="list-social d-flex align-items-center">
                                        <li><a href="#" className="item-social"><i className="icon-fb"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-in"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-ig"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-x"></i></a></li>
                                    </ul>
                                </div>

                                <div className="content-item">
                                    <a href="/team-details" className="h4 name fw-6 lh-100 letter-space--3 mb-10">Ryan
                                        Anthony
                                        Bennett</a>
                                    <a href="#" className="position ff-2">CEO & Founder</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className="team-item hover-img">
                                <div className="top-item mb-30">
                                    <a href="/team-details" className="image">
                                        <img loading='lazy' alt='Image' width='422' height='470'
                                            src='./assets/images/team/img-team-7.jpg' />
                                    </a>
                                    <ul className="list-social d-flex align-items-center">
                                        <li><a href="#" className="item-social"><i className="icon-fb"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-in"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-ig"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-x"></i></a></li>
                                    </ul>
                                </div>
                                <div className="content-item">
                                    <a href="/team-details" className="h4 name fw-6 lh-100 letter-space--3 mb-10">Oliver
                                        Matthew
                                        Collins</a>
                                    <a href="#" className="position ff-2">Senior web developer</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className="team-item hover-img">
                                <div className="top-item mb-30">
                                    <a href="/team-details" className="image">
                                        <img loading='lazy' alt='Image' width='422' height='470'
                                            src='./assets/images/team/img-team-8.jpg' />
                                    </a>
                                    <ul className="list-social d-flex align-items-center">
                                        <li><a href="#" className="item-social"><i className="icon-fb"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-in"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-ig"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-x"></i></a></li>
                                    </ul>
                                </div>
                                <div className="content-item">
                                    <a href="/team-details" className="h4 name fw-6 lh-100 letter-space--3 mb-10">Lucas
                                        Benjamin
                                        Wright</a>
                                    <a href="#" className="position ff-2">Head of User UI designer</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className="team-item hover-img">
                                <div className="top-item mb-30">
                                    <a href="/team-details" className="image">
                                        <img loading='lazy' alt='Image' width='422' height='470'
                                            src='./assets/images/team/img-team-9.jpg' />
                                    </a>
                                    <ul className="list-social d-flex align-items-center">
                                        <li><a href="#" className="item-social"><i className="icon-fb"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-in"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-ig"></i></a></li>
                                        <li><a href="#" className="item-social"><i className="icon-x"></i></a></li>
                                    </ul>
                                </div>
                                <div className="content-item">
                                    <a href="/team-details"
                                        className="h4 name fw-6 lh-100 letter-space--3 mb-10">William Henry
                                        Foster</a>
                                    <a href="#" className="position ff-2">HR & COO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sw-dot-pagination tf-sw-pagination style-seo-pink d-xxl-none mt-20"></div>
                </div>
            </div>
        </section>
        

        
        <section className="section-infiniteSlide h-sm">
            <div className="infiniteSlide-app style-2 infiniteSlide-3 bg-sm-blue">
                <div className="infiniteSlide infiniteSlide-wrapper tf-marquee" data-clone="3">
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            SEO Camping
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Digital marketing
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Technical SEO Audit
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Link building authority
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Influencer Marketing
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Website Technical Audit
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Social Media Marketing
                        </div>
                    </div>
                </div>
            </div>
            <div className="infiniteSlide-app style-2 infiniteSlide-4 bg-sm-purple">
                <div className="infiniteSlide infiniteSlide-wrapper tf-marquee" data-clone="3" data-style={{"right":""}}>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            SEO Camping
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Digital marketing
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Technical SEO Audit
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Link building authority
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Influencer Marketing
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Website Technical Audit
                        </div>
                    </div>
                    
                    <div className="infiniteSlide-slide">
                        <div className="h3 fw-6 marquee-item d-flex align-items-center g-10">
                            <i className="icon-sparkle fs-24"></i>
                            Social Media Marketing
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-pricing h-sm flat-spacing-1">
            <div className="container w-1810">
                <div
                    className="heading-section style-home-sm mb-70 d-flex align-items-center justify-content-between flex-wrap g-30">
                    <div className="left">
                        <div className="sub-title h5 fw-5 letter-space--2 mb-15 wow fadeInUp">
                            Best Pricing <span>Package</span>
                        </div>
                        <div className="title h2 fw-6 letter-space--3 title-animation">
                            Upfront Pricing with zero
                            <br />hidden charges
                        </div>
                    </div>
                    <div className="right">
                        <div className="desc text-body-1 ff-2 lh-32 color-paragraph mb-30 title-animation">
                            Each plan is carefully structured to deliver maximum
                            <br />return on investment, combining strategic.
                        </div>
                        <div className="list-price-tabs wow fadeInUp">
                            <ul className="tab-product" role="tablist">
                                <li className="nav-tab-item" role="presentation">
                                    <a href="#tab1" data-bs-toggle="tab" role="tab"
                                        className="active fw-6 letter-space--3 lh-100">Monthly</a>
                                </li>
                                <li className="nav-tab-item" role="presentation">
                                    <a href="#tab2" data-bs-toggle="tab" role="tab"
                                        className="fw-6 letter-space--3 d-flex align-items-center g-7 lh-100">Yearly
                                        <span className="badge-sale lh-100">Save 15%</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flat-animate-tab left">
                    <div className="tab-content">
                        <div className="tab-pane active show" id="tab1" role="tabpanel">
                            <div className="row rg-30">
                                <div className="col-dm-6 col-xl-4">
                                    <div className="pricing-card">
                                        <div className="top-card d-flex align-items-center g-28">
                                            <div className="icon">
                                                <i className="icon-starter-seo"></i>
                                            </div>
                                            <div className="content-top mb-7">
                                                <a href="#" className="name-card h3 fw-6 letter-space--3 mb-10">
                                                    Starter SEO
                                                </a>
                                                <p className="text ff-2 text-body-2 fw-5 lh-100 letter-space--2">
                                                    Perfect for startups and small businesses
                                                </p>
                                            </div>
                                        </div>
                                        <div className="middel-card">
                                            <p className="price h2 fw-6 letter-space--3 mb-20">$19.00<span
                                                    className="h6 fw-5">/per monthly</span></p>
                                            <p className="desc ff-2">
                                                Starter SEO is designed for small businesses & new websites looking
                                                to
                                                build a strong foundation in search engines.
                                            </p>
                                        </div>
                                        <div className="bottom-card">
                                            <ul className="list-benefit-2 mb-53">
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Advanced keyword strategy
                                                </li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    on-page optimization</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Technical SEO fixes,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Content optimization,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Local SEO Camping</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5">
                                                    Link
                                                    building Authority</li>
                                            </ul>
                                            <a href="#"
                                                className="tf-btn style-big style-border style-full-w border-color-8">
                                                <span className="text-btn">Choose This package</span>
                                                <span className="icon-btn">
                                                    <i className="icon-arrow-up-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="pricing-card active">
                                        <div className="top-card d-flex align-items-center g-28">
                                            <div className="icon">
                                                <i className="icon-professional-seo"></i>
                                            </div>
                                            <div className="content-top mb-7">
                                                <a href="#" className="name-card h3 fw-6 letter-space--3 mb-10">
                                                    Professional SEO
                                                </a>
                                                <p className="text ff-2 text-body-2 fw-5 lh-100 letter-space--2">
                                                    Competitive markets and steady growth
                                                </p>
                                            </div>
                                        </div>
                                        <div className="middel-card">
                                            <p className="price h2 fw-6 letter-space--3 mb-20">$48.00<span
                                                    className="h6 fw-5">/per monthly</span></p>
                                            <p className="desc ff-2">
                                                Professional SEO is designed for small businesses & new websites
                                                looking
                                                to build a strong foundation
                                            </p>
                                        </div>
                                        <div className="bottom-card">
                                            <ul className="list-benefit-2 mb-53">
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Advanced keyword strategy
                                                </li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    on-page optimization</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Technical SEO fixes,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Content optimization,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Local SEO Camping</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5">
                                                    Link
                                                    building Authority</li>
                                            </ul>
                                            <a href="#" className="tf-btn style-big style-full-w style-sm-color-pink">
                                                <span className="text-btn">Choose This package</span>
                                                <span className="icon-btn">
                                                    <i className="icon-arrow-up-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="pricing-card">
                                        <div className="top-card d-flex align-items-center g-28">
                                            <div className="icon">
                                                <i className="icon-enterprise-seo"></i>
                                            </div>
                                            <div className="content-top mb-7">
                                                <a href="#" className="name-card h3 fw-6 letter-space--3 mb-10">
                                                    Enterprise SEO
                                                </a>
                                                <p className="text ff-2 text-body-2 fw-5 lh-100 letter-space--2">
                                                    Large brands & high-competition keywords
                                                </p>
                                            </div>
                                        </div>
                                        <div className="middel-card">
                                            <p className="price h2 fw-6 letter-space--3 mb-20">$95.00<span
                                                    className="h6 fw-5">/per monthly</span></p>
                                            <p className="desc ff-2">
                                                Starter SEO is designed for small businesses & new websites looking
                                                to
                                                build a strong foundation in search engines.
                                            </p>
                                        </div>
                                        <div className="bottom-card">
                                            <ul className="list-benefit-2 mb-53">
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Advanced keyword strategy
                                                </li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    on-page optimization</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Technical SEO fixes,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Content optimization,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Local SEO Camping</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5">
                                                    Link
                                                    building Authority</li>
                                            </ul>
                                            <a href="#"
                                                className="tf-btn style-big style-border style-full-w border-color-8">
                                                <span className="text-btn">Choose This package</span>
                                                <span className="icon-btn">
                                                    <i className="icon-arrow-up-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="tab-pane" id="tab2" role="tabpanel">
                            <div className="row rg-30">
                                <div className="col-md-6 col-xl-4">
                                    <div className="pricing-card">
                                        <div className="top-card d-flex align-items-center g-28">
                                            <div className="icon">
                                                <i className="icon-starter-seo"></i>
                                            </div>
                                            <div className="content-top mb-7">
                                                <a href="#" className="name-card h3 fw-6 letter-space--3 mb-10">
                                                    Starter SEO
                                                </a>
                                                <p className="text ff-2 text-body-2 fw-5 lh-100 letter-space--2">
                                                    Perfect for startups and small businesses
                                                </p>
                                            </div>
                                        </div>
                                        <div className="middel-card">
                                            <p className="price h2 fw-6 letter-space--3 mb-20">$29.00<span
                                                    className="h6 fw-5">/per year</span></p>
                                            <p className="desc ff-2">
                                                Starter SEO is designed for small businesses & new websites looking
                                                to
                                                build a strong foundation in search engines.
                                            </p>
                                        </div>
                                        <div className="bottom-card">
                                            <ul className="list-benefit-2 mb-53">
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Advanced keyword strategy
                                                </li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    on-page optimization</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Technical SEO fixes,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Content optimization,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Local SEO Camping</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5">
                                                    Link
                                                    building Authority</li>
                                            </ul>
                                            <a href="#"
                                                className="tf-btn style-big style-border style-full-w border-color-8">
                                                <span className="text-btn">Choose This package</span>
                                                <span className="icon-btn">
                                                    <i className="icon-arrow-up-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="pricing-card active">
                                        <div className="top-card d-flex align-items-center g-28">
                                            <div className="icon">
                                                <i className="icon-professional-seo"></i>
                                            </div>
                                            <div className="content-top mb-7">
                                                <a href="#" className="name-card h3 fw-6 letter-space--3 mb-10">
                                                    Professional SEO
                                                </a>
                                                <p className="text ff-2 text-body-2 fw-5 lh-100 letter-space--2">
                                                    Competitive markets and steady growth
                                                </p>
                                            </div>
                                        </div>
                                        <div className="middel-card">
                                            <p className="price h2 fw-6 letter-space--3 mb-20">$78.00<span
                                                    className="h6 fw-5">/per year</span></p>
                                            <p className="desc ff-2">
                                                Professional SEO is designed for small businesses & new websites
                                                looking
                                                to build a strong foundation
                                            </p>
                                        </div>
                                        <div className="bottom-card">
                                            <ul className="list-benefit-2 mb-53">
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Advanced keyword strategy
                                                </li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    on-page optimization</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Technical SEO fixes,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Content optimization,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Local SEO Camping</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5">
                                                    Link
                                                    building Authority</li>
                                            </ul>
                                            <a href="#" className="tf-btn style-big style-full-w style-sm-color-pink">
                                                <span className="text-btn">Choose This package</span>
                                                <span className="icon-btn">
                                                    <i className="icon-arrow-up-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="pricing-card">
                                        <div className="top-card d-flex align-items-center g-28">
                                            <div className="icon">
                                                <i className="icon-enterprise-seo"></i>
                                            </div>
                                            <div className="content-top mb-7">
                                                <a href="#" className="name-card h3 fw-6 letter-space--3 mb-10">
                                                    Enterprise SEO
                                                </a>
                                                <p className="text ff-2 text-body-2 fw-5 lh-100 letter-space--2">
                                                    Large brands & high-competition keywords
                                                </p>
                                            </div>
                                        </div>
                                        <div className="middel-card">
                                            <p className="price h2 fw-6 letter-space--3 mb-20">$125.00<span
                                                    className="h6 fw-5">/per year</span></p>
                                            <p className="desc ff-2">
                                                Starter SEO is designed for small businesses & new websites looking
                                                to
                                                build a strong foundation in search engines.
                                            </p>
                                        </div>
                                        <div className="bottom-card">
                                            <ul className="list-benefit-2 mb-53">
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Advanced keyword strategy
                                                </li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    on-page optimization</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Technical SEO fixes,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Content optimization,</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5 mb-28">
                                                    Local SEO Camping</li>
                                                <li className="benefit-2-item text-body-1 ff-2 letter-space--2 fw-5">
                                                    Link
                                                    building Authority</li>
                                            </ul>
                                            <a href="#"
                                                className="tf-btn style-big style-border style-full-w border-color-8">
                                                <span className="text-btn">Choose This package</span>
                                                <span className="icon-btn">
                                                    <i className="icon-arrow-up-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="section-blog h-sm flat-spacing-3">
            <div className="container w-1810">
                <div className="heading-section style-home-sm mb-70 d-flex align-items-center flex-column">
                    <div className="sub-title h5 fw-5 letter-space--2 mb-12 wow fadeInUp">
                        Latest, <span>News & blog</span>
                    </div>
                    <div className="title h2 fw-6 letter-space--3 title-animation">
                        Stay updated with latest insights.
                    </div>
                </div>

                <div dir="ltr" className="swiper tf-swiper" data-laptop="4" data-preview="3" data-tablet="2"
                    data-mobile-sm="2" data-mobile="1" data-space-lg="30" data-space-md="30" data-space="30">
                    <div className="swiper-wrapper">
                        
                        <div className="swiper-slide">

                            <div className="blog-card style-3 hover-img">
                                <a href="/blog-detail" className="image image-blog">
                                    <img loading="lazy" width="630" height="430"
                                        src="./assets/images/blog/img-blog-card-15.jpg" alt="Image" />
                                </a>
                                <div className="card-content">
                                    <a href="#" className="user-content d-flex align-items-center g-10">
                                        <img loading="lazy" width="30" height="30"
                                            src="./assets/images/avatar/avt-user-blog.jpg" alt="Image" />
                                        <span className="letter-space--2 color-sm-blue fw-6 ff-2">Lucas Benjamin</span>
                                    </a>
                                    <h5 className="name-card fw-6 letter-space--3">
                                        <a href="/blog-detail">
                                            Digital marketing case studies lessons successful campaigns real-world.
                                        </a>
                                    </h5>
                                    <div
                                        className="meta d-flex align-items-center justify-content-between g-30 flex-wrap rg-15">
                                        <a href="#" className="tag ff-2 fw-6">SEO marketing</a>
                                        <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="swiper-slide">

                            <div className="blog-card style-3 hover-img">
                                <a href="/blog-detail" className="image image-blog">
                                    <img loading="lazy" width="630" height="430"
                                        src="./assets/images/blog/img-blog-card-16.jpg" alt="Image" />
                                </a>
                                <div className="card-content">
                                    <a href="#" className="user-content d-flex align-items-center g-10">
                                        <img loading="lazy" width="30" height="30"
                                            src="./assets/images/avatar/avt-user-blog.jpg" alt="Image" />
                                        <span className="letter-space--2 color-sm-blue fw-6 ff-2">William Thomas</span>
                                    </a>
                                    <h5 className="name-card fw-6 letter-space--3">
                                        <a href="/blog-detail">
                                            Technical SEO Checklist for Better Website Performance
                                        </a>
                                    </h5>
                                    <div
                                        className="meta d-flex align-items-center justify-content-between g-30 flex-wrap rg-15">
                                        <a href="#" className="tag ff-2 fw-6">SEO marketing</a>
                                        <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="swiper-slide">

                            <div className="blog-card style-3 hover-img">
                                <a href="/blog-detail" className="image image-blog">
                                    <img loading="lazy" width="630" height="430"
                                        src="./assets/images/blog/img-blog-card-17.jpg" alt="Image" />
                                </a>
                                <div className="card-content">
                                    <a href="#" className="user-content d-flex align-items-center g-10">
                                        <img loading="lazy" width="30" height="30"
                                            src="./assets/images/avatar/avt-user-blog.jpg" alt="Image" />
                                        <span className="letter-space--2 color-sm-blue fw-6 ff-2">Charles
                                            Anderson</span>
                                    </a>
                                    <h5 className="name-card fw-6 letter-space--3">
                                        <a href="/blog-detail">
                                            How to Measure SEO Success KPIs & Analytics Explained
                                        </a>
                                    </h5>
                                    <div
                                        className="meta d-flex align-items-center justify-content-between g-30 flex-wrap rg-15">
                                        <a href="#" className="tag ff-2 fw-6">SEO marketing</a>
                                        <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="swiper-slide">

                            <div className="blog-card style-3 hover-img">
                                <a href="/blog-detail" className="image image-blog">
                                    <img loading="lazy" width="630" height="430"
                                        src="./assets/images/blog/img-blog-card-18.jpg" alt="Image" />
                                </a>
                                <div className="card-content">
                                    <a href="#" className="user-content d-flex align-items-center g-10">
                                        <img loading="lazy" width="30" height="30"
                                            src="./assets/images/avatar/avt-user-blog.jpg" alt="Image" />
                                        <span className="letter-space--2 color-sm-blue fw-6 ff-2">Maxwell
                                            Peterson</span>
                                    </a>
                                    <h5 className="name-card fw-6 letter-space--3">
                                        <a href="/blog-detail">
                                            On-Page SEO Best Practices That Drive Real Results
                                        </a>
                                    </h5>
                                    <div
                                        className="meta d-flex align-items-center justify-content-between g-30 flex-wrap rg-15">
                                        <a href="#" className="tag ff-2 fw-6">SEO marketing</a>
                                        <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="sw-dot-pagination tf-sw-pagination style-seo-pink d-xxl-none mt-20"></div>

                </div>
            </div>
        </section>
        

        
        <section className="section-newletter h-sm flat-spacing-2">
            <div className="container w-1810">
                <div className="wg-newletter">
                    <div className="image-bg">
                        <img loading="lazy" width="1780" height="436" src="./assets/images/widget/bg-newletter-h-sm.jpg"
                            alt="Image" />
                    </div>
                    <div className="content-wg">
                        <h2 className="title fw-6 letter-space--3 mb-30 title-animation">
                            Subscribe Newsletter to
                            Get more updates
                        </h2>
                        <p className="text text-body-1 lh-30 fw-5 ff-2 title-animation">
                            Stay updated with the latest SEO insights, industry trends, & actionable
                            tips. Subscribe to our newsletter and receive valuable resources.
                        </p>
                    </div>
                    <form action="#" className="form-newlatter">
                        <h3 className="title-form mb-34 fw-6 letter-space--3">
                            Subscribe Our Newsletter
                        </h3>

                        <fieldset className="input-newsletter d-flex g-10 mb-18 flex-wrap">
                            <input type="email" placeholder="Email address" className="flex-1" required />
                            <button type="submit" className="tf-btn style-big style-sm-color-purple">
                                <span className="text-btn">Subscribe</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </button>
                        </fieldset>
                        <fieldset className="box-checkbox d-flex align-items-center g-10">
                            <input type="checkbox" name="checkbox-1" id="checkbox-1"
                                className="input-check-box style-black" />
                            <label htmlFor="checkbox-1" className="text-checkbox ff-2">I here by accept all <a href="#"
                                    className="ff-2 fw-6">terms & conditions.</a></label>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
        

        <Footer />

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
    </div>
    

    
    <div className="progress-wrap style-color-sm-pink">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style={{"transition":"strokeDashoffset 10ms linear","strokeDasharray":"307.919, 307.919","strokeDashoffset":"277.672"}}>
            </path>
        </svg>
    </div>
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    </>
  );
}
