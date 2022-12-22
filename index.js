#! /usr/bin/env node
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let userMin = +prompt("Please Enter the minutes in numbers [0-60]: ");
let ts = Date.now();
var date_ob = new Date(ts);
var date = date_ob.getDate();
var month = date_ob.getMonth() + 1;
var year = date_ob.getFullYear();
var hour = date_ob.getHours();
var min = date_ob.getMinutes();
var sec = date_ob.getSeconds();
userMin = userMin + min;
console.log(`Time Now is : Month ${month} Day ${date} Year ${year} Hours ${hour} Minutes ${min} Seconds ${sec}`);
var countDownDate = new Date(`${month} ${date}, ${year} ${hour}:${userMin}:00`).getTime();
var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    console.log(`Month ${month} Day ${date} Year ${year} Hours ${hours} Minutes ${minutes} Seconds ${seconds}`);
    if (timeleft <= 0) {
        clearInterval(myfunc);
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        date = 0;
        month = 0;
        year = 0;
        var end = "TIME UP!!";
        console.clear();
        console.log(end);
    }
}, 1000);
console.log("Running the countdown");
