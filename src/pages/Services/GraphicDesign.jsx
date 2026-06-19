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

export default function GraphicDesign() {
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
                            <span style={{ color: "var(--digital-marketing-light)" }}>Graphic</span>
                            <br />Design
                            <br />Services
                        </h1>
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">Graphic Design</span>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="915" height="470"
                            src={Services1Image} alt="Graphic Design Services" />
                    </div>
                </div>
            </div>
        </div>
        

        
        <section className="section-strategy p-services flat-spacing-1">
            <div className="container">
                <div className="heading-section mb-70 text-center">
                    <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                        Visual Storytelling. <span>Creative Excellence.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        <span style={{color:"var(--digital-marketing-blue)"}}>We believe in </span> powerful visuals,
                        <br />{" "}<span style={{color:"var(--digital-marketing-light)" }}>not just designs</span>. Our approach
                        <br />{" "}combines creativity, strategy, and brand identity.
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
                                <img src="./assets/images/logo/logo-white-marketing-card.svg" alt="image" />
                                
                            </div>
                            <div className="content">
                                <div className="h5 title fw-6 letter-space--3">
                                    Creating compelling visuals, brand identities, and designs that captivate and convert.
                                </div>
                                <p className="desc ff-2 fw-5">
                                    We ensure every design tells your brand story and leaves a lasting impression
                                </p>
                                <div className="list-benefit d-flex g-8 flex-wrap">
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Creative Visual Solutions</span>
                                    </div>
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Brand Identity Design</span>
                                    </div>
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Strategic Visual Communication</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="image">
                            <img loading="lazy" width="553" height="500"
                                src={Services2Image} alt="Graphic Design Strategy" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="growth-card style-2">
                            <div className="top-card">
                                <div className="counter-item">
                                    <div className="counter mb-25">
                                        <div className="number-counter flex fs-65 fw-6">
                                            <span className="number odometer color-primary h1 letter-space--3 fw-6"
                                                data-to="94" data-inviewport="yes"> 0 </span>
                                            <span className="fs-60 lh-100 fw-6">%</span>
                                        </div>
                                    </div>
                                    <p className="text-body-1 fw-6 lh-100 ff-2 fw-6 color-paragraph letter-space--2">
                                        Visual brand recall & recognition improvement</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="content-card">
                                <p className="desc mb-50 ff-2 color-paragraph">
                                    We create stunning visual identities and designs that capture attention, communicate your message, and build lasting brand connections.
                                </p>
                                <a href="#" className="tf-btn style-big style-color-dt-blue">
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
                        Comprehensive Graphic Design Services. <span>Create, Communicate, Inspire.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        <span style={{color:"var(--digital-marketing-blue)"}}>We deliver</span> <span style={{color:"var(--digital-marketing-light)"}}>stunning</span> graphic
                        <br />{" "}design solutions for your brand
                    </h2>
                </div>

                <div className="services-item-list mb-20 hover-img">
                    <div className="left-item">
                        <span className="number ff-2 color-paragraph">01</span>
                        <div className="item-content">
                            <a href="/service-details" className="title fw-6 h3 letter-space--3 lh-100">Brand Identity & Logo Design</a>

                            <div className="text ff-2 mb-25 color-paragraph">
                                We create memorable brand identities and logos that capture your brand essence, values, and vision, making your business instantly recognizable.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Custom Logo Design & Development</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Brand Style Guides & Guidelines</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Color Palette & Typography Selection</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Brand Identity Systems</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/service-details" className="tf-btn style-big style-border">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        src={Services3Image} alt="Brand Identity & Logo Design" />
                    </a>
                </div>

                <div className="services-item-list mb-20 hover-img">
                    <div className="left-item">
                        <span className="number ff-2 color-paragraph">02</span>
                        <div className="item-content">
                            <a href="/service-details" className="title fw-6 h3 letter-space--3 lh-100">Print & Marketing Collateral</a>

                            <div className="text ff-2 mb-25 color-paragraph">
                                We design professional print materials and marketing collateral that communicate your brand message effectively and leave a lasting impression.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Brochures & Flyers Design</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Business Cards & Stationery</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Posters & Banners Design</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Packaging & Label Design</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/service-details" className="tf-btn style-big style-border">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                       src={Services4Image} alt="Print & Marketing Collateral" />
                    </a>
                </div>

                <div className="services-item-list mb-20 hover-img">
                    <div className="left-item">
                        <span className="number ff-2 color-paragraph">03</span>
                        <div className="item-content">
                            <a href="/service-details" className="title fw-6 h3 letter-space--3 lh-100">Digital Design & Social Graphics</a>

                            <div className="text ff-2 mb-25 color-paragraph">
                                We create engaging digital designs and social media graphics that capture attention, drive engagement, and strengthen your online presence.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Social Media Posts & Ads</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Website & Digital Graphics</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Email & Newsletter Templates</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Banner Ads & Display Graphics</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/service-details" className="tf-btn style-big style-border">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/service-details" className="image">
                        <img loading="lazy" width="550" height="300"
                        src={Services5Image} alt="Digital Design & Social Graphics" />
                    </a>
                </div>

                <div className="services-item-list mb-20 hover-img">
                    <div className="left-item">
                        <span className="number ff-2 color-paragraph">04</span>
                        <div className="item-content">
                            <a href="/service-details" className="title fw-6 h3 letter-space--3 lh-100">Motion Graphics & Animation</a>

                            <div className="text ff-2 mb-25 color-paragraph">
                                We create dynamic motion graphics and animations that bring your brand to life, making complex ideas simple and engaging through visual storytelling.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Animated Explainer Videos</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Motion Graphics & Visual Effects</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Logo Animation & Brand Motion</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Social Media Video Content</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/service-details" className="tf-btn style-big style-border">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        src={Services6Image} alt="Motion Graphics & Animation" />
                    </a>
                </div>

                <div className="services-item-list">
                    <div className="left-item">
                        <span className="number ff-2 color-paragraph">05</span>
                        <div className="item-content">
                            <a href="/service-details" className="title fw-6 h3 letter-space--3 lh-100">Illustration & Creative Graphics</a>

                            <div className="text ff-2 mb-25 color-paragraph">
                                We create custom illustrations and creative graphics that add personality and uniqueness to your brand, setting you apart from the competition.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Custom Illustrations & Icons</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Infographic Design & Visualization</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Character Design & Mascots</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Patterns & Background Designs</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/service-details" className="tf-btn style-big style-border">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        src={Services7Image} alt="Illustration & Creative Graphics" />
                    </a>
                </div>
            </div>

        </section>
        

        
        <section className="section-cta p-services flat-spacing-1">
            <div className="container">
                <div className="heading-section">
                    <h1 className="title fw-6 letter-space--3 color-dt-black mb-70">
                        <span style={{ color: "var(--digital-marketing-blue)" }}>Ready to create</span> visual
                        <br />{" "}experiences that inspire
                        <br />{" "}with <span style={{ color: "var(--digital-marketing-light)" }}>graphic design expertise</span>
                    </h1>
                </div>
                <div className="section-cta-inner d-flex align-items-end justify-content-between g-30">
                    <div className="left">
                        <div className="text h5 fw-5 color-paragraph lh-35 ff-2 letter-space--2">
                            Graphic design is the visual language 
                            of your brand, creating connections 
                            that resonate and inspire action.
                        </div>

                        <div className="bottom d-flex g-10 rg-30 align-items-end justify-content-between">
                            <div className="image img-min">
                                <img loading="lazy" width="270" height="215"
                                    src={Services9Image} alt="Graphic Design" />
                                </div>
                            <div className="right-bottom">
                                <ul className="list-benefit d-flex flex-column g-8 mb-25">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Creative Design Solutions</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Brand Identity Development</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Custom Visual Content</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Strategic Design Consulting</span>
                                    </li>
                                </ul>
                                <a href="#" className="tf-btn style-color-dt-blue">
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
                            src={Services8Image} alt="Graphic Design Success" />
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