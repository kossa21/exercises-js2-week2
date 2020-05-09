/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  var elh1, elh2;
     
  for (let i = 0; i < arrayOfPeople.length; i++) {
    elh1 = document.createElement("h1");
    elh2 = document.createElement("h2");

    elh1.innerHTML = arrayOfPeople[i].name;
    content.appendChild(elh1);

    elh2.innerHTML = arrayOfPeople[i].job;
    content.appendChild(elh2);  
  }
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  var elul = document.createElement("ul");
  var elli;

  var content = document.querySelector("#content");
  content.appendChild(elul);

  for (let i = 0; i < shopping.length; i++) {
    elli = document.createElement("li");
    elli.innerHTML = shopping[i];

    elul.appendChild(elli);
  }
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  var ulBooksEl = document.createElement("ul");
  ulBooksEl.style.display = "flex";
  ulBooksEl.style.justifyContent = "space-around";
  var contentEl = document.querySelector("#content");

  var imglink1 = "https://www.adrionltd.com/87217-thickbox_default/the-design-of-everyday-things.jpg";
  var imglink2 = "https://miro.medium.com/max/2892/1*XddVAHMSQ7LI48-odlQlUQ.jpeg";
  var imglink3 = "https://stefano.chiodino.uk/images/41BKx1AxQWL.jpg";
  
  contentEl.appendChild(ulBooksEl);

  for (let i = 0; i < books.length; i++) {
    var liBookEl = document.createElement("li");
    liBookEl.style.padding = "20px 10px 20px 10px";
    
    var bookTitle = document.createElement("p").innerHTML = books[i].title + " - " + books[i].author;
    liBookEl.innerHTML = bookTitle;

    var bookImg = document.createElement("img");
    switch (i) {
      case 0:
        bookImg.src = imglink1;
        break;

      case 1:
        bookImg.src = imglink2;
        break;

      default:
        bookImg.src = imglink3;
        break;
    }
    liBookEl.appendChild(bookImg);

    if(books[i].alreadyRead===true){
      liBookEl.className = "readBook";
    } else {
      liBookEl.className = "unreadBook";
    }

    ulBooksEl.appendChild(liBookEl);
    
  }
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
