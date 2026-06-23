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
//   Palette,
//   PenTool,
//   Image,
//   Layout,
//   Brush,
//   Star,
//   Award,
//   Clock,
//   Users,
//   Target,
//   TrendingUp,
//   Zap,
//   Eye,
//   Heart,
//   Sparkles,
//   CheckCircle,
// } from "lucide-react";
// // Import relevant images for the graphic design service page
// import graphicHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
// import graphicDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
// import graphicDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
// import graphicDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

// export default function ServiceDetailsGraphicDesign() {
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
//                 Stand Out with Professional <br />
//                 <span style={{ color: "var(--digital-marketing-light)" }}>
//                   Graphic Design Services
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
//                 src={graphicHeroImage}
//                 alt="Professional Graphic Design Services in Bangalore"
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
//                         className="category-services-item fw-5 letter-space--2 ff-2"
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
//                         className="category-services-item fw-5 letter-space--2 ff-2 active"
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
//                     Visual identity plays a crucial role in shaping how your
//                     brand is perceived. At Digital Elite Services, we take pride
//                     in being a leading{" "}
//                     <span style={{ color: "var(--digital-marketing-light)" }}>
//                       graphic designing company in Bangalore
//                     </span>
//                     , delivering innovative and impactful design solutions that
//                     help businesses stand out.
//                   </h2>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Whether you are a startup looking to build your brand from
//                     scratch or an established company aiming to refresh your
//                     visual presence, our expert team of designers is here to
//                     bring your ideas to life with creativity and precision. As a
//                     trusted graphic designing company in Bangalore, Digital
//                     Elite Services stands out for its commitment to quality,
//                     creativity, and client satisfaction.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Our{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Professional Graphic Designing Services
//                     </span>{" "}
//                     in Bangalore are crafted to meet the diverse needs of
//                     businesses across industries, helping you create designs
//                     that not only look visually appealing but also communicate
//                     your brand message effectively.
//                   </h3>

//                   {/* Core Services List - Styled as Process Items */}
//                   <div className="list-process-item d-flex justify-content-between mb-70">
//                     <div className="line d-none d-md-block"></div>
//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">01</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Logo Design & Brand Identity
//                       </a>
//                       <div className="desc ff-2">
//                         We design unique and memorable logos that reflect your
//                         business values and create a lasting impression.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">02</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Social Media Creatives
//                       </a>
//                       <div className="desc ff-2">
//                         We design engaging social media posts, banners, and ad
//                         creatives that help you connect with your audience.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">03</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Brochure & Flyer Design
//                       </a>
//                       <div className="desc ff-2">
//                         We create professional marketing materials that
//                         effectively showcase your products and services.
//                       </div>
//                     </div>
//                   </div>

//                   {/* Image Grid - FIXED with proper responsive alignment */}
//                   <div className="row g-4 mb-70">
//                     <div className="col-12 col-md-6">
//                       <div className="image" style={{ height: "100%" }}>
//                         <img
//                           loading="lazy"
//                           src={graphicDetailImage1}
//                           alt="Graphic Design Work Sample 1"
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
//                           src={graphicDetailImage2}
//                           alt="Graphic Design Work Sample 2"
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
//                       graphic designing services
//                     </span>{" "}
//                     include <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Website Graphics, UI Elements
//                     </span>{" "}
//                     and <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Packaging & Stationery Design
//                     </span>
//                     .
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     We design stunning website graphics, banners, icons, and UI
//                     elements that align with your brand identity and improve
//                     usability. Our packaging design focuses on both aesthetics
//                     and functionality, while our elegant business cards and
//                     letterheads reflect professionalism and strengthen your
//                     brand image.
//                   </div>

//                   {/* Why Choose Us Section - Updated with proper responsive grid */}
//                   <div className="row align-items-center g-4 mb-70">
//                     <div className="col-12 col-lg-7">
//                       <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-4">
//                         Why Choose <span style={{ color: "var(--digital-marketing-light)" }}>
//                           Digital Elite Services
//                         </span> for Graphic Design?
//                       </h4>

//                       <div className="desc-1 ff-2 mb-4 color-paragraph">
//                         <strong>Creative Excellence:</strong> Our team of
//                         experienced designers brings fresh ideas and innovative
//                         concepts to every project.
//                       </div>

//                       <div className="desc-1 ff-2 mb-4 color-paragraph">
//                         <strong>Customized Solutions:</strong> We offer
//                         tailored design solutions that match your specific goals
//                         and requirements.
//                       </div>

//                       <div className="desc-1 ff-2 mb-4 color-paragraph">
//                         <strong>Affordable Pricing & Quick Turnaround:</strong>{" "}
//                         High-quality design doesn't have to be expensive. We
//                         value your time and ensure timely delivery of projects.
//                       </div>

//                       <div className="desc-2 ff-2 color-paragraph">
//                         <strong>Client-Centric Approach:</strong> Your
//                         satisfaction is our priority. We work closely with you
//                         throughout the design process to ensure the final output
//                         meets your expectations.
//                       </div>
//                     </div>

//                     <div className="col-12 col-lg-5">
//                       <div className="image">
//                         <img
//                           loading="lazy"
//                           src={graphicDetailImage3}
//                           alt="Digital Elite Services Graphic Design Process"
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

//                   {/* Our Design Process - With Icons */}
//                   <div className="mt-70">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       Our <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Structured Design Process
//                       </span>
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       At Digital Elite Services, we follow a structured and
//                       collaborative design process to deliver exceptional
//                       results.
//                     </div>

//                     <div className="row g-4">
//                       {[
//                         {
//                           icon: <Target size={24} />,
//                           title: "Understanding Your Requirements",
//                           desc: "We begin by understanding your business, target audience, and design preferences."
//                         },
//                         {
//                           icon: <Eye size={24} />,
//                           title: "Research & Concept Development",
//                           desc: "Our team conducts research and develops creative concepts tailored to your brand."
//                         },
//                         {
//                           icon: <Brush size={24} />,
//                           title: "Design Creation",
//                           desc: "We create visually stunning designs using the latest tools and techniques."
//                         },
//                         {
//                           icon: <Star size={24} />,
//                           title: "Feedback & Revisions",
//                           desc: "Your feedback is crucial. We refine the designs based on your inputs to achieve perfection."
//                         },
//                         {
//                           icon: <CheckCircle size={24} />,
//                           title: "Final Delivery",
//                           desc: "Once approved, we deliver high-quality files ready for use across all platforms."
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

