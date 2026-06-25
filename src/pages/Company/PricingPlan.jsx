import DESLOGO from "../../assets/images/header/DES_logo_white.png";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SidePopup from "../../components/sidePopup";
import PricingHeroImg from "../../assets/images/pricing/img-page-title-2.jpg";
import FrequentQuestionsImage from "../../assets/images/pricing/img-faqs-p-services-2.jpg";

export default function PricingPlan() {
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

        <div className="page-title">
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
          <div className="container w-1810">
            <div className="page-title-content">
              <div className="content left">
                <h1 className="title mb-xl-100">
                  <span style={{ color: "var(--digital-marketing-light)" }}>
                    Plans
                  </span>{" "}
                  built to
                  <br />
                  deliver results
                </h1>
                <div className="breadkcum">
                  <a href="/">Home</a>
                  <span className="icon icon-chevron-right"></span>
                  <span className="breadkcum-active">Pricing Plan</span>
                </div>
              </div>
              <div className="right">
                <div className="image">
                  <img
                    loading="lazy"
                    width="915"
                    height="470"
                    // src="./assets/images/page-title/img-page-title-2.jpg" alt="Image" />
                    src={PricingHeroImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-profilio flat-spacing-1">
          <div className="container">
            <div className="heading-section mb-50 text-center">
              <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                Flexible plans. <span>Powerful outcomes.</span>
              </div>

              <h2 className="title letter-space--3 fw-6 mb-30">
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  Smart pricing{" "}
                </span>
                for{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  smarter results
                </span>
              </h2>

              <div className="desc ff-2 text-body-1 lh-35 fw-5 color-paragraph">
                Our SEO services are designed to help your business achieve
                higher visibility,
                <br />
                increased website traffic, and measurable growth.
              </div>
            </div>
            <div className="list-price-tabs style-2 mb-50">
              <ul className="tab-product" role="tablist">
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab1"
                    data-bs-toggle="tab"
                    role="tab"
                    className="active fw-6 letter-space--3"
                  >
                    Monthly
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab2"
                    data-bs-toggle="tab"
                    role="tab"
                    className="fw-6 letter-space--3 d-flex align-items-center g-7"
                  >
                    Yearly <span className="badge-sale">20% off</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flat-animate-tab left">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab1" role="tabpanel">
                  <div className="row rg-30">
                    <div className="col-sm-6 col-lg-4">
                      <div className="pricing-card style-2">
                        <div className="top-card d-flex align-items-center">
                          <div className="icon">
                            <i className="icon-standard-plan-2"></i>
                          </div>
                          <div className="content-top">
                            <a
                              href="#"
                              className="name-card h5 fw-6 letter-space--3 mb-10"
                            >
                              Standard Plan
                            </a>
                            <p className="text ff-2">
                              Standard Plan is designed for growing businesses
                              looking to expand
                            </p>
                          </div>
                        </div>
                        <div className="middel-card">
                          <div className="price mb-40">
                            <p className="h2 fw-6 letter-space--3">$19.00</p>
                            <span className="fw-6 time ff-2">Month</span>
                          </div>
                          <a
                            href="#"
                            className="tf-btn style-big style-border style-full-w"
                          >
                            <span className="text-btn">Get Started</span>
                            <span className="icon-btn">
                              <i className="icon-arrow-up-right"></i>
                            </span>
                          </a>
                        </div>
                        <div className="bottom-card">
                          <ul className="list-benefit-2">
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Social Media Management
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Basic SEO Setup
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Monthly Performance Report
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Email Support
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Product marketing
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              eCommerce SEO camping
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="pricing-card style-2 active">
                        <div className="top-card d-flex align-items-center">
                          <div className="icon">
                            <i className="icon-growth-package-2"></i>
                          </div>
                          <div className="content-top">
                            <a
                              href="#"
                              className="name-card h5 fw-6 letter-space--3 mb-10"
                            >
                              Growth Package
                            </a>
                            <p className="text ff-2">
                              Growth Package is crafted for businesses ready to
                              scale and maximize impact.
                            </p>
                          </div>
                        </div>
                        <div className="middel-card">
                          <div className="price mb-40">
                            <p className="h2 fw-6 letter-space--3">$39.00</p>
                            <span className="fw-6 time ff-2">Month</span>
                          </div>
                          <a
                            href="#"
                            className="tf-btn style-big style-full-w style-color-dt-light"
                          >
                            <span className="text-btn">Get Started</span>
                            <span className="icon-btn">
                              <i className="icon-arrow-up-right"></i>
                            </span>
                          </a>
                        </div>
                        <div className="bottom-card">
                          <ul className="list-benefit-2">
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Social Media Management
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Basic SEO Setup
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Monthly Performance Report
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Email Support
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Product marketing
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              eCommerce SEO camping
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="pricing-card style-2">
                        <div className="top-card d-flex align-items-center">
                          <div className="icon">
                            <i className="icon-premium-package-2"></i>
                          </div>
                          <div className="content-top">
                            <a
                              href="#"
                              className="name-card h5 fw-6 letter-space--3 mb-10"
                            >
                              Premium Package
                            </a>
                            <p className="text ff-2">
                              Premium Package is designed for businesses seeking
                              maximum impact and full-scale.
                            </p>
                          </div>
                        </div>
                        <div className="middel-card">
                          <div className="price mb-40">
                            <p className="h2 fw-6 letter-space--3">$93.00</p>
                            <span className="fw-6 time ff-2 style-bg-dt-light">
                              Month
                            </span>
                          </div>
                          <a
                            href="#"
                            className="tf-btn style-big style-border style-full-w"
                          >
                            <span className="text-btn">Get Started</span>
                            <span className="icon-btn">
                              <i className="icon-arrow-up-right"></i>
                            </span>
                          </a>
                        </div>
                        <div className="bottom-card">
                          <ul className="list-benefit-2">
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Social Media Management
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Basic SEO Setup
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Monthly Performance Report
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Email Support
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Product marketing
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              eCommerce SEO camping
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="tab2" role="tabpanel">
                  <div className="row rg-30">
                    <div className="col-sm-6 col-lg-4">
                      <div className="pricing-card style-2">
                        <div className="top-card d-flex align-items-center">
                          <div className="icon">
                            <i className="icon-standard-plan-2"></i>
                          </div>
                          <div className="content-top">
                            <a
                              href="#"
                              className="name-card h5 fw-6 letter-space--3 mb-10"
                            >
                              Standard Plan
                            </a>
                            <p className="text ff-2">
                              Standard Plan is designed for growing businesses
                              looking to expand
                            </p>
                          </div>
                        </div>
                        <div className="middel-card">
                          <div className="price mb-40">
                            <p className="h2 fw-6 letter-space--3">$39.00</p>
                            <span className="fw-6 time ff-2">Year</span>
                          </div>
                          <a
                            href="#"
                            className="tf-btn style-big style-border style-full-w"
                          >
                            <span className="text-btn">Get Started</span>
                            <span className="icon-btn">
                              <i className="icon-arrow-up-right"></i>
                            </span>
                          </a>
                        </div>
                        <div className="bottom-card">
                          <ul className="list-benefit-2">
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Social Media Management
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Basic SEO Setup
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Monthly Performance Report
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Email Support
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Product marketing
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              eCommerce SEO camping
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="pricing-card style-2 active">
                        <div className="top-card d-flex align-items-center">
                          <div className="icon">
                            <i className="icon-growth-package-2"></i>
                          </div>
                          <div className="content-top">
                            <a
                              href="#"
                              className="name-card h5 fw-6 letter-space--3 mb-10"
                            >
                              Growth Package
                            </a>
                            <p className="text ff-2">
                              Growth Package is crafted for businesses ready to
                              scale and maximize impact.
                            </p>
                          </div>
                        </div>
                        <div className="middel-card">
                          <div className="price mb-40">
                            <p className="h2 fw-6 letter-space--3">$79.00</p>
                            <span className="fw-6 time ff-2">Year</span>
                          </div>
                          <a
                            href="#"
                            className="tf-btn style-big style-full-w style-color-dt-light"
                          >
                            <span className="text-btn">Get Started</span>
                            <span className="icon-btn">
                              <i className="icon-arrow-up-right"></i>
                            </span>
                          </a>
                        </div>
                        <div className="bottom-card">
                          <ul className="list-benefit-2">
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Social Media Management
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Basic SEO Setup
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Monthly Performance Report
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Email Support
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Product marketing
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              eCommerce SEO camping
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="pricing-card style-2">
                        <div className="top-card d-flex align-items-center">
                          <div className="icon">
                            <i className="icon-premium-package-2"></i>
                          </div>
                          <div className="content-top">
                            <a
                              href="#"
                              className="name-card h5 fw-6 letter-space--3 mb-10"
                            >
                              Premium Package
                            </a>
                            <p className="text ff-2">
                              Premium Package is designed for businesses seeking
                              maximum impact and full-scale.
                            </p>
                          </div>
                        </div>
                        <div className="middel-card">
                          <div className="price mb-40">
                            <p className="h2 fw-6 letter-space--3">$193.00</p>
                            <span className="fw-6 time ff-2 style-bg-dt-light">
                              Year
                            </span>
                          </div>
                          <a
                            href="#"
                            className="tf-btn style-big style-border style-full-w"
                          >
                            <span className="text-btn">Get Started</span>
                            <span className="icon-btn">
                              <i className="icon-arrow-up-right"></i>
                            </span>
                          </a>
                        </div>
                        <div className="bottom-card">
                          <ul className="list-benefit-2">
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Social Media Management
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Basic SEO Setup
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Monthly Performance Report
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Email Support
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              Product marketing
                            </li>
                            <li className="benefit-2-item text-body-2 ff-2 fw-5 lh-100">
                              eCommerce SEO camping
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-faqs p-services-2 flat-spacing-3">
          <div className="container">
            <div className="heading-section text-center mb-70">
              <div className="sub-title h5 mb-15 letter-space--2 fw-5">
                Questions & <span>Answers</span>
              </div>
              <h2 className="title letter-space--3 fw-6">
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  SEO
                </span>
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  {" "}
                  insights
                </span>{" "}
                & frequently
                <br /> asked{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  questions
                </span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="wg-according" id="According1">
                  <div
                    className="according-item-2 style-icon-bg-blue mb-20"
                    style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according1"
                        data-bs-toggle="collapse"
                        className="title-according h6 fw-6 letter-space--3 collapsed"
                      >
                        <span className="text-title">
                          1. What’s included in each pricing plan?
                        </span>
                        <span className="icon">
                          <span></span>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according1"
                      className="collapse"
                      data-bs-parent="#According1"
                    >
                      <div className="according-content">
                        <p className="text ff-2" style={{ color: "#ffffff" }}>
                          Yes! Our plans are flexible. You can upgrade,
                          downgrade, or
                          <br />
                          customize your package anytime as your business needs
                          evolve.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item-2 style-icon-bg-blue mb-20"
                    style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according2"
                        data-bs-toggle="collapse"
                        className="title-according h6 fw-6 letter-space--3"
                      >
                        <span className="text-title">
                          2. Can I upgrade or change my plan later?
                        </span>
                        <span className="icon">
                          <span></span>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according2"
                      className="collapse show"
                      data-bs-parent="#According1"
                    >
                      <div className="according-content">
                        <p className="text ff-2" style={{ color: "#ffffff" }}>
                          Yes! Our plans are flexible. You can upgrade,
                          downgrade, or
                          <br />
                          customize your package anytime as your business needs
                          evolve.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item-2 style-icon-bg-blue mb-20"
                    style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border:"none",
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according3"
                        data-bs-toggle="collapse"
                        className="title-according h6 fw-6 letter-space--3 collapsed"
                      >
                        <span className="text-title">
                          3. Are there any hidden fees?
                        </span>
                        <span className="icon">
                          <span></span>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according3"
                      className="collapse"
                      data-bs-parent="#According1"
                    >
                      <div className="according-content">
                        <p className="text ff-2" style={{ color: "#ffffff" }}>
                          Yes! Our plans are flexible. You can upgrade,
                          downgrade, or
                          <br />
                          customize your package anytime as your business needs
                          evolve.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item-2 style-icon-bg-blue mb-20"
                    style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border:"none",
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according4"
                        data-bs-toggle="collapse"
                        className="title-according h6 fw-6 letter-space--3 collapsed"
                      >
                        <span className="text-title">
                          4. How do I know which plan is right?
                        </span>
                        <span className="icon">
                          <span></span>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according4"
                      className="collapse"
                      data-bs-parent="#According1"
                    >
                      <div className="according-content">
                        <p className="text ff-2" style={{ color: "#ffffff" }}>
                          Yes! Our plans are flexible. You can upgrade,
                          downgrade, or
                          <br />
                          customize your package anytime as your business needs
                          evolve.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item-2 style-icon-bg-blue"
                    style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border:"none"
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according5"
                        data-bs-toggle="collapse"
                        className="title-according h6 fw-6 letter-space--3 collapsed"
                      >
                        <span className="text-title">
                          5. Do you offer custom packages?
                        </span>
                        <span className="icon">
                          <span></span>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according5"
                      className="collapse"
                      data-bs-parent="#According1"
                    >
                      <div className="according-content">
                        <p className="text ff-2" style={{ color: "#ffffff" }}>
                          Yes! Our plans are flexible. You can upgrade,
                          downgrade, or
                          <br />
                          customize your package anytime as your business needs
                          evolve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image">
                  <img
                    loading="lazy"
                    width="570"
                    height="670"
                    // src="./assets/images/section/img-faqs-p-services-2.jpg" alt="Image" />
                    src={FrequentQuestionsImage}
                  />
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
          <div className="canvas-header" style={{backgroundColor: "#1c1c1c", margin: "-15px -15px 15px -15px", padding: "15px"}}>
            <a href="#" className="logo-site">
              <img src={DESLOGO} alt="Digital Elite Service" className="des-logo" style={{maxWidth: "150px"}} />
            </a>
            <span
              className="icon icon-close" style={{color: "white"}} data-bs-dismiss="offcanvas"
            ></span>
          </div>
          <div className="canvas-body">
            <div className="mb-content-top">
              <ul className="nav-ul-mb" id="wrapper-menu-navigation"></ul>
            </div>
          </div>
          <div className="canvas-bottom"></div>
        </div>
      </div>

      {/* <div className="modal fade modalRight pop-up-menu-mobile" id="pop-up-sidebar">
        <div className="modal-dialog" role="document">
            <div className="modal-content modal-sidebar">
                <div className="sidebar-header d-flex align-items-center justify-content-between">
                    <a href="/" className="logo-sidebar">
                        <img src="./assets/images/logo/logo-2.svg" alt="" />
                    </a>
                    <span className="icon icon-close-popup" data-bs-dismiss="modal"><i className="icon-x-circle"></i></span>
                </div>
                <div className="sidebar-content mb-70">
                    <p className="h5 title fw-6">
                        Learn About Us
                    </p>
                    <p className="text text-body-2 ff-2 mb-70">
                        We are a results-driven digital marketing agency dedicated to helping brands grow, connect, and
                        thrive in the digital world. By combining data-driven strategy, creative storytelling, and the
                        latest marketing technologies
                    </p>
                    <div className="list-img d-flex align-items-center g-20">
                        <div className="img">
                            <img loading="lazy" width="115" height="115"
                                src="./assets/images/widget/pop-up-siderbar-1.jpg" alt="Image" />
                        </div>
                        <div className="img">
                            <img loading="lazy" width="115" height="115"
                                src="./assets/images/widget/pop-up-siderbar-2.jpg" alt="Image" />
                        </div>
                        <div className="img">
                            <img loading="lazy" width="115" height="115"
                                src="./assets/images/widget/pop-up-siderbar-3.jpg" alt="Image" />
                        </div>
                        <div className="img">
                            <img loading="lazy" width="115" height="115"
                                src="./assets/images/widget/pop-up-siderbar-4.jpg" alt="Image" />
                        </div>
                    </div>
                </div>
                <div className="sidebar-content mb-70">
                    <p className="h5 title fw-6">
                        Contact Us
                    </p>
                    <ul>
                        <li className="contact-list-item">
                            <a href="#" className="text-body-2 ff-2">245 Park Avenue, Suite 300 New York</a>
                        </li>
                        <li className="contact-list-item">
                            <a href="#" className="text-body-2 ff-2">supporttech@gmail.com</a>
                        </li>
                        <li className="contact-list-item">
                            <a href="#" className="text-body-2 ff-2">+1 (200) 555-876</a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-content newsletter-form">
                    <p className="h5 title fw-6">
                        Newsletter
                    </p>
                    <p className="text ff-2 mb-30">
                        Stay ahead in the digital world by subscribing to our newsletter.
                    </p>
                    <form action="#" className="form-newsletter">
                        <fieldset className="d-flex align-items-center flex-wrap g-10">
                            <input type="text" name="email-input" id="email-input" className="input-newsletter flex-grow-1"
                                placeholder="Email address" />
                            <button className="tf-btn style-big style-color-dt-blue">
                                <span className="text-btn">Subscribe</span>
                                <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div> */}

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
