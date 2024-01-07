export function flashFeedback(elem, msg) {
    elem.innerText = msg;
    elem.style.background = "#fdfd96";
    setTimeout(() => {
        elem.style.background = "transparent"; 
    }, 300);
}

export function flashBackground(elem) {
    elem.style.background = "#fdfd96";
    setTimeout(() => {
        elem.style.background = "transparent"; 
    }, 300);
}