//                   {/* What Makes Us Different */}
//                   <div className="mt-70">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       What Makes{" "}
//                       <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Digital Elite Services
//                       </span>{" "}
//                       Different
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       Choosing the right graphic design company in Bangalore can significantly impact your brand image. Digital Elite Services stands out because of our commitment to excellence, creativity, and client success.
//                     </div>
                    
//                     <div className="row g-4">
//                       {[
//                         {
//                           icon: <Palette size={24} />,
//                           title: "Creative Excellence",
//                           desc: "Our designers bring fresh ideas and innovative concepts to every project."
//                         },
//                         {
//                           icon: <PenTool size={24} />,
//                           title: "Customized Solutions",
//                           desc: "We offer tailored design solutions that match your specific goals and requirements."
//                         },
//                         {
//                           icon: <Clock size={24} />,
//                           title: "Quick Turnaround",
//                           desc: "We value your time and ensure timely delivery of all projects."
//                         },
//                         {
//                           icon: <Users size={24} />,
//                           title: "Client-Centric Approach",
//                           desc: "Your satisfaction is our priority throughout the design process."
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

//                   {/* Industries We Serve */}
//                   <div className="mt-70">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       Industries We{" "}
//                       <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Serve
//                       </span>
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       Digital Elite Services has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective design solutions.
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
//                       Our industry-specific design strategies ensure that your brand visuals resonate with the right audience and deliver meaningful results.
//                     </div>
//                   </div>

//                   {/* Final CTA */}
//                   <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
//                     <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
//                       Elevate Your Brand with <span style={{color:"var(--digital-marketing-light)"}}>Digital Elite Services</span>
//                     </h4>
//                     <p className="ff-2 color-paragraph mb-30">
//                       If you are looking for reliable and creative{" "}
//                       <strong>graphic designing services in Bangalore</strong>,
//                       Digital Elite Services is your go-to partner. Our
//                       expertise, creativity, and dedication make us the perfect
//                       choice for all your design needs. Let us help you create
//                       visually stunning designs that leave a lasting impression
//                       and drive your business forward.
//                     </p>
//                     <p className="ff-2 color-paragraph">
//                       <strong>
//                         Ready to transform your brand with professional design?
//                       </strong>{" "}
//                       Contact Digital Elite Services today and take the first
//                       step towards building a powerful visual identity.
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

// import React, { useEffect } from "react";
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
//   Palette,
//   PenTool,
//   Image,
//   Layout,
//   Brush,
//   Star,
//   Award,
//   Clock,
//   Users,
//   Target,
//   TrendingUp,
//   Zap,
//   Eye,
//   Heart,
//   Sparkles,
//   CheckCircle,
//   ArrowUpRight,
// } from "lucide-react";
// // Import relevant images for the graphic design service page
// import graphicHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
// import graphicDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
// import graphicDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
// import graphicDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

// export default function ServiceDetailsGraphicDesign() {
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

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     // ============================================
//     // 1. FADE IN UP ANIMATION
//     // ============================================
//     const fadeElements = document.querySelectorAll('.fade-in-up');
//     const fadeObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     fadeElements.forEach(el => fadeObserver.observe(el));

//     // ============================================
//     // 2. SLIDE IN LEFT ANIMATION
//     // ============================================
//     const slideLeftElements = document.querySelectorAll('.slide-in-left');
//     const slideLeftObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     slideLeftElements.forEach(el => slideLeftObserver.observe(el));

//     // ============================================
//     // 3. SLIDE IN RIGHT ANIMATION
//     // ============================================
//     const slideRightElements = document.querySelectorAll('.slide-in-right');
//     const slideRightObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     slideRightElements.forEach(el => slideRightObserver.observe(el));

//     // ============================================
//     // 4. SCALE IN ANIMATION
//     // ============================================
//     const scaleElements = document.querySelectorAll('.scale-in');
//     const scaleObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     scaleElements.forEach(el => scaleObserver.observe(el));

//     // ============================================
//     // 5. ROTATE IN ANIMATION
//     // ============================================
//     const rotateElements = document.querySelectorAll('.rotate-in');
//     const rotateObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     rotateElements.forEach(el => rotateObserver.observe(el));

//     // ============================================
//     // 6. FLIP IN ANIMATION
//     // ============================================
//     const flipElements = document.querySelectorAll('.flip-in');
//     const flipObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     flipElements.forEach(el => flipObserver.observe(el));

//     // ============================================
//     // 7. ZOOM IN ANIMATION
//     // ============================================
//     const zoomElements = document.querySelectorAll('.zoom-in');
//     const zoomObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     zoomElements.forEach(el => zoomObserver.observe(el));

//     // ============================================
//     // 8. BOUNCE IN ANIMATION
//     // ============================================
//     const bounceElements = document.querySelectorAll('.bounce-in');
//     const bounceObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     bounceElements.forEach(el => bounceObserver.observe(el));

//     // ============================================
//     // 9. BLUR IN ANIMATION
//     // ============================================
//     const blurElements = document.querySelectorAll('.blur-in');
//     const blurObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     blurElements.forEach(el => blurObserver.observe(el));

//     // ============================================
//     // 10. GLOW IN ANIMATION
//     // ============================================
//     const glowElements = document.querySelectorAll('.glow-in');
//     const glowObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
//           setTimeout(() => {
//             entry.target.classList.add('visible');
//           }, delay);
//         }
//       });
//     }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
//     glowElements.forEach(el => glowObserver.observe(el));

