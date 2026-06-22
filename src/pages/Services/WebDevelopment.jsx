// import React from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import SidePopup from "../../components/sidePopup";
// import Services1Image from "../../assets/images/services/img-page-title-3.jpg";
// import Services2Image from "../../assets/images/services/img-section-strategy-2.jpg";
// import Services3Image from "../../assets/images/services/services-list-1.jpg";
// import Services4Image from "../../assets/images/services/services-list-2.jpg";
// import Services5Image from "../../assets/images/services/services-list-3.jpg";
// import Services6Image from "../../assets/images/services/services-list-4.jpg";
// import Services7Image from "../../assets/images/services/services-list-5.jpg";
// import Services8Image from "../../assets/images/services/img-cta-p-services-2.jpg";
// import Services9Image from "../../assets/images/services/img-cta-p-services-1.jpg";

// export default function WebDevelopment() {
//   return (
//     <>
//       <main id="wrapper">
//         <div className="preload preload-container">
//           <div className="spinner-circle lg">
//             <span className="spinner-circle1 spinner-child"></span>
//             <span className="spinner-circle2 spinner-child"></span>
//             <span className="spinner-circle3 spinner-child"></span>
//             <span className="spinner-circle4 spinner-child"></span>
//             <span className="spinner-circle5 spinner-child"></span>
//             <span className="spinner-circle6 spinner-child"></span>
//             <span className="spinner-circle7 spinner-child"></span>
//             <span className="spinner-circle8 spinner-child"></span>
//             <span className="spinner-circle9 spinner-child"></span>
//           </div>
//         </div>

//         <Header />

//         <div className="page-title">
//           <div className="img-sharp sharp-1">
//             <div className="blob-wrapper">
//               <div className="blob"></div>
//             </div>
//           </div>
//           <div className="img-sharp sharp-2">
//             <div className="blob-wrapper">
//               <div className="blob"></div>
//             </div>
//           </div>
//           <div className="container w-1810">
//             <div className="page-title-content">
//               <div className="content content-2">
//                 <h1 className="title mb-xl-50">
//                   <span style={{ color: "var(--digital-marketing-light)" }}>
//                     Web
//                   </span>
//                   <br />
//                   Development
//                   <br />
//                   Solutions
//                 </h1>
//                 <div className="breadkcum">
//                   <a href="/">Home</a>
//                   <span className="icon icon-chevron-right"></span>
//                   <span className="breadkcum-active">Web Development</span>
//                 </div>
//               </div>
//               <div className="image">
//                 <img
//                   loading="lazy"
//                   width="915"
//                   height="470"
//                   src={Services1Image}
//                   alt="Web Development Services"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <section className="section-strategy p-services flat-spacing-1">
//           <div className="container">
//             <div className="heading-section mb-70 text-center">
//               <div className="sub-title h6 mb-10 letter-space--2 fw-5">
//                 Build Better. <span>Perform Faster.</span>
//               </div>
//               <h2 className="title letter-space--3 fw-6 mb-30">
//                 <span style={{ color: "var(--digital-marketing-blue)" }}>
//                   We believe in{" "}
//                 </span>{" "}
//                 exceptional web
//                 <br /> experiences,{" "}
//                 <span style={{ color: "var(--digital-marketing-light)" }}>
//                   not just websites
//                 </span>
//                 . Our approach
//                 <br /> combines design, technology, and user-centric solutions.
//               </h2>
//             </div>

