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
  Target,
  TrendingUp,
  Sparkles,
  Layout,
  Users,
  Eye,
  Megaphone,
  Search,
  Award,
  BarChart3,
  MousePointer,
  Gauge,
  Database,
  Globe,
  Headphones,
  Zap,
  CheckCircle,
  Layers,
} from "lucide-react";
// Import relevant images for the lead generation service page
import leadHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
import leadDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
import leadDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
import leadDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

export default function ServiceDetailsLeadGeneration() {
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
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Search size={24} />,
                        title: "Deep Keyword Research",
                        desc: "Aligned with user intent for maximum relevance and conversion."
                      },
                      {
                        icon: <MousePointer size={24} />,
                        title: "High-Converting Ad Copy",
                        desc: "Creative and compelling ad copy and creatives that drive action."
                      },
                      {
                        icon: <Target size={24} />,
                        title: "Advanced Audience Targeting",
                        desc: "Reach the right people with precision targeting strategies."
                      },
                      {
                        icon: <Gauge size={24} />,
                        title: "Continuous A/B Testing",
                        desc: "Ongoing testing for performance improvement and optimization."
                      }
                    ].map((item, index) => (
                      <div key={index} className="col-12 col-md-6 d-flex">
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
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Layout size={24} />,
                        title: "Landing Page Optimization",
                        desc: "Optimized landing pages designed for higher conversion rates."
                      },
                      {
                        icon: <Layers size={24} />,
                        title: "Funnel-Based Marketing",
                        desc: "Strategic funnel-based strategies to guide users through the buyer journey."
                      },
                      {
                        icon: <Users size={24} />,
                        title: "Audience Segmentation",
                        desc: "Precise audience segmentation and targeting for better results."
                      },
                      {
                        icon: <Database size={24} />,
                        title: "CRM Integration",
                        desc: "Seamless CRM integration and lead tracking for better management."
                      }
                    ].map((item, index) => (
                      <div key={index} className="col-12 col-md-6 d-flex">
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

                  {/* Image Grid - FIXED with proper responsive alignment */}
                  <div className="row g-4 mb-70">
                    <div className="col-12 col-md-6">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={leadDetailImage1}
                          alt="Lead Generation Strategy"
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
                    <div className="col-12 col-md-6">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={leadDetailImage2}
                          alt="PPC Campaign Results"
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
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Search size={24} />,
                        title: "Paid Search",
                        desc: "Google Ads & Bing Ads management for maximum visibility."
                      },
                      {
                        icon: <Megaphone size={24} />,
                        title: "Social Media Advertising",
                        desc: "Meta, LinkedIn, Instagram advertising for targeted reach."
                      },
                      {
                        icon: <Eye size={24} />,
                        title: "Display & Remarketing",
                        desc: "Display and remarketing campaigns to re-engage visitors."
                      },
                      {
                        icon: <BarChart3 size={24} />,
                        title: "Conversion Rate Optimization",
                        desc: "CRO strategies to maximize conversion rates and ROI."
                      }
                    ].map((item, index) => (
                      <div key={index} className="col-12 col-md-6 d-flex">
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

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <BarChart3 size={24} />,
                        title: "Data-Driven Strategies",
                        desc: "We rely on data and insights rather than guesswork. Every campaign is backed by thorough research and analytics."
                      },
                      {
                        icon: <Target size={24} />,
                        title: "Customized Solutions",
                        desc: "No two businesses are the same. We create personalized PPC and lead generation strategies tailored to your industry and goals."
                      },
                      {
                        icon: <Award size={24} />,
                        title: "Experienced Team",
                        desc: "Our team consists of skilled professionals with hands-on experience in managing high-performing campaigns across multiple industries."
                      },
                      {
                        icon: <CheckCircle size={24} />,
                        title: "Transparent Reporting",
                        desc: "We provide clear and detailed reports so you can track your campaign performance and ROI at any time."
                      }
                    ].map((item, index) => (
                      <div key={index} className="col-12 col-md-6 d-flex">
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
                        Campaign Setup
                      </a>
                      <div className="desc ff-2">
                        We set up campaigns with optimized keywords, ad copies, and targeting.
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Gauge size={24} />,
                        title: "Step 4: Optimization & Testing",
                        desc: "Continuous monitoring and A/B testing help improve campaign performance."
                      },
                      {
                        icon: <Rocket size={24} />,
                        title: "Step 5: Reporting & Scaling",
                        desc: "We provide detailed reports and scale campaigns based on performance."
                      }
                    ].map((item, index) => (
                      <div key={index} className="col-12 col-md-6 d-flex">
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

                  {/* Industries We Serve - WITH BOLD TEXT */}
                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Industries We{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Serve
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Our expertise spans across multiple industries, including:
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
                          className="ff-2 color-paragraph"
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
                      No matter your industry, our PPC services in Bangalore are designed to deliver consistent and scalable results.
                    </div>
                  </div>

                  {/* Final CTA */}
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