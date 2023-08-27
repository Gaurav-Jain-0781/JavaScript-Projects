let run =  true
let options = ["G", "S", "W"]
let user_win = 0
let computer_win = 0

for(let i = 0; i < 5; i++){
    alert("Round : " + (i+1))

    let input = prompt("Ennter your Choice : (S for Snake , G for Gun and W for Water)")
    let computer = Math.floor(Math.random() * options.length)
    let computer_choice = options[computer]

    alert("Computer Selected : " + computer_choice)

    if(input === "W" && computer_choice === "S"){
        computer_win ++ 
    }
    else if(input === "G" && computer_choice === "W"){
        computer_win ++ 
    }    
    else if(input === "S" && computer_choice === "G"){
        computer_win ++ 
    }    
    else if(input === computer_choice){
        continue
    }
    else{
        user_win ++ 
    }
}

alert("Winner : " + ((user_win > computer_win) ? "User" : "Computer"))
alert("Score : " + user_win + " " + computer_win)