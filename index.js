for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",gotclicked);
}
function gotclicked()
{
  buttonInnerHTML=this.innerHTML;
  buttonAnimation(buttonInnerHTML);
  switch(buttonInnerHTML)
  {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();

    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();

    default : console.console.log(buttonInnerHTML);

      break;
  }

}
document.addEventListener("keydown",abc);
function abc()
{
  var keyElement = event.key;
  buttonAnimation(keyElement);
  gotclickedInkeyboard(keyElement);
}
function gotclickedInkeyboard(keyElement)
{
  switch(keyElement)
  {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();

    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();

    default : console.console.log(buttonInnerHTML);

      break;
  }
}

function buttonAnimation(currentKey)
{
  var animatedElement = document.querySelector("."+currentKey);
  animatedElement.classList.add("pressed");
  setTimeout(function(){animatedElement.classList.remove("pressed"),100});
}
