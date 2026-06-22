// import React from "react";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import SidePopup from "../../../components/sidePopup";
// import {
//   Target,
//   TrendingUp,
//   BarChart3,
//   Users,
//   Rocket,
//   Award,
//   DollarSign,
//   Search,
//   Eye,
//   Megaphone,
//   Layers,
//   Compass,
//   Settings,
//   Gauge,
//   Zap,
//   Sparkles,
//   Building2,
//   HeartPulse,
//   ShoppingBag,
//   GraduationCap,
//   Wallet,
//   Cpu,
//   Mail,
//   Phone,
//   UserPlus,
//   Filter,
//   PieChart,
//   LineChart,
//   MousePointer,
//   CheckCircle,
//   Shield,
//   Clock,
//   Headphones,
//   Globe,
//   ThumbsUp,
//   Handshake,
//   Briefcase,
//   FileText,
//   PenTool,
//   Smartphone,
//   Laptop,
//   Monitor,
//   Tablet,
//   ArrowRight,
//   Copy,
//   Users as UsersIcon,
//   Megaphone as MegaphoneIcon,
//   BarChart,
//   Activity,
//   Radio,
//   Send,
//   MessageCircle,
//   Sparkle,
//   Star,
//   Crown,
//   Lightbulb,
//   Flag,
//   Gift,
//   Heart,
//   Award as AwardIcon,
//   Trophy,
//   BadgeCheck,
//   CircleCheck,
//   CircleDot,
//   CircleArrowRight
// } from "lucide-react";
// // Import relevant images for the lead generation service page
// import leadHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg"; // Replace with relevant image
// import leadDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg"; // Replace with relevant image
// import leadDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg"; // Replace with relevant image
// import leadDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg"; // Replace with relevant image

