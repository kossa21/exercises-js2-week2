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



  