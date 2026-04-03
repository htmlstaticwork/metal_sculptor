/**
 * Global Theme & RTL Controller
 * Handles dark/light mode and LTR/RTL layouts site-wide.
 */

// --- Theme Toggle Logic ---
(function() {
    const themeToggleButton = document.querySelector('.btn-theme-toggle');
    const htmlElement = document.documentElement;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    htmlElement.setAttribute('data-theme', savedTheme);
    
    // Update theme icon state
    function updateThemeIcon(theme) {
        if (!themeToggleButton) return;
        const icon = themeToggleButton.querySelector('i');
        if (!icon) return;
        
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    // Initial call
    updateThemeIcon(savedTheme);
    
    // Event listener
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
})();

// --- RTL Toggle Logic ---
(function() {
    const rtlToggleButtons = document.querySelectorAll('.btn-rtl-toggle');
    const htmlElement = document.documentElement;
    
    // Load saved direction
    const savedDir = localStorage.getItem('dir') || 'ltr';
    htmlElement.setAttribute('dir', savedDir);
    
    // Event listeners for all instances (header, mobile menu, etc)
    rtlToggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir');
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            
            htmlElement.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
        });
    });
})();
