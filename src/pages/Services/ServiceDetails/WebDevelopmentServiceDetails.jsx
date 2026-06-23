// import React from "react";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import SidePopup from "../../../components/sidePopup";
// import {
//   Laptop,
//   Palette,
//   Smartphone,
//   ShoppingBag,
//   Rocket,
//   Shield,
//   Users,
//   BarChart3,
//   Search,
//   Gauge,
//   Settings,
//   Layers,
//   Pencil,
//   Code,
//   Server,
//   Database,
//   Cloud,
//   Lock,
//   Globe,
//   Target,
//   ThumbsUp,
//   Handshake,
//   Award,
//   Clock,
//   Headphones,
//   Building2,
//   HeartPulse,
//   GraduationCap,
//   Store,
//   Cpu,
//   Utensils,
//   Sparkles,
//   Zap,
//   Eye,
//   CheckCircle,
//   Compass,
//   PenTool,
//   Layout,
//   Monitor,
//   Tablet,
//   ArrowRight,
//   TrendingUp,
//   FileText,
//   Briefcase,
//   LineChart,
//   MousePointer,
//   Grid,
//   Box,
//   Wallet,
//   Scale,
//   HardHat,
//   Factory,
//   Hotel,
// } from "lucide-react";
// // Import relevant images for the web development service page
// import webHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
// import webDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
// import webDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
// import webDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

// export default function ServiceDetailsWebDevelopment() {
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
//                 Web Development Company in {" "}
//                 <span style={{ color: "var(--digital-marketing-light)" }}>
//                   Bangalore for Startups & Enterprises
//                 </span>
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
//                 src={webHeroImage}
//                 alt="Web Development Company in Bangalore"
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
//                         className="category-services-item fw-5 letter-space--2 ff-2 active"
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
//                     In today's fast-paced digital world, your website is often the first interaction customers have with your brand. A well-designed and high-performing website can significantly influence how users perceive your business.{" "}
//                     <span style={{ color: "var(--digital-marketing-light)" }}>
//                       Digital Elite Services
//                     </span>{" "}
//                     specializes in creating impactful digital experiences that combine creativity, functionality, and performance. As a trusted UI/UX Design Company in Bangalore and Web Development company in Bangalore, we help businesses establish a strong and lasting online presence.
//                   </h2>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     <Palette size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
//                     UI/UX Design Company in Bangalore
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     User experience is the foundation of any successful digital product. As a professional UI/UX Design Company in Bangalore, Digital Elite Services focuses on designing interfaces that are intuitive, engaging, and user-friendly.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     We believe that great design is not just about aesthetics—it's about solving problems and delivering seamless experiences. Our team conducts in-depth research to understand your audience, their needs, and their behavior. This allows us to create designs that guide users naturally and improve overall engagement.
//                   </div>

//                   <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
//                     UI/UX Design Services in Bangalore
//                   </h4>
//                   <div className="row g-4 mb-70">
//                     {[
//                       {
//                         icon: <Users size={24} />,
//                         title: "User Research & Competitor Analysis"
//                       },
//                       {
//                         icon: <PenTool size={24} />,
//                         title: "Wireframing & Prototyping"
//                       },
//                       {
//                         icon: <Laptop size={24} />,
//                         title: "Website UI/UX Design"
//                       },
//                       {
//                         icon: <Smartphone size={24} />,
//                         title: "Mobile-Responsive Interface Design"
//                       },
//                       {
//                         icon: <Layers size={24} />,
//                         title: "Interaction & Usability Design"
//                       },
//                       {
//                         icon: <Search size={24} />,
//                         title: "UX Audits & Improvements"
//                       }
//                     ].map((item, index) => (
//                       <div key={index} className="col-12 col-md-6 d-flex">
//                         <div
//                           className="p-30 w-100"
//                           style={{
//                             background: "var(--digital-marketing-light-bg)",
//                             borderRadius: "12px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               gap: "12px",
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
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     <Code size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
//                     Web Development Company in Bangalore
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     A strong online presence requires more than just a visually appealing design—it needs a powerful backend that ensures performance, scalability, and security. As a leading Web Development company in Bangalore, Digital Elite Services builds high-quality websites tailored to your business needs.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     We use modern technologies and best practices to develop websites that are fast, secure, and optimized for performance. Our development approach ensures that your website not only looks great but also delivers a seamless user experience across all devices.
//                   </div>

