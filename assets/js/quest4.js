import { flashError, showCorrect } from "./quest_common.mjs";
import {createCookie, readCookie} from "./cookies.mjs";


const add_btn = document.getElementById("add_btn");
const reset_btn = document.getElementById("reset_btn");

const trs = document.querySelectorAll("#table1 > tbody tr");

function highlight_row(tr, bg="#88FF88") {
    const cells = tr.children;
    for (var i = 1; i < cells.length; i++) {
        cells[i].style.backgroundColor = bg;
    }
}

function getRandTargets(tarray) {
    var possible_nums = [3,5,6,7,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29];
    for (var i=0; i < tarray.length; i++) {
        const j = Math.floor(Math.random() * possible_nums.length);
        tarray[i] = possible_nums[j];
        possible_nums[j] = possible_nums.pop();
    }

    for (var i = 0; i < trs.length; i++) {
        trs[i].children[0].firstChild.setAttribute("max", targets[i] - 1);
        trs[i].children[1].innerHTML = targets[i];
    }
}

const targets = [1,2,3];
getRandTargets(targets);

var sums = [0, 0, 0];
var curr = [0, 0, 0];

add_btn.addEventListener("click", () => {
    for (var i = 0; i < trs.length; i++) {
        if (!trs[i].children[0].firstChild.disabled) {
            trs[i].children[0].firstChild.disabled = true;
            curr[i] = parseInt(trs[i].children[0].firstChild.value);
            if (isNaN(curr[i]) || curr[i] < 1) {
                curr[i] = 1;
            } else if (curr[i] >= targets[i]){
                curr[i] = targets[i] - 1;
            }
            sums[i] = curr[i];
            trs[i].children[0].firstChild.value = curr[i];
            trs[i].children[2].innerHTML = curr[i];
            trs[i].children[3].innerHTML = curr[i];
            continue;
        }
        
        if (sums[i] < targets[i]) {
            curr[i] += 1;
            trs[i].children[3].innerHTML += " + " + curr[i]; 
            sums[i] += curr[i];
        }

        trs[i].children[2].innerHTML = sums[i];

        if (sums[i] == targets[i]) {
            highlight_row(trs[i]);
        } else if (sums[i] > targets[i]) {
            highlight_row(trs[i], "#ffcccc");
        }
    }
})

reset_btn.addEventListener("click", () => {
    for (var i = 0; i < trs.length; i++) {
        sums[i] = curr[i] = 0;
        const cells = trs[i].children;
        cells[0].firstChild.disabled = false;
        cells[0].firstChild.value = 1;
        cells[2].innerHTML = cells[3].innerHTML = ""; 
        highlight_row(trs[i], "white");
    }
    getRandTargets(targets);
})