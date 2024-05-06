var displayTime = document.getElementById("stopWatch");
var userHours = +prompt("How many hours do you set?")
var userMinutes = +prompt("How many minutes do you set?")
var userSecond = +prompt("How many seconds do you set?")
var miliSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
function stopWatch(){
    if (seconds === userSecond && minutes === userMinutes && hours === userHours) {
        clearInterval(timerId);
    } else {
        miliSeconds++
        if(miliSeconds >= 99){
            seconds++
            miliSeconds = 0

        }
        if(seconds === 60){
            seconds = 0
            minutes++
            if(minutes === 60){
                minutes = 0
                hours++
            }
        }
        displayTime.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + miliSeconds
        
    }
}
var timerId =  setInterval(stopWatch , 10);
