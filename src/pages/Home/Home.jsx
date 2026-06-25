import DESLOGO from "../../assets/images/header/DES_logo_white.png";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroImg1 from "../../assets/images/hero/img-hero-1.jpg";
import HeroImg2 from "../../assets/images/hero/img-hero-2.jpg";
import BgBoxQuote from "../../assets/images/hero/bg-box-quote.jpg";
import avtTeam3 from "../../assets/images/hero/avt-team-3.jpg";
import avtTeam2 from "../../assets/images/hero/avt-team-2.jpg";
import avtTeam1 from "../../assets/images/hero/avt-team-1.jpg";
import ImgSectionStrategy from "../../assets/images/section/img-section-strategy.jpg";
import ImgVideo from "../../assets/images/section/img-video.jpg";
import AvtTestimonial from "../../assets/images/testimonial/avt-testimonial.jpg";
import ImgSectionService from "../../assets/images/widget/img-section-services.jpg";
import ImgAccording from "../../assets/images/widget/img-according.jpg";
import ImgSectionWhy from "../../assets/images/section/img-section-why.jpg";
import ImgSectionWhy2 from "../../assets/images/section/img-section-why-2.jpg";
import ImgSectionWhy3 from "../../assets/images/section/img-section-why-3.jpg";
import ImgSectionWhy4 from "../../assets/images/section/img-section-why-4.jpg";
import ProjectItem1 from "../../assets/images/projects/project-item-1.jpg";
import ProjectItem2 from "../../assets/images/projects/project-item-2.jpg";
import ProjectItem3 from "../../assets/images/projects/project-item-3.jpg";
import ProjectItem4 from "../../assets/images/projects/project-item-4.jpg";
import ProjectItem5 from "../../assets/images/projects/project-item-5.jpg";
import ProjectItem6 from "../../assets/images/projects/project-item-6.jpg";
import DESLogoSideBar from "../../assets/images/header/DES_logo_new.svg";
import PopUpSidebar1 from "../../assets/images/widget/pop-up-siderbar-1.jpg";
import PopUpSidebar2 from "../../assets/images/widget/pop-up-siderbar-2.jpg";
import PopUpSidebar3 from "../../assets/images/widget/pop-up-siderbar-3.jpg";
import PopUpSidebar4 from "../../assets/images/widget/pop-up-siderbar-4.jpg";
import SidePopup from "../../components/sidePopup";
import airzen from "../../../public/assets/images/clients/AIRZEN.png";
import alizaStore from "../../../public/assets/images/clients/ALIZA.png";
import aqua from "../../../public/assets/images/clients/aqua.png";
import humStrum from "../../../public/assets/images/clients/BEE.png";
import chaskaTea from "../../../public/assets/images/clients/CHASKA.png";
import petsHugs from "../../../public/assets/images/clients/PETS.png";
import sriSaiExim from "../../../public/assets/images/clients/SSE.png";
import dhsLogo from "../../../public/assets/images/clients/DHS.png";
import RRPL from "../../../public/assets/images/clients/RPL.png";
import PlumeriaResort from "../../../public/assets/images/clients/Plumeria.png";
import "./client-logo-fix.css";

