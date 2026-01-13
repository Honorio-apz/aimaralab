// public/gallery.js

function initGalleryModal() {
      const imageItems = document.querySelectorAll('.image-item');
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      const closeModalBtn = document.getElementById('closeModal');
    
      if (!modal || !modalImage || !closeModalBtn || !imageItems.length) return;
    
      function openModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    
      function closeModal() {
        modal.classList.add('hidden');
        modalImage.src = '';
        document.body.style.overflow = 'auto';
      }
    
      // Limpia listeners previos (buena práctica SPA/Astro)
      imageItems.forEach(item => {
        item.onclick = null;
        item.addEventListener('click', () => {
          const imageSrc = item.getAttribute('data-src');
          openModal(imageSrc);
        });
      });
    
      closeModalBtn.onclick = null;
      closeModalBtn.addEventListener('click', closeModal);
    
      modal.onclick = null;
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          closeModal();
        }
      });
    
      document.onkeydown = null;
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });
    }
    
    // Ejecutar en cargas normales y en swaps de Astro
    document.addEventListener('astro:after-swap', initGalleryModal);
    document.addEventListener('DOMContentLoaded', initGalleryModal);
    