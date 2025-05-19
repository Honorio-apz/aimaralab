// public/nav.js

function initNavbar() {
      const header = document.getElementById('header');
      const headerSpacer = document.getElementById('header-spacer');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
    
      if (!header || !headerSpacer || !mobileMenuButton || !mobileMenu) return;
    
      function updateHeaderSpacerHeight() {
        headerSpacer.style.height = `${header.offsetHeight}px`;
      }
    
      function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        updateHeaderSpacerHeight();
      }
    
      function toggleMobileMenu() {
        const isHidden = mobileMenu.classList.toggle('hidden');
        mobileMenuButton.setAttribute('aria-expanded', !isHidden);
        updateHeaderSpacerHeight();
      }
    
      // Limpia listeners antiguos (importante en SPA/astro)
      mobileMenuButton.onclick = null;
      mobileMenuButton.addEventListener('click', toggleMobileMenu);
    
      // Limpia y agrega listeners a todos los links
      document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.onclick = null;
        link.addEventListener('click', closeMobileMenu);
      });
    
      window.addEventListener('resize', updateHeaderSpacerHeight);
      updateHeaderSpacerHeight();
    }
    
    document.addEventListener('astro:after-swap', initNavbar); // Cuando navegas internamente
    document.addEventListener('DOMContentLoaded', initNavbar); // Cuando cargas por primera vez
    