export default function Home() {
  return (
    <>
      <main className="wrapper" id="wrapper">
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

        <section className="section-hero">
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
          <div className="hero-left">
            <div className="hero-content">
              <div className="sub-title h6 letter-space--2 fw-5 split-text effect-right">
                {/* Built for visibility.{" "} */}
                Built for growth.{" "}
                {/* <span className="color-dt-light">Designed for conversion.</span> */}
                <span className="color-dt-light">Powered by strategy.</span>
              </div>
              <h1 className="title letter-space--3 fw-4 split-text effect-right">
                {/* Fueling business
                <br />
                to growth through
                <br />
                digital marketing */}
                Elevating brands{" "}
                <br className="d-none d-md-block" />
                with{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  performance
                </span>{" "}
                <br className="d-none d-md-block" />
                marketing
              </h1>
              <div className="desc h5 lh-35 ff-2 fw-5 title-animation">
                {/* We help businesses grow by creating smart, results- */}
                From SEO and paid advertising to web design and automation, we
                create marketing systems that drive sustainable growth.
                {/* <br /> */}
              </div>
              <a
                href="/about-us"
                className="tf-btn style-big style-color-dt-light title-animation"
              >
                <span className="text-btn">Learn more</span>
                <span className="icon-btn">
                  <i className="icon-arrow-up-right"></i>
                </span>
              </a>
            </div>
            <div className="stats">
              <div className="counter-item stat">
                <div className="counter">
                  <div className="number-counter flex fs-65">
                    <span
                      className="number odometer color-primary h1 fw-6"
                      data-to="98"
                      data-inviewport="yes"
                    >
                      0
                    </span>
                    <span className="h1">%</span>
                  </div>
                </div>
                <div className="h5 ff-2 fw-6 lh-35">
                  Clients satisfied and
                  <br />
                  repeating
                </div>
              </div>
              <div className="counter-item stat">
                <div className="counter">
                  <div className="number-counter flex fs-65">
                    <span
                      className="number odometer color-primary h1 fw-6"
                      data-to="4.9"
                      data-inviewport="yes"
                    >
                      0
                    </span>
                  </div>
                </div>
                <div className="h5 ff-2 fw-6 lh-35">
                  Based on clients
                  <br />
                  reviews (1000+)
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="image-hero img-1 mb-10 wow fadeInUp">
              <img
                loading="lazy"
                width="916"
                height="470"
                src={HeroImg1}
                alt="Image"
              />
            </div>
            <div className="bottom-hero-right d-flex g-10 flex-wrap">
              <div className="d-flex flex-column justify-content-between">
                <div className="box-team-card mb-10 wow fadeInLeft flex-1">
                  <div className="img-bg">
                    <img
                      src="./assets/images/widget/img-bg-hero-h1.png"
                      alt="Image"
                    />
                  </div>
                  <div className="team-content">
                    <div className="counter-item">
                      <div className="counter">
                        <div className="number-counter flex fs-65 fw-6">
                          <span
                            className="number odometer color-primary h1"
                            data-to="10"
                            data-inviewport="yes"
                          >
                            {" "}
                            0{" "}
                          </span>
                          <span className="h1">+</span>
                        </div>
                      </div>
                    </div>

                    <div className="h5 letter-space--3 fw-5 ff-2">
                      Quality Team member
                    </div>
                  </div>
                  <div className="list-avatars">
                    <a href="#" className="img-avt">
                      <img
                        loading="lazy"
                        width="100"
                        height="100"
                        // src="./assets/images/avatar/avt-team-3.jpg"
                        src={avtTeam3}
                        alt="Image"
                      />
                    </a>
                    <a href="#" className="img-avt">
                      <img
                        loading="lazy"
                        width="100"
                        height="100"
                        // src="./assets/images/avatar/avt-team-2.jpg"
                        src={avtTeam2}
                        alt="Image"
                      />
                    </a>
                    <a href="#" className="img-avt">
                      <img
                        loading="lazy"
                        width="100"
                        height="100"
                        // src="./assets/images/avatar/avt-team-1.jpg"
                        src={avtTeam1}
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>

                <div className="box-quote wow fadeInLeft flex-1">
                  <div className="image">
                    <img
                      // src="./assets/images/section/bg-box-quote.jpg"
                      src={BgBoxQuote}
                      alt="img"
                    />
                  </div>
                  <div className="box-content">
                    <div className="title h5 fw-5 letter-space--3">
                      Best Quality
                      <br />
                      marketing
                      <br />
                      Solutions
                    </div>
                    <div className="user-box">
                      <a href="#" className="fw-5 letter-space--3">
                        Michael Anderson
                      </a>
                      <a href="#" className="text-caption letter-space--3 fw-5">
                        CEO & Founder
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-hero img-2 wow fadeInRight">
                <img
                  loading="lazy"
                  width="453"
                  height="470"
                  // src="./assets/images/section/img-hero-2.jpg"
                  src={HeroImg2}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-strategy flat-spacing-1 h-dm">
          <div className="container w-1750">
            <div className="top-section heading-section d-flex align-items-end justify-content-between flat-spacing-2 flex-wrap g-30">
              <div className="letf">
                <div className="sub-title h6 mb-10 letter-space--2 fw-5 wow fadeInUp">
                  Real strategies. <span>Real results.</span>
                </div>
                <h2 className="title letter-space--3 fw-6 wow fadeInUp">
                  <span style={{ color: "var(--digital-marketing-blue)" }}>
                    We believe
                  </span>{" "}
                  success comes from strategy, not guesswork.{" "}
                  <span style={{ color: "var(--digital-marketing-light)" }}>
                    Approach combines
                  </span>{" "}
                  deep market insight.
                </h2>
              </div>

              <div className="right">
                <p
                  className="desc ff-2 text-body-1 mb-30 lh-32 color-paragraph wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  We focus on creating real, data-driven strategies that deliver
                  measurable results. Every campaign is built on research,
                  insight and clear objectives—ensuring your marketing.
                </p>

                <a
                  href="/about-us"
                  className="tf-btn style-big style-border wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <span className="text-btn">Learn more</span>
                  <span className="icon-btn">
                    <i className="icon-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>

            <div className="row rg-30">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="marketing-card wow fadeInUp">
                  <div className="img-sharp">
                    <div className="blob-wrapper">
                      <div className="blob"></div>
                    </div>
                  </div>
                  <div className="logo">
                    <img
                      src="./assets/images/logo/logo-marketing-card.svg"
                      alt="image"
                    />
                  </div>
                  <div className="content">
                    <div className="text-body-4 title fw-6 letter-space--3">
                      Helping businesses connect, convert, and scale digitally.
                    </div>
                    <p className="desc ff-2 fw-5">
                      We ensure every marketing drives real results increased
                      traffic and engagement to higher and revenue
                    </p>
                    <div className="list-benefit d-flex g-30 rg-15 flex-wrap">
                      <div className="benefit-item d-flex align-items-center g-10 flex-wrap">
                        <i className="icon-check fs-24"></i>
                        <span className="ff-2 fw-5">
                          SEO & Search Visibility
                        </span>
                      </div>
                      <div className="benefit-item d-flex align-items-center g-10 flex-wrap">
                        <i className="icon-check fs-24"></i>
                        <span className="ff-2 fw-5">Data-Driven Strategy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="image wow fadeInUp" data-wow-delay=".2s">
                  <img
                    loading="lazy"
                    width="553"
                    height="500"
                    // src="./assets/images/section/img-section-strategy.jpg"
                    src={ImgSectionStrategy}
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="growth-card wow fadeInUp" data-wow-delay=".4s">
                  <div className="top-card">
                    <div className="counter-item">
                      <div className="counter mb-15">
                        <div className="number-counter flex fs-65 fw-6">
                          <span
                            className="number odometer color-primary h1 letter-space--3 fw-6"
                            data-to="63"
                            data-inviewport="yes"
                          >
                            {" "}
                            0{" "}
                          </span>
                          <span className="fs-60 lh-100 fw-6">%</span>
                        </div>
                      </div>
                      <p className="h5 fw-6 lh-35 ff-2 fw-6 color-paragraph">
                        Business develop growth
                      </p>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="content-card">
                    <p className="desc mb-30 ff-2 color-paragraph">
                      We help brands increase visibility, engage the right
                      audience, and convert leads into loyal customers.
                    </p>
                    <a
                      href="#"
                      className="tf-btn style-big style-color-dt-blue"
                    >
                      <span className="text-btn">Get Started</span>
                      <span className="icon-btn">
                        <i className="icon-arrow-up-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-video flat-spacing-3">
          <div className="container">
            <div className="heading-section mb-70 text-center">
              <div className="sub-title h6 mb-10 letter-space--2 fw-5 wow fadeInUp">
                We don’t guess — <span>we grow.</span>
              </div>
              <h2 className="title letter-space--3 fw-6 mb-30 wow fadeInUp">
                We are a{" "}
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  team of passionate
                </span>{" "}
                digital strategists, creatives, and analysts dedicated to{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  growth businesses
                </span>
                <br />
                {/* strategists, creatives, and analysts */}
                <br />
              </h2>

              <p className="desc ff-2 text-body-1 mb-30 lh-32 fw-5 color-paragraph wow fadeInUp">
                We are a results-driven digital marketing agency committed to
                helping brands grow
                <br />
                in an ever-evolving digital world focus on measurable results.
              </p>
            </div>

            <div className="row rg-30">
              <div className="col-12 col-md-6 col-lg-8">
                <div className="wg-video wow fadeInUp">
                  <div className="image">
                    <img
                      loading="lazy"
                      width="850"
                      height="470"
                      // src="./assets/images/section/img-video.jpg"
                      src={ImgVideo}
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

              <div className="col-12 col-md-6 col-lg-4">
                <div
                  className="testimonial-card wow fadeInUp"
                  data-wow-delay=".2s"
                >
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
                        src={AvtTestimonial}
                        alt="Image"
                      />
                    </a>
                    <div className="icon">
                      <i className="icon-quote"></i>
                    </div>
                  </div>
                  <div className="testimonial-user">
                    <a
                      href="/team-details"
                      className="h5 name fw-6 letter-space--3"
                    >
                      Benjamin Harris
                    </a>
                    <div className="position ff-2 fw-6">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-services h-dm">
          <div className="heading-section animation-follow mouse-follow-title">
            <div className="container w-1750">
              <div className="sub-title h6 mb-25 letter-space--2 fw-5 wow fadeInUp">
                Smart Digital Services. <span>Measurable Results.</span>
              </div>
              <div className="title title-big text-follow wow fadeInUp">
                Digital Marketing Services
              </div>
            </div>
            <div className="line-header-section"></div>
          </div>

          <div className="container w-1750">
            <div className="section-inner g-30">
              <div className="left-section">
                <div className="wg-according" id="According1">
                  <div
                    className="according-item"
                    style={{
                      // border: '2px solid',
                      // borderImage: 'linear-gradient(to right, blue, orange) 1',
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according1"
                        data-bs-toggle="collapse"
                        className="title-according  h5 fw-5 letter-space--5"
                      >
                        <span
                          className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5"
                          style={{ color: "#ffffff" }}
                        >
                          <span className="number-accourding text-body-3 ff-2 fw-4">
                            01
                          </span>
                          Search Engine Optimization (SEO)
                        </span>
                        <span className="icon">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according1"
                      className="collapse show"
                      data-bs-parent="#According1"
                      // style={{ background: '#F2F2F2',borderRadius: '10px', }}
                    >
                      <div className="according-content">
                        <p className="text ff-2 mb-25">
                          We help attract targeted organic traffic by
                          continuously monitoring performance and adapting to
                          search algorithm changes.
                        </p>
                        <ul
                          className="list-benefit d-flex align-items-center flex-wrap"
                          style={{
                            color: "#ffffff",
                          }}
                        >
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Keyword Research &
                            Strategy
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>On-Page SEO
                            Optimization
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Link Building &
                            Authority Growth
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>SEO Analytics &
                            Reporting
                          </li>
                        </ul>
                        <div className="image">
                          <img
                            loading="lazy"
                            width="550"
                            height="290"
                            // src="./assets/images/widget/img-according.jpg"
                            src={ImgAccording}
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item"
                    style={{
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according2"
                        data-bs-toggle="collapse"
                        className="title-according h5 fw-5 letter-space--5 collapsed"
                        style={{ color: "#ffffff" }}
                      >
                        <span className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5">
                          <span className="number-accourding text-body-3 ff-2 fw-4">
                            02
                          </span>
                          Pay-Per-Click Advertising (PPC)
                        </span>
                        <span className="icon">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according2"
                      className="collapse"
                      data-bs-parent="#According1"
                    >
                      <div className="according-content">
                        <p className="text ff-2 mb-25">
                          We help attract targeted organic traffic by
                          continuously monitoring performance and adapting to
                          search algorithm changes.
                        </p>
                        <ul className="list-benefit d-flex align-items-center flex-wrap">
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Keyword Research &
                            Strategy
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>On-Page SEO
                            Optimization
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Link Building &
                            Authority Growth
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>SEO Analytics &
                            Reporting
                          </li>
                        </ul>
                        <div className="image">
                          <img
                            loading="lazy"
                            width="550"
                            height="290"
                            // src="./assets/images/widget/img-according.jpg"
                            src={ImgAccording}
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item"
                    style={{
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according3"
                        data-bs-toggle="collapse"
                        className="title-according h5 fw-5 letter-space--5 collapsed"
                      >
                        <span
                          className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5"
                          style={{ color: "#ffffff" }}
                        >
                          <span className="number-accourding text-body-3 ff-2 fw-4">
                            03
                          </span>
                          Branding & Digital Strategy
                        </span>
                        <span className="icon">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according3"
                      className="collapse"
                      data-bs-parent="#According1"
                    >
                      <div className="according-content">
                        <p className="text ff-2 mb-25">
                          We help attract targeted organic traffic by
                          continuously monitoring performance and adapting to
                          search algorithm changes.
                        </p>
                        <ul className="list-benefit d-flex align-items-center flex-wrap">
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Keyword Research &
                            Strategy
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>On-Page SEO
                            Optimization
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Link Building &
                            Authority Growth
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>SEO Analytics &
                            Reporting
                          </li>
                        </ul>
                        <div className="image">
                          <img
                            loading="lazy"
                            width="550"
                            height="290"
                            // src="./assets/images/widget/img-according.jpg"
                            src={ImgAccording}
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item"
                    style={{
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according4"
                        data-bs-toggle="collapse"
                        className="title-according h5 fw-5 letter-space--5 collapsed"
                      >
                        <span
                          className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5"
                          style={{ color: "#ffffff" }}
                        >
                          <span className="number-accourding text-body-3 ff-2 fw-4">
                            04
                          </span>
                          Web Design & Development
                        </span>
                        <span className="icon">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according4"
                      className="collapse"
                      data-bs-parent="#According1"
                    >
                      <div className="according-content">
                        <p className="text ff-2 mb-25">
                          We help attract targeted organic traffic by
                          continuously monitoring performance and adapting to
                          search algorithm changes.
                        </p>
                        <ul className="list-benefit d-flex align-items-center flex-wrap">
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Keyword Research &
                            Strategy
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>On-Page SEO
                            Optimization
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Link Building &
                            Authority Growth
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>SEO Analytics &
                            Reporting
                          </li>
                        </ul>
                        <div className="image">
                          <img
                            loading="lazy"
                            width="550"
                            height="290"
                            // src="./assets/images/widget/img-according.jpg"
                            src={ImgAccording}
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item"
                    style={{
                      background: "linear-gradient(to right, blue, orange)",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    <p className="header-according">
                      <a
                        href="#according5"
                        data-bs-toggle="collapse"
                        className="title-according h5 fw-5 letter-space--5 collapsed"
                      >
                        <span
                          className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5"
                          style={{ color: "#ffffff" }}
                        >
                          <span className="number-accourding text-body-3 ff-2 fw-4">
                            05
                          </span>
                          Influencer Marketing
                        </span>
                        <span className="icon">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </p>
                    <div
                      id="according5"
                      className="collapse"
                      data-bs-parent="#According1"
                    >
                      <div className="according-content">
                        <p className="text ff-2 mb-25">
                          We help attract targeted organic traffic by
                          continuously monitoring performance and adapting to
                          search algorithm changes.
                        </p>
                        <ul className="list-benefit d-flex align-items-center flex-wrap">
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Keyword Research &
                            Strategy
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>On-Page SEO
                            Optimization
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>Link Building &
                            Authority Growth
                          </li>
                          <li
                            className="benefit-item letter-space--2"
                            style={{ color: "#ffffff" }}
                          >
                            <i className="icon-check"></i>SEO Analytics &
                            Reporting
                          </li>
                        </ul>
                        <div className="image">
                          <img
                            loading="lazy"
                            width="550"
                            height="290"
                            // src="./assets/images/widget/img-according.jpg"
                            src={ImgAccording}
                            alt="Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="image-testimonial">
                  <div className="image">
                    <img
                      loading="lazy"
                      width="845"
                      height="1000"
                      // src="./assets/images/widget/img-section-services.jpg"
                      src={ImgSectionService}
                      alt="Image"
                    />
                  </div>
                  <div className="content">
                    <div className="counter-item">
                      <div className="counter mb-10">
                        <div className="number-counter flex fs-65 fw-6">
                          <span
                            className="number odometer color-primary h1 letter-space--3 fw-6"
                            data-to="83"
                            data-inviewport="yes"
                          >
                            {" "}
                            0{" "}
                          </span>
                          <span className="h1 fw-6">%</span>
                        </div>
                      </div>
                    </div>

                    <p className="text h5 letter-space--3">
                      “Their digital strategies delivered <br />
                      measurable growth and consistent
                      <br />
                      leads for our business.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-services h-dm">
            <div className="heading-section animation-follow mouse-follow-title">
                <div className="container w-1750">
                    <div className="sub-title h6 mb-25 letter-space--2 fw-5 wow fadeInUp">
                        Smart Digital Services. <span>Measurable Results.</span>
                    </div>
                    <div className="title title-big text-follow wow fadeInUp">
                        Digital Marketing Services
                    </div>
                </div>
                <div className="line-header-section"></div>
            </div>

            <div className="container w-1750">
                <div className="section-inner g-30">
                    <div className="left-section">
                        <div className="wg-according" id="According1">
                            <div className="according-item">
                                <p className="header-according">
                                    <a href="#according1" data-bs-toggle="collapse"
                                        className="title-according  h5 fw-5 letter-space--5">
                                        <span className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5">
                                            <span className="number-accourding text-body-3 ff-2 fw-4">01</span>
                                            Search Engine Optimization (SEO)
                                        </span>
                                        <span className="icon"><i className="icon-chevron-right"></i>
                                        </span>
                                    </a>
                                </p>
                                <div id="according1" className="collapse show" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2 mb-25">
                                            We help attract targeted organic traffic by continuously monitoring
                                            performance and adapting to search algorithm changes.
                                        </p>
                                        <ul className="list-benefit d-flex align-items-center flex-wrap">
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Keyword
                                                Research & Strategy</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>On-Page
                                                SEO Optimization</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Link
                                                Building & Authority Growth</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>SEO
                                                Analytics & Reporting</li>
                                        </ul>
                                        <div className="image">
                                            <img loading="lazy" width="550" height="290"
                                                src="./assets/images/widget/img-according.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="according-item">
                                <p className="header-according">
                                    <a href="#according2" data-bs-toggle="collapse"
                                        className="title-according h5 fw-5 letter-space--5 collapsed">
                                        <span className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5">
                                            <span className="number-accourding text-body-3 ff-2 fw-4">02</span>
                                            Pay-Per-Click Advertising (PPC)
                                        </span>
                                        <span className="icon"><i className="icon-chevron-right"></i>
                                        </span>
                                    </a>
                                </p>
                                <div id="according2" className="collapse" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2 mb-25">
                                            We help attract targeted organic traffic by continuously monitoring
                                            performance and adapting to search algorithm changes.
                                        </p>
                                        <ul className="list-benefit d-flex align-items-center flex-wrap">
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Keyword
                                                Research & Strategy</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>On-Page
                                                SEO Optimization</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Link
                                                Building & Authority Growth</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>SEO
                                                Analytics & Reporting</li>
                                        </ul>
                                        <div className="image">
                                            <img loading="lazy" width="550" height="290"
                                                src="./assets/images/widget/img-according.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="according-item">
                                <p className="header-according">
                                    <a href="#according3" data-bs-toggle="collapse"
                                        className="title-according h5 fw-5 letter-space--5 collapsed">
                                        <span className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5">
                                            <span className="number-accourding text-body-3 ff-2 fw-4">03</span>
                                            Branding & Digital Strategy
                                        </span>
                                        <span className="icon"><i className="icon-chevron-right"></i>
                                        </span>
                                    </a>
                                </p>
                                <div id="according3" className="collapse" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2 mb-25">
                                            We help attract targeted organic traffic by continuously monitoring
                                            performance and adapting to search algorithm changes.
                                        </p>
                                        <ul className="list-benefit d-flex align-items-center flex-wrap">
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Keyword
                                                Research & Strategy</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>On-Page
                                                SEO Optimization</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Link
                                                Building & Authority Growth</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>SEO
                                                Analytics & Reporting</li>
                                        </ul>
                                        <div className="image">
                                            <img loading="lazy" width="550" height="290"
                                                src="./assets/images/widget/img-according.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="according-item">
                                <p className="header-according">
                                    <a href="#according4" data-bs-toggle="collapse"
                                        className="title-according h5 fw-5 letter-space--5 collapsed">
                                        <span className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5">
                                            <span className="number-accourding text-body-3 ff-2 fw-4">04</span>
                                            Web Design & Development
                                        </span>
                                        <span className="icon"><i className="icon-chevron-right"></i>
                                        </span>
                                    </a>
                                </p>
                                <div id="according4" className="collapse" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2 mb-25">
                                            We help attract targeted organic traffic by continuously monitoring
                                            performance and adapting to search algorithm changes.
                                        </p>
                                        <ul className="list-benefit d-flex align-items-center flex-wrap">
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Keyword
                                                Research & Strategy</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>On-Page
                                                SEO Optimization</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Link
                                                Building & Authority Growth</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>SEO
                                                Analytics & Reporting</li>
                                        </ul>
                                        <div className="image">
                                            <img loading="lazy" width="550" height="290"
                                                src="./assets/images/widget/img-according.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="according-item">
                                <p className="header-according">
                                    <a href="#according5" data-bs-toggle="collapse"
                                        className="title-according h5 fw-5 letter-space--5 collapsed">
                                        <span className="left d-flex align-items-center g-70 flex-wrap h3 fw-6 letter-space--5">
                                            <span className="number-accourding text-body-3 ff-2 fw-4">05</span>
                                            Influencer Marketing
                                        </span>
                                        <span className="icon"><i className="icon-chevron-right"></i>
                                        </span>
                                    </a>
                                </p>
                                <div id="according5" className="collapse" data-bs-parent="#According1">
                                    <div className="according-content">
                                        <p className="text ff-2 mb-25">
                                            We help attract targeted organic traffic by continuously monitoring
                                            performance and adapting to search algorithm changes.
                                        </p>
                                        <ul className="list-benefit d-flex align-items-center flex-wrap">
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Keyword
                                                Research & Strategy</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>On-Page
                                                SEO Optimization</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>Link
                                                Building & Authority Growth</li>
                                            <li className="benefit-item letter-space--2"><i className="icon-check"></i>SEO
                                                Analytics & Reporting</li>
                                        </ul>
                                        <div className="image">
                                            <img loading="lazy" width="550" height="290"
                                                src="./assets/images/widget/img-according.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="image-testimonial">
                            <div className="image">
                                <img loading="lazy" width="845" height="1000"
                                    src="./assets/images/widget/img-section-services.jpg" alt="Image" />
                            </div>
                            <div className="content">
                                <div className="counter-item">
                                    <div className="counter mb-10">
                                        <div className="number-counter flex fs-65 fw-6">
                                            <span className="number odometer color-primary h1 letter-space--3 fw-6"
                                                data-to="83" data-inviewport="yes"> 0 </span>
                                            <span className="h1 fw-6">%</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text h5 letter-space--3">
                                    “Their digital strategies delivered <br />measurable growth and consistent
                                    <br />leads
                                    for our business.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section> */}

        <section className="section-infiniteSlide">
          <div className="infiniteSlide-app infiniteSlide-1 bg-dt-blue ">
            <div
              className="infiniteSlide infiniteSlide-wrapper tf-marquee"
              data-clone="3"
            >
              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Search Engine Optimization (SEO)
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Pay-Per-Click Advertising (PPC)
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Social Media Marketing (SMM)
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Branding &amp; Digital Strategy
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Influencer Marketing
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Web Design &amp; Development
                </div>
              </div>
            </div>
          </div>

          <div className="infiniteSlide-app infiniteSlide-2 bg-dt-light">
            <div
              className="infiniteSlide infiniteSlide-wrapper tf-marquee"
              data-clone="3"
              data-style="right"
            >
              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Search Engine Optimization (SEO)
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Pay-Per-Click Advertising (PPC)
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Social Media Marketing (SMM)
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Branding &amp; Digital Strategy
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Influencer Marketing
                </div>
              </div>

              <div className="infiniteSlide-slide">
                <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 flex-wrap">
                  <i className="icon-light"></i>
                  Web Design &amp; Development
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-working-proccess flat-spacing-3 h-dm">
          <div className="container">
            <div className="heading-section flat-spacing-2 text-center style-white">
              <div className="sub-title h6 mb-12 letter-space--2 fw-5 wow fadeInUp">
                Driven by Strategy <span>Focused on Results.</span>
              </div>
              <h2 className="title letter-space--3 fw-6 wow fadeInUp">
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  We build
                </span>{" "}
                customized marketing solutions connect businesses with the{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  right audience
                </span>{" "}
                focus is on transparency, performance
              </h2>
            </div>
          </div>
          <div className="section-working-proccess-inner">
            <div
              dir="ltr"
              className="swiper tf-swiper flat-spacing-3"
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
              {/* <div className="swiper-wrapper">
                <div className="swiper-slide d-none d-sm-block">
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

                <div className="swiper-slide d-none d-sm-block">
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

                <div className="swiper-slide d-none d-sm-block">
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

                <div className="swiper-slide d-none d-sm-block">
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

                <div className="swiper-slide d-none d-sm-block">
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

                <div className="swiper-slide d-none d-sm-block">
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

                <div className="swiper-slide d-none d-sm-block">
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

                <div className="swiper-slide d-none d-sm-block">
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

                <div className="swiper-slide d-none d-sm-block">
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
              </div> */}
            </div>

            <div className="container">
              <div className="bottom-section">
                <div className="left">
                  <p className="h5 fw-5 letter-space--3 color-white text lh-32 wow fadeInUp">
                    We are a team of experienced digital marketers,
                    <br />
                    strategists, and creatives dedicated to helping
                    <br />
                    brands succeed online.
                  </p>

                  <div className="counter-item wow fadeInUp">
                    <div className="counter">
                      <div className="number-counter d-flex">
                        <span
                          className="number odometer color-primary fs-200 lh-100 letter-space--5 fw-6"
                          data-to="15"
                          data-inviewport="yes"
                        >
                          {" "}
                          0{" "}
                        </span>
                        <span className="fs-200 lh-100 fw-6 letter-space--5">
                          +
                        </span>
                      </div>
                    </div>
                    <p className="h5 fw-5 letter-space--3">
                      Years of <br />
                      experience
                    </p>
                  </div>
                </div>
                <div className="right">
                  <div
                    className="working-item wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <span className="number ff-2 text-body-2">01</span>
                    <div className="content">
                      <span className="h3 fw-6 letter-space--3 title">
                        Research & goal
                      </span>
                      <div className="text ff-2 ">
                        We begin every project with thorough research and a
                        clear understanding of your business objectives.
                      </div>
                    </div>
                  </div>
                  <div
                    className="working-item wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <span className="number ff-2 text-body-2">02</span>
                    <div className="content">
                      <span className="h3 fw-6 letter-space--3 title">
                        Ideation & design
                      </span>
                      <div className="text ff-2 ">
                        Our team transforms insights and strategy into
                        compelling creative concepts through ideation and
                        design.
                      </div>
                    </div>
                  </div>
                  <div
                    className="working-item wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <span className="number ff-2 text-body-2">03</span>
                    <div className="content">
                      <span className="h3 fw-6 letter-space--3 title">
                        Testing & Results
                      </span>
                      <div className="text ff-2 ">
                        We focus delivering measurable outcomes through rigorous
                        testing and continuous optimization.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-team h-dm">
          <div className="flat-spacing-3">
            <div className="parallax-main overflow-hidden">
              {/* <div className="img-section parallax-scaleInUp-large">
                <img
                  loading="lazy"
                  src="./assets/images/section/img-section-team.jpg"
                  alt="Image"
                />
              </div> */}
            </div>
          </div>

          {/* <div className="container w-1750">
            <div className="heading-section d-flex align-items-center justify-content-between flat-spacing-2 flex-wrap g-30">
              <div className="letf">
                <div className="sub-title h6 mb-10 letter-space--2 fw-5 wow fadeInUp">
                  Meet Our professionals — <span>100+ members.</span>
                </div>
                <h2 className="title letter-space--3 fw-6 wow fadeInUp">
                  Together, we collaborate, <br />
                  innovate, & push boundaries.
                </h2>
              </div>

              <div className="right">
                <p
                  className="desc ff-2 text-body-1 mb-30 lh-32 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  Team is made up of talented professionals who bring
                  creativity,
                  <br />
                  strategy, and technical expertise to every project.
                </p>

                <a
                  href="#"
                  className="tf-btn style-big style-color-dt-blue wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <span className="text-btn">View All members</span>
                  <span className="icon-btn">
                    <i className="icon-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div> */}

          {/* <div
            dir="ltr"
            className="sw-team swiper tf-swiper flat-spacing-3"
            data-laptop="5"
            data-preview="4"
            data-tablet="3"
            data-mobile-sm="2"
            data-mobile="1"
            data-space-lg="0"
            data-space-md="0"
            data-space="0"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="team-card hover-img">
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
                    <div className="list-btn-bottom d-flex g-10 flex-wrap">
                      <a href="#" className="btn-add btn-plus">
                        <i className="icon-plus"></i>
                      </a>

                      <ul className="list-btn-social d-flex g-10 flex-wrap">
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
                <div className="team-card hover-img">
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
                    <div className="list-btn-bottom d-flex g-10 flex-wrap">
                      <a href="#" className="btn-add btn-plus">
                        <i className="icon-plus"></i>
                      </a>

                      <ul className="list-btn-social d-flex g-10 flex-wrap">
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
                <div className="team-card hover-img">
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
                    <div className="list-btn-bottom d-flex g-10 flex-wrap">
                      <a href="#" className="btn-add btn-plus">
                        <i className="icon-plus"></i>
                      </a>

                      <ul className="list-btn-social d-flex g-10 flex-wrap">
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
                <div className="team-card hover-img">
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
                    <div className="list-btn-bottom d-flex g-10 flex-wrap">
                      <a href="#" className="btn-add btn-plus">
                        <i className="icon-plus"></i>
                      </a>

                      <ul className="list-btn-social d-flex g-10 flex-wrap">
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
                <div className="team-card hover-img">
                  <a href="/team-details" className="image">
                    <img
                      loading="lazy"
                      width="270"
                      height="270"
                      src="./assets/images/team/img-team-5.jpg"
                      alt="Image"
                    />
                  </a>
                  <div className="team-content">
                    <a
                      href="/team-details"
                      className="name-team h5 fw-6 letter-space--3"
                    >
                      Maximilian Harrington
                    </a>
                    <p className="position ff-2">Software Development</p>
                    <div className="list-btn-bottom d-flex g-10 flex-wrap">
                      <a href="#" className="btn-add btn-plus">
                        <i className="icon-plus"></i>
                      </a>

                      <ul className="list-btn-social d-flex g-10 flex-wrap">
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
          </div> */}
        </section>

        <section className="section-why flat-spacing-3 h-dm">
          <div className="container">
            <div className="heading-section mb-70 text-center">
              <div className="sub-title h6 mb-10 letter-space--2 fw-5 wow fadeInUp">
                Why Choose Us — <span>Core Features.</span>
              </div>
              <h2 className="title letter-space--3 fw-6 wow fadeInUp">
                We combine{" "}
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  expertise
                </span>
                ,
                <br />
                innovation and a client-focused{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  approach
                </span>
                .
              </h2>
            </div>

            <div className="section-why-inner">
              <div className="image image-frame">
                <img
                  id="mainImage"
                  loading="lazy"
                  width="630"
                  height="530"
                  // src="./assets/images/section/img-section-why.jpg"
                  src={ImgSectionWhy}
                  alt="Image"
                />
              </div>

              <div className="section-content">
                <div className="line"></div>

                <div className="wg-according" id="According2">
                  <div
                    className="according-item style-2 mb-30"
                    // data-image="./assets/images/section/img-section-why.jpg"
                    data-image={ImgSectionWhy}
                  >
                    <p className="header-according">
                      <a
                        href="#According-1"
                        data-bs-toggle="collapse"
                        className="title-according h5 letter-space--3 fw-6"
                      >
                        <span className="left d-flex align-items-center">
                          <span className="icon-left">
                            <svg
                              width="29"
                              height="24"
                              viewBox="0 0 29 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.2962 18.318C11.9422 18.318 11.5881 18.318 11.2341 18.318V17.2188H6.17627V21.4713C6.17627 22.8655 7.31091 24.0002 8.70518 24.0002C10.0995 24.0002 11.2341 22.8655 11.2341 21.4713V20.0039H12.2962C12.7587 20.0039 13.1392 19.6234 13.1392 19.161C13.1392 18.6985 12.7587 18.318 12.2962 18.318Z"
                                fill="white"
                              />
                              <path
                                d="M0 11.0148C0 12.4945 1.12227 13.7168 2.56094 13.8753V8.1543C1.12227 8.31278 0 9.53508 0 11.0148Z"
                                fill="white"
                              />
                              <path
                                d="M26.167 8.22363V13.8047C26.5379 13.7754 27.3072 13.6389 27.9535 12.9932C28.7549 12.1923 28.7735 11.2004 28.7735 11.0144C28.7735 9.53586 27.6203 8.32198 26.167 8.22363Z"
                                fill="white"
                              />
                              <path
                                d="M11.5191 6.49707H5.09004C4.62472 6.49707 4.24707 6.87472 4.24707 7.34004V14.6896C4.24707 15.1549 4.62472 15.5326 5.09004 15.5326H11.5191V6.49707Z"
                                fill="white"
                              />
                              <path
                                d="M23.9053 0.0377396C23.5628 -0.0712845 23.1913 0.0613428 22.9884 0.365374C22.9545 0.416514 20.2323 5.22594 13.2046 6.37013V15.6602C17.6569 16.2738 21.4396 19.5872 22.9884 21.6644C23.434 22.3315 24.4808 21.9932 24.4808 21.1867V0.843057C24.4808 0.473836 24.2473 0.147326 23.9053 0.0377396Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span className="title">
                            Reliable Solutions, Clear
                            <br />
                            Communication
                          </span>
                        </span>
                        <span className="icon">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </p>
                    <div
                      id="According-1"
                      className="collapse show"
                      data-bs-parent="#According2"
                    >
                      <div className="according-content">
                        <p className="text ff-2">
                          We pride ourselves on delivering reliable solutions
                          every maintaining clear & transparent communication
                          solutions with our global clients.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item style-2 mb-30"
                    // data-image="./assets/images/section/img-section-why-2.jpg"
                    data-image={ImgSectionWhy2}
                  >
                    <p className="header-according">
                      <a
                        href="#According-2"
                        data-bs-toggle="collapse"
                        className="title-according h5 letter-space--3 fw-6 collapsed"
                      >
                        <span className="left d-flex align-items-center">
                          <span className="icon-left">
                            <svg
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_55_587)">
                                <path
                                  d="M26.9573 0.579234C26.8631 0.247482 26.571 0 26.2089 0H23.0449C22.6077 0 22.2539 0.353795 22.2539 0.791016C22.2539 1.22824 22.6077 1.58203 23.0449 1.58203H24.8949L21.1173 5.84708C16.0244 11.6082 8.52959 14.6533 0.858902 13.9867C0.437924 13.9427 0.040834 14.271 0.00302343 14.7066C-0.0348398 15.1415 0.287314 15.5247 0.722953 15.5625C1.46297 15.6266 2.0874 15.6583 2.82516 15.6583C10.217 15.6583 17.3701 12.4733 22.3024 6.89449L25.4179 3.37816V3.95508C25.4179 4.3923 25.7717 4.74609 26.2089 4.74609C26.6462 4.74609 27 4.3923 27 3.95508V1.57159L26.9573 0.579234Z"
                                  fill="white"
                                />
                                <path
                                  d="M26.209 25.4182H25.3652V7.63408C25.3652 7.30191 25.1575 7.00528 24.8454 6.89095C24.5341 6.77894 24.1841 6.87006 23.9694 7.12424L23.4835 7.70126C22.6802 8.65449 21.8049 9.56062 20.881 10.3926C20.7142 10.5424 20.6191 10.7564 20.6191 10.9804V25.4182H19.0371V13.4485C19.0371 13.1565 18.8756 12.8877 18.6185 12.7502C18.3612 12.6143 18.0468 12.6282 17.805 12.7919C16.8232 13.4516 15.7881 14.0542 14.7282 14.584C14.4602 14.7177 14.291 14.9919 14.291 15.2916V25.4182H12.709V16.6404C12.709 16.3831 12.5838 16.1421 12.3738 15.9938C12.1644 15.8462 11.894 15.8107 11.6522 15.8957C10.6488 16.2534 9.61369 16.5569 8.57545 16.7964C8.21702 16.8798 7.96289 17.1989 7.96289 17.5673V25.4182H6.38086V18.1127C6.38086 17.8872 6.2843 17.6724 6.11666 17.5226C5.94749 17.3727 5.71804 17.2962 5.50025 17.3271C4.48522 17.443 3.45088 17.5025 2.42504 17.504C1.98861 17.5048 1.63482 17.8586 1.63482 18.295V25.4182H0.791016C0.353795 25.4182 0 25.772 0 26.2092C0 26.6465 0.353795 27.0002 0.791016 27.0002H26.209C26.6462 27.0002 27 26.6465 27 26.2092C27 25.772 26.6462 25.4182 26.209 25.4182Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_55_587">
                                  <rect width="27" height="27" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span className="title">
                            Multi-Channel Campaign
                            <br />
                            Management
                          </span>
                        </span>
                        <span className="icon">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </p>
                    <div
                      id="According-2"
                      className="collapse"
                      data-bs-parent="#According2"
                    >
                      <div className="according-content">
                        <p className="text ff-2">
                          We pride ourselves on delivering reliable solutions
                          every maintaining clear & transparent communication
                          solutions with our global clients.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item style-2 mb-30"
                    // data-image="./assets/images/section/img-section-why-3.jpg"
                    data-image={ImgSectionWhy3}
                  >
                    <p className="header-according">
                      <a
                        href="#According-3"
                        data-bs-toggle="collapse"
                        className="title-according h5 letter-space--3 fw-6 collapsed"
                      >
                        <span className="left d-flex align-items-center">
                          <span className="icon-left">
                            <svg
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.6236 9.31689C22.4182 10.7526 22.8714 12.4025 22.8714 14.1563C22.8714 19.6852 18.3732 24.1833 12.8441 24.1833C7.31507 24.1833 2.81694 19.6852 2.81694 14.1563C2.81694 8.62746 7.31507 4.12928 12.8441 4.12928C14.5539 4.12928 16.1649 4.55987 17.5749 5.31761L19.6398 3.25279C17.6209 1.98922 15.2846 1.3125 12.8441 1.3125C9.41333 1.3125 6.18786 2.64848 3.76193 5.07438C1.336 7.50027 0 10.7256 0 14.1564C0 17.5871 1.336 20.8125 3.76193 23.2383C6.18792 25.6643 9.41333 27.0002 12.8441 27.0002C16.2748 27.0002 19.5003 25.6643 21.9261 23.2383C24.3521 20.8124 25.6881 17.5871 25.6881 14.1564C25.6881 11.6742 24.9884 9.29984 23.6828 7.25767L21.6236 9.31689Z"
                                fill="white"
                              />
                              <path
                                d="M13.827 11.7822C12.9024 11.4033 11.7961 11.5853 11.0463 12.3353C10.0458 13.3357 10.0458 14.9496 11.0463 15.9423C12.0463 16.9423 13.6602 16.9423 14.6528 15.9423C15.4031 15.1918 15.5848 14.0857 15.2059 13.1615L22.533 5.8345L23.7533 5.99354L26.9809 2.76552L24.5413 2.44L24.2153 0L20.9873 3.23541L21.1467 4.45524L13.827 11.7822Z"
                                fill="white"
                              />
                              <path
                                d="M17.622 13.3176C17.6696 13.5899 17.6946 13.8698 17.6946 14.1555C17.6946 16.8301 15.5188 19.006 12.8441 19.006C10.1696 19.006 7.99358 16.8301 7.99358 14.1555C7.99358 11.481 10.1695 9.30512 12.8441 9.30512C13.0793 9.30512 13.3105 9.32229 13.5369 9.35476L15.8074 7.08427C14.8953 6.7006 13.8941 6.48828 12.8441 6.48828C8.61633 6.48828 5.17676 9.92781 5.17676 14.1555C5.17676 18.3832 8.61633 21.8228 12.8441 21.8228C17.0719 21.8228 20.5115 18.3832 20.5115 14.1555C20.5115 13.0604 20.2802 12.0183 19.8647 11.075L17.622 13.3176Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span className="title">
                            Results-Focused
                            <br />
                            Performance
                          </span>
                        </span>
                        <span className="icon">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </p>
                    <div
                      id="According-3"
                      className="collapse"
                      data-bs-parent="#According2"
                    >
                      <div className="according-content">
                        <p className="text ff-2">
                          We pride ourselves on delivering reliable solutions
                          every maintaining clear & transparent communication
                          solutions with our global clients.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="according-item style-2"
                    // data-image="./assets/images/section/img-section-why-4.jpg"
                    data-image={ImgSectionWhy4}
                  >
                    <p className="header-according">
                      <a
                        href="#According-4"
                        data-bs-toggle="collapse"
                        className="title-according h5 letter-space--3 fw-6 collapsed"
                      >
                        <span className="left d-flex align-items-center">
                          <span className="icon-left">
                            <svg
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_55_603)">
                                <path
                                  d="M21.9194 16.7393C19.6927 18.9661 17.1234 20.7493 14.4795 21.9054L14.8201 25.4493C14.8493 25.754 15.0518 26.0144 15.3399 26.1179C15.4272 26.1493 15.5175 26.1645 15.6071 26.1645C15.8133 26.1645 16.0155 26.0837 16.1664 25.9328L21.2752 20.8241C22.6961 19.4032 23.2685 17.4504 22.9931 15.6006C22.6482 15.9887 22.2901 16.3686 21.9194 16.7393Z"
                                  fill="white"
                                />
                                <path
                                  d="M16.731 10.2641C16.92 10.4531 17.1712 10.5571 17.4385 10.5571C17.7057 10.5571 17.957 10.4531 18.1459 10.2641C18.536 9.87402 18.536 9.23929 18.1459 8.8492C17.9509 8.65418 17.6947 8.55664 17.4384 8.55664C17.1823 8.55664 16.926 8.65418 16.731 8.8492C16.341 9.23929 16.341 9.87402 16.731 10.2641Z"
                                  fill="white"
                                />
                                <path
                                  d="M26.8157 0.804124C26.754 0.488 26.5069 0.240889 26.1908 0.179257C24.1603 -0.21669 21.8536 0.0534079 19.5166 0.889429L26.1054 7.47827C26.9415 5.14124 27.2116 2.83452 26.8157 0.804124Z"
                                  fill="white"
                                />
                                <path
                                  d="M7.38932 11.4346C7.04837 12.0484 6.74279 12.6701 6.47553 13.2955C6.05228 14.286 6.26243 15.3744 7.02406 16.136L10.8591 19.9711C11.3606 20.4725 12.0037 20.7349 12.6672 20.7349C13.0114 20.7349 13.3613 20.6643 13.6997 20.5197C14.3251 20.2524 14.9467 19.9468 15.5606 19.6059L7.38932 11.4346Z"
                                  fill="white"
                                />
                                <path
                                  d="M11.3745 6.19383C10.1792 7.3891 9.12128 8.68698 8.23291 10.0404L16.9542 18.7617C18.3077 17.8733 19.6055 16.8154 20.8008 15.6201C22.8094 13.6115 24.3911 11.349 25.4536 9.06252L17.9321 1.54102C15.6455 2.60348 13.3831 4.18526 11.3745 6.19383ZM19.2646 11.3817C18.7769 11.8694 18.1285 12.138 17.4388 12.138C16.749 12.138 16.1006 11.8694 15.6129 11.3817C14.6061 10.3749 14.6061 8.7368 15.6129 7.73001C16.6196 6.72327 18.2578 6.72322 19.2646 7.73001C20.2714 8.7368 20.2714 10.3749 19.2646 11.3817Z"
                                  fill="white"
                                />
                                <path
                                  d="M7.7304 19.2746C7.4216 18.9658 6.92084 18.9658 6.61199 19.2746L0.236519 25.6502C-0.0723293 25.959 -0.0723293 26.4597 0.236519 26.7686C0.390944 26.923 0.593345 27.0002 0.795695 27.0002C0.998044 27.0002 1.2005 26.9231 1.35487 26.7686L7.7304 20.3931C8.0393 20.0842 8.0393 19.5835 7.7304 19.2746Z"
                                  fill="white"
                                />
                                <path
                                  d="M4.07883 16.7414L1.92548 18.8947C1.61664 19.2035 1.61664 19.7042 1.92548 20.0131C2.07991 20.1675 2.28231 20.2447 2.48466 20.2447C2.68701 20.2447 2.88946 20.1675 3.04383 20.0131L5.19718 17.8598C5.50603 17.551 5.50603 17.0503 5.19718 16.7414C4.88844 16.4325 4.38768 16.4326 4.07883 16.7414Z"
                                  fill="white"
                                />
                                <path
                                  d="M9.14567 21.8078L6.99238 23.9611C6.68353 24.27 6.68353 24.7707 6.99238 25.0795C7.1468 25.234 7.3492 25.3112 7.55155 25.3112C7.7539 25.3112 7.95636 25.234 8.11073 25.0795L10.264 22.9263C10.5729 22.6174 10.5729 22.1167 10.264 21.8078C9.95528 21.4989 9.45452 21.4989 9.14567 21.8078Z"
                                  fill="white"
                                />
                                <path
                                  d="M1.55601 12.1854L5.08637 12.5247C6.24231 9.87779 8.02697 7.30535 10.2562 5.07613C10.6251 4.70729 11.0024 4.35188 11.3868 4.00993C11.0952 3.96785 10.7984 3.94629 10.4983 3.94629C8.86483 3.94629 7.33161 4.57986 6.1812 5.73026L1.07249 10.839C0.856069 11.0554 0.783892 11.3774 0.887386 11.6655C0.990828 11.9536 1.25128 12.1561 1.55601 12.1854Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_55_603">
                                  <rect width="27" height="27" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span className="title">
                            Link Building & Authority
                            <br />
                            Growth
                          </span>
                        </span>
                        <span className="icon">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </p>
                    <div
                      id="According-4"
                      className="collapse"
                      data-bs-parent="#According2"
                    >
                      <div className="according-content">
                        <p className="text ff-2 mb-25">
                          We pride ourselves on delivering reliable solutions
                          every maintaining clear & transparent communication
                          solutions with our global clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-projects flat-spacing-7 bg-color-dt-gray h-dm">
          <div className="container w-1750">
            <div className="heading-section d-flex align-items-center justify-content-between flat-spacing-2 flex-wrap g-30">
              <div className="letf">
                <div className="sub-title h6 mb-12 letter-space--2 fw-5 wow fadeInUp">
                  Explore Our — <span>Latest Works.</span>
                </div>
                <h2 className="title letter-space--3 fw-6 wow fadeInUp">
                  Let’s explore our <br />
                  Works
                </h2>
              </div>

              <div className="right">
                <p
                  className="desc ff-2 text-body-1 mb-30 color-paragraph lh-32 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  We focus on quality, efficiency, and impact, helping
                  <br />
                  businesses achieve growth operations.
                </p>

                <a
                  href="#"
                  className="tf-btn style-big style-border wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <span className="text-btn">Explore more work</span>
                  <span className="icon-btn">
                    <i className="icon-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="list-project-item">
            <div className="project-item hover-img">
              <a href="/portfolio-details" className="image">
                <img
                  loading="lazy"
                  width="580"
                  height="580"
                  // src="./assets/images/project/project-item-1.jpg"
                  src={ProjectItem1}
                  alt="Image"
                />
              </a>
              <div className="content">
                {/* <div className="meta-project">
                  <span className="ff-2 fw-5">Digital marketing</span>
                  <span className="line-dot"></span>
                  <span className="ff-2 fw-5">2026</span>
                </div> */}
                <a
                  href="/portfolio-details"
                  className="name-project h5 fw-6 letter-space--3"
                >
                E-commerce SEO Campaign
                </a>
              </div>
            </div>
            <div className="project-item hover-img">
              <a href="/portfolio-details" className="image">
                <img
                  loading="lazy"
                  width="580"
                  height="580"
                  // src="./assets/images/project/project-item-2.jpg"
                  src={ProjectItem2}
                  alt="Image"
                />
              </a>
              <div className="content">
                {/* <div className="meta-project">
                  <span className="ff-2 fw-5">Digital marketing</span>
                  <span className="line-dot"></span>
                  <span className="ff-2 fw-5">2026</span>
                </div> */}
                <a
                  href="/portfolio-details"
                  className="name-project h5 fw-6 letter-space--3"
                >
                  Social Media Brand Awareness
                </a>
              </div>
            </div>
            <div className="project-item hover-img">
              <a href="/portfolio-details" className="image">
                <img
                  loading="lazy"
                  width="580"
                  height="580"
                  // src="./assets/images/project/project-item-3.jpg"
                  src={ProjectItem3}
                  alt="Image"
                />
              </a>
              <div className="content">
                {/* <div className="meta-project">
                  <span className="ff-2 fw-5">Digital marketing</span>
                  <span className="line-dot"></span>
                  <span className="ff-2 fw-5">2026</span>
                </div> */}
                <a
                  href="/portfolio-details"
                  className="name-project h5 fw-6 letter-space--3"
                >
                  Email Marketing Automation
                </a>
              </div>
            </div>
            <div className="project-item hover-img">
              <a href="/portfolio-details" className="image">
                <img
                  loading="lazy"
                  width="580"
                  height="580"
                  // src="./assets/images/project/project-item-4.jpg"
                  src={ProjectItem4}
                  alt="Image"
                />
              </a>
              <div className="content">
                {/* <div className="meta-project">
                  <span className="ff-2 fw-5">Digital marketing</span>
                  <span className="line-dot"></span>
                  <span className="ff-2 fw-5">2026</span>
                </div> */}
                <a
                  href="/portfolio-details"
                  className="name-project h5 fw-6 letter-space--3"
                >
                  Influencer Marketing Campaign
                </a>
              </div>
            </div>
            <div className="project-item hover-img">
              <a href="/portfolio-details" className="image">
                <img
                  loading="lazy"
                  width="580"
                  height="580"
                  // src="./assets/images/project/project-item-5.jpg"
                  src={ProjectItem5}
                  alt="Image"
                />
              </a>
              <div className="content">
                {/* <div className="meta-project">
                  <span className="ff-2 fw-5">Digital marketing</span>
                  <span className="line-dot"></span>
                  <span className="ff-2 fw-5">2026</span>
                </div> */}
                <a
                  href="/portfolio-details"
                  className="name-project h5 fw-6 letter-space--3"
                >
                  Brand Identity & Digital Branding
                </a>
              </div>
            </div>
            <div className="project-item hover-img">
              <a href="/portfolio-details" className="image">
                <img
                  loading="lazy"
                  width="580"
                  height="580"
                  // src="./assets/images/project/project-item-6.jpg"
                  src={ProjectItem6}
                  alt="Image"
                />
              </a>
              <div className="content">
                {/* <div className="meta-project">
                  <span className="ff-2 fw-5">Digital marketing</span>
                  <span className="line-dot"></span>
                  <span className="ff-2 fw-5">2026</span>
                </div> */}
                <a
                  href="/portfolio-details"
                  className="name-project h5 fw-6 letter-space--3"
                >
                  Local SEO for Small Businesses
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-testimonials flat-spacing-1 h-dm">
          <div className="container">
            <div className="heading-section flat-spacing-2 text-center">
              <div className="sub-title h6 mb-12 letter-space--2 fw-5 wow fadeInUp">
                Clients Testimonials — <span>4.9/5 (300+Reviews)</span>.
              </div>
              <h2 className="title letter-space--3 fw-6 wow fadeInUp">
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  Clients’{" "}
                </span>
                feedback reflects the trust
                <br />
                results, & long{" "}
                <span style={{ color: "var(--digital-marketing-light)" }}>
                  partnerships
                </span>
                .
              </h2>
            </div>
            <div className="row rg-70">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="tes-item mb-70">
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
              <div className="col-12 col-md-6 col-lg-4">
                <div className="box-quote-2">
                  <div className="top text-center">
                    <p className="fs-55 lh-70 fw-6">4.9/5</p>
                    <p className="h5 fw-6 ff-2">(300+ reviews)</p>
                  </div>

                  <div className="line"></div>

                  <div className="bottom text-center">
                    <p className="fs-55 lh-70 fw-6">10m+</p>
                    <p className="h5 fw-6 ff-2">Trusted clients</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="tes-item mb-70">
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
            </div>
          </div>
        </section>

        <section className="section-blog flat-spacing-3">
          <div className="flat-spacing-3">
            {/* <div className="parallax-main overflow-hidden">
              <div className="image-section parallax-scaleInUp-large">
                <img
                  loading="lazy"
                  src="./assets/images/section/img-section-blog.jpg"
                  alt="Image"
                />
              </div>
            </div> */}
          </div>

          <div className="container">
            <div className="row justify-content-between rg-50">
              {/* <div className="col-12 col-md-6 col-lg-5">
                <div className="heading-section">
                  <div className="sub-title h6 mb-12 letter-space--2 fw-5 wow fadeInUp">
                    Read Our — <span>News & Blog.</span>
                  </div>
                  <h2 className="title letter-space--3 fw-6 mb-40 wow fadeInUp">
                    Stay updated with latest insights.
                  </h2>
                  <p className="desc ff-2 text-body-1 mb-30 lh-32 color-paragraph wow fadeInUp">
                    We focus on quality, efficiency, and impact, helping
                    businesses achieve growth operations.
                  </p>
                  <a
                    href="#"
                    className="tf-btn style-big style-color-dt-blue wow fadeInUp"
                  >
                    <span className="text-btn">View More</span>
                    <span className="icon-btn">
                      <i className="icon-arrow-up-right"></i>
                    </span>
                  </a>
                </div>
              </div> */}

              {/* <div className="col-12 col-md-6 col-lg-6">
                <div
                  className="blog-card style-2 hover-img wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <a href="/blog-detail" className="image image-blog">
                    <img
                      loading="lazy"
                      width="630"
                      height="430"
                      src="./assets/images/blog/img-blog-card-8.jpg"
                      alt="Image"
                    />
                  </a>
                  <div className="card-content">
                    <div className="meta d-flex align-items-center flex-wrap g-30 rg-15">
                      <a
                        href="#"
                        className="user-blog d-flex align-items-center g-15 flex-wrap"
                      >
                        <span className="img">
                          <img
                            loading="lazy"
                            width="40"
                            height="40"
                            src="./assets/images/avatar/avt-blog.jpg"
                            alt="Image"
                          />
                        </span>
                        <span className="color-paragraph">
                          by <span className="color-dt-black">admin</span>
                        </span>
                      </a>
                      <div className="d-flex align-items-center g-10">
                        <a href="#" className="position meta-item ff-2 fw-6">
                          Marketing
                        </a>
                        <a href="#" className="date meta-item ff-2 fw-5">
                          20 Jan 2026
                        </a>
                      </div>
                    </div>
                    <a
                      href="/blog-detail"
                      className="h3 name-card fw-5 letter-space--3"
                    >
                      Digital marketing case studies lessons successful
                      campaigns real-world examples and insights.
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="blog-card style-2 hover-img wow fadeInUp">
                  <a href="/blog-detail" className="image image-blog">
                    <img
                      loading="lazy"
                      width="630"
                      height="430"
                      src="./assets/images/blog/img-blog-card-9.jpg"
                      alt="Image"
                    />
                  </a>
                  <div className="card-content">
                    <div className="meta d-flex align-items-center flex-wrap g-30 rg-15">
                      <a
                        href="#"
                        className="user-blog d-flex align-items-center g-15 flex-wrap"
                      >
                        <span className="img">
                          <img
                            loading="lazy"
                            width="40"
                            height="40"
                            src="./assets/images/avatar/avt-blog.jpg"
                            alt="Image"
                          />
                        </span>
                        <span className="color-paragraph">
                          by <span className="color-dt-black">admin</span>
                        </span>
                      </a>
                      <div className="d-flex align-items-center g-10">
                        <a href="#" className="position meta-item ff-2 fw-6">
                          Marketing
                        </a>
                        <a href="#" className="date meta-item ff-2 fw-5">
                          20 Jan 2026
                        </a>
                      </div>
                    </div>
                    <a
                      href="/blog-detail"
                      className="h3 name-card fw-5 letter-space--3"
                    >
                      Conversion Rate Optimization Tips – Turning website
                      visitors into loyal customers.
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div
                  className="blog-card style-2 hover-img wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <a href="/blog-detail" className="image image-blog">
                    <img
                      loading="lazy"
                      width="630"
                      height="430"
                      src="./assets/images/blog/img-blog-card-10.jpg"
                      alt="Image"
                    />
                  </a>
                  <div className="card-content">
                    <div className="meta d-flex align-items-center flex-wrap g-30 rg-15">
                      <a
                        href="#"
                        className="user-blog d-flex align-items-center g-15 flex-wrap"
                      >
                        <span className="img">
                          <img
                            loading="lazy"
                            width="40"
                            height="40"
                            src="./assets/images/avatar/avt-blog.jpg"
                            alt="Image"
                          />
                        </span>
                        <span className="color-paragraph">
                          by <span className="color-dt-black">admin</span>
                        </span>
                      </a>
                      <div className="d-flex align-items-center g-10">
                        <a href="#" className="position meta-item ff-2 fw-6">
                          Marketing
                        </a>
                        <a href="#" className="date meta-item ff-2 fw-5">
                          20 Jan 2026
                        </a>
                      </div>
                    </div>
                    <a
                      href="/blog-detail"
                      className="h3 name-card fw-5 letter-space--3"
                    >
                      How Social Media Ads Can Boost Your Brand – Effective
                      campaigns and best practices.
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="line-page"></div>
        </div>

        <div className="section-clients flat-spacing-1">
          <div className="container">
            <div className="heading-section text-center mb-70">
              <div className="sub-title h6 mb-12 letter-space--2 fw-5 wow fadeInUp">
                Connect Our — <span>Global Clients.</span>
              </div>
              <h2 className="title letter-space--3 fw-6 wow fadeInUp">
                Helping{" "}
                <span style={{ color: "var(--digital-marketing-blue)" }}>
                  80+
                </span>{" "}
                brands{" "}
                <span
                  style={{
                    color: "linear-gradient(to right, #2196F3, #FF9800",
                  }}
                >
                  success
                </span>
              </h2>
            </div>

{/* logos */}
            <div className="infiniteSlide-app list-brands">
              <div
                className="infiniteSlide infiniteSlide-wrapper tf-marquee g-30"
                data-clone="3"
              >
                <div className="infiniteSlide-slide">
                  <div className="brand-card">
                    <a className="brand-item">
                      <img src={airzen} alt="AirZen" className="brand" />
                    </a>

                    <h6 className="client-name">Airzen Technologies</h6>
                    <p className="client-industry">
                      Air Purification & Wellness
                    </p>
                  </div>
                </div>

                <div className="infiniteSlide-slide">
                  <div className="brand-card">
                    <a className="brand-item">
                      <img src={alizaStore} alt="aliza" className="brand" />
                    </a>

                    <h6 className="client-name">Aliza Stores</h6>
                    <p className="client-industry">E-Commerce & Retail</p>
                  </div>
                </div>

                <div className="infiniteSlide-slide">
                  <div className="brand-card">
                    <a className="brand-item">
                      <img src={aqua} alt="aqua" className="brand" />
                    </a>

                    <h6 className="client-name">Aqua Gold</h6>
                    <p className="client-industry">Water Treatment Solutions</p>
                  </div>
                </div>

                <div className="infiniteSlide-slide">
                  <div className="brand-card">
                    <a className="brand-item">
                      <img src={humStrum} alt="humstrum" className="brand" />
                    </a>

                    <h6 className="client-name">Hum & Strum Music School</h6>
                    <p className="client-industry">Music & Entertainment</p>
                  </div>
                </div>

                <div className="infiniteSlide-slide">
                  <div className="brand-card">
                    <a className="brand-item">
                      <img src={chaskaTea} alt="chaskaTea" className="brand" />
                    </a>

                    <h6 className="client-name">Chaska Tea</h6>
                    <p className="client-industry">Food & Beverage</p>
                  </div>
                </div>

                <div className="infiniteSlide-slide">
                  <div className="brand-card">
                    <a className="brand-item">
                      <img
                        src={sriSaiExim}
                        alt="sirsaiexim"
                        className="brand"
                      />
                    </a>

                    <h6 className="client-name">Sri Sai Exim</h6>
                    <p className="client-industry">Import & Export</p>
                  </div>
                </div>

                <div className="infiniteSlide-slide">
                  <div className="brand-card">
                    <a className="brand-item">
                      <img src={dhsLogo} alt="dhs" className="brand" />
                    </a>

                    <h6 className="client-name">Defence Housing Society</h6>
                    <p className="client-industry">Real Estate & Housing</p>
                  </div>
                </div>

                <div className="infiniteSlide-slide">
                  <div className="brand-card">
                    <a className="brand-item">
                      <img src={RRPL} alt="rrpl" className="brand" />
                    </a>

                    <h6 className="client-name">Rajavruksha Realtors</h6>
                    <p className="client-industry">
                      Real Estate & Construction
                    </p>
                  </div>
                </div>

                <div className="infiniteSlide-slide">
                  <div className="brand-card">
                    <a className="brand-item">
                      <img src={RRPL} alt="plumeria" className="brand" />
                    </a>

                    <h6 className="client-name">Plumeria Resort</h6>
                    <p className="client-industry">Hospitality & Tourism</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>

      <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="pop-up-nav-mobile">
          <div className="canvas-header" style={{backgroundColor: "#1c1c1c", margin: "-15px -15px 15px -15px", padding: "15px"}}>
            <a href="#" className="logo-site">
              <img src={DESLOGO} alt="Digital Elite Service" className="des-logo" style={{maxWidth: "150px"}} />
            </a>
            <span
              className="icon icon-close" style={{color: "white"}} data-bs-dismiss="offcanvas"
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
              <div className="list-img d-flex align-items-center g-20 flex-wrap">
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
