const d = document;
const $ = el => d.querySelector(el)
/*********************ITEM ACTIVE ANIMATION**********************/
let lastElement = null;

const start = e => {
  const move = e => {
    const touch = e.touches[0];
    const element = d.elementFromPoint(touch.clientX, touch.clientY);
    if (!element) return;

    if (element && element.classList.contains('item')) {
      if (lastElement && lastElement !== element) {
        lastElement.classList.remove('active');
      }

      element.classList.add('active');
      lastElement = element;
    }
  };

  const end = () => {
    d.removeEventListener('touchmove', move);
    d.removeEventListener('touchend', end);
  };

  d.addEventListener('touchmove', move, { passive: true });
  d.addEventListener('touchend', end, { passive: true });
};

d.addEventListener('touchstart', start, { passive: true });

/*********************KYDOWN ANIMATIOM**********************/
d.addEventListener("keydown", ({key}) => {
  if (key === "ArrowRight") {
    location.href = $('.next-page').href;
  } else if (key === "ArrowLeft") {
    location.href = $('.prev-page').href;
  }
})