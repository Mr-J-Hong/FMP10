import Swappable from 'https://cdn.jsdelivr.net/npm/@shopify/draggable/build/esm/Swappable/Swappable.mjs';
import { flashError, showCorrect } from "./quest_common.mjs";
import {createCookie, readCookie} from "./cookies.mjs";

const swappable1 = new Swappable(document.getElementById('digit-cards'), {
    draggable: '.block--isDraggable',
    mirror: {
      constrainDimensions: true,
    },
  });