//     // ============================================
//     // ODOMETER / COUNTER ANIMATION
//     // ============================================
//     const odometers = document.querySelectorAll('.odometer');
//     odometers.forEach(odometer => {
//       const target = parseFloat(odometer.getAttribute('data-to'));
//       const inViewport = odometer.getAttribute('data-inviewport') === 'yes';
      
//       const animateNumber = (el, target, duration = 2000) => {
//         let start = 0;
//         const isDecimal = target % 1 !== 0;
//         const increment = target / (duration / 16);
//         const timer = setInterval(() => {
//           start += increment;
//           if (start >= target) {
//             el.textContent = isDecimal ? target.toFixed(1) : Math.floor(target);
//             clearInterval(timer);
//           } else {
//             el.textContent = isDecimal ? start.toFixed(1) : Math.floor(start);
//           }
//         }, 16);
//       };

//       if (inViewport) {
//         const obs = new IntersectionObserver((entries) => {
//           entries.forEach(entry => {
//             if (entry.isIntersecting) {
//               animateNumber(odometer, target);
//               obs.unobserve(entry.target);
//             }
//           });
//         }, { threshold: 0.5 });
//         obs.observe(odometer);
//       } else {
//         animateNumber(odometer, target);
//       }
//     });

//     // ============================================
//     // PARALLAX EFFECT ON HERO IMAGE
//     // ============================================
//     const heroImage = document.querySelector('.hero-image-wrapper');
//     if (heroImage) {
//       const handleScroll = () => {
//         const scrolled = window.pageYOffset;
//         heroImage.style.transform = `translateY(${scrolled * 0.05}px)`;
//       };
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }

//     // ============================================
//     // TYPING EFFECT ON SUBTITLE
//     // ============================================
//     const typingElement = document.querySelector('.typing-effect');
//     if (typingElement) {
//       const text = typingElement.textContent;
//       typingElement.textContent = '';
//       let charIndex = 0;
//       const typeInterval = setInterval(() => {
//         if (charIndex < text.length) {
//           typingElement.textContent += text.charAt(charIndex);
//           charIndex++;
//         } else {
//           clearInterval(typeInterval);
//         }
//       }, 50);
//     }

//     return () => {
//       fadeObserver.disconnect();
//       slideLeftObserver.disconnect();
//       slideRightObserver.disconnect();
//       scaleObserver.disconnect();
//       rotateObserver.disconnect();
//       flipObserver.disconnect();
//       zoomObserver.disconnect();
//       bounceObserver.disconnect();
//       blurObserver.disconnect();
//       glowObserver.disconnect();
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         /* ============================================
//            ANIMATION 1: FADE IN UP
//            ============================================ */
//         .fade-in-up {
//           opacity: 0;
//           transform: translateY(50px);
//           transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }
//         .fade-in-up.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* ============================================
//            ANIMATION 2: SLIDE IN LEFT
//            ============================================ */
//         .slide-in-left {
//           opacity: 0;
//           transform: translateX(-80px);
//           transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }
//         .slide-in-left.visible {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         /* ============================================
//            ANIMATION 3: SLIDE IN RIGHT
//            ============================================ */
//         .slide-in-right {
//           opacity: 0;
//           transform: translateX(80px);
//           transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }
//         .slide-in-right.visible {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         /* ============================================
//            ANIMATION 4: SCALE IN
//            ============================================ */
//         .scale-in {
//           opacity: 0;
//           transform: scale(0.6);
//           transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
//         .scale-in.visible {
//           opacity: 1;
//           transform: scale(1);
//         }

//         /* ============================================
//            ANIMATION 5: ROTATE IN
//            ============================================ */
//         .rotate-in {
//           opacity: 0;
//           transform: rotate(-15deg) scale(0.8);
//           transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
//         .rotate-in.visible {
//           opacity: 1;
//           transform: rotate(0deg) scale(1);
//         }

//         /* ============================================
//            ANIMATION 6: FLIP IN
//            ============================================ */
//         .flip-in {
//           opacity: 0;
//           transform: perspective(600px) rotateY(90deg);
//           transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
//         .flip-in.visible {
//           opacity: 1;
//           transform: perspective(600px) rotateY(0deg);
//         }

//         /* ============================================
//            ANIMATION 7: ZOOM IN
//            ============================================ */
//         .zoom-in {
//           opacity: 0;
//           transform: scale(0.3);
//           transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
//         .zoom-in.visible {
//           opacity: 1;
//           transform: scale(1);
//         }

//         /* ============================================
//            ANIMATION 8: BOUNCE IN
//            ============================================ */
//         .bounce-in {
//           opacity: 0;
//           transform: translateY(100px);
//           transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//         }
//         .bounce-in.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* ============================================
//            ANIMATION 9: BLUR IN
//            ============================================ */
//         .blur-in {
//           opacity: 0;
//           filter: blur(20px);
//           transform: scale(1.1);
//           transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }
//         .blur-in.visible {
//           opacity: 1;
//           filter: blur(0px);
//           transform: scale(1);
//         }

//         /* ============================================
//            ANIMATION 10: GLOW IN
//            ============================================ */
//         .glow-in {
//           opacity: 0;
//           box-shadow: 0 0 40px rgba(0,0,0,0);
//           transform: scale(0.95);
//           transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }
//         .glow-in.visible {
//           opacity: 1;
//           box-shadow: 0 0 60px rgba(var(--digital-marketing-light-rgb), 0.15);
//           transform: scale(1);
//         }

//         /* ============================================
//            HERO SECTION STYLES
//            ============================================ */
//         .hero-section .hero-left {
//           display: flex;
//           flex-direction: column;
//           gap: 30px;
//           padding: 40px 0;
//         }

//         .hero-section .hero-content {
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//         }

//         .hero-section .hero-content .sub-title {
//           font-size: 18px;
//           letter-spacing: 2px;
//           opacity: 0.8;
//         }

//         .hero-section .hero-content .sub-title .color-dt-light {
//           color: var(--digital-marketing-light);
//         }

