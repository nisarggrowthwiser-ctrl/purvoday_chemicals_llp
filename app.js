document.addEventListener('DOMContentLoaded', () => {

    // Check availability of libraries
    const gsapAvailable = typeof gsap !== 'undefined';
    const srAvailable = typeof ScrollReveal !== 'undefined';
    const swiperAvailable = typeof Swiper !== 'undefined';

    /* --- PRODUCT PORTFOLIO & FORM OPTIONS --- */
    if (typeof initProductPortfolio === 'function') {
        initProductPortfolio();
    }

    /* --- IJARO-STYLE MAGIC CURSOR --- */
    const magicCursor = document.getElementById('magic-cursor');
    if (magicCursor) {
        window.addEventListener('mousemove', (e) => {
            if (gsapAvailable) {
                gsap.to(magicCursor, {
                    duration: 0.1,
                    left: e.clientX,
                    top: e.clientY,
                    overwrite: "auto"
                });
            } else {
                magicCursor.style.left = `${e.clientX}px`;
                magicCursor.style.top = `${e.clientY}px`;
            }
        });

        // Hover states scale & styling
        const interactives = document.querySelectorAll('a, button, .explore-btn, .banner-btn, .eg-card3, .eg-card-2, .product-portfolio-item, select, input, textarea, .slider-btn');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                magicCursor.classList.add('hover');
                if (gsapAvailable) {
                    gsap.to(magicCursor, { scale: 1.5, borderColor: 'var(--secondary-color)', backgroundColor: 'rgba(var(--secondary-color-rgb), 0.12)', duration: 0.3 });
                }
            });
            el.addEventListener('mouseleave', () => {
                magicCursor.classList.remove('hover');
                if (gsapAvailable) {
                    gsap.to(magicCursor, { scale: 1, borderColor: 'var(--primary-color)', backgroundColor: 'transparent', duration: 0.3 });
                }
            });
        });
    }

    /* --- GSAP MAGNETIC HERO BUTTON --- */
    const magneticItem = document.querySelector('.magnetic-item');
    if (magneticItem && gsapAvailable) {
        magneticItem.addEventListener('mousemove', (e) => {
            const bound = magneticItem.getBoundingClientRect();
            const mouseX = e.clientX - bound.left - bound.width / 2;
            const mouseY = e.clientY - bound.top - bound.height / 2;

            gsap.to(magneticItem, {
                x: mouseX * 0.45,
                y: mouseY * 0.45,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        magneticItem.addEventListener('mouseleave', () => {
            gsap.to(magneticItem, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });
    }

    /* --- STICKY NAV ON SCROLL --- */
    const header = document.getElementById('header');
    const headerLogoImg = document.querySelector('.header-logo img');
    if (header) {
        const syncMobileHeaderHeight = () => {
            if (window.innerWidth <= 1024) {
                document.documentElement.style.setProperty('--mobile-header-height', `${header.offsetHeight}px`);
            }
        };
        syncMobileHeaderHeight();
        window.addEventListener('resize', syncMobileHeaderHeight);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('sticky');
                if (headerLogoImg && headerLogoImg.src.indexOf('logo_light.png') === -1) {
                    headerLogoImg.src = 'images/logo_light.png?v=6';
                }
            } else {
                header.classList.remove('sticky');
                if (headerLogoImg && headerLogoImg.src.indexOf('logo_dark.png') === -1) {
                    headerLogoImg.src = 'images/logo_dark.png?v=6';
                }
            }
        });
    }

    /* --- MOBILE NAV MENU TOGGLE --- */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const menuList = document.getElementById('menu-list');
    const bodyEl = document.body;
    let scrollPosition = 0;

    function ensureMobileMenuOverlay() {
        let overlay = document.querySelector('.mobile-menu-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            overlay.setAttribute('aria-hidden', 'true');
            document.body.appendChild(overlay);
            overlay.addEventListener('click', closeMobileMenu);
        }
        return overlay;
    }

    function closeMobileMenu() {
        if (!menuList || !mobileMenuBtn) return;
        menuList.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        menuList.setAttribute('aria-hidden', 'true');
        bodyEl.classList.remove('menu-open');
        bodyEl.style.top = '';
        window.scrollTo(0, scrollPosition);
        const overlay = document.querySelector('.mobile-menu-overlay');
        if (overlay) overlay.setAttribute('aria-hidden', 'true');
        const span = mobileMenuBtn.querySelector('span');
        if (span) span.style.backgroundColor = '';
        sidebarTransform(false);
        menuList.querySelectorAll('.menu-item-has-children').forEach(item => {
            item.classList.remove('sub-menu-open');
            const icon = item.querySelector('.dropdown-icon');
            const dropLink = item.querySelector('a.drop-down');
            if (icon) icon.classList.remove('active');
            if (dropLink) dropLink.setAttribute('aria-expanded', 'false');
        });
    }

    function openMobileMenu() {
        if (!menuList || !mobileMenuBtn) return;
        ensureMobileMenuOverlay();
        scrollPosition = window.scrollY;
        bodyEl.style.top = `-${scrollPosition}px`;
        menuList.classList.add('open');
        mobileMenuBtn.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        menuList.setAttribute('aria-hidden', 'false');
        bodyEl.classList.add('menu-open');
        const overlay = document.querySelector('.mobile-menu-overlay');
        if (overlay) overlay.setAttribute('aria-hidden', 'false');
        const span = mobileMenuBtn.querySelector('span');
        if (span) span.style.backgroundColor = 'transparent';
        sidebarTransform(true);
    }

    function isMobileNav() {
        return window.innerWidth <= 1024;
    }

    function toggleMobileSubmenu(parent) {
        const icon = parent.querySelector('.dropdown-icon');
        const dropLink = parent.querySelector('a.drop-down');
        const isOpen = parent.classList.contains('sub-menu-open');

        menuList.querySelectorAll('.menu-item-has-children').forEach(item => {
            if (item !== parent) {
                item.classList.remove('sub-menu-open');
                const otherIcon = item.querySelector('.dropdown-icon');
                const otherLink = item.querySelector('a.drop-down');
                if (otherIcon) otherIcon.classList.remove('active');
                if (otherLink) otherLink.setAttribute('aria-expanded', 'false');
            }
        });

        parent.classList.toggle('sub-menu-open', !isOpen);
        if (icon) icon.classList.toggle('active', !isOpen);
        if (dropLink) dropLink.setAttribute('aria-expanded', String(!isOpen));
    }

    if (mobileMenuBtn && menuList) {
        const headerBtn = document.querySelector('.nav-right .header-btn');
        if (headerBtn && !menuList.querySelector('.mobile-menu-contact')) {
            const contactItem = document.createElement('li');
            contactItem.className = 'mobile-menu-contact';
            const mobileBtn = document.createElement('a');
            mobileBtn.href = headerBtn.getAttribute('href') || 'contact.html';
            mobileBtn.className = 'mobile-menu-cta';
            mobileBtn.innerHTML = 'Get in Touch<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" /></svg>';
            mobileBtn.addEventListener('click', () => {
                if (isMobileNav()) closeMobileMenu();
            });
            contactItem.appendChild(mobileBtn);
            menuList.appendChild(contactItem);
        }

        mobileMenuBtn.setAttribute('aria-controls', 'menu-list');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        menuList.setAttribute('aria-hidden', 'true');

        mobileMenuBtn.addEventListener('click', () => {
            if (menuList.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        menuList.querySelectorAll('.menu-item-has-children').forEach(parent => {
            const icon = parent.querySelector('.dropdown-icon');
            const dropLink = parent.querySelector('a.drop-down');

            if (icon) {
                icon.addEventListener('click', (e) => {
                    if (!isMobileNav()) return;
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileSubmenu(parent);
                });
            }

            if (dropLink) {
                dropLink.addEventListener('click', (e) => {
                    if (isMobileNav()) {
                        e.preventDefault();
                        toggleMobileSubmenu(parent);
                    }
                });
            }
        });

        menuList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!isMobileNav()) return;
                if (link.classList.contains('drop-down')) return;
                if (link.classList.contains('mobile-menu-cta') || link.closest('.sub-menu') || (link.getAttribute('href') && link.getAttribute('href') !== '#')) {
                    closeMobileMenu();
                }
            });
        });

        window.addEventListener('resize', () => {
            if (!isMobileNav()) {
                closeMobileMenu();
            } else {
                syncMobileHeaderHeight();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileMenu();
        });
    }

    function sidebarTransform(active) {
        const styleId = 'sidebar-active-styles';
        let styleEl = document.getElementById(styleId);
        
        if (active) {
            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = styleId;
                styleEl.innerText = `
                    .mobile-menu-btn.active::before { transform: rotateZ(45deg) translate(8px, 6px); }
                    .mobile-menu-btn.active::after { transform: rotateZ(-45deg) translate(8px, -6px); }
                `;
                document.head.appendChild(styleEl);
            }
        } else {
            if (styleEl) styleEl.remove();
        }
    }

    /* --- ACTIVE NAVIGATION LINK --- */
    const currentLocation = window.location.href;
    const menuItem = document.querySelectorAll('.menu-list li a');
    menuItem.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
            item.parentElement.classList.add('active');
        } else {
            item.classList.remove('active');
            item.parentElement.classList.remove('active');
        }
    });

    /* --- SWIPER SLIDERS INITIALIZATION --- */
    if (swiperAvailable) {
        // Group of Company Categories (Horizontal Panel Slider)
        new Swiper(".banner3-slider", {
            slidesPerView: 1,
            speed: 1500,
            spaceBetween: 0,
            breakpoints: {
                280: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 3 }
            }
        });

        // Workshops / Infrastructure Gallery
        new Swiper(".cover-carasol", {
            slidesPerView: 1,
            speed: 1500,
            spaceBetween: 25,
            autoplay: { delay: 2500, disableOnInteraction: false },
            navigation: { nextEl: ".next-1", prevEl: ".prev-1" },
            breakpoints: {
                280: { slidesPerView: 1 },
                576: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 25 }
            }
        });

        // Testimonials WhatsApp Chat Slider
        new Swiper(".testimonial-slider2", {
            slidesPerView: 1,
            speed: 1500,
            spaceBetween: 25,
            effect: "fade",
            fadeEffect: { crossFade: true },
            autoplay: { delay: 4000, disableOnInteraction: false },
            pagination: { el: ".franctional-pagi2", type: "fraction" },
            navigation: { nextEl: ".next-3", prevEl: ".prev-3" }
        });
    }

    /* --- CATEGORIES BACKGROUND HOVER TRANSITION --- */
    const bannerHovers = document.querySelectorAll('.banner-hover');
    const bannerBg = document.getElementById('home3-banner-bg');
    if (bannerBg) {
        bannerHovers.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const src = card.getAttribute('data-src');
                if (src) {
                    bannerBg.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url('${src}')`;
                    bannerBg.style.backgroundSize = 'cover';
                    bannerBg.style.backgroundPosition = 'center';
                }
            });
        });
    }

    /* --- STATS COUNTER TRIGGER --- */
    const digitsList = document.querySelectorAll('.count-digit');
    if (digitsList.length > 0) {
        const digitOptions = {
            threshold: 0.7,
            rootMargin: "0px"
        };

        const countObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const node = entry.target;
                    const endVal = parseInt(node.getAttribute('data-target') || node.innerText, 10);
                    triggerCount(node, endVal);
                    observer.unobserve(node);
                }
            });
        }, digitOptions);

        digitsList.forEach(digit => countObserver.observe(digit));
    }

    function triggerCount(element, endVal) {
        let current = 0;
        const dur = 2000;
        const fps = 60;
        const stepTime = 1000 / fps;
        const stepsCount = dur / stepTime;
        let activeStep = 0;

        const timer = setInterval(() => {
            activeStep++;
            const t = activeStep / stepsCount;
            const val = Math.round(endVal * (t * (2 - t))); // Ease out quad
            
            element.textContent = val;
            
            if (activeStep >= stepsCount) {
                element.textContent = endVal;
                clearInterval(timer);
            }
        }, stepTime);
    }

    /* --- SCROLL PROGRESS PROGRESS LOADER (SCROLL-TO-TOP) --- */
    const circleContainer = document.querySelector(".circle-container");
    const circlePath = document.querySelector(".circle-container path");
    if (circleContainer && circlePath) {
        const offset = 50;
        const pathLength = circlePath.getTotalLength();
        
        circlePath.style.transition = circlePath.style.WebkitTransition = "none";
        circlePath.style.strokeDasharray = pathLength;
        circlePath.style.strokeDashoffset = pathLength;
        circlePath.getBoundingClientRect();
        circlePath.style.transition = circlePath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        
        const updateLoader = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const height = docHeight - winHeight;
            const progress = pathLength - (scrollTop * pathLength) / (height || 1);
            circlePath.style.strokeDashoffset = progress;
            
            if (scrollTop > offset) {
                circleContainer.classList.add("active");
            } else {
                circleContainer.classList.remove("active");
            }
        };

        circleContainer.onclick = function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        window.addEventListener('scroll', updateLoader);
        updateLoader();
    }

    /* --- SCROLL REVEAL TRIGGERS --- */
    if (srAvailable) {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1200,
            delay: 150,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            reset: false
        });

        sr.reveal('.section-title1', { delay: 100 });
        sr.reveal('.banner-content h1', { origin: 'left', delay: 150 });
        sr.reveal('.banner-right-content', { origin: 'right', delay: 200 });
        sr.reveal('.banner-bottom-img', { scale: 0.95, duration: 1400 });
        sr.reveal('.eg-card3', { interval: 100 });
        sr.reveal('.eg-card-2', { interval: 80 });
        sr.reveal('.product-portfolio-item', { interval: 40, distance: '30px' });
        sr.reveal('.single-counter', { interval: 100 });
    }

    /* --- GSAP BANNER IMAGES PARALLAX --- */
    if (gsapAvailable && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const bannerImgs = document.querySelectorAll('.banner-bottom-img img');
        bannerImgs.forEach(img => {
            gsap.to(img, {
                yPercent: 12,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Parallax image hover effect on desktop
        const parallaxContainers = document.querySelectorAll('.banner-bottom-img');
        parallaxContainers.forEach(container => {
            const img = container.querySelector('img');
            if (!img) return;
            
            const wrapper = document.createElement('div');
            wrapper.style.width = '100%';
            wrapper.style.height = '100%';
            wrapper.style.overflow = 'visible';
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            
            container.addEventListener('mouseenter', () => {
                gsap.to(wrapper, {
                    scale: 1.08,
                    duration: 0.8,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
            
            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left - (rect.width / 2);
                const y = e.clientY - rect.top - (rect.height / 2);
                
                gsap.to(wrapper, {
                    x: x * -0.03,
                    y: y * -0.03,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
            
            container.addEventListener('mouseleave', () => {
                gsap.to(wrapper, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        });
    }

    /* --- PRODUCT ENQUIRY AUTOFILL --- */
    const productLinks = document.querySelectorAll('.product-inquire');
    const productSelect = document.getElementById('product-select');
    if (productLinks.length > 0 && productSelect) {
        productLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const productName = link.getAttribute('data-product');
                if (productName) {
                    productSelect.value = productName;
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        e.preventDefault();
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }

    /* --- COMPANY PROFILE PDF DOWNLOAD --- */
    document.querySelectorAll('[data-download-pdf]').forEach(link => {
        link.addEventListener('click', async (e) => {
            const url = link.getAttribute('href');
            const filename = link.getAttribute('download') || 'company-profile.pdf';
            if (!url || location.protocol === 'file:') return;

            e.preventDefault();
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Download failed');
                const blob = await response.blob();
                const blobUrl = URL.createObjectURL(blob);
                const temp = document.createElement('a');
                temp.href = blobUrl;
                temp.download = filename;
                document.body.appendChild(temp);
                temp.click();
                temp.remove();
                URL.revokeObjectURL(blobUrl);
            } catch {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });
    });

    /* --- GLOBAL NEWSLETTER FORM --- */
    const newsletterForm = document.getElementById('newsletter-footer-form');
    const newsletterSuccess = document.getElementById('newsletter-success');
    if (newsletterForm && newsletterSuccess) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            newsletterSuccess.style.display = 'block';
            newsletterForm.reset();
            setTimeout(() => {
                newsletterSuccess.style.display = 'none';
            }, 5000);
        });
    }

    /* --- DEALERSHIP PAGE: FAQ + FORM --- */
    if (document.body.classList.contains('dealership-page')) {
        const faqAccordion = document.getElementById('dealership-faq');
        if (faqAccordion) {
            faqAccordion.querySelectorAll('.dl-accordion-trigger').forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
                    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

                    faqAccordion.querySelectorAll('.dl-accordion-trigger').forEach(other => {
                        other.setAttribute('aria-expanded', 'false');
                        const otherPanel = document.getElementById(other.getAttribute('aria-controls'));
                        if (otherPanel) otherPanel.hidden = true;
                    });

                    if (!isExpanded && panel) {
                        trigger.setAttribute('aria-expanded', 'true');
                        panel.hidden = false;
                    }
                });
            });
        }

        const dealershipForm = document.getElementById('dealership-form');
        const dealershipSuccess = document.getElementById('dealership-success');
        if (dealershipForm && dealershipSuccess) {
            dealershipForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (!dealershipForm.checkValidity()) {
                    dealershipForm.reportValidity();
                    return;
                }
                dealershipForm.hidden = true;
                dealershipSuccess.hidden = false;
            });
        }
    }
});