//             <div className="row rg-30">
//               <div className="col-lg-4">
//                 <div className="marketing-card style-2">
//                   <div className="img-sharp">
//                     <div className="blob-wrapper">
//                       <div className="blob"></div>
//                     </div>
//                   </div>
//                   <div className="logo">
//                     <img
//                       src="./assets/images/logo/logo-white-marketing-card.svg"
//                       alt="image"
//                     />
//                   </div>
//                   <div className="content">
//                     <div className="h5 title fw-6 letter-space--3">
//                       Creating high-performance websites, custom applications,
//                       and seamless digital experiences.
//                     </div>
//                     <p className="desc ff-2 fw-5">
//                       We ensure every web project delivers exceptional
//                       performance, security, and user experience
//                     </p>
//                     <div className="list-benefit d-flex g-8 flex-wrap">
//                       <div className="benefit-item d-flex align-items-center g-10">
//                         <i className="icon-check fs-24"></i>
//                         <span className="ff-2 fw-5">Custom Web Solutions</span>
//                       </div>
//                       <div className="benefit-item d-flex align-items-center g-10">
//                         <i className="icon-check fs-24"></i>
//                         <span className="ff-2 fw-5">Optimized Performance</span>
//                       </div>
//                       <div className="benefit-item d-flex align-items-center g-10">
//                         <i className="icon-check fs-24"></i>
//                         <span className="ff-2 fw-5">Scalable Architecture</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="image">
//                   <img
//                     loading="lazy"
//                     width="553"
//                     height="500"
//                     src={Services2Image}
//                     alt="Web Development Strategy"
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="growth-card style-2">
//                   <div className="top-card">
//                     <div className="counter-item">
//                       <div className="counter mb-25">
//                         <div className="number-counter flex fs-65 fw-6">
//                           <span
//                             className="number odometer color-primary h1 letter-space--3 fw-6"
//                             data-to="99"
//                             data-inviewport="yes"
//                           >
//                             {" "}
//                             0{" "}
//                           </span>
//                           <span className="fs-60 lh-100 fw-6">%</span>
//                         </div>
//                       </div>
//                       <p className="text-body-1 fw-6 lh-100 ff-2 fw-6 color-paragraph letter-space--2">
//                         Website performance & speed improvement
//                       </p>
//                     </div>
//                   </div>
//                   <div className="line"></div>
//                   <div className="content-card">
//                     <p className="desc mb-50 ff-2 color-paragraph">
//                       We build custom websites and applications that combine
//                       stunning design with robust functionality, ensuring
//                       exceptional user experiences and business growth.
//                     </p>
//                     <a
//                       href="#"
//                       className="tf-btn style-big style-color-dt-blue"
//                     >
//                       <span className="text-btn">Get Started</span>
//                       <span className="icon-btn">
//                         <i className="icon-arrow-up-right"></i>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section-services p-services">
//           <div className="container">
//             <div className="heading-section mb-70 text-center">
//               <div className="sub-title h6 mb-10 letter-space--2 fw-5">
//                 Comprehensive Web Services.{" "}
//                 <span>Design, Develop, Deploy.</span>
//               </div>
//               <h2 className="title letter-space--3 fw-6 mb-30">
//                 <span style={{ color: "var(--digital-marketing-blue)" }}>
//                   We deliver
//                 </span>{" "}
//                 <span style={{ color: "var(--digital-marketing-light)" }}>
//                   cutting-edge
//                 </span>{" "}
//                 web
//                 <br /> development solutions for your business
//               </h2>
//             </div>

//             <div className="services-item-list mb-20 hover-img">
//               <div className="left-item">
//                 <span className="number ff-2 color-paragraph">01</span>
//                 <div className="item-content">
//                   <a
//                     href="/service-details"
//                     className="title fw-6 h3 letter-space--3 lh-100"
//                   >
//                     Custom Website Development
//                   </a>

//                   <div className="text ff-2 mb-25 color-paragraph">
//                     We build custom, responsive websites tailored to your brand,
//                     business goals, and target audience using the latest
//                     technologies and best practices.
//                   </div>
//                   <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Responsive & Mobile-First Design
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Custom CMS Integration
//                         </span>
//                       </li>
//                     </ul>
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Performance & SEO Optimization
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Cross-Browser Compatibility
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                   <a
//                     href="/service-details"
//                     className="tf-btn style-big style-border"
//                   >
//                     <span className="text-btn">Read more</span>
//                     <span className="icon-btn">
//                       <i className="icon-arrow-up-right"></i>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//               <a href="/service-details" className="image">
//                 <img
//                   loading="lazy"
//                   width="550"
//                   height="300"
//                   src={Services3Image}
//                   alt="Custom Website Development"
//                 />
//               </a>
//             </div>

//             <div className="services-item-list mb-20 hover-img">
//               <div className="left-item">
//                 <span className="number ff-2 color-paragraph">02</span>
//                 <div className="item-content">
//                   <a
//                     href="/service-details"
//                     className="title fw-6 h3 letter-space--3 lh-100"
//                   >
//                     E-Commerce Development
//                   </a>

