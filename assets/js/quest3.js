import Swappable from 'https://cdn.jsdelivr.net/npm/@shopify/draggable/build/esm/Swappable/Swappable.mjs';

const swappable = new Swappable(document.querySelectorAll('ul'), {
  draggable: 'li',
});