//         .hero-section .hero-content .title {
//           font-size: 56px;
//           line-height: 1.1;
//         }

//         @media (max-width: 768px) {
//           .hero-section .hero-content .title {
//             font-size: 36px;
//           }
//         }

//         .hero-section .hero-content .desc {
//           font-size: 20px;
//           line-height: 1.6;
//           max-width: 600px;
//           color: #666;
//         }

//         .hero-section .stats {
//           display: flex;
//           gap: 60px;
//           margin-top: 20px;
//           padding-top: 30px;
//           border-top: 1px solid rgba(0,0,0,0.08);
//         }

//         @media (max-width: 576px) {
//           .hero-section .stats {
//             gap: 30px;
//             flex-wrap: wrap;
//           }
//         }

//         .hero-section .counter-item .counter {
//           display: flex;
//           align-items: center;
//         }

//         .hero-section .counter-item .number-counter {
//           display: flex;
//           align-items: baseline;
//         }

//         .hero-section .counter-item .odometer {
//           font-size: 48px;
//           font-weight: 700;
//           color: var(--digital-marketing-light);
//         }

//         .hero-section .counter-item .h5 {
//           font-size: 16px;
//           color: #666;
//           margin-top: 5px;
//         }

//         /* ============================================
//            BUTTON STYLE WITH PULSE ANIMATION
//            ============================================ */
//         .hero-section .tf-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           padding: 16px 40px;
//           background: var(--digital-marketing-light);
//           color: #fff;
//           border-radius: 50px;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           width: fit-content;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//         }

//         .hero-section .tf-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
//           transition: left 0.5s ease;
//         }

//         .hero-section .tf-btn:hover::before {
//           left: 100%;
//         }

//         .hero-section .tf-btn:hover {
//           transform: translateY(-3px) scale(1.02);
//           box-shadow: 0 10px 30px rgba(0,0,0,0.15);
//           background: var(--digital-marketing-light);
//           opacity: 0.9;
//         }

//         .hero-section .tf-btn .icon-btn {
//           display: flex;
//           align-items: center;
//           transition: transform 0.3s ease;
//         }

//         .hero-section .tf-btn:hover .icon-btn {
//           transform: rotate(45deg) scale(1.2);
//         }

//         /* ============================================
//            STAT ITEM ANIMATION
//            ============================================ */
//         .stat-item {
//           opacity: 0;
//           transform: translateY(30px) scale(0.9);
//           transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }

//         .stat-item.stat-visible {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }

//         /* ============================================
//            PARALLAX EFFECT
//            ============================================ */
//         .hero-image-wrapper {
//           transition: transform 0.1s ease-out;
//           will-change: transform;
//         }

//         /* ============================================
//            CARD HOVER EFFECTS
//            ============================================ */
//         .process-item-2 {
//           transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//           cursor: default;
//         }

//         .process-item-2:hover {
//           transform: translateY(-8px) scale(1.02);
//           box-shadow: 0 15px 40px rgba(0,0,0,0.08);
//         }

//         .p-30 {
//           transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }

//         .p-30:hover {
//           transform: translateY(-8px) scale(1.02);
//           box-shadow: 0 15px 50px rgba(0,0,0,0.1);
//         }

//         /* ============================================
//            IMAGE HOVER ZOOM EFFECT
//            ============================================ */
//         .image {
//           overflow: hidden;
//           border-radius: 8px;
//           position: relative;
//         }

//         .image::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(135deg, rgba(var(--digital-marketing-light-rgb), 0.1), transparent);
//           opacity: 0;
//           transition: opacity 0.4s ease;
//         }

//         .image:hover::after {
//           opacity: 1;
//         }

//         .image img {
//           transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }

//         .image:hover img {
//           transform: scale(1.08) rotate(-1deg);
//         }

//         /* ============================================
//            LIST ITEM HOVER EFFECT
//            ============================================ */
//         .d-flex.flex-wrap > div {
//           transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
//           padding: 8px 12px;
//           border-radius: 8px;
//           cursor: default;
//         }

//         .d-flex.flex-wrap > div:hover {
//           background: rgba(var(--digital-marketing-light-rgb), 0.05);
//           transform: translateX(8px) scale(1.02);
//           box-shadow: 0 5px 20px rgba(0,0,0,0.05);
//         }

//         /* ============================================
//            CTA BOX ANIMATION
//            ============================================ */
//         .p-40 {
//           transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
//           position: relative;
//           overflow: hidden;
//         }

//         .p-40::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle, rgba(var(--digital-marketing-light-rgb), 0.03), transparent 70%);
//           opacity: 0;
//           transition: opacity 0.6s ease;
//         }

//         .p-40:hover::before {
//           opacity: 1;
//         }

//         .p-40:hover {
//           transform: scale(1.02);
//           box-shadow: 0 20px 60px rgba(0,0,0,0.08);
//         }

//         /* ============================================
//            SIDEBAR CATEGORY ITEMS
//            ============================================ */
//         .category-services-item {
//           transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//           display: block;
//           padding: 10px 0;
//           position: relative;
//           cursor: pointer;
//         }

//         .category-services-item::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0;
//           height: 3px;
//           background: var(--digital-marketing-blue);
//           transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//           border-radius: 2px;
//         }

//         .category-services-item:hover::after,
//         .category-services-item.active::after {
//           width: 100%;
//         }

//         .category-services-item:hover {
//           transform: translateX(8px);
//           color: var(--digital-marketing-blue);
//         }

//         .category-services-item.active {
//           color: var(--digital-marketing-blue);
//           font-weight: 600;
//         }

//         /* ============================================
//            GRID CARDS STAGGERED ANIMATION
//            ============================================ */
//         .row.g-4 > .d-flex {
//           transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }

//         .row.g-4 > .d-flex:hover {
//           transform: translateY(-8px) scale(1.02);
//           box-shadow: 0 15px 40px rgba(0,0,0,0.08);
//         }

