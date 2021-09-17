function play() {
    var die1 =Math.ceil(Math.random()*6);
    var die2 =Math.ceil(Math.random()*6);
    // creat 2 variables that act as 6 sided dice 
    var sum = die1+die2
    document.getElementById("dier1").innerHTML = die1
    document.getElementById("dier2").innerHTML = die2
    document.getElementById("sum1").innerHTML= sum
    if (sum == 7 || sum == 11)
        { document.getElementById("games").innerHTML= "Craps"
    }
    else if (die1== die2 && die1%2 == 0)
    {
        document.getElementById("games").innerHTML="you win"
    }
    else{
        document.getElementById("games").innerHTML="please try again"
    }
    // create a variable that is the sum of dice one and two then print the dice 1 roll and dice 2 roll with breaks in between if the sum is either 7 or 11 print you lose otherwise 
    // print you win if var 1= var 2 otherwise do nothing
    }