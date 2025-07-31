(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-navbar-open]'),
    closeModalBtn: document.querySelector('[data-mobile-navbar-close]'),
    modal: document.querySelector('[data-mobile-navbar]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
