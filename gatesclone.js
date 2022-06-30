$moveable = document.getElementById("Moveable"); 
$moveable.style.transform = "translate(" + 0 + "px," + 500 + "px)"; 
window.onscroll = function() {myFunction()};

$colorBlockOne = document.getElementById("ColorBlockOne"); 
$colorBlockOne.style.width = window.innerWidth; //width scales to fit current window width. Not sure if i need to write a func to call this when window is resized or if it automatically does so.

$colorBlockTwo = document.getElementById("ColorBlockTwo"); 
$colorBlockTwo.style.width = window.innerWidth;

$colorBlockThree = document.getElementById("ColorBlockThree"); 
$colorBlockThree.style.width = window.innerWidth;

$colorBlockFour = document.getElementById("ColorBlockFour"); 
$colorBlockFour.style.width = window.innerWidth;

function myFunction() {
    if($moveable.getBoundingClientRect().left > 1400){
        $moveable.style.transform = "translate(" + (-window.pageYOffset) + "px," + 500 + "px)";
    }
    console.log($moveable.style.transform); 
}