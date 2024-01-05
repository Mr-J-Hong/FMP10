import { flashFeedback } from "./quest_common.mjs";
import {createCookie, readCookie} from "./cookies.mjs";

const gem_wrapper = document.getElementById("gem-wrapper");
const reset_button = document.getElementById("reset");
const buttons = document.querySelectorAll(".buttons button");
const tot_msg = document.getElementById("total");
const msg = document.getElementById("msg");

const factors = [[], [1], [1], [1,2], [1], [1,2,3], [1], [1,2,4], [1,3], [1,2,5], [1], [1,2,3,4,6]];
var total = 0;

if (readCookie('quest1') == 'solved') {
    gem_wrapper.style.display = "grid";
}

reset_button.addEventListener("click", resetButtons);

buttons.forEach((currentValue, currentIndex, listObj) => {
    currentValue.addEventListener("click", handleCoinButtonClick);
})

function resetButtons() {
    buttons.forEach((currentValue, currentIndex, listObj) => {
        currentValue.disabled = false;
    })
    total = 0;
    tot_msg.style.background = "transparent";
    tot_msg.innerHTML = "Total: 0";
}

function handleCoinButtonClick(event) {
    const proper_factors = factors[event.target.innerText-1];
    if (proper_factors.every((n) => buttons[n-1].disabled)) {
        flashFeedback(msg, "The tax collector must be paid!");
    } else {
        total += Number(event.currentTarget.innerText); 
        event.target.disabled = true;
        factors[event.target.innerText-1].forEach((item, index) => {
            buttons[item-1].disabled = true;
        });
    }

    tot_msg.innerHTML = "Total: " + total;

    if (total == 50) {
        tot_msg.style.background = "#fdfd96";
        gem_wrapper.style.display = "grid";
        if (readCookie('cookie-notice-option') == "true") {
            createCookie("quest1", "solved", 120);
        }
    }
}

