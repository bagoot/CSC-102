function play() {
    var die1 =Math.ceil(Math.random()*6);
    
    
    var die2 =Math.ceil(Math.random()*6);
    // creat 2 variables that act as 6 sided dice 
    
    
    var sum = die1+die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11)
    { document.write("CRAPS - you lose")
    document.write("<br/>")
    }
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win")
    document.write("<br/>")
    }
    // create a variable that is the sum of dice one and two then print the dice 1 roll and dice 2 roll with breaks in between if the sum is either 7 or 11 print you lose otherwise 
    // print you win if var 1= var 2 otherwise do nothing
    }