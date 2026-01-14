function diceRoll() {
    var num = Math.floor(Math.random() * 6) + 1;
    console.log(num)
if(num === 1){
    img.src = img1;
}
else if(num === 2){
    img.src = img2;
}
else if(num === 3){
    img.src = img3;
}
else if(num === 4){
    img.src = img4;
}
else if(num === 5){
    img.src = img5;
}
else{
    img.src = img6;
}
}

var img = document.getElementById("img");
var source = img.src;
var img1 = 'dice1.webp';
var img2 = 'dice2.webp';
var img3 = 'dice3.webp';
var img4 = 'dice4.webp';
var img5 = 'dice5.webp';
var img6 = 'dice6.webp';
