import DESLOGO from "../../assets/images/header/DES_logo_white.png";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//import ContactTitleImage from "../../assets/images/contact/img-page-title.jpg"
import ContactTitleImage from "../../assets/images/contact/img-page-title.png"
import ContactImage from "../../assets/images/contact/img-contact.png"
import DESLogoSideBar from "../../assets/images/header/DES_logo_new.svg";
import PopUpSidebar1 from "../../assets/images/widget/pop-up-siderbar-1.jpg";
import PopUpSidebar2 from "../../assets/images/widget/pop-up-siderbar-2.jpg";
import PopUpSidebar3 from "../../assets/images/widget/pop-up-siderbar-3.jpg";
import PopUpSidebar4 from "../../assets/images/widget/pop-up-siderbar-4.jpg";
import SidePopup from '../../components/sidePopup';

export default function Contact() {
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
                            We’d love to
                            <br /> <span style={{ color:"var(--digital-marketing-light)" }}>hear</span> from you
                        </h1>
                        <div className="breadkcum">
                            <a href="/">Home</a>
                            <span className="icon icon-chevron-right"></span>
                            <span className="breadkcum-active">Contact us</span>
                        </div>
                    </div>
                    <div className="image">
                        <img loading="lazy" width="915" height="470" src={ContactTitleImage}
                        // src="./assets/images/page-title/img-page-title.jpg"
                            alt="Image" />
                    </div>
                </div>
            </div>
        </div>
        

        <div className="main-content flat-spacing-1">
            <section className="section-contact p-contact flat-spacing-2">
                <div className="container">
                    <div className="row justify-content-between rg-30">
                        <div className="col-xl-4">
                            <div className="heading-section">
                                <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                                    Let’s Talk. <span>with our teams.</span>
                                </div>
                                <h2 className="title letter-space--3 fw-6">
                                    <span style={{ color: "var(--digital-marketing-blue)" }}>Connect</span> with our <span style={{ color: "var(--digital-marketing-light)" }}>team </span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="right">
                                <p className="desc text-body-1 lh-30 fw-5 color-paragraph mb-72">
                                    We’re here to help and would love to hear from you. Whether you have a question,
                                    need more information about our services, or are ready to get started, feel free to
                                    reach out to us anytime.
                                </p>

                                <div className="list-contact-item d-flex justify-content-between g-30 flex-wrap">
                                    <div className="contact-item">
                                        <p className="h5 title fw-6 lh-100 letter-space--3 color-dt-black">
                                            Karnataka, India
                                        </p>
                                        <ul>
                                            <li className="mb-16"><a href="#" className="ff-2 fw-5 color-gray-300">
                                                   35, 4th A cross, Dasarahalli Main Rd<br/>
                                                    Bhuvaneswari Nagar, Hebbal Kempapura,<br/>
                                                    Bengaluru, Karnataka 560024</a></li>
                                            <li className="mb-16 "><a href="#"
                                                    className="ff-2 fw-5 color-gray-300">info@digitaleliteservices.in <br/>
                                                    https://digitaleliteservices.in</a></li>
                                            <li><a href="#" className="ff-2 fw-5 color-gray-300 hover:text-decoration-underline">+91 6366930178 <br/>
                                                    +91 6366930178</a></li>
                                        </ul>
                                    </div>

                                    {/* <div className="contact-item">
                                        <p className="h5 title fw-6 lh-100 letter-space--3 color-dt-black">
                                            United Kingdom
                                        </p>
                                        <ul>
                                            <li className="mb-16"><a href="#" className="ff-2 fw-5 color-paragraph">45 Oxford
                                                    Street, Suite 3B London W1D <br />2DZ United Kingdom</a></li>
                                            <li className="mb-16"><a href="#"
                                                    className="ff-2 fw-5 color-paragraph">info@yourcompany.com</a></li>
                                            <li><a href="#" className="ff-2 fw-5 color-paragraph">+44 20 7946 0850</a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="wg-map flat-spacing-2">
                    {/* <iframe src="https://maps.google.com/maps?q=40.7128,-74.0060&z=13&output=embed" loading="lazy">
                    </iframe> */}
                    <iframe
                        src="https://maps.google.com/maps?q=13.0397,77.5919&z=15&output=embed"
                        loading="lazy">
                        </iframe>
                </div>
            </div>

            <section className="section-form">
                <div className="container">
                    <div className="row rg-50">
                        <div className="col-md-6">
                            <div className="left">
                                <div className="heading-section mb-xl-50">
                                    <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                                        Start a <span>Conversation</span>
                                    </div>
                                    <h2 className="title letter-space--3 fw-6">
                                        <span style={{color:"var(--digital-marketing-blue)"}}>Get</span> in <span style={{color:"var(--digital-marketing-light)"}}>touch</span> today
                                    </h2>
                                </div>
                                <form action="#" className="form-contact">
                                    <div className="cols tf-grid-layout sm-col-2 g-30 mb-30">
                                        <fieldset>
                                            <label className="fw-6 ff-2 letter-space--2 color-dt-black" htmlFor="name">
                                                Full name
                                            </label>
                                            <input type="text" id="name" required />
                                        </fieldset>
                                        <fieldset>
                                            <label className="fw-6 ff-2 letter-space--2 color-dt-black" htmlFor="email">
                                                Email address
                                            </label>
                                            <input type="email" id="email" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols tf-grid-layout sm-col-2 g-30 mb-30">
                                        <fieldset>
                                            <label className="fw-6 ff-2 letter-space--2 color-dt-black" htmlFor="phone">
                                                Phone
                                            </label>
                                            <input type="number" id="phone" required />
                                        </fieldset>
                                        <fieldset>
                                            <label className="fw-6 ff-2 letter-space--2 color-dt-black" htmlFor="subject">
                                                Subject
                                            </label>
                                            <input type="text" id="subject" required />
                                        </fieldset>
                                    </div>
                                    <fieldset className="mb-21">
                                        <label className="fw-6 ff-2 letter-space--2 color-dt-black" htmlFor="mess">
                                            Message
                                        </label>
                                        <textarea name="mess" id="mess"></textarea>
                                    </fieldset>
                                    <button className="tf-btn style-big style-color-dt-blue">
                                        <span className="text-btn">Send your message</span>
                                        <span className="icon-btn"><i className="icon-arrow-up-right"></i></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right">
                                <div className="image">
                                    <img loading='lazy' alt='Image' width='600' height='715'
                                        // src='./assets/images/section/img-contact.jpg' />
                                        src={ContactImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>



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
