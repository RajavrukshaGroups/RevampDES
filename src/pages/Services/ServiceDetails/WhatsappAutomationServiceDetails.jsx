// import React from "react";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import SidePopup from "../../../components/sidePopup";
// import {
//   MessageCircle,
//   Bot,
//   Target,
//   TrendingUp,
//   Sparkles,
//   Smartphone,
//   Headphones,
//   Layout,
//   Send,
//   Settings,
//   Layers,
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
//   Zap,
//   Eye,
//   Award,
//   Users,
//   Clock,
//   BarChart3,
//   CheckCircle,
//   Globe,
// } from "lucide-react";
// // Import relevant images for the WhatsApp automation service page
// import whatsappHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
// import whatsappDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
// import whatsappDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
// import whatsappDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

// export default function ServiceDetailsWhatsAppAutomation() {
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
//                 WhatsApp Business API & <br />
//                 <span style={{ color: "var(--digital-marketing-light)" }}>
//                   Automation Services
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
//                 src={whatsappHeroImage}
//                 alt="WhatsApp Business API & Automation Services in Bangalore"
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
//                         className="category-services-item fw-5 letter-space--2 ff-2 active"
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
//                     In today's digital-first world, businesses are constantly seeking efficient ways to communicate with their customers. WhatsApp, being one of the most widely used messaging platforms in India, has become a powerful channel for marketing, customer support, and engagement.{" "}
//                     <span style={{ color: "var(--digital-marketing-light)" }}>
//                       Digital Elite Services
//                     </span>{" "}
//                     stands out for its innovation and performance-driven approach as a top WhatsApp automation API provider in India.
//                   </h2>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     With a focus on delivering tailored automation solutions, the company is helping businesses transform how they interact with customers. When discussing the Top WhatsApp automation API Providers in India, one name that stands out for its innovation and performance-driven approach is Digital Elite Services.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Why{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       WhatsApp Automation
//                     </span>{" "}
//                     is Essential
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Before exploring the list of WhatsApp API providers in India, it's important to understand why automation is critical for modern businesses.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     WhatsApp automation allows companies to:
//                   </div>

