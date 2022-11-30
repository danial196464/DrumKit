var i = 0;
var number = document.querySelectorAll(".drum").length;
while (i < number) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var text = this.innerHTML;
    sound(text);
    animation(text);
  })
  i++;
};
document.addEventListener("keydown",function(event){
  var theKeyPressed = event.key;

  sound(theKeyPressed);
  animation(theKeyPressed);
});

function sound(key) {
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
    default:

  }
}

function animation(thekey){
  document.querySelector("."+thekey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("."+thekey).classList.remove("pressed");
  }, 10);

}
