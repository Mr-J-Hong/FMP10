const user_input = document.getElementById("gem1_input");
const submit_button = document.getElementById("submit_button");
const gem_wrapper = document.getElementById("gem-wrapper");
const feedback = document.getElementById("feedback-msg");

submit_button.addEventListener("click", checkAns);

function checkAns() {
    if (user_input.valueAsNumber == 182) {
        feedback.style.display = "none";
        gem_wrapper.style.display = "block";
    }
    else {
        feedback.innerText = "Your answer is incorrect. Please try again.";
        feedback.style.backgroundColor = "#fdfd96";
        setTimeout(() => {
            feedback.style.backgroundColor = "transparent"; 
        }, 300);
    }
}