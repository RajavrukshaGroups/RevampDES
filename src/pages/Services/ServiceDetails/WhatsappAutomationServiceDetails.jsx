import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SidePopup from "../../../components/sidePopup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faGlobe,
  faUsers,
  faSearch,
  faUserPlus,
  faChartBar,
  faRocket,
  faAward,
  faShieldAlt,
  faBolt,
  faCog,
  faLayerGroup,
  faCompass,
  faTachometerAlt,
  faMobileAlt,
  faEnvelope,
  faPaperPlane,
  faClock,
  faCheckCircle,
  faHeadset,
  faBuilding,
  faHeartbeat,
  faShoppingBag,
  faGraduationCap,
  faWallet,
  faMicrochip,
  faThumbsUp,
  faHandshake,
  faFileAlt,
  faPenFancy,
  faFilter,
  faChartPie,
  faChartLine,
  faMousePointer,
  faArrowRight,
  faCopy,
  faBullhorn,
  faEye,
  faBullseye,
  faStar,
  faCrown,
  faLightbulb,
  faFlag,
  faGift,
  faHeart,
  faTrophy,
  faCircleCheck,
  faCircleDot,
  faCircleArrowRight,
  faMessage,
  faPhone,
  faAt,
  faShareAlt
} from '@fortawesome/free-solid-svg-icons';
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
  Layers
} from "lucide-react";
// Import relevant images for the WhatsApp automation service page
import whatsappHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg"; // Replace with relevant image
import whatsappDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg"; // Replace with relevant image
import whatsappDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg"; // Replace with relevant image
import whatsappDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg"; // Replace with relevant image

