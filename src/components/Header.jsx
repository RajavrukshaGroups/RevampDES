import React from "react";
import DESLOGO from "../assets/images/header/DES_logo_white.png";
import "./des-header.css";
export default function Header() {
  return (
    <>
      <header className="header header-fixed mt-xl-20">
        <div className="container w-1810 ">
          <div className="header-content ">
            <a href="/" className="logo">
              {/* <img src="./assets/images/logo/logo.svg" alt="company_logo" /> */}
              <img src={DESLOGO} alt="company_logo" className="des-logo"/>
            </a>
            <div className="header-center d-none d-xl-block">
              <nav className="box-navigation">
                <ul className="box-nav-menu">
                  <li className="menu-item has-sub_menu">
                    <a href="/" className="item-link active">
                      Home
                      {/* <span className="icon icon-chevron-down"></span> */}
                    </a>
                    {/* <div className="sub-menu">
                      <ul className="sub-menu_list">
                        <li>
                          <a href="/" className="sub-menu_link active">
                            Home Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a href="/home-seo" className="sub-menu_link">
                            Home Seo
                          </a>
                        </li>
                        <li>
                          <a
                            href="/home-branding-agency"
                            className="sub-menu_link"
                          >
                            Home Branding Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="/home-seo-marketing"
                            className="sub-menu_link"
                          >
                            Home Seo Marketing
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </li>

                  <li className="menu-item has-sub_menu">
                    <a href="" className="item-link">
                      Pages
                      <span className="icon icon-chevron-down"></span>
                    </a>
                    <div className="sub-menu">
                      <ul className="sub-menu_list">
                        <li>
                          <a href="/about-us" className="sub-menu_link">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="/our-team" className="sub-menu_link">
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a href="/team-details" className="sub-menu_link">
                            Team Details
                          </a>
                        </li>
                        {/* <li>
                          <a href="/pricing-plan" className="sub-menu_link">
                            Pricing Plan
                          </a>
                        </li> */}
                        <li>
                          <a href="/faqs" className="sub-menu_link">
                            Faqs
                          </a>
                        </li>

                        <li>
                          <a href="/contact" className="sub-menu_link">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a href="/404" className="sub-menu_link">
                            404
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="menu-item has-sub_menu">
                    <a href="" className="item-link">
                      Services
                      <span className="icon icon-chevron-down"></span>
                    </a>
                    <div className="sub-menu">
                      <ul className="sub-menu_list">
                        <li>
                          <a href="/services/Digital-marketing-agency-in-bangalore" className="sub-menu_link">
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a href="/services/seo-services-in-bangalore" className="sub-menu_link">
                            SEO
                          </a>
                        </li>

                        <li>
                          <a href="/services/social-media-marketing-company-bangalore" className="sub-menu_link">
                            Social Media Marketing
                          </a>
                        </li>

                        <li>
                          <a href="/services/web-development-company-bangalore" className="sub-menu_link">
                            Web Development
                          </a>
                        </li>

                        <li>
                          <a href="/services/graphic-design-company-bangalore" className="sub-menu_link">
                            Graphic Design
                          </a>
                        </li>

                        <li>
                          <a href="/services/lead-generation-companies-in-bangalore" className="sub-menu_link">
                            Lead Generation
                          </a>
                        </li>
                        <li>
                          <a href="/services/whatsapp-automation-AI-providers-india" className="sub-menu_link">
                            WhatsApp Automation
                          </a>
                        </li>
                        {/* <li>
                          <a href="/services-2" className="sub-menu_link">
                            Services 02
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="/service-details" className="sub-menu_link">
                            Service Details
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </li>

                  <li className="menu-item has-sub_menu">
                    <a href="" className="item-link">
                      Portfolio
                      <span className="icon icon-chevron-down"></span>
                    </a>
                    <div className="sub-menu">
                      <ul className="sub-menu_list">
                        <li>
                          <a href="/portfolio-1" className="sub-menu_link">
                            Portfolio 1
                          </a>
                        </li>
                        <li>
                          <a href="/portfolio-2" className="sub-menu_link">
                            Portfolio 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="/portfolio-details"
                            className="sub-menu_link"
                          >
                            Portfolio Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
{/* 
                  <li className="menu-item has-sub_menu">
                    <a href="" className="item-link">
                      Blog
                      <span className="icon icon-chevron-down"></span>
                    </a>
                    <div className="sub-menu">
                      <ul className="sub-menu_list">
                        <li>
                          <a href="/blog-gird" className="sub-menu_link">
                            Blog Grid
                          </a>
                        </li>
                        <li>
                          <a href="/blog-listing" className="sub-menu_link">
                            Blog Listing
                          </a>
                        </li>
                        <li>
                          <a href="/blog-detail" className="sub-menu_link">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li> */}
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
                <a
                  href="#pop-up-sidebar"
                  data-bs-toggle="modal"
                  className="tf-btn-sidebar"
                >
                  <i className="icon-union"></i>
                </a>
              </div>

              <div className="d-xl-none">
                <a
                  href="#mobileMenu"
                  data-bs-toggle="offcanvas"
                  className=" mobile-button"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}