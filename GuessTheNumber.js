let num =   Math.floor(Math.random() * 101);
let score = 100;
let input;

while(input != num){
    input = prompt("Enter your Number : ");
    input = Number.parseInt(input)
    if(input > num){
        alert("Entered number greater than original Number")
    }
    else{
        alert("Entered number smaller than original Number")
    }
    score--
}

console.log("Score : " + score)