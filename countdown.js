function timer(){
  var min = 5;
  var sec = 0;
  timer = setInterval(function(){
    min >= 10? document.getElementById('minutes').innerHTML=min + ":" : document.getElementById('minutes').innerHTML="0"+ min + ":";
    sec >= 10? document.getElementById('seconds').innerHTML=sec : document.getElementById('seconds').innerHTML="0"+sec;
    if( min == 0 && sec ==0) { 
      clearInterval(timer);
      endGame(); 
    };
    if (sec == 0) {
      min--;
      sec=59;
    } else {
      sec--;
    }
  }, 1000);
}

function endGame() {
  alert('Timer ended');
}