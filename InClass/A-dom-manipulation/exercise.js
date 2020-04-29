/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

console.log("Task 1: ");

var paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

var firstDiv = document.querySelector("div");
console.log(firstDiv);

var jumbotronId = document.querySelector("#jumbotron-text");
console.log(jumbotronId);

var pInsideNode = document.querySelectorAll(".primary-content p");
console.log(pInsideNode);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

console.log("Task 2:");

function alertMessage(){
    alert("Thanks for visiting Bikes for Refugees");
}

var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertMessage);

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


console.log("Task 3:");

var changeColorBtn = document.querySelector("#bgrChangeBtn");

function changeColor(){
    if (document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
}

changeColorBtn.addEventListener("click", changeColor);


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

console.log("Task 4:");

var addTextButton = document.querySelector("#addTextBtn");

function createP(){
    var newP = document.createElement("p");
    newP.innerText = "Read more below.";

    var mainArticles = document.querySelector("#mainArticles");
    mainArticles.appendChild(newP);
}

addTextButton.addEventListener("click", createP);

/*
Task 5
=====

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

console.log("Task 5:");

var largerLinksButton = document.querySelector("#largerLinksBtn");

function makeABigger(){ 
    if (document.querySelector("a").className.includes("biggerA")) {
        document.querySelectorAll("a").forEach(element => element.classList.remove('biggerA'));
    } else {
        document.querySelectorAll("a").forEach(element => element.classList.add("biggerA"));
    }
}

largerLinksButton.addEventListener("click", makeABigger);


/*
Task 6
======
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

console.log("Task 6:");

var addButton = document.querySelector("#addArticleBtn");

function appendParFromInput() {
    var inputField = document.querySelector("input");
    var inputValue = inputField.value;

    var newPar = document.createElement("p");
    newPar.innerText = inputValue;

    mainArticles.appendChild(newPar);
}

addButton.addEventListener("click", appendParFromInput);