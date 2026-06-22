import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SidePopup from "../../../components/sidePopup";
import {
  Users,
  Target,
  TrendingUp,
  BarChart3,
  Eye,
  Rocket,
  Award,
  DollarSign,
  MessageCircle,
  Megaphone,
  Layers,
  Compass,
  Settings,
  PenTool,
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
  Globe,
  Smartphone,
  Zap,
  CheckCircle,
  Sparkles,
} from "lucide-react";
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// Import relevant images for the social media marketing service page
import socialHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg";
import socialDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg";
import socialDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg";
import socialDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

export default function ServiceDetailsSocialMediaMarketing() {
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
                Get More Leads with Strategic <br />
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  Social Media Marketing
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
                src={socialHeroImage}
                alt="Social Media Marketing Agency in Bangalore"
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
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
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
                    In today's digital-first world, social media has become a powerful tool for businesses to connect with their audience, build brand awareness, and drive measurable growth.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Services
                    </span>{" "}
                    provides result-oriented Social Media Marketing services in Bangalore designed to help businesses stand out in a competitive marketplace.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70">
                    Whether you are a startup, a small business, or an established brand, our tailored strategies ensure that your business reaches the right audience at the right time. With millions of active users across platforms like{" "}
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877F2", margin: "0 4px" }} />
                    Facebook,{" "}
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#E4405F", margin: "0 4px" }} />
                    Instagram,{" "}
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0A66C2", margin: "0 4px" }} />
                    LinkedIn, and{" "}
                    <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2", margin: "0 4px" }} />
                    Twitter, social media marketing is essential. Our team combines creativity, analytics, and industry expertise to deliver campaigns that not only look great but also perform exceptionally.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Leading{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Social Media Marketing Agency
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    As a trusted Social Media Marketing Agency in Bangalore, Digital Elite Services focuses on creating meaningful connections between brands and their audiences. We understand that every business has unique goals, and that's why we craft customized strategies that align with your objectives.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70">
                    Our approach begins with in-depth research and competitor analysis to identify opportunities within your industry. We then develop a content plan that resonates with your target audience while maintaining consistency in your brand voice. From eye-catching visuals to engaging captions, every element is designed to boost engagement and conversions. What sets us apart as a leading social media marketing agency is our commitment to transparency and performance. We provide detailed insights and reports so you can track your campaign's progress and understand the return on your investment.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Comprehensive{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Social Media Marketing Company
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    As a full-service Social Media marketing company in Bangalore, Digital Elite Services offers end-to-end solutions that cover every aspect of social media management.
                  </div>

                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Strategy Development
                      </a>
                      <div className="desc ff-2">
                        We create data-driven social media strategies tailored to your business goals. Whether your aim is brand awareness, lead generation, or customer engagement, we design campaigns that deliver results.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Content Creation
                      </a>
                      <div className="desc ff-2">
                        Content is the backbone of any successful social media campaign. Our creative team develops high-quality graphics, videos, and written content that capture attention and encourage interaction.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Social Media Management
                      </a>
                      <div className="desc ff-2">
                        We handle your social media profiles from start to finish, including posting, monitoring, and responding to customer queries. This ensures your brand maintains a strong and consistent online presence.
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Megaphone size={24} />,
                        title: "Paid Advertising Campaigns",
                        desc: "Our targeted social media advertising campaigns help you reach a wider audience and generate qualified leads. We optimize ads for maximum performance and cost efficiency."
                      },
                      {
                        icon: <BarChart3 size={24} />,
                        title: "Analytics and Reporting",
                        desc: "We track key performance metrics and provide detailed reports to measure the success of your campaigns. This data-driven approach allows us to continuously refine strategies for better outcomes."
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
                          src={socialDetailImage1}
                          alt="Social Media Strategy Session"
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
                          src={socialDetailImage2}
                          alt="Social Media Campaign Results"
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
                    Why Choose{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Services
                    </span>
                    ?
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Choosing the right partner for your social media marketing needs can make a significant difference in your business growth. Here's why Digital Elite Services is the preferred choice for businesses looking for Social Media Marketing services in Bangalore:
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Award size={24} />,
                        title: "Expertise and Experience",
                        desc: "Our team consists of experienced professionals who stay updated with the latest trends and algorithm changes. This ensures that your campaigns remain relevant and effective."
                      },
                      {
                        icon: <Target size={24} />,
                        title: "Customized Solutions",
                        desc: "We don't believe in one-size-fits-all strategies. Every campaign is tailored to meet your specific business needs and target audience."
                      },
                      {
                        icon: <Rocket size={24} />,
                        title: "Results-Driven Approach",
                        desc: "Our focus is on delivering measurable results. From increasing followers to generating leads, we ensure that your investment translates into tangible outcomes."
                      },
                      {
                        icon: <DollarSign size={24} />,
                        title: "Affordable Pricing",
                        desc: "We offer competitive pricing without compromising on quality, making our services accessible to businesses of all sizes."
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
                    Benefits of{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Social Media Marketing
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40">
                    Investing in social media marketing offers numerous advantages for your business:
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Eye size={24} />,
                        title: "Enhanced Brand Awareness",
                        desc: "Reach a larger audience and establish your brand identity."
                      },
                      {
                        icon: <MessageCircle size={24} />,
                        title: "Improved Customer Engagement",
                        desc: "Interact directly with your customers and build strong relationships."
                      },
                      {
                        icon: <TrendingUp size={24} />,
                        title: "Higher Conversion Rates",
                        desc: "Targeted campaigns lead to better lead generation and sales."
                      },
                      {
                        icon: <DollarSign size={24} />,
                        title: "Cost-Effective Marketing",
                        desc: "Compared to traditional advertising, social media offers better ROI."
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
                    At Digital Elite Services, we follow a structured approach to deliver successful campaigns:
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Users size={24} />,
                        title: "Step 1: Understanding Your Business",
                        desc: "We begin by learning about your brand, industry, and goals."
                      },
                      {
                        icon: <Compass size={24} />,
                        title: "Step 2: Market Research",
                        desc: "Analyze competitors and identify trends to create effective strategies."
                      },
                      {
                        icon: <Layers size={24} />,
                        title: "Step 3: Planning and Execution",
                        desc: "Develop and implement campaigns tailored to your objectives."
                      },
                      {
                        icon: <Settings size={24} />,
                        title: "Step 4: Monitoring and Optimization",
                        desc: "Continuously track performance and make improvements."
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
                      Digital Elite Services has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective social media strategies.
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
                      Our industry-specific social media strategies ensure that your brand resonates with the right audience and delivers meaningful results.
                    </div>
                  </div>

                  {/* Final CTA */}
                  <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
                    <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
                      Partner with the{" "}
                      <span style={{color:"var(--digital-marketing-light)"}}>
                        Best Social Media Marketing Agency in Bangalore
                      </span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      Ready to take your social media presence to the next level? Digital Elite Services is here to help you build meaningful connections with your audience and drive real business growth. As a leading <strong>Social Media Marketing Agency in Bangalore</strong>, we combine creativity, strategy, and technology to deliver exceptional results.
                    </p>
                    <p className="ff-2 color-paragraph mb-30">
                      Whether you need help with content creation, paid advertising, or complete social media management, our expert team has the skills and experience to make your brand stand out. We are committed to delivering <strong>Social Media Marketing services in Bangalore</strong> that are tailored to your unique business needs and goals.
                    </p>
                    <p className="ff-2 color-paragraph">
                      <strong>Contact Digital Elite Services Today</strong> - Let's create a social media strategy that drives engagement, builds brand loyalty, and generates measurable results for your business.
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