//         /* ============================================
//            TYPING EFFECT
//            ============================================ */
//         .typing-effect {
//           display: inline-block;
//           border-right: 3px solid var(--digital-marketing-light);
//           padding-right: 5px;
//           animation: blink 0.8s step-end infinite;
//         }

//         @keyframes blink {
//           0%, 100% { border-color: var(--digital-marketing-light); }
//           50% { border-color: transparent; }
//         }

//         /* ============================================
//            SCROLLBAR STYLES
//            ============================================ */
//         ::-webkit-scrollbar {
//           width: 10px;
//         }

//         ::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 5px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: var(--digital-marketing-light);
//           border-radius: 5px;
//           transition: background 0.3s ease;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: #555;
//         }

//         /* ============================================
//            RESPONSIVE ADJUSTMENTS
//            ============================================ */
//         @media (max-width: 992px) {
//           .hero-section .hero-content .title {
//             font-size: 42px;
//           }
          
//           .hero-section .hero-content .desc {
//             font-size: 18px;
//           }
//         }

//         @media (max-width: 768px) {
//           .hero-section .hero-left {
//             padding: 20px 0;
//           }
          
//           .hero-section .hero-content .title {
//             font-size: 32px;
//           }
          
//           .hero-section .hero-content .desc {
//             font-size: 16px;
//           }
          
//           .hero-section .counter-item .odometer {
//             font-size: 36px;
//           }
          
//           .hero-section .tf-btn {
//             padding: 14px 30px;
//             font-size: 14px;
//           }
          
//           .p-30 {
//             padding: 20px !important;
//           }
//         }

//         @media (max-width: 576px) {
//           .hero-section .hero-content .title {
//             font-size: 28px;
//           }
          
//           .hero-section .stats {
//             flex-direction: column;
//             gap: 15px;
//           }
          
//           .hero-section .counter-item .odometer {
//             font-size: 30px;
//           }
//         }

//         /* ============================================
//            LOADING ANIMATION
//            ============================================ */
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .page-title .hero-content {
//           animation: fadeInUp 0.8s ease forwards;
//         }

//         .section-services-detail {
//           animation: fadeInUp 0.6s ease forwards;
//           animation-delay: 0.2s;
//           opacity: 0;
//         }
//       `}</style>

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

//         {/* Hero Section with Animations */}
//         <div className="page-title style-2 hero-section">
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
//             <div className="hero-left">
//               <div className="hero-content">
//                 <div className="sub-title h6 letter-space--2 fw-5 fade-in-up" data-delay="100">
//                   Built for creativity.{" "}
//                   <span className="color-dt-light typing-effect">Powered by design.</span>
//                 </div>
//                 <h1 className="title letter-space--3 fw-6 slide-in-left" data-delay="200">
//                   Stand Out with Professional
//                   <br />
//                   <span style={{ color: "var(--digital-marketing-light)" }}>
//                     Graphic Design
//                   </span>
//                   <br />
//                   Services
//                 </h1>
//                 <div className="desc h5 lh-35 ff-2 fw-5 fade-in-up" data-delay="300">
//                   From logos and branding to social media creatives and marketing materials, we create designs that capture attention and communicate your brand story.
//                 </div>
//                 <a
//                   href="/about-us"
//                   className="tf-btn style-big style-color-dt-light fade-in-up"
//                   data-delay="400"
//                 >
//                   <span className="text-btn">Learn more</span>
//                   <span className="icon-btn">
//                     <ArrowUpRight size={20} />
//                   </span>
//                 </a>
//               </div>
//               <div className="stats">
//                 <div className="counter-item stat stat-item">
//                   <div className="counter">
//                     <div className="number-counter flex fs-65">
//                       <span
//                         className="number odometer color-primary h1 fw-6"
//                         data-to="500"
//                         data-inviewport="yes"
//                       >
//                         0
//                       </span>
//                       <span className="h1">+</span>
//                     </div>
//                   </div>
//                   <div className="h5 ff-2 fw-6 lh-35">
//                     Design projects
//                     <br />
//                     delivered
//                   </div>
//                 </div>
//                 <div className="counter-item stat stat-item">
//                   <div className="counter">
//                     <div className="number-counter flex fs-65">
//                       <span
//                         className="number odometer color-primary h1 fw-6"
//                         data-to="4.8"
//                         data-inviewport="yes"
//                       >
//                         0
//                       </span>
//                     </div>
//                   </div>
//                   <div className="h5 ff-2 fw-6 lh-35">
//                     Based on clients
//                     <br />
//                     reviews (500+)
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Hero Image - with parallax effect */}
//         <div className="img-page-title d-none d-lg-block hero-image-wrapper">
//           <div className="container">
//             <div className="image zoom-in" data-delay="100">
//               <img
//                 loading="lazy"
//                 width="915"
//                 height="470"
//                 src={graphicHeroImage}
//                 alt="Professional Graphic Design Services in Bangalore"
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
//                 <div className="card-sidebar slide-in-left" data-delay="100" style={{
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
//                         className="category-services-item fw-5 letter-space--2 ff-2"
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
//                         className="category-services-item fw-5 letter-space--2 ff-2 active"
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
//                   <h2 className="fw-6 letter-space--3 color-dt-black mb-50 fade-in-up" data-delay="100">
//                     Visual identity plays a crucial role in shaping how your
//                     brand is perceived. At Digital Elite Services, we take pride
//                     in being a leading{" "}
//                     <span style={{ color: "var(--digital-marketing-light)" }}>
//                       graphic designing company in Bangalore
//                     </span>
//                     , delivering innovative and impactful design solutions that
//                     help businesses stand out.
//                   </h2>
//                   <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="200">
//                     Whether you are a startup looking to build your brand from
//                     scratch or an established company aiming to refresh your
//                     visual presence, our expert team of designers is here to
//                     bring your ideas to life with creativity and precision. As a
//                     trusted graphic designing company in Bangalore, Digital
//                     Elite Services stands out for its commitment to quality,
//                     creativity, and client satisfaction.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black scale-in" data-delay="100">
//                     Our{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Professional Graphic Designing Services
//                     </span>{" "}
//                     in Bangalore are crafted to meet the diverse needs of
//                     businesses across industries, helping you create designs
//                     that not only look visually appealing but also communicate
//                     your brand message effectively.
//                   </h3>

