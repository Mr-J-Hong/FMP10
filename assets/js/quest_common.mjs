export function flashFeedback(elem, msg) {
    elem.innerText = msg;
    elem.style.background = "#fdfd96";
    setTimeout(() => {
        elem.style.background = "transparent"; 
    }, 300);
}

export function flashError(elem) {
    elem.style.background = "#ffcccc";
    setTimeout(() => {
        elem.style.background = "transparent"; 
    }, 300);
}

export function showCorrect(elem) {
    elem.style.background = "#88ff88";
}