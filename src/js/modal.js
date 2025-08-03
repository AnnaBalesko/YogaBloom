(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-10]'),
    closeModalBtn: document.querySelector('[data-modal-close-10]'),
    modal: document.querySelector('[data-modal-10]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
  refs.modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('backdrop')) {
      toggleModal();
    }
  });
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-65]'),
    closeModalBtn: document.querySelector('[data-modal-close-65]'),
    modal: document.querySelector('[data-modal-65]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
  refs.modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('backdrop')) {
      toggleModal();
    }
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-modal-80]');
  const openButtons = document.querySelectorAll('[data-modal-open-80]');
  const closeButton = document.querySelector('[data-modal-close-80]');

  function toggleModal() {
    modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  if (closeButton) {
    closeButton.addEventListener('click', toggleModal);
  }

  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('backdrop')) {
      toggleModal();
    }
  });
});
