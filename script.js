/**
 * Bank BTN KC Tasikmalaya — Vanilla JS
 * Lenis Smooth Scroll · Theme Toggle · Scroll Reveal · Counter · Nav Spy · Form · Parallax
 */

document.addEventListener('DOMContentLoaded', () => {

    // ═══════════════════════════════════
    // 0. LENIS SMOOTH SCROLL (Inertia Scroll)
    // ═══════════════════════════════════
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothHover: true,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate Lenis with Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const id = anchor.getAttribute('href');
            if (id === '#') return;
            
            lenis.scrollTo(id, {
                offset: -100,
                duration: 1.5,
            });
        });
    });

    // ═══════════════════════════════════
    // 1. THEME TOGGLE (Dark / Light)
    // ═══════════════════════════════════
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    function getPreferredTheme() {
        const saved = localStorage.getItem('btn-theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            html.setAttribute('data-theme', 'light');
        } else {
            html.removeAttribute('data-theme');
        }
        localStorage.setItem('btn-theme', theme);
    }

    const currentTheme = getPreferredTheme();
    applyTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = html.getAttribute('data-theme') === 'light';
            const newTheme = isLight ? 'dark' : 'light';
            
            themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 400);

            applyTheme(newTheme);
        });
    }

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem('btn-theme')) {
            applyTheme(e.matches ? 'light' : 'dark');
        }
    });

    // ═══════════════════════════════════
    // 2. SCROLL REVEAL (Intersection Observer)
    // ═══════════════════════════════════
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => animateCounter(counter));
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ═══════════════════════════════════
    // 3. COUNTER ANIMATION (easeOutExpo)
    // ═══════════════════════════════════
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const startTime = performance.now();

        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(ease * target);
            el.textContent = current.toLocaleString('id-ID') + suffix;
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = target.toLocaleString('id-ID') + suffix;
        }

        requestAnimationFrame(tick);
    }

    // ═══════════════════════════════════
    // 4. ACTIVE NAV LINK (scroll spy)
    // ═══════════════════════════════════
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const sectionTargets = [];

    navLinks.forEach(link => {
        const id = link.getAttribute('data-section');
        const section = document.getElementById(id);
        if (section) sectionTargets.push({ link, section });
    });

    function updateActiveNav() {
        const scrollY = window.scrollY + 200;

        sectionTargets.forEach(({ link, section }) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollY >= top && scrollY < bottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });

        if (navbar) {
            if (window.scrollY > 80) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    // ═══════════════════════════════════
    // 6. MOBILE NAV TOGGLE
    // ═══════════════════════════════════
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.getElementById('navLinks');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navLinksContainer.classList.toggle('mobile-open');
        });

        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navLinksContainer.classList.remove('mobile-open');
            });
        });
    }

    // ═══════════════════════════════════
    // 7. CONTACT FORM HANDLING
    // ═══════════════════════════════════
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama');
            const telepon = document.getElementById('telepon');
            const topik = document.getElementById('topik');

            if (!nama.value.trim() || !telepon.value.trim() || !topik.value) {
                submitBtn.style.animation = 'shake 0.4s ease';
                setTimeout(() => submitBtn.style.animation = '', 400);
                return;
            }

            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Mengirim...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Pesan Berhasil Terkirim!';
                submitBtn.classList.add('success');
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.classList.remove('success');
                    submitBtn.disabled = false;
                }, 3500);
            }, 1800);
        });
    }

    // ═══════════════════════════════════
    // 8. HERO MOUSE PARALLAX (Desktop)
    // ═══════════════════════════════════
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent && window.innerWidth > 1024) {
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        hero.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) / 80;
            mouseY = (e.clientY - window.innerHeight / 2) / 80;
        });

        function animateParallax() {
            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;
            heroContent.style.transform = `translate(${-currentX}px, ${-currentY}px)`;
            requestAnimationFrame(animateParallax);
        }
        animateParallax();
    }

    // ═══════════════════════════════════
    // 9. HIDE SCROLL INDICATOR ON SCROLL
    // ═══════════════════════════════════
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }, { passive: true });
    }

});

// Inject Shake keyframes
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `@keyframes shake { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px); } 40% { transform: translateX(6px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }`;
document.head.appendChild(shakeStyle);
