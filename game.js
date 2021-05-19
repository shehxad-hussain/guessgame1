function  guessNumber(){
    var randomnumber = Math.floor(Math.random() * 10);
    //outpit to the console for debugging 
    console.log(randomnumber);
    //declere a varianble
    var guess;
    guess = prompt("Enter a numbeer between 0 and 10");
    // console.log("your guess is : " + guess);
    if (guess < randomnumber){
        window.alert("Your guess is to low");
    }else if (guess > randomnumber){
        window.alert("Your guess is to high");
    }else if (guess == randomnumber){
        window.alert("You Win!!!");
    }else {
        window.alert("Error!!!");
    }

}