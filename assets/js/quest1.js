import { flashError, showCorrect } from "./quest_common.mjs";
import {createCookie, readCookie} from "./cookies.mjs";

const gem_wrapper = document.getElementById("gem-wrapper");

const reset_button1 = document.getElementById("reset1");
const buttons1 = document.querySelectorAll("#puzzle1 .buttons button");
const tot_msg1 = document.getElementById("total1");
const pwr_req1 = document.getElementById("power_required1");

const puzzle2 = document.getElementById("puzzle2");
const reset_button2 = document.getElementById("reset2");
const buttons2 = document.querySelectorAll("#puzzle2 .buttons button");
const tot_msg2 = document.getElementById("total2");
const pwr_req2 = document.getElementById("power_required2");

if (readCookie('quest1') == 'solved_part_1') {
    puzzle2.style.display = "block";
} else if (readCookie('quest1') == 'solved_part_2') {
    puzzle2.style.display = "block";
    gem_wrapper.style.display = "grid";
}

reset_button1.addEventListener("click", resetButtons);
buttons1.forEach((currentValue, currentIndex, listObj) => {
    currentValue.addEventListener("click", handleCoinButtonClick);
})

reset_button2.addEventListener("click", resetButtons2);
buttons2.forEach((currentValue, currentIndex, listObj) => {
    currentValue.addEventListener("click", handleCoinButtonClick2);
})

let factors = []
for (let n = 1; n <= 24; n++) {
    factors.push(Array.from({length:n-1}, (v, i) => i+1).filter(function f(i) { return n%i == 0}));
}

var total = 0;
var total2 = 0;

function resetButtons() {
    buttons1.forEach((currentValue, currentIndex, listObj) => {
        currentValue.disabled = false;
    })
    total = 0;
    tot_msg1.style.background = "transparent";
    tot_msg1.innerHTML = "Total Power: 0";
    pwr_req1.style.background = "transparent";
}

function resetButtons2() {
    buttons2.forEach((currentValue, currentIndex, listObj) => {
        currentValue.disabled = false;
    })
    total2 = 0;
    tot_msg2.style.background = "transparent";
    tot_msg2.innerHTML = "Total Power: 0";
    pwr_req2.style.background = "transparent";
    pwr_req2.innerHTML = "Not enough power"
}

function handleCoinButtonClick(event) {
    const proper_factors = factors[event.target.innerText-1];
    if (proper_factors.every((n) => buttons1[n-1].disabled)) {
        if (total < 50) {
            flashError(tot_msg1);
            flashError(pwr_req1);
        }
    } else {
        total += Number(event.currentTarget.innerText); 
        event.target.disabled = true;
        factors[event.target.innerText-1].forEach((item, index) => {
            buttons1[item-1].disabled = true;
        });

        tot_msg1.innerHTML = "Total Power: " + total;

        if (total == 50) {
            showCorrect(tot_msg1);
            showCorrect(pwr_req1);
            puzzle2.style.display = "block";
            if (readCookie('quest1') == null) {
                total1.scrollIntoView();
                if (readCookie('cookie-notice-option') == "true") {
                    createCookie("quest1", "solved_part_1", 120);
                }
            }
        }
    }
}

function handleCoinButtonClick2(event) {
    const min_score = 173;
    const proper_factors = factors[event.target.innerText-1];
    if (proper_factors.every((n) => buttons2[n-1].disabled)) {
        if (total2 < min_score) {
            flashError(tot_msg2);
            flashError(pwr_req2);
        }
    } else {
        total2 += Number(event.currentTarget.innerText); 
        event.target.disabled = true;
        factors[event.target.innerText-1].forEach((item, index) => {
            buttons2[item-1].disabled = true;
        });

        tot_msg2.innerHTML = "Total Power: " + total2;

        if (total2 >= min_score) {
            showCorrect(tot_msg2);
            showCorrect(pwr_req2);
            pwr_req2.innerHTML = "Powered Up!";
            gem_wrapper.style.display = "grid";
    
            if (readCookie('quest1') != "solved_part_2"){
                gem_wrapper.scrollIntoView();
            }
            if (readCookie('cookie-notice-option') == "true") {
                createCookie("quest1", "solved_part_2", 120);
            }
        }
    }
}