//                   <div className="text ff-2 mb-25 color-paragraph">
//                     We create powerful e-commerce platforms that drive sales,
//                     enhance user experience, and provide seamless shopping
//                     experiences across all devices.
//                   </div>
//                   <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Secure Payment Integration
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Inventory Management Systems
//                         </span>
//                       </li>
//                     </ul>
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Optimized Checkout Experience
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Mobile Commerce Optimization
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                   <a
//                     href="/service-details"
//                     className="tf-btn style-big style-border"
//                   >
//                     <span className="text-btn">Read more</span>
//                     <span className="icon-btn">
//                       <i className="icon-arrow-up-right"></i>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//               <a href="/service-details" className="image">
//                 <img
//                   loading="lazy"
//                   width="550"
//                   height="300"
//                   src={Services4Image}
//                   alt="E-Commerce Development"
//                 />
//               </a>
//             </div>

//             <div className="services-item-list mb-20 hover-img">
//               <div className="left-item">
//                 <span className="number ff-2 color-paragraph">03</span>
//                 <div className="item-content">
//                   <a
//                     href="/service-details"
//                     className="title fw-6 h3 letter-space--3 lh-100"
//                   >
//                     Web Application Development
//                   </a>

//                   <div className="text ff-2 mb-25 color-paragraph">
//                     We build custom web applications tailored to your business
//                     needs, from internal tools to complex SaaS platforms with
//                     scalable architecture.
//                   </div>
//                   <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Full-Stack Development
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           API Integration & Development
//                         </span>
//                       </li>
//                     </ul>
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Cloud-Native Architecture
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Scalable & Secure Infrastructure
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                   <a
//                     href="/service-details"
//                     className="tf-btn style-big style-border"
//                   >
//                     <span className="text-btn">Read more</span>
//                     <span className="icon-btn">
//                       <i className="icon-arrow-up-right"></i>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//               <a href="/service-details" className="image">
//                 <img
//                   loading="lazy"
//                   width="550"
//                   height="300"
//                   src={Services5Image}
//                   alt="Web Application Development"
//                 />
//               </a>
//             </div>

//             <div className="services-item-list mb-20 hover-img">
//               <div className="left-item">
//                 <span className="number ff-2 color-paragraph">04</span>
//                 <div className="item-content">
//                   <a
//                     href="/service-details"
//                     className="title fw-6 h3 letter-space--3 lh-100"
//                   >
//                     UI/UX Design & Prototyping
//                   </a>

//                   <div className="text ff-2 mb-25 color-paragraph">
//                     We create intuitive, user-centered designs that enhance user
//                     experience, increase engagement, and drive conversions
//                     through research-driven design.
//                   </div>
//                   <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           User Research & Persona Development
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Interactive Prototypes & Wireframes
//                         </span>
//                       </li>
//                     </ul>
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           User Testing & Feedback Analysis
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Accessibility & Inclusive Design
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                   <a
//                     href="/service-details"
//                     className="tf-btn style-big style-border"
//                   >
//                     <span className="text-btn">Read more</span>
//                     <span className="icon-btn">
//                       <i className="icon-arrow-up-right"></i>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//               <a href="/service-details" className="image">
//                 <img
//                   loading="lazy"
//                   width="550"
//                   height="300"
//                   src={Services6Image}
//                   alt="UI/UX Design"
//                 />
//               </a>
//             </div>

//             <div className="services-item-list">
//               <div className="left-item">
//                 <span className="number ff-2 color-paragraph">05</span>
//                 <div className="item-content">
//                   <a
//                     href="/service-details"
//                     className="title fw-6 h3 letter-space--3 lh-100"
//                   >
//                     Web Maintenance & Support
//                   </a>

