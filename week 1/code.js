function countdownTimer() {
    console.log("countdownTimer Working");
    var currTime = 50;
    document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
    
    //45
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
        currTime = currTime - 5;
        },5000 );
    //40
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
        },10000 );
    //35
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
        },15000 );
    //30
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
        },20000 );
    //25
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
        },25000 );
    //20
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
        },30000 );
    //15
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
        },35000 );
    //10
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
        },40000 );
    //5
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
        },45000 );
    //0
    setTimeout(function() {
        document.getElementById("CountdownStatus").innerHTML= currTime;
    currTime = currTime - 5;
        },50000 );
 
};