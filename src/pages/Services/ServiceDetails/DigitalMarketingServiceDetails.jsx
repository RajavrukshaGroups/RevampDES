// // import React from "react";
// // import Header from "../../../components/Header";
// // import Footer from "../../../components/Footer";
// // import SidePopup from "../../../components/sidePopup";
// // import {
// //   Building2,
// //   HeartPulse,
// //   GraduationCap,
// //   Laptop,
// //   ShoppingBag,
// //   Factory,
// //   Wallet,
// //   Hotel,
// //   Store,
// //   Scale,
// //   HardHat,
// //   Rocket,
// //   MapPin,
// //   Navigation,
// //   BadgeCheck,
// //   Megaphone,
// //   BarChart3,
// //   Target,
// //   TrendingUp,
// //   Bot,
// //   Brain,
// //   Database,
// //   Sparkles,
// //   Users,
// //   Gauge
// // } from "lucide-react";
// // // Import relevant images for the digital marketing service page
// // import digitalHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg"; // Replace with relevant image
// // import digitalDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg"; // Replace with relevant image
// // import digitalDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg"; // Replace with relevant image
// // import digitalDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg"; // Replace with relevant image

// // export default function ServiceDetailsDigitalMarketing() {
// //   return (
// //     <>
// //       <main id="wrapper">
// //         <div className="preload preload-container">
// //           <div className="spinner-circle lg">
// //             <span className="spinner-circle1 spinner-child"></span>
// //             <span className="spinner-circle2 spinner-child"></span>
// //             <span className="spinner-circle3 spinner-child"></span>
// //             <span className="spinner-circle4 spinner-child"></span>
// //             <span className="spinner-circle5 spinner-child"></span>
// //             <span className="spinner-circle6 spinner-child"></span>
// //             <span className="spinner-circle7 spinner-child"></span>
// //             <span className="spinner-circle8 spinner-child"></span>
// //             <span className="spinner-circle9 spinner-child"></span>
// //           </div>
// //         </div>

// //         <Header />

// //         <div className="page-title style-2">
// //           <div className="img-sharp sharp-1">
// //             <div className="blob-wrapper">
// //               <div className="blob"></div>
// //             </div>
// //           </div>
// //           <div className="img-sharp sharp-2">
// //             <div className="blob-wrapper">
// //               <div className="blob"></div>
// //             </div>
// //           </div>
// //           <div className="container">
// //             <div className="page-title-content">
// //               <h1 className="title">
// //                 Leading <br />
// //                 <span style={{ color: "var(--digital-marketing-light)" }}>
// //                   Digital Marketing Agency
// //                 </span>{" "}
// //                 in Bangalore
// //               </h1>
// //               <div className="breadkcum">
// //                 <a href="/">Home</a>
// //                 <span className="icon icon-chevron-right"></span>
// //                 <span className="breadkcum-active">Service Details</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="img-page-title d-none d-lg-block">
// //           <div className="container">
// //             <div className="image">
// //               <img
// //                 loading="lazy"
// //                 width="915"
// //                 height="470"
// //                 src={digitalHeroImage}
// //                 alt="Leading Digital Marketing Agency in Bangalore"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         <section className="section-services-detail flat-spacing-9">
// //           <div className="container">
// //             <div className="row rg-50">
// //               <div className="col-lg-4">
// //                 <div className="card-sidebar" style={{
// //                   position: "sticky",
// //                   top: "100px",
// //                   left: "20px",
// //                   zIndex: 1000,
// //                 }}>
// //                   <p className="h5 title fw-6 letter-space--3 lh-100">
// //                     Services Category
// //                   </p>
// //                   <ul>
// //                     <li>
// //                       <a
// //                         href="/services/Digital-marketing-agency-in-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2 active"
// //                       >
// //                         Digital Marketing
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/seo-services-in-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Search Engine Optimization
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/social-media-marketing-company-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Social Media Marketing
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/web-development-company-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Web Design & Development
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/graphic-design-company-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Graphic Design
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/lead-generation-companies-in-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Lead Generation
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/whatsapp-automation-AI-providers-india"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         WhatsApp Automation
// //                       </a>
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //               <div className="col-lg-8">
// //                 <div className="detail-content">
// //                   <h2 className="fw-6 letter-space--3 color-dt-black mb-50">
// //                     In today's competitive online landscape, businesses need more than just a website to succeed. They need a strategic digital presence that attracts customers, builds trust, and generates measurable results.{" "}
// //                     <span style={{ color: "var(--digital-marketing-light)" }}>
// //                       Digital Elite Service
// //                     </span>{" "}
// //                     is a trusted Digital marketing agency in Bangalore that helps businesses achieve sustainable growth through innovative, data-driven marketing solutions.
// //                   </h2>
// //                   <div className="text ff-2 color-paragraph mb-70">
// //                     Our team of experienced marketers, SEO specialists, content strategists, social media experts, and paid advertising professionals work together to deliver exceptional outcomes for businesses across industries. Whether you are a startup looking to establish your online presence, a growing company aiming to generate qualified leads, or an established enterprise seeking to strengthen your digital footprint, Digital Elite Service offers customized solutions designed to meet your goals. As a leading Digital marketing company in Bangalore, we combine creativity, technology, and analytics to create campaigns that deliver real business impact.
// //                   </div>

// //                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
// //                     Why Businesses Choose{" "}
// //                     <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       Digital Elite Service
// //                     </span>
// //                   </h3>
// //                   <div className="text ff-2 color-paragraph mb-40">
// //                     Digital marketing has become an essential part of business growth. Customers are searching for products and services online before making purchasing decisions. If your business is not visible where your customers are looking, you risk losing valuable opportunities. Digital Elite Service helps businesses stay ahead of the competition through comprehensive digital marketing strategies tailored to their target audience and industry.
// //                   </div>
// //                   <div className="text ff-2 color-paragraph mb-70">
// //                     Our approach focuses on understanding your business objectives, identifying market opportunities, and implementing strategies that generate measurable returns. We believe every business is unique, which is why we create personalized campaigns rather than relying on generic marketing templates. As a trusted Digital marketing agency in Bangalore, our mission is simple: help businesses grow through effective online marketing strategies that increase visibility, drive traffic, generate leads, and improve conversions.
// //                   </div>

// //                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
// //                     Comprehensive{" "}
// //                     <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       Digital Marketing Services
// //                     </span>{" "}
// //                     in Bangalore
// //                   </h3>
// //                   <div className="text ff-2 color-paragraph mb-40">
// //                     Digital Elite Service provides a complete range of Digital marketing services in Bangalore designed to help businesses maximize their online potential.
// //                   </div>

// //                   {/* Core Services List - Styled as Process Items */}
// //                   <div className="list-process-item d-flex justify-content-between mb-70">
// //                     <div className="line d-none d-md-block"></div>
// //                     <div className="process-item-2">
// //                       <div className="number ff-2 fw-5 letter-space--2">01</div>
// //                       <div className="dot"></div>
// //                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
// //                         Search Engine Optimization (SEO)
// //                       </a>
// //                       <div className="desc ff-2">
// //                         SEO remains one of the most effective ways to increase online visibility. Our SEO experts use proven strategies to improve search engine rankings and drive organic traffic.
// //                       </div>
// //                     </div>

// //                     <div className="process-item-2">
// //                       <div className="number ff-2 fw-5 letter-space--2">02</div>
// //                       <div className="dot"></div>
// //                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
// //                         Pay-Per-Click Advertising (PPC)
// //                       </a>
// //                       <div className="desc ff-2">
// //                         Paid advertising provides immediate visibility and lead generation. Our PPC specialists create highly targeted campaigns that maximize ROI.
// //                       </div>
// //                     </div>

// //                     <div className="process-item-2">
// //                       <div className="number ff-2 fw-5 letter-space--2">03</div>
// //                       <div className="dot"></div>
// //                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
// //                         Social Media Marketing
// //                       </a>
// //                       <div className="desc ff-2">
// //                         Social media platforms have become powerful channels for brand awareness, customer engagement, and lead generation through compelling campaigns.
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Image Grid */}
// //                   <div className="list-img d-flex g-30 align-items-center mb-70">
// //                     <div className="image">
// //                       <img
// //                         loading="lazy"
// //                         width="410"
// //                         height="470"
// //                         src={digitalDetailImage1}
// //                         alt="Digital Marketing Strategy Session"
// //                       />
// //                     </div>
// //                     <div className="image">
// //                       <img
// //                         loading="lazy"
// //                         width="410"
// //                         height="470"
// //                         src={digitalDetailImage2}
// //                         alt="Digital Marketing Campaign Results"
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Additional Services Section */}
// //                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30">
// //                     More of our{" "}
// //                     <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       digital marketing services
// //                     </span>{" "}
// //                     include <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       Content Marketing, Website Design & Development,
// //                     </span>{" "}
// //                     and <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       Email Marketing
// //                     </span>
// //                     .
// //                   </h3>
// //                   <div className="text ff-2 color-paragraph mb-70">
// //                     High-quality content plays a critical role in digital marketing success. Our content marketing strategies focus on creating valuable, informative, and engaging content that attracts and converts potential customers. Your website is often the first interaction potential customers have with your business. Digital Elite Service creates modern, responsive, and user-friendly websites designed to deliver exceptional user experiences. Email marketing continues to be one of the most cost-effective digital marketing channels, helping businesses nurture leads, retain customers, and increase revenue.
// //                   </div>

// //                   {/* Why Choose Us Section */}
// //                   <div className="content-detail">
// //                     <div className="left">
// //                       <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-50">
// //                         <span style={{ color: "var(--digital-marketing-light)" }}>Digital Marketing Agency</span> in Bangalore Focused on Results
// //                       </h4>

// //                       <div className="desc-1 ff-2 mb-50 color-paragraph">
// //                         <strong>Customized Marketing Strategies:</strong> We understand that every business has unique goals, challenges, and audiences. Our team develops personalized marketing strategies tailored specifically to your needs.
// //                       </div>

// //                       <div className="desc-1 ff-2 mb-50 color-paragraph">
// //                         <strong>Experienced Professionals:</strong> Our team consists of skilled digital marketers with expertise across multiple disciplines. From SEO and PPC to social media and content marketing, we bring extensive experience to every project.
// //                       </div>

// //                       <div className="desc-1 ff-2 mb-50 color-paragraph">
// //                         <strong>Transparent Communication & Data-Driven Decisions:</strong> We believe strong partnerships are built on trust and transparency. Every marketing decision is backed by data and analytics to maximize results.
// //                       </div>

