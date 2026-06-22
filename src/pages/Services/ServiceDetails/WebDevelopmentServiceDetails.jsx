import React from "react";
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
  Box
} from "lucide-react";
// Import relevant images for the web development service page
import webHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg"; // Replace with relevant image
import webDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg"; // Replace with relevant image
import webDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg"; // Replace with relevant image
import webDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg"; // Replace with relevant image

export default function ServiceDetailsWebDevelopment() {
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
                Web Development Company in <br />
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  Bangalore for Startups & Enterprises
                </span>
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
                src={webHeroImage}
                alt="Web Development Company in Bangalore"
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
                  <h2 className="fw-6 letter-space--3 color-dt-black mb-50">
                    In today's fast-paced digital world, your website is often the first interaction customers have with your brand. A well-designed and high-performing website can significantly influence how users perceive your business.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Services
                    </span>{" "}
                    specializes in creating impactful digital experiences that combine creativity, functionality, and performance. As a trusted UI/UX Design Company in Bangalore and Web Development company in Bangalore, we help businesses establish a strong and lasting online presence.
                  </h2>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    <Palette size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    UI/UX Design Company in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    User experience is the foundation of any successful digital product. As a professional UI/UX Design Company in Bangalore, Digital Elite Services focuses on designing interfaces that are intuitive, engaging, and user-friendly.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    We believe that great design is not just about aesthetics—it's about solving problems and delivering seamless experiences. Our team conducts in-depth research to understand your audience, their needs, and their behavior. This allows us to create designs that guide users naturally and improve overall engagement.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
                    UI/UX Design Services in Bangalore
                  </h4>
                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Users size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>User Research & Competitor Analysis</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <PenTool size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Wireframing & Prototyping</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Laptop size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Website UI/UX Design</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Smartphone size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Mobile-Responsive Interface Design</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Layers size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Interaction & Usability Design</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Search size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>UX Audits & Improvements</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    <Code size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    Web Development Company in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    A strong online presence requires more than just a visually appealing design—it needs a powerful backend that ensures performance, scalability, and security. As a leading Web Development company in Bangalore, Digital Elite Services builds high-quality websites tailored to your business needs.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    We use modern technologies and best practices to develop websites that are fast, secure, and optimized for performance. Our development approach ensures that your website not only looks great but also delivers a seamless user experience across all devices.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
                    Our Expert Web Development Services in Bangalore Include:
                  </h4>
                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Code size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Custom Website Development</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Building2 size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Business & Corporate Websites</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <ShoppingBag size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>E-Commerce Website Development</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Layout size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>CMS-Based Development</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Server size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Web Application Development</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Settings size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>API & Third-Party Integrations</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="list-img d-flex g-30 align-items-center mb-70">
                    <div className="image">
                      <img
                        loading="lazy"
                        width="410"
                        height="470"
                        src={webDetailImage1}
                        alt="Web Development Process"
                      />
                    </div>
                    <div className="image">
                      <img
                        loading="lazy"
                        width="410"
                        height="470"
                        src={webDetailImage2}
                        alt="Web Development Results"
                      />
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    <Palette size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    Creative Web Designing Company in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Design plays a crucial role in capturing attention and retaining users. As a creative Web designing company in Bangalore, Digital Elite Services focuses on crafting visually appealing and strategically structured websites.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40">
                    Our design process ensures that every element—from layout to color schemes—is aligned with your brand identity. We create designs that are not only modern and attractive but also optimized for usability and performance.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
                    Our Web Design Solutions Include:
                  </h4>
                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Monitor size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Responsive Website Design</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Target size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Landing Page Design</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Building2 size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Corporate Website Design</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Grid size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>UI Design for Web Platforms</h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    <Search size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    SEO-Friendly and Performance-Driven Websites
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    In today's competitive digital landscape, having a beautiful website alone is not enough. Your website must also be discoverable on search engines and deliver fast performance. At Digital Elite Services, we create SEO-friendly websites that help businesses improve their online visibility and attract more organic traffic.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    Our development and design teams work together to ensure that every website is optimized for search engines from the ground up. From proper site architecture to mobile optimization and page speed improvements, we follow industry best practices to help your website rank higher on search engine results pages. We also focus heavily on website performance because users expect fast-loading and smooth digital experiences. A slow website can negatively impact user engagement and conversions. That's why we optimize images, streamline code, and implement advanced performance techniques to ensure your website loads quickly across all devices and browsers.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    <ShoppingBag size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    E-Commerce Website Development Solutions
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    For businesses looking to sell products or services online, we provide complete e-commerce website development solutions. Our team creates secure, scalable, and user-friendly online stores designed to maximize customer engagement and increase sales.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    We build e-commerce platforms with intuitive navigation, secure payment gateways, easy product management systems, and seamless checkout experiences. Whether you need a simple online store or a feature-rich e-commerce platform, we deliver customized solutions tailored to your business model. Our e-commerce websites are designed to provide excellent user experiences while making it easier for businesses to manage inventory, orders, and customer interactions efficiently.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    <Smartphone size={28} style={{ color: "var(--digital-marketing-blue)", marginRight: "12px", display: "inline-block" }} />
                    Mobile-Responsive and User-Centric Design
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    With the growing number of mobile users, having a mobile-responsive website is essential for business success. At Digital Elite Services, we prioritize responsive design to ensure your website functions flawlessly on smartphones, tablets, laptops, and desktops.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    Our user-centric design approach focuses on making navigation simple and intuitive. We carefully structure content, buttons, and layouts to guide users naturally through the website. This improves user engagement and encourages visitors to take desired actions such as filling out contact forms, making purchases, or requesting services. By combining responsive design with strategic UI/UX practices, we create websites that offer consistent and enjoyable experiences across all screen sizes.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Our Approach to{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Success
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    At Digital Elite Services, we follow a structured approach to deliver exceptional results:
                  </div>

                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        <Users size={18} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
                        Understanding Your Business
                      </a>
                      <div className="desc ff-2">
                        We begin by analyzing your business goals, target audience, and competitors to create a clear strategy.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        <PenTool size={18} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
                        Planning & Design
                      </a>
                      <div className="desc ff-2">
                        Our UI/UX experts create wireframes and prototypes to visualize the structure and user journey.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        <Code size={18} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
                        Development
                      </a>
                      <div className="desc ff-2">
                        Our developers bring the design to life using advanced technologies and coding standards.
                      </div>
                    </div>
                  </div>

                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Gauge size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Step 4: Testing & Optimization</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          We rigorously test your website for performance, usability, and responsiveness.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Rocket size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Step 5: Launch & Support</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          After a successful launch, we provide ongoing support and updates to ensure optimal performance.
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
                    Choosing the right digital partner can make all the difference. Here's why businesses trust Digital Elite Services:
                  </div>

                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Award size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Expertise & Experience</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Our team brings years of experience in UI/UX design and web development, ensuring high-quality outcomes.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Target size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Tailored Solutions</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          We understand that every business is unique, so we create customized solutions that align with your goals.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Sparkles size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Latest Technologies</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          We stay updated with the latest trends and technologies to deliver modern, future-ready websites.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Zap size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Focus on Performance</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Our websites are optimized for speed, SEO, and user experience, helping you rank better and convert more visitors.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Box size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>End-to-End Services</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          From concept to deployment, we handle every aspect of your digital project.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <Headphones size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Dedicated Client Support</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Our dedicated support team is always available to assist with updates, maintenance, and technical guidance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
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