//                   <div className="text ff-2 mb-25 color-paragraph">
//                     We provide ongoing maintenance, security updates,
//                     performance optimization, and technical support to keep your
//                     website running smoothly.
//                   </div>
//                   <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Security Monitoring & Updates
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Performance Optimization
//                         </span>
//                       </li>
//                     </ul>
//                     <ul className="list-benefit d-flex flex-column">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           Content & Feature Updates
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-24"></i>
//                         <span className="letter-space--2">
//                           24/7 Technical Support
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                   <a
//                     href="/service-details"
//                     className="tf-btn style-big style-border"
//                   >
//                     <span className="text-btn">Read more</span>
//                     <span className="icon-btn">
//                       <i className="icon-arrow-up-right"></i>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//               <a href="/service-details" className="image">
//                 <img
//                   loading="lazy"
//                   width="550"
//                   height="300"
//                   src={Services7Image}
//                   alt="Web Maintenance"
//                 />
//               </a>
//             </div>
//           </div>
//         </section>

//         <section className="section-cta p-services flat-spacing-1">
//           <div className="container">
//             <div className="heading-section">
//               <h1 className="title fw-6 letter-space--3 color-dt-black mb-70">
//                 <span style={{ color: "var(--digital-marketing-blue)" }}>
//                   Ready to build
//                 </span>{" "}
//                 something
//                 <br /> extraordinary online
//                 <br /> with{" "}
//                 <span style={{ color: "var(--digital-marketing-light)" }}>
//                   web development expertise
//                 </span>
//               </h1>
//             </div>
//             <div className="section-cta-inner d-flex align-items-end justify-content-between g-30">
//               <div className="left">
//                 <div className="text h5 fw-5 color-paragraph lh-35 ff-2 letter-space--2">
//                   Web development is the foundation of your digital presence,
//                   creating experiences that engage, convert, and inspire.
//                 </div>

//                 <div className="bottom d-flex g-10 rg-30 align-items-end justify-content-between">
//                   <div className="image img-min">
//                     <img
//                       loading="lazy"
//                       width="270"
//                       height="215"
//                       src={Services9Image}
//                       alt="Web Development"
//                     />
//                   </div>
//                   <div className="right-bottom">
//                     <ul className="list-benefit d-flex flex-column g-8 mb-25">
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-18"></i>
//                         <span className="letter-space--2 text-nowrap">
//                           Custom Web Solutions
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-18"></i>
//                         <span className="letter-space--2 text-nowrap">
//                           Performance Optimized
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-18"></i>
//                         <span className="letter-space--2 text-nowrap">
//                           Responsive Design
//                         </span>
//                       </li>
//                       <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
//                         <i className="icon-check fs-18"></i>
//                         <span className="letter-space--2 text-nowrap">
//                           Ongoing Support & Maintenance
//                         </span>
//                       </li>
//                     </ul>
//                     <a href="#" className="tf-btn style-color-dt-blue">
//                       <span className="text-btn">Get Started</span>
//                       <span className="icon-btn">
//                         <i className="icon-arrow-up-right"></i>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="image">
//                 <img
//                   loading="lazy"
//                   width="630"
//                   height="430"
//                   src={Services8Image}
//                   alt="Web Development Success"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <Footer />

//         <div className="overlay-filter" id="overlay-filter"></div>
//       </main>

//       <div className="offcanvas offcanvas-start" id="mobileMenu">
//         <div className="pop-up-nav-mobile">
//           <div className="canvas-header">
//             <a href="#" className="logo-site">
//               <img src="./assets/images/logo/logo-mobi-1.svg" alt="" />
//             </a>
//             <span
//               className="icon icon-close"
//               data-bs-dismiss="offcanvas"
//             ></span>
//           </div>
//           <div className="canvas-body">
//             <div className="mb-content-top">
//               <ul className="nav-ul-mb" id="wrapper-menu-navigation"></ul>
//             </div>
//           </div>
//           <div className="canvas-bottom"></div>
//         </div>
//       </div>

//       <SidePopup />

//       <div className="progress-wrap">
//         <svg
//           className="progress-circle svg-content"
//           width="100%"
//           height="100%"
//           viewBox="-1 -1 102 102"
//         >
//           <path
//             d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
//             style={{
//               transition: "strokeDashoffset 10ms linear",
//               strokeDasharray: "307.919, 307.919",
//               strokeDashoffset: "277.672",
//             }}
//           ></path>
//         </svg>
//       </div>
//     </>
//   );
// }

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SidePopup from "../../components/sidePopup";
import Services1Image from "../../assets/images/services/img-page-title-3.jpg";
import Services2Image from "../../assets/images/services/img-section-strategy-2.jpg";
import Services3Image from "../../assets/images/services/services-list-1.jpg";
import Services4Image from "../../assets/images/services/services-list-2.jpg";
import Services5Image from "../../assets/images/services/services-list-3.jpg";
import Services6Image from "../../assets/images/services/services-list-4.jpg";
import Services7Image from "../../assets/images/services/services-list-5.jpg";
import Services8Image from "../../assets/images/services/img-cta-p-services-2.jpg";
import Services9Image from "../../assets/images/services/img-cta-p-services-1.jpg";

