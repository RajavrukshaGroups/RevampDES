import React from 'react';

export default function Footer() {
  return (
    <>
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
                            <div className="title-mobile h5 letter-space--3 fw-5">
                                Solutions
                                <i className="icon-chevron-down d-sm-none d-block"></i>
                            </div>
                            <div className="tf-collapse-content">
                                <ul className="content">
                                    <li className="support-item-footer"><a href="#" className="ff-2">Search Engine
                                            Optimization</a>
                                    </li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Pay-Per-Click
                                            Advertising</a>
                                    </li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Social Media
                                            Marketing</a>
                                    </li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Branding & Digital
                                            Strategy</a>
                                    </li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Influencer
                                            Marketing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-content footer-col-block footer-content-1">
                            <div className="title-mobile h5 letter-space--3 fw-5">
                                Our Company
                                <i className="icon-chevron-down d-sm-none d-block"></i>
                            </div>
                            <div className="tf-collapse-content">
                                <ul className="content">
                                    <li className="support-item-footer"><a href="#" className="ff-2">Company History</a>
                                    </li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Team Members</a></li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Latest Cases</a></li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Need a Careers</a></li>
                                    <li className="support-item-footer"><a href="#" className="ff-2">Articles & news</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-content footer-col-block newsletter-footer footer-content-2">
                            <div className="title-mobile h5 letter-space--3 fw-5">
                                Newsletter
                                <i className="icon-chevron-down d-sm-none d-block"></i>
                            </div>
                            <div className="tf-collapse-content">
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
                                            <label htmlFor="checkbox-1" className="text-checkbox ff-2">I here by accept all
                                                <a href="#" className="ff-2 fw-6">terms & conditions.</a></label>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="footer-content footer-col-block contact-footer footer-content-2">
                            <div className="title-mobile h5 letter-space--3 fw-5">
                                Contact Us
                                <i className="icon-chevron-down d-sm-none d-block"></i>
                            </div>
                            <div className="tf-collapse-content">
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
                                            <a href="#">+1 (415) 555-7890</a>
                                            <a href="#">+1 (310) 555-876</a>
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
    </>
  );
}
