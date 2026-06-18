import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutUsHeroImg from "../../assets/images/aboutus/img-page-title-2.jpg";
import AboutUsImgVideo from "../../assets/images/aboutus/img-video.jpg";
import AboutUsFounderImg from "../../assets/images/aboutus/avt-testimonial.jpg";
import AboutUsConsultaionImg from "../../assets/images/aboutus/img-bg-cta-p-about.jpg";
import SidePopup from "../../components/sidePopup";
export default function AboutUs() {
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
                <h1 className="title mb-xl-50">
                  Generate more <span style={{color:"var(--digital-marketing-light)"}}>leads</span>,
                  <br />
                  increase visibility
                  <br />
                  and grow faster
                </h1>
                <div className="breadkcum">
                  <a href="/">Home</a>
                  <span className="icon icon-chevron-right"></span>
                  <span className="breadkcum-active">About us</span>
                </div>
              </div>
              <div className="image">
                <img
                  loading="lazy"
                  width="915"
                  height="470"
                  //   src="./assets/images/page-title/img-page-title-2.jpg"
                  src={AboutUsHeroImg}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="section-video flat-spacing-1">
          <div className="container">
            <div className="heading-section mb-70 text-center">
              <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                We don’t guess — <span>we grow.</span>
              </div>
              <h2 className="title letter-space--3 fw-6 mb-30">
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  Digital Elite
                </span>{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  {" "}
                  Service
                </span>{" "}
                is a results-driven agency specializing in Digital Marketing,
                Graphic Design, and Web Development.
              </h2>

              <p className="desc ff-2 text-body-1 mb-30 lh-32 fw-5 color-paragraph">
                At Digital Elite Service, we combine creativity, technology, and
                data-driven strategies to help businesses establish a powerful
                online presence and achieve sustainable growth.
                <br />
                From SEO and performance marketing to branding, web development,
                and social media management, our team delivers customized
                solutions designed to increase visibility, generate qualified
                leads, and maximize return on investment.
              </p>
            </div>

            <div className="row rg-30">
              <div className="col-lg-8">
                <div className="wg-video">
                  <div className="image">
                    <img
                      loading="lazy"
                      width="850"
                      height="470"
                      //   src="./assets/images/section/img-video.jpg"
                      src={AboutUsImgVideo}
                      alt="Image"
                    />
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                    className="popup-youtube btn-play"
                  >
                    <div className="icon">
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <i className="icon-play icon-color-red"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="testimonial-card">
                  <div className="img-sharp">
                    <div className="blob-wrapper">
                      <div className="blob"></div>
                    </div>
                  </div>
                  <p className="h5 text letter-space--3 fw-6 mb-50 lh-32">
                    “A reliable team that truly understands digital growth.
                    Transparent, data-driven, and highly effective.”
                  </p>
                  <div className="d-flex position-relative mb-50">
                    <a href="#" className="img-avt">
                      <img
                        loading="lazy"
                        width="80"
                        height="80"
                        // src="./assets/images/avatar/avt-testimonial.jpg"
                        src={AboutUsFounderImg}
                        alt="Image"
                      />
                    </a>
                    <div className="icon">
                      <i className="icon-quote"></i>
                    </div>
                  </div>
                  <div className="testimonial-user">
                    <a href="#" className="h5 name fw-6 letter-space--3">
                      Benjamin Harris
                    </a>
                    <div className="position ff-2 fw-6">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="list-funfact-item p-about mt-100">
              <div className="funfact-item-2">
                <div className="progress-circle-svg" data-progress="99">
                  <svg
                    className="progress-ring"
                    width="154"
                    height="154"
                    viewBox="0 0 154 154"
                  >
                    <circle
                      className="progress-ring-track"
                      r="75"
                      cx="77"
                      cy="77"
                    />
                    <circle
                      className="progress-ring-bar"
                      r="75"
                      cx="77"
                      cy="77"
                    />
                  </svg>
                  <div className="inner-bg"></div>
                  <div className="text-number">
                    <span className="progress-text h4 fw-6 letter-space--3 color-white">
                      0
                    </span>
                    <span className="h4 fw-6 letter-space--3 color-white">
                      %
                    </span>
                  </div>
                </div>
                <div className="content-item">
                  <p className="title fs-20 lh-24 letter-space--3 fw-5 ">
                    (Clients Satisfactions)
                  </p>
                  <p className="desc ff-2 color-paragraph">
                    We deliver is guided by your goals
                    <br className="d-none d-xl-block" />
                    expectations communication.
                  </p>
                </div>
              </div>

              <div className="funfact-item-2">
                <div className="progress-circle-svg" data-progress="93">
                  <svg
                    className="progress-ring"
                    width="154"
                    height="154"
                    viewBox="0 0 154 154"
                  >
                    <circle
                      className="progress-ring-track"
                      r="75"
                      cx="77"
                      cy="77"
                    />
                    <circle
                      className="progress-ring-bar"
                      r="75"
                      cx="77"
                      cy="77"
                    />
                  </svg>
                  <div className="inner-bg"></div>
                  <div className="text-number">
                    <span className="progress-text h4 fw-6 letter-space--3 color-white">
                      0
                    </span>
                    <span className="h4 fw-6 letter-space--3 color-white">
                      %
                    </span>
                  </div>
                </div>
                <div className="content-item">
                  <p className="title fs-20 lh-24 letter-space--3 fw-5 ">
                    (Increase in ROAS)
                  </p>
                  <p className="desc ff-2 color-paragraph">
                    We help brands achieve measurable
                    <br className="d-none d-xl-block" />
                    increase in Return on (ROAS).
                  </p>
                </div>
              </div>

              <div className="funfact-item-2">
                <div className="progress-circle-svg" data-progress="90">
                  <svg
                    className="progress-ring"
                    width="154"
                    height="154"
                    viewBox="0 0 154 154"
                  >
                    <circle
                      className="progress-ring-track"
                      r="75"
                      cx="77"
                      cy="77"
                    />
                    <circle
                      className="progress-ring-bar"
                      r="75"
                      cx="77"
                      cy="77"
                    />
                  </svg>
                  <div className="inner-bg"></div>
                  <div className="text-number">
                    <span className="progress-text h4 fw-6 letter-space--3 color-white">
                      0
                    </span>
                    <span className="h4 fw-6 letter-space--3 color-white">
                      %
                    </span>
                  </div>
                </div>
                <div className="content-item">
                  <p className="title fs-20 lh-24 letter-space--3 fw-5 ">
                    (Boost Ranked Keywords)
                  </p>
                  <p className="desc ff-2 color-paragraph">
                    We focus on improving your search
                    <br className="d-none d-xl-block" />
                    visibility strategically keywords
                  </p>
                </div>
              </div>

              <div className="funfact-item-2">
                <div className="progress-circle-svg" data-progress="20">
                  <svg
                    className="progress-ring"
                    width="154"
                    height="154"
                    viewBox="0 0 154 154"
                  >
                    <circle
                      className="progress-ring-track"
                      r="75"
                      cx="77"
                      cy="77"
                    />
                    <circle
                      className="progress-ring-bar"
                      r="75"
                      cx="77"
                      cy="77"
                    />
                  </svg>
                  <div className="inner-bg"></div>
                  <div className="text-number">
                    <span className="progress-text h4 fw-6 letter-space--3 color-white">
                      0
                    </span>
                    <span className="h4 fw-6 letter-space--3 color-white">
                      +
                    </span>
                  </div>
                </div>
                <div className="content-item">
                  <p className="title fs-20 lh-24 letter-space--3 fw-5 ">
                    (Supported Regions)
                  </p>
                  <p className="desc ff-2 color-paragraph">
                    Digital marketing solutions are
                    <br className="d-none d-xl-block" />
                    designed to support brands.
                  </p>
                </div>
              </div>
            </div>
            <div className="heading-section text-center mt-100">
              <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                Why Choose Us <span>Digital Excellence.</span>
              </div>

              <h2 className="title letter-space--3 fw-6 mb-30">
                Your trusted partner for <span style={{color:"var(--digital-marketing-light)"}}>digital growth</span> and success
              </h2>

              <p className="desc ff-2 text-body-1 lh-32 fw-5 color-paragraph">
                We focus on delivering measurable results through innovative
                marketing strategies, transparent communication, and a
                performance-driven approach. Our goal is not just to increase
                traffic but to help businesses generate quality leads, improve
                conversions, and build a lasting digital presence.
              </p>
            </div>
          </div>
        </section>

        <section className="section-cta p-about">
          <div className="image">
            <img
              loading="lazy"
              //   src="./assets/images/section/img-bg-cta-p-about.jpg"
              src={AboutUsConsultaionImg}
              alt="Image"
            />
          </div>
          <div className="container">
            <div className="content">
              <div className="heading-section style-white">
                <div className="sub-title h5 mb-15 letter-space--2 fw-5">
                  Get Consultations - <span>work together</span>
                </div>
                <h2 className="title letter-space--3 fw-6 mb-50">
                  Let’s build a <span style={{color:"var(--digital-marketing-light)"}}> smarter
                  <br />
                  marketing </span> strategy
                </h2>
                <a
                  href="/contact"
                  className="tf-btn style-big style-color-dt-light"
                >
                  <span className="text-btn">Get Started</span>
                  <span className="icon-btn">
                    <i className="icon-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-team p-about flat-spacing-7">
          <div className="container">
            <div className="heading-section d-flex align-items-center mb-70 justify-content-between flex-wrap g-30">
              <div className="letf">
                <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                  Meet Our professionals — <span>100+ members.</span>
                </div>
                <h2 className="title letter-space--3 fw-6">
                  Meet our <span style={{color:"var(--digital-marketing-blue)"}}>professional 
                  <br />
                   {" "}<span style={{color:"var(--digital-marketing-ligh)"}}>team</span> </span>members

                </h2>
              </div>

              <div className="right">
                <p className="desc ff-2 text-body-1 mb-30 lh-32 color-paragraph">
                  Team is made up of talented professionals who
                  <br />
                  bring creativity, strategy, and technical.
                </p>

                <a
                  href="/our-team"
                  className="tf-btn style-big style-color-dt-blue"
                >
                  <span className="text-btn">View All members</span>
                  <span className="icon-btn">
                    <i className="icon-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="container">
            <div
              dir="ltr"
              className="swiper tf-swiper"
              data-laptop="4"
              data-preview="4"
              data-tablet="3"
              data-mobile-sm="2"
              data-mobile="1"
              data-space-lg="70"
              data-space-md="30"
              data-space="30"
              data-space-sm="15"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="team-card hover-img no-border">
                    <a href="/team-details" className="image">
                      <img
                        loading="lazy"
                        width="270"
                        height="270"
                        src="./assets/images/team/img-team-1.jpg"
                        alt="Image"
                      />
                    </a>
                    <div className="team-content">
                      <a
                        href="/team-details"
                        className="name-team h5 fw-6 letter-space--3"
                      >
                        Alexander Mitchell
                      </a>
                      <p className="position ff-2">Head of IT Operations</p>
                      <div className="list-btn-bottom d-flex g-10">
                        <a href="#" className="btn-add btn-plus">
                          <i className="icon-plus"></i>
                        </a>

                        <ul className="list-btn-social d-flex g-10">
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-fb"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-ig"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-x"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="team-card hover-img no-border">
                    <a href="/team-details" className="image">
                      <img
                        loading="lazy"
                        width="270"
                        height="270"
                        src="./assets/images/team/img-team-2.jpg"
                        alt="Image"
                      />
                    </a>
                    <div className="team-content">
                      <a
                        href="/team-details"
                        className="name-team h5 fw-6 letter-space--3"
                      >
                        Christopher Langford
                      </a>
                      <p className="position ff-2">Project Manager</p>
                      <div className="list-btn-bottom d-flex g-10">
                        <a href="#" className="btn-add btn-plus">
                          <i className="icon-plus"></i>
                        </a>

                        <ul className="list-btn-social d-flex g-10">
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-fb"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-ig"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-x"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="team-card hover-img no-border">
                    <a href="/team-details" className="image">
                      <img
                        loading="lazy"
                        width="270"
                        height="270"
                        src="./assets/images/team/img-team-3.jpg"
                        alt="Image"
                      />
                    </a>
                    <div className="team-content">
                      <a
                        href="/team-details"
                        className="name-team h5 fw-6 letter-space--3"
                      >
                        Nathaniel Blackwood
                      </a>
                      <p className="position ff-2">Cybersecurity Lead</p>
                      <div className="list-btn-bottom d-flex g-10">
                        <a href="#" className="btn-add btn-plus">
                          <i className="icon-plus"></i>
                        </a>

                        <ul className="list-btn-social d-flex g-10">
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-fb"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-ig"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-x"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="team-card hover-img no-border">
                    <a href="/team-details" className="image">
                      <img
                        loading="lazy"
                        width="270"
                        height="270"
                        src="./assets/images/team/img-team-4.jpg"
                        alt="Image"
                      />
                    </a>
                    <div className="team-content">
                      <a
                        href="/team-details"
                        className="name-team h5 fw-6 letter-space--3"
                      >
                        Theodore Carrington
                      </a>
                      <p className="position ff-2">Lead UX/UI Designer</p>
                      <div className="list-btn-bottom d-flex g-10">
                        <a href="#" className="btn-add btn-plus">
                          <i className="icon-plus"></i>
                        </a>

                        <ul className="list-btn-social d-flex g-10">
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-fb"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-ig"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="btn-add">
                              <i className="icon-x"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sw-dot-pagination tf-sw-pagination style-dt-blue mt-20 d-xl-none"></div>
            </div>
          </div>
        </section>

        <section className="section-infiniteSlide mt-60">
          <div className="infiniteSlide-app infiniteSlide-1 bg-dt-blue ">
            <div
              className="infiniteSlide infiniteSlide-wrapper tf-marquee"
              data-clone="3"
            >
              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                  <i className="icon-light"></i>
                  Search Engine Optimization (SEO)
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Pay-Per-Click Advertising (PPC)
                  </div>
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Social Media Marketing (SMM)
                  </div>
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Branding & Digital Strategy
                  </div>
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Influencer Marketing
                  </div>
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Web Design & Development
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="infiniteSlide-app infiniteSlide-2 bg-dt-light">
            <div
              className="infiniteSlide infiniteSlide-wrapper tf-marquee"
              data-clone="3"
              data-style={{ right: "" }}
            >
              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                  <i className="icon-light"></i>
                  Search Engine Optimization (SEO)
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Pay-Per-Click Advertising (PPC)
                  </div>
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Social Media Marketing (SMM)
                  </div>
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Branding & Digital Strategy
                  </div>
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Influencer Marketing
                  </div>
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="infiniteSlide-slide">
                  <div className="h5 fw-6 marquee-item d-flex align-items-center g-20">
                    <i className="icon-light"></i>
                    Web Design & Development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-working-proccess flat-spacing-3 h-dm p-about">
          <div className="container">
            <div className="heading-section flat-spacing-2 text-center style-white">
              <div className="sub-title h6 mb-12 letter-space--2 fw-5">
                Driven by Strategy <span>Focused on Results.</span>
              </div>
              <h2 className="title letter-space--3 fw-6">
                We build  <span style={{color:"var(--digital-marketing-light)"}}>customized marketing </span> solutions connect businesses with
                the  <span style={{color:"var(--digital-marketing-light)"}}>right </span> audience focus is on <span style={{color:"var(--digital-marketing-light)"}}>transparency</span>, performance
              </h2>
            </div>
          </div>
          {/* <div className="section-working-proccess-inner">
            <div
              dir="ltr"
              className="swiper tf-swiper mb-104"
              data-laptop="4.45"
              data-preview="4"
              data-tablet="3"
              data-mobile-sm="2"
              data-mobile="1"
              data-space-lg="30"
              data-space-md="15"
              data-space="15"
              data-center="true"
              data-init="2"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="image-working-proccess img-1">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-1.jpg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-working-proccess img-2">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-2.jpg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-working-proccess img-3">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-3.jpg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-working-proccess img-2">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-4.jpg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-working-proccess img-1">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-5.jpg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-working-proccess img-1">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-1.jpg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-working-proccess img-2">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-2.jpg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-working-proccess img-3">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-3.jpg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-working-proccess img-2">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-4.jpg"
                      alt="Image"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-working-proccess img-1">
                    <img
                      loading="lazy"
                      width="410"
                      height="273"
                      src="./assets/images/widget/img-working-proccess-5.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="bottom">
                <p className="text-2 h3 fw-6 letter-space--3 color-white mb-68">
                  You always know what’s working. Our clear reports, honest
                  communication, and
                  <br />
                  performance tracking keep you informed and confident at every
                  step.
                </p>

                <div className="list-why-item d-flex justify-content-between">
                  <div className="line"></div>
                  <div className="why-item-2">
                    <p className="number ff-2 fw-6 letter-space--3 text-body-2 lh-100">
                      01
                    </p>
                    <a href="#" className="h5 title fw-6 letter-space--3">
                      Data-Driven Strategies
                    </a>
                    <p className="desc ff-2">
                      We don’t guess—we analyze. Every campaign
                      <br />
                      is powered by real data, audience insights, and
                      <br />
                      performance metrics to ensure measurable.
                    </p>
                  </div>
                  <div className="why-item-2">
                    <p className="number ff-2 fw-6 letter-space--3 text-body-2 lh-100">
                      02
                    </p>
                    <a href="#" className="h5 title fw-6 letter-space--3">
                      Full-Service Expertise
                    </a>
                    <p className="desc ff-2">
                      From SEO and PPC to social media content
                      <br />
                      marketing, we provide complete to solutions
                      <br />
                      under one roof—saving you complexity.
                    </p>
                  </div>
                  <div className="why-item-2">
                    <p className="number ff-2 fw-6 letter-space--3 text-body-2 lh-100">
                      03
                    </p>
                    <a href="#" className="h5 title fw-6 letter-space--3">
                      Customized Growth Solutions
                    </a>
                    <p className="desc ff-2">
                      No one-size-fits-all plans. We tailor strategy
                      <br />
                      to your business goals, industry, and to target
                      <br />
                      audience for sustainable success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        <section className="section-testimonials flat-spacing-1">
          <div className="container">
            <div className="heading-section text-center mb-70">
              <div className="sub-title h6 mb-12 letter-space--2 fw-5">
                Clients Testimonials — <span>4.9/5 (300+Reviews).</span>
              </div>
              <h2 className="title letter-space--3 fw-6">
                Clients’ feedback  reflects the<span style={{color:"var(--digital-marketing-blue)"}}> trust
                <br />
                {" "}results</span>, & long partnerships.
              </h2>
            </div>
            <div
              dir="ltr"
              className="swiper tf-swiper"
              data-laptop="3"
              data-preview="3"
              data-tablet="2"
              data-mobile-sm="2"
              data-mobile="1"
              data-group-sm="2"
              data-space-lg="30"
              data-space-md="20"
              data-space="15"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="tes-item">
                    <div className="top">
                      <div className="rating">
                        <span className="text-body-1 fw-6 letter-space--3">
                          Rating
                        </span>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                      </div>
                      <div className="line"></div>
                      <div className="text fw-5 text-body-2 letter-space--3 lh-28">
                        “Their digital marketing strategies
                        <br />
                        delivered real, measurable growth for
                        <br />
                        our business. Traffic increased, leads
                        <br />
                        improved, and conversions followed.
                        <br />
                        clear communication and consistent
                        <br />
                        results made trusted partner.”
                      </div>
                    </div>

                    <div className="user-tes">
                      <a href="#" className="img-avt">
                        <img
                          loading="lazy"
                          width="66"
                          height="66"
                          src="./assets/images/avatar/avt-tes-1.jpg"
                          alt="Image"
                        />
                      </a>
                      <a
                        href="#"
                        className="name text-body-1 fw-6 letter-space--3"
                      >
                        Alexander Mitchell
                      </a>
                      <p className="position ff-2">CEO of BrightWave</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="tes-item">
                    <div className="top">
                      <div className="rating">
                        <span className="text-body-1 fw-6 letter-space--3">
                          Rating
                        </span>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                      </div>
                      <div className="line"></div>
                      <div className="text fw-5 text-body-2 letter-space--3 lh-28">
                        “From SEO to paid campaigns,
                        <br />
                        everything was well-planned and
                        <br />
                        performance-driven. We saw steady
                        <br />
                        improvement across all channels. A
                        <br />
                        professional team that truly
                        <br />
                        understands digital growth.”
                      </div>
                    </div>

                    <div className="user-tes">
                      <a href="#" className="img-avt">
                        <img
                          loading="lazy"
                          width="66"
                          height="66"
                          src="./assets/images/avatar/avt-tes-2.jpg"
                          alt="Image"
                        />
                      </a>
                      <a
                        href="#"
                        className="name text-body-1 fw-6 letter-space--3"
                      >
                        Samantha Carter,
                      </a>
                      <p className="position ff-2">Marketing Director</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="tes-item">
                    <div className="top">
                      <div className="rating">
                        <span className="text-body-1 fw-6 letter-space--3">
                          Rating
                        </span>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                      </div>
                      <div className="line"></div>
                      <div className="text fw-5 text-body-2 letter-space--3 lh-28">
                        “They transformed our online
                        <br />
                        presence with smart strategy and
                        <br />
                        creative execution. The results were
                        <br />
                        transparent and easy to track. We
                        <br />
                        highly recommend them for any
                        <br />
                        growing business.”
                      </div>
                    </div>

                    <div className="user-tes">
                      <a href="#" className="img-avt">
                        <img
                          loading="lazy"
                          width="66"
                          height="66"
                          src="./assets/images/avatar/avt-tes-3.jpg"
                          alt="Image"
                        />
                      </a>
                      <a
                        href="#"
                        className="name text-body-1 fw-6 letter-space--3"
                      >
                        Daniel Roberts
                      </a>
                      <p className="position ff-2">Founder of EcomBoost</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="tes-item">
                    <div className="top">
                      <div className="rating">
                        <span className="text-body-1 fw-6 letter-space--3">
                          Rating
                        </span>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                      </div>
                      <div className="line"></div>
                      <div className="text fw-5 text-body-2 letter-space--3 lh-28">
                        “Working with this agency felt like
                        <br />
                        having an in-house marketing team.
                        <br />
                        They focused on ROI, not vanity
                        <br />
                        metrics. The impact on our business
                        <br />
                        has been outstanding.”
                      </div>
                    </div>

                    <div className="user-tes">
                      <a href="#" className="img-avt">
                        <img
                          loading="lazy"
                          width="66"
                          height="66"
                          src="./assets/images/avatar/avt-tes-4.jpg"
                          alt="Image"
                        />
                      </a>
                      <a
                        href="#"
                        className="name text-body-1 fw-6 letter-space--3"
                      >
                        Samantha Carter,
                      </a>
                      <p className="position ff-2">Marketing Director</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="tes-item">
                    <div className="top">
                      <div className="rating">
                        <span className="text-body-1 fw-6 letter-space--3">
                          Rating
                        </span>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                      </div>
                      <div className="line"></div>
                      <div className="text fw-5 text-body-2 letter-space--3 lh-28">
                        “Their digital marketing strategies
                        <br />
                        delivered real, measurable growth for
                        <br />
                        our business. Traffic increased, leads
                        <br />
                        improved, and conversions followed.
                        <br />
                        clear communication and consistent
                        <br />
                        results made trusted partner.”
                      </div>
                    </div>

                    <div className="user-tes">
                      <a href="#" className="img-avt">
                        <img
                          loading="lazy"
                          width="66"
                          height="66"
                          src="./assets/images/avatar/avt-tes-1.jpg"
                          alt="Image"
                        />
                      </a>
                      <a
                        href="#"
                        className="name text-body-1 fw-6 letter-space--3"
                      >
                        Alexander Mitchell
                      </a>
                      <p className="position ff-2">CEO of BrightWave</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sw-dot-pagination tf-sw-pagination style-dt-blue mt-50"></div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="line-page"></div>
        </div>

        <div className="section-clients flat-spacing-1">
          <div className="container">
            <div className="heading-section text-center mb-70">
              <div className="sub-title h6 mb-12 letter-space--2 fw-5">
                Connect Our — <span>Global Clients.</span>
              </div>
              <h2 className="title letter-space--3 fw-6">
                Helping <span style={{color:"var(--digital-marketing-blue)"}}>80+</span> brands <span style={{color:"var(--digital-marketing-light)"}}>achieve success</span>
              </h2>
            </div>

            <div className="infiniteSlide-app list-brands">
              <div
                className="infiniteSlide infiniteSlide-wrapper tf-marquee g-30"
                data-clone="3"
              >
                <div className="infiniteSlide-slide">
                  <a className="brand-item">
                    <img
                      src="./assets/images/icon/brand-1.svg"
                      alt="Image"
                      className="brand"
                    />
                    <img
                      src="./assets/images/icon/hover-brand-1.svg"
                      alt="Image"
                      className="brand-hover"
                    />
                  </a>
                </div>

                <div className="infiniteSlide-slide">
                  <a className="brand-item">
                    <img
                      src="./assets/images/icon/brand-2.svg"
                      alt="Image"
                      className="brand"
                    />
                    <img
                      src="./assets/images/icon/hover-brand-2.svg"
                      alt="Image"
                      className="brand-hover"
                    />
                  </a>
                </div>

                <div className="infiniteSlide-slide">
                  <a className="brand-item">
                    <img
                      src="./assets/images/icon/brand-3.svg"
                      alt="Image"
                      className="brand"
                    />
                    <img
                      src="./assets/images/icon/hover-brand-3.svg"
                      alt="Image"
                      className="brand-hover"
                    />
                  </a>
                </div>

                <div className="infiniteSlide-slide">
                  <a className="brand-item">
                    <img
                      src="./assets/images/icon/brand-4.svg"
                      alt="Image"
                      className="brand"
                    />
                    <img
                      src="./assets/images/icon/hover-brand-4.svg"
                      alt="Image"
                      className="brand-hover"
                    />
                  </a>
                </div>

                <div className="infiniteSlide-slide">
                  <a className="brand-item">
                    <img
                      src="./assets/images/icon/brand-5.svg"
                      alt="Image"
                      className="brand"
                    />
                    <img
                      src="./assets/images/icon/hover-brand-5.svg"
                      alt="Image"
                      className="brand-hover"
                    />
                  </a>
                </div>

                <div className="infiniteSlide-slide">
                  <a className="brand-item">
                    <img
                      src="./assets/images/icon/brand-6.svg"
                      alt="Image"
                      className="brand"
                    />
                    <img
                      src="./assets/images/icon/hover-brand-6.svg"
                      alt="Image"
                      className="brand-hover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        <div className="overlay-filter" id="overlay-filter"></div>
      </main>

      <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="pop-up-nav-mobile">
          <div className="canvas-header">
            <a href="#" className="logo-site">
              <img src="./assets/images/logo/logo-mobi-1.svg" alt="" />
            </a>
            <span
              className="icon icon-close"
              data-bs-dismiss="offcanvas"
            ></span>
          </div>
          <div className="canvas-body">
            <div className="mb-content-top">
              <ul className="nav-ul-mb" id="wrapper-menu-navigation"></ul>
            </div>
          </div>
          <div className="canvas-bottom"></div>
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
                <img src="./assets/images/logo/logo-2.svg" alt="" />
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
                    src="./assets/images/widget/pop-up-siderbar-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="img">
                  <img
                    loading="lazy"
                    width="115"
                    height="115"
                    src="./assets/images/widget/pop-up-siderbar-2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="img">
                  <img
                    loading="lazy"
                    width="115"
                    height="115"
                    src="./assets/images/widget/pop-up-siderbar-3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="img">
                  <img
                    loading="lazy"
                    width="115"
                    height="115"
                    src="./assets/images/widget/pop-up-siderbar-4.jpg"
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
                    245 Park Avenue, Suite 300 New York
                  </a>
                </li>
                <li className="contact-list-item">
                  <a href="#" className="text-body-2 ff-2">
                    supporttech@gmail.com
                  </a>
                </li>
                <li className="contact-list-item">
                  <a href="#" className="text-body-2 ff-2">
                    +1 (200) 555-876
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
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "strokeDashoffset 10ms linear",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "277.672",
            }}
          ></path>
        </svg>
      </div>
    </>
  );
}
