// console.log('hi')

//this is a allert
// window.alert('hello friend')
// window.alert('useless')
// console.log('amigo')
let t=108;
let tot=1199;
let nam ="PRITHWISH"
let b=true
document.getElementById('hpa').textContent = `num is ${t} fog ${b}`;
document.getElementById('nu').textContent = tot;
// console.log(typeof t)
t**=2;
tot++;
// console.log(`num is ${tot} fog`)
// console.log(`this ${t} is of type ${typeof t}`)
// console.log(`this ${tot} is of type ${typeof tot}`)
// console.log(`this ${b} is of type ${typeof b}`)
// console.log(`this ${nam} is of type ${typeof nam}`)

let usnam="";
let num;
const AD = 99
// usnam= window.prompt("enter user name");

document.getElementById("but").onclick = function(){
    usnam = document.getElementById("in").value;
    console.log(usnam)
    // usnam=usnam.slice(usnam.length/2)
    usnam=usnam.slice(-1)
    // console.log('sup')

    document.getElementById("nu").textContent = usnam;
}


document.getElementById("ev").onclick = function(){
    num = document.getElementById("in").value;
    num=Number(num)
    num+=AD;

    console.log(typeof num)

    document.getElementById("san").textContent = num;
}
console.log(usnam);
let con = true
// let con = 1
// let con = 99
// let con = 'yy'
// let con = 0 // not
// let con = '' // not
if (con)
    document.getElementById('fi').textContent = `worked ${con}`;


const chb=document.getElementById('chb')
const sub=document.getElementById('sub')
const chp=document.getElementById('chp')
const rbp=document.getElementById('rbp')
const rb1=document.getElementById('rb1')
const rb2=document.getElementById('rb2')
const rb3=document.getElementById('rb3')
const rb4=document.getElementById('rb4')

sub.onclick = function(){
    if(chb.checked){
        chp.textContent = 'yo yo yo  '
    }
    else{
        chp.textContent = 'Noooooooooooooooo  '
    }

    if(rb1.checked){
        chp.textContent += '  rb1'
        rbp.textContent += 'rb1 '
    }
    else if(rb2.checked){
        chp.textContent += '  rb2'
        rbp.textContent += 'rb2 '
    }
    else if(rb3.checked){
        chp.textContent += '  rb3'
        rbp.textContent += 'rb3 '
    }
    else if(rb4.checked){
        chp.textContent += '  rb4'
        rbp.textContent += 'rb4 '
    }
}

const day = 8

switch (day) {
    case 1:
        console.log('it is sunday')
        break;
    case 2:
        console.log('it is monday')
        break;
    case 3:
        console.log('it is tuesday')
        break;
    case 4:
        console.log('it is wednesday')
        break;
    case 5:
        console.log('it is thursday')
        break;
    case 6:
        console.log('it is friday')
        break;
    case 7:
        console.log('it is saturday')
        break;

    default:
        console.log('no no nooo')
        break;
}