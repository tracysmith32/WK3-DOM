const image = document.getElementById("cat");
const button = document.getElementById("submit");

let flag = true;

button.addEventListener("click", () => {
    if (flag) {
        image.style.display = "none";
        button.textContent = "show";
        flag = false;
    } else {
        image.style.display = "block";
        button.textContent = "hide";
        flag = true;
    }
});