// export default function ServiceDetailsLeadGeneration() {
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
//                 PPC Services in Bangalore – <br />
//                 <span style={{ color: "var(--digital-marketing-light)" }}>
//                   Drive Measurable Growth
//                 </span>{" "}
//                 with Digital Elite Services
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
//                 src={leadHeroImage}
//                 alt="PPC Services in Bangalore"
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
//                         className="category-services-item fw-5 letter-space--2 ff-2 active"
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
//                     In today's competitive digital landscape, businesses need more than just online visibility—they need targeted traffic that converts.{" "}
//                     <span style={{ color: "var(--digital-marketing-light)" }}>
//                       Digital Elite Services
//                     </span>{" "}
//                     specializes in delivering high-impact PPC services in Bangalore that help businesses attract the right audience, generate quality leads, and maximize return on investment.
//                   </h2>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     Pay-Per-Click (PPC) advertising is one of the fastest ways to reach potential customers who are actively searching for your products or services. Whether you are a startup, SME, or an established enterprise, our data-driven strategies ensure your ad spend delivers real business outcomes.
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Trusted{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       PPC Company
//                     </span>{" "}
//                     in Bangalore
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     As a leading PPC company in Bangalore, Digital Elite Services combines strategic planning, advanced analytics, and creative execution to build campaigns that perform. Our team of certified PPC experts understands the nuances of various industries and creates tailored campaigns to suit your business goals.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     We manage campaigns across platforms like Google Ads, Bing Ads, and social media channels to ensure your brand gets maximum exposure. From keyword research and competitor analysis to ad creation and continuous optimization, we handle every aspect of your PPC campaigns.
//                   </div>

//                   <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
//                     What sets us apart?
//                   </h4>
//                   <div className="row g-30 mb-70">
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Search size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Deep Keyword Research</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Aligned with user intent for maximum relevance and conversion.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <PenTool size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>High-Converting Ad Copy</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Creative and compelling ad copy and creatives that drive action.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Target size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Advanced Audience Targeting</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Reach the right people with precision targeting strategies.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Gauge size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Continuous A/B Testing</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Ongoing testing for performance improvement and optimization.
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Result-Driven{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Lead Generation Services
//                     </span>{" "}
//                     in Bangalore
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Generating leads is at the core of every successful business strategy. At Digital Elite Services, we provide comprehensive lead generation services in Bangalore designed to attract, engage, and convert your ideal customers.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     We go beyond basic advertising by creating a full-funnel approach that captures leads at every stage of the buyer journey. From awareness campaigns to retargeting strategies, we ensure your brand stays top-of-mind until conversion.
//                   </div>

//                   <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
//                     Our lead generation approach includes:
//                   </h4>
//                   <div className="row g-30 mb-70">
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Layout size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Landing Page Optimization</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Optimized landing pages designed for higher conversion rates.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Layers size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Funnel-Based Marketing</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Strategic funnel-based strategies to guide users through the buyer journey.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Users size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Audience Segmentation</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Precise audience segmentation and targeting for better results.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Database size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>CRM Integration</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Seamless CRM integration and lead tracking for better management.
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="list-img d-flex g-30 align-items-center mb-70">
//                     <div className="image">
//                       <img
//                         loading="lazy"
//                         width="410"
//                         height="470"
//                         src={leadDetailImage1}
//                         alt="Lead Generation Strategy"
//                       />
//                     </div>
//                     <div className="image">
//                       <img
//                         loading="lazy"
//                         width="410"
//                         height="470"
//                         src={leadDetailImage2}
//                         alt="PPC Campaign Results"
//                       />
//                     </div>
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Performance Marketing Company in Bangalore{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       You Can Trust
//                     </span>
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Digital Elite Services is recognized as a reliable performance marketing company in Bangalore focused on delivering measurable outcomes. Unlike traditional marketing, performance marketing is driven by data, accountability, and ROI.
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     We track every click, impression, and conversion to ensure your campaigns are optimized for maximum efficiency. Our performance marketing strategies are designed to scale your business while minimizing wasted spend.
//                   </div>

//                   <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
//                     Our performance marketing services include:
//                   </h4>
//                   <div className="row g-30 mb-70">
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Search size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Paid Search</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Google Ads & Bing Ads management for maximum visibility.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Megaphone size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Social Media Advertising</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Meta, LinkedIn, Instagram advertising for targeted reach.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Eye size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Display & Remarketing</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Display and remarketing campaigns to re-engage visitors.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <TrendingUp size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Conversion Rate Optimization</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           CRO strategies to maximize conversion rates and ROI.
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Why Choose{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Digital Elite Services
//                     </span>
//                     ?
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Choosing the right digital partner can make all the difference. At Digital Elite Services, we focus on delivering value through strategy, execution, and continuous optimization.
//                   </div>

//                   <div className="row g-30 mb-70">
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <BarChart3 size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Data-Driven Strategies</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           We rely on data and insights rather than guesswork. Every campaign is backed by thorough research and analytics.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Target size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Customized Solutions</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           No two businesses are the same. We create personalized PPC and lead generation strategies tailored to your industry and goals.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Award size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Experienced Team</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Our team consists of skilled professionals with hands-on experience in managing high-performing campaigns across multiple industries.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <FileText size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Transparent Reporting</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           We provide clear and detailed reports so you can track your campaign performance and ROI at any time.
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Our{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Process
//                     </span>
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     At Digital Elite Services, we follow a structured approach to ensure consistent success:
//                   </div>

//                   <div className="list-process-item d-flex justify-content-between mb-70">
//                     <div className="line d-none d-md-block"></div>
//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">01</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         <Users size={18} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
//                         Understanding Your Business
//                       </a>
//                       <div className="desc ff-2">
//                         We begin by understanding your business model, target audience, and goals.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">02</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         <Compass size={18} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
//                         Strategy Development
//                       </a>
//                       <div className="desc ff-2">
//                         Based on insights, we create a customized PPC and lead generation strategy.
//                       </div>
//                     </div>

//                     <div className="process-item-2">
//                       <div className="number ff-2 fw-5 letter-space--2">03</div>
//                       <div className="dot"></div>
//                       <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
//                         <Settings size={18} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
//                         Campaign Setup
//                       </a>
//                       <div className="desc ff-2">
//                         We set up campaigns with optimized keywords, ad copies, and targeting.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row g-30 mb-70">
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Gauge size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Step 4: Optimization & Testing</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           Continuous monitoring and A/B testing help improve campaign performance.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
//                           <Rocket size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           <h5 className="fw-6" style={{ marginBottom: 0 }}>Step 5: Reporting & Scaling</h5>
//                         </div>
//                         <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
//                           We provide detailed reports and scale campaigns based on performance.
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
//                     Industries We{" "}
//                     <span style={{ color: "var(--digital-marketing-blue)" }}>
//                       Serve
//                     </span>
//                   </h3>
//                   <div className="text ff-2 color-paragraph mb-40">
//                     Our expertise spans across multiple industries, including:
//                   </div>
//                   <div className="row g-20" style={{ marginBottom: "40px" }}>
//                     <div className="col-md-6">
//                       <ul className="list-unstyled ff-2 color-paragraph">
//                         <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                           <Building2 size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           Real Estate
//                         </li>
//                         <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                           <HeartPulse size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           Healthcare
//                         </li>
//                         <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                           <ShoppingBag size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           E-commerce
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="col-md-6">
//                       <ul className="list-unstyled ff-2 color-paragraph">
//                         <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                           <GraduationCap size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           Education
//                         </li>
//                         <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                           <Wallet size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           Finance
//                         </li>
//                         <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                           <Cpu size={20} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
//                           Technology
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="text ff-2 color-paragraph mb-70">
//                     No matter your industry, our PPC services in Bangalore are designed to deliver consistent and scalable results.
//                   </div>

//                   <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
//                     <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
//                       Grow Your Business with the{" "}
//                       <span style={{color:"var(--digital-marketing-light)"}}>
//                         Best PPC Company in Bangalore
//                       </span>
//                     </h4>
//                     <p className="ff-2 color-paragraph mb-30">
//                       If you are looking for a reliable <strong>PPC company in Bangalore</strong> that understands your business needs and delivers measurable results, Digital Elite Services is your ideal partner. Our integrated approach to <strong>lead generation services in Bangalore</strong> and performance marketing ensures that your brand reaches the right audience at the right time.
//                     </p>
//                     <p className="ff-2 color-paragraph mb-30">
//                       With a strong focus on ROI and continuous optimization, we help businesses unlock their full potential in the digital space. Ready to take your business to the next level? Partner with Digital Elite Services, a trusted <strong>performance marketing company in Bangalore</strong>, and experience the power of data-driven PPC and lead generation strategies.
//                     </p>
//                     <p className="ff-2 color-paragraph">
//                       <strong>Contact us today</strong> to build campaigns that drive traffic, generate leads, and deliver real growth.
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faChartLine,
  faChartBar,
  faUsers,
  faRocket,
  faAward,
  faSearch,
  faEye,
  faBullhorn,
  faLayerGroup,
  faCompass,
  faCog,
  faTachometerAlt,
  faBolt,
  faBuilding,
  faHeartbeat,
  faShoppingBag,
  faGraduationCap,
  faWallet,
  faMicrochip,
  faFileAlt,
  faPenFancy,
  faUserPlus,
  faFilter,
  faChartPie,
  faMousePointer,
  faArrowRight,
  faCopy,
  faStar,
  faCrown,
  faLightbulb,
  faFlag,
  faGift,
  faHeart,
  faTrophy,
  faCheckCircle,
  faCircleCheck,
  faCircleDot,
  faCircleArrowRight,
  faMessage,
  faPhone,
  faAt,
  faShareAlt,
  faDatabase,
  faGlobe,
  faHeadset,
  faMobileAlt,
  faClock,
  faShieldAlt,
  faHandshake,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons';
import {
  Target,
  TrendingUp,
  Sparkles,
  Smartphone,
  Headphones,
  Layout,
  Send,
  Settings,
  Layers,
  Database,
  Globe,
  Search,
  Users,
  Eye,
  Megaphone,
  Rocket,
  Award
} from "lucide-react";
// Import relevant images for the lead generation service page
import leadHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg"; // Replace with relevant image
import leadDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg"; // Replace with relevant image
import leadDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg"; // Replace with relevant image
import leadDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg"; // Replace with relevant image

export default function ServiceDetailsLeadGeneration() {
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
                PPC Services in Bangalore – <br />
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  Drive Measurable Growth
                </span>{" "}
                with Digital Elite Services
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
                src={leadHeroImage}
                alt="PPC Services in Bangalore"
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
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
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
                    In today's competitive digital landscape, businesses need more than just online visibility—they need targeted traffic that converts.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Services
                    </span>{" "}
                    specializes in delivering high-impact PPC services in Bangalore that help businesses attract the right audience, generate quality leads, and maximize return on investment.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70">
                    Pay-Per-Click (PPC) advertising is one of the fastest ways to reach potential customers who are actively searching for your products or services. Whether you are a startup, SME, or an established enterprise, our data-driven strategies ensure your ad spend delivers real business outcomes.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Trusted{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      PPC Company
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    As a leading PPC company in Bangalore, Digital Elite Services combines strategic planning, advanced analytics, and creative execution to build campaigns that perform. Our team of certified PPC experts understands the nuances of various industries and creates tailored campaigns to suit your business goals.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40">
                    We manage campaigns across platforms like Google Ads, Bing Ads, and social media channels to ensure your brand gets maximum exposure. From keyword research and competitor analysis to ad creation and continuous optimization, we handle every aspect of your PPC campaigns.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
                    What sets us apart?
                  </h4>
                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Deep Keyword Research</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Aligned with user intent for maximum relevance and conversion.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faPenFancy} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>High-Converting Ad Copy</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Creative and compelling ad copy and creatives that drive action.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faBullseye} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Advanced Audience Targeting</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Reach the right people with precision targeting strategies.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faTachometerAlt} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Continuous A/B Testing</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Ongoing testing for performance improvement and optimization.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Result-Driven{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Lead Generation Services
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Generating leads is at the core of every successful business strategy. At Digital Elite Services, we provide comprehensive lead generation services in Bangalore designed to attract, engage, and convert your ideal customers.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40">
                    We go beyond basic advertising by creating a full-funnel approach that captures leads at every stage of the buyer journey. From awareness campaigns to retargeting strategies, we ensure your brand stays top-of-mind until conversion.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
                    Our lead generation approach includes:
                  </h4>
                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Layout size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Landing Page Optimization</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Optimized landing pages designed for higher conversion rates.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faLayerGroup} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Funnel-Based Marketing</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Strategic funnel-based strategies to guide users through the buyer journey.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faUsers} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Audience Segmentation</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Precise audience segmentation and targeting for better results.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faDatabase} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>CRM Integration</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Seamless CRM integration and lead tracking for better management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="list-img d-flex g-30 align-items-center mb-70">
                    <div className="image">
                      <img
                        loading="lazy"
                        width="410"
                        height="470"
                        src={leadDetailImage1}
                        alt="Lead Generation Strategy"
                      />
                    </div>
                    <div className="image">
                      <img
                        loading="lazy"
                        width="410"
                        height="470"
                        src={leadDetailImage2}
                        alt="PPC Campaign Results"
                      />
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Performance Marketing Company in Bangalore{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      You Can Trust
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Digital Elite Services is recognized as a reliable performance marketing company in Bangalore focused on delivering measurable outcomes. Unlike traditional marketing, performance marketing is driven by data, accountability, and ROI.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40">
                    We track every click, impression, and conversion to ensure your campaigns are optimized for maximum efficiency. Our performance marketing strategies are designed to scale your business while minimizing wasted spend.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
                    Our performance marketing services include:
                  </h4>
                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faSearch} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Paid Search</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Google Ads & Bing Ads management for maximum visibility.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faBullhorn} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Social Media Advertising</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Meta, LinkedIn, Instagram advertising for targeted reach.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faEye} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Display & Remarketing</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Display and remarketing campaigns to re-engage visitors.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faChartLine} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Conversion Rate Optimization</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          CRO strategies to maximize conversion rates and ROI.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Why Choose{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Services
                    </span>
                    ?
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Choosing the right digital partner can make all the difference. At Digital Elite Services, we focus on delivering value through strategy, execution, and continuous optimization.
                  </div>

                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faChartBar} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Data-Driven Strategies</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          We rely on data and insights rather than guesswork. Every campaign is backed by thorough research and analytics.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faBullseye} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Customized Solutions</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          No two businesses are the same. We create personalized PPC and lead generation strategies tailored to your industry and goals.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faAward} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Experienced Team</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Our team consists of skilled professionals with hands-on experience in managing high-performing campaigns across multiple industries.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faFileAlt} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Transparent Reporting</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          We provide clear and detailed reports so you can track your campaign performance and ROI at any time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Our{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Process
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    At Digital Elite Services, we follow a structured approach to ensure consistent success:
                  </div>

                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        <FontAwesomeIcon icon={faUsers} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
                        Understanding Your Business
                      </a>
                      <div className="desc ff-2">
                        We begin by understanding your business model, target audience, and goals.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        <FontAwesomeIcon icon={faCompass} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
                        Strategy Development
                      </a>
                      <div className="desc ff-2">
                        Based on insights, we create a customized PPC and lead generation strategy.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        <FontAwesomeIcon icon={faCog} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
                        Campaign Setup
                      </a>
                      <div className="desc ff-2">
                        We set up campaigns with optimized keywords, ad copies, and targeting.
                      </div>
                    </div>
                  </div>

                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faTachometerAlt} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Step 4: Optimization & Testing</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Continuous monitoring and A/B testing help improve campaign performance.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faRocket} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Step 5: Reporting & Scaling</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          We provide detailed reports and scale campaigns based on performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Industries We{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Serve
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Our expertise spans across multiple industries, including:
                  </div>
                  <div className="row g-20" style={{ marginBottom: "40px" }}>
                    <div className="col-md-6">
                      <ul className="list-unstyled ff-2 color-paragraph">
                        <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <FontAwesomeIcon icon={faBuilding} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          Real Estate
                        </li>
                        <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <FontAwesomeIcon icon={faHeartbeat} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          Healthcare
                        </li>
                        <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <FontAwesomeIcon icon={faShoppingBag} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          E-commerce
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled ff-2 color-paragraph">
                        <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <FontAwesomeIcon icon={faGraduationCap} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          Education
                        </li>
                        <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <FontAwesomeIcon icon={faWallet} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          Finance
                        </li>
                        <li className="mb-20" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <FontAwesomeIcon icon={faMicrochip} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          Technology
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    No matter your industry, our PPC services in Bangalore are designed to deliver consistent and scalable results.
                  </div>

                  <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
                    <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
                      Grow Your Business with the{" "}
                      <span style={{color:"var(--digital-marketing-light)"}}>
                        Best PPC Company in Bangalore
                      </span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      If you are looking for a reliable <strong>PPC company in Bangalore</strong> that understands your business needs and delivers measurable results, Digital Elite Services is your ideal partner. Our integrated approach to <strong>lead generation services in Bangalore</strong> and performance marketing ensures that your brand reaches the right audience at the right time.
                    </p>
                    <p className="ff-2 color-paragraph mb-30">
                      With a strong focus on ROI and continuous optimization, we help businesses unlock their full potential in the digital space. Ready to take your business to the next level? Partner with Digital Elite Services, a trusted <strong>performance marketing company in Bangalore</strong>, and experience the power of data-driven PPC and lead generation strategies.
                    </p>
                    <p className="ff-2 color-paragraph">
                      <strong>Contact us today</strong> to build campaigns that drive traffic, generate leads, and deliver real growth.
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