// //                       <div className="desc-2 ff-2 color-paragraph">
// //                         <strong>Focus on ROI:</strong> Our primary objective is helping businesses achieve measurable returns from their marketing investments. We focus on strategies that contribute directly to business growth.
// //                       </div>
// //                     </div>
// //                     <div className="right image">
// //                       <img
// //                         loading="lazy"
// //                         width="410"
// //                         height="540"
// //                         src={digitalDetailImage3}
// //                         alt="Digital Elite Services Digital Marketing Process"
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Industries We Serve */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       Industries We{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Serve
// //                       </span>
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       Digital Elite Service has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective solutions.
// //                     </div>
// //                     <div className="row g-20" style={{ marginBottom: "20px" }}>
// //                       <div className="col-md-6">
// //                         <ul className="list-unstyled ff-2 color-paragraph">
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Building2 size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Real Estate
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <HeartPulse size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Healthcare
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <GraduationCap size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Education
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Laptop size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Information Technology
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <ShoppingBag size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             E-commerce
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Factory size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Manufacturing
// //                           </li>
// //                         </ul>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <ul className="list-unstyled ff-2 color-paragraph">
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Wallet size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Finance
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Hotel size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Hospitality
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Store size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Retail
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Scale size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Professional Services
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <HardHat size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Construction
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Rocket size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Startups
// //                           </li>
// //                         </ul>
// //                       </div>
// //                     </div>
// //                     <div className="text ff-2 color-paragraph">
// //                       Our industry-specific strategies ensure that marketing campaigns resonate with the right audience and deliver meaningful results.
// //                     </div>
// //                   </div>

// //                   {/* Best Digital Marketing Agency Section with Lucide Icons */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       Best{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Digital Marketing Agency
// //                       </span>{" "}
// //                       in Bangalore for Local Businesses
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       Local businesses face unique challenges when competing in increasingly crowded markets. Digital Elite Service helps local businesses improve visibility, attract nearby customers, and generate qualified leads.
// //                     </div>
// //                     <div className="row g-30">
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
// //                             <MapPin size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             <h5 className="fw-6" style={{ marginBottom: 0 }}>Local SEO Optimization</h5>
// //                           </div>
// //                           <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
// //                             Improve visibility in local search results and attract customers in your area.
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
// //                             <Navigation size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             <h5 className="fw-6" style={{ marginBottom: 0 }}>Google Business Profile Management</h5>
// //                           </div>
// //                           <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
// //                             Optimize your Google Business Profile for better local search performance.
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
// //                             <BadgeCheck size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             <h5 className="fw-6" style={{ marginBottom: 0 }}>Reputation Management</h5>
// //                           </div>
// //                           <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
// //                             Build and maintain a positive online reputation through effective review management.
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
// //                             <Megaphone size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             <h5 className="fw-6" style={{ marginBottom: 0 }}>Local Search Advertising</h5>
// //                           </div>
// //                           <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
// //                             Target customers actively searching for products and services in your location.
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* What Makes Digital Elite Service Different */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       What Makes{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Digital Elite Service
// //                       </span>{" "}
// //                       Different
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       Choosing the right digital marketing company in Bangalore can significantly impact your business growth. Digital Elite Service stands out because of our commitment to excellence, innovation, and client success.
// //                     </div>
// //                     <div className="row g-30">
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px" }}>
// //                           <h5 className="fw-6">Customized Marketing Strategies</h5>
// //                           <p className="ff-2 color-paragraph">We develop personalized marketing strategies tailored specifically to your business needs.</p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px" }}>
// //                           <h5 className="fw-6">Experienced Professionals</h5>
// //                           <p className="ff-2 color-paragraph">Our skilled team brings extensive expertise across all digital marketing disciplines.</p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px" }}>
// //                           <h5 className="fw-6">Transparent Communication</h5>
// //                           <p className="ff-2 color-paragraph">Clients receive regular updates, detailed reports, and clear communication throughout.</p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
// //                           <h5 className="fw-6">Data-Driven Decision Making</h5>
// //                           <p className="ff-2 color-paragraph">Every marketing decision is backed by data and analytics to optimize campaign performance.</p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Performance Marketing That Delivers Results - Updated with Lucide Icons */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       Performance Marketing That{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Delivers Results
// //                       </span>
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       Performance marketing focuses on measurable outcomes and accountability. Every campaign is designed to achieve specific objectives while maximizing efficiency.
// //                     </div>
// //                     <div className="row g-30">
// //                       <div className="col-md-4">
// //                         <div className="text-center p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
// //                           <BarChart3 size={40} style={{ color: "var(--digital-marketing-light)", marginBottom: "15px" }} />
// //                           <h5 className="fw-6">Search & Social Advertising</h5>
// //                           <p className="ff-2 color-paragraph">Targeted campaigns that drive qualified traffic and conversions.</p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-4">
// //                         <div className="text-center p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
// //                           <Target size={40} style={{ color: "var(--digital-marketing-light)", marginBottom: "15px" }} />
// //                           <h5 className="fw-6">Conversion Optimization</h5>
// //                           <p className="ff-2 color-paragraph">Landing page testing and optimization to improve conversion rates.</p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-4">
// //                         <div className="text-center p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
// //                           <TrendingUp size={40} style={{ color: "var(--digital-marketing-light)", marginBottom: "15px" }} />
// //                           <h5 className="fw-6">Campaign Analytics</h5>
// //                           <p className="ff-2 color-paragraph">Continuous monitoring and optimization to maximize ROI.</p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Future-Ready Digital Marketing Solutions - Updated with Lucide Icons */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       Future-Ready{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Digital Marketing Solutions
// //                       </span>
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       The digital landscape continues to evolve rapidly. Businesses must adapt to changing consumer behaviors, emerging technologies, and evolving search engine algorithms. Digital Elite Service stays ahead of industry trends by adopting innovative marketing techniques and leveraging the latest technologies.
// //                     </div>
// //                     <div className="row g-30">
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
// //                             <Bot size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             <h5 className="fw-6" style={{ marginBottom: 0 }}>Marketing Automation</h5>
// //                           </div>
// //                           <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
// //                             Streamline campaigns and improve efficiency through automation.
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
// //                             <Brain size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             <h5 className="fw-6" style={{ marginBottom: 0 }}>Artificial Intelligence Tools</h5>
// //                           </div>
// //                           <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
// //                             Leverage AI for smarter targeting, personalization, and optimization.
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
// //                             <Database size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             <h5 className="fw-6" style={{ marginBottom: 0 }}>Advanced Analytics</h5>
// //                           </div>
// //                           <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
// //                             Gain deeper insights into campaign performance and customer behavior.
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
// //                           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
// //                             <Sparkles size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             <h5 className="fw-6" style={{ marginBottom: 0 }}>Emerging Digital Platforms</h5>
// //                           </div>
// //                           <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
// //                             Stay ahead by adopting new platforms and channels as they emerge.
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Final CTA */}
// //                   <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
// //                     <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
// //                       Partner with{" "}
// //                       <span style={{color:"var(--digital-marketing-light)"}}>
// //                         Digital Elite Service
// //                       </span>
// //                     </h4>
// //                     <p className="ff-2 color-paragraph mb-30">
// //                       If you are looking for a reliable <strong>Digital marketing company in Bangalore</strong> that prioritizes growth, transparency, and measurable results, Digital Elite Service is your ideal partner. We are committed to helping businesses strengthen their online presence, attract qualified customers, and achieve long-term success.
// //                     </p>
// //                     <p className="ff-2 color-paragraph mb-30">
// //                       As a trusted provider of <strong>Digital marketing services in Bangalore</strong>, we combine strategic expertise with creative execution to deliver impactful marketing campaigns. Whether your goal is improving search rankings, generating leads, increasing sales, or building brand awareness, our team has the experience and dedication to help you succeed.
// //                     </p>
// //                     <p className="ff-2 color-paragraph">
// //                       <strong>
// //                         Choose Digital Elite Service and experience the difference that professional, results-driven digital marketing can make for your business.
// //                       </strong>{" "}
// //                       Let us help you transform your online presence into a powerful engine for growth, visibility, and success.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         <Footer />

// //         <div className="overlay-filter" id="overlay-filter"></div>
// //       </main>

// //       <div className="offcanvas offcanvas-start" id="mobileMenu">
// //         <div className="pop-up-nav-mobile">
// //           <div className="canvas-header">
// //             <a href="#" className="logo-site">
// //               <img src="./assets/images/logo/logo-mobi-1.svg" alt="" />
// //             </a>
// //             <span
// //               className="icon icon-close"
// //               data-bs-dismiss="offcanvas"
// //             ></span>
// //           </div>
// //           <div className="canvas-body">
// //             <div className="mb-content-top">
// //               <ul
// //                 className="nav-ul-mb"
// //                 id="wrapper-menu-navigation"
// //               ></ul>
// //             </div>
// //           </div>
// //           <div className="canvas-bottom"></div>
// //         </div>
// //       </div>

// //       <SidePopup />

// //       <div className="progress-wrap">
// //         <svg
// //           className="progress-circle svg-content"
// //           width="100%"
// //           height="100%"
// //           viewBox="-1 -1 102 102"
// //         >
// //           <path
// //             d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
// //             style={{
// //               transition: "strokeDashoffset 10ms linear",
// //               strokeDasharray: "307.919, 307.919",
// //               strokeDashoffset: "277.672",
// //             }}
// //           ></path>
// //         </svg>
// //       </div>
// //     </>
// //   );
// // }


// // import React from "react";
// // import Header from "../../../components/Header";
// // import Footer from "../../../components/Footer";
// // import SidePopup from "../../../components/sidePopup";
// // import {
// //   Building2,
// //   HeartPulse,
// //   GraduationCap,
// //   Laptop,
// //   ShoppingBag,
// //   Factory,
// //   Wallet,
// //   Hotel,
// //   Store,
// //   Scale,
// //   HardHat,
// //   Rocket,
// //   MapPin,
// //   Navigation,
// //   BadgeCheck,
// //   Megaphone,
// //   BarChart3,
// //   Target,
// //   TrendingUp,
// //   Bot,
// //   Brain,
// //   Database,
// //   Sparkles,
// // } from "lucide-react";
// // // Import relevant images for the digital marketing service page
// // import digitalHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
// // import digitalDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
// // import digitalDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
// // import digitalDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

// // export default function ServiceDetailsDigitalMarketing() {
// //   // Helper function to handle image errors
// //   const handleImageError = (e) => {
// //     e.target.style.display = 'none';
// //     // Optionally show a placeholder or fallback
// //     const parent = e.target.parentElement;
// //     if (parent) {
// //       parent.style.background = '#f0f4f9';
// //       parent.style.minHeight = '200px';
// //       parent.style.display = 'flex';
// //       parent.style.alignItems = 'center';
// //       parent.style.justifyContent = 'center';
// //       parent.style.borderRadius = '8px';
// //       parent.innerHTML = '<span style="color: #666; font-size: 14px;">Image not available</span>';
// //     }
// //   };

// //   return (
// //     <>
// //       <main id="wrapper">
// //         <div className="preload preload-container">
// //           <div className="spinner-circle lg">
// //             <span className="spinner-circle1 spinner-child"></span>
// //             <span className="spinner-circle2 spinner-child"></span>
// //             <span className="spinner-circle3 spinner-child"></span>
// //             <span className="spinner-circle4 spinner-child"></span>
// //             <span className="spinner-circle5 spinner-child"></span>
// //             <span className="spinner-circle6 spinner-child"></span>
// //             <span className="spinner-circle7 spinner-child"></span>
// //             <span className="spinner-circle8 spinner-child"></span>
// //             <span className="spinner-circle9 spinner-child"></span>
// //           </div>
// //         </div>

// //         <Header />

// //         <div className="page-title style-2">
// //           <div className="img-sharp sharp-1">
// //             <div className="blob-wrapper">
// //               <div className="blob"></div>
// //             </div>
// //           </div>
// //           <div className="img-sharp sharp-2">
// //             <div className="blob-wrapper">
// //               <div className="blob"></div>
// //             </div>
// //           </div>
// //           <div className="container">
// //             <div className="page-title-content">
// //               <h1 className="title">
// //                 Leading <br />
// //                 <span style={{ color: "var(--digital-marketing-light)" }}>
// //                   Digital Marketing Agency
// //                 </span>{" "}
// //                 in Bangalore
// //               </h1>
// //               <div className="breadkcum">
// //                 <a href="/">Home</a>
// //                 <span className="icon icon-chevron-right"></span>
// //                 <span className="breadkcum-active">Service Details</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="img-page-title d-none d-lg-block">
// //           <div className="container">
// //             <div className="image">
// //               <img
// //                 loading="lazy"
// //                 width="915"
// //                 height="470"
// //                 src={digitalHeroImage}
// //                 alt="Leading Digital Marketing Agency in Bangalore"
// //                 className="w-100"
// //                 style={{ borderRadius: "8px", objectFit: "cover" }}
// //                 onError={handleImageError}
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         <section className="section-services-detail flat-spacing-9">
// //           <div className="container">
// //             <div className="row rg-50">
// //               <div className="col-lg-4">
// //                 <div className="card-sidebar" style={{
// //                   position: "sticky",
// //                   top: "100px",
// //                   left: "20px",
// //                   zIndex: 1000,
// //                 }}>
// //                   <p className="h5 title fw-6 letter-space--3 lh-100">
// //                     Services Category
// //                   </p>
// //                   <ul>
// //                     <li>
// //                       <a
// //                         href="/services/Digital-marketing-agency-in-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2 active"
// //                       >
// //                         Digital Marketing
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/seo-services-in-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Search Engine Optimization
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/social-media-marketing-company-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Social Media Marketing
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/web-development-company-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Web Design & Development
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/graphic-design-company-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Graphic Design
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/lead-generation-companies-in-bangalore"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         Lead Generation
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a
// //                         href="/services/whatsapp-automation-AI-providers-india"
// //                         className="category-services-item fw-5 letter-space--2 ff-2"
// //                       >
// //                         WhatsApp Automation
// //                       </a>
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //               <div className="col-lg-8">
// //                 <div className="detail-content">
// //                   <h2 className="fw-6 letter-space--3 color-dt-black mb-50">
// //                     In today's competitive online landscape, businesses need more than just a website to succeed. They need a strategic digital presence that attracts customers, builds trust, and generates measurable results.{" "}
// //                     <span style={{ color: "var(--digital-marketing-light)" }}>
// //                       Digital Elite Service
// //                     </span>{" "}
// //                     is a trusted Digital marketing agency in Bangalore that helps businesses achieve sustainable growth through innovative, data-driven marketing solutions.
// //                   </h2>
// //                   <div className="text ff-2 color-paragraph mb-70">
// //                     Our team of experienced marketers, SEO specialists, content strategists, social media experts, and paid advertising professionals work together to deliver exceptional outcomes for businesses across industries. Whether you are a startup looking to establish your online presence, a growing company aiming to generate qualified leads, or an established enterprise seeking to strengthen your digital footprint, Digital Elite Service offers customized solutions designed to meet your goals. As a leading Digital marketing company in Bangalore, we combine creativity, technology, and analytics to create campaigns that deliver real business impact.
// //                   </div>

// //                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
// //                     Why Businesses Choose{" "}
// //                     <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       Digital Elite Service
// //                     </span>
// //                   </h3>
// //                   <div className="text ff-2 color-paragraph mb-40">
// //                     Digital marketing has become an essential part of business growth. Customers are searching for products and services online before making purchasing decisions. If your business is not visible where your customers are looking, you risk losing valuable opportunities. Digital Elite Service helps businesses stay ahead of the competition through comprehensive digital marketing strategies tailored to their target audience and industry.
// //                   </div>
// //                   <div className="text ff-2 color-paragraph mb-70">
// //                     Our approach focuses on understanding your business objectives, identifying market opportunities, and implementing strategies that generate measurable returns. We believe every business is unique, which is why we create personalized campaigns rather than relying on generic marketing templates. As a trusted Digital marketing agency in Bangalore, our mission is simple: help businesses grow through effective online marketing strategies that increase visibility, drive traffic, generate leads, and improve conversions.
// //                   </div>

// //                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
// //                     Comprehensive{" "}
// //                     <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       Digital Marketing Services
// //                     </span>{" "}
// //                     in Bangalore
// //                   </h3>
// //                   <div className="text ff-2 color-paragraph mb-40">
// //                     Digital Elite Service provides a complete range of Digital marketing services in Bangalore designed to help businesses maximize their online potential.
// //                   </div>

// //                   {/* Core Services List - Styled as Process Items */}
// //                   <div className="list-process-item d-flex justify-content-between mb-70">
// //                     <div className="line d-none d-md-block"></div>
// //                     <div className="process-item-2">
// //                       <div className="number ff-2 fw-5 letter-space--2">01</div>
// //                       <div className="dot"></div>
// //                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
// //                         Search Engine Optimization (SEO)
// //                       </a>
// //                       <div className="desc ff-2">
// //                         SEO remains one of the most effective ways to increase online visibility. Our SEO experts use proven strategies to improve search engine rankings and drive organic traffic.
// //                       </div>
// //                     </div>

// //                     <div className="process-item-2">
// //                       <div className="number ff-2 fw-5 letter-space--2">02</div>
// //                       <div className="dot"></div>
// //                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
// //                         Pay-Per-Click Advertising (PPC)
// //                       </a>
// //                       <div className="desc ff-2">
// //                         Paid advertising provides immediate visibility and lead generation. Our PPC specialists create highly targeted campaigns that maximize ROI.
// //                       </div>
// //                     </div>

// //                     <div className="process-item-2">
// //                       <div className="number ff-2 fw-5 letter-space--2">03</div>
// //                       <div className="dot"></div>
// //                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
// //                         Social Media Marketing
// //                       </a>
// //                       <div className="desc ff-2">
// //                         Social media platforms have become powerful channels for brand awareness, customer engagement, and lead generation through compelling campaigns.
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Image Grid - FIXED with proper responsive alignment and error handling */}
// //                   {/* <div className="row g-30 mb-70">
// //                     <div className="col-12 col-md-6">
// //                       <div className="image" style={{ height: "100%", minHeight: "250px" }}>
// //                         <img
// //                           loading="lazy"
// //                           width="410"
// //                           height="470"
// //                           src={digitalDetailImage1}
// //                           alt="Digital Marketing Strategy Session"
// //                           className="w-100"
// //                           style={{ 
// //                             objectFit: "cover", 
// //                             borderRadius: "8px",
// //                             height: "100%",
// //                             maxHeight: "470px",
// //                             width: "100%"
// //                           }}
// //                           onError={handleImageError}
// //                         />
// //                       </div>
// //                     </div>
// //                     <div className="col-12 col-md-6">
// //                       <div className="image" style={{ height: "100%", minHeight: "250px" }}>
// //                         <img
// //                           loading="lazy"
// //                           width="410"
// //                           height="470"
// //                           src={digitalDetailImage2}
// //                           alt="Digital Marketing Campaign Results"
// //                           className="w-100"
// //                           style={{ 
// //                             objectFit: "cover", 
// //                             borderRadius: "8px",
// //                             height: "100%",
// //                             maxHeight: "470px",
// //                             width: "100%"
// //                           }}
// //                           onError={handleImageError}
// //                         />
// //                       </div>
// //                     </div>
// //                   </div> */}