export default function ServiceDetailsWhatsAppAutomation() {
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
                WhatsApp Business API & <br />
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  Automation Services
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
                src={whatsappHeroImage}
                alt="WhatsApp Business API & Automation Services in Bangalore"
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
                  <h2 className="fw-6 letter-space--3 color-dt-black mb-50">
                    In today's digital-first world, businesses are constantly seeking efficient ways to communicate with their customers. WhatsApp, being one of the most widely used messaging platforms in India, has become a powerful channel for marketing, customer support, and engagement.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Services
                    </span>{" "}
                    stands out for its innovation and performance-driven approach as a top WhatsApp automation API provider in India.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70">
                    With a focus on delivering tailored automation solutions, the company is helping businesses transform how they interact with customers. When discussing the Top WhatsApp automation API Providers in India, one name that stands out for its innovation and performance-driven approach is Digital Elite Services.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Why{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation
                    </span>{" "}
                    is Essential
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Before exploring the list of WhatsApp API providers in India, it's important to understand why automation is critical for modern businesses.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40">
                    WhatsApp automation allows companies to:
                  </div>

                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faBolt} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Respond Instantly</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Respond instantly to customer inquiries and improve satisfaction.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faCog} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Automate Repetitive Tasks</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Automate repetitive communication tasks and save valuable time.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faBullseye} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Run Targeted Campaigns</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Run targeted marketing campaigns that reach the right audience.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faClock} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>24/7 Customer Support</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Provide 24/7 customer support with automated responses.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    List of{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation Companies
                    </span>{" "}
                    in India
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    If you're searching for a reliable list of WhatsApp automation Providers in India, it's important to focus on providers that offer not just tools, but complete solutions.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40">
                    Digital Elite Services has emerged as a leading choice for businesses looking for end-to-end WhatsApp automation. Instead of offering generic features, the company emphasizes customized strategies designed to meet specific business goals.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    Unlike many providers that rely on one-size-fits-all solutions, Digital Elite Services ensures that every automation workflow is aligned with your brand's communication style and customer journey.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Top 10{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation Companies
                    </span>{" "}
                    in India
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    When businesses search for the top 10 WhatsApp automation companies in India, they are often looking for reliability, scalability, and measurable results.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    Digital Elite Services consistently ranks among the top due to its comprehensive offerings and client-focused approach. The company provides everything needed to build, manage, and optimize WhatsApp communication.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Key Offerings of{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Services
                    </span>
                  </h3>

                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        <Bot size={18} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
                        Advanced Chatbot Automation
                      </a>
                      <div className="desc ff-2">
                        Digital Elite Services develops intelligent chatbots that can handle customer queries, guide users through services, and provide instant responses.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
                        Bulk Messaging Solutions
                      </a>
                      <div className="desc ff-2">
                        Businesses can run targeted campaigns with bulk messaging features, ensuring that the right message reaches the right audience at the right time.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        <FontAwesomeIcon icon={faDatabase} style={{ marginRight: "8px", color: "var(--digital-marketing-light)" }} />
                        CRM Integration
                      </a>
                      <div className="desc ff-2">
                        Seamless integration with CRM systems allows businesses to track customer interactions, manage leads, and automate follow-ups efficiently.
                      </div>
                    </div>
                  </div>

                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faUserPlus} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Lead Generation & Nurturing</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Automation workflows help capture leads and nurture them through personalized communication.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faChartBar} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Analytics & Performance Tracking</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          With detailed insights and reporting, businesses can measure campaign performance and optimize strategies.
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
                        src={whatsappDetailImage1}
                        alt="WhatsApp Automation Strategy"
                      />
                    </div>
                    <div className="image">
                      <img
                        loading="lazy"
                        width="410"
                        height="470"
                        src={whatsappDetailImage2}
                        alt="WhatsApp Automation Results"
                      />
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Best{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation Companies
                    </span>{" "}
                    in India
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Choosing the best WhatsApp automation companies in India requires careful evaluation of features, support, and long-term value.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    Digital Elite Services stands out because of its commitment to delivering measurable outcomes rather than just providing software. The company works closely with clients to understand their needs and create customized automation strategies that drive growth.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
                    What Makes Digital Elite Services the Best Choice?
                  </h4>
                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faBullseye} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Tailored Solutions</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Every business gets a personalized automation strategy designed for their specific needs.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faMobileAlt} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>User-Friendly Systems</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Easy-to-use tools that require minimal technical expertise for your team.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faRocket} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Scalable Infrastructure</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Solutions that grow with your business and adapt to increasing demands.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faHeadset} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Expert Support</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Dedicated team to assist at every stage of implementation and beyond.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    How{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Services
                    </span>{" "}
                    Helps Businesses Grow
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Implementing WhatsApp automation is not just about sending messages—it's about building meaningful customer relationships. Digital Elite Services helps businesses achieve this by creating smart, data-driven communication systems.
                  </div>

                  <div className="row g-30 mb-70">
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <MessageCircle size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Improved Customer Engagement</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Automated responses ensure that customers receive instant replies, leading to higher satisfaction and better engagement.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <TrendingUp size={24} style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Increased Sales Conversions</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          With personalized messaging and timely follow-ups, businesses can convert more leads into paying customers.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faBolt} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Efficient Operations</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Automation reduces the need for manual intervention, allowing teams to focus on more strategic tasks.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-30" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px", marginBottom: "20px", height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                          <FontAwesomeIcon icon={faEye} size="lg" style={{ color: "var(--digital-marketing-light)", flexShrink: 0 }} />
                          <h5 className="fw-6" style={{ marginBottom: 0 }}>Better Customer Insights</h5>
                        </div>
                        <p className="ff-2 color-paragraph" style={{ marginLeft: "36px" }}>
                          Detailed analytics provide valuable insights into customer behavior, helping refine marketing strategies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Future of{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      WhatsApp Automation
                    </span>{" "}
                    in India
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    The demand for WhatsApp automation is expected to grow rapidly as more businesses recognize its potential. With advancements in AI and machine learning, automation tools will become even more sophisticated, enabling highly personalized and interactive customer experiences.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    Digital Elite Services is at the forefront of this transformation, continuously evolving its solutions to meet the changing needs of businesses. By adopting the latest technologies, the company ensures that its clients stay ahead in a competitive market.
                  </div>

                  <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
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