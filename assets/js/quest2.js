import { flashError, showCorrect } from "./quest_common.mjs";
import {createCookie, readCookie} from "./cookies.mjs";

const gem_wrapper = document.getElementById("gem-wrapper");

const exbtns = document.querySelectorAll("#exbtns button");
const elevators_wrapper = document.getElementById("elevators");
const elevators_wrapper2 = document.getElementById("elevators2");
for (let i=1; i<=100; i++) {
    const b1 = document.createElement("button");
    b1.innerHTML = i;
    b1.className = "top";
    elevators_wrapper.appendChild(b1);

    const b2 = document.createElement("button");
    b2.innerHTML = i;
    b2.className = "safe";
    elevators_wrapper2.appendChild(b2);
}

const elevators = elevators_wrapper.childNodes;
const elevators2 = elevators_wrapper2.childNodes;
const check_elevators = document.getElementById("check-elevators");
const elevator_feedback = document.getElementById("elevator-feedback");
const squares = new Set([1,4,9,16,25,36,49,64,81,100]);
const primes = new Set([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);

const part2 = document.getElementById("part2");
const reset = document.getElementById("reset");

if (readCookie('quest2') == 'solved_part_1') {
    part2.style.display = "block";
} else if (readCookie('quest2') == 'solved_part_2') {
    part2.style.display = "block";
    gem_wrapper.style.display = "grid";
}

elevators.forEach((elevator) => {
    elevator.addEventListener("click", handleElevatorClick);
});
elevators2.forEach((elevator) => {
    elevator.addEventListener("click", handleElevatorClick2);
});
exbtns.forEach((b) => {
    b.addEventListener("click", handleExBtnsClick);
});
check_elevators.addEventListener("click", checkElevators);
reset.addEventListener("click", resetElevators2);

function getElevatorLocation(elevator_num, run_num) {
    if (run_num == 0) {
        return 0;
    }

    let num_switches = 1; // all switched once on run 1
    for (let n = 2; n <= run_num; n++) {
        if (elevator_num % n == 0) {
            num_switches += 1;
        }
    }
    return num_switches % 2; // 0 == top; 1 == bottom
}

function handleExBtnsClick(evt) {
    const run_num = Number(evt.target.id);
    const elevators = elevators_wrapper.children;

    for (let i = 0; i < elevators.length; i++) {
        let location = getElevatorLocation(i+1, run_num);
        if (location == 0) {
            elevators[i].className = "top";
        } else {
            elevators[i].className = "bot";
        }
    }
    elevator_feedback.innerHTML = "Which elevators are at the bottom after 100 runs?";
    elevator_feedback.style.background = "transparent";
}

function handleElevatorClick(evt) {
    if (evt.target.className == "top") {
        evt.target.className = "bot";
    } else {
        evt.target.className = "top";
    }
    elevator_feedback.innerHTML = "Which elevators are at the bottom after 100 runs?"
    elevator_feedback.style.background = "transparent";
}

function handleElevatorClick2(evt) {
    if (evt.target.className == "bomb") {
        evt.target.className = "safe";
    } else {
        evt.target.className = "bomb";
    }
}

function checkElevators() {
    let nWrong = 0;
    for (let i=0; i<100; i++) {
        const loc = elevators[i].className;
        if ((squares.has(i+1) && loc == "top") || (!squares.has(i+1) && loc == "bot")){
            nWrong += 1;
        }
    }
    if (nWrong == 0) {
        elevator_feedback.innerHTML = "Great work! You've got them all right. "
        showCorrect(elevator_feedback);
        part2.style.display = "block";

        if (readCookie("quest2") != "solved_part_2") {
            part2.scrollIntoView();
            if (readCookie('cookie-notice-option') == "true") {
                createCookie("quest2", "solved_part_1", 120);
            }
        }

    } else if (nWrong == 1) {
        elevator_feedback.innerHTML = nWrong + " elevator is not in the correct position.";
        flashError(elevator_feedback);
    } else {
        elevator_feedback.innerHTML = nWrong + " elevators are not in the correct position.";
        flashError(elevator_feedback);
    }
}

function resetElevators2(){
    elevators2.forEach((elevator) => elevator.className = "safe");
}