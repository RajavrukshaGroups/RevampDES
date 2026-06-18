import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidePopup from '../../components/sidePopup';
import FaqsImage from '../../assets/images/faqs/img-page-title.jpg';

export default function Faqs() {
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
                            <span style={{color:"var(--digital-marketing-light)"}}>Everything </span>you
                            <br />need to <span style={{color:"var(--digital-marketing-light)"}}>know</span>
                        </h1>
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">FAQs</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="image">
                            <img loading="lazy" width="915" height="470"
                                //src="./assets/images/page-title/img-page-title.jpg" alt="Image" />
                                src={FaqsImage} alt="FAQs"/>
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
                            <div
                                className="header-fillter d-flex justify-content-between align-items-center d-xl-none mb-30">
                                <p className="title h3 fw-6">
                                    Fillter
                                </p>
                                <span className="icon-close close-filter"></span>
                            </div>
                            <div className="faq-card mb-30">
                                <a href="#" className="faqs-items text-body-1 lh-100 fw-5 letter-space--3">General
                                    Questions</a>
                                <a href="#" className="faqs-items text-body-1 lh-100 fw-5 letter-space--3">Pricing
                                    Package</a>
                                <a href="#" className="faqs-items text-body-1 lh-100 fw-5 letter-space--3">Privacy
                                    policy</a>
                                <a href="#" className="faqs-items text-body-1 lh-100 fw-5 letter-space--3">Service &
                                    Solutions</a>
                            </div>

                            <div className="wg-cta mb-30">
                                <div className="image">
                                    <img loading="lazy" width="300" height="370"
                                        src="./assets/images/widget/img-bg-cta-2.jpg" alt="Image" />
                                </div>
                                <div className="top-content-wg">
                                    <p className="h6 sub-title fw-5 letter-space--2">
                                        Join Our <span className="fst-italic">Team</span>
                                    </p>
                                    <p className="h3 title fw-6 letter-space--3">
                                        Looking for a
                                        <br />new Positions?
                                    </p>

                                </div>
                                <div className="bottom-btn">
                                    <a href="/contact" className="tf-btn style-color-dt-light">
                                        <span className="text-btn">Join Now</span>
                                        <span className="icon-btn">
                                            <i className="icon-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="wg-cta">
                                <div className="image">
                                    <img loading="lazy" width="300" height="370"
                                        src="./assets/images/widget/img-bg-cta-3.jpg" alt="Image" />
                                </div>
                                <div className="top-content-wg">
                                    <p className="h6 sub-title fw-5 letter-space--2">
                                        Get a <span className="fst-italic">Quote</span>
                                    </p>
                                    <p className="h3 title fw-6 letter-space--3">
                                        Have any idea or
                                        <br />questions ?
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
                        <div className="box-faqs mb-70">
                            <p className="h3 title fw-6 letter-space--3">
                                General Questions
                            </p>

                            <div className="wg-according" id="According1">
                                <div className="according-item-2 style-icon-bg-blue mb-20"  >
                                    <p className="header-according">
                                        <a href="#according1" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                1. What’s included in each pricing plan?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according1" className="collapse" data-bs-parent="#According1">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762" >
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#according2" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3">
                                            <span className="text-title">
                                                2. Can I upgrade or change my plan later?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according2" className="collapse show" data-bs-parent="#According1">
                                        <div className="according-content" >
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#according3" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                3. Do you work with small businesses or only large companies?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according3" className="collapse" data-bs-parent="#According1">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#according4" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                4. How do you measure success?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according4" className="collapse" data-bs-parent="#According1">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24" style={{color: "#ffffff"}}></i>
                                                    <span className="fw-5 ff-2" style={{color: "#ffffff"}}>Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue">
                                    <p className="header-according">
                                        <a href="#according5" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                5. Can I customize a marketing package?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according5" className="collapse" data-bs-parent="#According1">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-faqs mb-70">
                            <p className="h3 title fw-6 letter-space--3">
                                Pricing Package
                            </p>

                            <div className="wg-according" id="According2">
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#according-1" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                1. What pricing plans do you offer?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according-1" className="collapse" data-bs-parent="#According2">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#according-2" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                2. Can I upgrade or change my plan later?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according-2" className="collapse" data-bs-parent="#According2">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#according-3" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                3. Are there any setup or hidden fees?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according-3" className="collapse" data-bs-parent="#According2">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#according-4" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                4. Do you offer custom pricing?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according-4" className="collapse" data-bs-parent="#According2">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue">
                                    <p className="header-according">
                                        <a href="#according-5" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                5. What payment methods do you accept?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="according-5" className="collapse" data-bs-parent="#According2">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-faqs">
                            <p className="h3 title fw-6 letter-space--3">
                                Privacy Policy
                            </p>

                            <div className="wg-according" id="According3">
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#According-1" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                1. What information do you collect?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="According-1" className="collapse" data-bs-parent="#According3">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762" >
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#According-2" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                2. How do you use my information?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="According-2" className="collapse" data-bs-parent="#According3">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#According-3" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                3. Do you share my personal data with third parties?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="According-3" className="collapse" data-bs-parent="#According3">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue mb-20">
                                    <p className="header-according">
                                        <a href="#According-4" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                4. How do you protect my data?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="According-4" className="collapse" data-bs-parent="#According3">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="according-item-2 style-icon-bg-blue">
                                    <p className="header-according">
                                        <a href="#According-5" data-bs-toggle="collapse"
                                            className="title-according h6 fw-6 letter-space--3 collapsed">
                                            <span className="text-title">
                                                5. Do you use cookies?
                                            </span>
                                            <span className="icon">
                                                <span></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div id="According-5" className="collapse" data-bs-parent="#According3">
                                        <div className="according-content">
                                            <p className="text ff-2 mw-762">
                                                Yes, you can upgrade or change your plan at any time. Simply go to your
                                                account settings, choose the new plan that suits your needs, and the
                                                changes will take effect immediately (or at the start of your next
                                                billing cycle, depending on your plan).
                                            </p>
                                            <ul className="list-benefit d-flex g-50 rg-15 flex-wrap mb-10">
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Flexible Plans</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">User-Friendly Interface</span>
                                                </li>
                                                <li className="benefit-item d-flex align-items-center g-10 color-paragraph">
                                                    <i className="icon-check fs-24"></i>
                                                    <span className="fw-5 ff-2">Reliable Support</span>
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
            <div className="canvas-header">
                <a href="#" className="logo-site">
                    <img src="./assets/images/logo/logo-mobi-1.svg" alt="" />
                </a>
                <span className="icon icon-close" data-bs-dismiss="offcanvas"></span>
            </div>
            <div className="canvas-body">
                <div className="mb-content-top">
                    <ul className="nav-ul-mb" id="wrapper-menu-navigation"></ul>
                </div>
            </div>
            <div className="canvas-bottom">
            </div>
        </div>

    </div>
    

    
     {/* <div
        className="modal fade modalRight pop-up-menu-mobile"
        id="pop-up-sidebar"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content modal-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
              <a href="/" className="logo-sidebar">
                <img src={DESLogoSideBar} alt="" className="des-logo" />
              </a>
              <span className="icon icon-close-popup" data-bs-dismiss="modal">
                <i className="icon-x-circle"></i>
              </span>
            </div>
            <div className="sidebar-content mb-70">
              <p className="h5 title fw-6">Learn About Us</p>
              <p className="text text-body-2 ff-2 mb-70">
                We are a results-driven digital marketing agency dedicated to
                helping brands grow, connect, and thrive in the digital world.
                By combining data-driven strategy, creative storytelling, and
                the latest marketing technologies
              </p>
              <div className="list-img d-flex align-items-center g-20">
                <div className="img">
                  <img
                    loading="lazy"
                    width="115"
                    height="115"
                    // src="./assets/images/widget/pop-up-siderbar-1.jpg"
                    src={PopUpSidebar1}
                    alt="Image"
                  />
                </div>
                <div className="img">
                  <img
                    loading="lazy"
                    width="115"
                    height="115"
                    // src="./assets/images/widget/pop-up-siderbar-2.jpg"
                    src={PopUpSidebar2}
                    alt="Image"
                  />
                </div>
                <div className="img">
                  <img
                    loading="lazy"
                    width="115"
                    height="115"
                    // src="./assets/images/widget/pop-up-siderbar-3.jpg"
                    src={PopUpSidebar3}
                    alt="Image"
                  />
                </div>
                <div className="img">
                  <img
                    loading="lazy"
                    width="115"
                    height="115"
                    // src="./assets/images/widget/pop-up-siderbar-4.jpg"
                    src={PopUpSidebar4}
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            <div className="sidebar-content mb-70">
              <p className="h5 title fw-6">Contact Us</p>
              <ul>
                <li className="contact-list-item">
                  <a href="#" className="text-body-2 ff-2">
                    35, 4th A cross, Dasarahalli Main Rd
                    <br />
                    Bhuvaneswari Nagar, Hebbal Kempapura,
                    <br />
                    Bengaluru, Karnataka 560024{" "}
                  </a>
                </li>
                <li className="contact-list-item">
                  <a href="#" className="text-body-2 ff-2">
                    info@digitaleliteservices.in{" "}
                  </a>
                </li>
                <li className="contact-list-item">
                  <a href="#" className="text-body-2 ff-2">
                    +91 6366930178
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-content newsletter-form">
              <p className="h5 title fw-6">Newsletter</p>
              <p className="text ff-2 mb-30">
                Stay ahead in the digital world by subscribing to our
                newsletter.
              </p>
              <form action="#" className="form-newsletter">
                <fieldset className="d-flex align-items-center flex-wrap g-10">
                  <input
                    type="text"
                    name="email-input"
                    id="email-input"
                    className="input-newsletter flex-grow-1"
                    placeholder="Email address"
                  />
                  <button className="tf-btn style-big style-color-dt-blue">
                    <span className="text-btn">Subscribe</span>
                    <span className="icon-btn">
                      <i className="icon-arrow-up-right"></i>
                    </span>
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    
    <SidePopup />
    
    <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style={{"transition":"strokeDashoffset 10ms linear","strokeDasharray":"307.919, 307.919","strokeDashoffset":"277.672"}}>
            </path>
        </svg>
    </div>
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    </>
  );
}
