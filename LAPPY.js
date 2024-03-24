console.log('LAPPY loaded');

const display=document.getElementById('display');
const buttons=document.querySelectorAll('button');
const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');

let timer;
let hours=0;
let min=0;
let sec=0;
let time=0;
let running=false;

function startTimer(){
    console.log('start timer');
    running=true;
    timer=setInterval(()=>{
        if(running){
            time++;
            if(time===60){
                time=0;
                sec++;
            }
            if(sec===60){
                sec=0;
                min++;
            }
            if(min===60){
                min=0;
                hours++;
            }
            
            display.textContent=`${hours.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}:${time.toString().padStart(2,'0')}`;
            // display.textContent=time.toFixed(2);
        }
    },10);
}

function pauseTimer(){
    console.log('pause timer');
    running=false;
}

function resetTimer(){
    console.log('reset timer');
    running=false;
    clearInterval(timer);
    hours=0;
    min=0;
    sec=0;
    time=0;
    display.textContent=`${hours.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}:${time.toString().padStart(2,'0')}`;
}