const services = [
  {
    id: "01",
    title: "Custom Website Development",
    desc: "We build custom, responsive websites tailored to your brand, business goals, and target audience using the latest technologies and best practices.",
    benefits: [
      "Responsive & Mobile-First Design",
      "Custom CMS Integration",
      "Performance & SEO Optimization",
      "Cross-Browser Compatibility",
    ],
    img: Services3Image,
    alt: "Custom Website Development",
  },
  {
    id: "02",
    title: "E-Commerce Development",
    desc: "We create powerful e-commerce platforms that drive sales, enhance user experience, and provide seamless shopping experiences across all devices.",
    benefits: [
      "Secure Payment Integration",
      "Inventory Management Systems",
      "Optimized Checkout Experience",
      "Mobile Commerce Optimization",
    ],
    img: Services4Image,
    alt: "E-Commerce Development",
  },
  {
    id: "03",
    title: "Web Application Development",
    desc: "We build custom web applications tailored to your business needs, from internal tools to complex SaaS platforms with scalable architecture.",
    benefits: [
      "Full-Stack Development",
      "API Integration & Development",
      "Cloud-Native Architecture",
      "Scalable & Secure Infrastructure",
    ],
    img: Services5Image,
    alt: "Web Application Development",
  },
  {
    id: "04",
    title: "UI/UX Design & Prototyping",
    desc: "We create intuitive, user-centered designs that enhance user experience, increase engagement, and drive conversions through research-driven design.",
    benefits: [
      "User Research & Persona Development",
      "Interactive Prototypes & Wireframes",
      "User Testing & Feedback Analysis",
      "Accessibility & Inclusive Design",
    ],
    img: Services6Image,
    alt: "UI/UX Design",
  },
  {
    id: "05",
    title: "Web Maintenance & Support",
    desc: "We provide ongoing maintenance, security updates, performance optimization, and technical support to keep your website running smoothly.",
    benefits: [
      "Security Monitoring & Updates",
      "Performance Optimization",
      "Content & Feature Updates",
      "24/7 Technical Support",
    ],
    img: Services7Image,
    alt: "Web Maintenance",
  },
];

