import { flashError, showCorrect } from "./quest_common.mjs";
import {createCookie, readCookie} from "./cookies.mjs";

const part1_input = document.getElementById("part1_input");
const part1_check = document.getElementById("part1_check");
const add_btn = document.getElementById("add_btn");
const reset_btn = document.getElementById("reset_btn");

const part2 = document.getElementById("part2");
const add_btn2 = document.getElementById("add_btn2");
const reset_btn2 = document.getElementById("reset_btn2");
const tr1 = document.getElementById("tr1");
const trs = document.querySelectorAll("#table2 > tbody tr");

const gem_wrapper = document.getElementById("gem-wrapper");

if (readCookie('quest4') == 'solved_part_1') {
    part2.style.display = "block";
} else if (readCookie('quest4') == 'solved_part_2') {
    part2.style.display = "block";
    gem_wrapper.style.display = "grid";
}

function highlight_row(tr, bg="#88FF88") {
    const cells = tr.children;
    for (var i = 1; i < cells.length; i++) {
        cells[i].style.backgroundColor = bg;
    }
}

var s1 = 0;
var c1 = 0;

add_btn.addEventListener("click", () => {
    if (!tr1.children[0].firstChild.disabled) {
        tr1.children[0].firstChild.disabled = true;
        c1 = parseInt(tr1.children[0].firstChild.value);
        if (isNaN(c1) || c1 < 1) {
            c1 = 1;
        } else if (c1 >= 21){
            c1 = 20;
        }
        s1 = c1;
        tr1.children[0].firstChild.value = c1;
        tr1.children[2].innerHTML = c1;
        tr1.children[3].innerHTML = c1;
        return
    }
    
    if (s1 < 21) {
        c1 += 1;
        tr1.children[3].innerHTML += " + " + c1; 
        s1 += c1;
    }

    tr1.children[2].innerHTML = s1;

    if (s1 == 21) {
        highlight_row(tr1);
    } else if (s1 > 21) {
        highlight_row(tr1, "#ffcccc");
    }
})

reset_btn.addEventListener("click", () => {
    s1 = c1 = 0;
    const cells = tr1.children;
    cells[0].firstChild.disabled = false;
    cells[0].firstChild.value = 1;
    cells[2].innerHTML = cells[3].innerHTML = ""; 
    highlight_row(tr1, "white");
})

part1_check.addEventListener("click", () => {
    // Well, well, well, aren't you a smart cookie?
    if (part1_input.value == "17") {
        part2.style.display = "block";
        showCorrect(part1_input);
        part2.scrollIntoView();
        if (readCookie('cookie-notice-option') == "true") {
            createCookie("quest4", "solved_part_1", 365);
        }
    } else {
        flashError(part1_input);
    }
})

function getRandTargets(tarray) {
    var possible_nums = [3,5,6,7,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
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

const targets = [1,2,3,4,5];
getRandTargets(targets);

var sums = [0, 0, 0, 0, 0];
var curr = [0, 0, 0, 0, 0];

add_btn2.addEventListener("click", () => {
    var matches = 0;
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
            matches += 1;
        } else if (sums[i] > targets[i]) {
            highlight_row(trs[i], "#ffcccc");
        }
    }
    if (matches == 5) {
        gem_wrapper.style.display = "grid";
        gem_wrapper.scrollIntoView();
        if (readCookie('cookie-notice-option') == "true") {
            createCookie("quest4", "solved_part_2", 365);
        }
    }
})

reset_btn2.addEventListener("click", () => {
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