//                   {/* Core Services List - Styled as Process Items */}
//                   <div className="list-process-item d-flex justify-content-between mb-70">
//                     <div className="line d-none d-md-block"></div>
//                     <div className="process-item-2 flip-in" data-delay="100">
//                       <div className="number ff-2 fw-5 letter-space--2">01</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Logo Design & Brand Identity
//                       </a>
//                       <div className="desc ff-2">
//                         We design unique and memorable logos that reflect your
//                         business values and create a lasting impression.
//                       </div>
//                     </div>

//                     <div className="process-item-2 flip-in" data-delay="200">
//                       <div className="number ff-2 fw-5 letter-space--2">02</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Social Media Creatives
//                       </a>
//                       <div className="desc ff-2">
//                         We design engaging social media posts, banners, and ad
//                         creatives that help you connect with your audience.
//                       </div>
//                     </div>

//                     <div className="process-item-2 flip-in" data-delay="300">
//                       <div className="number ff-2 fw-5 letter-space--2">03</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Brochure & Flyer Design
//                       </a>
//                       <div className="desc ff-2">
//                         We create professional marketing materials that
//                         effectively showcase your products and services.
//                       </div>
//                     </div>
//                   </div>

//                   {/* Image Grid */}
//                   <div className="row g-4 mb-70">
//                     <div className="col-12 col-md-6 zoom-in" data-delay="100">
//                       <div className="image" style={{ height: "100%" }}>
//                         <img
//                           loading="lazy"
//                           src={graphicDetailImage1}
//                           alt="Graphic Design Work Sample 1"
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
//                     <div className="col-12 col-md-6 zoom-in" data-delay="200">
//                       <div className="image" style={{ height: "100%" }}>
//                         <img
//                           loading="lazy"
//                           src={graphicDetailImage2}
//                           alt="Graphic Design Work Sample 2"
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
//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30 blur-in" data-delay="100">
//                     More of our{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       graphic designing services
//                     </span>{" "}
//                     include <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Website Graphics, UI Elements
//                     </span>{" "}
//                     and <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Packaging & Stationery Design
//                     </span>
//                     .
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-70 fade-in-up" data-delay="200">
//                     We design stunning website graphics, banners, icons, and UI
//                     elements that align with your brand identity and improve
//                     usability. Our packaging design focuses on both aesthetics
//                     and functionality, while our elegant business cards and
//                     letterheads reflect professionalism and strengthen your
//                     brand image.
//                   </div>

//                   {/* Why Choose Us Section */}
//                   <div className="row align-items-center g-4 mb-70">
//                     <div className="col-12 col-lg-7">
//                       <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-4 slide-in-left" data-delay="100">
//                         Why Choose <span style={{ color: "var(--digital-marketing-light)" }}>
//                           Digital Elite Services
//                         </span> for Graphic Design?
//                       </h4>

//                       <div className="desc-1 ff-2 mb-4 color-paragraph fade-in-up" data-delay="150">
//                         <strong>Creative Excellence:</strong> Our team of
//                         experienced designers brings fresh ideas and innovative
//                         concepts to every project.
//                       </div>

//                       <div className="desc-1 ff-2 mb-4 color-paragraph slide-in-right" data-delay="200">
//                         <strong>Customized Solutions:</strong> We offer
//                         tailored design solutions that match your specific goals
//                         and requirements.
//                       </div>

//                       <div className="desc-1 ff-2 mb-4 color-paragraph fade-in-up" data-delay="250">
//                         <strong>Affordable Pricing & Quick Turnaround:</strong>{" "}
//                         High-quality design doesn't have to be expensive. We
//                         value your time and ensure timely delivery of projects.
//                       </div>

//                       <div className="desc-2 ff-2 color-paragraph slide-in-left" data-delay="300">
//                         <strong>Client-Centric Approach:</strong> Your
//                         satisfaction is our priority. We work closely with you
//                         throughout the design process to ensure the final output
//                         meets your expectations.
//                       </div>
//                     </div>

//                     <div className="col-12 col-lg-5 rotate-in" data-delay="100">
//                       <div className="image">
//                         <img
//                           loading="lazy"
//                           src={graphicDetailImage3}
//                           alt="Digital Elite Services Graphic Design Process"
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

//                   {/* Our Design Process - With Icons */}
//                   <div className="mt-70 glow-in" data-delay="100">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       Our <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Structured Design Process
//                       </span>
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40 fade-in-up">
//                       At Digital Elite Services, we follow a structured and
//                       collaborative design process to deliver exceptional
//                       results.
//                     </div>

//                     <div className="row g-4">
//                       {[
//                         {
//                           icon: <Target size={24} />,
//                           title: "Understanding Your Requirements",
//                           desc: "We begin by understanding your business, target audience, and design preferences."
//                         },
//                         {
//                           icon: <Eye size={24} />,
//                           title: "Research & Concept Development",
//                           desc: "Our team conducts research and develops creative concepts tailored to your brand."
//                         },
//                         {
//                           icon: <Brush size={24} />,
//                           title: "Design Creation",
//                           desc: "We create visually stunning designs using the latest tools and techniques."
//                         },
//                         {
//                           icon: <Star size={24} />,
//                           title: "Feedback & Revisions",
//                           desc: "Your feedback is crucial. We refine the designs based on your inputs to achieve perfection."
//                         },
//                         {
//                           icon: <CheckCircle size={24} />,
//                           title: "Final Delivery",
//                           desc: "Once approved, we deliver high-quality files ready for use across all platforms."
//                         }
//                       ].map((item, index) => (
//                         <div key={index} className="col-12 col-md-6 d-flex bounce-in" data-delay={100 + index * 100}>
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

