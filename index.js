
//DECTECTING BUTTON PRESS

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0 ; i< numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    } );
}

//DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


// COMMON FUNCTION FOR BOTH EVENTS
function makeSound (key) {
    switch (key) {
        case "w":
            var crash= new Audio("sounds/crash.mp3");
            return crash.play();
        
        case "a":
            var kick= new Audio("sounds/kick-bass.mp3");
            return kick.play();
            

        case "s":
            var snare= new Audio("sounds/snare.mp3");
            return snare.play();
            
            
        case "d":
            var tom1= new Audio("sounds/tom-1.mp3");
            return tom1.play();
            

        case "j":
            var tom2= new Audio("sounds/tom-2.mp3");
            return tom2.play();
            

        case "k":
            var tom3= new Audio("sounds/tom-3.mp3");
            return tom3.play();

            
        case "l":
            var tom4= new Audio("sounds/tom-4.mp3");
            return tom4.play();
   
    
        default: return console.log(key);
    }
}

//ADDING ANIMATION

function buttonAnimation(buttonpress) {
    var selectedButton = document.querySelector("." + buttonpress);
    selectedButton.classList.add("pressed");
    setTimeout(function(){
        selectedButton.classList.remove("pressed");
    }, 100);


}




// var audio= new Audio("sounds/tom-1.mp3");
// audio.play();