//                   <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
//                     Our Expert Web Development Services in Bangalore Include:
//                   </h4>
//                   <div className="row g-4 mb-70">
//                     {[
//                       {
//                         icon: <Code size={24} />,
//                         title: "Custom Website Development"
//                       },
//                       {
//                         icon: <Building2 size={24} />,
//                         title: "Business & Corporate Websites"
//                       },
//                       {
//                         icon: <ShoppingBag size={24} />,
//                         title: "E-Commerce Website Development"
//                       },
//                       {
//                         icon: <Layout size={24} />,
//                         title: "CMS-Based Development"
//                       },
//                       {
//                         icon: <Server size={24} />,
//                         title: "Web Application Development"
//                       },
//                       {
//                         icon: <Settings size={24} />,
//                         title: "API & Third-Party Integrations"
//                       }
//                     ].map((item, index) => (
//                       <div key={index} className="col-12 col-md-6 d-flex">
//                         <div
//                           className="p-30 w-100"
//                           style={{
//                             background: "var(--digital-marketing-light-bg)",
//                             borderRadius: "12px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               gap: "12px",
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
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Image Grid - FIXED with proper responsive alignment */}
//                   <div className="row g-4 mb-70">
//                     <div className="col-12 col-md-6">
//                       <div className="image" style={{ height: "100%" }}>
//                         <img
//                           loading="lazy"
//                           src={webDetailImage1}
//                           alt="Web Development Process"
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
//                           src={webDetailImage2}
//                           alt="Web Development Results"
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

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     <Palette size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
//                     Creative Web Designing Company in Bangalore
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Design plays a crucial role in capturing attention and retaining users. As a creative Web designing company in Bangalore, Digital Elite Services focuses on crafting visually appealing and strategically structured websites.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Our design process ensures that every element—from layout to color schemes—is aligned with your brand identity. We create designs that are not only modern and attractive but also optimized for usability and performance.
//                   </div>

