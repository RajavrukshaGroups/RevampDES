import DESLogoSideBar from "../assets/images/header/DES_logo_new.svg";
import PopUpSidebar1 from "../assets/images/widget/pop-up-siderbar-1.jpg";
import PopUpSidebar2 from "../assets/images/widget/pop-up-siderbar-2.jpg";
import PopUpSidebar3 from "../assets/images/widget/pop-up-siderbar-3.jpg";
import PopUpSidebar4 from "../assets/images/widget/pop-up-siderbar-4.jpg";

export default function SidePopup() {
  return (
    <div
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
          </div>
  )}