document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('navMenu') ? document.getElementById('navMenu').closest('.main-nav') : null;

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close menu when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Duplicate logo track for seamless infinite scroll
  var track = document.querySelector('.logo-track');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  // Basic client-side validation feedback for forms with .needs-validation
  document.querySelectorAll('form.needs-validation').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#a12a2a';
        } else {
          field.style.borderColor = '#ccc';
        }
      });
      if (!valid) {
        e.preventDefault();
      }
    });
  });
});
