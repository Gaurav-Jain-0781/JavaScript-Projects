let num =   Math.floor(Math.random() * 101);
let score = 100;
let input;

do{
    input = prompt("Enter your Number : ");
    input = Number.parseInt(input)
    if(input > num){
        alert("Entered number greater than original Number")
    }
    else if(input < num){
        alert("Entered number smaller than original Number")
    }
    else{
        alert("Yup!! You guessed the Correct Number : " + num)
    }
    score--
}while(input != num)

confirm("Score : " + score)