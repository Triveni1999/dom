
  
function clock(){

    var hourss = document.getElementById("hours");
    var minutes = document.getElementById("mins");
    var seconds = document.getElementById("secs");
    var am_pm = document.getElementById("am"); 

    var time = new Date;
    var hour = time.getHours();
    var ampm = hour >=12 ? "PM" : "AM";
    var minute = time.getMinutes();
    var second = time.getSeconds();
    
    am_pm.innerHTML = ampm;
    hour= hour%12;
    hour = hour ? hour:12;
    
   if(hour<10){
        hour = "0"+hour; 
    }
    hours.innerHTML = hour;
    if(minute<10){
        minute= "0"+ minute;
    }
    minutes.innerHTML = minute;
    if(second<10){
        second ="0"+ second;
    }
    seconds.innerHTML = second;
}
setInterval(clock,1000);
