import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BlogGird() {
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
                    <div className="content">
                        <h1 className="title mb-xl-100">
                            Ideas, trends
                            <br />& strategies
                        </h1>
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">Blog Grid</span>
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
                <div className="blog-card style-list flat-spacing-2 hover-img">
                    <a href="/blog-detail" className="image image-blog">
                        <img loading="lazy" width="630" height="430" src="./assets/images/blog/img-blog-card.jpg"
                            alt="Image" />
                    </a>
                    <div className="card-content">
                        <div className="meta d-flex align-items-center g-30">
                            <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                            <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                        </div>
                        <a className="name-card h5 fw-6 letter-space--3" href="/blog-detail">
                            Digital marketing case studies lessons successful campaigns real-world.
                        </a>
                        <p className="desc ff-2">By analyzing real examples, businesses can understand what tactics drove
                            engagement, increased conversions, a maximized ROI across different channels such as SEO,
                            social media.</p>
                        <a href="/blog-detail" className="tf-btn style-big style-color-dt-blue">
                            <span className="text-btn">Read more</span>
                            <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                        </a>
                    </div>
                </div>
                <div className="row rg-70 mb-70">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-card hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-card-2.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="name-card h6 lh-30 letter-space--3 fw-6" href="/blog-detail">
                                    SEO Best Practices: How to Rank Higher on Google
                                </a>
                                <p className="desc ff-2">Studies highlight proven approaches challenges an actionable
                                    insights that can be applied</p>
                                <a href="/blog-detail" className="tf-btn style-border">
                                    <span className="text-btn">Read more</span>
                                    <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-card hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-card-3.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="name-card h6 lh-30 letter-space--3 fw-6" href="/blog-detail">
                                    Paid Ads vs Organic Marketing: Which Delivers Better ROI?
                                </a>
                                <p className="desc ff-2">Studies highlight proven approaches challenges an actionable
                                    insights that can be applied</p>
                                <a href="/blog-detail" className="tf-btn style-border">
                                    <span className="text-btn">Read more</span>
                                    <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-card hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-card-4.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="name-card h6 lh-30 letter-space--3 fw-6" href="/blog-detail">
                                    How AI Is Transforming Digital Marketing Strategies
                                </a>
                                <p className="desc ff-2">Studies highlight proven approaches challenges an actionable
                                    insights that can be applied</p>
                                <a href="/blog-detail" className="tf-btn style-border">
                                    <span className="text-btn">Read more</span>
                                    <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-card hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-card-5.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="name-card h6 lh-30 letter-space--3 fw-6" href="/blog-detail">
                                    Content Marketing That Converts: Proven Techniques
                                </a>
                                <p className="desc ff-2">Studies highlight proven approaches challenges an actionable
                                    insights that can be applied</p>
                                <a href="/blog-detail" className="tf-btn style-border">
                                    <span className="text-btn">Read more</span>
                                    <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-card hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-card-6.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="name-card h6 lh-30 letter-space--3 fw-6" href="/blog-detail">
                                    How to Build a High-Converting Marketing Funnel
                                </a>
                                <p className="desc ff-2">Studies highlight proven approaches challenges an actionable
                                    insights that can be applied</p>
                                <a href="/blog-detail" className="tf-btn style-border">
                                    <span className="text-btn">Read more</span>
                                    <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-card hover-img">
                            <a href="/blog-detail" className="image image-blog">
                                <img loading="lazy" width="630" height="430"
                                    src="./assets/images/blog/img-blog-card-7.jpg" alt="Image" />
                            </a>
                            <div className="card-content">
                                <div className="meta d-flex align-items-center g-30">
                                    <a href="#" className="tag ff-2 fw-6">SEO Camping</a>
                                    <a href="#" className="date ff-2 fw-6">20 January 2026</a>
                                </div>
                                <a className="name-card h6 lh-30 letter-space--3 fw-6" href="/blog-detail">
                                    Common Digital Marketing Mistakes and How to Avoid Them
                                </a>
                                <p className="desc ff-2">Studies highlight proven approaches challenges an actionable
                                    insights that can be applied</p>
                                <a href="/blog-detail" className="tf-btn style-border">
                                    <span className="text-btn">Read more</span>
                                    <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wg-pagination">
                    <ul className="d-flex align-items-center justify-content-center g-10">
                        <li className="active wow fadeInUp ff-2">1</li>
                        <li className="wow fadeInUp ff-2" data-wow-delay=".1s">2</li>
                        <li className="wow fadeInUp ff-2" data-wow-delay=".2s">3</li>
                        <li className="wow fadeInUp ff-2" data-wow-delay=".3s"><i className="icon-arrow-right"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        

        <Footer />
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
