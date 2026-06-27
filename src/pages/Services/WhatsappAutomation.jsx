import DESLOGO from "../../assets/images/header/DES_logo_white.png";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidePopup from '../../components/sidePopup';
//import Services1Image from '../../assets/images/services/img-page-title-3.jpg';
import Services1Image from '../../assets/images/services/whatsapp-automation/whatsapp-automation-hero-img.png'
import Services2Image from '../../assets/images/services/img-section-strategy-2.jpg';
import Services3Image from '../../assets/images/services/whatsapp-automation/whatsapp-automation-img-1.png';
import Services4Image from '../../assets/images/services/whatsapp-automation/whatsapp-automation-img-2.png';
import Services5Image from '../../assets/images/services/whatsapp-automation/whatsapp-automation-img-3.png';
import Services6Image from '../../assets/images/services/whatsapp-automation/whatsapp-automation-img-4.png';
import Services7Image from '../../assets/images/services/whatsapp-automation/whatsapp-automation-img-5.png';
import Services8Image from '../../assets/images/services/img-cta-p-services-2.jpg';
import Services9Image from '../../assets/images/services/img-cta-p-services-1.jpg';
import logoWhiteMarketingCard from '../../assets/images/services/logo-white-marketing-card.svg';

export default function WhatsAppAutomation() {
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
                            <span style={{ color: "var(--digital-marketing-light)" }}>WhatsApp</span>
                            <br />{" "}Automation
                            <br />{" "}Solutions
                        </h1>
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">WhatsApp Automation</span>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="915" height="470"
                            src={Services1Image} alt="WhatsApp Automation Services" />
                    </div>
                </div>
            </div>
        </div>
        

        
        <section className="section-strategy p-services flat-spacing-1">
            <div className="container">
                <div className="heading-section mb-70 text-center">
                    <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                        Connect Instantly. <span>Engage Personally.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        <span style={{color:"var(--digital-marketing-blue)"}}>We believe in </span> smart automation,
                        <br />{" "}<span style={{color:"var(--digital-marketing-light)" }}>not just broadcasting</span>. Our approach
                        <br />{" "}combines personalization, automation, and customer engagement.
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
                                    Automating conversations, nurturing leads, and delivering personalized customer experiences at scale.
                                </div>
                                <p className="desc ff-2 fw-5">
                                    We ensure every WhatsApp campaign drives engagement, builds relationships, and converts customers
                                </p>
                                <div className="list-benefit d-flex g-8 flex-wrap">
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Smart Automation</span>
                                    </div>
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Personalized Engagement</span>
                                    </div>
                                    <div className="benefit-item d-flex align-items-center g-10">
                                        <i className="icon-check fs-24"></i>
                                        <span className="ff-2 fw-5">Conversational Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="image">
                            <img loading="lazy" width="553" height="500"
                                src={Services2Image} alt="WhatsApp Automation Strategy" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="growth-card style-2">
                            <div className="top-card">
                                <div className="counter-item">
                                    <div className="counter mb-25">
                                        <div className="number-counter flex fs-65 fw-6">
                                            <span className="number odometer color-primary h1 letter-space--3 fw-6"
                                                data-to="98" data-inviewport="yes"> 0 </span>
                                            <span className="fs-60 lh-100 fw-6">%</span>
                                        </div>
                                    </div>
                                    <p className="text-body-1 fw-6 lh-100 ff-2 fw-6 color-paragraph letter-space--2">
                                        WhatsApp message open rate</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="content-card">
                                <p className="desc mb-50 ff-2 color-paragraph">
                                    We help businesses leverage WhatsApp automation to engage customers, nurture leads, and drive conversions through personalized conversations at scale.
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
                        Comprehensive WhatsApp Automation Services. <span>Automate, Engage, Convert.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        <span style={{color:"var(--digital-marketing-blue)"}}>We deliver</span> <span style={{color:"var(--digital-marketing-light)"}}>powerful</span> WhatsApp
                        <br />{" "}automation solutions for your business
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
                        <span className="number ff-2"style={{color:"#ffffff"}}>01</span>
                        <div className="item-content">
                            <a href="/whatsapp-automation-service-details" className="title fw-6 h3 letter-space--3 lh-100">WhatsApp Business API Setup & Integration</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We set up and integrate WhatsApp Business API with your existing systems, enabling automated messaging, customer engagement, and scalable communication.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">API Configuration & Integration</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">CRM & System Integration</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Business Profile Setup</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Compliance & Best Practices</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/whatsapp-automation-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/whatsapp-automation-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        src={Services3Image} alt="WhatsApp API Integration" />
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
                        <span className="number ff-2">02</span>
                        <div className="item-content">
                            <a href="/whatsapp-automation-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Automated Broadcast & Campaigns</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We create and manage automated WhatsApp broadcast campaigns that deliver personalized messages to your audience at scale while maintaining authenticity.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Segmented Broadcast Campaigns</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Personalized Message Templates</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Interactive Polls & Surveys</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Campaign Analytics & Reporting</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/whatsapp-automation-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/whatsapp-automation-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                       src={Services4Image} alt="WhatsApp Broadcast Campaigns" />
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
                        <span className="number ff-2">03</span>
                        <div className="item-content">
                            <a href="/whatsapp-automation-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Chatbots & Automated Conversations</a>

                            <div className="text ff-2 mb-25 ">
                                We develop intelligent WhatsApp chatbots that handle customer inquiries, qualify leads, and provide instant responses 24/7.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">AI-Powered Chatbot Development</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Lead Qualification & Routing</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Multi-Language Support</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 mb-12" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Conversation Flow Design</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/whatsapp-automation-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/whatsapp-automation-service-details" className="image">
                        <img loading="lazy" width="550" height="300"
                        src={Services5Image} alt="WhatsApp Chatbots" />
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
                            <a href="/whatsapp-automation-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>E-Commerce & Payment Integration</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We integrate WhatsApp with your e-commerce platform, enabling automated order confirmations, payment processing, and customer support.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Order & Payment Confirmations</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Product Catalog Integration</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Abandoned Cart Recovery</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Customer Support Automation</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/whatsapp-automation-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/whatsapp-automation-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        src={Services6Image} alt="E-Commerce Integration" />
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
                            <a href="/whatsapp-automation-service-details" className="title fw-6 h3 letter-space--3 lh-100" style={{color:"#ffffff"}}>Analytics, Reporting & Optimization</a>

                            <div className="text ff-2 mb-25" style={{color:"#ffffff"}}>
                                We provide comprehensive analytics and reporting on your WhatsApp campaigns, helping you understand performance and optimize for better results.
                            </div>
                            <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Message Performance Tracking</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Engagement & Conversion Analytics</span>
                                    </li>
                                </ul>
                                <ul className="list-benefit d-flex flex-column">
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">A/B Testing & Optimization</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7" style={{color:"#ffffff"}}>
                                        <i className="icon-check fs-24"></i>
                                        <span className="letter-space--2">Custom Dashboard Reports</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/whatsapp-automation-service-details" className="tf-btn style-big style-borders">
                                <span className="text-btn">Read more</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <a href="/whatsapp-automation-service-details" className="image">
                        <img loading="lazy" width="550" height="300" 
                        src={Services7Image} alt="WhatsApp Analytics" />
                    </a>
                </div>
            </div>

        </section>
        

        
        <section className="section-cta p-services flat-spacing-1">
            <div className="container">
                <div className="heading-section">
                    <h1 className="title fw-6 letter-space--3 color-dt-black mb-70">
                        <span style={{ color: "var(--digital-marketing-blue)" }}>Ready to automate</span> your
                        <br />{" "}WhatsApp conversations
                        <br />{" "}with <span style={{ color: "var(--digital-marketing-light)" }}>WhatsApp automation expertise</span>
                    </h1>
                </div>
                <div className="section-cta-inner d-flex align-items-end justify-content-between g-30">
                    <div className="left">
                        <div className="text h5 fw-5 color-paragraph lh-35 ff-2 letter-space--2">
                            WhatsApp automation transforms how 
                            you connect with customers, delivering 
                            personalized experiences at scale.
                        </div>

                        <div className="bottom d-flex g-10 rg-30 align-items-end justify-content-between">
                            <div className="image img-min">
                                <img loading="lazy" width="270" height="215"
                                    src={Services9Image} alt="WhatsApp Automation" />
                                </div>
                            <div className="right-bottom">
                                <ul className="list-benefit d-flex flex-column g-8 mb-25">
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">API Setup & Integration</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Automated Broadcasting</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Chatbot Development</span>
                                    </li>
                                    <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                                        <i className="icon-check fs-18"></i>
                                        <span className="letter-space--2 text-nowrap">Performance Analytics</span>
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
                            src={Services8Image} alt="WhatsApp Automation Success" />
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