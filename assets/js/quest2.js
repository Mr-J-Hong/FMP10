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
const part2 = document.getElementById("part2");
const part3 = document.getElementById("part3");
const set_all_safe = document.getElementById("set-all-safe");
const set_all_bomb = document.getElementById("set-all-bomb");
const elevator2_feedback = document.getElementById("elevator2-feedback");
const check_bombs = document.getElementById("check-bombs");
const check_locker = document.getElementById("check-locker");
const locker_input = document.getElementById("locker-input");
const part1_end = document.getElementById("part1-end");
const part2_end = document.getElementById("part2_end");

let solve_status = readCookie('quest2');
if (solve_status == 'solved_part_1') {
    part2.style.display = "block";
} else if (solve_status == 'solved_part_2') {
    part2.style.display = "block";
    part3.style.display = "block";
} else if (solve_status == 'solved_part_3') {
    part2.style.display = "block";
    part3.style.display = "block";
    gem_wrapper.style.display = "grid";
}

const squares = new Set([1,4,9,16,25,36,49,64,81,100]);
const primes = new Set([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);

elevators.forEach((elevator) => {elevator.addEventListener("click", handleElevatorClick);});
elevators2.forEach((elevator) => {elevator.addEventListener("click", handleElevatorClick2);});
exbtns.forEach((b) => {b.addEventListener("click", handleExBtnsClick);});
check_elevators.addEventListener("click", checkElevators);
set_all_safe.addEventListener("click", () => {elevators2.forEach((elevator) => elevator.className = "safe")});
set_all_bomb.addEventListener("click", () => {elevators2.forEach((elevator) => elevator.className = "bomb")});
check_bombs.addEventListener("click", checkBombs);
check_locker.addEventListener("click", checkLocker);

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
    elevator2_feedback.style.background = "transparent";
    elevator2_feedback.innerHTML = "Which elevators, other than 1, only went down once?";
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

        if (readCookie("quest2") == null) {
            part1_end.scrollIntoView();
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

function checkBombs() {
    for (let i=0; i < elevators2.length; i++) {
        if ((primes.has(i+1) && elevators2[i].className != "bomb")
            || (!primes.has(i+1) && elevators2[i].className != "safe")) {
                elevator2_feedback.innerHTML = "Please try again."
                flashError(elevator2_feedback);
                return
        }
    }

    showCorrect(elevator2_feedback);
    elevator2_feedback.innerHTML = "You did it!"
    part3.style.display = "grid";

    solve_status = readCookie("quest2");
    if (solve_status != "solved_part_2" && solve_status != "solved_part_3") {
        part2_end.scrollIntoView();
        if (readCookie('cookie-notice-option') == "true") {
            createCookie("quest2", "solved_part_2", 120);
        }
    }
}

function checkLocker() {
    // Well, well, well, aren't you a smart cookie?
    if (locker_input.value == "373") {
        gem_wrapper.style.display = "grid";
        showCorrect(locker_input);
        solve_status = readCookie("quest2");
        if (solve_status != "solved_part_3") {
            gem_wrapper.scrollIntoView();
            if (readCookie('cookie-notice-option') == "true") {
                createCookie("quest2", "solved_part_3", 120);
            }
        }
    } else {
        flashError(locker_input);
    }

}