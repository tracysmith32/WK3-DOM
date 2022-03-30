const myHeading = document.querySelector("#heading");
const myList = document.querySelectorAll("li");
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
// array built only with even children
const listItemsEven = document.querySelectorAll("li:nth-child(even)");
// array built only with odd children
const listItemsOdd = document.querySelectorAll("li:nth-child(odd)");

let x = 0;
myHeading.addEventListener("click", () => {
    for (let i = 0; i < myList.length; i++) {
            myList[i].style.color = colours[x];
            x++;
            if (x >= 6) {
                x = 0;
            }
    }
});

myHeading.addEventListener("click", () => {
    for(let i = 0; i < listItemsEven.length; i++){
        listItemsEven[i].style.color = "green";
    }
});
