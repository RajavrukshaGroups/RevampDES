import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function OurTeam() {
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
                        Passionate people.
                        <br />powerful results.
                    </h1>
                    <div className="breadkcum">
                        <a href="/">Home</a>
                        <span className="icon icon-chevron-right"></span>
                        <span className="breadkcum-active">Our Team</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="img-page-title d-none d-lg-block">
            <div className="container">
                <div className="image">
                    <img loading="lazy" width="915" height="470" src="./assets/images/page-title/img-page-title-5.jpg"
                        alt="Image" />
                </div>
            </div>

        </div>
        

        
        <section className="section-team p-team flat-spacing-1">
            <div className="container">
                <div className="heading-section d-flex align-items-center justify-content-between mb-70 flex-wrap g-30">
                    <div className="letf">
                        <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                            Meet Our professionals — <span>100+ members.</span>
                        </div>
                        <h2 className="title letter-space--3 fw-6">
                            Meet our professional
                            <br />team members
                        </h2>
                    </div>

                    <div className="right">
                        <p className="desc ff-2 text-body-1 mb-30 lh-32 color-paragraph">
                            Team is made up of talented professionals who
                            <br />bring creativity, strategy, and technical.
                        </p>

                        <a href="/our-team" className="tf-btn style-big style-color-dt-blue">
                            <span className="text-btn">View All members</span>
                            <span className="icon-btn">
                                <i className="icon-arrow-up-right"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="list-item">
                    <div className="team-card hover-img">
                        <a href="/team-details" className="image">
                            <img loading="lazy" width="270" height="270" src="./assets/images/team/img-team-1.jpg"
                                alt="Image" />
                        </a>
                        <div className="team-content">
                            <a href="/team-details" className="name-team h5 fw-6 letter-space--3">Alexander Mitchell</a>
                            <p className="position ff-2">Head of IT Operations</p>
                            <div className="list-btn-bottom d-flex g-10">
                                <a href="#" className="btn-add btn-plus"><i className="icon-plus"></i></a>

                                <ul className="list-btn-social d-flex g-10">
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-fb"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-ig"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="team-card hover-img">
                        <a href="/team-details" className="image">
                            <img loading="lazy" width="270" height="270" src="./assets/images/team/img-team-2.jpg"
                                alt="Image" />
                        </a>
                        <div className="team-content">
                            <a href="/team-details" className="name-team h5 fw-6 letter-space--3">Christopher
                                Langford</a>
                            <p className="position ff-2">Project Manager</p>
                            <div className="list-btn-bottom d-flex g-10">
                                <a href="#" className="btn-add btn-plus"><i className="icon-plus"></i></a>

                                <ul className="list-btn-social d-flex g-10">
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-fb"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-ig"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="team-card hover-img">
                        <a href="/team-details" className="image">
                            <img loading="lazy" width="270" height="270" src="./assets/images/team/img-team-3.jpg"
                                alt="Image" />
                        </a>
                        <div className="team-content">
                            <a href="/team-details" className="name-team h5 fw-6 letter-space--3">Nathaniel
                                Blackwood</a>
                            <p className="position ff-2">Cybersecurity Lead</p>
                            <div className="list-btn-bottom d-flex g-10">
                                <a href="#" className="btn-add btn-plus"><i className="icon-plus"></i></a>

                                <ul className="list-btn-social d-flex g-10">
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-fb"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-ig"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="team-card hover-img">
                        <a href="/team-details" className="image">
                            <img loading="lazy" width="270" height="270" src="./assets/images/team/img-team-4.jpg"
                                alt="Image" />
                        </a>
                        <div className="team-content">
                            <a href="/team-details" className="name-team h5 fw-6 letter-space--3">Theodore
                                Carrington</a>
                            <p className="position ff-2">Lead UX/UI Designer</p>
                            <div className="list-btn-bottom d-flex g-10">
                                <a href="#" className="btn-add btn-plus"><i className="icon-plus"></i></a>

                                <ul className="list-btn-social d-flex g-10">
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-fb"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-ig"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="team-card hover-img">
                        <a href="/team-details" className="image">
                            <img loading="lazy" width="270" height="270" src="./assets/images/team/img-team-5.jpg"
                                alt="Image" />
                        </a>
                        <div className="team-content">
                            <a href="/team-details" className="name-team h5 fw-6 letter-space--3">Maximilian
                                Harrington</a>
                            <p className="position ff-2">Software Development</p>
                            <div className="list-btn-bottom d-flex g-10">
                                <a href="#" className="btn-add btn-plus"><i className="icon-plus"></i></a>

                                <ul className="list-btn-social d-flex g-10">
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-fb"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-ig"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="team-card hover-img">
                        <a href="/team-details" className="image">
                            <img loading="lazy" width="270" height="270" src="./assets/images/team/img-team-10.jpg"
                                alt="Image" />
                        </a>
                        <div className="team-content">
                            <a href="/team-details" className="name-team h5 fw-6 letter-space--3">William Johnson</a>
                            <p className="position ff-2">Software Development</p>
                            <div className="list-btn-bottom d-flex g-10">
                                <a href="#" className="btn-add btn-plus"><i className="icon-plus"></i></a>

                                <ul className="list-btn-social d-flex g-10">
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-fb"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-ig"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="team-card hover-img">
                        <a href="/team-details" className="image">
                            <img loading="lazy" width="270" height="270" src="./assets/images/team/img-team-11.jpg"
                                alt="Image" />
                        </a>
                        <div className="team-content">
                            <a href="/team-details" className="name-team h5 fw-6 letter-space--3">Matthew Brown</a>
                            <p className="position ff-2">Lead UX/UI Designer</p>
                            <div className="list-btn-bottom d-flex g-10">
                                <a href="#" className="btn-add btn-plus"><i className="icon-plus"></i></a>

                                <ul className="list-btn-social d-flex g-10">
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-fb"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-ig"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="team-card hover-img">
                        <a href="/team-details" className="image">
                            <img loading="lazy" width="270" height="270" src="./assets/images/team/img-team-12.jpg"
                                alt="Image" />
                        </a>
                        <div className="team-content">
                            <a href="/team-details" className="name-team h5 fw-6 letter-space--3">David Thompson</a>
                            <p className="position ff-2">Software Development</p>
                            <div className="list-btn-bottom d-flex g-10">
                                <a href="#" className="btn-add btn-plus"><i className="icon-plus"></i></a>

                                <ul className="list-btn-social d-flex g-10">
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-fb"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-ig"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-x"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="team-card hover-img">
                        <a href="/team-details" className="image">
                            <img loading="lazy" width="270" height="270" src="./assets/images/team/img-team-13.jpg"
                                alt="Image" />
                        </a>
                        <div className="team-content">
                            <a href="/team-details" className="name-team h5 fw-6 letter-space--3">Christopher Wilson</a>
                            <p className="position ff-2">Software Development</p>
                            <div className="list-btn-bottom d-flex g-10">
                                <a href="#" className="btn-add btn-plus"><i className="icon-plus"></i></a>

                                <ul className="list-btn-social d-flex g-10">
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-fb"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-ig"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn-add"><i className="icon-x"></i></a>
                                    </li>
                                </ul>
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
