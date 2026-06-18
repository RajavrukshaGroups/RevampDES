import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidePopup from '../../components/sidePopup';
import portfolioHeroImage from '../../assets/images/portfolio2/img-page-title-2.jpg';
import portfolioImage1 from '../../assets/images/portfolio2/project-item-2-1.jpg';
import portfolioImage2 from '../../assets/images/portfolio2/project-item-2-2.jpg';
import portfolioImage3 from '../../assets/images/portfolio2/project-item-2-3.jpg';
import portfolioImage4 from '../../assets/images/portfolio2/project-item-2-4.jpg';
import portfolioImage5 from '../../assets/images/portfolio2/project-item-2-5.jpg';
import portfolioImage6 from '../../assets/images/portfolio2/project-item-2-6.jpg';


export default function Portfolio2() {
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
                            <span style={{ color:"var(--digital-marketing-light)" }}>Delivering</span> impact
                            <br />- one project
                        </h1>
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">Projects 02</span>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="915" height="470"
                            // src="./assets/images/page-title/img-page-title-2.jpg" alt="Image" />
                            src={portfolioHeroImage} alt="Image" />
                    </div>
                </div>
            </div>
        </div>
        

        
        <section className="section-profilio flat-spacing-1">
            <div className="container">
                <div className="heading-section mb-70 text-center">
                    <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                        Explore Our — <span>Latest Works.</span>
                    </div>
                    <h2 className="title letter-space--3 fw-6 mb-30">
                        Let’s <span style={{ color:"var(--digital-marketing-blue)" }}>explore our </span>awards <span style={{ color:"var(--digital-marketing-light)" }}>winning projects</span>
                    </h2>
                </div>
                <div className="list-item-project-g-2">

                    <div className="item">
                        <div className="project-item hover-img style-3">
                            <a href="/portfolio-details" className="image">
                                <img loading="lazy" width="520" height="630"
                                    // src="./assets/images/project/project-item-2-1.jpg" alt="Image" />
                                    src={portfolioImage1} alt="Image" />
                            </a>
                            <div className="content">
                                <div className="meta-project">
                                    <span className="ff-2 fw-5">Digital product</span>
                                    <span className="line-dot"></span>
                                    <span className="ff-2 fw-5">2026</span>
                                </div>
                                <a href="/portfolio-details" className="name-project h5 fw-6 letter-space--3">
                                    Mobile Apps development
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="project-item hover-img style-3">
                            <a href="/portfolio-details" className="image">
                                <img loading="lazy" width="580" height="580"
                                    // src="./assets/images/project/project-item-2-2.jpg" alt="Image" />
                                    src={portfolioImage2} alt="Image" />
                            </a>
                            <div className="content">
                                <div className="meta-project">
                                    <span className="ff-2 fw-5">Digital product</span>
                                    <span className="line-dot"></span>
                                    <span className="ff-2 fw-5">2026</span>
                                </div>
                                <a href="/portfolio-details" className="name-project h5 fw-6 letter-space--3">
                                    Product design & branding
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="project-item hover-img style-3">
                            <a href="/portfolio-details" className="image">
                                <img loading="lazy" width="580" height="580"
                                    // src="./assets/images/project/project-item-2-3.jpg" alt="Image" />
                                    src={portfolioImage3} alt="Image" />
                            </a>
                            <div className="content">
                                <div className="meta-project">
                                    <span className="ff-2 fw-5">Digital product</span>
                                    <span className="line-dot"></span>
                                    <span className="ff-2 fw-5">2026</span>
                                </div>
                                <a href="/portfolio-details" className="name-project h5 fw-6 letter-space--3">
                                    Software development
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="project-item hover-img style-3">
                            <a href="/portfolio-details" className="image">
                                <img loading="lazy" width="580" height="580"
                                    // src="./assets/images/project/project-item-2-4.jpg" alt="Image" />
                                    src={portfolioImage4} alt="Image" />
                            </a>
                            <div className="content">
                                <div className="meta-project">
                                    <span className="ff-2 fw-5">Digital product</span>
                                    <span className="line-dot"></span>
                                    <span className="ff-2 fw-5">2026</span>
                                </div>
                                <a href="/portfolio-details" className="name-project h5 fw-6 letter-space--3">
                                    Software development
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="project-item hover-img style-3">
                            <a href="/portfolio-details" className="image">
                                <img loading="lazy" width="580" height="580"
                                    // src="./assets/images/project/project-item-2-5.jpg" alt="Image" />
                                    src={portfolioImage5} alt="Image" />
                            </a>
                            <div className="content">
                                <div className="meta-project">
                                    <span className="ff-2 fw-5">Digital product</span>
                                    <span className="line-dot"></span>
                                    <span className="ff-2 fw-5">2026</span>
                                </div>
                                <a href="/portfolio-details" className="name-project h5 fw-6 letter-space--3">
                                    Product design & branding
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="project-item hover-img style-3">
                            <a href="/portfolio-details" className="image">
                                <img loading="lazy" width="580" height="580"
                                    // src="./assets/images/project/project-item-2-6.jpg" alt="Image" />
                                    src={portfolioImage6} alt="Image" />
                            </a>
                            <div className="content">
                                <div className="meta-project">
                                    <span className="ff-2 fw-5">Digital product</span>
                                    <span className="line-dot"></span>
                                    <span className="ff-2 fw-5">2026</span>
                                </div>
                                <a href="/portfolio-details" className="name-project h5 fw-6 letter-space--3">
                                    Mobile Apps development
                                </a>
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
