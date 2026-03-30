// Utility Functions
const navbar = document.querySelector('.navbar');

// Handle Navbar scroll background
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        if(document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.backgroundColor = 'rgba(11, 15, 25, 1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        }
    } else {
        navbar.classList.remove('navbar-scrolled');
        if(document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.backgroundColor = 'rgba(11, 15, 25, 0.8)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        }
    }
});

// Mobile Menu Toggle logic
const hamburgerBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        if(navLinks) navLinks.classList.toggle('active');
        if(navActions) navActions.classList.toggle('active');
        
        // Toggle icon between bars and X
        const icon = hamburgerBtn.querySelector('i');
        if(icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });
}

// Hover effects for Portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        if (overlay) {
            overlay.classList.add('active');
        }
    });
    item.addEventListener('mouseleave', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    });
});

// Dynamic Favicon Generator (Using Brand Logo)
function setBrandFavicon() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Ensure FontAwesome is loaded before drawing
    document.fonts.ready.then(() => {
        ctx.fillStyle = '#B45309'; // Accent Gold color
        ctx.font = '900 48px "Font Awesome 6 Free"';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // Unicode for fa-fire-burner
        ctx.fillText('\ue4f1', 32, 32);
        
        const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.href = canvas.toDataURL('image/png');
        document.head.appendChild(link);
    });
}
setBrandFavicon();
