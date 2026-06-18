import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PortfolioDetailsImage1 from '../../assets/images/portfolioDetails/project-information-item-1.jpg';
import PortfolioDetailsImage2 from '../../assets/images/portfolioDetails/project-results-item-1.jpg';
import PortfolioDetailsImage3 from '../../assets/images/portfolioDetails/img-section-portfolio-detail.jpg';

export default function PortfolioDetails() {
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
        

        
        <div className="page-title style-4">
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
                        Global E-commerce
                        <br />SEO Campaign
                    </h1>
                    <div className="breadkcum">
                        <a href="/">Home</a>
                        <span className="icon icon-chevron-right"></span>
                        <span className="breadkcum-active">Project details</span>
                    </div>
                </div>
            </div>
        </div>
        

        
        <section className="section-profilio-detail flat-spacing-1">

            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <p className="h3 letter-space--3 fw-6 mb-70">
                            Our Global E-commerce SEO Campaign focused on boosting the client’s online visibility and
                            organic traffic across international markets. Through comprehensive keyword research,
                            on-page optimization, technical SEO improvements, and high-quality backlink building,
                        </p>
                    </div>

                    <div className="project-information-item mb-74">
                        <div className="image">
                            <img loading="lazy" width="960" height="570"
                                // src="./assets/images/project/project-information-item-1.jpg" alt="Image" />
                                src={PortfolioDetailsImage1} alt="Image" />
                        </div>
                        <div className="content">
                            <p className="title h6 fw-6 letter-space--3 ">
                                Project Information
                            </p>
                            <ul>
                                <li>
                                    <p className="color-paragraph h6 letter-space--3">Category :</p>
                                    <p className="h6 fw-6 letter-space--3 color-black">eCommerce SEO Camping</p>
                                </li>
                                <li>
                                    <p className="color-paragraph h6 letter-space--3">Clients : </p>
                                    <p className="h6 fw-6 letter-space--3 color-black">Jonathan Doe</p>
                                </li>
                                <li>
                                    <p className="color-paragraph h6 letter-space--3">Complete Date : </p>
                                    <p className="h6 fw-6 letter-space--3 color-black">20 January 2026</p>
                                </li>
                                <li>
                                    <p className="color-paragraph h6 letter-space--3">Location : </p>
                                    <p className="h6 fw-6 letter-space--3 color-black">New York City</p>
                                </li>
                                <li>
                                    <p className="color-paragraph h6 letter-space--3">Working Hours : </p>
                                    <p className="h6 fw-6 letter-space--3 color-black">7 days</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="project-challenges-item flat-spacing-2">
                        <p className="h3 title lh-100 fw-6 letter-space--3 color-dt-black mb-22">
                            Project Challenges
                        </p>
                        <p className="desc ff-2 color-paragraph mb-30">
                            Every project comes with its unique set of challenges that test our creativity,
                            problem-solving skills, and adaptability. From tight deadlines and limited resources to
                            unexpected technical hurdles, we approach each obstacle as an opportunity to innovate and
                            deliver exceptional results. By carefully analyzing potential risks, collaborating closely
                            with stakeholders, and implementing strategic solutions, we ensure that every challenge
                            becomes a stepping stone toward project success.
                        </p>

                        <ul>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">High Competition –</span> Ranking for
                                popular products in a competitive market is tough.
                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Large Product Catalogs –</span>
                                Optimizing thousands of product pages can be overwhelming.

                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Duplicate Content Issues –</span>
                                Similar product descriptions across multiple pages hurt SEO.

                            </li>
                            <li className="text-body-2 color-paragraph mb-10">
                                <span className="fw-6 color-dt-black letter-space--3">Slow Site Speed –</span> Page load
                                times directly impact rankings and user experience.

                            </li>
                            <li className="text-body-2 color-paragraph">
                                <span className="fw-6 color-dt-black letter-space--3">Complex Site Architecture –</span>
                                Poorly structured navigation makes crawling and indexing difficult.

                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="project-results-item flat-spacing-2">
                <div className="container">
                    <div className="row rg-30">
                        <div className="col-sm-6 col-lg-5">
                            <div className="project-results-content">
                                <p className="h3 title lh-100 fw-6 letter-space--3 mb-22">
                                    Project Results
                                </p>
                                <div className="desc ff-2 color-paragraph">
                                    Our eCommerce SEO campaigns deliver measurable results
                                    that drive business growth. By optimizing site structure, content, and technical
                                    SEO, we
                                    improve search engine rankings, increase organic traffic, and enhance user
                                    engagement.
                                </div>
                                <ul>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Comprehensive Keyword Research
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        On-Page Optimization
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Technical SEO Fixes
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph mb-24">
                                        Content Strategy & Creation
                                    </li>
                                    <li className="text-body-2 lh-100 color-paragraph">
                                        User Experience (UX) Optimization
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-7">
                            <div className="image">
                                <img loading="lazy" width="740" height="470"
                                    // src="./assets/images/project/project-results-item-1.jpg" alt="Image" />
                                    src={PortfolioDetailsImage2} alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="image-section mb-74">
                    <img loading="lazy" 
                    // src="./assets/images/project/img-section-portfolio-detail.jpg" alt="Image" />
                    src={PortfolioDetailsImage3} alt="Image" />
                </div>
            </div>

            <div className="project-summery-item">
                <div className="container">
                    <p className="h3 title lh-100 fw-6 letter-space--3 mb-32">
                        Project Summery
                    </p>
                </div>
                <div className="container">
                    <div className="row justify-content-between rg-30">
                        <div className="col-lg-6">
                            <div className="desc text-body-1 ff-2 fw-5 letter-space--2 lh-35">
                                This project focused on enhancing the online visibility performance
                                of an eCommerce store through a comprehensive SEO strategy. From keyword research and
                                on-page optimization to technical SEO and content creation, every step was designed to
                                improve search engine rankings, drive organic traffic, and boost conversions.
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="text ff-2 color-paragraph">
                                This project focused on enhancing the online visibility and performance of an eCommerce
                                store through a comprehensive SEO strategy. From keyword research and on-page
                                optimization to technical SEO and content creation, every step was designed to improve
                                search engine rankings, drive organic traffic, and boost conversions. By addressing site
                                challenges, optimizing user experience, and implementing data-driven strategies, the
                                campaign successfully increased product visibility, engagement, and overall sales. The
                                project demonstrates a holistic approach to eCommerce SEO, turning complex challenges
                                into measurable business results.
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
