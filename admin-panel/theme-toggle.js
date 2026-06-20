// theme-toggle.js

// Initialize theme from localStorage or default to dark
const initTheme = () => {
    const savedTheme = localStorage.getItem('vayunex_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
};

// Toggle theme function
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('vayunex_theme', newTheme);
    updateThemeIcon(newTheme);
};

// Update icon
const updateThemeIcon = (theme) => {
    const iconEl = document.getElementById('theme-icon');
    if (!iconEl) return;
    
    if (theme === 'light') {
        iconEl.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>'; // Sun icon
    } else {
        iconEl.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'; // Moon icon
    }
};

// Mobile drawer toggle
const initMobileDrawer = () => {
    const drawerToggle = document.getElementById('mobileDrawerToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('mobileOverlay');

    if (drawerToggle && sidebar) {
        drawerToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            if (overlay) {
                overlay.classList.toggle('active');
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
};

// Run initialization
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Setup theme button if exists
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    initMobileDrawer();
});

// Run theme check immediately to prevent flash
initTheme();
