import React from 'react';

export default function BlogDetail() {
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
                                                <a href="/blog-listing" className="sub-menu_link">Blog Listing</a>
                                            </li>
                                            <li>
                                                <a href="/blog-detail" className="sub-menu_link active">Blog Details</a>
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
        

        
        <div className="page-title page-detail">
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
                <div className="page-title-content text-center">
                    <div className="content">
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">Blog Listing</span>
                        </div>
                        <h2 className="title fw-6">
                            Digital marketing case studies lessons
                            <br />successful campaigns real-world.
                        </h2>

                        <ul className="post-meta d-flex align-items-center justify-content-center flex-wrap">
                            <li><a href="#" className="meta-item ff-2 fw-6 letter-space--2">SEO Camping</a></li>
                            <li><a href="#" className="meta-item ff-2 fw-6 letter-space--2">Post by <span
                                        className="color-white">Daniel Thompson</span></a></li>
                            <li><a href="#" className="meta-item ff-2 fw-6 letter-space--2">20 January 2026</a></li>
                            <li><a href="#" className="meta-item ff-2 fw-6 letter-space--2">Comments (5)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        

        
        <div className="main-content flat-spacing-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="wg-blog-detail">
                            <div className="image-blog-detail mb-40">
                                <img loading="lazy" width="850" height="530"
                                    src="./assets/images/blog/img-blog-detail-1.jpg" alt="Image" />
                            </div>
                            <div className=" mb-50">
                                <h3 className="title fw-6 letter-space--3 lh-36 mb-40">
                                    Digital marketing case studies offer a behind-the-scenes look
                                    at successful campaigns, providing practical lessons that can be applied in the real
                                    world. By examining what strategies worked, which channels drove results, a how
                                    challenges were overcome, businesses gain actionable insights to improve.
                                </h3>
                                <p className="text ff-2 color-paragraph">
                                    These real-world examples highlight the power of data-driven decision-making,
                                    creative storytelling, and <br />targeted audience engagement, showing how measurable
                                    results—like increased traffic, leads, and conversions—are achieved. Learning from
                                    proven campaigns allows marketers to replicate success, avoid common pitfalls, and
                                    refine strategies for maximum impact.
                                </p>
                            </div>

                            <div className="detail-content mb-70">
                                <p className="title h5 fw-6 letter-space--3 mb-20">Proven Ways to Strengthen Customer
                                    Loyalty
                                </p>
                                <p className="text ff-2 color-paragraph mb-30">
                                    Strengthening customer loyalty is essential for long-term business success, and
                                    there are proven strategies that make a real difference. By consistently delivering
                                    exceptional experiences, engaging customers through personalized communication, and
                                    offering rewards or incentives.
                                </p>
                                <ul className="feature-list-blog mb-40">
                                    <li className="feature-item ff-2 fw-5 mb-7"><i className="icon-check"></i> Intuitive design
                                        for
                                        seamless navigation.</li>
                                    <li className="feature-item ff-2 fw-5 mb-7"><i className="icon-check"></i> Responsive
                                        customer service
                                        whenever needed.</li>
                                    <li className="feature-item ff-2 fw-5"><i className="icon-check"></i> Continuous
                                        enhancements for
                                        better experience.</li>
                                </ul>
                                <p className="text ff-2 color-paragraph">
                                    Implementing these approaches not only encourages repeat purchases but also turns
                                    satisfied customers into brand advocates who promote your business naturally.
                                </p>
                            </div>

                            <div className="wg-quote mb-70">
                                <div className="text h6 fw-6 letter-space--3 mb-30">
                                    “Marketing isn’t just about selling—it’s about understanding your audience, building
                                    trust, and creating experiences that turn customers into advocates.”
                                </div>
                                <div className="user-quote">
                                    <a href="#" className="image">
                                        <img src="./assets/images/avatar/avt-quote.jpg" alt="img" />
                                    </a>
                                    <a href="#" className="name fw-6 text-body-2 color-dt-black">Robert Johnson<span
                                            className="color-paragraph fw-5 text-body-3">/Author</span></a>
                                </div>
                            </div>

                            <div className="image-blog-detail mb-50">
                                <img loading="lazy" width="850" height="530"
                                    src="./assets/images/blog/img-blog-detail-2.jpg" alt="Image" />
                            </div>

                            <div className="detail-content mb-70">
                                <p className="h5 title fw-6 letter-space--3 mb-20">Paid Ads vs Organic Marketing Which
                                    Delivers Better ROI?</p>
                                <p className="text ff-2 color-paragraph mb-30">
                                    Strengthening customer loyalty is essential for long-term business success, and
                                    there are proven strategies that make a real difference. By consistently delivering
                                    exceptional experiences, engaging customers through personalized communication, and
                                    offering rewards or incentives.
                                </p>
                                <ul className="feature-list-blog mb-40">
                                    <li className="feature-item ff-2 fw-5 mb-7"><i className="icon-check"></i> Make informed
                                        decisions
                                        with actionable insights.</li>
                                    <li className="feature-item ff-2 fw-5 mb-7"><i className="icon-check"></i> Seamlessly manage
                                        SEO,
                                        social media, email, and PPC.</li>
                                    <li className="feature-item ff-2 fw-5"><i className="icon-check"></i> Build loyalty and
                                        increase
                                        customer retention.</li>
                                </ul>
                            </div>

                            <div className="tags-detail d-flex align-items-center g-30 mb-30">
                                <p className="h5 title letter-space--3 fw-6">
                                    Tags
                                </p>
                                <ul className="d-flex align-items-center flex-wrap g-10">
                                    <li><a href="#"
                                            className="item-tags ff-2 fw-6 letter-space--2 lh-100 active">Marketing</a>
                                    </li>
                                    <li><a href="#" className="item-tags ff-2 fw-6 letter-space--2 lh-100">SEO</a></li>
                                    <li><a href="#" className="item-tags ff-2 fw-6 letter-space--2 lh-100">Branding</a></li>
                                    <li><a href="#" className="item-tags ff-2 fw-6 letter-space--2 lh-100">Ranked</a></li>
                                </ul>
                            </div>

                            <div className="social-detail d-flex align-items-center g-30 mb-70">
                                <p className="h5 title letter-space--3 fw-6">
                                    Share
                                </p>
                                <ul className="d-flex align-items-center flex-wrap g-10">
                                    <li><a href="#" className="item-social active"><i className="icon-fb"></i></a></li>
                                    <li><a href="#" className="item-social"><i className="icon-in"></i></a></li>
                                    <li><a href="#" className="item-social"><i className="icon-ig"></i></a></li>
                                    <li><a href="#" className="item-social"><i className="icon-x"></i></a></li>
                                </ul>
                            </div>

                            <div className="box-author mb-70">
                                <a href="#" className="image">
                                    <img loading="lazy" width="130" height="130"
                                        src="./assets/images/avatar/avt-author.jpg" alt="Image" />
                                </a>

                                <div className="author-content">
                                    <a href="#" className="name h6 fw-6 letter-space--3">
                                        Jonathan Parker
                                    </a>
                                    <p className="sub-name">
                                        Author
                                    </p>
                                    <p className="text ff-2 fw-5">
                                        "I’ve traveled with many agencies, but this one stands personalized approach and
                                        attention to detail made our honeymoon unforgettable.
                                    </p>
                                    <ul className="list-social-author d-flex align-items-center g-15">
                                        <li><a href="#"><i className="icon-fb"></i></a></li>
                                        <li><a href="#"><i className="icon-in"></i></a></li>
                                        <li><a href="#"><i className="icon-ig"></i></a></li>
                                        <li><a href="#"><i className="icon-x"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="box-related-news detail-content mb-70">
                                <p className="h5 title fw-6 letter-space--3 mb-30">
                                    Related News
                                </p>
                                <div className="d-flex align-items-center justify-content-between flex-wrap g-30">
                                    <a href="/blog-detail" className="post-list-small">
                                        <span className="image">
                                            <img loading="lazy" width="100" height="100"
                                                src="./assets/images/blog/blog-list-small-4.jpg" alt="Image" />
                                        </span>

                                        <span className="post-content">
                                            <span className="post-meta">
                                                <i className="icon-calendar"></i>
                                                <span className="day fw-6 ff-2 letter-space--2">20 January 2026</span>
                                            </span>
                                            <span className="title text-body-1 fw-6 letter-space--3">
                                                SEO best practices how they
                                                <br />rank higher on google
                                            </span>
                                        </span>
                                    </a>
                                    <a href="/blog-detail" className="post-list-small">
                                        <span className="image">
                                            <img loading="lazy" width="100" height="100"
                                                src="./assets/images/blog/blog-list-small-5.jpg" alt="Image" />
                                        </span>

                                        <span className="post-content">
                                            <span className="post-meta">
                                                <i className="icon-calendar"></i>
                                                <span className="day fw-6 ff-2 letter-space--2">20 January 2026</span>
                                            </span>
                                            <span className="title text-body-1 fw-6 letter-space--3">
                                                Email marketing to strategies
                                                <br />that actually work
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <form action="@" className="form-comment write-review px-lg-15">
                                <h4 className="title fw-6 mb-12 letter-space--3">
                                    Leave a Comment
                                </h4>
                                <p className="desc ff-2 mb-37">
                                    Your email address will not be published. Required fields are marked *
                                </p>
                                <div className="cols d-flex g-30 mb-30">
                                    <fieldset className="item w-100">
                                        <input type="text" placeholder="Full name*" required />
                                    </fieldset>
                                    <fieldset className="item w-100">
                                        <input type="email" placeholder="Email*" required />
                                    </fieldset>
                                </div>
                                <fieldset className="mb-20 w-100">
                                    <textarea placeholder="Message*" required></textarea>
                                </fieldset>

                                <fieldset className="box-checkbox-2 d-flex align-items-center g-10 mb-30">
                                    <input type="checkbox" name="checkbox-1" id="checkbox-2"
                                        className="input-check-box style-2" />
                                    <label htmlFor="checkbox-2" className="text-checkbox ff-2 color-paragraph">Save my name,
                                        email, and website in this browser for the next time I comment.</label>
                                </fieldset>
                                <div className="bottom-btn">
                                    <button type="submit" className="tf-btn style-big style-color-dt-black ">
                                        <span className="text-btn">Send Comment</span>
                                        <span className="icon-btn">
                                            <i className="icon-arrow-up-right"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>

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
