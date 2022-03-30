const example = document.getElementById("heading");
let trigger = true;

example.addEventListener("click", () => {
    if (trigger) {
        example.style.color = "red";
        trigger = false;
    } else {
        example.style.color = "black";
        trigger = true;
    }
});
