import Swappable from 'https://cdn.jsdelivr.net/npm/@shopify/draggable/build/esm/Swappable/Swappable.mjs';
import { flashError, showCorrect } from "./quest_common.mjs";
import {createCookie, readCookie} from "./cookies.mjs";

const swappable1 = new Swappable(document.getElementById('puzzle1'), {
  draggable: '.block--isDraggable',
  mirror: {
    constrainDimensions: true,
  },
});

const puzzle1 = document.getElementById("puzzle1");
const submit1 = document.getElementById("submit1");
const usr_msg1 = document.getElementById("usr-msg1");

const adj1 = [[1,3],[0,2],[1,5],[0,6],[],[2,8],[3,7],[6,8],[5,7]];
const squares = new Set(Array.from({length: 10}, (x, i) => i*i));

const part2 = document.getElementById("part2");
const gem_wrapper = document.getElementById("gem-wrapper");

// swappable1.on('drag:stopped', checkPuzzle1);

let solve_status = readCookie('quest3');
if (solve_status == 'solved_part_1') {
    part2.style.display = "block";
} else if (solve_status == 'solved_part_2') {
    part2.style.display = "block";
    gem_wrapper.style.display = "grid";
}

submit1.addEventListener("click", checkPuzzle1);

function checkPuzzle1() {
  const blocks = document.querySelectorAll('#puzzle1 > div'); 
  for (let i=0; i<blocks.length; i++) {
    if (i === 4) { continue; }
    const n = Number(blocks[i].innerHTML);
    const n1 = Number(blocks[adj1[i][0]].innerHTML);
    const n2 = Number(blocks[adj1[i][1]].innerHTML);
    if (!squares.has(n+n1) || !squares.has(n+n2)) {
      usr_msg1.innerHTML = "Touching pairs must sum to a square number.";
      flashError(usr_msg1);
      return;
    }
  }
  usr_msg1.innerHTML = "You did it!"
  showCorrect(usr_msg1);
  part2.style.display = "block";
    if (readCookie("quest3") == null) {
        usr_msg1.scrollIntoView();
        if (readCookie('cookie-notice-option') == "true") {
            createCookie("quest3", "solved_part_1", 365);
        }
    }
}

