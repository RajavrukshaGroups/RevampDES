import DESLOGO from "../../assets/images/header/DES_logo_white.png";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidePopup from '../../components/sidePopup';
import serviceDetailsHeroImage from '../../assets/images/serviceDetails/img-page-title-4.jpg';
import serviceDetailsImage1 from '../../assets/images/serviceDetails/img-services-detail-1.jpg';
import serviceDetailsImage2 from '../../assets/images/serviceDetails/img-services-detail-2.jpg';
import serviceDetailsImage3 from '../../assets/images/serviceDetails/img-services-detail-3.jpg';

export default function ServiceDetails() {
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
                        Search Engine
                        <br />{" "}Optimization (<span style={{ color: "var(--digital-marketing-light)" }}>SEO</span>)
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
                    <img loading="lazy" width="915" height="470" 
                    // src="./assets/images/page-title/img-page-title-4.jpg"
                    //     alt="Image" />
                    src={serviceDetailsHeroImage} alt="Image" />
                </div>
            </div>

        </div>
        

        
        <section className="section-services-detail flat-spacing-9">
            <div className="container">
                <div className="row rg-50">
                    <div className="col-lg-4">
                        <div className="card-sidebar">
                            <p className="h5 title fw-6 letter-space--3 lh-100">
                                Services Category
                            </p>
                            <ul>
                                <li><a href="#" className="category-services-item fw-5 letter-space--2 ff-2">Search Engine
                                        Optimization</a></li>
                                <li><a href="#" className="category-services-item fw-5 letter-space--2 ff-2">Pay-Per-Click
                                        Advertising </a></li>
                                <li><a href="#" className="category-services-item fw-5 letter-space--2 ff-2">Branding &
                                        Digital Strategy</a></li>
                                <li><a href="#" className="category-services-item fw-5 letter-space--2 ff-2">Web Design &
                                        Development</a></li>
                                <li><a href="#" className="category-services-item fw-5 letter-space--2 ff-2">Influencer
                                        Marketing</a></li>
                                <li><a href="#" className="category-services-item fw-5 letter-space--2 ff-2">Keyword
                                        Research & Analysis</a></li>
                                <li><a href="#" className="category-services-item fw-5 letter-space--2 ff-2">Link Building &
                                        Outreach</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="detail-content">
                            <h2 className=" fw-6 letter-space--3 color-dt-black mb-50">We use proven, data-driven SEO
                                strategies—including keyword research, on-page optimization, technical and high-quality
                                content—to improve your rankings and online presence.</h2>
                            <div className="text ff-2 color-paragraph mb-70">
                                Search Engine Optimization (SEO) helps your business increase visibility, attract
                                qualified traffic, and grow organically in search results. We use proven, data-driven
                                SEO strategies—including keyword research, on-page optimization, technical improvements,
                                and high-quality content—to improve your rankings and online presence. By aligning SEO
                                efforts with your business goals and search intent, we ensure long-term growth, better
                                user experience, and measurable results that drive sustainable success.
                            </div>
                            <h3 className="title-2 fw-6 letter-space--3 color-dt-black">
                                <span style={{ color: "var(--digital-marketing-blue)" }}>Our SEO working process</span> is built on a strategic, <span style={{ color: "var(--digital-marketing-light)" }}>step-by-step approach</span> to deliver
                                sustainable <span style={{ color: "var(--digital-marketing-blue)" }}>growth and measurable</span>
                                <br />results.
                            </h3>
                            <div className="list-process-item d-flex justify-content-between mb-70">
                                <div className="line d-none d-md-block"></div>
                                <div className="process-item-2">
                                    <div className="number ff-2 fw-5 letter-space--2">
                                        01
                                    </div>
                                    <div className="dot"></div>
                                    <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3 ">
                                        Research & Strategy
                                    </a>
                                    <div className="desc ff-2">
                                        We analyze your business goals,
                                        target audience competitors and
                                        keywords to SEO strategy.
                                    </div>
                                </div>

                                <div className="process-item-2">
                                    <div className="number ff-2 fw-5 letter-space--2">
                                        02
                                    </div>
                                    <div className="dot"></div>
                                    <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3 ">
                                        Design Optimization
                                    </a>
                                    <div className="desc ff-2">
                                        We optimize on-page content,
                                        technical SEO elements and site
                                        structure while building.
                                    </div>
                                </div>

                                <div className="process-item-2">
                                    <div className="number ff-2 fw-5 letter-space--2">
                                        03
                                    </div>
                                    <div className="dot"></div>
                                    <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3 ">
                                        Monitoring & Growth
                                    </a>
                                    <div className="desc ff-2">
                                        We track performance, analyze
                                        results, and continuously refine
                                        strategy to increase traffic,
                                    </div>
                                </div>
                            </div>
                            <div className="list-img d-flex g-30 align-items-center mb-70">
                                <div className="image">
                                    <img loading="lazy" width="410" height="470"
                                        // src="./assets/images/section/img-services-detail-1.jpg" alt="Image" />
                                        src={serviceDetailsImage1} alt="Image" />
                                </div>
                                <div className="image">
                                    <img loading="lazy" width="410" height="470"
                                        // src="./assets/images/section/img-services-detail-2.jpg" alt="Image" />
                                        src={serviceDetailsImage2} alt="Image" />
                                </div>
                            </div>
                            <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30">
                                Using <span style={{ color: "var(--digital-marketing-blue)" }}>our digital marketing services</span> gives <span style={{ color: "var(--digital-marketing-blue)" }}>your business</span> a competitive edge in the
                                {" "}online market.
                            </h3>
                            <div className="text ff-2 color-paragraph mb-70">
                                We help increase your brand visibility, attract the right audience, and convert traffic
                                into loyal customers through strategic, data-driven solutions. By combining expert
                                insights, creative execution, and continuous optimization, our services save you time,
                                reduce marketing costs, and deliver measurable results. With a dedicated team focused on
                                your goals, you gain sustainable growth, stronger brand presence, and long-term success.
                            </div>

                            <div className="content-detail">
                                <div className="left">
                                    <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-50">
                                        Choosing our services means partnering with a team committed to your growth and
                                        success.
                                    </h4>

                                    <div className="desc-1 ff-2 mb-50 color-paragraph">
                                        We design tailored strategies that align with your business objectives, ensuring
                                        higher engagement, better conversions, and improved ROI.
                                    </div>

                                    <div className="desc-2 ff-2 color-paragraph">
                                        Our transparent approach, ongoing the optimization, and use of the latest
                                        digital tools allow you to stay area competitors while making smarter marketing
                                    </div>
                                </div>
                                <div className="right image">
                                    <img loading="lazy" width="410" height="540"
                                        // src="./assets/images/section/img-services-detail-3.jpg" alt="Image" />
                                        src={serviceDetailsImage3} alt="Image" />
                                </div>
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
            <div className="canvas-header" style={{backgroundColor: "#1c1c1c", margin: "-15px -15px 15px -15px", padding: "15px"}}>
                <a href="#" className="logo-site">
                    <img src={DESLOGO} alt="Digital Elite Service" className="des-logo" style={{maxWidth: "150px"}} />
                </a>
                <span className="icon icon-close" style={{color: "white"}} data-bs-dismiss="offcanvas"></span>
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
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style={{"transition":"strokeDashoffset 10ms linear","strokeDasharray":"307.919, 307.919","strokeDashoffset":"277.672"}}>
            </path>
        </svg>
    </div>
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    </>
  );
}
