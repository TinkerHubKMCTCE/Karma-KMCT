const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');



const karmaDateTime=new Date('May 21 2022 00:00:00');


function updateCountdowntime(){
    const currentTime=new Date();
    const diff=karmaDateTime -currentTime;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60)%24;
    const m=Math.floor(diff/1000/60)%60;
    const s=Math.floor(diff/1000)%60;
    if(currentTime===karmaDateTime){
        clearInterval();
        days.innerHTML=00;
        hours.innerHTML=00;
        minutes.innerHTML=00;
        seconds.innerHTML=00;
        
    }
    days.innerHTML=d;
    hours.innerHTML=h<10 ? '0' +h:h;
    minutes.innerHTML=m<10 ? '0' +m:m;
    seconds.innerHTML=s<10 ? '0' +s:s;
    
}

setInterval(updateCountdowntime,1000);
updateCountdowntime();