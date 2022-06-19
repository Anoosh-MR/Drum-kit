var noOfButtons=document.querySelectorAll(".drum").length;
for ( var i = 0; i<noOfButtons; i++){


document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var buttonInnerHTML=this.innerHTML;
makesound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

});
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key)

});

function makesound(key){
    switch(key){
    case "q":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

         case "q":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

         case "w":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

         case "e":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

         case "r":
        var crash=new Audio("sounds/kick-bass.mp3");
        crash.play();
        break;

         case "t":
        var kickbass=new Audio("sounds/crash.mp3");
        kickbass.play();
        break;

         case "a":
        var cameo=new Audio("sounds/real-life-CAMEO_SN.WAV");
        cameo.play();
        break;

         case "s":
        var crash1=new Audio("sounds/real-life-CRASH1.WAV");
        crash1.play();
        break;

         case "d":
        var crashtwo=new Audio("sounds/real-life-CRASH2.WAV");
        crashtwo.play();
        break;

         case "f":
        var gatekick=new Audio("sounds/real-life-GATEKICK.WAV");
        gatekick.play();
        break;

         case "g":
        var lifekick=new Audio("sounds/real-life-KICK.WAV");
        lifekick.play();
        break;

         case "h":
        var lifekick1=new Audio("sounds/real-life-KICK1.WAV");
        lifekick1.play();
        break;

         case "z":
        var liferide=new Audio("sounds/real-life-RIDE.WAV");
        liferide.play();
        break;

         case "x":
        var liferim=new Audio("sounds/real-life-RIM.WAV");
        liferim.play();
        break;

         case "c":
        var lifesn1=new Audio("sounds/real-life-SN1.WAV");
        lifesn1.play();
        break;

         case "v":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;

         case "b":
        var lambi=new Audio("sounds/real-life-TOM2LAMBI.WAV");
        lambi.play();
        break;
        default:console.log(buttonInnerHTML);
}

}
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
    activeButton.classList.remove("pressed");

},100);
}