//                   <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
//                     Our Web Design Solutions Include:
//                   </h4>
//                   <div className="row g-4 mb-70">
//                     {[
//                       {
//                         icon: <Monitor size={24} />,
//                         title: "Responsive Website Design"
//                       },
//                       {
//                         icon: <Target size={24} />,
//                         title: "Landing Page Design"
//                       },
//                       {
//                         icon: <Building2 size={24} />,
//                         title: "Corporate Website Design"
//                       },
//                       {
//                         icon: <Grid size={24} />,
//                         title: "UI Design for Web Platforms"
//                       }
//                     ].map((item, index) => (
//                       <div key={index} className="col-12 col-md-6 d-flex">
//                         <div
//                           className="p-30 w-100"
//                           style={{
//                             background: "var(--digital-marketing-light-bg)",
//                             borderRadius: "12px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               gap: "12px",
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
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     <Search size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
//                     SEO-Friendly and Performance-Driven Websites
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     In today's competitive digital landscape, having a beautiful website alone is not enough. Your website must also be discoverable on search engines and deliver fast performance. At Digital Elite Services, we create SEO-friendly websites that help businesses improve their online visibility and attract more organic traffic.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Our development and design teams work together to ensure that every website is optimized for search engines from the ground up. From proper site architecture to mobile optimization and page speed improvements, we follow industry best practices to help your website rank higher on search engine results pages. We also focus heavily on website performance because users expect fast-loading and smooth digital experiences. A slow website can negatively impact user engagement and conversions. That's why we optimize images, streamline code, and implement advanced performance techniques to ensure your website loads quickly across all devices and browsers.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     <ShoppingBag size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
//                     E-Commerce Website Development Solutions
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     For businesses looking to sell products or services online, we provide complete e-commerce website development solutions. Our team creates secure, scalable, and user-friendly online stores designed to maximize customer engagement and increase sales.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     We build e-commerce platforms with intuitive navigation, secure payment gateways, easy product management systems, and seamless checkout experiences. Whether you need a simple online store or a feature-rich e-commerce platform, we deliver customized solutions tailored to your business model. Our e-commerce websites are designed to provide excellent user experiences while making it easier for businesses to manage inventory, orders, and customer interactions efficiently.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     <Smartphone size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
//                     Mobile-Responsive and User-Centric Design
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     With the growing number of mobile users, having a mobile-responsive website is essential for business success. At Digital Elite Services, we prioritize responsive design to ensure your website functions flawlessly on smartphones, tablets, laptops, and desktops.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Our user-centric design approach focuses on making navigation simple and intuitive. We carefully structure content, buttons, and layouts to guide users naturally through the website. This improves user engagement and encourages visitors to take desired actions such as filling out contact forms, making purchases, or requesting services. By combining responsive design with strategic UI/UX practices, we create websites that offer consistent and enjoyable experiences across all screen sizes.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Our Approach to{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Digital Success
//                     </span>
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     At Digital Elite Services, we follow a structured approach to deliver exceptional results:
//                   </div>

//                   <div className="list-process-item d-flex justify-content-between mb-70">
//                     <div className="line d-none d-md-block"></div>
//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">01</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Understanding Your Business
//                       </a>
//                       <div className="desc ff-2">
//                         We begin by analyzing your business goals, target audience, and competitors to create a clear strategy.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">02</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Planning & Design
//                       </a>
//                       <div className="desc ff-2">
//                         Our UI/UX experts create wireframes and prototypes to visualize the structure and user journey.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">03</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Development
//                       </a>
//                       <div className="desc ff-2">
//                         Our developers bring the design to life using advanced technologies and coding standards.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row g-4 mb-70">
//                     {[
//                       {
//                         icon: <Gauge size={24} />,
//                         title: "Step 4: Testing & Optimization",
//                         desc: "We rigorously test your website for performance, usability, and responsiveness."
//                       },
//                       {
//                         icon: <Rocket size={24} />,
//                         title: "Step 5: Launch & Support",
//                         desc: "After a successful launch, we provide ongoing support and updates to ensure optimal performance."
//                       }
//                     ].map((item, index) => (
//                       <div key={index} className="col-12 col-md-6 d-flex">
//                         <div
//                           className="p-30 w-100"
//                           style={{
//                             background: "var(--digital-marketing-light-bg)",
//                             borderRadius: "12px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               gap: "12px",
//                               marginBottom: "10px",
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
//                           <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Why Choose{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Digital Elite Services
//                     </span>
//                     ?
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Choosing the right digital partner can make all the difference. Here's why businesses trust Digital Elite Services:
//                   </div>

//                   <div className="row g-4 mb-70">
//                     {[
//                       {
//                         icon: <Award size={24} />,
//                         title: "Expertise & Experience",
//                         desc: "Our team brings years of experience in UI/UX design and web development, ensuring high-quality outcomes."
//                       },
//                       {
//                         icon: <Target size={24} />,
//                         title: "Tailored Solutions",
//                         desc: "We understand that every business is unique, so we create customized solutions that align with your goals."
//                       },
//                       {
//                         icon: <Sparkles size={24} />,
//                         title: "Latest Technologies",
//                         desc: "We stay updated with the latest trends and technologies to deliver modern, future-ready websites."
//                       },
//                       {
//                         icon: <Zap size={24} />,
//                         title: "Focus on Performance",
//                         desc: "Our websites are optimized for speed, SEO, and user experience, helping you rank better and convert more visitors."
//                       },
//                       {
//                         icon: <Box size={24} />,
//                         title: "End-to-End Services",
//                         desc: "From concept to deployment, we handle every aspect of your digital project."
//                       },
//                       {
//                         icon: <Headphones size={24} />,
//                         title: "Dedicated Client Support",
//                         desc: "Our dedicated support team is always available to assist with updates, maintenance, and technical guidance."
//                       }
//                     ].map((item, index) => (
//                       <div key={index} className="col-12 col-md-6 d-flex">
//                         <div
//                           className="p-30 w-100"
//                           style={{
//                             background: "var(--digital-marketing-light-bg)",
//                             borderRadius: "12px",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               gap: "12px",
//                               marginBottom: "10px",
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
//                           <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
//                         </div>
//                       </div>
//                     ))}
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
//                       Digital Elite Services has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective web solutions.
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
//                       Our industry-specific web development strategies ensure that your website meets the unique needs of your target audience and delivers meaningful results.
//                     </div>
//                   </div>

//                   {/* Final CTA */}
//                   <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
//                     <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
//                       Let's Build Your{" "}
//                       <span style={{color:"var(--digital-marketing-light)"}}>
//                         Digital Future
//                       </span>
//                     </h4>
//                     <p className="ff-2 color-paragraph mb-30">
//                       Your website is a powerful tool that can drive growth, improve customer engagement, and strengthen your brand. At Digital Elite Services, we are committed to helping you achieve your digital goals through innovative design and reliable development.
//                     </p>
//                     <p className="ff-2 color-paragraph mb-30">
//                       If you're looking for expert <strong>UI/UX Design services in Bangalore</strong>, a trusted <strong>Web Development company in Bangalore</strong>, or a creative <strong>Web designing company in Bangalore</strong>, we're here to help.
//                     </p>
//                     <p className="ff-2 color-paragraph">
//                       <strong>Get in touch with Digital Elite Services today</strong> and take the first step toward building a strong and successful online presence.
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
  Laptop,
  Palette,
  Smartphone,
  ShoppingBag,
  Rocket,
  Shield,
  Users,
  BarChart3,
  Search,
  Gauge,
  Settings,
  Layers,
  Pencil,
  Code,
  Server,
  Database,
  Cloud,
  Lock,
  Globe,
  Target,
  ThumbsUp,
  Handshake,
  Award,
  Clock,
  Headphones,
  Building2,
  HeartPulse,
  GraduationCap,
  Store,
  Cpu,
  Utensils,
  Sparkles,
  Zap,
  Eye,
  CheckCircle,
  Compass,
  PenTool,
  Layout,
  Monitor,
  Tablet,
  ArrowRight,
  TrendingUp,
  FileText,
  Briefcase,
  LineChart,
  MousePointer,
  Grid,
  Box,
  Wallet,
  Scale,
  HardHat,
  Factory,
  Hotel,
  MapPin,
  Navigation,
  BadgeCheck,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";
// Import relevant images for the web development service page
import webHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
import webDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
import webDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
import webDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

export default function ServiceDetailsWebDevelopment() {
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
                  {/* <span className="typing-effect">Web Design & Development Agency</span> */}
                </div>
                <h1 className="title letter-space--3 fw-6 slide-in-left" data-delay="200">
                  Build Your
                  <br />
                  <span style={{ color: "var(--digital-marketing-light)" }}>
                    Digital Future
                  </span>
                  <br />
                  With Expert Development
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
                src={webHeroImage}
                alt="Web Development Company in Bangalore"
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
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
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
                    In today's fast-paced digital world, your website is often the first interaction customers have with your brand. A well-designed and high-performing website can significantly influence how users perceive your business.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Services
                    </span>{" "}
                    specializes in creating impactful digital experiences that combine creativity, functionality, and performance. As a trusted UI/UX Design Company in Bangalore and Web Development company in Bangalore, we help businesses establish a strong and lasting online presence.
                  </h2>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black scale-in" data-delay="100">
                    <Palette size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    UI/UX Design Company in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    User experience is the foundation of any successful digital product. As a professional UI/UX Design Company in Bangalore, Digital Elite Services focuses on designing interfaces that are intuitive, engaging, and user-friendly.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="300">
                    We believe that great design is not just about aesthetics—it's about solving problems and delivering seamless experiences. Our team conducts in-depth research to understand your audience, their needs, and their behavior. This allows us to create designs that guide users naturally and improve overall engagement.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30 rotate-in" data-delay="100">
                    UI/UX Design Services in Bangalore
                  </h4>
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Users size={24} />,
                        title: "User Research & Competitor Analysis"
                      },
                      {
                        icon: <PenTool size={24} />,
                        title: "Wireframing & Prototyping"
                      },
                      {
                        icon: <Laptop size={24} />,
                        title: "Website UI/UX Design"
                      },
                      {
                        icon: <Smartphone size={24} />,
                        title: "Mobile-Responsive Interface Design"
                      },
                      {
                        icon: <Layers size={24} />,
                        title: "Interaction & Usability Design"
                      },
                      {
                        icon: <Search size={24} />,
                        title: "UX Audits & Improvements"
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
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black zoom-in" data-delay="100">
                    <Code size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    Web Development Company in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    A strong online presence requires more than just a visually appealing design—it needs a powerful backend that ensures performance, scalability, and security. As a leading Web Development company in Bangalore, Digital Elite Services builds high-quality websites tailored to your business needs.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-left" data-delay="300">
                    We use modern technologies and best practices to develop websites that are fast, secure, and optimized for performance. Our development approach ensures that your website not only looks great but also delivers a seamless user experience across all devices.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30 blur-in" data-delay="100">
                    Our Expert Web Development Services in Bangalore Include:
                  </h4>
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Code size={24} />,
                        title: "Custom Website Development"
                      },
                      {
                        icon: <Building2 size={24} />,
                        title: "Business & Corporate Websites"
                      },
                      {
                        icon: <ShoppingBag size={24} />,
                        title: "E-Commerce Website Development"
                      },
                      {
                        icon: <Layout size={24} />,
                        title: "CMS-Based Development"
                      },
                      {
                        icon: <Server size={24} />,
                        title: "Web Application Development"
                      },
                      {
                        icon: <Settings size={24} />,
                        title: "API & Third-Party Integrations"
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
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Image Grid */}
                  <div className="row g-4 mb-70">
                    <div className="col-12 col-md-6 zoom-in" data-delay="100">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={webDetailImage1}
                          alt="Web Development Process"
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
                          src={webDetailImage2}
                          alt="Web Development Results"
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black glow-in" data-delay="100">
                    <Palette size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    Creative Web Designing Company in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Design plays a crucial role in capturing attention and retaining users. As a creative Web designing company in Bangalore, Digital Elite Services focuses on crafting visually appealing and strategically structured websites.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40 slide-in-right" data-delay="300">
                    Our design process ensures that every element—from layout to color schemes—is aligned with your brand identity. We create designs that are not only modern and attractive but also optimized for usability and performance.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30 scale-in" data-delay="100">
                    Our Web Design Solutions Include:
                  </h4>
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Monitor size={24} />,
                        title: "Responsive Website Design"
                      },
                      {
                        icon: <Target size={24} />,
                        title: "Landing Page Design"
                      },
                      {
                        icon: <Building2 size={24} />,
                        title: "Corporate Website Design"
                      },
                      {
                        icon: <Grid size={24} />,
                        title: "UI Design for Web Platforms"
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
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black rotate-in" data-delay="100">
                    <Search size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    SEO-Friendly and Performance-Driven Websites
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    In today's competitive digital landscape, having a beautiful website alone is not enough. Your website must also be discoverable on search engines and deliver fast performance. At Digital Elite Services, we create SEO-friendly websites that help businesses improve their online visibility and attract more organic traffic.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-left" data-delay="300">
                    Our development and design teams work together to ensure that every website is optimized for search engines from the ground up. From proper site architecture to mobile optimization and page speed improvements, we follow industry best practices to help your website rank higher on search engine results pages. We also focus heavily on website performance because users expect fast-loading and smooth digital experiences. A slow website can negatively impact user engagement and conversions. That's why we optimize images, streamline code, and implement advanced performance techniques to ensure your website loads quickly across all devices and browsers.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black blur-in" data-delay="100">
                    <ShoppingBag size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    E-Commerce Website Development Solutions
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    For businesses looking to sell products or services online, we provide complete e-commerce website development solutions. Our team creates secure, scalable, and user-friendly online stores designed to maximize customer engagement and increase sales.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="300">
                    We build e-commerce platforms with intuitive navigation, secure payment gateways, easy product management systems, and seamless checkout experiences. Whether you need a simple online store or a feature-rich e-commerce platform, we deliver customized solutions tailored to your business model. Our e-commerce websites are designed to provide excellent user experiences while making it easier for businesses to manage inventory, orders, and customer interactions efficiently.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black glow-in" data-delay="100">
                    <Smartphone size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    Mobile-Responsive and User-Centric Design
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    With the growing number of mobile users, having a mobile-responsive website is essential for business success. At Digital Elite Services, we prioritize responsive design to ensure your website functions flawlessly on smartphones, tablets, laptops, and desktops.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-left" data-delay="300">
                    Our user-centric design approach focuses on making navigation simple and intuitive. We carefully structure content, buttons, and layouts to guide users naturally through the website. This improves user engagement and encourages visitors to take desired actions such as filling out contact forms, making purchases, or requesting services. By combining responsive design with strategic UI/UX practices, we create websites that offer consistent and enjoyable experiences across all screen sizes.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black scale-in" data-delay="100">
                    Our Approach to{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Success
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    At Digital Elite Services, we follow a structured approach to deliver exceptional results:
                  </div>

                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2 flip-in" data-delay="100">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Understanding Your Business
                      </a>
                      <div className="desc ff-2">
                        We begin by analyzing your business goals, target audience, and competitors to create a clear strategy.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="200">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Planning & Design
                      </a>
                      <div className="desc ff-2">
                        Our UI/UX experts create wireframes and prototypes to visualize the structure and user journey.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="300">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Development
                      </a>
                      <div className="desc ff-2">
                        Our developers bring the design to life using advanced technologies and coding standards.
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Gauge size={24} />,
                        title: "Step 4: Testing & Optimization",
                        desc: "We rigorously test your website for performance, usability, and responsiveness."
                      },
                      {
                        icon: <Rocket size={24} />,
                        title: "Step 5: Launch & Support",
                        desc: "After a successful launch, we provide ongoing support and updates to ensure optimal performance."
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black rotate-in" data-delay="100">
                    Why Choose{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Services
                    </span>
                    ?
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Choosing the right digital partner can make all the difference. Here's why businesses trust Digital Elite Services:
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Award size={24} />,
                        title: "Expertise & Experience",
                        desc: "Our team brings years of experience in UI/UX design and web development, ensuring high-quality outcomes."
                      },
                      {
                        icon: <Target size={24} />,
                        title: "Tailored Solutions",
                        desc: "We understand that every business is unique, so we create customized solutions that align with your goals."
                      },
                      {
                        icon: <Sparkles size={24} />,
                        title: "Latest Technologies",
                        desc: "We stay updated with the latest trends and technologies to deliver modern, future-ready websites."
                      },
                      {
                        icon: <Zap size={24} />,
                        title: "Focus on Performance",
                        desc: "Our websites are optimized for speed, SEO, and user experience, helping you rank better and convert more visitors."
                      },
                      {
                        icon: <Box size={24} />,
                        title: "End-to-End Services",
                        desc: "From concept to deployment, we handle every aspect of your digital project."
                      },
                      {
                        icon: <Headphones size={24} />,
                        title: "Dedicated Client Support",
                        desc: "Our dedicated support team is always available to assist with updates, maintenance, and technical guidance."
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

                  {/* Industries We Serve */}
                  <div className="mt-70 glow-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Industries We{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Serve
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      Digital Elite Services has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective web solutions.
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
                      Our industry-specific web development strategies ensure that your website meets the unique needs of your target audience and delivers meaningful results.
                    </div>
                  </div>

                  {/* Best Web Development Agency Section */}
                  <div className="mt-70 fade-in-up" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Best{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Web Development Agency
                      </span>{" "}
                      in Bangalore for Local Businesses
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Local businesses need websites that connect with their community. Digital Elite Services creates websites that resonate with local audiences and drive business growth.
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
                          title: "Local Business Websites",
                          desc: "Create websites that connect with your local community and drive engagement."
                        },
                        {
                          icon: <Navigation size={24} />,
                          title: "Local SEO Integration",
                          desc: "Optimize your website for local search to attract nearby customers."
                        },
                        {
                          icon: <BadgeCheck size={24} />,
                          title: "Local Brand Building",
                          desc: "Build trust and credibility with professional web design."
                        },
                        {
                          icon: <Megaphone size={24} />,
                          title: "Local Marketing Support",
                          desc: "Integrate your website with local marketing campaigns for maximum impact."
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
                      Let's Build Your{" "}
                      <span style={{color:"var(--digital-marketing-light)"}}>
                        Digital Future
                      </span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      Your website is a powerful tool that can drive growth, improve customer engagement, and strengthen your brand. At Digital Elite Services, we are committed to helping you achieve your digital goals through innovative design and reliable development.
                    </p>
                    <p className="ff-2 color-paragraph mb-30">
                      If you're looking for expert <strong>UI/UX Design services in Bangalore</strong>, a trusted <strong>Web Development company in Bangalore</strong>, or a creative <strong>Web designing company in Bangalore</strong>, we're here to help.
                    </p>
                    <p className="ff-2 color-paragraph">
                      <strong>Get in touch with Digital Elite Services today</strong> and take the first step toward building a strong and successful online presence.
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