export default function WebDevelopmentNew() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalCards = services.length;

  return (
    <>
      <main id="wrapper">
        {/* Preloader, Header, Page Title, Strategy – unchanged */}
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
                  <span style={{ color: "var(--digital-marketing-light)" }}>
                    Web
                  </span>
                  <br />
                  Development
                  <br />
                  Solutions
                </h1>
                <div className="breadkcum">
                  <a href="/">Home</a>
                  <span className="icon icon-chevron-right"></span>
                  <span className="breadkcum-active">Web Development</span>
                </div>
              </div>
              <div className="image">
                <img
                  loading="lazy"
                  width="915"
                  height="470"
                  src={Services1Image}
                  alt="Web Development Services"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="section-strategy p-services flat-spacing-1">
          <div className="container">
            <div className="heading-section mb-70 text-center">
              <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                Build Better. <span>Perform Faster.</span>
              </div>
              <h2 className="title letter-space--3 fw-6 mb-30">
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  We believe in{" "}
                </span>{" "}
                exceptional web
                <br /> experiences,{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  not just websites
                </span>
                . Our approach
                <br /> combines design, technology, and user-centric solutions.
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
                    <img
                      src="./assets/images/logo/logo-white-marketing-card.svg"
                      alt="image"
                    />
                  </div>
                  <div className="content">
                    <div className="h5 title fw-6 letter-space--3">
                      Creating high-performance websites, custom applications,
                      and seamless digital experiences.
                    </div>
                    <p className="desc ff-2 fw-5">
                      We ensure every web project delivers exceptional
                      performance, security, and user experience
                    </p>
                    <div className="list-benefit d-flex g-8 flex-wrap">
                      <div className="benefit-item d-flex align-items-center g-10">
                        <i className="icon-check fs-24"></i>
                        <span className="ff-2 fw-5">Custom Web Solutions</span>
                      </div>
                      <div className="benefit-item d-flex align-items-center g-10">
                        <i className="icon-check fs-24"></i>
                        <span className="ff-2 fw-5">Optimized Performance</span>
                      </div>
                      <div className="benefit-item d-flex align-items-center g-10">
                        <i className="icon-check fs-24"></i>
                        <span className="ff-2 fw-5">Scalable Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="image">
                  <img
                    loading="lazy"
                    width="553"
                    height="500"
                    src={Services2Image}
                    alt="Web Development Strategy"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="growth-card style-2">
                  <div className="top-card">
                    <div className="counter-item">
                      <div className="counter mb-25">
                        <div className="number-counter flex fs-65 fw-6">
                          <span
                            className="number odometer color-primary h1 letter-space--3 fw-6"
                            data-to="99"
                            data-inviewport="yes"
                          >
                            {" "}
                            0{" "}
                          </span>
                          <span className="fs-60 lh-100 fw-6">%</span>
                        </div>
                      </div>
                      <p className="text-body-1 fw-6 lh-100 ff-2 fw-6 color-paragraph letter-space--2">
                        Website performance & speed improvement
                      </p>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="content-card">
                    <p className="desc mb-50 ff-2 color-paragraph">
                      We build custom websites and applications that combine
                      stunning design with robust functionality, ensuring
                      exceptional user experiences and business growth.
                    </p>
                    <a
                      href="#"
                      className="tf-btn style-big style-color-dt-blue"
                    >
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

        {/* ===== SERVICES SECTION – UPWARD STACKING PARALLAX ===== */}
        <section className="section-services p-services" ref={sectionRef}>
          <div className="container">
            <div className="heading-section mb-70 text-center">
              <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                Comprehensive Web Services.{" "}
                <span>Design, Develop, Deploy.</span>
              </div>
              <h2 className="title letter-space--3 fw-6 mb-30">
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  We deliver
                </span>{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  cutting-edge
                </span>{" "}
                web
                <br /> development solutions for your business
              </h2>
            </div>

            <div
              className="services-stack-wrapper"
              style={{
                position: "relative",
                height: "500vh",
                minHeight: "500vh",
              }}
            >
              {services.map((service, index) => {
                const start = index / totalCards;
                const end = (index + 1) / totalCards;
                const cardProgress = useTransform(
                  scrollYProgress,
                  [start, end],
                  [0, 1],
                );

                // Upward movement: start below, move up past zero (negative)
                const scale = useTransform(
                  cardProgress,
                  [0, 0.4, 1],
                  [0.7, 0.9, 1],
                );
                const opacity = useTransform(
                  cardProgress,
                  [0, 0.2, 0.6, 1],
                  [0, 0.3, 1, 1],
                );
                const y = useTransform(
                  cardProgress,
                  [0, 0.5, 1],
                  [200, 0, -80],
                ); // moves up beyond original
                const rotateX = useTransform(cardProgress, [0, 1], [10, 0]);
                const boxShadow = useTransform(
                  cardProgress,
                  [0, 1],
                  [
                    "0 8px 30px rgba(0,0,0,0.04)",
                    "0 20px 60px rgba(108,99,255,0.15)",
                  ],
                );

                return (
                  <motion.div
                    key={service.id}
                    className="service-stack-card"
                    style={{
                      position: "sticky",
                      top: `${(index / (totalCards - 1)) * 80 + 10}%`,
                      zIndex: index + 1,
                      scale,
                      opacity,
                      y,
                      rotateX,
                      boxShadow,
                      marginBottom: "1rem",
                      borderRadius: "20px",
                      background: "#ffffff",
                      transformOrigin: "center top",
                      willChange: "transform, opacity",
                      overflow: "visible",
                      border: "1px solid rgba(0,0,0,0.04)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 25,
                      mass: 0.7,
                    }}
                  >
                    {/* Original card structure – unchanged */}
                    <div
                      className="services-item-list hover-img"
                      style={{ marginBottom: 0 }}
                    >
                      <div className="left-item">
                        <span className="number ff-2 color-paragraph">
                          {service.id}
                        </span>
                        <div className="item-content">
                          <a
                            href="/service-details"
                            className="title fw-6 h3 letter-space--3 lh-100"
                          >
                            {service.title}
                          </a>
                          <div className="text ff-2 mb-25 color-paragraph">
                            {service.desc}
                          </div>
                          <div className="d-flex justify-content-between flex-wrap g-12 mb-lg-54">
                            <ul className="list-benefit d-flex flex-column">
                              {service.benefits
                                .slice(0, 2)
                                .map((benefit, i) => (
                                  <li
                                    key={i}
                                    className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12"
                                  >
                                    <i className="icon-check fs-24"></i>
                                    <span className="letter-space--2">
                                      {benefit}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                            <ul className="list-benefit d-flex flex-column">
                              {service.benefits.slice(2).map((benefit, i) => (
                                <li
                                  key={i + 2}
                                  className="benefit-item d-flex align-items-center g-7 color-paragraph mb-12"
                                >
                                  <i className="icon-check fs-24"></i>
                                  <span className="letter-space--2">
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <a
                            href="/service-details"
                            className="tf-btn style-big style-border"
                          >
                            <span className="text-btn">Read more</span>
                            <span className="icon-btn">
                              <i className="icon-arrow-up-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                      <a href="/service-details" className="image">
                        <motion.img
                          loading="lazy"
                          width="550"
                          height="300"
                          src={service.img}
                          alt={service.alt}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            // Image parallax – slight upward drift
                            y: useTransform(cardProgress, [0, 1], [30, -20]),
                          }}
                        />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section – unchanged */}
        <section className="section-cta p-services flat-spacing-1">
          <div className="container">
            <div className="heading-section">
              <h1 className="title fw-6 letter-space--3 color-dt-black mb-70">
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  Ready to build
                </span>{" "}
                something
                <br /> extraordinary online
                <br /> with{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  web development expertise
                </span>
              </h1>
            </div>
            <div className="section-cta-inner d-flex align-items-end justify-content-between g-30">
              <div className="left">
                <div className="text h5 fw-5 color-paragraph lh-35 ff-2 letter-space--2">
                  Web development is the foundation of your digital presence,
                  creating experiences that engage, convert, and inspire.
                </div>
                <div className="bottom d-flex g-10 rg-30 align-items-end justify-content-between">
                  <div className="image img-min">
                    <img
                      loading="lazy"
                      width="270"
                      height="215"
                      src={Services9Image}
                      alt="Web Development"
                    />
                  </div>
                  <div className="right-bottom">
                    <ul className="list-benefit d-flex flex-column g-8 mb-25">
                      <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                        <i className="icon-check fs-18"></i>
                        <span className="letter-space--2 text-nowrap">
                          Custom Web Solutions
                        </span>
                      </li>
                      <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                        <i className="icon-check fs-18"></i>
                        <span className="letter-space--2 text-nowrap">
                          Performance Optimized
                        </span>
                      </li>
                      <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                        <i className="icon-check fs-18"></i>
                        <span className="letter-space--2 text-nowrap">
                          Responsive Design
                        </span>
                      </li>
                      <li className="benefit-item d-flex align-items-center g-7 color-paragraph">
                        <i className="icon-check fs-18"></i>
                        <span className="letter-space--2 text-nowrap">
                          Ongoing Support & Maintenance
                        </span>
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
                <img
                  loading="lazy"
                  width="630"
                  height="430"
                  src={Services8Image}
                  alt="Web Development Success"
                />
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
            <span
              className="icon icon-close"
              data-bs-dismiss="offcanvas"
            ></span>
          </div>
          <div className="canvas-body">
            <div className="mb-content-top">
              <ul className="nav-ul-mb" id="wrapper-menu-navigation"></ul>
            </div>
          </div>
          <div className="canvas-bottom"></div>
        </div>
      </div>

      <SidePopup />

      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "strokeDashoffset 10ms linear",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "277.672",
            }}
          />
        </svg>
      </div>
    </>
  );
}
