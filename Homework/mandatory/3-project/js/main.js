/*-----------------*/
/* ## Part 1 */
/*-----------------*/

function changeColors(jumbotronColor, donateColor, volunteerColor, volunteerTextColor){
    return function (){
      jumbotronEl = document.querySelector(".jumbotron");
      donateEl = document.querySelector(".buttons .btn-primary");
      volunteerEl = document.querySelector(".buttons .btn-secondary");

      jumbotronEl.style.backgroundColor = jumbotronColor;
      donateEl.style.backgroundColor = donateColor;
      volunteerEl.style.backgroundColor = volunteerColor;
      volunteerEl.style.color = volunteerTextColor;
    }   
  }

  var blueBtnEl = document.querySelector("#blueBtn");
  blueBtnEl.addEventListener("click", changeColors("#588fbd","#ffa500","black","white"));

  var orangeBtnEl = document.querySelector("#orangeBtn");
  orangeBtnEl.addEventListener("click", changeColors("#f0ad4e", "#5751fd", "#31b0d5", "white"));

  var greenBtnEl = document.querySelector("#greenBtn");
  greenBtnEl.addEventListener("click", changeColors("#87ca8a", "black", "#8c9c08", "black"));

/*-----------------*/
/* ## Part 2 */
/*-----------------*/

function checkNonEmpty(input){
  //This function will return true if the input is not empty
  return input.value.length > 0;
}

function checkAt(input){
  //This function will return true if the email input has the character "@"
  return input.value.includes("@");
}

function checkEmail(input){
  return checkNonEmpty(input) && checkAt(input);
}

function changeBackground(input, color){
  input.style.borderColor = color;
}

function checkInputValid(input){
  if(input.type === "email"){
    if  (checkEmail(input) === false){
      console.log("My email is not valid");
      changeBackground(input, "red");
    } else {
      console.log("My email is valid");
      changeBackground(input, "white")
    }
  } else {
    if(checkNonEmpty(input) === false) 
      changeBackground(input, "red"); 
    else 
      changeBackground(input, "white");
  }
}

function addEvents(input){
  input.addEventListener("input", checkInputValid.bind(this, input));
}

function validateFields(event){
  const inputs = document.querySelectorAll(".form-control");

  inputs.forEach(checkInputValid);
  inputs.forEach(addEvents);

  event.preventDefault();
}


  