//                   <div className="row g-4 mb-70">
//                     {[
//                       {
//                         icon: <Zap size={24} />,
//                         title: "Respond Instantly",
//                         desc: "Respond instantly to customer inquiries and improve satisfaction."
//                       },
//                       {
//                         icon: <Settings size={24} />,
//                         title: "Automate Repetitive Tasks",
//                         desc: "Automate repetitive communication tasks and save valuable time."
//                       },
//                       {
//                         icon: <Target size={24} />,
//                         title: "Run Targeted Campaigns",
//                         desc: "Run targeted marketing campaigns that reach the right audience."
//                       },
//                       {
//                         icon: <Clock size={24} />,
//                         title: "24/7 Customer Support",
//                         desc: "Provide 24/7 customer support with automated responses."
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
//                     List of{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       WhatsApp Automation Companies
//                     </span>{" "}
//                     in India
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     If you're searching for a reliable list of WhatsApp automation Providers in India, it's important to focus on providers that offer not just tools, but complete solutions.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Digital Elite Services has emerged as a leading choice for businesses looking for end-to-end WhatsApp automation. Instead of offering generic features, the company emphasizes customized strategies designed to meet specific business goals.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Unlike many providers that rely on one-size-fits-all solutions, Digital Elite Services ensures that every automation workflow is aligned with your brand's communication style and customer journey.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Top 10{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       WhatsApp Automation Companies
//                     </span>{" "}
//                     in India
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     When businesses search for the top 10 WhatsApp automation companies in India, they are often looking for reliability, scalability, and measurable results.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Digital Elite Services consistently ranks among the top due to its comprehensive offerings and client-focused approach. The company provides everything needed to build, manage, and optimize WhatsApp communication.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Key Offerings of{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Digital Elite Services
//                     </span>
//                   </h3>

//                   <div className="list-process-item d-flex justify-content-between mb-70">
//                     <div className="line d-none d-md-block"></div>
//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">01</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Advanced Chatbot Automation
//                       </a>
//                       <div className="desc ff-2">
//                         Digital Elite Services develops intelligent chatbots that can handle customer queries, guide users through services, and provide instant responses.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">02</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         Bulk Messaging Solutions
//                       </a>
//                       <div className="desc ff-2">
//                         Businesses can run targeted campaigns with bulk messaging features, ensuring that the right message reaches the right audience at the right time.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">03</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         CRM Integration
//                       </a>
//                       <div className="desc ff-2">
//                         Seamless integration with CRM systems allows businesses to track customer interactions, manage leads, and automate follow-ups efficiently.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row g-4 mb-70">
//                     {[
//                       {
//                         icon: <Users size={24} />,
//                         title: "Lead Generation & Nurturing",
//                         desc: "Automation workflows help capture leads and nurture them through personalized communication."
//                       },
//                       {
//                         icon: <BarChart3 size={24} />,
//                         title: "Analytics & Performance Tracking",
//                         desc: "With detailed insights and reporting, businesses can measure campaign performance and optimize strategies."
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

//                   {/* Image Grid - FIXED with proper responsive alignment */}
//                   <div className="row g-4 mb-70">
//                     <div className="col-12 col-md-6">
//                       <div className="image" style={{ height: "100%" }}>
//                         <img
//                           loading="lazy"
//                           src={whatsappDetailImage1}
//                           alt="WhatsApp Automation Strategy"
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
//                           src={whatsappDetailImage2}
//                           alt="WhatsApp Automation Results"
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
//                     Best{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       WhatsApp Automation Companies
//                     </span>{" "}
//                     in India
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Choosing the best WhatsApp automation companies in India requires careful evaluation of features, support, and long-term value.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Digital Elite Services stands out because of its commitment to delivering measurable outcomes rather than just providing software. The company works closely with clients to understand their needs and create customized automation strategies that drive growth.
//                   </div>

//                   <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
//                     What Makes Digital Elite Services the Best Choice?
//                   </h4>
//                   <div className="row g-4 mb-70">
//                     {[
//                       {
//                         icon: <Target size={24} />,
//                         title: "Tailored Solutions",
//                         desc: "Every business gets a personalized automation strategy designed for their specific needs."
//                       },
//                       {
//                         icon: <Smartphone size={24} />,
//                         title: "User-Friendly Systems",
//                         desc: "Easy-to-use tools that require minimal technical expertise for your team."
//                       },
//                       {
//                         icon: <Rocket size={24} />,
//                         title: "Scalable Infrastructure",
//                         desc: "Solutions that grow with your business and adapt to increasing demands."
//                       },
//                       {
//                         icon: <Headphones size={24} />,
//                         title: "Expert Support",
//                         desc: "Dedicated team to assist at every stage of implementation and beyond."
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
//                     How{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Digital Elite Services
//                     </span>{" "}
//                     Helps Businesses Grow
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Implementing WhatsApp automation is not just about sending messages—it's about building meaningful customer relationships. Digital Elite Services helps businesses achieve this by creating smart, data-driven communication systems.
//                   </div>

//                   <div className="row g-4 mb-70">
//                     {[
//                       {
//                         icon: <MessageCircle size={24} />,
//                         title: "Improved Customer Engagement",
//                         desc: "Automated responses ensure that customers receive instant replies, leading to higher satisfaction and better engagement."
//                       },
//                       {
//                         icon: <TrendingUp size={24} />,
//                         title: "Increased Sales Conversions",
//                         desc: "With personalized messaging and timely follow-ups, businesses can convert more leads into paying customers."
//                       },
//                       {
//                         icon: <Zap size={24} />,
//                         title: "Efficient Operations",
//                         desc: "Automation reduces the need for manual intervention, allowing teams to focus on more strategic tasks."
//                       },
//                       {
//                         icon: <Eye size={24} />,
//                         title: "Better Customer Insights",
//                         desc: "Detailed analytics provide valuable insights into customer behavior, helping refine marketing strategies."
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
//                     Future of{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       WhatsApp Automation
//                     </span>{" "}
//                     in India
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     The demand for WhatsApp automation is expected to grow rapidly as more businesses recognize its potential. With advancements in AI and machine learning, automation tools will become even more sophisticated, enabling highly personalized and interactive customer experiences.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Digital Elite Services is at the forefront of this transformation, continuously evolving its solutions to meet the changing needs of businesses. By adopting the latest technologies, the company ensures that its clients stay ahead in a competitive market.
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
//                       Digital Elite Services has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective WhatsApp automation solutions.
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
//                       Our industry-specific WhatsApp automation strategies ensure that your business communication resonates with the right audience and delivers meaningful results.
//                     </div>
//                   </div>

//                   {/* Final CTA */}
//                   <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
//                     <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
//                       Partner with the{" "}
//                       <span style={{color:"var(--digital-marketing-light)"}}>
//                         Best WhatsApp Automation Company in India
//                       </span>
//                     </h4>
//                     <p className="ff-2 color-paragraph mb-30">
//                       As businesses continue to embrace digital communication, WhatsApp automation has become an essential tool for success. Whether you're a startup or an established enterprise, choosing the right automation partner can make a significant difference.
//                     </p>
//                     <p className="ff-2 color-paragraph mb-30">
//                       Among the top <strong>WhatsApp automation AI companies in India</strong>, Digital Elite Services stands out for its innovative approach, customized solutions, and commitment to delivering results. From chatbot automation to bulk messaging and CRM integration, the company offers everything needed to streamline communication and drive business growth.
//                     </p>
//                     <p className="ff-2 color-paragraph">
//                       If you're looking for the best <strong>WhatsApp automation AI providers in India</strong>, Digital Elite Services provides the expertise and technology to help you succeed in today's fast-evolving digital landscape.
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
  MessageCircle,
  Bot,
  Target,
  TrendingUp,
  Sparkles,
  Smartphone,
  Headphones,
  Layout,
  Send,
  Settings,
  Layers,
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
  Zap,
  Eye,
  Award,
  Users,
  Clock,
  BarChart3,
  CheckCircle,
  Globe,
  MapPin,
  Navigation,
  BadgeCheck,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";
// Import relevant images for the WhatsApp automation service page
import whatsappHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
import whatsappDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
import whatsappDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
import whatsappDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

export default function ServiceDetailsWhatsAppAutomation() {
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
                  {/* <span className="typing-effect">WhatsApp Business API & Automation</span> */}
                </div>
                <h1 className="title letter-space--3 fw-6 slide-in-left" data-delay="200">
                  Transform Customer
                  <br />
                  Communication with{" "}
                  <span style={{ color: "var(--digital-marketing-light)" }}>
                    WhatsApp Automation
                  </span>
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
                src={whatsappHeroImage}
                alt="WhatsApp Business API & Automation Services in Bangalore"
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
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
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
                    In today's digital-first world, businesses are constantly seeking efficient ways to communicate with their customers. WhatsApp, being one of the most widely used messaging platforms in India, has become a powerful channel for marketing, customer support, and engagement.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Services
                    </span>{" "}
                    stands out for its innovation and performance-driven approach as a top WhatsApp automation API provider in India.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="200">
                    With a focus on delivering tailored automation solutions, the company is helping businesses transform how they interact with customers. When discussing the Top WhatsApp automation API Providers in India, one name that stands out for its innovation and performance-driven approach is Digital Elite Services.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black scale-in" data-delay="100">
                    Why{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation
                    </span>{" "}
                    is Essential
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Before exploring the list of WhatsApp API providers in India, it's important to understand why automation is critical for modern businesses.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40 slide-in-left" data-delay="300">
                    WhatsApp automation allows companies to:
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Zap size={24} />,
                        title: "Respond Instantly",
                        desc: "Respond instantly to customer inquiries and improve satisfaction."
                      },
                      {
                        icon: <Settings size={24} />,
                        title: "Automate Repetitive Tasks",
                        desc: "Automate repetitive communication tasks and save valuable time."
                      },
                      {
                        icon: <Target size={24} />,
                        title: "Run Targeted Campaigns",
                        desc: "Run targeted marketing campaigns that reach the right audience."
                      },
                      {
                        icon: <Clock size={24} />,
                        title: "24/7 Customer Support",
                        desc: "Provide 24/7 customer support with automated responses."
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black rotate-in" data-delay="100">
                    List of{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation Companies
                    </span>{" "}
                    in India
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    If you're searching for a reliable list of WhatsApp automation Providers in India, it's important to focus on providers that offer not just tools, but complete solutions.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40 slide-in-right" data-delay="300">
                    Digital Elite Services has emerged as a leading choice for businesses looking for end-to-end WhatsApp automation. Instead of offering generic features, the company emphasizes customized strategies designed to meet specific business goals.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-left" data-delay="400">
                    Unlike many providers that rely on one-size-fits-all solutions, Digital Elite Services ensures that every automation workflow is aligned with your brand's communication style and customer journey.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black zoom-in" data-delay="100">
                    Top 10{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation Companies
                    </span>{" "}
                    in India
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    When businesses search for the top 10 WhatsApp automation companies in India, they are often looking for reliability, scalability, and measurable results.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="300">
                    Digital Elite Services consistently ranks among the top due to its comprehensive offerings and client-focused approach. The company provides everything needed to build, manage, and optimize WhatsApp communication.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black blur-in" data-delay="100">
                    Key Offerings of{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Services
                    </span>
                  </h3>

                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2 flip-in" data-delay="100">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Advanced Chatbot Automation
                      </a>
                      <div className="desc ff-2">
                        Digital Elite Services develops intelligent chatbots that can handle customer queries, guide users through services, and provide instant responses.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="200">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Bulk Messaging Solutions
                      </a>
                      <div className="desc ff-2">
                        Businesses can run targeted campaigns with bulk messaging features, ensuring that the right message reaches the right audience at the right time.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="300">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        CRM Integration
                      </a>
                      <div className="desc ff-2">
                        Seamless integration with CRM systems allows businesses to track customer interactions, manage leads, and automate follow-ups efficiently.
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Users size={24} />,
                        title: "Lead Generation & Nurturing",
                        desc: "Automation workflows help capture leads and nurture them through personalized communication."
                      },
                      {
                        icon: <BarChart3 size={24} />,
                        title: "Analytics & Performance Tracking",
                        desc: "With detailed insights and reporting, businesses can measure campaign performance and optimize strategies."
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

                  {/* Image Grid */}
                  <div className="row g-4 mb-70">
                    <div className="col-12 col-md-6 zoom-in" data-delay="100">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={whatsappDetailImage1}
                          alt="WhatsApp Automation Strategy"
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
                          src={whatsappDetailImage2}
                          alt="WhatsApp Automation Results"
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
                    Best{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation Companies
                    </span>{" "}
                    in India
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Choosing the best WhatsApp automation companies in India requires careful evaluation of features, support, and long-term value.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-left" data-delay="300">
                    Digital Elite Services stands out because of its commitment to delivering measurable outcomes rather than just providing software. The company works closely with clients to understand their needs and create customized automation strategies that drive growth.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30 scale-in" data-delay="100">
                    What Makes Digital Elite Services the Best Choice?
                  </h4>
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Target size={24} />,
                        title: "Tailored Solutions",
                        desc: "Every business gets a personalized automation strategy designed for their specific needs."
                      },
                      {
                        icon: <Smartphone size={24} />,
                        title: "User-Friendly Systems",
                        desc: "Easy-to-use tools that require minimal technical expertise for your team."
                      },
                      {
                        icon: <Rocket size={24} />,
                        title: "Scalable Infrastructure",
                        desc: "Solutions that grow with your business and adapt to increasing demands."
                      },
                      {
                        icon: <Headphones size={24} />,
                        title: "Expert Support",
                        desc: "Dedicated team to assist at every stage of implementation and beyond."
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black rotate-in" data-delay="100">
                    How{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Services
                    </span>{" "}
                    Helps Businesses Grow
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Implementing WhatsApp automation is not just about sending messages—it's about building meaningful customer relationships. Digital Elite Services helps businesses achieve this by creating smart, data-driven communication systems.
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <MessageCircle size={24} />,
                        title: "Improved Customer Engagement",
                        desc: "Automated responses ensure that customers receive instant replies, leading to higher satisfaction and better engagement."
                      },
                      {
                        icon: <TrendingUp size={24} />,
                        title: "Increased Sales Conversions",
                        desc: "With personalized messaging and timely follow-ups, businesses can convert more leads into paying customers."
                      },
                      {
                        icon: <Zap size={24} />,
                        title: "Efficient Operations",
                        desc: "Automation reduces the need for manual intervention, allowing teams to focus on more strategic tasks."
                      },
                      {
                        icon: <Eye size={24} />,
                        title: "Better Customer Insights",
                        desc: "Detailed analytics provide valuable insights into customer behavior, helping refine marketing strategies."
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black blur-in" data-delay="100">
                    Future of{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation
                    </span>{" "}
                    in India
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    The demand for WhatsApp automation is expected to grow rapidly as more businesses recognize its potential. With advancements in AI and machine learning, automation tools will become even more sophisticated, enabling highly personalized and interactive customer experiences.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="300">
                    Digital Elite Services is at the forefront of this transformation, continuously evolving its solutions to meet the changing needs of businesses. By adopting the latest technologies, the company ensures that its clients stay ahead in a competitive market.
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
                      Digital Elite Services has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective WhatsApp automation solutions.
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
                      Our industry-specific WhatsApp automation strategies ensure that your business communication resonates with the right audience and delivers meaningful results.
                    </div>
                  </div>

                  {/* Best WhatsApp Automation Agency Section */}
                  <div className="mt-70 fade-in-up" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Best{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        WhatsApp Automation Agency
                      </span>{" "}
                      in Bangalore for Local Businesses
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Local businesses need to connect with their community through WhatsApp. Digital Elite Services helps local businesses build strong customer relationships through automated WhatsApp communication.
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
                          title: "Local Customer Engagement",
                          desc: "Connect with your local community through personalized WhatsApp communication."
                        },
                        {
                          icon: <Navigation size={24} />,
                          title: "Local Lead Generation",
                          desc: "Generate and nurture leads from your local area through automated workflows."
                        },
                        {
                          icon: <BadgeCheck size={24} />,
                          title: "Local Brand Building",
                          desc: "Build trust and credibility with local customers through professional communication."
                        },
                        {
                          icon: <Megaphone size={24} />,
                          title: "Local Promotions & Offers",
                          desc: "Send targeted promotions and offers to customers in your local area."
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
                      Partner with the{" "}
                      <span style={{color:"var(--digital-marketing-light)"}}>
                        Best WhatsApp Automation Company in India
                      </span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      As businesses continue to embrace digital communication, WhatsApp automation has become an essential tool for success. Whether you're a startup or an established enterprise, choosing the right automation partner can make a significant difference.
                    </p>
                    <p className="ff-2 color-paragraph mb-30">
                      Among the top <strong>WhatsApp automation AI companies in India</strong>, Digital Elite Services stands out for its innovative approach, customized solutions, and commitment to delivering results. From chatbot automation to bulk messaging and CRM integration, the company offers everything needed to streamline communication and drive business growth.
                    </p>
                    <p className="ff-2 color-paragraph">
                      If you're looking for the best <strong>WhatsApp automation AI providers in India</strong>, Digital Elite Services provides the expertise and technology to help you succeed in today's fast-evolving digital landscape.
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