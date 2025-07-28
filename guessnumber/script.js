var randomNumber=Math.floor(Math.random()*100) + 1;
var lives=7;

function checkguess(){
    var number=document.getElementById("userNumber").value;
    var result = document.getElementById("result");
    var livesText = document.getElementById("lives");
    var previous = document.getElementById("previous");
var sound = document.getElementById("guessSound");
sound.play();

number=Number(number);

previous.textContent += " " + number;


if(lives<=0){
    result.textContent="You've used up all your lives! Game has ended."
    result.style.color="blue";
    return;
}


if(number==randomNumber){
    result.textContent="That's correct!";
    result.style.color="green";
}
else if(number<randomNumber){
    result.textContent="Try a higher number!";
    result.style.color="red";
    lives--;
    livesText.textContent="Lives left:" + lives;
}
else{
    result.textContent="Try a lower number!";
    result.style.color="red";
    lives--;
    livesText.textContent="Lives left:" + lives;
}


}

function reset(){
    var result = document.getElementById("result");
    var livesText = document.getElementById("lives");
    var previous = document.getElementById("previous");
    var sound = document.getElementById("guessSound");

    sound.play();
    result.textContent="";
    livesText.textContent="Lives left:";
    previous.textContent="";

    randomNumber=Math.floor(Math.random()*100) + 1;
    lives=7;
}