const header = document.querySelector('.page-header');
const hero = document.querySelector('.hero');

const setHeroPadding = () => {
  const headerHeight = header.offsetHeight;
  hero.style.paddingTop = '${headerHeight}px';
};

setHeroPadding();
window.addEventListener('resize', setHeroPadding);