// //                   <div className="row g-4 mb-40">
// //                     <div className="col-12 col-md-6">
// //                       <img
// //                         loading="lazy"
// //                         src={digitalDetailImage1}
// //                         alt="Digital Marketing Strategy Session"
// //                         className="img-fluid w-100"
// //                         style={{
// //                           borderRadius: "8px",
// //                           aspectRatio: "410 / 470",
// //                           objectFit: "cover",
// //                         }}
// //                         onError={handleImageError}
// //                       />
// //                     </div>

// //                     <div className="col-12 col-md-6">
// //                       <img
// //                         loading="lazy"
// //                         src={digitalDetailImage2}
// //                         alt="Digital Marketing Campaign Results"
// //                         className="img-fluid w-100"
// //                         style={{
// //                           borderRadius: "8px",
// //                           aspectRatio: "410 / 470",
// //                           objectFit: "cover",
// //                         }}
// //                         onError={handleImageError}
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Additional Services Section */}
// //                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30">
// //                     More of our{" "}
// //                     <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       digital marketing services
// //                     </span>{" "}
// //                     include <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       Content Marketing, Website Design & Development,
// //                     </span>{" "}
// //                     and <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                       Email Marketing
// //                     </span>
// //                     .
// //                   </h3>
// //                   <div className="text ff-2 color-paragraph mb-70">
// //                     High-quality content plays a critical role in digital marketing success. Our content marketing strategies focus on creating valuable, informative, and engaging content that attracts and converts potential customers. Your website is often the first interaction potential customers have with your business. Digital Elite Service creates modern, responsive, and user-friendly websites designed to deliver exceptional user experiences. Email marketing continues to be one of the most cost-effective digital marketing channels, helping businesses nurture leads, retain customers, and increase revenue.
// //                   </div>

// //                   {/* Why Choose Us Section */}
// //                   {/* <div className="content-detail">
// //                     <div className="left">
// //                       <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-50">
// //                         <span style={{ color: "var(--digital-marketing-light)" }}>Digital Marketing Agency</span> in Bangalore Focused on Results
// //                       </h4>

// //                       <div className="desc-1 ff-2 mb-50 color-paragraph">
// //                         <strong>Customized Marketing Strategies:</strong> We understand that every business has unique goals, challenges, and audiences. Our team develops personalized marketing strategies tailored specifically to your needs.
// //                       </div>

// //                       <div className="desc-1 ff-2 mb-50 color-paragraph">
// //                         <strong>Experienced Professionals:</strong> Our team consists of skilled digital marketers with expertise across multiple disciplines. From SEO and PPC to social media and content marketing, we bring extensive experience to every project.
// //                       </div>

// //                       <div className="desc-1 ff-2 mb-50 color-paragraph">
// //                         <strong>Transparent Communication & Data-Driven Decisions:</strong> We believe strong partnerships are built on trust and transparency. Every marketing decision is backed by data and analytics to maximize results.
// //                       </div>

// //                       <div className="desc-2 ff-2 color-paragraph">
// //                         <strong>Focus on ROI:</strong> Our primary objective is helping businesses achieve measurable returns from their marketing investments. We focus on strategies that contribute directly to business growth.
// //                       </div>
// //                     </div>
// //                     <div className="right image">
// //                       <img
// //                         loading="lazy"
// //                         width="410"
// //                         height="540"
// //                         src={digitalDetailImage3}
// //                         alt="Digital Elite Services Digital Marketing Process"
// //                         className="w-100"
// //                         style={{ borderRadius: "8px", objectFit: "cover" }}
// //                         onError={handleImageError}
// //                       />
// //                     </div>
// //                   </div> */}

// //                   <div className="row align-items-center g-4">
// //   {/* Content */}
// //   <div className="col-12 col-lg-7">
// //     <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-4">
// //       <span style={{ color: "var(--digital-marketing-light)" }}>
// //         Digital Marketing Agency
// //       </span>{" "}
// //       in Bangalore Focused on Results
// //     </h4>

// //     <div className="desc-1 ff-2 mb-4 color-paragraph">
// //       <strong>Customized Marketing Strategies:</strong> We understand that
// //       every business has unique goals, challenges, and audiences. Our team
// //       develops personalized marketing strategies tailored specifically to your
// //       needs.
// //     </div>

// //     <div className="desc-1 ff-2 mb-4 color-paragraph">
// //       <strong>Experienced Professionals:</strong> Our team consists of skilled
// //       digital marketers with expertise across multiple disciplines. From SEO and
// //       PPC to social media and content marketing, we bring extensive experience
// //       to every project.
// //     </div>

// //     <div className="desc-1 ff-2 mb-4 color-paragraph">
// //       <strong>Transparent Communication & Data-Driven Decisions:</strong> We
// //       believe strong partnerships are built on trust and transparency. Every
// //       marketing decision is backed by data and analytics to maximize results.
// //     </div>

// //     <div className="desc-2 ff-2 color-paragraph">
// //       <strong>Focus on ROI:</strong> Our primary objective is helping businesses
// //       achieve measurable returns from their marketing investments. We focus on
// //       strategies that contribute directly to business growth.
// //     </div>
// //   </div>

// //   {/* Image */}
// //   <div className="col-12 col-lg-5">
// //     <img
// //       loading="lazy"
// //       src={digitalDetailImage3}
// //       alt="Digital Elite Services Digital Marketing Process"
// //       className="img-fluid w-100"
// //       style={{
// //         borderRadius: "8px",
// //         objectFit: "cover",
// //         maxHeight: "540px",
// //       }}
// //       onError={handleImageError}
// //     />
// //   </div>
// // </div>

// //                   {/* Industries We Serve */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       Industries We{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Serve
// //                       </span>
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       Digital Elite Service has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective solutions.
// //                     </div>
// //                     {/* <div className="row g-20" style={{ marginBottom: "20px" }}>
// //                       <div className="col-md-6">
// //                         <ul className="list-unstyled ff-2 color-paragraph">
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Building2 size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Real Estate
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <HeartPulse size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Healthcare
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <GraduationCap size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Education
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Laptop size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Information Technology
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <ShoppingBag size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             E-commerce
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Factory size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Manufacturing
// //                           </li>
// //                         </ul>
// //                       </div>
// //                       <div className="col-md-6">
// //                         <ul className="list-unstyled ff-2 color-paragraph">
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Wallet size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Finance
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Hotel size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Hospitality
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Store size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Retail
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Scale size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Professional Services
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <HardHat size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Construction
// //                           </li>
// //                           <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
// //                             <Rocket size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
// //                             Startups
// //                           </li>
// //                         </ul>
// //                       </div>
// //                     </div> */}

// //                      <div
// //                     className="d-flex flex-wrap"
// //                     style={{
// //                       gap: "20px 40px",
// //                       marginBottom: "20px",
// //                     }}
// //                   >
// //                     {[
// //                       { icon: <Building2 size={20} />, text: "Real Estate" },
// //                       { icon: <HeartPulse size={20} />, text: "Healthcare" },
// //                       { icon: <GraduationCap size={20} />, text: "Education" },
// //                       { icon: <Laptop size={20} />, text: "Information Technology" },
// //                       { icon: <ShoppingBag size={20} />, text: "E-commerce" },
// //                       { icon: <Factory size={20} />, text: "Manufacturing" },
// //                       { icon: <Wallet size={20} />, text: "Finance" },
// //                       { icon: <Hotel size={20} />, text: "Hospitality" },
// //                       { icon: <Store size={20} />, text: "Retail" },
// //                       { icon: <Scale size={20} />, text: "Professional Services" },
// //                       { icon: <HardHat size={20} />, text: "Construction" },
// //                       { icon: <Rocket size={20} />, text: "Startups" },
// //                     ].map((item, index) => (
// //                       <div
// //                         key={index}
// //                         style={{
// //                           display: "flex",
// //                           alignItems: "center",
// //                           gap: "12px",
// //                           minWidth: "220px",
// //                           flex: "1 1 250px",
// //                         }}
// //                         className="ff-2 color-paragraph"
// //                       >
// //                         <span
// //                           style={{
// //                             color: "var(--digital-marketing-light)",
// //                             flexShrink: 0,
// //                           }}
// //                         >
// //                           {item.icon}
// //                         </span>
// //                         {item.text}
// //                       </div>
// //                     ))}
// //                   </div>
// //                     <div className="text ff-2 color-paragraph">
// //                       Our industry-specific strategies ensure that marketing campaigns resonate with the right audience and deliver meaningful results.
// //                     </div>
// //                   </div>
                  

