import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SidePopup from "../../../components/sidePopup";
import {
  BarChart3,
  Target,
  TrendingUp,
  Bot,
  Brain,
  Database,
  Sparkles,
  Search,
  Rocket,
  Shield,
  FileText,
  Link2,
  MapPin,
  Smartphone,
  ShoppingBag,
  Building2,
  HeartPulse,
  GraduationCap,
  Laptop,
  Hotel,
  Globe,
  Gauge,
  CheckCircle,
  Award,
  Users,
  Clock,
  Zap,
  Eye,
  Compass,
  Layers,
  Code,
  Settings,
  PenTool,
  Mic,
  Video,
  Image,
  Wallet,
  Store,
  Scale,
  HardHat,
  Factory, // Added missing import
} from "lucide-react";
// Import relevant images for the SEO service page
import seoHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
import seoDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
import seoDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
import seoDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

export default function ServiceDetailsSEO() {
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
                Leading <br />
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  SEO Services
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
                src={seoHeroImage}
                alt="Leading SEO Services in Bangalore"
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
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
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
                    In today's competitive digital landscape, having a strong online presence is no longer optional—it's essential. Businesses across industries are competing to capture attention, generate leads, and convert customers online.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Services
                    </span>{" "}
                    steps in as a trusted partner, offering professional SEO services in Bangalore designed to help your business grow organically and sustainably.
                  </h2>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Why{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      SEO Matters
                    </span>{" "}
                    for Your Business
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Search Engine Optimization (SEO) is the backbone of digital marketing. It ensures your website ranks higher on search engines like Google, making it easier for potential customers to find you.
                  </div>
                  
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Eye size={24} />,
                        title: "Increase Website Visibility",
                        desc: "Make your business easily discoverable by potential customers searching online."
                      },
                      {
                        icon: <Users size={24} />,
                        title: "Drive High-Quality Organic Traffic",
                        desc: "Attract visitors who are actively searching for your products or services."
                      },
                      {
                        icon: <Shield size={24} />,
                        title: "Improve Brand Credibility & Trust",
                        desc: "Higher rankings build trust and establish your brand as an industry authority."
                      },
                      {
                        icon: <Rocket size={24} />,
                        title: "Stay Ahead of Competitors",
                        desc: "Outperform competitors in search results and capture more market share."
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
                    Leading{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      SEO Company
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    As a reputed SEO company in Bangalore, Digital Elite Services focuses on delivering customized solutions tailored to your business goals. We understand that every business is unique, which is why we avoid one-size-fits-all strategies and instead craft personalized SEO campaigns.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30">
                    What Sets Us Apart?
                  </h4>
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <BarChart3 size={24} />,
                        title: "Data-Driven Approach",
                        desc: "We rely on in-depth research, analytics, and performance tracking to guide our SEO strategies."
                      },
                      {
                        icon: <Award size={24} />,
                        title: "Experienced SEO Professionals",
                        desc: "Our team stays updated with the latest algorithm changes and industry trends."
                      },
                      {
                        icon: <FileText size={24} />,
                        title: "Transparent Reporting",
                        desc: "You'll receive regular reports detailing keyword rankings, traffic growth, and campaign performance."
                      },
                      {
                        icon: <Shield size={24} />,
                        title: "Ethical SEO Practices",
                        desc: "We follow white-hat SEO techniques that ensure long-term success without risking penalties."
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
                    Comprehensive{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      SEO Services
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Digital Elite Services offers a full suite of SEO services designed to improve your online presence and maximize ROI.
                  </div>

                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Keyword Research & Strategy
                      </a>
                      <div className="desc ff-2">
                        We identify high-impact keywords to ensure your website targets the right audience and drives qualified traffic.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        On-Page SEO Optimization
                      </a>
                      <div className="desc ff-2">
                        We optimize meta tags, header structures, internal linking, URLs, and images for better search visibility.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Technical SEO
                      </a>
                      <div className="desc ff-2">
                        We enhance website speed, mobile responsiveness, and backend performance for improved crawling and indexing.
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <PenTool size={24} />,
                        title: "Content Marketing",
                        desc: "We create engaging, keyword-rich content that attracts users and improves search rankings."
                      },
                      {
                        icon: <Link2 size={24} />,
                        title: "Link Building",
                        desc: "We build high-quality backlinks from authoritative websites to boost domain authority."
                      },
                      {
                        icon: <MapPin size={24} />,
                        title: "Local SEO",
                        desc: "We optimize your Google Business Profile and local listings to increase visibility in local searches."
                      },
                      {
                        icon: <ShoppingBag size={24} />,
                        title: "E-Commerce SEO",
                        desc: "Specialized optimization for product pages, categories, and shopping search visibility."
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
                          src={seoDetailImage1}
                          alt="SEO Strategy Session"
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
                          src={seoDetailImage2}
                          alt="SEO Performance Results"
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
                    Trusted{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      SEO Agency in Bangalore
                    </span>{" "}
                    for All Industries
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Digital Elite Services has worked with clients across various industries, understanding the unique challenges of each sector and creating strategies that deliver real results.
                  </div>

                  {/* Industries We Serve - WITH BOLD TEXT */}
                  <div
                    className="d-flex flex-wrap"
                    style={{
                      gap: "20px 40px",
                      marginBottom: "40px",
                    }}
                  >
                    {[
                      { icon: <ShoppingBag size={20} />, text: "E-commerce" },
                      { icon: <Building2 size={20} />, text: "Real Estate" },
                      { icon: <HeartPulse size={20} />, text: "Healthcare" },
                      { icon: <GraduationCap size={20} />, text: "Education" },
                      { icon: <Laptop size={20} />, text: "Information Technology" },
                      { icon: <Hotel size={20} />, text: "Hospitality" },
                      { icon: <Wallet size={20} />, text: "Finance" },
                      { icon: <Store size={20} />, text: "Retail" },
                      { icon: <Scale size={20} />, text: "Professional Services" },
                      { icon: <HardHat size={20} />, text: "Construction" },
                      { icon: <Rocket size={20} />, text: "Startups" },
                      { icon: <Factory size={20} />, text: "Manufacturing" },
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

                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Our{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        SEO Process
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      We follow a structured and proven SEO process to ensure consistent success.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Search size={24} />,
                          title: "Step 1: Website Audit",
                          desc: "We conduct a comprehensive audit to identify strengths, weaknesses, and opportunities."
                        },
                        {
                          icon: <Compass size={24} />,
                          title: "Step 2: Strategy Development",
                          desc: "Based on insights, we create a tailored SEO strategy aligned with your business objectives."
                        },
                        {
                          icon: <Settings size={24} />,
                          title: "Step 3: Implementation",
                          desc: "Our team executes on-page, technical, and off-page SEO techniques."
                        },
                        {
                          icon: <Gauge size={24} />,
                          title: "Step 4: Monitoring & Optimization",
                          desc: "We continuously track performance and optimize campaigns for better results."
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
                  </div>

                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Benefits of Choosing{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Elite Services
                      </span>
                    </h3>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Globe size={40} />,
                          title: "Increased Online Visibility",
                          desc: "Make your business easily discoverable online."
                        },
                        {
                          icon: <TrendingUp size={40} />,
                          title: "Higher Search Engine Rankings",
                          desc: "Achieve top positions on Google search results."
                        },
                        {
                          icon: <Target size={40} />,
                          title: "More Targeted Traffic",
                          desc: "Attract visitors who are ready to convert."
                        }
                      ].map((item, index) => (
                        <div key={index} className="col-12 col-md-4 d-flex">
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

                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      How SEO Drives{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Long-Term Business Growth
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Unlike paid advertising, SEO delivers long-term value. While paid campaigns stop generating traffic once the budget ends, SEO continues to bring organic visitors to your website over time. This makes SEO one of the most cost-effective digital marketing strategies for businesses of all sizes.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Users size={24} />,
                          title: "Attract Customers Consistently",
                          desc: "Drive ongoing organic traffic without continuous ad spend."
                        },
                        {
                          icon: <Award size={24} />,
                          title: "Build Brand Awareness Organically",
                          desc: "Establish your brand as a trusted industry authority."
                        },
                        {
                          icon: <Sparkles size={24} />,
                          title: "Generate Higher ROI Over Time",
                          desc: "SEO investments compound for sustainable business growth."
                        },
                        {
                          icon: <Globe size={24} />,
                          title: "Increase Website Authority",
                          desc: "Build domain authority through quality content and backlinks."
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
                  </div>

                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Importance of{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Local SEO
                      </span>{" "}
                      for Bangalore Businesses
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Bangalore is one of India's fastest-growing business hubs, with thousands of companies competing for online visibility. Digital Elite Services specializes in local SEO strategies that improve your visibility in location-based searches.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <MapPin size={24} />,
                          title: "Google Business Profile Optimization",
                          desc: "Optimize your profile to appear in local search results and Google Maps."
                        },
                        {
                          icon: <Target size={24} />,
                          title: "Local Keyword Targeting",
                          desc: "Target location-specific keywords to attract nearby customers."
                        },
                        {
                          icon: <CheckCircle size={24} />,
                          title: "Customer Review Management",
                          desc: "Build trust through positive reviews and responsive reputation management."
                        },
                        {
                          icon: <Layers size={24} />,
                          title: "Geo-Targeted SEO Strategies",
                          desc: "Create location-specific content and optimize for local search intent."
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
                  </div>

                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Mobile{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        SEO Optimization
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      With the majority of internet users accessing websites through smartphones, mobile optimization has become essential for SEO success. Google prioritizes mobile-friendly websites in search rankings.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Smartphone size={24} />,
                          title: "Mobile Responsiveness",
                          desc: "Ensure your website adapts perfectly to all screen sizes."
                        },
                        {
                          icon: <Zap size={24} />,
                          title: "Page Speed Optimization",
                          desc: "Optimize loading times for better user experience and rankings."
                        },
                        {
                          icon: <Image size={24} />,
                          title: "Image & Media Optimization",
                          desc: "Compress and optimize images for faster mobile loading."
                        },
                        {
                          icon: <Layers size={24} />,
                          title: "Simplified Navigation",
                          desc: "Improve user experience with intuitive mobile navigation."
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
                  </div>

                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Technical SEO for{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Better Performance
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Technical SEO plays a crucial role in improving how search engines crawl and index your website. Our technical SEO experts analyze and optimize critical aspects of your website.
                    </div>
                    
                    <div
                      className="d-flex flex-wrap"
                      style={{
                        gap: "26px 30px",
                        marginBottom: "20px",
                      }}
                    >
                      {[
                        { icon: <Code size={20} />, text: "Website Architecture & Crawlability" },
                        { icon: <Shield size={20} />, text: "HTTPS Security Implementation" },
                        { icon: <Link2 size={20} />, text: "Broken Link Fixes & Canonical Tags" },
                        { icon: <Gauge size={20} />, text: "Core Web Vitals Optimization" },
                        { icon: <Database size={20} />, text: "Structured Data Implementation" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            minWidth: "220px",
                            flex: "1 1 250px",
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
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      SEO Trends{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Businesses Should Watch
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      The SEO landscape continues to evolve rapidly. Businesses that adapt to changing trends gain a competitive advantage in search rankings.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Mic size={24} />,
                          title: "Voice Search Optimization",
                          desc: "Optimize for conversational keywords as voice assistants become more popular."
                        },
                        {
                          icon: <Brain size={24} />,
                          title: "AI and Search Algorithms",
                          desc: "High-quality content and user intent are more important than ever."
                        },
                        {
                          icon: <Smartphone size={24} />,
                          title: "User Experience Signals",
                          desc: "Fast loading times and mobile usability are key ranking factors."
                        },
                        {
                          icon: <Video size={24} />,
                          title: "Video SEO",
                          desc: "Video content is growing rapidly and can significantly improve engagement."
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
                  </div>

                  {/* Final CTA */}
                  <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
                    <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
                      Get Started with the{" "}
                      <span style={{color:"var(--digital-marketing-light)"}}>
                        Best SEO Services in Bangalore
                      </span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      If you're ready to take your business to the next level, Digital Elite Services is here to help. Our expert team is committed to delivering top-notch SEO services in Bangalore that drive real growth and measurable success.
                    </p>
                    <p className="ff-2 color-paragraph mb-30">
                      As a trusted <strong>SEO agency in Bangalore</strong>, we combine strategic expertise with proven methodologies to deliver impactful results. Whether your goal is improving search rankings, generating leads, or building brand awareness, our team has the experience and dedication to help you succeed.
                    </p>
                    <p className="ff-2 color-paragraph">
                      <strong>Contact Digital Elite Services Today</strong> - Let us help you dominate search engine rankings and grow your business online. Partner with a trusted SEO agency in Bangalore that prioritizes your success.
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