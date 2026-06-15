document.addEventListener('DOMContentLoaded', () => {

    // Check if GSAP is loaded
    const gsapAvailable = typeof gsap !== 'undefined';
    const srAvailable = typeof ScrollReveal !== 'undefined';

    /* --- IJARO-STYLE MAGIC CURSOR --- */
    const magicCursor = document.getElementById('magic-cursor');
    const ball = document.getElementById('ball');

    if (magicCursor) {
        window.addEventListener('mousemove', (e) => {
            // Smoothly move the cursor using GSAP if available, otherwise fallback
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

        // Hover scale class handler
        const interactives = document.querySelectorAll('a, button, .explore-circle, .banner-btn, .eg-card3, .eg-card-2, select, input, textarea');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                magicCursor.classList.add('hover');
                if (gsapAvailable) {
                    gsap.to(magicCursor, { scale: 1.5, borderColor: 'var(--secondary-color)', backgroundColor: 'rgba(254, 204, 0, 0.1)', duration: 0.3 });
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

    /* --- GSAP MAGNETIC MOUSE HOVER FOR HERO CIRCLE BUTTON --- */
    const magneticItem = document.querySelector('.magnetic-item');
    if (magneticItem && gsapAvailable) {
        magneticItem.addEventListener('mousemove', (e) => {
            const bound = magneticItem.getBoundingClientRect();
            const mouseX = e.clientX - bound.left - bound.width / 2;
            const mouseY = e.clientY - bound.top - bound.height / 2;

            // Translate button slightly towards the cursor to create magnetic feel
            gsap.to(magneticItem, {
                x: mouseX * 0.45,
                y: mouseY * 0.45,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        magneticItem.addEventListener('mouseleave', () => {
            // Snap back
            gsap.to(magneticItem, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });
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

        // Apply visual entries to cards and titles
        sr.reveal('.section-title1', { delay: 100 });
        sr.reveal('.banner-content h1', { origin: 'left', delay: 150 });
        sr.reveal('.banner-right-content', { origin: 'right', delay: 200 });
        sr.reveal('.banner-bottom-img', { scale: 0.95, duration: 1400 });
        sr.reveal('.eg-card3', { interval: 100 });
        sr.reveal('.eg-card-2', { interval: 80 });
        sr.reveal('.single-counter', { interval: 100 });
    }

    /* --- GSAP PARALLAX ON SCROLL FOR BANNER IMAGES --- */
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
    }

    /* --- STICKY NAV ON SCROLL --- */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    /* --- MOBILE NAV TOGGLE --- */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const menuList = document.getElementById('menu-list');

    if (mobileMenuBtn && menuList) {
        mobileMenuBtn.addEventListener('click', () => {
            menuList.classList.toggle('open');
            mobileMenuBtn.classList.toggle('active');
            
            // Icon layout lines transformations
            const span = mobileMenuBtn.querySelector('span');
            if (menuList.classList.contains('open')) {
                span.style.backgroundColor = 'transparent';
                sidebarTransform(true);
            } else {
                span.style.backgroundColor = '';
                sidebarTransform(false);
            }
        });

        // Close mobile nav drawer when links are clicked
        menuList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuList.classList.remove('open');
                mobileMenuBtn.classList.remove('active');
                const span = mobileMenuBtn.querySelector('span');
                span.style.backgroundColor = '';
                sidebarTransform(false);
            });
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
            if (styleEl) {
                styleEl.remove();
            }
        }
    }

    /* --- SCROLL SPY ACTIVE LINK STATE --- */
    const sections = document.querySelectorAll('section, .banner1-section, .solution-section, .banner3-section, .about-section2, .contect-section6');
    const navItems = document.querySelectorAll('.menu-list a');

    window.addEventListener('scroll', () => {
        let activeSecId = '';
        sections.forEach(sec => {
            const secTop = sec.offsetTop;
            if (window.pageYOffset >= (secTop - 160)) {
                activeSecId = sec.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === activeSecId) {
                item.classList.add('active');
            }
        });
    });

    /* --- PRODUCT SPEC FILL-CLICK EVENT --- */
    const productLinks = document.querySelectorAll('.product-inquire');
    const productSelect = document.getElementById('product-select');

    productLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const productName = link.getAttribute('data-product');
            if (productSelect && productName) {
                productSelect.value = productName;
                
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    e.preventDefault();
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    /* --- STATS COUNTER TRIGGER --- */
    const digitsList = document.querySelectorAll('.count-digit');
    const digitOptions = {
        threshold: 0.7,
        rootMargin: "0px"
    };

    const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const node = entry.target;
                const endVal = parseInt(node.getAttribute('data-target'), 10);
                triggerCount(node, endVal);
                observer.unobserve(node);
            }
        });
    }, digitOptions);

    digitsList.forEach(digit => countObserver.observe(digit));

    function triggerCount(element, endVal) {
        let current = 0;
        const dur = 1500;
        const fps = 60;
        const stepTime = 1000 / fps;
        const stepsCount = dur / stepTime;
        let activeStep = 0;

        const timer = setInterval(() => {
            activeStep++;
            const t = activeStep / stepsCount;
            // Ease out quad
            const val = Math.round(endVal * (t * (2 - t)));
            
            element.textContent = val;
            
            if (activeStep >= stepsCount) {
                element.textContent = endVal;
                clearInterval(timer);
            }
        }, stepTime);
    }

    /* --- FORM SUBMISSION CONTROLS --- */
    const enquiryForm = document.getElementById('purvoday-form');
    const successMsg = document.getElementById('enquiry-success');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = enquiryForm.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;

            inputs.forEach(el => {
                el.style.borderColor = '';
                
                if (!el.value.trim()) {
                    isValid = false;
                    el.style.borderColor = '#ef4444';
                } else if (el.type === 'email') {
                    const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!mailFormat.test(el.value.trim())) {
                        isValid = false;
                        el.style.borderColor = '#ef4444';
                    }
                }
            });

            if (isValid) {
                enquiryForm.style.opacity = '0.5';
                
                setTimeout(() => {
                    enquiryForm.style.opacity = '1';
                    enquiryForm.style.display = 'none';
                    successMsg.style.display = 'block';
                    enquiryForm.reset();
                    
                    setTimeout(() => {
                        successMsg.style.display = 'none';
                        enquiryForm.style.display = 'block';
                    }, 5000);
                }, 1000);
            } else {
                const contactCard = document.querySelector('.contact-form-area');
                if (contactCard) {
                    contactCard.style.animation = 'shake 0.3s ease';
                    setTimeout(() => {
                        contactCard.style.animation = '';
                    }, 300);
                }
            }
        });
    }

    // Programmatically append shake animation frames
    const styleNode = document.createElement("style");
    styleNode.innerText = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-6px); }
            75% { transform: translateX(6px); }
        }
    `;
    document.head.appendChild(styleNode);
});