// //                   {/* Best Digital Marketing Agency Section with Lucide Icons */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       Best{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Digital Marketing Agency
// //                       </span>{" "}
// //                       in Bangalore for Local Businesses
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       Local businesses face unique challenges when competing in increasingly crowded markets. Digital Elite Service helps local businesses improve visibility, attract nearby customers, and generate qualified leads.
// //                     </div>
// //                     <div
// //                     style={{
// //                       display: "flex",
// //                       flexWrap: "wrap",
// //                       gap: "20px",
// //                     }}
// //                   >
// //                     {[
// //                       {
// //                         icon: <MapPin size={24} />,
// //                         title: "Local SEO Optimization",
// //                         desc: "Improve visibility in local search results and attract customers in your area.",
// //                       },
// //                       {
// //                         icon: <Navigation size={24} />,
// //                         title: "Google Business Profile Management",
// //                         desc: "Optimize your Google Business Profile for better local search performance.",
// //                       },
// //                       {
// //                         icon: <BadgeCheck size={24} />,
// //                         title: "Reputation Management",
// //                         desc: "Build and maintain a positive online reputation through effective review management.",
// //                       },
// //                       {
// //                         icon: <Megaphone size={24} />,
// //                         title: "Local Search Advertising",
// //                         desc: "Target customers actively searching for products and services in your location.",
// //                       },
// //                     ].map((item, index) => (
// //                       <div
// //                         key={index}
// //                         style={{
// //                           flex: "1 1 350px",
// //                           minWidth: "300px",
// //                           background: "var(--digital-marketing-light-bg)",
// //                           borderRadius: "12px",
// //                           padding: "30px",
// //                         }}
// //                       >
// //                         <div
// //                           style={{
// //                             display: "flex",
// //                             alignItems: "center",
// //                             gap: "12px",
// //                             marginBottom: "12px",
// //                           }}
// //                         >
// //                           <span
// //                             style={{
// //                               color: "var(--digital-marketing-light)",
// //                               flexShrink: 0,
// //                             }}
// //                           >
// //                             {item.icon}
// //                           </span>
// //                           <h5 className="fw-6 mb-0">{item.title}</h5>
// //                         </div>

// //                         <p className="ff-2 color-paragraph mb-0">
// //                           {item.desc}
// //                         </p>
// //                       </div>
// //                     ))}
// //                   </div>
// //                   </div>

                  

// //                   {/* What Makes Digital Elite Service Different */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       What Makes{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Digital Elite Service
// //                       </span>{" "}
// //                       Different
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       Choosing the right digital marketing company in Bangalore can significantly impact your business growth. Digital Elite Service stands out because of our commitment to excellence, innovation, and client success.
// //                     </div>
// //                   <div className="row g-4">
// //                     <div className="col-12 col-md-6 d-flex">
// //                       <div
// //                         className="p-30 w-100"
// //                         style={{
// //                           background: "var(--digital-marketing-light-bg)",
// //                           borderRadius: "12px",
// //                         }}
// //                       >
// //                         <h5 className="fw-6">Customized Marketing Strategies</h5>
// //                         <p className="ff-2 color-paragraph mb-0">
// //                           We develop personalized marketing strategies tailored specifically to your business needs.
// //                         </p>
// //                       </div>
// //                     </div>

// //                     <div className="col-12 col-md-6 d-flex">
// //                       <div
// //                         className="p-30 w-100"
// //                         style={{
// //                           background: "var(--digital-marketing-light-bg)",
// //                           borderRadius: "12px",
// //                         }}
// //                       >
// //                         <h5 className="fw-6">Experienced Professionals</h5>
// //                         <p className="ff-2 color-paragraph mb-0">
// //                           Our skilled team brings extensive expertise across all digital marketing disciplines.
// //                         </p>
// //                       </div>
// //                     </div>

// //                     <div className="col-12 col-md-6 d-flex">
// //                       <div
// //                         className="p-30 w-100"
// //                         style={{
// //                           background: "var(--digital-marketing-light-bg)",
// //                           borderRadius: "12px",
// //                         }}
// //                       >
// //                         <h5 className="fw-6">Transparent Communication</h5>
// //                         <p className="ff-2 color-paragraph mb-0">
// //                           Clients receive regular updates, detailed reports, and clear communication throughout.
// //                         </p>
// //                       </div>
// //                     </div>

// //                     <div className="col-12 col-md-6 d-flex">
// //                       <div
// //                         className="p-30 w-100"
// //                         style={{
// //                           background: "var(--digital-marketing-light-bg)",
// //                           borderRadius: "12px",
// //                         }}
// //                       >
// //                         <h5 className="fw-6">Data-Driven Decision Making</h5>
// //                         <p className="ff-2 color-paragraph mb-0">
// //                           Every marketing decision is backed by data and analytics to optimize campaign performance.
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   </div>

// //                   {/* Performance Marketing That Delivers Results - Updated with Lucide Icons */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       Performance Marketing That{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Delivers Results
// //                       </span>
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       Performance marketing focuses on measurable outcomes and accountability. Every campaign is designed to achieve specific objectives while maximizing efficiency.
// //                     </div>
// //                       <div className="row g-4">
// //                         <div className="col-12 col-md-4 d-flex">
// //                           <div
// //                             className="text-center p-30 w-100"
// //                             style={{
// //                               background: "var(--digital-marketing-light-bg)",
// //                               borderRadius: "12px",
// //                             }}
// //                           >
// //                             <BarChart3
// //                               size={40}
// //                               style={{
// //                                 color: "var(--digital-marketing-light)",
// //                                 marginBottom: "15px",
// //                               }}
// //                             />
// //                             <h5 className="fw-6">Search & Social Advertising</h5>
// //                             <p className="ff-2 color-paragraph mb-0">
// //                               Targeted campaigns that drive qualified traffic and conversions.
// //                             </p>
// //                           </div>
// //                         </div>

// //                         <div className="col-12 col-md-4 d-flex">
// //                           <div
// //                             className="text-center p-30 w-100"
// //                             style={{
// //                               background: "var(--digital-marketing-light-bg)",
// //                               borderRadius: "12px",
// //                             }}
// //                           >
// //                             <Target
// //                               size={40}
// //                               style={{
// //                                 color: "var(--digital-marketing-light)",
// //                                 marginBottom: "15px",
// //                               }}
// //                             />
// //                             <h5 className="fw-6">Conversion Optimizer</h5>
// //                             <p className="ff-2 color-paragraph mb-0">
// //                               Landing page testing and optimization to improve conversion rates.
// //                             </p>
// //                           </div>
// //                         </div>

// //                         <div className="col-12 col-md-4 d-flex">
// //                           <div
// //                             className="text-center p-30 w-100"
// //                             style={{
// //                               background: "var(--digital-marketing-light-bg)",
// //                               borderRadius: "12px",
// //                             }}
// //                           >
// //                             <TrendingUp
// //                               size={40}
// //                               style={{
// //                                 color: "var(--digital-marketing-light)",
// //                                 marginBottom: "15px",
// //                               }}
// //                             />
// //                             <h5 className="fw-6">Campaign Analytics</h5>
// //                             <p className="ff-2 color-paragraph mb-0">
// //                               Continuous monitoring and optimization to maximize ROI.
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                   </div>

// //                   {/* Future-Ready Digital Marketing Solutions - Updated with Lucide Icons */}
// //                   <div className="mt-70">
// //                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
// //                       Future-Ready{" "}
// //                       <span style={{ color: "var(--digital-marketing-blue)" }}>
// //                         Digital Marketing Solutions
// //                       </span>
// //                     </h3>
// //                     <div className="text ff-2 color-paragraph mb-40">
// //                       The digital landscape continues to evolve rapidly. Businesses must adapt to changing consumer behaviors, emerging technologies, and evolving search engine algorithms. Digital Elite Service stays ahead of industry trends by adopting innovative marketing techniques and leveraging the latest technologies.
// //                     </div>
// //                     <div className="row g-4">
// //                       <div className="col-12 col-md-6 d-flex">
// //                         <div
// //                           className="p-30 w-100"
// //                           style={{
// //                             background: "var(--digital-marketing-light-bg)",
// //                             borderRadius: "12px",
// //                           }}
// //                         >
// //                           <div
// //                             style={{
// //                               display: "flex",
// //                               alignItems: "center",
// //                               gap: "12px",
// //                               marginBottom: "10px",
// //                             }}
// //                           >
// //                             <Bot
// //                               size={24}
// //                               style={{
// //                                 color: "var(--digital-marketing-light)",
// //                                 flexShrink: 0,
// //                               }}
// //                             />
// //                             <h5 className="fw-6 mb-0">Marketing Automation</h5>
// //                           </div>

// //                           <p className="ff-2 color-paragraph mb-0">
// //                             Streamline campaigns and improve efficiency through automation.
// //                           </p>
// //                         </div>
// //                       </div>

// //                       <div className="col-12 col-md-6 d-flex">
// //                         <div
// //                           className="p-30 w-100"
// //                           style={{
// //                             background: "var(--digital-marketing-light-bg)",
// //                             borderRadius: "12px",
// //                           }}
// //                         >
// //                           <div
// //                             style={{
// //                               display: "flex",
// //                               alignItems: "center",
// //                               gap: "12px",
// //                               marginBottom: "10px",
// //                             }}
// //                           >
// //                             <Brain
// //                               size={24}
// //                               style={{
// //                                 color: "var(--digital-marketing-light)",
// //                                 flexShrink: 0,
// //                               }}
// //                             />
// //                             <h5 className="fw-6 mb-0">Artificial Intelligence Tools</h5>
// //                           </div>

// //                           <p className="ff-2 color-paragraph mb-0">
// //                             Leverage AI for smarter targeting, personalization, and optimization.
// //                           </p>
// //                         </div>
// //                       </div>

// //                       <div className="col-12 col-md-6 d-flex">
// //                         <div
// //                           className="p-30 w-100"
// //                           style={{
// //                             background: "var(--digital-marketing-light-bg)",
// //                             borderRadius: "12px",
// //                           }}
// //                         >
// //                           <div
// //                             style={{
// //                               display: "flex",
// //                               alignItems: "center",
// //                               gap: "12px",
// //                               marginBottom: "10px",
// //                             }}
// //                           >
// //                             <Database
// //                               size={24}
// //                               style={{
// //                                 color: "var(--digital-marketing-light)",
// //                                 flexShrink: 0,
// //                               }}
// //                             />
// //                             <h5 className="fw-6 mb-0">Advanced Analytics</h5>
// //                           </div>

// //                           <p className="ff-2 color-paragraph mb-0">
// //                             Gain deeper insights into campaign performance and customer behavior.
// //                           </p>
// //                         </div>
// //                       </div>

// //                       <div className="col-12 col-md-6 d-flex">
// //                         <div
// //                           className="p-30 w-100"
// //                           style={{
// //                             background: "var(--digital-marketing-light-bg)",
// //                             borderRadius: "12px",
// //                           }}
// //                         >
// //                           <div
// //                             style={{
// //                               display: "flex",
// //                               alignItems: "center",
// //                               gap: "12px",
// //                               marginBottom: "10px",
// //                             }}
// //                           >
// //                             <Sparkles
// //                               size={24}
// //                               style={{
// //                                 color: "var(--digital-marketing-light)",
// //                                 flexShrink: 0,
// //                               }}
// //                             />
// //                             <h5 className="fw-6 mb-0">Emerging Digital Platforms</h5>
// //                           </div>

// //                           <p className="ff-2 color-paragraph mb-0">
// //                             Stay ahead by adopting new platforms and channels as they emerge.
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Final CTA */}
// //                   <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
// //                     <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
// //                       Partner with{" "}
// //                       <span style={{color:"var(--digital-marketing-light)"}}>
// //                         Digital Elite Service
// //                       </span>
// //                     </h4>
// //                     <p className="ff-2 color-paragraph mb-30">
// //                       If you are looking for a reliable <strong>Digital marketing company in Bangalore</strong> that prioritizes growth, transparency, and measurable results, Digital Elite Service is your ideal partner. We are committed to helping businesses strengthen their online presence, attract qualified customers, and achieve long-term success.
// //                     </p>
// //                     <p className="ff-2 color-paragraph mb-30">
// //                       As a trusted provider of <strong>Digital marketing services in Bangalore</strong>, we combine strategic expertise with creative execution to deliver impactful marketing campaigns. Whether your goal is improving search rankings, generating leads, increasing sales, or building brand awareness, our team has the experience and dedication to help you succeed.
// //                     </p>
// //                     <p className="ff-2 color-paragraph">
// //                       <strong>
// //                         Choose Digital Elite Service and experience the difference that professional, results-driven digital marketing can make for your business.
// //                       </strong>{" "}
// //                       Let us help you transform your online presence into a powerful engine for growth, visibility, and success.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         <Footer />

// //         <div className="overlay-filter" id="overlay-filter"></div>
// //       </main>

