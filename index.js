document.addEventListener("keydown",function(event){ //when any key is pressed on keyboard
  addSound(event.key); //this function adds sound according to the key pressed
  addAnimation(event.key); //animations are added using this function

});
for (var x = 0; document.querySelectorAll("button").length; x++) { //loops over all gameplay buttons
  document.querySelectorAll("button")[x].addEventListener("click", function() { //adds event listener to each game btn
    key = this.innerHTML; //stores the key when pressed
    console.log(key);
    addSound(key); //adds sound to the pressed key
    addAnimation(key); //adds animation
  });
}


function addSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
        break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
        break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
        break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
        break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
        break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
        break;
  }
}
function addAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setInterval(function(){
      document.querySelector("."+key).classList.remove("pressed");
  },100);


}
