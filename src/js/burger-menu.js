document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('[data-mobile-navbar]');
  const closeBtn = document.querySelector('.navbar-button-close');
  const menuLinks = document.querySelectorAll(
    '.navbar-nav-link, .navbar-join-link-mobile, .join-now-button-bottom, .navbar-join-link-desktop'
  );

  function closeMenu() {
    menu.classList.add('is-hidden');
  }

  // Закрытие по кнопке
  closeBtn.addEventListener('click', closeMenu);

  // Закрытие и переход по якорю
  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').replace('#', '');
      const target = document.getElementById(targetId);

      // Закрытие меню
      closeMenu();

      // Плавный скролл
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Ждём, пока меню скроется (если нужно)
      }
    });
  });
});
