// alert("its working!");
// document.querySelector("button").addEventListener("click",function (){
//     alert("I have been clicked");
// });

//Playing sounds based on character
function keySounds(keyValue){
    switch (keyValue) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}

//Button Press
var drumButtons = document.querySelectorAll(".drum");

for(i=0;i<drumButtons.length;i++){
    drumButtons[i].addEventListener("click",function (){
        // console.log(this.innerHTML);
     
        keySounds(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//KeyBoard Press

// // alert("I have been clicked");
// var audio = new Audio("sounds/kick-bass.mp3");
// audio.play();

//indicates that the entire website will listen the keyboard strokes
document.addEventListener("keypress",function(event){
    // alert("Key has been pressed");
    // console.log(event.key);
    
    keySounds(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(keyValue){
    var buttonActive = document.querySelector("."+keyValue);
    buttonActive.classList.add("pressed");
    setTimeout(function(){
        buttonActive.classList.remove("pressed");
    },100)
}