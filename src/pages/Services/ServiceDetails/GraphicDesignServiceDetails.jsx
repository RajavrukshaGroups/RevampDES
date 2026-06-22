import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SidePopup from "../../../components/sidePopup";
// Import relevant images for the graphic design service page
import graphicHeroImage from "../../../assets/images/serviceDetails/img-page-title-4.jpg"; // Replace with relevant image
import graphicDetailImage1 from "../../../assets/images/serviceDetails/img-services-detail-1.jpg"; // Replace with relevant image
import graphicDetailImage2 from "../../../assets/images/serviceDetails/img-services-detail-2.jpg"; // Replace with relevant image
import graphicDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg"; // Replace with relevant image

export default function ServiceDetailsGraphicDesign() {
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
                Stand Out with Professional <br />
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  Graphic Design Services
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
                src={graphicHeroImage}
                alt="Professional Graphic Design Services in Bangalore"
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
                    Visual identity plays a crucial role in shaping how your
                    brand is perceived. At Digital Elite Services, we take pride
                    in being a leading{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      graphic designing company in Bangalore
                    </span>
                    , delivering innovative and impactful design solutions that
                    help businesses stand out.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70">
                    Whether you are a startup looking to build your brand from
                    scratch or an established company aiming to refresh your
                    visual presence, our expert team of designers is here to
                    bring your ideas to life with creativity and precision. As a
                    trusted graphic designing company in Bangalore, Digital
                    Elite Services stands out for its commitment to quality,
                    creativity, and client satisfaction.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                    Our{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Professional Graphic Designing Services
                    </span>{" "}
                    in Bangalore are crafted to meet the diverse needs of
                    businesses across industries, helping you create designs
                    that not only look visually appealing but also communicate
                    your brand message effectively.
                  </h3>

                  {/* Core Services List - Styled as Process Items */}
                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Logo Design & Brand Identity
                      </a>
                      <div className="desc ff-2">
                        We design unique and memorable logos that reflect your
                        business values and create a lasting impression.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Social Media Creatives
                      </a>
                      <div className="desc ff-2">
                        We design engaging social media posts, banners, and ad
                        creatives that help you connect with your audience.
                      </div>
                    </div>

                    <div className="process-item-2">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Brochure & Flyer Design
                      </a>
                      <div className="desc ff-2">
                        We create professional marketing materials that
                        effectively showcase your products and services.
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
                        src={graphicDetailImage1}
                        alt="Graphic Design Work Sample 1"
                      />
                    </div>
                    <div className="image">
                      <img
                        loading="lazy"
                        width="410"
                        height="470"
                        src={graphicDetailImage2}
                        alt="Graphic Design Work Sample 2"
                      />
                    </div>
                  </div>

                  {/* Additional Services Section */}
                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30">
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
                  <div className="text ff-2 color-paragraph mb-70">
                    We design stunning website graphics, banners, icons, and UI
                    elements that align with your brand identity and improve
                    usability. Our packaging design focuses on both aesthetics
                    and functionality, while our elegant business cards and
                    letterheads reflect professionalism and strengthen your
                    brand image.
                  </div>

                  {/* Why Choose Us / Our Process Section */}
                  <div className="content-detail">
                    <div className="left">
                      <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-50">
                        Why Choose <span style={{ color: "var(--digital-marketing-light)" }}>Digital Elite Services</span> for Graphic Design?
                      </h4>

                      <div className="desc-1 ff-2 mb-50 color-paragraph">
                        <strong>Creative Excellence:</strong> Our team of
                        experienced designers brings fresh ideas and innovative
                        concepts to every project.
                      </div>

                      <div className="desc-1 ff-2 mb-50 color-paragraph">
                        <strong>Customized Solutions:</strong> We offer
                        tailored design solutions that match your specific goals
                        and requirements.
                      </div>

                      <div className="desc-1 ff-2 mb-50 color-paragraph">
                        <strong>Affordable Pricing & Quick Turnaround:</strong>{" "}
                        High-quality design doesn’t have to be expensive. We
                        value your time and ensure timely delivery of projects.
                      </div>

                      <div className="desc-2 ff-2 color-paragraph">
                        <strong>Client-Centric Approach:</strong> Your
                        satisfaction is our priority. We work closely with you
                        throughout the design process to ensure the final output
                        meets your expectations.
                      </div>
                    </div>
                    <div className="right image">
                      <img
                        loading="lazy"
                        width="410"
                        height="540"
                        src={graphicDetailImage3}
                        alt="Digital Elite Services Graphic Design Process"
                      />
                    </div>
                  </div>

                  {/* Our Design Process */}
                  <div className="mt-70">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Our <span style={{ color: "var(--digital-marketing-blue)", }}>
                        Structured Design Process
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      At Digital Elite Services, we follow a structured and
                      collaborative design process to deliver exceptional
                      results.
                    </div>
                    <ul className="list-unstyled ff-2 color-paragraph">
                      <li className="mb-20">
                        <strong>1. Understanding Your Requirements:</strong> We
                        begin by understanding your business, target audience,
                        and design preferences.
                      </li>
                      <li className="mb-20">
                        <strong>2. Research & Concept Development:</strong> Our
                        team conducts research and develops creative concepts
                        tailored to your brand.
                      </li>
                      <li className="mb-20">
                        <strong>3. Design Creation:</strong> We create visually
                        stunning designs using the latest tools and techniques.
                      </li>
                      <li className="mb-20">
                        <strong>4. Feedback & Revisions:</strong> Your feedback
                        is crucial. We refine the designs based on your inputs
                        to achieve perfection.
                      </li>
                      <li>
                        <strong>5. Final Delivery:</strong> Once approved, we
                        deliver high-quality files ready for use across all
                        platforms.
                      </li>
                    </ul>
                  </div>

                  {/* Final CTA */}
                  <div className="mt-70 p-40" style={{ background: "var(--digital-marketing-light-bg)", borderRadius: "12px" }}>
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