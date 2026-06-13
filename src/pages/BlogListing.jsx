import React from 'react';

export default function BlogListing() {
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
        
        
        <header className="header header-fixed mt-xl-20">
            <div className="container w-1810">
                <div className="header-content">
                    <a href="/" className="logo">
                        <img src="./assets/images/logo/logo.svg" alt="" />
                    </a>
                    <div className="header-center d-none d-xl-block">
                        <nav className="box-navigation">
                            <ul className="box-nav-menu">
                                <li className="menu-item has-sub_menu">
                                    <a href="#" className="item-link">
                                        Home
                                        <span className="icon icon-chevron-down"></span>
                                    </a>
                                    <div className="sub-menu">
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="/" className="sub-menu_link">Home Digital Marketing</a>
                                            </li>
                                            <li>
                                                <a href="/home-seo" className="sub-menu_link">Home Seo</a>
                                            </li>
                                            <li>
                                                <a href="/home-branding-agency" className="sub-menu_link">Home Branding
                                                    Agency</a>
                                            </li>
                                            <li>
                                                <a href="/home-seo-marketing" className="sub-menu_link">Home Seo
                                                    Marketing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="menu-item has-sub_menu">
                                    <a href="/about-us" className="item-link">
                                        Pages
                                        <span className="icon icon-chevron-down"></span>
                                    </a>
                                    <div className="sub-menu">
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="/about-us" className="sub-menu_link">About Us</a>
                                            </li>
                                            <li>
                                                <a href="/our-team" className="sub-menu_link">Our Team</a>
                                            </li>
                                            <li>
                                                <a href="/team-details" className="sub-menu_link">Team Details</a>
                                            </li>
                                            <li>
                                                <a href="/pricing-plan" className="sub-menu_link">Pricing Plan</a>
                                            </li>
                                            <li>
                                                <a href="/faqs" className="sub-menu_link">Faqs</a>
                                            </li>

                                            <li>
                                                <a href="/contact" className="sub-menu_link">Contact</a>
                                            </li>
                                            <li>
                                                <a href="/404" className="sub-menu_link">404</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="menu-item has-sub_menu">
                                    <a href="#" className="item-link">
                                        Services
                                        <span className="icon icon-chevron-down"></span>
                                    </a>
                                    <div className="sub-menu">
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="/services-1" className="sub-menu_link">Services 01</a>
                                            </li>
                                            <li>
                                                <a href="/services-2" className="sub-menu_link">Services 02</a>
                                            </li>
                                            <li>
                                                <a href="/service-details" className="sub-menu_link">Service Details</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="menu-item has-sub_menu">
                                    <a href="#" className="item-link">
                                        Portfolio
                                        <span className="icon icon-chevron-down"></span>
                                    </a>
                                    <div className="sub-menu">
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="/portfolio-1" className="sub-menu_link">Portfolio 1</a>
                                            </li>
                                            <li>
                                                <a href="/portfolio-2" className="sub-menu_link">Portfolio 2</a>
                                            </li>
                                            <li>
                                                <a href="/portfolio-details" className="sub-menu_link">Portfolio
                                                    Details</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="menu-item has-sub_menu">
                                    <a href="#" className="item-link active">
                                        Blog
                                        <span className="icon icon-chevron-down"></span>
                                    </a>
                                    <div className="sub-menu">
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="/blog-gird" className="sub-menu_link">Blog Grid</a>
                                            </li>
                                            <li>
                                                <a href="/blog-listing" className="sub-menu_link active">Blog
                                                    Listing</a>
                                            </li>
                                            <li>
                                                <a href="/blog-detail" className="sub-menu_link">Blog Details</a>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right d-flex align-items-center g-20">
                        <div className="d-sm-block d-none">
                            <a href="/contact" className="tf-btn">
                                <span className="text-btn">Get in Touch</span>
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                            </a>
                        </div>
                        <div className="d-none d-xl-block">
                            <a href="#pop-up-sidebar" data-bs-toggle="modal" className="tf-btn-sidebar">
                                <i className="icon-union"></i>
                            </a>
                        </div>

                        <div className="d-xl-none">
                            <a href="#mobileMenu" data-bs-toggle="offcanvas" className=" mobile-button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </header>
        

        
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
                    <div className="content">
                        <h1 className="title mb-xl-100">
                            Ideas, trends
                            <br />& strategies
                        </h1>
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">Blog Listing</span>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="915" height="470" src="./assets/images/page-title/img-page-title.jpg"
                            alt="Image" />
                    </div>
                </div>
            </div>
        </div>
        

        
        <div className="main-content flat-spacing-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="blog-card style-list-2 mb-30 hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-list.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="h6 name-card fw-6 letter-space--3" href="/blog-detail">
                                    Digital marketing case studies lessons successful campaigns real-world.
                                </a>
                                <p className="desc ff-2">Showing how strategy, creativity, and data work together to achieve
                                    measurable results.</p>
                                <a href="/blog-detail" className="tf-btn style-2 text-caption-2">
                                    Read more
                                    <i className="icon-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="blog-card style-list-2 mb-30 hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-list-1.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="h6 name-card fw-6 letter-space--3" href="/blog-detail">
                                    SEO best practices how to rank higher on google
                                </a>
                                <p className="desc ff-2">Showing how strategy, creativity, and data work together to achieve
                                    measurable results.</p>
                                <a href="/blog-detail" className="tf-btn style-2 text-caption-2">
                                    Read more
                                    <i className="icon-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="blog-card style-list-2 mb-30 hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-list-2.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="h6 name-card fw-6 letter-space--3" href="/blog-detail">
                                    Paid Ads vs organic marketing which delivers better ROI?
                                </a>
                                <p className="desc ff-2">Showing how strategy, creativity, and data work together to achieve
                                    measurable results.</p>
                                <a href="/blog-detail" className="tf-btn style-2 text-caption-2">
                                    Read more
                                    <i className="icon-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="blog-card style-list-2 mb-30 hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-list-3.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="h6 name-card fw-6 letter-space--3" href="/blog-detail">
                                    Social media marketing trends you can’t ignore
                                </a>
                                <p className="desc ff-2">Showing how strategy, creativity, and data work together to achieve
                                    measurable results.</p>
                                <a href="/blog-detail" className="tf-btn style-2 text-caption-2">
                                    Read more
                                    <i className="icon-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="blog-card style-list-2 mb-30 hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-list-4.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="h6 name-card fw-6 letter-space--3" href="/blog-detail">
                                    How AI is transforming digital marketing strategies
                                </a>
                                <p className="desc ff-2">Showing how strategy, creativity, and data work together to achieve
                                    measurable results.</p>
                                <a href="/blog-detail" className="tf-btn style-2 text-caption-2">
                                    Read more
                                    <i className="icon-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="blog-card style-list-2 mb-30 hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-list-5.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="h6 name-card fw-6 letter-space--3" href="/blog-detail">
                                    Content marketing that converts proven techniques
                                </a>
                                <p className="desc ff-2">Showing how strategy, creativity, and data work together to achieve
                                    measurable results.</p>
                                <a href="/blog-detail" className="tf-btn style-2 text-caption-2">
                                    Read more
                                    <i className="icon-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="blog-card style-list-2 hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-list-6.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="h6 name-card fw-6 letter-space--3" href="/blog-detail">
                                    How to build a high-converting marketing funnel
                                </a>
                                <p className="desc ff-2">Showing how strategy, creativity, and data work together to achieve
                                    measurable results.</p>
                                <a href="/blog-detail" className="tf-btn style-2 text-caption-2">
                                    Read more
                                    <i className="icon-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="tf-sidebar sidebar-filter right">
                            <div
                                className="header-fillter d-flex justify-content-between align-items-center d-xl-none mb-30">
                                <p className="title h3 fw-6">
                                    Fillter
                                </p>
                                <span className="icon-close close-filter"></span>
                            </div>

                            <div className="mb-50">
                                <form action="#" className="form-search-siderbar">
                                    <fieldset>
                                        <input type="text" placeholder="Search here" />
                                        <a href="#" className="tf-btn-search"><i className="icon-search"></i></a>
                                    </fieldset>
                                </form>
                            </div>

                            <div className="sidebar-content mb-50">
                                <p className="h5 title letter-space--3 fw-6 mb-30">
                                    Categories
                                </p>
                                <ul className="list-categories-item">
                                    <li>
                                        <a href="#" className="item active">
                                            <span className="name-item ff-2 fw-6">Digital marketing</span>
                                            <span className="number-item">1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="item">
                                            <span className="name-item ff-2 fw-6">SEO Camping</span>
                                            <span className="number-item">2</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="item">
                                            <span className="name-item ff-2 fw-6">Web design & development</span>
                                            <span className="number-item">5</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="item">
                                            <span className="name-item ff-2 fw-6">Pay-Per-Click Advertising (PPC)</span>
                                            <span className="number-item">3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="item">
                                            <span className="name-item ff-2 fw-6">Influencer Marketing</span>
                                            <span className="number-item">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="item">
                                            <span className="name-item ff-2 fw-6">Design & Branding</span>
                                            <span className="number-item">6</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="sidebar-content mb-50">
                                <p className="h5 title letter-space--3 fw-6 mb-30">
                                    Popular News
                                </p>
                                <div className="list-blog">
                                    <a href="/blog-detail" className="post-list-small mb-30">
                                        <span className="image">
                                            <img loading="lazy" width="100" height="100"
                                                src="./assets/images/blog/blog-list-small-1.jpg" alt="Image" />
                                        </span>

                                        <span className="post-content">
                                            <span className="post-meta">
                                                <i className="icon-calendar"></i>
                                                <span className="day fw-6 ff-2 letter-space--2">20 January 2026</span>
                                            </span>
                                            <span className="title text-body-1 fw-6 letter-space--3">
                                                SEO best practices how they rank higher on google
                                            </span>
                                        </span>
                                    </a>
                                    <a href="/blog-detail" className="post-list-small mb-30">
                                        <span className="image">
                                            <img loading="lazy" width="100" height="100"
                                                src="./assets/images/blog/blog-list-small-2.jpg" alt="Image" />
                                        </span>

                                        <span className="post-content">
                                            <span className="post-meta">
                                                <i className="icon-calendar"></i>
                                                <span className="day fw-6 ff-2 letter-space--2">20 January 2026</span>
                                            </span>
                                            <span className="title text-body-1 fw-6 letter-space--3">
                                                Email marketing to strategies that actually work
                                            </span>
                                        </span>
                                    </a>
                                    <a href="/blog-detail" className="post-list-small">
                                        <span className="image">
                                            <img loading="lazy" width="100" height="100"
                                                src="./assets/images/blog/blog-list-small-3.jpg" alt="Image" />
                                        </span>

                                        <span className="post-content">
                                            <span className="post-meta">
                                                <i className="icon-calendar"></i>
                                                <span className="day fw-6 ff-2 letter-space--2">20 January 2026</span>
                                            </span>
                                            <span className="title text-body-1 fw-6 letter-space--3">
                                                Social media marketing trends you can’t ignore
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="sidebar-content mb-50">
                                <p className="h5 title letter-space--3 fw-6 mb-30">
                                    Tags
                                </p>
                                <ul className="d-flex align-items-center flex-wrap g-10">
                                    <li><a href="#"
                                            className="item-tags ff-2 fw-6 letter-space--2 lh-100 active">Marketing</a>
                                    </li>
                                    <li><a href="#" className="item-tags ff-2 fw-6 letter-space--2 lh-100">SEO</a></li>
                                    <li><a href="#" className="item-tags ff-2 fw-6 letter-space--2 lh-100">Branding</a></li>
                                    <li><a href="#" className="item-tags ff-2 fw-6 letter-space--2 lh-100">Ranked</a></li>
                                    <li><a href="#" className="item-tags ff-2 fw-6 letter-space--2 lh-100">Camping</a></li>
                                    <li><a href="#" className="item-tags ff-2 fw-6 letter-space--2 lh-100">Agency</a></li>
                                    <li><a href="#" className="item-tags ff-2 fw-6 letter-space--2 lh-100">2x power</a></li>
                                </ul>
                            </div>

                            <div className="wg-cta">
                                <div className="image">
                                    <img loading="lazy" width="410" height="430"
                                        src="./assets/images/blog/img-bg-cta.jpg" alt="Image" />
                                </div>
                                <div className="top-content-wg">
                                    <p className="h6 sub-title fw-5 letter-space--2">
                                        Join Our <i>Team</i>
                                    </p>
                                    <p className="h3 title fw-6 letter-space--3">
                                        Looking for a new
                                        <br />Positions?
                                    </p>

                                </div>
                                <div className="bottom-btn">
                                    <a href="#" className="tf-btn style-color-dt-light ">
                                        <span className="text-btn">Join Now</span>
                                        <span className="icon-btn">
                                            <i className="icon-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="wg-pagination mt-50">
                    <ul className="d-flex align-items-center g-10">
                        <li className="active wow fadeInUp ff-2">1</li>
                        <li className="wow fadeInUp ff-2" data-wow-delay=".1s">2</li>
                        <li className="wow fadeInUp ff-2" data-wow-delay=".2s">3</li>
                        <li className="wow fadeInUp ff-2" data-wow-delay=".3s"><i className="icon-arrow-right"></i></li>
                    </ul>
                </div>
            </div>

            <button id="filterShop" className="fillter-btn style-fixed d-xl-none">
                <i className="icon-sidebar"></i>
            </button>
        </div>
        

        <footer className="footer">
            <div className="img-sharp">
                <div className="blob-wrapper">
                    <div className="blob"></div>
                </div>
            </div>
            <div className="footer-inner">
                <div className="container w-1650">
                    <div className="top-footer">
                        <p className="big-text split-text effect-right">Let’s Connect
                            <br /><span className="img d-none d-sm-inline-block wow fadeInRight"><img loading="lazy"
                                    width="350" height="130" src="./assets/images/section/img-footer-title.jpg"
                                    alt="Image" /></span> together

                            <span className="img d-sm-none mt-20"><img loading="lazy" width="350" height="130"
                                    src="./assets/images/section/img-footer-title.jpg" alt="Image" /></span>
                        </p>
                        <div className="d-lg-block d-none">
                            <a href="#" className="link-btn">
                                <span className="icon-btn">
                                    <i className="icon-arrow-up-right"></i>
                                </span>
                                <span className="text-btn">Let’s Talk</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-inner">
                <div className="container w-1750">
                    <div className="midder-footer">
                        <a href="/" className="logo-footer">
                            <img src="./assets/images/logo/logo.svg" alt="image" />
                        </a>

                        <div className="footer-content footer-col-block footer-content-1">
                            <div className="title-mobile text-body-1 fw-5">
                                Solutions
                                <i className="icon-chevron-down d-sm-none d-block"></i>
                            </div>
                            <div className="tf-collapse-content" style={{}}>
                                <ul className="content">
                                    <li className="support-item-footer"><a href="#" className="ff-2">Search Engine
                                            Optimization</a>
                                    </li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Pay-Per-Click
                                            Advertising</a>
                                    </li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Social Media Marketing</a>
                                    </li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Branding & Digital
                                            Strategy</a>
                                    </li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Influencer Marketing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-content footer-col-block footer-content-1">
                            <div className="title-mobile text-body-1 fw-5">
                                Our Company
                                <i className="icon-chevron-down d-sm-none d-block"></i>
                            </div>
                            <div className="tf-collapse-content" style={{}}>
                                <ul className="content">
                                    <li className="support-item-footer"><a href="#" className="ff-2">Company History</a></li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Team Members</a></li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Latest Cases</a></li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Need a Careers</a></li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Articles & news</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-content footer-col-block newsletter-footer footer-content-2">
                            <div className="title-mobile text-body-1 fw-5">
                                Newsletter
                                <i className="icon-chevron-down d-sm-none d-block"></i>
                            </div>
                            <div className="tf-collapse-content" style={{}}>
                                <div className="content">
                                    <p className="text fw-5 ff-2 mb-40">
                                        Stay ahead in the digital world by subscribing to our newsletter.
                                    </p>
                                    <form action="#" className="form-newsletter-2">
                                        <fieldset className="input-absolute mb-20">
                                            <input type="email" placeholder="Email address" required />
                                            <button type="submit" className="send-btn">
                                                <i className="icon-send"></i>
                                            </button>
                                        </fieldset>
                                        <fieldset className="box-checkbox d-flex align-items-center g-10">
                                            <input type="checkbox" name="checkbox-1" id="checkbox-1"
                                                className="input-check-box" />
                                            <label htmlFor="checkbox-1" className="text-checkbox ff-2">I here by accept all <a
                                                    href="#" className="ff-2 fw-6">terms & conditions.</a></label>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="footer-content footer-col-block contact-footer footer-content-2">
                            <div className="title-mobile text-body-1 fw-5">
                                Contact Us
                                <i className="icon-chevron-down d-sm-none d-block"></i>
                            </div>
                            <div className="tf-collapse-content" style={{}}>
                                <div className="content">
                                    <div className="contact-footer-item mb-30">
                                        <div className="icon-contact">
                                            <i className="icon-map-pin"></i>
                                        </div>
                                        <a href="#" className="text ff-2 fw-5">
                                            <span>1234 Innovation Drive, Suite 500,
                                                <br />San Francisco, CA 94105, USA</span>
                                        </a>
                                    </div>
                                    <div className="contact-footer-item mb-30">
                                        <div className="icon-contact">
                                            <i className="icon-mail"></i>
                                        </div>
                                        <div className="text ff-2 fw-5">
                                            <a href="#">supporttech@gmail.com</a>
                                            <a href="#">www.seonex.com</a>
                                        </div>
                                    </div>
                                    <div className="contact-footer-item">
                                        <div className="icon-contact">
                                            <i className="icon-phone-outgoing"></i>
                                        </div>
                                        <div className="text ff-2 fw-5">
                                            <a href="#">supporttech@gmail.com</a>
                                            <a href="#">www.seonex.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container w-1750">
                <div className="bottom-footer d-flex align-items-center justify-content-between g-20">
                    <ul className="d-flex align-items-center g-30 flex-wrap justify-content-center">
                        <li><a href="/" className="color-white ff-2">Home</a></li>
                        <li><a href="/about-us" className="color-white ff-2">About</a></li>
                        <li><a href="/services-1" className="color-white ff-2">Service</a></li>
                        <li><a href="#" className="color-white ff-2">Privacy</a></li>
                        <li><a href="/faqs" className="color-white ff-2">FAQs</a></li>
                    </ul>
                    <span className="color-text-3 text-center ff-2">Copyright@ 2026 <span
                            className="color-dt-light fw-6">SEONEX</span>. All
                        Rights Reserved.</span>
                </div>
            </div>



        </footer>

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
    

    
    <div className="modal fade modalRight pop-up-menu-mobile" id="pop-up-sidebar">
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
    </div>
    
    
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
