var fps = 60;
var interval = 1000/fps;
var time = 5000;
var tip = time-1000;
var current_second = 1000;
var inner_countdown = document.getElementById("countdown_inner");
var paragraph = document.getElementsByTagName("p")[0];
setText(time);




function loop() {
  var slider_loop = setInterval(function() {
    console.log("ey");
    time -= interval;
    current_second -= interval;
    setText(time)
    if(time < tip) {

      current_second = 1000 - (tip - time);
    //  time = tip; //  Cheating :O
      tip -= 1000;
      if(time < 0) {
        clearInterval(slider_loop);
        setText(0);
      }

    }

    setWidth(current_second);
  },interval);

}



function setWidth(current) {

  var m = 10;
  var percentage = 100 - (current / m);
  inner_countdown.style.width = ""+percentage+"%";
}

function setText(time) {
  time = time / 1000;
  paragraph.innerText = time.toFixed(2);
}
