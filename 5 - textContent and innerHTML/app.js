const heading = document.getElementById("placeholder");
const input = document.getElementById("input");
const button = document.getElementById("submit");
const list = document.getElementById("list");

button.addEventListener("click", () => {
    heading.style.color = input.value;
    heading.textContent = `<li>${input.value}</li>`;
    list.innerHTML = `<li>${input.value}</li>`;
});