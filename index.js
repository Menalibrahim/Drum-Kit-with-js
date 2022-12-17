
/*document.querySelector("button").addEventListener("click", handClick);

function handClick() {
  alert("I got Clicked!");
}*/


/* OR
document.querySelector("button").addEventListener("click", function () {
  alert("I got Clicked!");
});
     */


  let btns = document.querySelectorAll('button');

for (i of btns) {
  i.addEventListener('click', function() {
     var audio = new Audio('sound/Tom1.mp3');
     audio.play();
  });
}

/*var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for("var i = 0; i < numberOfDrumButtons; i++;"){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   this.style.color="white";
  })
}*/
