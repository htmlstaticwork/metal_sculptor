/**
 * Global Site Interactions
 */

(function() {
    // Utility elements
    const navbar = document.querySelector('.navbar');
    const hamburgerBtn = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    // Handle Navbar scroll background
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Mobile Menu Toggle logic
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            if (navLinks) navLinks.classList.toggle('active');
            if (navActions) navActions.classList.toggle('active');
            
            // Toggle icon between bars and X
            const icon = hamburgerBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
    }

    // Hover effects for Portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (portfolioItems.length > 0) {
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
    }

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
    
    // Run if fonts API is supported
    if ('fonts' in document) {
        setBrandFavicon();
    }
})();
