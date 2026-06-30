import DESLOGO from "../../../assets/images/header/DES_logo_white.png";
import React, { useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SidePopup from "../../../components/sidePopup";
import {
  BarChart3,
  Target,
  TrendingUp,
  Bot,
  Brain,
  Database,
  Sparkles,
  Search,
  Rocket,
  Shield,
  FileText,
  Link2,
  MapPin,
  Smartphone,
  ShoppingBag,
  Building2,
  HeartPulse,
  GraduationCap,
  Laptop,
  Hotel,
  Globe,
  Gauge,
  CheckCircle,
  Award,
  Users,
  Clock,
  Zap,
  Eye,
  Compass,
  Layers,
  Code,
  Settings,
  PenTool,
  Mic,
  Video,
  Image,
  Wallet,
  Store,
  Scale,
  HardHat,
  Factory,
  Navigation,
  BadgeCheck,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";
// Import relevant images for the SEO service page
import seoHeroImage from "../../../assets/images/serviceDetails/SEO/seo-img-3.png";
import seoDetailImage1 from "../../../assets/images/serviceDetails/SEO/seo-img-1.jpg";
import seoDetailImage2 from "../../../assets/images/serviceDetails/SEO/seo-img-2.png";
import seoDetailImage3 from "../../../assets/images/serviceDetails/SEO/seo-img-4.jpg";

export default function ServiceDetailsSEO() {
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
           HERO IMAGE — responsive
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
                      <span className="title-line">Dominate Search</span>
                      <span className="title-line">
                        with <span className="highlight-text">Strategic SEO</span>
                      </span>
                      <span className="title-line">That Drives Results</span>
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
                      src={seoHeroImage}
                      alt="Leading SEO Services in Bangalore"
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
        <div className="img-page-title d-block d-lg-none hero-image-wrapper" style={{ marginTop: "20px" }}>
          <div className="container">
            <div className="image zoom-in" data-delay="100">
              <img
                loading="lazy"
                width="915"
                height="470"
                src={seoHeroImage}
                alt="Leading SEO Services in Bangalore"
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
                        className="category-services-item fw-5 letter-space--2 ff-2"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/seo-services-in-bangalore"
                        className="category-services-item fw-5 letter-space--2 ff-2 active"
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
                    In today's competitive digital landscape, having a strong online presence is no longer optional—it's essential. Businesses across industries are competing to capture attention, generate leads, and convert customers online.{" "}
                    <span style={{ color: "var(--digital-marketing-light)" }}>
                      Digital Elite Services
                    </span>{" "}
                    steps in as a trusted partner, offering professional SEO services in Bangalore designed to help your business grow organically and sustainably.
                  </h2>

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black scale-in" data-delay="100">
                    Why{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      SEO Matters
                    </span>{" "}
                    for Your Business
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Search Engine Optimization (SEO) is the backbone of digital marketing. It ensures your website ranks higher on search engines like Google, making it easier for potential customers to find you.
                  </div>
                  
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <Eye size={24} />,
                        title: "Increase Website Visibility",
                        desc: "Make your business easily discoverable by potential customers searching online."
                      },
                      {
                        icon: <Users size={24} />,
                        title: "Drive High-Quality Organic Traffic",
                        desc: "Attract visitors who are actively searching for your products or services."
                      },
                      {
                        icon: <Shield size={24} />,
                        title: "Improve Brand Credibility & Trust",
                        desc: "Higher rankings build trust and establish your brand as an industry authority."
                      },
                      {
                        icon: <Rocket size={24} />,
                        title: "Stay Ahead of Competitors",
                        desc: "Outperform competitors in search results and capture more market share."
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black rotate-in" data-delay="100">
                    Leading{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      SEO Company
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    As a reputed SEO company in Bangalore, Digital Elite Services focuses on delivering customized solutions tailored to your business goals. We understand that every business is unique, which is why we avoid one-size-fits-all strategies and instead craft personalized SEO campaigns.
                  </div>

                  <h4 className="fw-6 letter-space--3 color-dt-black mb-30 slide-in-left" data-delay="100">
                    What Sets Us Apart?
                  </h4>
                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <BarChart3 size={24} />,
                        title: "Data-Driven Approach",
                        desc: "We rely on in-depth research, analytics, and performance tracking to guide our SEO strategies."
                      },
                      {
                        icon: <Award size={24} />,
                        title: "Experienced SEO Professionals",
                        desc: "Our team stays updated with the latest algorithm changes and industry trends."
                      },
                      {
                        icon: <FileText size={24} />,
                        title: "Transparent Reporting",
                        desc: "You'll receive regular reports detailing keyword rankings, traffic growth, and campaign performance."
                      },
                      {
                        icon: <Shield size={24} />,
                        title: "Ethical SEO Practices",
                        desc: "We follow white-hat SEO techniques that ensure long-term success without risking penalties."
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black zoom-in" data-delay="100">
                    Comprehensive{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      SEO Services
                    </span>{" "}
                    in Bangalore
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Digital Elite Services offers a full suite of SEO services designed to improve your online presence and maximize ROI.
                  </div>

                  <div className="list-process-item d-flex justify-content-between mb-70">
                    <div className="line d-none d-md-block"></div>
                    <div className="process-item-2 flip-in" data-delay="100">
                      <div className="number ff-2 fw-5 letter-space--2">01</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Keyword Research & Strategy
                      </a>
                      <div className="desc ff-2">
                        We identify high-impact keywords to ensure your website targets the right audience and drives qualified traffic.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="200">
                      <div className="number ff-2 fw-5 letter-space--2">02</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        On-Page SEO Optimization
                      </a>
                      <div className="desc ff-2">
                        We optimize meta tags, header structures, internal linking, URLs, and images for better search visibility.
                      </div>
                    </div>

                    <div className="process-item-2 flip-in" data-delay="300">
                      <div className="number ff-2 fw-5 letter-space--2">03</div>
                      <div className="dot"></div>
                      <a href="#" className="title text-body-1 lh-100 fw-6 letter-space--3">
                        Technical SEO
                      </a>
                      <div className="desc ff-2">
                        We enhance website speed, mobile responsiveness, and backend performance for improved crawling and indexing.
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 mb-70">
                    {[
                      {
                        icon: <PenTool size={24} />,
                        title: "Content Marketing",
                        desc: "We create engaging, keyword-rich content that attracts users and improves search rankings."
                      },
                      {
                        icon: <Link2 size={24} />,
                        title: "Link Building",
                        desc: "We build high-quality backlinks from authoritative websites to boost domain authority."
                      },
                      {
                        icon: <MapPin size={24} />,
                        title: "Local SEO",
                        desc: "We optimize your Google Business Profile and local listings to increase visibility in local searches."
                      },
                      {
                        icon: <ShoppingBag size={24} />,
                        title: "E-Commerce SEO",
                        desc: "Specialized optimization for product pages, categories, and shopping search visibility."
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

                  {/* Image Grid */}
                  <div className="row g-4 mb-70">
                    <div className="col-12 col-md-6 zoom-in" data-delay="100">
                      <div className="image" style={{ height: "100%" }}>
                        <img
                          loading="lazy"
                          src={seoDetailImage1}
                          alt="SEO Strategy Session"
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
                          src={seoDetailImage2}
                          alt="SEO Performance Results"
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

                  <h3 className="title-2 fw-6 letter-space--3 color-dt-black blur-in" data-delay="100">
                    Trusted{" "}
                    <span style={{ color: "var(--digital-marketing-blue)" }}>
                      SEO Agency in Bangalore
                    </span>{" "}
                    for All Industries
                  </h3>
                  <div className="text ff-2 color-paragraph mb-40 fade-in-up" data-delay="200">
                    Digital Elite Services has worked with clients across various industries, understanding the unique challenges of each sector and creating strategies that deliver real results.
                  </div>

                  {/* Industries We Serve */}
                  <div
                    className="d-flex flex-wrap"
                    style={{
                      gap: "20px 40px",
                      marginBottom: "40px",
                    }}
                  >
                    {[
                      { icon: <ShoppingBag size={20} />, text: "E-commerce" },
                      { icon: <Building2 size={20} />, text: "Real Estate" },
                      { icon: <HeartPulse size={20} />, text: "Healthcare" },
                      { icon: <GraduationCap size={20} />, text: "Education" },
                      { icon: <Laptop size={20} />, text: "Information Technology" },
                      { icon: <Hotel size={20} />, text: "Hospitality" },
                      { icon: <Wallet size={20} />, text: "Finance" },
                      { icon: <Store size={20} />, text: "Retail" },
                      { icon: <Scale size={20} />, text: "Professional Services" },
                      { icon: <HardHat size={20} />, text: "Construction" },
                      { icon: <Rocket size={20} />, text: "Startups" },
                      { icon: <Factory size={20} />, text: "Manufacturing" },
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

                  <div className="mt-70 glow-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Our{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        SEO Process
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      We follow a structured and proven SEO process to ensure consistent success.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Search size={24} />,
                          title: "Step 1: Website Audit",
                          desc: "We conduct a comprehensive audit to identify strengths, weaknesses, and opportunities."
                        },
                        {
                          icon: <Compass size={24} />,
                          title: "Step 2: Strategy Development",
                          desc: "Based on insights, we create a tailored SEO strategy aligned with your business objectives."
                        },
                        {
                          icon: <Settings size={24} />,
                          title: "Step 3: Implementation",
                          desc: "Our team executes on-page, technical, and off-page SEO techniques."
                        },
                        {
                          icon: <Gauge size={24} />,
                          title: "Step 4: Monitoring & Optimization",
                          desc: "We continuously track performance and optimize campaigns for better results."
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
                  </div>

                  <div className="mt-70 slide-in-right" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Benefits of Choosing{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Digital Elite Services
                      </span>
                    </h3>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Globe size={40} />,
                          title: "Increased Online Visibility",
                          desc: "Make your business easily discoverable online."
                        },
                        {
                          icon: <TrendingUp size={40} />,
                          title: "Higher Search Engine Rankings",
                          desc: "Achieve top positions on Google search results."
                        },
                        {
                          icon: <Target size={40} />,
                          title: "More Targeted Traffic",
                          desc: "Attract visitors who are ready to convert."
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

                  <div className="mt-70 blur-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      How SEO Drives{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Long-Term Business Growth
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      Unlike paid advertising, SEO delivers long-term value. While paid campaigns stop generating traffic once the budget ends, SEO continues to bring organic visitors to your website over time. This makes SEO one of the most cost-effective digital marketing strategies for businesses of all sizes.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Users size={24} />,
                          title: "Attract Customers Consistently",
                          desc: "Drive ongoing organic traffic without continuous ad spend."
                        },
                        {
                          icon: <Award size={24} />,
                          title: "Build Brand Awareness Organically",
                          desc: "Establish your brand as a trusted industry authority."
                        },
                        {
                          icon: <Sparkles size={24} />,
                          title: "Generate Higher ROI Over Time",
                          desc: "SEO investments compound for sustainable business growth."
                        },
                        {
                          icon: <Globe size={24} />,
                          title: "Increase Website Authority",
                          desc: "Build domain authority through quality content and backlinks."
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

                  {/* Best SEO Agency Section */}
                  <div className="mt-70 fade-in-up" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Best{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        SEO Agency
                      </span>{" "}
                      in Bangalore for Local Businesses
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40">
                      Bangalore is one of India's fastest-growing business hubs, with thousands of companies competing for online visibility. Digital Elite Services specializes in local SEO strategies that improve your visibility in location-based searches.
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
                          title: "Google Business Profile Optimization",
                          desc: "Optimize your profile to appear in local search results and Google Maps."
                        },
                        {
                          icon: <Navigation size={24} />,
                          title: "Local Keyword Targeting",
                          desc: "Target location-specific keywords to attract nearby customers."
                        },
                        {
                          icon: <BadgeCheck size={24} />,
                          title: "Customer Review Management",
                          desc: "Build trust through positive reviews and responsive reputation management."
                        },
                        {
                          icon: <Megaphone size={24} />,
                          title: "Geo-Targeted SEO Strategies",
                          desc: "Create location-specific content and optimize for local search intent."
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

                  {/* Mobile SEO Optimization */}
                  <div className="mt-70 glow-in" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      Mobile{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        SEO Optimization
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      With the majority of internet users accessing websites through smartphones, mobile optimization has become essential for SEO success. Google prioritizes mobile-friendly websites in search rankings.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Smartphone size={24} />,
                          title: "Mobile Responsiveness",
                          desc: "Ensure your website adapts perfectly to all screen sizes."
                        },
                        {
                          icon: <Zap size={24} />,
                          title: "Page Speed Optimization",
                          desc: "Optimize loading times for better user experience and rankings."
                        },
                        {
                          icon: <Image size={24} />,
                          title: "Image & Media Optimization",
                          desc: "Compress and optimize images for faster mobile loading."
                        },
                        {
                          icon: <Layers size={24} />,
                          title: "Simplified Navigation",
                          desc: "Improve user experience with intuitive mobile navigation."
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
                  </div>

                  {/* SEO Trends Section */}
                  <div className="mt-70 slide-in-left" data-delay="100">
                    <h3 className="title-2 fw-6 letter-space--3 color-dt-black mb-30" style={{marginTop:"53px"}}>
                      SEO Trends{" "}
                      <span style={{ color: "var(--digital-marketing-blue)" }}>
                        Businesses Should Watch
                      </span>
                    </h3>
                    <div className="text ff-2 color-paragraph mb-40 fade-in-up">
                      The SEO landscape continues to evolve rapidly. Businesses that adapt to changing trends gain a competitive advantage in search rankings.
                    </div>
                    
                    <div className="row g-4">
                      {[
                        {
                          icon: <Mic size={24} />,
                          title: "Voice Search Optimization",
                          desc: "Optimize for conversational keywords as voice assistants become more popular."
                        },
                        {
                          icon: <Brain size={24} />,
                          title: "AI and Search Algorithms",
                          desc: "High-quality content and user intent are more important than ever."
                        },
                        {
                          icon: <Smartphone size={24} />,
                          title: "User Experience Signals",
                          desc: "Fast loading times and mobile usability are key ranking factors."
                        },
                        {
                          icon: <Video size={24} />,
                          title: "Video SEO",
                          desc: "Video content is growing rapidly and can significantly improve engagement."
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
                      Get Started with the{" "}
                      <span style={{color:"var(--digital-marketing-light)"}}>
                        Best SEO Services in Bangalore
                      </span>
                    </h4>
                    <p className="ff-2 color-paragraph mb-30">
                      If you're ready to take your business to the next level, Digital Elite Services is here to help. Our expert team is committed to delivering top-notch SEO services in Bangalore that drive real growth and measurable success.
                    </p>
                    <p className="ff-2 color-paragraph mb-30">
                      As a trusted <strong>SEO agency in Bangalore</strong>, we combine strategic expertise with proven methodologies to deliver impactful results. Whether your goal is improving search rankings, generating leads, or building brand awareness, our team has the experience and dedication to help you succeed.
                    </p>
                    <p className="ff-2 color-paragraph">
                      <strong>Contact Digital Elite Services Today</strong> - Let us help you dominate search engine rankings and grow your business online. Partner with a trusted SEO agency in Bangalore that prioritizes your success.
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