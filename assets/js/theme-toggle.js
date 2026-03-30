// Theme Toggle Logic
const themeToggleButton = document.querySelector('.btn-theme-toggle');
const themeIcon = themeToggleButton.querySelector('i');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Default to dark since it's the primary experience
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
}

themeToggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// RTL Toggle Logic
const rtlToggleButtons = document.querySelectorAll('.btn-rtl-toggle');
const currentDir = localStorage.getItem('dir') || 'ltr';

document.documentElement.setAttribute('dir', currentDir);

rtlToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        let dir = document.documentElement.getAttribute('dir');
        if (dir === 'rtl') {
            dir = 'ltr';
        } else {
            dir = 'rtl';
        }
        document.documentElement.setAttribute('dir', dir);
        localStorage.setItem('dir', dir);
    });
});
