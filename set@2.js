import {factorial,lol} from './modules.js';

function timed(func){

    setTimeout(()=>{window.alert('wow');func(false)},3000)
    // console.log('yoo')
    
}

function timer(){
    console.time('lol')
    for(let i=0;i<100000000;i++);
    console.timeEnd('lol')
}

console.log(factorial(10))
window.alert(lol)

console.log('yoo')
// setTimeout(()=>{window.alert('wow')},3000)

timed(message)
console.error('console error')
function message(x){
    if(x)
        throw new Error('got you')
    console.log('i ran')
}



// document.getElementById('tit').textContent='lol'