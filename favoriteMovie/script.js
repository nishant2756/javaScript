const favmovie = "RRR";

let guess = prompt("guess my favmovie movie");

while( (guess != favmovie) && (guess != "quit")){
    guess = prompt("wrong guess. please try again");
}

if(guess == favmovie){
    console.log("congrats!!");
}



