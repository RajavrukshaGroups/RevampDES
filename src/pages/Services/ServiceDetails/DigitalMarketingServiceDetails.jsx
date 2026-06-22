// import React from "react";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import SidePopup from "../../../components/sidePopup";
// // Import relevant images for the digital marketing service page
// import digitalHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg"; // Replace with relevant image
// import digitalDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg"; // Replace with relevant image
// import digitalDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg"; // Replace with relevant image
// import digitalDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg"; // Replace with relevant image

// export default function ServiceDetailsDigitalMarketing() {
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

//                   {/* Image Grid */}
//                   <div className="list-img d-flex g-30 align-items-center mb-70">
//                     <div className="image">
//                       <img
//                         loading="lazy"
//                         width="410"
//                         height="470"
//                         src={digitalDetailImage1}
//                         alt="Digital Marketing Strategy Session"
//                       />
//                     </div>
//                     <div className="image">
//                       <img
//                         loading="lazy"
//                         width="410"
//                         height="470"
//                         src={digitalDetailImage2}
//                         alt="Digital Marketing Campaign Results"
//                       />
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

//                   {/* Why Choose Us Section */}
//                   <div className="content-detail">
//                     <div className="left">
//                       <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-50">
//                         <span style={{ color: "var(--digital-marketing-light)" }}>Digital Marketing Agency</span> in Bangalore Focused on Results
//                       </h4>

//                       <div className="desc-1 ff-2 mb-50 color-paragraph">
//                         <strong>Customized Marketing Strategies:</strong> We understand that every business has unique goals, challenges, and audiences. Our team develops personalized marketing strategies tailored specifically to your needs.
//                       </div>

//                       <div className="desc-1 ff-2 mb-50 color-paragraph">
//                         <strong>Experienced Professionals:</strong> Our team consists of skilled digital marketers with expertise across multiple disciplines. From SEO and PPC to social media and content marketing, we bring extensive experience to every project.
//                       </div>

//                       <div className="desc-1 ff-2 mb-50 color-paragraph">
//                         <strong>Transparent Communication & Data-Driven Decisions:</strong> We believe strong partnerships are built on trust and transparency. Every marketing decision is backed by data and analytics to maximize results.
//                       </div>

//                       <div className="desc-2 ff-2 color-paragraph">
//                         <strong>Focus on ROI:</strong> Our primary objective is helping businesses achieve measurable returns from their marketing investments. We focus on strategies that contribute directly to business growth.
//                       </div>
//                     </div>
//                     <div className="right image">
//                       <img
//                         loading="lazy"
//                         width="410"
//                         height="540"
//                         src={digitalDetailImage3}
//                         alt="Digital Elite Services Digital Marketing Process"
//                       />
//                     </div>
//                   </div>

//                   {/* Industries We Serve */}
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
//                     <ul className="list-unstyled ff-2 color-paragraph" style={{ columns: "2", columnGap: "40px" }}>
//                       <li className="mb-20">🏢 Real Estate</li>
//                       <li className="mb-20">🏥 Healthcare</li>
//                       <li className="mb-20">🎓 Education</li>
//                       <li className="mb-20">💻 Information Technology</li>
//                       <li className="mb-20">🛒 E-commerce</li>
//                       <li className="mb-20">🏭 Manufacturing</li>
//                       <li className="mb-20">💰 Finance</li>
//                       <li className="mb-20">🏨 Hospitality</li>
//                       <li className="mb-20">🛍️ Retail</li>
//                       <li className="mb-20">⚖️ Professional Services</li>
//                       <li className="mb-20">🏗️ Construction</li>
//                       <li className="mb-20">🚀 Startups</li>
//                     </ul>
//                     <div className="text ff-2 color-paragraph mt-20">
//                       Our industry-specific strategies ensure that marketing campaigns resonate with the right audience and deliver meaningful results.
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
//                     <div className="row g-30">
//                       <div className="col-md-6">
//                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px" }}>
//                           <h5 className="fw-6">Customized Marketing Strategies</h5>
//                           <p className="ff-2 color-paragraph">We develop personalized marketing strategies tailored specifically to your business needs.</p>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px" }}>
//                           <h5 className="fw-6">Experienced Professionals</h5>
//                           <p className="ff-2 color-paragraph">Our skilled team brings extensive expertise across all digital marketing disciplines.</p>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px" }}>
//                           <h5 className="fw-6">Transparent Communication</h5>
//                           <p className="ff-2 color-paragraph">Clients receive regular updates, detailed reports, and clear communication throughout.</p>
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
//                           <h5 className="fw-6">Data-Driven Decision Making</h5>
//                           <p className="ff-2 color-paragraph">Every marketing decision is backed by data and analytics to optimize campaign performance.</p>
//                         </div>
//                       </div>
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
//                     <ul className="list-unstyled ff-2 color-paragraph">
//                       <li className="mb-20">
//                         <strong>📍 Local SEO Optimization:</strong> Improve visibility in local search results and attract customers in your area.
//                       </li>
//                       <li className="mb-20">
//                         <strong>📍 Google Business Profile Management:</strong> Optimize your Google Business Profile for better local search performance.
//                       </li>
//                       <li className="mb-20">
//                         <strong>📍 Local Search Advertising:</strong> Target customers actively searching for products and services in your location.
//                       </li>
//                       <li className="mb-20">
//                         <strong>📍 Reputation Management:</strong> Build and maintain a positive online reputation through effective review management.
//                       </li>
//                       <li className="mb-20">
//                         <strong>📍 Local Content Marketing:</strong> Create content that resonates with local audiences and addresses their specific needs.
//                       </li>
//                     </ul>
//                   </div>

