// This script will be injected into the HTML head
(function() {
  var THEME_STORAGE_KEY = 'vuely-theme';
  var INITIALIZED_ATTR = 'data-vuely-initialized';
  var doc = document.documentElement;

  function init() {
    try {
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
    } catch (e) {
      console.warn('Vuely: Theme initialization failed', e);
    } finally {
      // Always mark as initialized to prevent content from being hidden
      doc.setAttribute(INITIALIZED_ATTR, '');
    }
  }

  // Execute immediately
  init();
})(); 