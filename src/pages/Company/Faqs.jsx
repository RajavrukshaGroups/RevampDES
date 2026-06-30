import DESLOGO from "../../assets/images/header/DES_logo_white.png";
import React, { useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SidePopup from "../../components/sidePopup";
import FaqsImage from "../../assets/images/faqs/img-page-title1.png";

export default function Faqs() {
  // Create refs for each section
  const generalQuestionsRef = useRef(null);
  const pricingPackageRef = useRef(null);
  const privacyPolicyRef = useRef(null);
  const serviceSolutionsRef = useRef(null);
  const termsConditionsRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const yOffset = -100; // Offset for fixed header
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
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
                    Everything{" "}
                  </span>
                  you
                  <br />
                  need to{" "}
                  <span style={{ color: "var(--digital-marketing-ligh)" }}>
                    know
                  </span>
                </h1>
                <div className="breadkcum">
                  <a href="/">Home</a>
                  <span className="icon icon-chevron-right"></span>
                  <span className="breadkcum-active">FAQs</span>
                </div>
              </div>
              <div className="right">
                <div className="image">
                  <img
                    loading="lazy"
                    width="915"
                    height="470"
                    src={FaqsImage}
                    alt="FAQs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-faqs p-faqs flat-spacing-1">
          <div className="container">
            <div className="row rg-30">
              <div className="col-xl-3">
                <div className="tf-sidebar sidebar-filter right sidebar-fix">
                  <div className="header-fillter d-flex justify-content-between align-items-center d-xl-none mb-30">
                    <p className="title h3 fw-6">Filter</p>
                    <span className="icon-close close-filter"></span>
                  </div>
                  <div className="faq-card mb-30">
                    <a
                      href="#"
                      className="faqs-items text-body-1 lh-100 fw-5 letter-space--3"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(generalQuestionsRef);
                      }}
                    >
                      General Questions
                    </a>
                    <a
                      href="#"
                      className="faqs-items text-body-1 lh-100 fw-5 letter-space--3"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(pricingPackageRef);
                      }}
                    >
                      Pricing Package
                    </a>
                    <a
                      href="#"
                      className="faqs-items text-body-1 lh-100 fw-5 letter-space--3"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(serviceSolutionsRef);
                      }}
                    >
                      Service & Solutions
                    </a>
                    <a
                      href="#"
                      className="faqs-items text-body-1 lh-100 fw-5 letter-space--3"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(privacyPolicyRef);
                      }}
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="faqs-items text-body-1 lh-100 fw-5 letter-space--3"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(termsConditionsRef);
                      }}
                    >
                      Terms & Conditions
                    </a>
                  </div>

                  <div className="wg-cta mb-30">
                    <div className="image">
                      <img
                        loading="lazy"
                        width="300"
                        height="370"
                        src="./assets/images/widget/img-bg-cta-2.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="top-content-wg">
                      <p className="h6 sub-title fw-5 letter-space--2">
                        Join Our <span className="fst-italic">Team</span>
                      </p>
                      <p className="h3 title fw-6 letter-space--3">
                        Looking for a
                        <br />
                        new Positions?
                      </p>
                    </div>
                    <div className="bottom-btn">
                      <a
                        href="/contact"
                        className="tf-btn style-color-dt-light"
                      >
                        <span className="text-btn">Join Now</span>
                        <span className="icon-btn">
                          <i className="icon-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="wg-cta">
                    <div className="image">
                      <img
                        loading="lazy"
                        width="300"
                        height="370"
                        src="./assets/images/widget/img-bg-cta-3.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="top-content-wg">
                      <p className="h6 sub-title fw-5 letter-space--2">
                        Get a <span className="fst-italic">Quote</span>
                      </p>
                      <p className="h3 title fw-6 letter-space--3">
                        Have any idea or
                        <br />
                        questions ?
                      </p>
                    </div>
                    <div className="bottom-btn">
                      <a href="/contact" className="tf-btn ">
                        <span className="text-btn">Get a Quote</span>
                        <span className="icon-btn">
                          <i className="icon-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-9">
                {/* General Questions Section */}
                <div
                  ref={generalQuestionsRef}
                  className="box-faqs mb-70"
                  id="general-questions"
                >
                  <p className="h3 title fw-6 letter-space--3">
                    General Questions
                  </p>

                  <div className="wg-according" id="According1">
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#according1"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            1. What's included in each pricing plan?
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
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
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
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#according3"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            3. Do you work with small businesses or only large
                            companies?
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
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#according4"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            4. How do you measure success?
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
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue">
                      <p className="header-according">
                        <a
                          href="#according5"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            5. Can I customize a marketing package?
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
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Package Section */}
                <div
                  ref={pricingPackageRef}
                  className="box-faqs mb-70"
                  id="pricing-package"
                >
                  <p className="h3 title fw-6 letter-space--3">
                    Pricing Package
                  </p>

                  <div className="wg-according" id="According2">
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#according-1"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            1. What pricing plans do you offer?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="according-1"
                        className="collapse"
                        data-bs-parent="#According2"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#according-2"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
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
                        id="according-2"
                        className="collapse"
                        data-bs-parent="#According2"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#according-3"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            3. Are there any setup or hidden fees?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="according-3"
                        className="collapse"
                        data-bs-parent="#According2"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#according-4"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            4. Do you offer custom pricing?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="according-4"
                        className="collapse"
                        data-bs-parent="#According2"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue">
                      <p className="header-according">
                        <a
                          href="#according-5"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            5. What payment methods do you accept?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="according-5"
                        className="collapse"
                        data-bs-parent="#According2"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Yes, you can upgrade or change your plan at any
                            time. Simply go to your account settings, choose the
                            new plan that suits your needs, and the changes will
                            take effect immediately (or at the start of your
                            next billing cycle, depending on your plan).
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Flexible Plans</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                User-Friendly Interface
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Reliable Support
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Privacy Policy Section */}
                <div
                  ref={privacyPolicyRef}
                  className="box-faqs mb-70"
                  id="privacy-policy"
                >
                  <p className="h3 title fw-6 letter-space--3">
                    Privacy Policy
                  </p>

                  <div className="wg-according" id="According3">
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#According-1"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            1. What information do you collect?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-1"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Digital Elite Service collects information that you
                            voluntarily provide, including your name, email
                            address, phone number, company details, and
                            communication records when you contact us through
                            our website, forms, or support channels.
                          </p>

                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Name & Contact Details
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Company Information
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Inquiry & Communication Records
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#According-2"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            2. How do you use my information?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-2"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            We use your information to operate our services,
                            improve website performance, provide customer
                            support, personalize user experiences, communicate
                            updates, and deliver marketing campaigns relevant to
                            your interests.
                          </p>

                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Service Delivery
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Marketing & Communication
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Website Improvements
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#According-3"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            3. Do you share my personal data with third parties?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-3"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            We do not sell your personal information. Data may
                            be shared only with trusted service providers such
                            as hosting partners, analytics platforms, payment
                            processors, or legal authorities when required by
                            law.
                          </p>

                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Hosting Providers
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Analytics Services
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Legal Compliance
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#According-4"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            4. How do you protect my data?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-4"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Digital Elite Service implements industry-standard
                            security measures, including secure servers, access
                            controls, encryption technologies, and regular
                            monitoring to protect your personal information.
                            While we strive for maximum security, no internet
                            transmission can be guaranteed 100% secure.
                          </p>

                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Encrypted Connections
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Secure Infrastructure
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Access Control Measures
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue">
                      <p className="header-according">
                        <a
                          href="#According-5"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            5. Do you use cookies?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-5"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Yes. We use cookies, web beacons, and analytics
                            tools such as Google Analytics to improve user
                            experience, understand visitor behavior, and
                            optimize website performance. You may disable
                            cookies through your browser settings, although some
                            features may not function properly.
                          </p>

                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Google Analytics
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Cookies & Web Beacons
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Performance Monitoring
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-50 p-30 rounded-12">
                    <h5 className="mb-15 fw-6">Your Privacy Rights</h5>

                    <p className="ff-2 color-paragraph mb-10">
                      You may request access, correction, deletion, or
                      portability of your personal information in accordance
                      with applicable privacy laws, including GDPR and CCPA
                      regulations.
                    </p>

                    <p className="ff-2 color-paragraph">
                      This Privacy Policy is governed by the laws of India and
                      falls under the jurisdiction of Bengaluru, Karnataka.
                    </p>
                  </div>
                </div>

                {/* Terms and Conditions*/}
                <div
                  ref={termsConditionsRef}
                  className="box-faqs mb-70"
                  id="terms-conditions"
                >
                  <p className="h3 title fw-6 letter-space--3">
                    Terms & Conditions
                  </p>

                  <div className="wg-according" id="According3">
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#According-1"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            1. Use of Our Services
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-1"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            By accessing and using Digital Elite Service, you
                            confirm that you are at least 18 years old and agree
                            to use our website and services only for lawful
                            purposes. Any misuse, unauthorized access, or
                            violation of applicable laws may result in
                            suspension or termination of services.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#According-2"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            2. Service Agreements & Payments
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-2"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Project scope, timelines, deliverables, and pricing
                            are defined through formal proposals, quotations, or
                            agreements. Failure to make payments within agreed
                            timelines may result in delayed delivery or
                            suspension of services.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#According-3"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            3. Intellectual Property Rights
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-3"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            All content, branding elements, graphics, website
                            materials, software, and intellectual property
                            displayed on this website are owned by Digital Elite
                            Service unless otherwise stated. Unauthorized
                            reproduction, distribution, or modification is
                            strictly prohibited.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#According-4"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            4. Limitation of Liability
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-4"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Digital Elite Service shall not be liable for any
                            indirect, incidental, consequential, or special
                            damages arising from the use of our services. We do
                            not guarantee specific rankings, traffic levels,
                            sales results, or uninterrupted service
                            availability.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue">
                      <p className="header-according">
                        <a
                          href="#According-5"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            5. Termination & Governing Law
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="According-5"
                        className="collapse"
                        data-bs-parent="#According3"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            We reserve the right to terminate or suspend
                            services if these Terms & Conditions are violated.
                            These terms are governed by the laws of India and
                            subject to the exclusive jurisdiction of courts
                            located in Bengaluru, Karnataka.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-50 p-30 rounded-12">
                    <h5 className="mb-15 fw-6">Additional Terms</h5>

                    <p className="ff-2 color-paragraph mb-10">
                      By engaging with Digital Elite Service, you agree to our
                      policies regarding confidentiality, non-solicitation,
                      dispute resolution, third-party tools, force majeure
                      events, and service-related communications.
                    </p>

                    <p className="ff-2 color-paragraph">
                      These Terms & Conditions constitute the entire agreement
                      between Digital Elite Service and its clients unless
                      superseded by a separate written contract.
                    </p>
                  </div>
                </div>

                {/* Service & Solutions Section */}
                <div
                  ref={serviceSolutionsRef}
                  className="box-faqs"
                  id="service-solutions"
                >
                  <p className="h3 title fw-6 letter-space--3">
                    Service & Solutions
                  </p>

                  <div className="wg-according" id="According4">
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#Service-1"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            1. What digital marketing services do you offer?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="Service-1"
                        className="collapse"
                        data-bs-parent="#According4"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            We offer a comprehensive range of digital marketing
                            services including SEO, PPC, Social Media Marketing,
                            Content Marketing, Web Development, Graphic Design,
                            Lead Generation, and WhatsApp Automation. Each
                            service is tailored to meet your specific business
                            goals.
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">SEO Services</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">PPC Advertising</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Social Media Marketing
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#Service-2"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            2. How long does it take to see results?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="Service-2"
                        className="collapse"
                        data-bs-parent="#According4"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Results vary depending on the service. SEO typically
                            takes 3-6 months to show significant results, while
                            PPC campaigns can generate immediate traffic. We
                            provide regular updates and reports to track your
                            progress.
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Regular Reporting
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Transparent Tracking
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Continuous Optimization
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#Service-3"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            3. Do you offer custom solutions for specific
                            industries?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="Service-3"
                        className="collapse"
                        data-bs-parent="#According4"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Yes, we specialize in creating custom solutions for
                            various industries including Real Estate,
                            Healthcare, E-commerce, Education, Finance, and
                            Technology. Our team understands the unique
                            challenges and opportunities in each sector.
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Industry Expertise
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Tailored Strategies
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Proven Results</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue mb-20">
                      <p className="header-according">
                        <a
                          href="#Service-4"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            4. How do you ensure the quality of your services?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="Service-4"
                        className="collapse"
                        data-bs-parent="#According4"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            We maintain high quality standards through rigorous
                            testing, continuous learning, and staying updated
                            with the latest industry trends. Our team follows
                            best practices and uses advanced tools to deliver
                            exceptional results.
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Quality Assurance
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Best Practices</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Continuous Improvement
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="according-item-2 style-icon-bg-blue">
                      <p className="header-according">
                        <a
                          href="#Service-5"
                          data-bs-toggle="collapse"
                          className="title-according h6 fw-6 letter-space--3 collapsed"
                        >
                          <span className="text-title">
                            5. Can I get a free consultation?
                          </span>
                          <span className="icon">
                            <span></span>
                          </span>
                        </a>
                      </p>
                      <div
                        id="Service-5"
                        className="collapse"
                        data-bs-parent="#According4"
                      >
                        <div className="according-content">
                          <p className="text ff-2 mw-762">
                            Absolutely! We offer a free consultation to
                            understand your business needs, goals, and
                            challenges. This helps us recommend the right
                            solutions and create a strategy that works for you.
                          </p>
                          <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">
                                Free Consultation
                              </span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">No Obligation</span>
                            </li>
                            <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                              <i className="icon-check fs-24"></i>
                              <span className="fw-5 ff-2">Expert Advice</span>
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

        <button id="filterShop" className="fillter-btn style-fixed d-xl-none">
          <i className="icon-sidebar"></i>
        </button>

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
