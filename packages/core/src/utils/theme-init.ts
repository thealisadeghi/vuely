const THEME_STORAGE_KEY = 'vuely-theme';
const INITIALIZED_ATTR = 'data-vuely-initialized';

// Generate the initialization script content
const generateInitScript = () => `
;(function() {
  try {
    var THEME_STORAGE_KEY = '${THEME_STORAGE_KEY}';
    var INITIALIZED_ATTR = '${INITIALIZED_ATTR}';
    var doc = document.documentElement;

    // Get theme from cookie
    var cookies = document.cookie.split(';');
    var savedTheme = null;
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(THEME_STORAGE_KEY + '=') === 0) {
        savedTheme = cookie.substring(THEME_STORAGE_KEY.length + 1);
        break;
      }
    }

    // Fallback to localStorage
    if (!savedTheme) {
      try {
        savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      } catch (e) {}
    }

    // Check system preference
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = savedTheme || (prefersDark ? 'dark' : 'light');

    // Apply theme immediately
    doc.setAttribute('data-theme', theme);

    // Store theme
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      document.cookie = THEME_STORAGE_KEY + '=' + theme + ';path=/;max-age=31536000';
    } catch (e) {}

    // Mark as initialized
    doc.setAttribute(INITIALIZED_ATTR, '');
  } catch (e) {
    console.warn('Vuely: Theme initialization failed', e);
    // Ensure content is visible even if initialization fails
    document.documentElement.setAttribute(INITIALIZED_ATTR, '');
  }
})();
`;

// Create a script tag with the initialization code
const createInitScript = () => {
  const script = document.createElement('script');
  script.textContent = generateInitScript();
  return script;
};

// Function to inject the initialization script
const injectInitScript = () => {
  const script = createInitScript();
  if (document.head) {
    document.head.insertBefore(script, document.head.firstChild);
  } else {
    const observer = new MutationObserver((_mutations, obs) => {
      const head = document.head;
      if (head) {
        head.insertBefore(script, head.firstChild);
        obs.disconnect();
      }
    });
    
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
};

// Execute initialization
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectInitScript);
  } else {
    injectInitScript();
  }
}

export { THEME_STORAGE_KEY }; 