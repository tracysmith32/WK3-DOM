const myHeading = document.getElementById("myHeading");
const myList = document.getElementsByTagName("li");

myHeading.addEventListener("click", () => {
    for (let i = 0; i < myList.length; i++) {
        if (myList[i].className == "not-orange") {
            myList[i].style.color = "red";
        } else {
            myList[i].style.color = "orange";
        }
    }
});

myHeading.addEventListener("click", () => {
    for (let i = 0; i < myList.length; i++) {
        if (myList[i].className != "not-orange") {
            myList[i].style.color = "orange";
        }
    }
});
