export function flashFeedback(elem, msg) {
    elem.innerText = msg;
    elem.style.background = "#fdfd96";
    setTimeout(() => {
        elem.style.background = "transparent"; 
    }, 300);
}