//                   {/* What Makes Us Different */}
//                   <div className="mt-70 slide-in-right" data-delay="100">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       What Makes{" "}
//                       <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Digital Elite Services
//                       </span>{" "}
//                       Different
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       Choosing the right graphic design company in Bangalore can significantly impact your brand image. Digital Elite Services stands out because of our commitment to excellence, creativity, and client success.
//                     </div>
                    
//                     <div className="row g-4">
//                       {[
//                         {
//                           icon: <Palette size={24} />,
//                           title: "Creative Excellence",
//                           desc: "Our designers bring fresh ideas and innovative concepts to every project."
//                         },
//                         {
//                           icon: <PenTool size={24} />,
//                           title: "Customized Solutions",
//                           desc: "We offer tailored design solutions that match your specific goals and requirements."
//                         },
//                         {
//                           icon: <Clock size={24} />,
//                           title: "Quick Turnaround",
//                           desc: "We value your time and ensure timely delivery of all projects."
//                         },
//                         {
//                           icon: <Users size={24} />,
//                           title: "Client-Centric Approach",
//                           desc: "Your satisfaction is our priority throughout the design process."
//                         }
//                       ].map((item, index) => (
//                         <div key={index} className="col-12 col-md-6 d-flex flip-in" data-delay={100 + index * 100}>
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

//                   {/* Industries We Serve */}
//                   <div className="mt-70 fade-in-up" data-delay="100">
//                     <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
//                       Industries We{" "}
//                       <span style={{ color: "var(--digital-marketing-blue)" }}>
//                         Serve
//                       </span>
//                     </h3>
//                     <div className="text ff-2 color-paragraph mb-40">
//                       Digital Elite Services has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective design solutions.
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
//                           className="ff-2 color-paragraph bounce-in"
//                           data-delay={100 + index * 50}
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
//                       Our industry-specific design strategies ensure that your brand visuals resonate with the right audience and deliver meaningful results.
//                     </div>
//                   </div>

//                   {/* Final CTA */}
//                   <div className="mt-70 p-40 glow-in" data-delay="100" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
//                     <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
//                       Elevate Your Brand with <span style={{color:"var(--digital-marketing-light)"}}>Digital Elite Services</span>
//                     </h4>
//                     <p className="ff-2 color-paragraph mb-30">
//                       If you are looking for reliable and creative{" "}
//                       <strong>graphic designing services in Bangalore</strong>,
//                       Digital Elite Services is your go-to partner. Our
//                       expertise, creativity, and dedication make us the perfect
//                       choice for all your design needs. Let us help you create
//                       visually stunning designs that leave a lasting impression
//                       and drive your business forward.
//                     </p>
//                     <p className="ff-2 color-paragraph">
//                       <strong>
//                         Ready to transform your brand with professional design?
//                       </strong>{" "}
//                       Contact Digital Elite Services today and take the first
//                       step towards building a powerful visual identity.
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
  Palette,
  PenTool,
  Image,
  Layout,
  Brush,
  Star,
  Award,
  Clock,
  Users,
  Target,
  TrendingUp,
  Zap,
  Eye,
  Heart,
  Sparkles,
  CheckCircle,
  MapPin,
  Navigation,
  BadgeCheck,
  Megaphone,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
// Import relevant images for the graphic design service page
import graphicHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
import graphicDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
import graphicDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
import graphicDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

