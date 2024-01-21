export function flashFeedback(elem, msg, colour = "#fdfd96") {
    elem.innerText = msg;
    elem.style.background = colour;
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