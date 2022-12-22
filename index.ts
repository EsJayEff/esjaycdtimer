#! /usr/bin/env node

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let userMin:number = +prompt("Please Enter the minutes in numbers [0-60]: ");

let ts = Date.now();
var date_ob = new Date(ts);
var date:number = date_ob.getDate();
var month:number = date_ob.getMonth() + 1;
var year:number = date_ob.getFullYear();
var hour:number =date_ob.getHours();
var min:number =date_ob.getMinutes();
var sec:number =date_ob.getSeconds();

userMin=userMin+min;


console.log(`Time Now is : Month ${month} Day ${date} Year ${year} Hours ${hour} Minutes ${min} Seconds ${sec}`);


var countDownDate:number = new Date(`${month} ${date}, ${year} ${hour}:${userMin}:00`).getTime();
var myfunc = setInterval(function() {
var now:number = new Date().getTime();
var timeleft:number = countDownDate - now;
var days:number = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours:number = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes:number = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds:number = Math.floor((timeleft % (1000 * 60)) / 1000);

console.log(`Month ${month} Day ${date} Year ${year} Hours ${hours} Minutes ${minutes} Seconds ${seconds}`);

if (timeleft <= 0) {
    clearInterval(myfunc);
    days = 0;
    hours= 0; 
    minutes = 0;
    seconds= 0;
    date=0;
    month=0;
    year=0;
    var end:string = "TIME UP!!";
    console.clear();
    console.log(end);
   
}

}, 1000);

console.log("Running the countdown");
