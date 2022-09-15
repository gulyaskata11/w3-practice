let myVariable = "value";

//console.log(myVariable);

myVariable = "new value";

//console.log(myVariable);

let myVariable2 = "szöveg";

// console.log(myVariable2);

myVariable = myVariable2;

//console.log(myVariable);

let myVariable3 = myVariable + myVariable2;

//console.log(myVariable3)

function sumVariables(variable1, variable2) {
    console.log(variable1 + variable2)
};

sumVariables(8, 6);
sumVariables("word1", "word2");
sumVariables(myVariable, myVariable2)

function loadEvent() {
   const newCatButton = document.querySelector(".add-cat")
   newCatButton.addEventListener("click", function () {
    const catContainer = document.querySelector(".cats")
    const now = new Date().getTime()
    const newCat = `<img src="https://cataas.com/cat?random=${now}" alt="" />`
    catContainer.insertAdjacentHTML("beforeend", newCat)
   })
};

window.addEventListener("load", loadEvent);