// //       <div className="offcanvas offcanvas-start" id="mobileMenu">
// //         <div className="pop-up-nav-mobile">
// //           <div className="canvas-header">
// //             <a href="#" className="logo-site">
// //               <img src="./assets/images/logo/logo-mobi-1.svg" alt="" />
// //             </a>
// //             <span
// //               className="icon icon-close"
// //               data-bs-dismiss="offcanvas"
// //             ></span>
// //           </div>
// //           <div className="canvas-body">
// //             <div className="mb-content-top">
// //               <ul
// //                 className="nav-ul-mb"
// //                 id="wrapper-menu-navigation"
// //               ></ul>
// //             </div>
// //           </div>
// //           <div className="canvas-bottom"></div>
// //         </div>
// //       </div>

// //       <SidePopup />

// //       <div className="progress-wrap">
// //         <svg
// //           className="progress-circle svg-content"
// //           width="100%"
// //           height="100%"
// //           viewBox="-1 -1 102 102"
// //         >
// //           <path
// //             d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
// //             style={{
// //               transition: "strokeDashoffset 10ms linear",
// //               strokeDasharray: "307.919, 307.919",
// //               strokeDashoffset: "277.672",
// //             }}
// //           ></path>
// //         </svg>
// //       </div>
// //     </>
// //   );
// // }

// import React from "react";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import SidePopup from "../../../components/sidePopup";
// import {
//   Building2,
//   HeartPulse,
//   GraduationCap,
//   Laptop,
//   ShoppingBag,
//   Factory,
//   Wallet,
//   Hotel,
//   Store,
//   Scale,
//   HardHat,
//   Rocket,
//   MapPin,
//   Navigation,
//   BadgeCheck,
//   Megaphone,
//   BarChart3,
//   Target,
//   TrendingUp,
//   Bot,
//   Brain,
//   Database,
//   Sparkles,
// } from "lucide-react";
// // Import relevant images for the digital marketing service page
// import digitalHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
// import digitalDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
// import digitalDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
// import digitalDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

// export default function ServiceDetailsDigitalMarketing() {
//   // Helper function to handle image errors
//   const handleImageError = (e) => {
//     e.target.style.display = 'none';
//     const parent = e.target.parentElement;
//     if (parent) {
//       parent.style.background = '#f0f4f9';
//       parent.style.minHeight = '200px';
//       parent.style.display = 'flex';
//       parent.style.alignItems = 'center';
//       parent.style.justifyContent = 'center';
//       parent.style.borderRadius = '8px';
//       parent.innerHTML = '<span style="color: #666; font-size: 14px;">Image not available</span>';
//     }
//   };

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

//         <div className="page-title style-2">
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
//           <div className="container">
//             <div className="page-title-content">
//               <h1 className="title">
//                 Leading <br />
//                 <span style={{ color: "var(--digital-marketing-light)" }}>
//                   Digital Marketing Agency
//                 </span>{" "}
//                 in Bangalore
//               </h1>
//               <div className="breadkcum">
//                 <a href="/">Home</a>
//                 <span className="icon icon-chevron-right"></span>
//                 <span className="breadkcum-active">Service Details</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="img-page-title d-none d-lg-block">
//           <div className="container">
//             <div className="image">
//               <img
//                 loading="lazy"
//                 width="915"
//                 height="470"
//                 src={digitalHeroImage}
//                 alt="Leading Digital Marketing Agency in Bangalore"
//                 className="w-100"
//                 style={{ borderRadius: "8px", objectFit: "cover" }}
//                 onError={handleImageError}
//               />
//             </div>
//           </div>
//         </div>