export default function ServiceDetailsGraphicDesign() {
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
           CARD HOVER EFFECTS - NO SHADOW
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
           CTA BOX ANIMATION - NO SHADOW
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
          text-decoration: none;
          color: inherit;
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
                  {/* <span className="typing-effect">Creative Graphic Design Services</span> */}
                </div>
                <h1 className="title letter-space--3 fw-6 slide-in-left" data-delay="200">
                  Stand Out with
                  <br />
                  <span style={{ color: "var(--digital-marketing-light)" }}>
                    Professional Design
                  </span>
                  <br />
                  That Captivates
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
                    Client Satisfaction
                    <br />
                    Rate
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
                    Based on Client
                    <br />
                    Reviews (500+)
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
                src={graphicHeroImage}
                alt="Professional Graphic Design Services in Bangalore"
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
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>
                      <a
                        href="/services/Digital-marketing-agency-in-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
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
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
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
                    Visual identity plays a crucial role in shaping how your brand is perceived. At Digital Elite Services, we take pride in being a leading{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      graphic designing company in Bangalore
                    </span>
                    , delivering innovative and impactful design solutions that help businesses stand out.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="200">
                    Whether you are a startup looking to build your brand from scratch or an established company aiming to refresh your visual presence, our expert team of designers is here to bring your ideas to life with creativity and precision. As a trusted graphic designing company in Bangalore, Digital Elite Services stands out for its commitment to quality, creativity, and client satisfaction.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black scale-in" data-delay="100">
                    Our{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Professional Graphic Designing Services
                    </span>{" "}
                    in Bangalore are crafted to meet the diverse needs of businesses across industries, helping you create designs that not only look visually appealing but also communicate your brand message effectively.
                  </h3>

                  {/* Core Services List - Styled as Process Items */}
                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2 flip-in" data-delay="100">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Logo Design & Brand Identity
                      </a>
                      <div className="desc ff-2">
                        We design unique and memorable logos that reflect your business values and create a lasting impression.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="200">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Social Media Creatives
                      </a>
                      <div className="desc ff-2">
                        We design engaging social media posts, banners, and ad creatives that help you connect with your audience.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="300">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Brochure & Flyer Design
                      </a>
                      <div className="desc ff-2">
                        We create professional marketing materials that effectively showcase your products and services.
                      </div>
                    </div>
                  </div>

                  {/* Image Grid */}
                  <div className="row g-4 mb-70">
                    <div className="col-12 col-md-6 zoom-in" data-delay="100">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={graphicDetailImage1}
                          alt="Graphic Design Work Sample 1"
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
                          src={graphicDetailImage2}
                          alt="Graphic Design Work Sample 2"
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
                      graphic designing services
                    </span>{" "}
                    include <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Website Graphics, UI Elements
                    </span>{" "}
                    and <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Packaging & Stationery Design
                    </span>
                    .
                  </h3>
                  <div className="text ff-2 color-paragraph mb-70 fade-in-up" data-delay="200">
                    We design stunning website graphics, banners, icons, and UI elements that align with your brand identity and improve usability. Our packaging design focuses on both aesthetics and functionality, while our elegant business cards and letterheads reflect professionalism and strengthen your brand image.
                  </div>

                  {/* Why Choose Us Section */}
                  <div className="row align-items-center g-4 mb-70">
                    <div className="col-12 col-lg-7">
                      <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-4 slide-in-left" data-delay="100">
                        Why Choose <span style={{ color: "var(--digital-marketing-light)" }}>
                          Digital Elite Services
                        </span> for Graphic Design?
                      </h4>

                      <div className="desc-1 ff-2 mb-4 color-paragraph fade-in-up" data-delay="150">
                        <strong>Creative Excellence:</strong> Our team of experienced designers brings fresh ideas and innovative concepts to every project.
                      </div>

                      <div className="desc-1 ff-2 mb-4 color-paragraph slide-in-right" data-delay="200">
                        <strong>Customized Solutions:</strong> We offer tailored design solutions that match your specific goals and requirements.
                      </div>

                      <div className="desc-1 ff-2 mb-4 color-paragraph fade-in-up" data-delay="250">
                        <strong>Affordable Pricing & Quick Turnaround:</strong> High-quality design doesn't have to be expensive. We value your time and ensure timely delivery of projects.
                      </div>

                      <div className="desc-2 ff-2 color-paragraph slide-in-left" data-delay="300">
                        <strong>Client-Centric Approach:</strong> Your satisfaction is our priority. We work closely with you throughout the design process to ensure the final output meets your expectations.
                      </div>
                    </div>

                    <div className="col-12 col-lg-5 rotate-in" data-delay="100">
                      <div className="image">
                        <img
                          loading="lazy"
                          src={graphicDetailImage3}
                          alt="Digital Elite Services Graphic Design Process"
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

                  {/* Our Design Process */}
                  <div className="mt-70 glow-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Our <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Structured Design Process
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      At Digital Elite Services, we follow a structured and collaborative design process to deliver exceptional results.
                    </div>

                    <div className="row g-4">
                      {[
                        {
                          icon: <Target size={24} />,
                          title: "Understanding Your Requirements",
                          desc: "We begin by understanding your business, target audience, and design preferences."
                        },
                        {
                          icon: <Eye size={24} />,
                          title: "Research & Concept Development",
                          desc: "Our team conducts research and develops creative concepts tailored to your brand."
                        },
                        {
                          icon: <Brush size={24} />,
                          title: "Design Creation",
                          desc: "We create visually stunning designs using the latest tools and techniques."
                        },
                        {
                          icon: <Star size={24} />,
                          title: "Feedback & Revisions",
                          desc: "Your feedback is crucial. We refine the designs based on your inputs to achieve perfection."
                        },
                        {
                          icon: <CheckCircle size={24} />,
                          title: "Final Delivery",
                          desc: "Once approved, we deliver high-quality files ready for use across all platforms."
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

                  {/* What Makes Us Different */}
                  <div className="mt-70 slide-in-right" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      What Makes{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Elite Services
                      </span>{" "}
                      Different
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Choosing the right graphic design company in Bangalore can significantly impact your brand image. Digital Elite Services stands out because of our commitment to excellence, creativity, and client success.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Palette size={24} />,
                          title: "Creative Excellence",
                          desc: "Our designers bring fresh ideas and innovative concepts to every project."
                        },
                        {
                          icon: <PenTool size={24} />,
                          title: "Customized Solutions",
                          desc: "We offer tailored design solutions that match your specific goals and requirements."
                        },
                        {
                          icon: <Clock size={24} />,
                          title: "Quick Turnaround",
                          desc: "We value your time and ensure timely delivery of all projects."
                        },
                        {
                          icon: <Users size={24} />,
                          title: "Client-Centric Approach",
                          desc: "Your satisfaction is our priority throughout the design process."
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

                  {/* Industries We Serve */}
                  <div className="mt-70 glow-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Industries We{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Serve
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      Digital Elite Services has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective design solutions.
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
                      Our industry-specific design strategies ensure that your brand visuals resonate with the right audience and deliver meaningful results.
                    </div>
                  </div>

                  {/* Best Graphic Design Agency Section */}
                  <div className="mt-70 fade-in-up" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Best{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Graphic Design Agency
                      </span>{" "}
                      in Bangalore for Local Businesses
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Local businesses need designs that connect with their community. Digital Elite Services creates designs that resonate with local audiences and drive business growth.
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
                          title: "Local Brand Identity",
                          desc: "Create a brand identity that connects with your local community."
                        },
                        {
                          icon: <Navigation size={24} />,
                          title: "Local Marketing Materials",
                          desc: "Design marketing materials that speak to your local audience."
                        },
                        {
                          icon: <BadgeCheck size={24} />,
                          title: "Local Reputation Design",
                          desc: "Build trust with professional designs that enhance your local reputation."
                        },
                        {
                          icon: <Megaphone size={24} />,
                          title: "Local Advertising Creatives",
                          desc: "Create ad designs that capture attention in local markets."
                        }
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

                  {/* Final CTA */}
                  <div className="mt-70 p-40 glow-in" data-delay="100" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
                    <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
                      Elevate Your Brand with <span style={{color:"var(--digital-marketing-light)"}}>Digital Elite Services</span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      If you are looking for reliable and creative{" "}
                      <strong>graphic designing services in Bangalore</strong>,
                      Digital Elite Services is your go-to partner. Our
                      expertise, creativity, and dedication make us the perfect
                      choice for all your design needs. Let us help you create
                      visually stunning designs that leave a lasting impression
                      and drive your business forward.
                    </p>
                    <p className="ff-2 color-paragraph">
                      <strong>
                        Ready to transform your brand with professional design?
                      </strong>{" "}
                      Contact Digital Elite Services today and take the first
                      step towards building a powerful visual identity.
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