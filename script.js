document.addEventListener('DOMContentLoaded', function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.shot').forEach(function (shot) {
    shot.addEventListener('click', function () {
      var img = shot.querySelector('img');
      var caption = shot.querySelector('figcaption');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption ? caption.textContent : '';
      lightbox.classList.add('open');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  var navToggle = document.getElementById('navToggle');
  var topnav = document.querySelector('.topnav');
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      topnav.style.display = expanded ? 'none' : 'flex';
      if (!expanded) {
        topnav.style.position = 'absolute';
        topnav.style.top = '64px';
        topnav.style.left = '0';
        topnav.style.right = '0';
        topnav.style.background = 'var(--paper)';
        topnav.style.flexDirection = 'column';
        topnav.style.padding = '16px 24px';
        topnav.style.borderBottom = '1px solid var(--line)';
        topnav.style.gap = '16px';
      }
    });
  }
});
