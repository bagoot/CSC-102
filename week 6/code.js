
function start(){
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;

}
function stop(){
   document.getElementById("stopButton").disabled = true;
   document.getElementById("startButton").disabled = false;
}
var audio= new Audio('https://www.youtube.com/watch?v=2MtOpB5LlUA');
var playPromise = audio.play;

// In browsers that don’t yet support this functionality,
// playPromise won’t be defined.
if (playPromise !== undefined) {
  playPromise.then(function() {
    // Automatic playback started!
  }).catch(function(error) {
    // Automatic playback failed.
    // Show a UI element to let the user manually start playback.
  });
}
function countdown2(){
    console.log("countdown started")
    var time = 50;
for( var i= 0;i < 51; i++){
    console.log(i)
    if (i== 50)
   { 
        setTimeout (function() {
        document.getElementById("countdownStatus").innerHTML= "blastoff";
    ;
        },50000)
    } else if (i >25){   
    setTimeout(function(){
         document.getElementById("countdownStatus").innerHTML="Warning Less than ½ way to launch, time left =" +time;
        time= time-1;
},1000*i);} else {
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML= time;
        time= time-1;
    },1000 * i)

}



     

 
}
}