//                   {/* Performance Marketing */}
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
//                     <div className="row g-30">
//                       <div className="col-md-4">
//                         <div className="text-center p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                           <div style={{ fontSize: "32px", marginBottom: "15px" }}>📊</div>
//                           <h5 className="fw-6">Search & Social Advertising</h5>
//                           <p className="ff-2 color-paragraph">Targeted campaigns that drive qualified traffic and conversions.</p>
//                         </div>
//                       </div>
//                       <div className="col-md-4">
//                         <div className="text-center p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                           <div style={{ fontSize: "32px", marginBottom: "15px" }}>🎯</div>
//                           <h5 className="fw-6">Conversion Optimization</h5>
//                           <p className="ff-2 color-paragraph">Landing page testing and optimization to improve conversion rates.</p>
//                         </div>
//                       </div>
//                       <div className="col-md-4">
//                         <div className="text-center p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                           <div style={{ fontSize: "32px", marginBottom: "15px" }}>📈</div>
//                           <h5 className="fw-6">Campaign Analytics</h5>
//                           <p className="ff-2 color-paragraph">Continuous monitoring and optimization to maximize ROI.</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Future-Ready Solutions */}
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
//                     <ul className="list-unstyled ff-2 color-paragraph">
//                       <li className="mb-20">
//                         <strong>🤖 Marketing Automation:</strong> Streamline campaigns and improve efficiency through automation.
//                       </li>
//                       <li className="mb-20">
//                         <strong>🧠 Artificial Intelligence Tools:</strong> Leverage AI for smarter targeting, personalization, and optimization.
//                       </li>
//                       <li className="mb-20">
//                         <strong>📊 Advanced Analytics:</strong> Gain deeper insights into campaign performance and customer behavior.
//                       </li>
//                       <li className="mb-20">
//                         <strong>🚀 Emerging Digital Platforms:</strong> Stay ahead by adopting new platforms and channels as they emerge.
//                       </li>
//                       <li className="mb-20">
//                         <strong>💡 User Experience Improvements:</strong> Continuously enhance user experience to drive better engagement and conversions.
//                       </li>
//                     </ul>
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

import React from "react";
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
  Gauge
} from "lucide-react";
// Import relevant images for the digital marketing service page
import digitalHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg"; // Replace with relevant image
import digitalDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg"; // Replace with relevant image
import digitalDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg"; // Replace with relevant image
import digitalDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg"; // Replace with relevant image

