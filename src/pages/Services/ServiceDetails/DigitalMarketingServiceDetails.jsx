import React, { useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SidePopup from "../../../components/sidePopup";
import {
  Building2,
  HeartPulse,
  GraduationCap,
  Laptop,
  ShoppingBag,
  Factory,
  Wallet,
  Hotel,
  Store,
  Scale,
  HardHat,
  Rocket,
  MapPin,
  Navigation,
  BadgeCheck,
  Megaphone,
  BarChart3,
  Target,
  TrendingUp,
  Bot,
  Brain,
  Database,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
// Import relevant images for the digital marketing service page
import digitalHeroImage from "../../../assets/images/serviceDetails/digital-marketing/digital-marketing-img-2.jpg";
import digitalDetailImage1 from "../../../assets/images/serviceDetails/digital-marketing/digital-marketing-img-1.jpg";
import digitalDetailImage2 from "../../../assets/images/serviceDetails/digital-marketing/digital-marketing-img-4.jpg";
import digitalDetailImage3 from "../../../assets/images/serviceDetails/digital-marketing/digital-marketing-img-3.jpg";
import Logo from "../../../assets/images/header/DES_logo.png"

export default function ServiceDetailsDigitalMarketing() {
  // Helper function to handle image errors
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    if (parent) {
      parent.style.background = '#f0f4f9';
      parent.style.minHeight = '200px';
      parent.style.display = 'flex';
      parent.style.alignItems = 'center';
      parent.style.justifyContent = 'center';
      parent.style.borderRadius = '8px';
      parent.innerHTML = '<span style="color: #666; font-size: 14px;">Image not available</span>';
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    // ============================================
    // 1. FADE IN UP ANIMATION
    // ============================================
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    fadeElements.forEach(el => fadeObserver.observe(el));

    // ============================================
    // 2. SLIDE IN LEFT ANIMATION
    // ============================================
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideLeftObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    slideLeftElements.forEach(el => slideLeftObserver.observe(el));

    // ============================================
    // 3. SLIDE IN RIGHT ANIMATION
    // ============================================
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    const slideRightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    slideRightElements.forEach(el => slideRightObserver.observe(el));

    // ============================================
    // 4. SCALE IN ANIMATION
    // ============================================
    const scaleElements = document.querySelectorAll('.scale-in');
    const scaleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    scaleElements.forEach(el => scaleObserver.observe(el));

    // ============================================
    // 5. ROTATE IN ANIMATION
    // ============================================
    const rotateElements = document.querySelectorAll('.rotate-in');
    const rotateObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    rotateElements.forEach(el => rotateObserver.observe(el));

    // ============================================
    // 6. FLIP IN ANIMATION
    // ============================================
    const flipElements = document.querySelectorAll('.flip-in');
    const flipObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    flipElements.forEach(el => flipObserver.observe(el));

    // ============================================
    // 7. ZOOM IN ANIMATION
    // ============================================
    const zoomElements = document.querySelectorAll('.zoom-in');
    const zoomObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    zoomElements.forEach(el => zoomObserver.observe(el));

    // ============================================
    // 8. BOUNCE IN ANIMATION
    // ============================================
    const bounceElements = document.querySelectorAll('.bounce-in');
    const bounceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    bounceElements.forEach(el => bounceObserver.observe(el));

    // ============================================
    // 9. BLUR IN ANIMATION
    // ============================================
    const blurElements = document.querySelectorAll('.blur-in');
    const blurObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    blurElements.forEach(el => blurObserver.observe(el));

    // ============================================
    // 10. GLOW IN ANIMATION
    // ============================================
    const glowElements = document.querySelectorAll('.glow-in');
    const glowObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    glowElements.forEach(el => glowObserver.observe(el));

    // ============================================
    // ODOMETER / COUNTER ANIMATION
    // ============================================
    const odometers = document.querySelectorAll('.odometer');
    odometers.forEach(odometer => {
      const target = parseFloat(odometer.getAttribute('data-to'));
      const inViewport = odometer.getAttribute('data-inviewport') === 'yes';
      
      const animateNumber = (el, target, duration = 2000) => {
        let start = 0;
        const isDecimal = target % 1 !== 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = isDecimal ? target.toFixed(1) : Math.floor(target);
            clearInterval(timer);
          } else {
            el.textContent = isDecimal ? start.toFixed(1) : Math.floor(start);
          }
        }, 16);
      };

      if (inViewport) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateNumber(odometer, target);
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
        obs.observe(odometer);
      } else {
        animateNumber(odometer, target);
      }
    });

    // ============================================
    // PARALLAX EFFECT ON HERO IMAGE
    // ============================================
    const heroImage = document.querySelector('.hero-image-wrapper');
    if (heroImage) {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.05}px)`;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    // ============================================
    // TYPING EFFECT ON SUBTITLE
    // ============================================
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
      const text = typingElement.textContent;
      typingElement.textContent = '';
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
          typingElement.textContent += text.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);
    }

    return () => {
      fadeObserver.disconnect();
      slideLeftObserver.disconnect();
      slideRightObserver.disconnect();
      scaleObserver.disconnect();
      rotateObserver.disconnect();
      flipObserver.disconnect();
      zoomObserver.disconnect();
      bounceObserver.disconnect();
      blurObserver.disconnect();
      glowObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        /* ============================================
           ANIMATION 1: FADE IN UP
           ============================================ */
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ============================================
           ANIMATION 2: SLIDE IN LEFT
           ============================================ */
        .slide-in-left {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .slide-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* ============================================
           ANIMATION 3: SLIDE IN RIGHT
           ============================================ */
        .slide-in-right {
          opacity: 0;
          transform: translateX(80px);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* ============================================
           ANIMATION 4: SCALE IN
           ============================================ */
        .scale-in {
          opacity: 0;
          transform: scale(0.6);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }

        /* ============================================
           ANIMATION 5: ROTATE IN
           ============================================ */
        .rotate-in {
          opacity: 0;
          transform: rotate(-15deg) scale(0.8);
          transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .rotate-in.visible {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }

        /* ============================================
           ANIMATION 6: FLIP IN
           ============================================ */
        .flip-in {
          opacity: 0;
          transform: perspective(600px) rotateY(90deg);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .flip-in.visible {
          opacity: 1;
          transform: perspective(600px) rotateY(0deg);
        }

        /* ============================================
           ANIMATION 7: ZOOM IN
           ============================================ */
        .zoom-in {
          opacity: 0;
          transform: scale(0.3);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .zoom-in.visible {
          opacity: 1;
          transform: scale(1);
        }

        /* ============================================
           ANIMATION 8: BOUNCE IN
           ============================================ */
        .bounce-in {
          opacity: 0;
          transform: translateY(100px);
          transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .bounce-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ============================================
           ANIMATION 9: BLUR IN
           ============================================ */
        .blur-in {
          opacity: 0;
          filter: blur(20px);
          transform: scale(1.1);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .blur-in.visible {
          opacity: 1;
          filter: blur(0px);
          transform: scale(1);
        }

        /* ============================================
           ANIMATION 10: GLOW IN
           ============================================ */
        .glow-in {
          opacity: 0;
          box-shadow: 0 0 40px rgba(0,0,0,0);
          transform: scale(0.95);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .glow-in.visible {
          opacity: 1;
          box-shadow: 0 0 60px rgba(var(--digital-marketing-light-rgb), 0.15);
          transform: scale(1);
        }

        /* ============================================
           HERO SECTION STYLES
           ============================================ */
        .page-title.hero-section {
          padding-top: 100px !important;
          padding-bottom: 40px !important;
        }

        .hero-section .hero-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 20px 0 10px;
        }

        .hero-section .hero-content {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .hero-section .hero-content .title {
          font-size: 56px;
          line-height: 1.15 !important;
          font-weight: 700;
          display: block;
        }

        .hero-section .hero-content .title .title-line {
          display: block;
          width: 100%;
        }

        .hero-section .hero-content .title .highlight-text {
          color: var(--digital-marketing-light);
          position: relative;
          display: inline-block;
        }

        .hero-section .hero-content .title .highlight-text::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(var(--digital-marketing-light-rgb), 0.2);
          border-radius: 4px;
          z-index: -1;
          transition: all 0.3s ease;
        }

        .hero-section .hero-content .title .highlight-text:hover::after {
          height: 100%;
          background: rgba(var(--digital-marketing-light-rgb), 0.1);
        }

        /* ============================================
           HERO IMAGE WRAPPER
           ============================================ */
        .hero-image-wrapper .image {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .hero-image-wrapper .image:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.12);
        }

        /* ============================================
           HERO IMAGE — responsive fix
           ============================================ */
        .img-page-title {
          margin-top: 0 !important;
          padding: 0 15px;
          margin-bottom: 30px;
        }
        
        .img-page-title .container {
          padding: 0;
        }
        
        .img-page-title .image {
          padding-left: 0 !important;
          max-width: 100% !important;
          border-radius: 12px;
          margin-left: 0 !important;
          margin-right: 0 !important;
          overflow: hidden;
        }
        
        .img-page-title .image img {
          width: 100%;
          height: auto;
          max-height: 470px;
          object-fit: cover;
          border-radius: 8px;
        }

        /* ============================================
           PARALLAX EFFECT
           ============================================ */
        .hero-image-wrapper {
          transition: transform 0.1s ease-out;
          will-change: transform;
        }

        /* ============================================
           CARD HOVER EFFECTS
           ============================================ */
        .process-item-2 {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }

        .p-30 {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* ============================================
           IMAGE HOVER ZOOM EFFECT
           ============================================ */
        .image {
          overflow: hidden;
          border-radius: 8px;
          position: relative;
          width: 100%;
        }

        .image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .image:hover img {
          transform: scale(1.08) rotate(-1deg);
        }

        /* ============================================
           LIST ITEM HOVER EFFECT
           ============================================ */
        .d-flex.flex-wrap > div {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          padding: 8px 12px;
          border-radius: 8px;
          cursor: default;
        }

        /* ============================================
           CTA BOX ANIMATION
           ============================================ */
        .p-40 {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          padding: 30px;
          border-radius: 12px;
          background: var(--digital-marketing-light-bg);
        }

        .p-40::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(var(--digital-marketing-light-rgb), 0.03), transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .p-40:hover::before {
          opacity: 1;
        }

        /* ============================================
           SIDEBAR CATEGORY ITEMS
           ============================================ */
        .category-services-item {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: block;
          padding: 10px 0;
          position: relative;
          cursor: pointer;
        }

        .category-services-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--digital-marketing-blue);
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 2px;
        }

        .category-services-item:hover::after,
        .category-services-item.active::after {
          width: 100%;
        }

        .category-services-item:hover {
          transform: translateX(8px);
          color: var(--digital-marketing-blue);
        }

        .category-services-item.active {
          color: var(--digital-marketing-blue);
          font-weight: 600;
        }

        /* ============================================
           GRID CARDS STAGGERED ANIMATION
           ============================================ */
        .row.g-4 > .d-flex {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* ============================================
           PROCESS LIST — horizontal on desktop
           ============================================ */
        .list-process-item {
          display: flex;
          gap: 30px;
        }
        .list-process-item .process-item-2 {
          flex: 1;
        }

        /* ============================================
           LOADING ANIMATION
           ============================================ */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page-title .hero-content {
          animation: fadeInUp 0.8s ease forwards;
        }

        .section-services-detail {
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: 0.2s;
        }

        /* ============================================
           RESPONSIVE — XL (≤1200px)
           ============================================ */
        @media (max-width: 1200px) {
          .hero-section .hero-content .title {
            font-size: 48px;
          }
          .page-title.hero-section {
            padding-top: 140px !important;
          }
        }

        /* ============================================
           RESPONSIVE — LG (≤992px)
           ============================================ */
        @media (max-width: 992px) {
          .hero-section .hero-content .title {
            font-size: 40px;
          }
          .page-title.hero-section {
            padding-top: 130px !important;
            padding-bottom: 30px !important;
          }
          .hero-section .hero-left {
            padding: 10px 0;
          }
          
          /* Sidebar: remove sticky so it sits above content */
          .card-sidebar {
            position: static !important;
            top: auto !important;
            left: auto !important;
            margin-bottom: 40px;
          }
          .card-sidebar ul {
            display: flex;
            flex-wrap: wrap;
            gap: 8px 12px;
            padding: 0;
            list-style: none;
          }
          .card-sidebar ul li {
            flex: 0 0 auto;
          }
          .category-services-item {
            padding: 8px 16px;
            background: var(--digital-marketing-light-bg, #f5f7ff);
            border-radius: 20px;
            white-space: nowrap;
            font-size: 14px;
          }
          .category-services-item::after {
            display: none;
          }
          .category-services-item:hover {
            transform: translateY(-2px);
            background: var(--digital-marketing-light);
            color: #fff;
          }
          .category-services-item.active {
            background: var(--digital-marketing-light);
            color: #fff;
          }
          
          /* Process list: 2-col wrap on tablet */
          .list-process-item {
            flex-wrap: wrap;
            gap: 24px;
          }
          .list-process-item .line {
            display: none !important;
          }
          .list-process-item .process-item-2 {
            flex: 1 1 calc(50% - 12px);
            min-width: 220px;
          }
          
          /* Hero image adjustments */
          .img-page-title .image img {
            max-height: 350px;
          }
        }

        /* ============================================
           RESPONSIVE — MD (≤768px)
           ============================================ */
        @media (max-width: 768px) {
          .hero-section .hero-content .title {
            font-size: 32px;
            line-height: 1.2 !important;
          }
          .hero-section .hero-content .title .highlight-text::after {
            bottom: 4px;
            height: 5px;
          }
          .page-title.hero-section {
            padding-top: 120px !important;
            padding-bottom: 20px !important;
          }
          .hero-section .hero-left {
            padding: 5px 0;
          }
          .p-30 {
            padding: 20px !important;
          }
          
          /* Process list: single column */
          .list-process-item {
            flex-direction: column;
            gap: 20px;
          }
          .list-process-item .process-item-2 {
            flex: 1 1 100%;
            min-width: 0;
          }
          
          /* Industries flex items */
          .d-flex.flex-wrap > div {
            flex: 1 1 140px !important;
            min-width: 140px !important;
          }
          
          .mt-70 { margin-top: 40px !important; }
          .mb-70 { margin-bottom: 40px !important; }
          .mb-50 { margin-bottom: 30px !important; }
          
          /* Hero image adjustments */
          .img-page-title {
            padding: 0 10px;
            margin-bottom: 20px;
          }
          .img-page-title .image img {
            max-height: 280px;
            border-radius: 6px;
          }
          
          /* Card spacing */
          .p-40 {
            padding: 20px;
          }
          
          .row.g-4 {
            --bs-gutter-y: 1rem;
          }

          /* Detail images */
          .detail-content .row.g-4 .image img {
            max-height: 300px;
          }
        }

        /* ============================================
           RESPONSIVE — SM (≤576px)
           ============================================ */
        @media (max-width: 576px) {
          .hero-section .hero-content .title {
            font-size: 26px;
            line-height: 1.25 !important;
          }
          .page-title.hero-section {
            padding-top: 110px !important;
            padding-bottom: 15px !important;
          }
          
          .d-flex.flex-wrap > div {
            flex: 1 1 130px !important;
            min-width: 130px !important;
          }
          
          .detail-content h2 {
            font-size: 18px !important;
            line-height: 1.5;
            margin-bottom: 24px !important;
          }
          .detail-content h3.title-2 {
            font-size: 20px !important;
          }
          .detail-content h4 {
            font-size: 18px !important;
          }
          
          .card-sidebar ul { gap: 6px 10px; }
          .category-services-item {
            font-size: 13px;
            padding: 6px 12px;
          }
          
          .col-12.col-md-4.d-flex,
          .col-12.col-md-6.d-flex {
            flex: 0 0 100%;
            max-width: 100%;
          }
          
          .p-30 { padding: 16px !important; }
          .p-40 { padding: 16px !important; }
          
          .mt-70 { margin-top: 30px !important; }
          .mb-70 { margin-bottom: 30px !important; }
          .mb-50 { margin-bottom: 20px !important; }
          .mb-40 { margin-bottom: 20px !important; }
          .mb-30 { margin-bottom: 16px !important; }
          
          /* Hero image adjustments */
          .img-page-title {
            padding: 0 8px;
            margin-bottom: 15px;
          }
          .img-page-title .image img {
            max-height: 200px;
            border-radius: 6px;
          }
          
          /* Fix image grid on mobile */
          .row.g-4 .col-12 {
            padding-left: 8px;
            padding-right: 8px;
          }
          
          /* Adjust text sizes */
          .text.ff-2 {
            font-size: 14px;
          }
          
          .desc-1, .desc-2 {
            font-size: 14px;
          }

          /* Detail images */
          .detail-content .row.g-4 .image img {
            max-height: 220px;
          }
        }

        /* ============================================
           RESPONSIVE — XS (≤400px)
           ============================================ */
        @media (max-width: 400px) {
          .hero-section .hero-content .title {
            font-size: 22px;
          }
          .page-title.hero-section {
            padding-top: 100px !important;
            padding-bottom: 10px !important;
          }
          
          .d-flex.flex-wrap > div {
            flex: 1 1 100% !important;
            min-width: 100% !important;
          }
          
          .category-services-item {
            font-size: 12px;
            padding: 5px 10px;
          }
          
          .img-page-title .image img {
            max-height: 160px;
          }
        }

        /* ============================================
           FIX FOR MOBILE NAV SPACING
           ============================================ */
        @media (max-width: 768px) {
          .flat-spacing-9 {
            padding-top: 20px !important;
            padding-bottom: 30px !important;
          }
        }

        /* ============================================
           MOBILE IMAGE WRAPPER BACKGROUND FIX
           Prevents dark body showing through below hero
           ============================================ */
        .img-page-title {
          background-color: #fff;
        }

        /* Transition zone: white strip connecting hero image to content */
        .img-page-title.d-block {
          padding-bottom: 0;
          margin-bottom: 0;
        }

        /* ============================================
           IMAGE CONTAINER FIXES
           ============================================ */
        .image {
          width: 100%;
        }
        
        .image img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        /* Fix for the detail images */
        .detail-content .row.g-4 .image {
          height: auto !important;
          min-height: 200px;
        }
        
        .detail-content .row.g-4 .image img {
          max-height: 470px;
          object-fit: cover;
        }
        
        /* Fix horizontal overflow causing white gap on mobile zoom */
        html, body {
          overflow-x: clip;
        }
        #wrapper {
          overflow-x: clip;
          width: 100%;
          position: relative;
        }
      `}</style>

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

        {/* Hero Section with Animations */}
        <div className="page-title style-2 hero-section">
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
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-left">
                  <div className="hero-content">
                    <h1 className="title letter-space--3 fw-6 slide-in-left" data-delay="200">
                      <span className="title-line">Elevating brands</span>
                      <span className="title-line">
                        <span className="highlight-text">performance</span>
                      </span>
                      <span className="title-line">marketing</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="hero-image-wrapper zoom-in" data-delay="100">
                  <div className="image" style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
                    <img
                      loading="lazy"
                      width="600"
                      height="400"
                      src={digitalHeroImage}
                      alt="Leading Digital Marketing Agency in Bangalore"
                      className="w-100"
                      style={{ 
                        borderRadius: "12px", 
                        objectFit: "cover",
                        width: "100%",
                        height: "auto"
                      }}
                      onError={handleImageError}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image - Mobile/Tablet version */}
        <div className="img-page-title d-block d-lg-none hero-image-wrapper" style={{ marginTop: "0" }}>
          <div className="container">
            <div className="image zoom-in" data-delay="100">
              <img
                loading="lazy"
                width="915"
                height="470"
                src={digitalHeroImage}
                alt="Leading Digital Marketing Agency in Bangalore"
                className="w-100"
                style={{ 
                  borderRadius: "8px", 
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  maxHeight: "300px"
                }}
                onError={handleImageError}
              />
            </div>
          </div>
        </div>

        <section className="section-services-detail flat-spacing-9">
          <div className="container">
            <div className="row rg-50">
              <div className="col-lg-4">
                <div className="card-sidebar slide-in-left" data-delay="100" style={{
                  position: "sticky",
                  top: "100px",
                  left: "20px",
                  zIndex: 1000,
                }}>
                  <p className="h5 title fw-6 letter-space--3 lh-100">
                    Services Category
                  </p>
                  <ul>
                    <li>
                      <a
                        href="/services/Digital-marketing-agency-in-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/seo-services-in-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Search Engine Optimization
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/social-media-marketing-company-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Social Media Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/web-development-company-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Web Design & Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/graphic-design-company-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Graphic Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/lead-generation-companies-in-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Lead Generation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/whatsapp-automation-AI-providers-india"
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        WhatsApp Automation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="detail-content">
                  <h2 className="fw-6 letter-space--3 color-dt-black mb-50 fade-in-up" data-delay="100">
                    In today's competitive online landscape, businesses need more than just a website to succeed. They need a strategic digital presence that attracts customers, builds trust, and generates measurable results.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Service
                    </span>{" "}
                    is a trusted Digital marketing agency in Bangalore that helps businesses achieve sustainable growth through innovative, data-driven marketing solutions.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="200">
                    Our team of experienced marketers, SEO specialists, content strategists, social media experts, and paid advertising professionals work together to deliver exceptional outcomes for businesses across industries. Whether you are a startup looking to establish your online presence, a growing company aiming to generate qualified leads, or an established enterprise seeking to strengthen your digital footprint, Digital Elite Service offers customized solutions designed to meet your goals. As a leading Digital marketing company in Bangalore, we combine creativity, technology, and analytics to create campaigns that deliver real business impact.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black scale-in" data-delay="100">
                    Why Businesses Choose{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Service
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Digital marketing has become an essential part of business growth. Customers are searching for products and services online before making purchasing decisions. If your business is not visible where your customers are looking, you risk losing valuable opportunities. Digital Elite Service helps businesses stay ahead of the competition through comprehensive digital marketing strategies tailored to their target audience and industry.
                  </div>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-left" data-delay="300">
                    Our approach focuses on understanding your business objectives, identifying market opportunities, and implementing strategies that generate measurable returns. We believe every business is unique, which is why we create personalized campaigns rather than relying on generic marketing templates. As a trusted Digital marketing agency in Bangalore, our mission is simple: help businesses grow through effective online marketing strategies that increase visibility, drive traffic, generate leads, and improve conversions.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black rotate-in" data-delay="100">
                    Comprehensive{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Marketing Services
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Digital Elite Service provides a complete range of Digital marketing services in Bangalore designed to help businesses maximize their online potential.
                  </div>

                  {/* Core Services List - Styled as Process Items */}
                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2 flip-in" data-delay="100">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Search Engine Optimization (SEO)
                      </a>
                      <div className="desc ff-2">
                        SEO remains one of the most effective ways to increase online visibility. Our SEO experts use proven strategies to improve search engine rankings and drive organic traffic.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="200">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Pay-Per-Click Advertising (PPC)
                      </a>
                      <div className="desc ff-2">
                        Paid advertising provides immediate visibility and lead generation. Our PPC specialists create highly targeted campaigns that maximize ROI.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="300">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Social Media Marketing
                      </a>
                      <div className="desc ff-2">
                        Social media platforms have become powerful channels for brand awareness, customer engagement, and lead generation through compelling campaigns.
                      </div>
                    </div>
                  </div>

                  {/* Image Grid */}
                  <div className="row g-4 mb-70">
                    <div className="col-12 col-md-6 zoom-in" data-delay="100">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={digitalDetailImage1}
                          alt="Digital Marketing Strategy Session"
                          className="img-fluid w-100"
                          style={{
                            borderRadius: "8px",
                            aspectRatio: "410 / 470",
                            objectFit: "cover",
                            height: "100%",
                            maxHeight: "470px",
                          }}
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 zoom-in" data-delay="200">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={digitalDetailImage2}
                          alt="Digital Marketing Campaign Results"
                          className="img-fluid w-100"
                          style={{
                            borderRadius: "8px",
                            aspectRatio: "410 / 470",
                            objectFit: "cover",
                            height: "100%",
                            maxHeight: "470px",
                          }}
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Services Section */}
                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30 blur-in" data-delay="100">
                    More of our{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      digital marketing services
                    </span>{" "}
                    include <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Content Marketing, Website Design & Development,
                    </span>{" "}
                    and <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Email Marketing
                    </span>
                    .
                  </h3>
                  <div className="text ff-2 color-paragraph mb-70 fade-in-up" data-delay="200">
                    High-quality content plays a critical role in digital marketing success. Our content marketing strategies focus on creating valuable, informative, and engaging content that attracts and converts potential customers. Your website is often the first interaction potential customers have with your business. Digital Elite Service creates modern, responsive, and user-friendly websites designed to deliver exceptional user experiences. Email marketing continues to be one of the most cost-effective digital marketing channels, helping businesses nurture leads, retain customers, and increase revenue.
                  </div>

                  {/* Why Choose Us Section */}
                  <div className="row align-items-center g-4 mb-70">
                    <div className="col-12 col-lg-7">
                      <h4 className="title-3 fw-6 letter-space--3 lh-32 mb-4 slide-in-left" data-delay="100">
                        <span style={{ color: "var(--digital-marketing-light)" }}>Digital Marketing Agency</span> in Bangalore Focused on Results
                      </h4>

                      <div className="desc-1 ff-2 mb-4 color-paragraph fade-in-up" data-delay="150">
                        <strong>Customized Marketing Strategies:</strong> We understand that every business has unique goals, challenges, and audiences. Our team develops personalized marketing strategies tailored specifically to your needs.
                      </div>

                      <div className="desc-1 ff-2 mb-4 color-paragraph slide-in-right" data-delay="200">
                        <strong>Experienced Professionals:</strong> Our team consists of skilled digital marketers with expertise across multiple disciplines. From SEO and PPC to social media and content marketing, we bring extensive experience to every project.
                      </div>

                      <div className="desc-1 ff-2 mb-4 color-paragraph fade-in-up" data-delay="250">
                        <strong>Transparent Communication & Data-Driven Decisions:</strong> We believe strong partnerships are built on trust and transparency. Every marketing decision is backed by data and analytics to maximize results.
                      </div>

                      <div className="desc-2 ff-2 color-paragraph slide-in-left" data-delay="300">
                        <strong>Focus on ROI:</strong> Our primary objective is helping businesses achieve measurable returns from their marketing investments. We focus on strategies that contribute directly to business growth.
                      </div>
                    </div>

                    <div className="col-12 col-lg-5 rotate-in" data-delay="100">
                      <div className="image">
                        <img
                          loading="lazy"
                          src={digitalDetailImage3}
                          alt="Digital Elite Services Digital Marketing Process"
                          className="img-fluid w-100"
                          style={{
                            borderRadius: "8px",
                            objectFit: "cover",
                            maxHeight: "540px",
                          }}
                          onError={handleImageError}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Industries We Serve */}
                  <div className="mt-70 glow-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Industries We{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Serve
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      Digital Elite Service has experience working with businesses across various industries. Our diverse expertise allows us to understand unique market challenges and develop effective solutions.
                    </div>

                    <div
                      className="d-flex flex-wrap"
                      style={{
                        gap: "20px 40px",
                        marginBottom: "20px",
                      }}
                    >
                      {[
                        { icon: <Building2 size={20} />, text: "Real Estate" },
                        { icon: <HeartPulse size={20} />, text: "Healthcare" },
                        { icon: <GraduationCap size={20} />, text: "Education" },
                        { icon: <Laptop size={20} />, text: "Information Technology" },
                        { icon: <ShoppingBag size={20} />, text: "E-commerce" },
                        { icon: <Factory size={20} />, text: "Manufacturing" },
                        { icon: <Wallet size={20} />, text: "Finance" },
                        { icon: <Hotel size={20} />, text: "Hospitality" },
                        { icon: <Store size={20} />, text: "Retail" },
                        { icon: <Scale size={20} />, text: "Professional Services" },
                        { icon: <HardHat size={20} />, text: "Construction" },
                        { icon: <Rocket size={20} />, text: "Startups" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            minWidth: "200px",
                            flex: "1 1 200px",
                          }}
                          className="ff-2 color-paragraph bounce-in"
                          data-delay={100 + index * 50}
                        >
                          <span
                            style={{
                              color: "var(--digital-marketing-light)",
                              flexShrink: 0,
                            }}
                          >
                            {item.icon}
                          </span>
                          <strong style={{ fontWeight: 600 }}>{item.text}</strong>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text ff-2 color-paragraph">
                      Our industry-specific strategies ensure that marketing campaigns resonate with the right audience and deliver meaningful results.
                    </div>
                  </div>

                  {/* Best Digital Marketing Agency Section */}
                  <div className="mt-70 fade-in-up" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Best{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Marketing Agency
                      </span>{" "}
                      in Bangalore for Local Businesses
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Local businesses face unique challenges when competing in increasingly crowded markets. Digital Elite Service helps local businesses improve visibility, attract nearby customers, and generate qualified leads.
                    </div>
                    
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                      }}
                    >
                      {[
                        {
                          icon: <MapPin size={24} />,
                          title: "Local SEO Optimization",
                          desc: "Improve visibility in local search results and attract customers in your area.",
                        },
                        {
                          icon: <Navigation size={24} />,
                          title: "Google Business Profile Management",
                          desc: "Optimize your Google Business Profile for better local search performance.",
                        },
                        {
                          icon: <BadgeCheck size={24} />,
                          title: "Reputation Management",
                          desc: "Build and maintain a positive online reputation through effective review management.",
                        },
                        {
                          icon: <Megaphone size={24} />,
                          title: "Local Search Advertising",
                          desc: "Target customers actively searching for products and services in your location.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          style={{
                            flex: "1 1 280px",
                            minWidth: "250px",
                            background: "var(--digital-marketing-light-bg)",
                            borderRadius: "12px",
                            padding: "30px",
                          }}
                          className="scale-in"
                          data-delay={100 + index * 100}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              marginBottom: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--digital-marketing-light)",
                                flexShrink: 0,
                              }}
                            >
                              {item.icon}
                            </span>
                            <h5 className="fw-6 mb-0">{item.title}</h5>
                          </div>
                          <p className="ff-2 color-paragraph mb-0">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What Makes Digital Elite Service Different */}
                  <div className="mt-70 slide-in-right" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      What Makes{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Elite Service
                      </span>{" "}
                      Different
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Choosing the right digital marketing company in Bangalore can significantly impact your business growth. Digital Elite Service stands out because of our commitment to excellence, innovation, and client success.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          title: "Customized Marketing Strategies",
                          desc: "We develop personalized marketing strategies tailored specifically to your business needs."
                        },
                        {
                          title: "Experienced Professionals",
                          desc: "Our skilled team brings extensive expertise across all digital marketing disciplines."
                        },
                        {
                          title: "Transparent Communication",
                          desc: "Clients receive regular updates, detailed reports, and clear communication throughout."
                        },
                        {
                          title: "Data-Driven Decision Making",
                          desc: "Every marketing decision is backed by data and analytics to optimize campaign performance."
                        }
                      ].map((item, index) => (
                        <div key={index} className="col-12 col-md-6 d-flex flip-in" data-delay={100 + index * 100}>
                          <div
                            className="p-30 w-100"
                            style={{
                              background: "var(--digital-marketing-light-bg)",
                              borderRadius: "12px",
                            }}
                          >
                            <h5 className="fw-6">{item.title}</h5>
                            <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Marketing That Delivers Results */}
                  <div className="mt-70 zoom-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Performance Marketing That{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Delivers Results
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Performance marketing focuses on measurable outcomes and accountability. Every campaign is designed to achieve specific objectives while maximizing efficiency.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <BarChart3 size={40} />,
                          title: "Search & Social Advertising",
                          desc: "Targeted campaigns that drive qualified traffic and conversions."
                        },
                        {
                          icon: <Target size={40} />,
                          title: "Conversion Optimization",
                          desc: "Landing page testing and optimization to improve conversion rates."
                        },
                        {
                          icon: <TrendingUp size={40} />,
                          title: "Campaign Analytics",
                          desc: "Continuous monitoring and optimization to maximize ROI."
                        }
                      ].map((item, index) => (
                        <div key={index} className="col-12 col-md-4 d-flex rotate-in" data-delay={100 + index * 100}>
                          <div
                            className="text-center p-30 w-100"
                            style={{
                              background: "var(--digital-marketing-light-bg)",
                              borderRadius: "12px",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--digital-marketing-light)",
                                display: "block",
                                marginBottom: "15px",
                              }}
                            >
                              {item.icon}
                            </span>
                            <h5 className="fw-6">{item.title}</h5>
                            <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Future-Ready Digital Marketing Solutions */}
                  <div className="mt-70 blur-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Future-Ready{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Marketing Solutions
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      The digital landscape continues to evolve rapidly. Businesses must adapt to changing consumer behaviors, emerging technologies, and evolving search engine algorithms. Digital Elite Service stays ahead of industry trends by adopting innovative marketing techniques and leveraging the latest technologies.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Bot size={24} />,
                          title: "Marketing Automation",
                          desc: "Streamline campaigns and improve efficiency through automation."
                        },
                        {
                          icon: <Brain size={24} />,
                          title: "Artificial Intelligence Tools",
                          desc: "Leverage AI for smarter targeting, personalization, and optimization."
                        },
                        {
                          icon: <Database size={24} />,
                          title: "Advanced Analytics",
                          desc: "Gain deeper insights into campaign performance and customer behavior."
                        },
                        {
                          icon: <Sparkles size={24} />,
                          title: "Emerging Digital Platforms",
                          desc: "Stay ahead by adopting new platforms and channels as they emerge."
                        }
                      ].map((item, index) => (
                        <div key={index} className="col-12 col-md-6 d-flex bounce-in" data-delay={100 + index * 100}>
                          <div
                            className="p-30 w-100"
                            style={{
                              background: "var(--digital-marketing-light-bg)",
                              borderRadius: "12px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "10px",
                              }}
                            >
                              <span
                                style={{
                                  color: "var(--digital-marketing-light)",
                                  flexShrink: 0,
                                }}
                              >
                                {item.icon}
                              </span>
                              <h5 className="fw-6 mb-0">{item.title}</h5>
                            </div>
                            <p className="ff-2 color-paragraph mb-0">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final CTA */}
                  <div className="mt-70 p-40 glow-in" data-delay="100">
                    <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
                      Partner with{" "}
                      <span style={{color:"var(--digital-marketing-light)"}}>
                        Digital Elite Service
                      </span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      If you are looking for a reliable <strong>Digital marketing company in Bangalore</strong> that prioritizes growth, transparency, and measurable results, Digital Elite Service is your ideal partner. We are committed to helping businesses strengthen their online presence, attract qualified customers, and achieve long-term success.
                    </p>
                    <p className="ff-2 color-paragraph mb-30">
                      As a trusted provider of <strong>Digital marketing services in Bangalore</strong>, we combine strategic expertise with creative execution to deliver impactful marketing campaigns. Whether your goal is improving search rankings, generating leads, increasing sales, or building brand awareness, our team has the experience and dedication to help you succeed.
                    </p>
                    <p className="ff-2 color-paragraph">
                      <strong>
                        Choose Digital Elite Service and experience the difference that professional, results-driven digital marketing can make for your business.
                      </strong>{" "}
                      Let us help you transform your online presence into a powerful engine for growth, visibility, and success.
                    </p>
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
              {/* <img src="./assets/images/logo/logo-mobi-1.svg" alt="" /> */}
              <img src={Logo}/>
            </a>
            <span
              className="icon icon-close"
              data-bs-dismiss="offcanvas"
            ></span>
          </div>
          <div className="canvas-body">
            <div className="mb-content-top">
              <ul
                className="nav-ul-mb"
                id="wrapper-menu-navigation"
              ></ul>
            </div>
          </div>
          <div className="canvas-bottom"></div>
        </div>
      </div>

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