//         <section className="section-services-detail flat-spacing-9">
//           <div className="container">
//             <div className="row rg-50">
//               <div className="col-lg-4">
//                 <div className="card-sidebar" style={{
//                   position: "sticky",
//                   top: "100px",
//                   left: "20px",
//                   zIndex: 1000,
//                 }}>
//                   <p className="h5 title fw-6 letter-space--3 lh-100">
//                     Services Category
//                   </p>
//                   <ul>
//                     <li>
//                       <a
//                         href="/services/Digital-marketing-agency-in-bangalore"
//                         className="category-services-item fw-5 letter-space--2 ff-2 active"
//                       >
//                         Digital Marketing
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/services/seo-services-in-bangalore"
//                         className="category-services-item fw-5 letter-space--2 ff-2"
//                       >
//                         Search Engine Optimization
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/services/social-media-marketing-company-bangalore"
//                         className="category-services-item fw-5 letter-space--2 ff-2"
//                       >
//                         Social Media Marketing
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/services/web-development-company-bangalore"
//                         className="category-services-item fw-5 letter-space--2 ff-2"
//                       >
//                         Web Design & Development
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/services/graphic-design-company-bangalore"
//                         className="category-services-item fw-5 letter-space--2 ff-2"
//                       >
//                         Graphic Design
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/services/lead-generation-companies-in-bangalore"
//                         className="category-services-item fw-5 letter-space--2 ff-2"
//                       >
//                         Lead Generation
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/services/whatsapp-automation-AI-providers-india"
//                         className="category-services-item fw-5 letter-space--2 ff-2"
//                       >
//                         WhatsApp Automation
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="col-lg-8">
//                 <div className="detail-content">
//                   <h2 className="fw-6 letter-space--3 color-dt-black mb-50">
//                     In today's competitive online landscape, businesses need more than just a website to succeed. They need a strategic digital presence that attracts customers, builds trust, and generates measurable results.{" "}
//                     <span style={{ color: "var(--digital-marketing-light)" }}>
//                       Digital Elite Service
//                     </span>{" "}
//                     is a trusted Digital marketing agency in Bangalore that helps businesses achieve sustainable growth through innovative, data-driven marketing solutions.
//                   </h2>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Our team of experienced marketers, SEO specialists, content strategists, social media experts, and paid advertising professionals work together to deliver exceptional outcomes for businesses across industries. Whether you are a startup looking to establish your online presence, a growing company aiming to generate qualified leads, or an established enterprise seeking to strengthen your digital footprint, Digital Elite Service offers customized solutions designed to meet your goals. As a leading Digital marketing company in Bangalore, we combine creativity, technology, and analytics to create campaigns that deliver real business impact.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Why Businesses Choose{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Digital Elite Service
//                     </span>
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Digital marketing has become an essential part of business growth. Customers are searching for products and services online before making purchasing decisions. If your business is not visible where your customers are looking, you risk losing valuable opportunities. Digital Elite Service helps businesses stay ahead of the competition through comprehensive digital marketing strategies tailored to their target audience and industry.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Our approach focuses on understanding your business objectives, identifying market opportunities, and implementing strategies that generate measurable returns. We believe every business is unique, which is why we create personalized campaigns rather than relying on generic marketing templates. As a trusted Digital marketing agency in Bangalore, our mission is simple: help businesses grow through effective online marketing strategies that increase visibility, drive traffic, generate leads, and improve conversions.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Comprehensive{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Digital Marketing Services
//                     </span>{" "}
//                     in Bangalore
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Digital Elite Service provides a complete range of Digital marketing services in Bangalore designed to help businesses maximize their online potential.
//                   </div>

//                   {/* Core Services List - Styled as Process Items */}
//                   <div className="list-process-item d-flex justify-content-between mb-70">
//                     <div className="line d-none d-md-block"></div>
//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">01</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Search Engine Optimization (SEO)
//                       </a>
//                       <div className="desc ff-2">
//                         SEO remains one of the most effective ways to increase online visibility. Our SEO experts use proven strategies to improve search engine rankings and drive organic traffic.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">02</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Pay-Per-Click Advertising (PPC)
//                       </a>
//                       <div className="desc ff-2">
//                         Paid advertising provides immediate visibility and lead generation. Our PPC specialists create highly targeted campaigns that maximize ROI.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">03</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Social Media Marketing
//                       </a>
//                       <div className="desc ff-2">
//                         Social media platforms have become powerful channels for brand awareness, customer engagement, and lead generation through compelling campaigns.
//                       </div>
//                     </div>
//                   </div>

//                   {/* Image Grid - FIXED with proper responsive alignment */}
//                   <div className="row g-4 mb-70">
//                     <div className="col-12 col-md-6">
//                       <div className="image" style={{ height: "100%" }}>
//                         <img
//                           loading="lazy"
//                           src={digitalDetailImage1}
//                           alt="Digital Marketing Strategy Session"
//                           className="img-fluid w-100"
//                           style={{
//                             borderRadius: "8px",
//                             aspectRatio: "410 / 470",
//                             objectFit: "cover",
//                             height: "100%",
//                             maxHeight: "470px",
//                           }}
//                           onError={handleImageError}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <div className="image" style={{ height: "100%" }}>
//                         <img
//                           loading="lazy"
//                           src={digitalDetailImage2}
//                           alt="Digital Marketing Campaign Results"
//                           className="img-fluid w-100"
//                           style={{
//                             borderRadius: "8px",
//                             aspectRatio: "410 / 470",
//                             objectFit: "cover",
//                             height: "100%",
//                             maxHeight: "470px",
//                           }}
//                           onError={handleImageError}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Additional Services Section */}
//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30">
//                     More of our{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       digital marketing services
//                     </span>{" "}
//                     include <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Content Marketing, Website Design & Development,
//                     </span>{" "}
//                     and <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Email Marketing
//                     </span>
//                     .
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     High-quality content plays a critical role in digital marketing success. Our content marketing strategies focus on creating valuable, informative, and engaging content that attracts and converts potential customers. Your website is often the first interaction potential customers have with your business. Digital Elite Service creates modern, responsive, and user-friendly websites designed to deliver exceptional user experiences. Email marketing continues to be one of the most cost-effective digital marketing channels, helping businesses nurture leads, retain customers, and increase revenue.
//                   </div>

//                   {/* Why Choose Us Section - Updated with proper responsive grid */}
//                   <div className="row align-items-center g-4 mb-70">
//                     <div className="col-12 col-lg-7">
//                       <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-4">
//                         <span style={{ color: "var(--digital-marketing-light)" }}>
//                           Digital Marketing Agency
//                         </span>{" "}
//                         in Bangalore Focused on Results
//                       </h4>

//                       <div className="desc-1 ff-2 mb-4 color-paragraph">
//                         <strong>Customized Marketing Strategies:</strong> We understand that every business has unique goals, challenges, and audiences. Our team develops personalized marketing strategies tailored specifically to your needs.
//                       </div>

//                       <div className="desc-1 ff-2 mb-4 color-paragraph">
//                         <strong>Experienced Professionals:</strong> Our team consists of skilled digital marketers with expertise across multiple disciplines. From SEO and PPC to social media and content marketing, we bring extensive experience to every project.
//                       </div>

//                       <div className="desc-1 ff-2 mb-4 color-paragraph">
//                         <strong>Transparent Communication & Data-Driven Decisions:</strong> We believe strong partnerships are built on trust and transparency. Every marketing decision is backed by data and analytics to maximize results.
//                       </div>

//                       <div className="desc-2 ff-2 color-paragraph">
//                         <strong>Focus on ROI:</strong> Our primary objective is helping businesses achieve measurable returns from their marketing investments. We focus on strategies that contribute directly to business growth.
//                       </div>
//                     </div>

//                     <div className="col-12 col-lg-5">
//                       <div className="image">
//                         <img
//                           loading="lazy"
//                           src={digitalDetailImage3}
//                           alt="Digital Elite Services Digital Marketing Process"
//                           className="img-fluid w-100"
//                           style={{
//                             borderRadius: "8px",
//                             objectFit: "cover",
//                             maxHeight: "540px",
//                           }}
//                           onError={handleImageError}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Industries We Serve - WITH BOLD TEXT */}
//                   <div className="mt-70">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       Industries We{" "}
//                       <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Serve
//                       </span>
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       Digital Elite Service has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective solutions.
//                     </div>

//                     <div
//                       className="d-flex flex-wrap"
//                       style={{
//                         gap: "20px 40px",
//                         marginBottom: "20px",
//                       }}
//                     >
//                       {[
//                         { icon: <Building2 size={20} />, text: "Real Estate" },
//                         { icon: <HeartPulse size={20} />, text: "Healthcare" },
//                         { icon: <GraduationCap size={20} />, text: "Education" },
//                         { icon: <Laptop size={20} />, text: "Information Technology" },
//                         { icon: <ShoppingBag size={20} />, text: "E-commerce" },
//                         { icon: <Factory size={20} />, text: "Manufacturing" },
//                         { icon: <Wallet size={20} />, text: "Finance" },
//                         { icon: <Hotel size={20} />, text: "Hospitality" },
//                         { icon: <Store size={20} />, text: "Retail" },
//                         { icon: <Scale size={20} />, text: "Professional Services" },
//                         { icon: <HardHat size={20} />, text: "Construction" },
//                         { icon: <Rocket size={20} />, text: "Startups" },
//                       ].map((item, index) => (
//                         <div
//                           key={index}
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                             minWidth: "200px",
//                             flex: "1 1 200px",
//                           }}
//                           className="ff-2 color-paragraph"
//                         >
//                           <span
//                             style={{
//                               color: "var(--digital-marketing-light)",
//                               flexShrink: 0,
//                             }}
//                           >
//                             {item.icon}
//                           </span>
//                           <strong style={{ fontWeight: 600 }}>{item.text}</strong>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="text ff-2 color-paragraph">
//                       Our industry-specific strategies ensure that marketing campaigns resonate with the right audience and deliver meaningful results.
//                     </div>
//                   </div>

//                   {/* Best Digital Marketing Agency Section */}
//                   <div className="mt-70">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       Best{" "}
//                       <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Digital Marketing Agency
//                       </span>{" "}
//                       in Bangalore for Local Businesses
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       Local businesses face unique challenges when competing in increasingly crowded markets. Digital Elite Service helps local businesses improve visibility, attract nearby customers, and generate qualified leads.
//                     </div>
                    
//                     <div
//                       style={{
//                         display: "flex",
//                         flexWrap: "wrap",
//                         gap: "20px",
//                       }}
//                     >
//                       {[
//                         {
//                           icon: <MapPin size={24} />,
//                           title: "Local SEO Optimization",
//                           desc: "Improve visibility in local search results and attract customers in your area.",
//                         },
//                         {
//                           icon: <Navigation size={24} />,
//                           title: "Google Business Profile Management",
//                           desc: "Optimize your Google Business Profile for better local search performance.",
//                         },
//                         {
//                           icon: <BadgeCheck size={24} />,
//                           title: "Reputation Management",
//                           desc: "Build and maintain a positive online reputation through effective review management.",
//                         },
//                         {
//                           icon: <Megaphone size={24} />,
//                           title: "Local Search Advertising",
//                           desc: "Target customers actively searching for products and services in your location.",
//                         },
//                       ].map((item, index) => (
//                         <div
//                           key={index}
//                           style={{
//                             flex: "1 1 280px",
//                             minWidth: "250px",
//                             background: "var(--digital-marketing-light-bg)",
//                             borderRadius: "12px",
//                             padding: "30px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               gap: "12px",
//                               marginBottom: "12px",
//                             }}
//                           >
//                             <span
//                               style={{
//                                 color: "var(--digital-marketing-light)",
//                                 flexShrink: 0,
//                               }}
//                             >
//                               {item.icon}
//                             </span>
//                             <h5 className="fw-6 mb-0">{item.title}</h5>
//                           </div>
//                           <p className="ff-2 color-paragraph mb-0">
//                             {item.desc}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* What Makes Digital Elite Service Different */}
//                   <div className="mt-70">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       What Makes{" "}
//                       <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Digital Elite Service
//                       </span>{" "}
//                       Different
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       Choosing the right digital marketing company in Bangalore can significantly impact your business growth. Digital Elite Service stands out because of our commitment to excellence, innovation, and client success.
//                     </div>
                    
//                     <div className="row g-4">
//                       {[
//                         {
//                           title: "Customized Marketing Strategies",
//                           desc: "We develop personalized marketing strategies tailored specifically to your business needs."
//                         },
//                         {
//                           title: "Experienced Professionals",
//                           desc: "Our skilled team brings extensive expertise across all digital marketing disciplines."
//                         },
//                         {
//                           title: "Transparent Communication",
//                           desc: "Clients receive regular updates, detailed reports, and clear communication throughout."
//                         },
//                         {
//                           title: "Data-Driven Decision Making",
//                           desc: "Every marketing decision is backed by data and analytics to optimize campaign performance."
//                         }
//                       ].map((item, index) => (
//                         <div key={index} className="col-12 col-md-6 d-flex">
//                           <div
//                             className="p-30 w-100"
//                             style={{
//                               background: "var(--digital-marketing-light-bg)",
//                               borderRadius: "12px",
//                             }}
//                           >
//                             <h5 className="fw-6">{item.title}</h5>
//                             <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Performance Marketing That Delivers Results */}
//                   <div className="mt-70">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       Performance Marketing That{" "}
//                       <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Delivers Results
//                       </span>
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       Performance marketing focuses on measurable outcomes and accountability. Every campaign is designed to achieve specific objectives while maximizing efficiency.
//                     </div>
                    
//                     <div className="row g-4">
//                       {[
//                         {
//                           icon: <BarChart3 size={40} />,
//                           title: "Search & Social Advertising",
//                           desc: "Targeted campaigns that drive qualified traffic and conversions."
//                         },
//                         {
//                           icon: <Target size={40} />,
//                           title: "Conversion Optimization",
//                           desc: "Landing page testing and optimization to improve conversion rates."
//                         },
//                         {
//                           icon: <TrendingUp size={40} />,
//                           title: "Campaign Analytics",
//                           desc: "Continuous monitoring and optimization to maximize ROI."
//                         }
//                       ].map((item, index) => (
//                         <div key={index} className="col-12 col-md-4 d-flex">
//                           <div
//                             className="text-center p-30 w-100"
//                             style={{
//                               background: "var(--digital-marketing-light-bg)",
//                               borderRadius: "12px",
//                             }}
//                           >
//                             <span
//                               style={{
//                                 color: "var(--digital-marketing-light)",
//                                 display: "block",
//                                 marginBottom: "15px",
//                               }}
//                             >
//                               {item.icon}
//                             </span>
//                             <h5 className="fw-6">{item.title}</h5>
//                             <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Future-Ready Digital Marketing Solutions */}
//                   <div className="mt-70">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       Future-Ready{" "}
//                       <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Digital Marketing Solutions
//                       </span>
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       The digital landscape continues to evolve rapidly. Businesses must adapt to changing consumer behaviors, emerging technologies, and evolving search engine algorithms. Digital Elite Service stays ahead of industry trends by adopting innovative marketing techniques and leveraging the latest technologies.
//                     </div>
                    
//                     <div className="row g-4">
//                       {[
//                         {
//                           icon: <Bot size={24} />,
//                           title: "Marketing Automation",
//                           desc: "Streamline campaigns and improve efficiency through automation."
//                         },
//                         {
//                           icon: <Brain size={24} />,
//                           title: "Artificial Intelligence Tools",
//                           desc: "Leverage AI for smarter targeting, personalization, and optimization."
//                         },
//                         {
//                           icon: <Database size={24} />,
//                           title: "Advanced Analytics",
//                           desc: "Gain deeper insights into campaign performance and customer behavior."
//                         },
//                         {
//                           icon: <Sparkles size={24} />,
//                           title: "Emerging Digital Platforms",
//                           desc: "Stay ahead by adopting new platforms and channels as they emerge."
//                         }
//                       ].map((item, index) => (
//                         <div key={index} className="col-12 col-md-6 d-flex">
//                           <div
//                             className="p-30 w-100"
//                             style={{
//                               background: "var(--digital-marketing-light-bg)",
//                               borderRadius: "12px",
//                             }}
//                           >
//                             <div
//                               style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "12px",
//                                 marginBottom: "10px",
//                               }}
//                             >
//                               <span
//                                 style={{
//                                   color: "var(--digital-marketing-light)",
//                                   flexShrink: 0,
//                                 }}
//                               >
//                                 {item.icon}
//                               </span>
//                               <h5 className="fw-6 mb-0">{item.title}</h5>
//                             </div>
//                             <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Final CTA */}
//                   <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
//                     <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
//                       Partner with{" "}
//                       <span style={{color:"var(--digital-marketing-light)"}}>
//                         Digital Elite Service
//                       </span>
//                     </h4>
//                     <p className="ff-2 color-paragraph mb-30">
//                       If you are looking for a reliable <strong>Digital marketing company in Bangalore</strong> that prioritizes growth, transparency, and measurable results, Digital Elite Service is your ideal partner. We are committed to helping businesses strengthen their online presence, attract qualified customers, and achieve long-term success.
//                     </p>
//                     <p className="ff-2 color-paragraph mb-30">
//                       As a trusted provider of <strong>Digital marketing services in Bangalore</strong>, we combine strategic expertise with creative execution to deliver impactful marketing campaigns. Whether your goal is improving search rankings, generating leads, increasing sales, or building brand awareness, our team has the experience and dedication to help you succeed.
//                     </p>
//                     <p className="ff-2 color-paragraph">
//                       <strong>
//                         Choose Digital Elite Service and experience the difference that professional, results-driven digital marketing can make for your business.
//                       </strong>{" "}
//                       Let us help you transform your online presence into a powerful engine for growth, visibility, and success.
//                     </p>
//                   </div>
//                 </div>
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
//               <ul
//                 className="nav-ul-mb"
//                 id="wrapper-menu-navigation"
//               ></ul>
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

import React, { useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SidePopup from "../../../components/sidePopup";
import {
  Building2,
  HeartPulse,
  GraduationCap,
  Laptop,
  ShoppingBag,
  Factory,
  Wallet,
  Hotel,
  Store,
  Scale,
  HardHat,
  Rocket,
  MapPin,
  Navigation,
  BadgeCheck,
  Megaphone,
  BarChart3,
  Target,
  TrendingUp,
  Bot,
  Brain,
  Database,
  Sparkles,
  Users,
  Gauge,
  ArrowUpRight,
} from "lucide-react";
// Import relevant images for the digital marketing service page
import digitalHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
import digitalDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
import digitalDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
import digitalDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

export default function ServiceDetailsDigitalMarketing() {
  // Helper function to handle image errors
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    if (parent) {
      parent.style.background = '#f0f4f9';
      parent.style.minHeight = '200px';
      parent.style.display = 'flex';
      parent.style.alignItems = 'center';
      parent.style.justifyContent = 'center';
      parent.style.borderRadius = '8px';
      parent.innerHTML = '<span style="color: #666; font-size: 14px;">Image not available</span>';
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    // ============================================
    // 1. FADE IN UP ANIMATION
    // ============================================
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    fadeElements.forEach(el => fadeObserver.observe(el));

    // ============================================
    // 2. SLIDE IN LEFT ANIMATION
    // ============================================
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideLeftObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    slideLeftElements.forEach(el => slideLeftObserver.observe(el));

    // ============================================
    // 3. SLIDE IN RIGHT ANIMATION
    // ============================================
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    const slideRightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    slideRightElements.forEach(el => slideRightObserver.observe(el));

    // ============================================
    // 4. SCALE IN ANIMATION
    // ============================================
    const scaleElements = document.querySelectorAll('.scale-in');
    const scaleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    scaleElements.forEach(el => scaleObserver.observe(el));

    // ============================================
    // 5. ROTATE IN ANIMATION
    // ============================================
    const rotateElements = document.querySelectorAll('.rotate-in');
    const rotateObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    rotateElements.forEach(el => rotateObserver.observe(el));

    // ============================================
    // 6. FLIP IN ANIMATION
    // ============================================
    const flipElements = document.querySelectorAll('.flip-in');
    const flipObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    flipElements.forEach(el => flipObserver.observe(el));

    // ============================================
    // 7. ZOOM IN ANIMATION
    // ============================================
    const zoomElements = document.querySelectorAll('.zoom-in');
    const zoomObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    zoomElements.forEach(el => zoomObserver.observe(el));

    // ============================================
    // 8. BOUNCE IN ANIMATION
    // ============================================
    const bounceElements = document.querySelectorAll('.bounce-in');
    const bounceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    bounceElements.forEach(el => bounceObserver.observe(el));

    // ============================================
    // 9. BLUR IN ANIMATION
    // ============================================
    const blurElements = document.querySelectorAll('.blur-in');
    const blurObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    blurElements.forEach(el => blurObserver.observe(el));

    // ============================================
    // 10. GLOW IN ANIMATION
    // ============================================
    const glowElements = document.querySelectorAll('.glow-in');
    const glowObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    glowElements.forEach(el => glowObserver.observe(el));

    // ============================================
    // ODOMETER / COUNTER ANIMATION
    // ============================================
    const odometers = document.querySelectorAll('.odometer');
    odometers.forEach(odometer => {
      const target = parseFloat(odometer.getAttribute('data-to'));
      const inViewport = odometer.getAttribute('data-inviewport') === 'yes';
      
      const animateNumber = (el, target, duration = 2000) => {
        let start = 0;
        const isDecimal = target % 1 !== 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = isDecimal ? target.toFixed(1) : Math.floor(target);
            clearInterval(timer);
          } else {
            el.textContent = isDecimal ? start.toFixed(1) : Math.floor(start);
          }
        }, 16);
      };

      if (inViewport) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateNumber(odometer, target);
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        obs.observe(odometer);
      } else {
        animateNumber(odometer, target);
      }
    });

    // ============================================
    // PARALLAX EFFECT ON HERO IMAGE
    // ============================================
    const heroImage = document.querySelector('.hero-image-wrapper');
    if (heroImage) {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.05}px)`;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    // ============================================
    // TYPING EFFECT ON SUBTITLE
    // ============================================
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
      const text = typingElement.textContent;
      typingElement.textContent = '';
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
          typingElement.textContent += text.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);
    }

    return () => {
      fadeObserver.disconnect();
      slideLeftObserver.disconnect();
      slideRightObserver.disconnect();
      scaleObserver.disconnect();
      rotateObserver.disconnect();
      flipObserver.disconnect();
      zoomObserver.disconnect();
      bounceObserver.disconnect();
      blurObserver.disconnect();
      glowObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        /* ============================================
           ANIMATION 1: FADE IN UP
           ============================================ */
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ============================================
           ANIMATION 2: SLIDE IN LEFT
           ============================================ */
        .slide-in-left {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .slide-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* ============================================
           ANIMATION 3: SLIDE IN RIGHT
           ============================================ */
        .slide-in-right {
          opacity: 0;
          transform: translateX(80px);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* ============================================
           ANIMATION 4: SCALE IN
           ============================================ */
        .scale-in {
          opacity: 0;
          transform: scale(0.6);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }

        /* ============================================
           ANIMATION 5: ROTATE IN
           ============================================ */
        .rotate-in {
          opacity: 0;
          transform: rotate(-15deg) scale(0.8);
          transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .rotate-in.visible {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }

        /* ============================================
           ANIMATION 6: FLIP IN
           ============================================ */
        .flip-in {
          opacity: 0;
          transform: perspective(600px) rotateY(90deg);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .flip-in.visible {
          opacity: 1;
          transform: perspective(600px) rotateY(0deg);
        }

        /* ============================================
           ANIMATION 7: ZOOM IN
           ============================================ */
        .zoom-in {
          opacity: 0;
          transform: scale(0.3);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .zoom-in.visible {
          opacity: 1;
          transform: scale(1);
        }

        /* ============================================
           ANIMATION 8: BOUNCE IN
           ============================================ */
        .bounce-in {
          opacity: 0;
          transform: translateY(100px);
          transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .bounce-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ============================================
           ANIMATION 9: BLUR IN
           ============================================ */
        .blur-in {
          opacity: 0;
          filter: blur(20px);
          transform: scale(1.1);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .blur-in.visible {
          opacity: 1;
          filter: blur(0px);
          transform: scale(1);
        }

        /* ============================================
           ANIMATION 10: GLOW IN
           ============================================ */
        .glow-in {
          opacity: 0;
          box-shadow: 0 0 40px rgba(0,0,0,0);
          transform: scale(0.95);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .glow-in.visible {
          opacity: 1;
          box-shadow: 0 0 60px rgba(var(--digital-marketing-light-rgb), 0.15);
          transform: scale(1);
        }

        /* ============================================
           HERO SECTION STYLES
           ============================================ */
        .hero-section .hero-left {
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 40px 0;
        }

        .hero-section .hero-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-section .hero-content .sub-title {
          font-size: 18px;
          letter-spacing: 2px;
          opacity: 0.8;
        }

        .hero-section .hero-content .sub-title .color-dt-light {
          color: var(--digital-marketing-light);
        }

        .hero-section .hero-content .title {
          font-size: 56px;
          line-height: 1.1;
        }

        @media (max-width: 768px) {
          .hero-section .hero-content .title {
            font-size: 36px;
          }
        }

        .hero-section .hero-content .desc {
          font-size: 20px;
          line-height: 1.6;
          max-width: 600px;
          color: #666;
        }

        .hero-section .stats {
          display: flex;
          gap: 60px;
          margin-top: 20px;
          padding-top: 30px;
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        @media (max-width: 576px) {
          .hero-section .stats {
            gap: 30px;
            flex-wrap: wrap;
          }
        }

        .hero-section .counter-item .counter {
          display: flex;
          align-items: center;
        }

        .hero-section .counter-item .number-counter {
          display: flex;
          align-items: baseline;
        }

        .hero-section .counter-item .odometer {
          font-size: 48px;
          font-weight: 700;
          color: var(--digital-marketing-light);
        }

        .hero-section .counter-item .h5 {
          font-size: 16px;
          color: #666;
          margin-top: 5px;
        }

        /* ============================================
           BUTTON STYLE WITH PULSE ANIMATION
           ============================================ */
        .hero-section .tf-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 40px;
          background: var(--digital-marketing-light);
          color: #fff;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
          font-weight: 600;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .hero-section .tf-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .hero-section .tf-btn:hover::before {
          left: 100%;
        }

        .hero-section .tf-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          background: var(--digital-marketing-light);
          opacity: 0.9;
        }

        .hero-section .tf-btn .icon-btn {
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .hero-section .tf-btn:hover .icon-btn {
          transform: rotate(45deg) scale(1.2);
        }

        /* ============================================
           STAT ITEM ANIMATION
           ============================================ */
        .stat-item {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .stat-item.stat-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ============================================
           PARALLAX EFFECT
           ============================================ */
        .hero-image-wrapper {
          transition: transform 0.1s ease-out;
          will-change: transform;
        }

        /* ============================================
           CARD HOVER EFFECTS
           ============================================ */
        .process-item-2 {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }


        .p-30 {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }


        /* ============================================
           IMAGE HOVER ZOOM EFFECT
           ============================================ */
        .image {
          overflow: hidden;
          border-radius: 8px;
          position: relative;
        }

        .image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(var(--digital-marketing-light-rgb), 0.1), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .image:hover::after {
          opacity: 1;
        }

        .image img {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .image:hover img {
          transform: scale(1.08) rotate(-1deg);
        }

        /* ============================================
           LIST ITEM HOVER EFFECT
           ============================================ */
        .d-flex.flex-wrap > div {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          padding: 8px 12px;
          border-radius: 8px;
          cursor: default;
        }


        /* ============================================
           CTA BOX ANIMATION
           ============================================ */
        .p-40 {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .p-40::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(var(--digital-marketing-light-rgb), 0.03), transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .p-40:hover::before {
          opacity: 1;
        }



        /* ============================================
           SIDEBAR CATEGORY ITEMS
           ============================================ */
        .category-services-item {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: block;
          padding: 10px 0;
          position: relative;
          cursor: pointer;
        }

        .category-services-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--digital-marketing-blue);
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 2px;
        }

        .category-services-item:hover::after,
        .category-services-item.active::after {
          width: 100%;
        }

        .category-services-item:hover {
          transform: translateX(8px);
          color: var(--digital-marketing-blue);
        }

        .category-services-item.active {
          color: var(--digital-marketing-blue);
          font-weight: 600;
        }

        /* ============================================
           GRID CARDS STAGGERED ANIMATION
           ============================================ */
        .row.g-4 > .d-flex {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }


        /* ============================================
           TYPING EFFECT
           ============================================ */
        .typing-effect {
          display: inline-block;
          border-right: 3px solid var(--digital-marketing-light);
          padding-right: 5px;
          animation: blink 0.8s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { border-color: var(--digital-marketing-light); }
          50% { border-color: transparent; }
        }

        /* ============================================
           SCROLLBAR STYLES
           ============================================ */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--digital-marketing-light);
          border-radius: 5px;
          transition: background 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* ============================================
           RESPONSIVE ADJUSTMENTS
           ============================================ */
        @media (max-width: 992px) {
          .hero-section .hero-content .title {
            font-size: 42px;
          }
          
          .hero-section .hero-content .desc {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .hero-section .hero-left {
            padding: 20px 0;
          }
          
          .hero-section .hero-content .title {
            font-size: 32px;
          }
          
          .hero-section .hero-content .desc {
            font-size: 16px;
          }
          
          .hero-section .counter-item .odometer {
            font-size: 36px;
          }
          
          .hero-section .tf-btn {
            padding: 14px 30px;
            font-size: 14px;
          }
          
          .p-30 {
            padding: 20px !important;
          }
        }

        @media (max-width: 576px) {
          .hero-section .hero-content .title {
            font-size: 28px;
          }
          
          .hero-section .stats {
            flex-direction: column;
            gap: 15px;
          }
          
          .hero-section .counter-item .odometer {
            font-size: 30px;
          }
        }

        /* ============================================
           LOADING ANIMATION
           ============================================ */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page-title .hero-content {
          animation: fadeInUp 0.8s ease forwards;
        }

        .section-services-detail {
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>

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

        {/* Hero Section with Animations */}
        <div className="page-title style-2 hero-section">
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
            <div className="hero-left">
              <div className="hero-content">
                <div className="sub-title h6 letter-space--2 fw-5 fade-in-up mt-60" data-delay="100">
                 
                
                </div>
                <h1 className="title letter-space--3 fw-6 slide-in-left" data-delay="200">
                  Elevating brands
                  <br />
                  with{" "}
                  <span style={{ color: "var(--digital-marketing-light)" }}>
                    performance
                  </span>
                  <br />
                  marketing
                </h1>
                
              </div>
              <div className="stats">
                <div className="counter-item stat stat-item">
                  <div className="counter">
                    <div className="number-counter flex fs-65">
                      <span
                        className="number odometer color-primary h1 fw-6"
                        data-to="98"
                        data-inviewport="yes"
                      >
                        0
                      </span>
                      <span className="h1">%</span>
                    </div>
                  </div>
                  <div className="h5 ff-2 fw-6 lh-35">
                    Clients satisfied and
                    <br />
                    repeating
                  </div>
                </div>
                <div className="counter-item stat stat-item">
                  <div className="counter">
                    <div className="number-counter flex fs-65">
                      <span
                        className="number odometer color-primary h1 fw-6"
                        data-to="4.9"
                        data-inviewport="yes"
                      >
                        0
                      </span>
                    </div>
                  </div>
                  <div className="h5 ff-2 fw-6 lh-35">
                    Based on clients
                    <br />
                    reviews (1000+)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image - with parallax effect */}
        <div className="img-page-title d-none d-lg-block hero-image-wrapper">
          <div className="container">
            <div className="image zoom-in" data-delay="100">
              <img
                loading="lazy"
                width="915"
                height="470"
                src={digitalHeroImage}
                alt="Leading Digital Marketing Agency in Bangalore"
                className="w-100"
                style={{ borderRadius: "8px", objectFit: "cover" }}
                onError={handleImageError}
              />
            </div>
          </div>
        </div>

        <section className="section-services-detail flat-spacing-9">
          <div className="container">
            <div className="row rg-50">
              <div className="col-lg-4">
                <div className="card-sidebar slide-in-left" data-delay="100" style={{
                  position: "sticky",
                  top: "100px",
                  left: "20px",
                  zIndex: 1000,
                }}>
                  <p className="h5 title fw-6 letter-space--3 lh-100">
                    Services Category
                  </p>
                  <ul>
                    <li>
                      <a
                        href="/services/Digital-marketing-agency-in-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/seo-services-in-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Search Engine Optimization
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/social-media-marketing-company-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Social Media Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/web-development-company-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Web Design & Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/graphic-design-company-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Graphic Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/lead-generation-companies-in-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Lead Generation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/whatsapp-automation-AI-providers-india"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        WhatsApp Automation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="detail-content">
                  <h2 className="fw-6 letter-space--3 color-dt-black mb-50 fade-in-up" data-delay="100">
                    In today's competitive online landscape, businesses need more than just a website to succeed. They need a strategic digital presence that attracts customers, builds trust, and generates measurable results.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Service
                    </span>{" "}
                    is a trusted Digital marketing agency in Bangalore that helps businesses achieve sustainable growth through innovative, data-driven marketing solutions.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="200">
                    Our team of experienced marketers, SEO specialists, content strategists, social media experts, and paid advertising professionals work together to deliver exceptional outcomes for businesses across industries. Whether you are a startup looking to establish your online presence, a growing company aiming to generate qualified leads, or an established enterprise seeking to strengthen your digital footprint, Digital Elite Service offers customized solutions designed to meet your goals. As a leading Digital marketing company in Bangalore, we combine creativity, technology, and analytics to create campaigns that deliver real business impact.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black scale-in" data-delay="100">
                    Why Businesses Choose{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Service
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Digital marketing has become an essential part of business growth. Customers are searching for products and services online before making purchasing decisions. If your business is not visible where your customers are looking, you risk losing valuable opportunities. Digital Elite Service helps businesses stay ahead of the competition through comprehensive digital marketing strategies tailored to their target audience and industry.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-left" data-delay="300">
                    Our approach focuses on understanding your business objectives, identifying market opportunities, and implementing strategies that generate measurable returns. We believe every business is unique, which is why we create personalized campaigns rather than relying on generic marketing templates. As a trusted Digital marketing agency in Bangalore, our mission is simple: help businesses grow through effective online marketing strategies that increase visibility, drive traffic, generate leads, and improve conversions.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black rotate-in" data-delay="100">
                    Comprehensive{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Marketing Services
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Digital Elite Service provides a complete range of Digital marketing services in Bangalore designed to help businesses maximize their online potential.
                  </div>

                  {/* Core Services List - Styled as Process Items */}
                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2 flip-in" data-delay="100">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Search Engine Optimization (SEO)
                      </a>
                      <div className="desc ff-2">
                        SEO remains one of the most effective ways to increase online visibility. Our SEO experts use proven strategies to improve search engine rankings and drive organic traffic.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="200">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Pay-Per-Click Advertising (PPC)
                      </a>
                      <div className="desc ff-2">
                        Paid advertising provides immediate visibility and lead generation. Our PPC specialists create highly targeted campaigns that maximize ROI.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="300">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Social Media Marketing
                      </a>
                      <div className="desc ff-2">
                        Social media platforms have become powerful channels for brand awareness, customer engagement, and lead generation through compelling campaigns.
                      </div>
                    </div>
                  </div>

                  {/* Image Grid */}
                  <div className="row g-4 mb-70">
                    <div className="col-12 col-md-6 zoom-in" data-delay="100">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={digitalDetailImage1}
                          alt="Digital Marketing Strategy Session"
                          className="img-fluid w-100"
                          style={{
                            borderRadius: "8px",
                            aspectRatio: "410 / 470",
                            objectFit: "cover",
                            height: "100%",
                            maxHeight: "470px",
                          }}
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 zoom-in" data-delay="200">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={digitalDetailImage2}
                          alt="Digital Marketing Campaign Results"
                          className="img-fluid w-100"
                          style={{
                            borderRadius: "8px",
                            aspectRatio: "410 / 470",
                            objectFit: "cover",
                            height: "100%",
                            maxHeight: "470px",
                          }}
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Services Section */}
                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30 blur-in" data-delay="100">
                    More of our{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      digital marketing services
                    </span>{" "}
                    include <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Content Marketing, Website Design & Development,
                    </span>{" "}
                    and <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Email Marketing
                    </span>
                    .
                  </h3>
                  <div className="text ff-2 color-paragraph mb-70 fade-in-up" data-delay="200">
                    High-quality content plays a critical role in digital marketing success. Our content marketing strategies focus on creating valuable, informative, and engaging content that attracts and converts potential customers. Your website is often the first interaction potential customers have with your business. Digital Elite Service creates modern, responsive, and user-friendly websites designed to deliver exceptional user experiences. Email marketing continues to be one of the most cost-effective digital marketing channels, helping businesses nurture leads, retain customers, and increase revenue.
                  </div>

                  {/* Why Choose Us Section */}
                  <div className="row align-items-center g-4 mb-70">
                    <div className="col-12 col-lg-7">
                      <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-4 slide-in-left" data-delay="100">
                        <span style={{ color: "var(--digital-marketing-light)" }}>Digital Marketing Agency</span> in Bangalore Focused on Results
                      </h4>

                      <div className="desc-1 ff-2 mb-4 color-paragraph fade-in-up" data-delay="150">
                        <strong>Customized Marketing Strategies:</strong> We understand that every business has unique goals, challenges, and audiences. Our team develops personalized marketing strategies tailored specifically to your needs.
                      </div>

                      <div className="desc-1 ff-2 mb-4 color-paragraph slide-in-right" data-delay="200">
                        <strong>Experienced Professionals:</strong> Our team consists of skilled digital marketers with expertise across multiple disciplines. From SEO and PPC to social media and content marketing, we bring extensive experience to every project.
                      </div>

                      <div className="desc-1 ff-2 mb-4 color-paragraph fade-in-up" data-delay="250">
                        <strong>Transparent Communication & Data-Driven Decisions:</strong> We believe strong partnerships are built on trust and transparency. Every marketing decision is backed by data and analytics to maximize results.
                      </div>

                      <div className="desc-2 ff-2 color-paragraph slide-in-left" data-delay="300">
                        <strong>Focus on ROI:</strong> Our primary objective is helping businesses achieve measurable returns from their marketing investments. We focus on strategies that contribute directly to business growth.
                      </div>
                    </div>

                    <div className="col-12 col-lg-5 rotate-in" data-delay="100">
                      <div className="image">
                        <img
                          loading="lazy"
                          src={digitalDetailImage3}
                          alt="Digital Elite Services Digital Marketing Process"
                          className="img-fluid w-100"
                          style={{
                            borderRadius: "8px",
                            objectFit: "cover",
                            maxHeight: "540px",
                          }}
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Industries We Serve */}
                  <div className="mt-70 glow-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Industries We{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Serve
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      Digital Elite Service has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective solutions.
                    </div>

                    <div
                      className="d-flex flex-wrap"
                      style={{
                        gap: "20px 40px",
                        marginBottom: "20px",
                      }}
                    >
                      {[
                        { icon: <Building2 size={20} />, text: "Real Estate" },
                        { icon: <HeartPulse size={20} />, text: "Healthcare" },
                        { icon: <GraduationCap size={20} />, text: "Education" },
                        { icon: <Laptop size={20} />, text: "Information Technology" },
                        { icon: <ShoppingBag size={20} />, text: "E-commerce" },
                        { icon: <Factory size={20} />, text: "Manufacturing" },
                        { icon: <Wallet size={20} />, text: "Finance" },
                        { icon: <Hotel size={20} />, text: "Hospitality" },
                        { icon: <Store size={20} />, text: "Retail" },
                        { icon: <Scale size={20} />, text: "Professional Services" },
                        { icon: <HardHat size={20} />, text: "Construction" },
                        { icon: <Rocket size={20} />, text: "Startups" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            minWidth: "200px",
                            flex: "1 1 200px",
                          }}
                          className="ff-2 color-paragraph bounce-in"
                          data-delay={100 + index * 50}
                        >
                          <span
                            style={{
                              color: "var(--digital-marketing-light)",
                              flexShrink: 0,
                            }}
                          >
                            {item.icon}
                          </span>
                          <strong style={{ fontWeight: 600 }}>{item.text}</strong>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text ff-2 color-paragraph">
                      Our industry-specific strategies ensure that marketing campaigns resonate with the right audience and deliver meaningful results.
                    </div>
                  </div>

                  {/* Best Digital Marketing Agency Section */}
                  <div className="mt-70 fade-in-up" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Best{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Marketing Agency
                      </span>{" "}
                      in Bangalore for Local Businesses
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Local businesses face unique challenges when competing in increasingly crowded markets. Digital Elite Service helps local businesses improve visibility, attract nearby customers, and generate qualified leads.
                    </div>
                    
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                      }}
                    >
                      {[
                        {
                          icon: <MapPin size={24} />,
                          title: "Local SEO Optimization",
                          desc: "Improve visibility in local search results and attract customers in your area.",
                        },
                        {
                          icon: <Navigation size={24} />,
                          title: "Google Business Profile Management",
                          desc: "Optimize your Google Business Profile for better local search performance.",
                        },
                        {
                          icon: <BadgeCheck size={24} />,
                          title: "Reputation Management",
                          desc: "Build and maintain a positive online reputation through effective review management.",
                        },
                        {
                          icon: <Megaphone size={24} />,
                          title: "Local Search Advertising",
                          desc: "Target customers actively searching for products and services in your location.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          style={{
                            flex: "1 1 280px",
                            minWidth: "250px",
                            background: "var(--digital-marketing-light-bg)",
                            borderRadius: "12px",
                            padding: "30px",
                          }}
                          className="scale-in"
                          data-delay={100 + index * 100}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              marginBottom: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--digital-marketing-light)",
                                flexShrink: 0,
                              }}
                            >
                              {item.icon}
                            </span>
                            <h5 className="fw-6 mb-0">{item.title}</h5>
                          </div>
                          <p className="ff-2 color-paragraph mb-0">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What Makes Digital Elite Service Different */}
                  <div className="mt-70 slide-in-right" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      What Makes{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Elite Service
                      </span>{" "}
                      Different
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Choosing the right digital marketing company in Bangalore can significantly impact your business growth. Digital Elite Service stands out because of our commitment to excellence, innovation, and client success.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          title: "Customized Marketing Strategies",
                          desc: "We develop personalized marketing strategies tailored specifically to your business needs."
                        },
                        {
                          title: "Experienced Professionals",
                          desc: "Our skilled team brings extensive expertise across all digital marketing disciplines."
                        },
                        {
                          title: "Transparent Communication",
                          desc: "Clients receive regular updates, detailed reports, and clear communication throughout."
                        },
                        {
                          title: "Data-Driven Decision Making",
                          desc: "Every marketing decision is backed by data and analytics to optimize campaign performance."
                        }
                      ].map((item, index) => (
                        <div key={index} className="col-12 col-md-6 d-flex flip-in" data-delay={100 + index * 100}>
                          <div
                            className="p-30 w-100"
                            style={{
                              background: "var(--digital-marketing-light-bg)",
                              borderRadius: "12px",
                            }}
                          >
                            <h5 className="fw-6">{item.title}</h5>
                            <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Marketing That Delivers Results */}
                  <div className="mt-70 zoom-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Performance Marketing That{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Delivers Results
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Performance marketing focuses on measurable outcomes and accountability. Every campaign is designed to achieve specific objectives while maximizing efficiency.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <BarChart3 size={40} />,
                          title: "Search & Social Advertising",
                          desc: "Targeted campaigns that drive qualified traffic and conversions."
                        },
                        {
                          icon: <Target size={40} />,
                          title: "Conversion Optimization",
                          desc: "Landing page testing and optimization to improve conversion rates."
                        },
                        {
                          icon: <TrendingUp size={40} />,
                          title: "Campaign Analytics",
                          desc: "Continuous monitoring and optimization to maximize ROI."
                        }
                      ].map((item, index) => (
                        <div key={index} className="col-12 col-md-4 d-flex rotate-in" data-delay={100 + index * 100}>
                          <div
                            className="text-center p-30 w-100"
                            style={{
                              background: "var(--digital-marketing-light-bg)",
                              borderRadius: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--digital-marketing-light)",
                                display: "block",
                                marginBottom: "15px",
                              }}
                            >
                              {item.icon}
                            </span>
                            <h5 className="fw-6">{item.title}</h5>
                            <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Future-Ready Digital Marketing Solutions */}
                  <div className="mt-70 blur-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Future-Ready{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Marketing Solutions
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      The digital landscape continues to evolve rapidly. Businesses must adapt to changing consumer behaviors, emerging technologies, and evolving search engine algorithms. Digital Elite Service stays ahead of industry trends by adopting innovative marketing techniques and leveraging the latest technologies.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Bot size={24} />,
                          title: "Marketing Automation",
                          desc: "Streamline campaigns and improve efficiency through automation."
                        },
                        {
                          icon: <Brain size={24} />,
                          title: "Artificial Intelligence Tools",
                          desc: "Leverage AI for smarter targeting, personalization, and optimization."
                        },
                        {
                          icon: <Database size={24} />,
                          title: "Advanced Analytics",
                          desc: "Gain deeper insights into campaign performance and customer behavior."
                        },
                        {
                          icon: <Sparkles size={24} />,
                          title: "Emerging Digital Platforms",
                          desc: "Stay ahead by adopting new platforms and channels as they emerge."
                        }
                      ].map((item, index) => (
                        <div key={index} className="col-12 col-md-6 d-flex bounce-in" data-delay={100 + index * 100}>
                          <div
                            className="p-30 w-100"
                            style={{
                              background: "var(--digital-marketing-light-bg)",
                              borderRadius: "12px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "10px",
                              }}
                            >
                              <span
                                style={{
                                  color: "var(--digital-marketing-light)",
                                  flexShrink: 0,
                                }}
                              >
                                {item.icon}
                              </span>
                              <h5 className="fw-6 mb-0">{item.title}</h5>
                            </div>
                            <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final CTA */}
                  <div className="mt-70 p-40 glow-in" data-delay="100" style={{ background: "", borderRadius: "`" }}>
                    <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
                      Partner with{" "}
                      <span style={{color:"var(--digital-marketing-light)"}}>
                        Digital Elite Service
                      </span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      If you are looking for a reliable <strong>Digital marketing company in Bangalore</strong> that prioritizes growth, transparency, and measurable results, Digital Elite Service is your ideal partner. We are committed to helping businesses strengthen their online presence, attract qualified customers, and achieve long-term success.
                    </p>
                    <p className="ff-2 color-paragraph mb-30">
                      As a trusted provider of <strong>Digital marketing services in Bangalore</strong>, we combine strategic expertise with creative execution to deliver impactful marketing campaigns. Whether your goal is improving search rankings, generating leads, increasing sales, or building brand awareness, our team has the experience and dedication to help you succeed.
                    </p>
                    <p className="ff-2 color-paragraph">
                      <strong>
                        Choose Digital Elite Service and experience the difference that professional, results-driven digital marketing can make for your business.
                      </strong>{" "}
                      Let us help you transform your online presence into a powerful engine for growth, visibility, and success.
                    </p>
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
              <ul
                className="nav-ul-mb"
                id="wrapper-menu-navigation"
              ></ul>
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
          ></path>
        </svg>
      </div>
    </>
  );
}