function countdown2(){
    console.log("countdown started")
    var time = 50;
for( var i= 0;i < 11; i++){
    console.log(i)
    if (i== 10)
   { 
        setTimeout (function() {
        document.getElementById("countdownStatus").innerHTML= "blastoff";
    ;
        },50000)
    } else if (i >4){   
    setTimeout(function(){
         document.getElementById("countdownStatus").innerHTML="Warning Less than ½ way to launch, time left =" +time;
        time= time-5;
},5000*i);} else {
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML= time;
        time= time-5;
    },5000 * i)

}



     

 
}
}
