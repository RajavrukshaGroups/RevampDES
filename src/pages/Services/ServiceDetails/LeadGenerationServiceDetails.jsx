import DESLOGO from "../../../assets/images/header/DES_logo_white.png";
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
  Users,
  Gauge,
  ArrowUpRight,
  CheckCircle
} from "lucide-react";
// Import relevant images for the lead generation service page
import leadHeroImage from "../../../assets/images/serviceDetails/lead-generation/lead-generation-img-1.jpg";
import leadDetailImage1 from "../../../assets/images/serviceDetails/lead-generation/lead-generation-img-2.jpg";
import leadDetailImage2 from "../../../assets/images/serviceDetails/lead-generation/lead-generation-img-3.jpg";
import leadDetailImage3 from "../../../assets/images/serviceDetails/img-services-detail-3.jpg";

export default function ServiceDetailsLeadGeneration() {
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
           HERO SECTION STYLES - EXACT MATCH
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

        .hero-section .stats {
          display: flex;
          gap: 60px;
          margin-top: 20px;
          padding-top: 30px;
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        @media (max-width: 576px) {
          .hero-section .stats {
            gap: 30px;
            flex-wrap: wrap;
          }
        }

        .hero-section .counter-item .counter {
          display: flex;
          align-items: center;
        }

        .hero-section .counter-item .number-counter {
          display: flex;
          align-items: baseline;
        }

        .hero-section .counter-item .odometer {
          font-size: 48px;
          font-weight: 700;
          color: var(--digital-marketing-light);
        }

        .hero-section .counter-item .h5 {
          font-size: 16px;
          color: #666;
          margin-top: 5px;
        }

        /* ============================================
           HERO IMAGE WRAPPER - EXACT MATCH
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
           HERO IMAGE — EXACT MATCH
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
          opacity: 0;
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
          
          .list-process-item {
            flex-direction: column;
            gap: 20px;
          }
          .list-process-item .process-item-2 {
            flex: 1 1 100%;
            min-width: 0;
          }
          
          .d-flex.flex-wrap > div {
            flex: 1 1 140px !important;
            min-width: 140px !important;
          }
          
          .mt-70 { margin-top: 40px !important; }
          .mb-70 { margin-bottom: 40px !important; }
          .mb-50 { margin-bottom: 30px !important; }
          
          .img-page-title {
            padding: 0 10px;
            margin-bottom: 20px;
          }
          .img-page-title .image img {
            max-height: 280px;
            border-radius: 6px;
          }
          
          .p-40 {
            padding: 20px;
          }
          
          .row.g-4 {
            --bs-gutter-y: 1rem;
          }

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
          
          .img-page-title {
            padding: 0 8px;
            margin-bottom: 15px;
          }
          .img-page-title .image img {
            max-height: 200px;
            border-radius: 6px;
          }
          
          .row.g-4 .col-12 {
            padding-left: 8px;
            padding-right: 8px;
          }
          
          .text.ff-2 {
            font-size: 14px;
          }
          
          .desc-1, .desc-2 {
            font-size: 14px;
          }

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
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
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

        {/* Hero Section with Animations - EXACT MATCH */}
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
                      <span className="title-line">Drive Quality Leads</span>
                      <span className="title-line">
                        with <span className="highlight-text">Performance-Driven</span>
                      </span>
                      <span className="title-line">PPC Campaigns</span>
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
                      src={leadHeroImage}
                      alt="Lead Generation & PPC Services in Bangalore"
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

        {/* Hero Image - Mobile/Tablet version - EXACT MATCH */}
        <div className="img-page-title d-block d-lg-none hero-image-wrapper">
          <div className="container">
            <div className="image zoom-in" data-delay="100">
              <img
                loading="lazy"
                width="915"
                height="470"
                src={leadHeroImage}
                alt="Lead Generation & PPC Services in Bangalore"
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
                  top: "70px",
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
                        className="category-services-item fw-5 letter-space--2 ff-2"
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
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
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
                    In today's competitive digital landscape, businesses need more than just online visibility—they need targeted traffic that converts.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Services
                    </span>{" "}
                    specializes in delivering high-impact PPC services in Bangalore that help businesses attract the right audience, generate quality leads, and maximize return on investment.
                  </h2>
                  <div className="text ff-2 color-paragraph mb-70 slide-in-right" data-delay="200">
                    Pay-Per-Click (PPC) advertising is one of the fastest ways to reach potential customers who are actively searching for your products or services. Whether you are a startup, SME, or an established enterprise, our data-driven strategies ensure your ad spend delivers real business outcomes.
                  </div>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black scale-in" data-delay="100">
                    Trusted{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      PPC Company
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    As a leading PPC company in Bangalore, Digital Elite Services combines strategic planning, advanced analytics, and creative execution to build campaigns that perform. Our team of certified PPC experts understands the nuances of various industries and creates tailored campaigns to suit your business goals.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40 slide-in-left" data-delay="300">
                    We manage campaigns across platforms like Google Ads, Bing Ads, and social media channels to ensure your brand gets maximum exposure. From keyword research and competitor analysis to ad creation and continuous optimization, we handle every aspect of your PPC campaigns.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30 rotate-in" data-delay="100">
                    What sets us apart?
                  </h4>
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Target size={24} />,
                        title: "Deep Keyword Research",
                        desc: "Aligned with user intent for maximum relevance and conversion."
                      },
                      {
                        icon: <Gauge size={24} />,
                        title: "High-Converting Ad Copy",
                        desc: "Creative and compelling ad copy and creatives that drive action."
                      },
                      {
                        icon: <Users size={24} />,
                        title: "Advanced Audience Targeting",
                        desc: "Reach the right people with precision targeting strategies."
                      },
                      {
                        icon: <BarChart3 size={24} />,
                        title: "Continuous A/B Testing",
                        desc: "Ongoing testing for performance improvement and optimization."
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black zoom-in" data-delay="100">
                    Result-Driven{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Lead Generation Services
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Generating leads is at the core of every successful business strategy. At Digital Elite Services, we provide comprehensive lead generation services in Bangalore designed to attract, engage, and convert your ideal customers.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40 slide-in-right" data-delay="300">
                    We go beyond basic advertising by creating a full-funnel approach that captures leads at every stage of the buyer journey. From awareness campaigns to retargeting strategies, we ensure your brand stays top-of-mind until conversion.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30 blur-in" data-delay="100">
                    Our lead generation approach includes:
                  </h4>
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Target size={24} />,
                        title: "Landing Page Optimization",
                        desc: "Optimized landing pages designed for higher conversion rates."
                      },
                      {
                        icon: <Users size={24} />,
                        title: "Funnel-Based Marketing",
                        desc: "Strategic funnel-based strategies to guide users through the buyer journey."
                      },
                      {
                        icon: <Database size={24} />,
                        title: "Audience Segmentation",
                        desc: "Precise audience segmentation and targeting for better results."
                      },
                      {
                        icon: <BarChart3 size={24} />,
                        title: "CRM Integration",
                        desc: "Seamless CRM integration and lead tracking for better management."
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

                  {/* Image Grid */}
                  <div className="row g-4 mb-70">
                    <div className="col-12 col-md-6 zoom-in" data-delay="100">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={leadDetailImage1}
                          alt="Lead Generation Strategy"
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
                          src={leadDetailImage2}
                          alt="PPC Campaign Results"
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black glow-in" data-delay="100">
                    Performance Marketing Company in Bangalore{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      You Can Trust
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Digital Elite Services is recognized as a reliable performance marketing company in Bangalore focused on delivering measurable outcomes. Unlike traditional marketing, performance marketing is driven by data, accountability, and ROI.
                  </div>
                  <div className="text ff-2 color-paragraph mb-40 slide-in-left" data-delay="300">
                    We track every click, impression, and conversion to ensure your campaigns are optimized for maximum efficiency. Our performance marketing strategies are designed to scale your business while minimizing wasted spend.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30 scale-in" data-delay="100">
                    Our performance marketing services include:
                  </h4>
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Target size={24} />,
                        title: "Paid Search",
                        desc: "Google Ads & Bing Ads management for maximum visibility."
                      },
                      {
                        icon: <Megaphone size={24} />,
                        title: "Social Media Advertising",
                        desc: "Meta, LinkedIn, Instagram advertising for targeted reach."
                      },
                      {
                        icon: <Users size={24} />,
                        title: "Display & Remarketing",
                        desc: "Display and remarketing campaigns to re-engage visitors."
                      },
                      {
                        icon: <BarChart3 size={24} />,
                        title: "Conversion Rate Optimization",
                        desc: "CRO strategies to maximize conversion rates and ROI."
                      }
                    ].map((item, index) => (
                      <div key={index} className="col-12 col-md-6 d-flex rotate-in" data-delay={100 + index * 100}>
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black flip-in" data-delay="100">
                    Why Choose{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Digital Elite Services
                    </span>
                    ?
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Choosing the right digital partner can make all the difference. At Digital Elite Services, we focus on delivering value through strategy, execution, and continuous optimization.
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <BarChart3 size={24} />,
                        title: "Data-Driven Strategies",
                        desc: "We rely on data and insights rather than guesswork. Every campaign is backed by thorough research and analytics."
                      },
                      {
                        icon: <Target size={24} />,
                        title: "Customized Solutions",
                        desc: "No two businesses are the same. We create personalized PPC and lead generation strategies tailored to your industry and goals."
                      },
                      {
                        icon: <BadgeCheck size={24} />,
                        title: "Experienced Team",
                        desc: "Our team consists of skilled professionals with hands-on experience in managing high-performing campaigns across multiple industries."
                      },
                      {
                        icon: <CheckCircle size={24} />,
                        title: "Transparent Reporting",
                        desc: "We provide clear and detailed reports so you can track your campaign performance and ROI at any time."
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black blur-in" data-delay="100">
                    Our{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      Process
                    </span>
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    At Digital Elite Services, we follow a structured approach to ensure consistent success:
                  </div>

                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2 flip-in" data-delay="100">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Understanding Your Business
                      </a>
                      <div className="desc ff-2">
                        We begin by understanding your business model, target audience, and goals.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="200">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Strategy Development
                      </a>
                      <div className="desc ff-2">
                        Based on insights, we create a customized PPC and lead generation strategy.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="300">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Campaign Setup
                      </a>
                      <div className="desc ff-2">
                        We set up campaigns with optimized keywords, ad copies, and targeting.
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Gauge size={24} />,
                        title: "Step 4: Optimization & Testing",
                        desc: "Continuous monitoring and A/B testing help improve campaign performance."
                      },
                      {
                        icon: <Rocket size={24} />,
                        title: "Step 5: Reporting & Scaling",
                        desc: "We provide detailed reports and scale campaigns based on performance."
                      }
                    ].map((item, index) => (
                      <div key={index} className="col-12 col-md-6 d-flex scale-in" data-delay={100 + index * 100}>
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

                  {/* Industries We Serve */}
                  <div className="mt-70 glow-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Industries We{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Serve
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      Our expertise spans across multiple industries, including:
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
                      No matter your industry, our PPC services in Bangalore are designed to deliver consistent and scalable results.
                    </div>
                  </div>

                  {/* Best Lead Generation Agency Section */}
                  <div className="mt-70 fade-in-up" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Best{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Lead Generation Agency
                      </span>{" "}
                      in Bangalore for Local Businesses
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Local businesses face unique challenges when competing in increasingly crowded markets. Digital Elite Service helps local businesses generate high-quality leads and convert them into loyal customers.
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
                          title: "Local SEO & PPC",
                          desc: "Combine local SEO with PPC for maximum visibility in your area."
                        },
                        {
                          icon: <Navigation size={24} />,
                          title: "Geo-Targeted Campaigns",
                          desc: "Target customers in specific locations with precision advertising."
                        },
                        {
                          icon: <BadgeCheck size={24} />,
                          title: "Local Reputation Management",
                          desc: "Build trust and credibility with local customers through reviews."
                        },
                        {
                          icon: <Megaphone size={24} />,
                          title: "Local Lead Generation",
                          desc: "Attract and convert customers actively searching for your services."
                        }
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

                  {/* Final CTA */}
                  <div className="mt-70 p-40 glow-in" data-delay="100">
                    <h4 className="fw-6 letter-space--3 lh-32 mb-30" style={{marginTop:"53px"}}>
                      Grow Your Business with the{" "}
                      <span style={{color:"var(--digital-marketing-light)"}}>
                        Best PPC Company in Bangalore
                      </span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      If you are looking for a reliable <strong>PPC company in Bangalore</strong> that understands your business needs and delivers measurable results, Digital Elite Services is your ideal partner. Our integrated approach to <strong>lead generation services in Bangalore</strong> and performance marketing ensures that your brand reaches the right audience at the right time.
                    </p>
                    <p className="ff-2 color-paragraph mb-30">
                      With a strong focus on ROI and continuous optimization, we help businesses unlock their full potential in the digital space. Ready to take your business to the next level? Partner with Digital Elite Services, a trusted <strong>performance marketing company in Bangalore</strong>, and experience the power of data-driven PPC and lead generation strategies.
                    </p>
                    <p className="ff-2 color-paragraph">
                      <strong>Contact us today</strong> to build campaigns that drive traffic, generate leads, and deliver real growth.
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