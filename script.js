// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.publication, .research-card, .contact-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// Mobile menu toggle (for future enhancement)
const navToggle = document.createElement('button');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '☰';
navToggle.style.display = 'none';

// Add responsive menu for mobile
if (window.innerWidth <= 768) {
    const navMenu = document.querySelector('.nav-menu');
    const navBrand = document.querySelector('.nav-brand');

    navToggle.style.display = 'block';
    navToggle.style.background = 'none';
    navToggle.style.border = 'none';
    navToggle.style.fontSize = '1.5rem';
    navToggle.style.cursor = 'pointer';
    navToggle.style.color = 'var(--primary-color)';

    navBrand.parentElement.insertBefore(navToggle, navMenu);

    navToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer p');
if (footer) {
    footer.innerHTML = footer.innerHTML.replace('2026', currentYear);
}

// Add external link indicators
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Console message for developers
console.log('%c👨‍🔬 Tyrrell Laboratory', 'font-size: 20px; font-weight: bold; color: #3498db;');
console.log('%cInterested in joining our team? Contact us at dtyrrell@uab.edu', 'font-size: 14px; color: #27ae60;');