export default function ServiceDetailsDigitalMarketing() {
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

        <div className="page-title style-2">
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
                Leading <br />
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  Digital Marketing Agency
                </span>{" "}
                in Bangalore
              </h1>
              <div className="breadkcum">
                <a href="/">Home</a>
                <span className="icon icon-chevron-right"></span>
                <span className="breadkcum-active">Service Details</span>
              </div>
            </div>
          </div>
        </div>

        <div className="img-page-title d-none d-lg-block">
          <div className="container">
            <div className="image">
              <img
                loading="lazy"
                width="915"
                height="470"
                src={digitalHeroImage}
                alt="Leading Digital Marketing Agency in Bangalore"
              />
            </div>
          </div>
        </div>

        <section className="section-services-detail flat-spacing-9">
          <div className="container">
            <div className="row rg-50">
              <div className="col-lg-4">
                <div className="card-sidebar" style={{
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
                  <h2 className="fw-6 letter-space--3 color-dt-black mb-50">
                    In today's competitive online landscape, businesses need more than just a website to succeed. They need a strategic digital presence that attracts customers, builds trust, and generates measurable results.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Service
                    </span>{" "}
                    is a trusted Digital marketing agency in Bangalore that helps businesses achieve sustainable growth through innovative, data-driven marketing solutions.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70">
                    Our team of experienced marketers, SEO specialists, content strategists, social media experts, and paid advertising professionals work together to deliver exceptional outcomes for businesses across industries. Whether you are a startup looking to establish your online presence, a growing company aiming to generate qualified leads, or an established enterprise seeking to strengthen your digital footprint, Digital Elite Service offers customized solutions designed to meet your goals. As a leading Digital marketing company in Bangalore, we combine creativity, technology, and analytics to create campaigns that deliver real business impact.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Why Businesses Choose{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Service
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Digital marketing has become an essential part of business growth. Customers are searching for products and services online before making purchasing decisions. If your business is not visible where your customers are looking, you risk losing valuable opportunities. Digital Elite Service helps businesses stay ahead of the competition through comprehensive digital marketing strategies tailored to their target audience and industry.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    Our approach focuses on understanding your business objectives, identifying market opportunities, and implementing strategies that generate measurable returns. We believe every business is unique, which is why we create personalized campaigns rather than relying on generic marketing templates. As a trusted Digital marketing agency in Bangalore, our mission is simple: help businesses grow through effective online marketing strategies that increase visibility, drive traffic, generate leads, and improve conversions.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Comprehensive{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Marketing Services
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Digital Elite Service provides a complete range of Digital marketing services in Bangalore designed to help businesses maximize their online potential.
                  </div>

                  {/* Core Services List - Styled as Process Items */}
                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Search Engine Optimization (SEO)
                      </a>
                      <div className="desc ff-2">
                        SEO remains one of the most effective ways to increase online visibility. Our SEO experts use proven strategies to improve search engine rankings and drive organic traffic.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Pay-Per-Click Advertising (PPC)
                      </a>
                      <div className="desc ff-2">
                        Paid advertising provides immediate visibility and lead generation. Our PPC specialists create highly targeted campaigns that maximize ROI.
                      </div>
                    </div>

                    <div className="process-item-2">
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
                  <div className="list-img d-flex g-30 align-items-center mb-70">
                    <div className="image">
                      <img
                        loading="lazy"
                        width="410"
                        height="470"
                        src={digitalDetailImage1}
                        alt="Digital Marketing Strategy Session"
                      />
                    </div>
                    <div className="image">
                      <img
                        loading="lazy"
                        width="410"
                        height="470"
                        src={digitalDetailImage2}
                        alt="Digital Marketing Campaign Results"
                      />
                    </div>
                  </div>

                  {/* Additional Services Section */}
                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30">
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
                  <div className="text ff-2 color-paragraph mb-70">
                    High-quality content plays a critical role in digital marketing success. Our content marketing strategies focus on creating valuable, informative, and engaging content that attracts and converts potential customers. Your website is often the first interaction potential customers have with your business. Digital Elite Service creates modern, responsive, and user-friendly websites designed to deliver exceptional user experiences. Email marketing continues to be one of the most cost-effective digital marketing channels, helping businesses nurture leads, retain customers, and increase revenue.
                  </div>

                  {/* Why Choose Us Section */}
                  <div className="content-detail">
                    <div className="left">
                      <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-50">
                        <span style={{ color: "var(--digital-marketing-light)" }}>Digital Marketing Agency</span> in Bangalore Focused on Results
                      </h4>

                      <div className="desc-1 ff-2 mb-50 color-paragraph">
                        <strong>Customized Marketing Strategies:</strong> We understand that every business has unique goals, challenges, and audiences. Our team develops personalized marketing strategies tailored specifically to your needs.
                      </div>

                      <div className="desc-1 ff-2 mb-50 color-paragraph">
                        <strong>Experienced Professionals:</strong> Our team consists of skilled digital marketers with expertise across multiple disciplines. From SEO and PPC to social media and content marketing, we bring extensive experience to every project.
                      </div>

                      <div className="desc-1 ff-2 mb-50 color-paragraph">
                        <strong>Transparent Communication & Data-Driven Decisions:</strong> We believe strong partnerships are built on trust and transparency. Every marketing decision is backed by data and analytics to maximize results.
                      </div>

                      <div className="desc-2 ff-2 color-paragraph">
                        <strong>Focus on ROI:</strong> Our primary objective is helping businesses achieve measurable returns from their marketing investments. We focus on strategies that contribute directly to business growth.
                      </div>
                    </div>
                    <div className="right image">
                      <img
                        loading="lazy"
                        width="410"
                        height="540"
                        src={digitalDetailImage3}
                        alt="Digital Elite Services Digital Marketing Process"
                      />
                    </div>
                  </div>

                  {/* Industries We Serve */}
                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Industries We{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Serve
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Digital Elite Service has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective solutions.
                    </div>
                    <div className="row g-20" style={{ marginBottom: "20px" }}>
                      <div className="col-md-6">
                        <ul className="list-unstyled ff-2 color-paragraph">
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <Building2 size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Real Estate
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <HeartPulse size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Healthcare
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <GraduationCap size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Education
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <Laptop size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Information Technology
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <ShoppingBag size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            E-commerce
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <Factory size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Manufacturing
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled ff-2 color-paragraph">
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <Wallet size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Finance
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <Hotel size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Hospitality
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <Store size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Retail
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <Scale size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Professional Services
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <HardHat size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Construction
                          </li>
                          <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <Rocket size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            Startups
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text ff-2 color-paragraph">
                      Our industry-specific strategies ensure that marketing campaigns resonate with the right audience and deliver meaningful results.
                    </div>
                  </div>

                  {/* Best Digital Marketing Agency Section with Lucide Icons */}
                  <div className="mt-70">
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
                    <div className="row g-30">
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                            <MapPin size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            <h5 className="fw-6" style={{ marginBottom: 0 }}>Local SEO Optimization</h5>
                          </div>
                          <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                            Improve visibility in local search results and attract customers in your area.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                            <Navigation size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            <h5 className="fw-6" style={{ marginBottom: 0 }}>Google Business Profile Management</h5>
                          </div>
                          <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                            Optimize your Google Business Profile for better local search performance.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                            <BadgeCheck size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            <h5 className="fw-6" style={{ marginBottom: 0 }}>Reputation Management</h5>
                          </div>
                          <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                            Build and maintain a positive online reputation through effective review management.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                            <Megaphone size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            <h5 className="fw-6" style={{ marginBottom: 0 }}>Local Search Advertising</h5>
                          </div>
                          <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                            Target customers actively searching for products and services in your location.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What Makes Digital Elite Service Different */}
                  <div className="mt-70">
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
                    <div className="row g-30">
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px" }}>
                          <h5 className="fw-6">Customized Marketing Strategies</h5>
                          <p className="ff-2 color-paragraph">We develop personalized marketing strategies tailored specifically to your business needs.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px" }}>
                          <h5 className="fw-6">Experienced Professionals</h5>
                          <p className="ff-2 color-paragraph">Our skilled team brings extensive expertise across all digital marketing disciplines.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px" }}>
                          <h5 className="fw-6">Transparent Communication</h5>
                          <p className="ff-2 color-paragraph">Clients receive regular updates, detailed reports, and clear communication throughout.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
                          <h5 className="fw-6">Data-Driven Decision Making</h5>
                          <p className="ff-2 color-paragraph">Every marketing decision is backed by data and analytics to optimize campaign performance.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Marketing That Delivers Results - Updated with Lucide Icons */}
                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Performance Marketing That{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Delivers Results
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Performance marketing focuses on measurable outcomes and accountability. Every campaign is designed to achieve specific objectives while maximizing efficiency.
                    </div>
                    <div className="row g-30">
                      <div className="col-md-4">
                        <div className="text-center p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                          <BarChart3 size={40} style={{ color: "var(--digital-marketing-light)", marginBottom: "15px" }} />
                          <h5 className="fw-6">Search & Social Advertising</h5>
                          <p className="ff-2 color-paragraph">Targeted campaigns that drive qualified traffic and conversions.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                          <Target size={40} style={{ color: "var(--digital-marketing-light)", marginBottom: "15px" }} />
                          <h5 className="fw-6">Conversion Optimization</h5>
                          <p className="ff-2 color-paragraph">Landing page testing and optimization to improve conversion rates.</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                          <TrendingUp size={40} style={{ color: "var(--digital-marketing-light)", marginBottom: "15px" }} />
                          <h5 className="fw-6">Campaign Analytics</h5>
                          <p className="ff-2 color-paragraph">Continuous monitoring and optimization to maximize ROI.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Future-Ready Digital Marketing Solutions - Updated with Lucide Icons */}
                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Future-Ready{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Marketing Solutions
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      The digital landscape continues to evolve rapidly. Businesses must adapt to changing consumer behaviors, emerging technologies, and evolving search engine algorithms. Digital Elite Service stays ahead of industry trends by adopting innovative marketing techniques and leveraging the latest technologies.
                    </div>
                    <div className="row g-30">
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                            <Bot size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            <h5 className="fw-6" style={{ marginBottom: 0 }}>Marketing Automation</h5>
                          </div>
                          <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                            Streamline campaigns and improve efficiency through automation.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                            <Brain size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            <h5 className="fw-6" style={{ marginBottom: 0 }}>Artificial Intelligence Tools</h5>
                          </div>
                          <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                            Leverage AI for smarter targeting, personalization, and optimization.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                            <Database size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            <h5 className="fw-6" style={{ marginBottom: 0 }}>Advanced Analytics</h5>
                          </div>
                          <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                            Gain deeper insights into campaign performance and customer behavior.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                            <Sparkles size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                            <h5 className="fw-6" style={{ marginBottom: 0 }}>Emerging Digital Platforms</h5>
                          </div>
                          <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                            Stay ahead by adopting new platforms and channels as they emerge.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final CTA */}
                  <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
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