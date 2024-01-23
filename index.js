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

let usnam;
let num;
const AD = 99
// usnam= window.prompt("enter user name");

document.getElementById("but").onclick = function(){
    usnam = document.getElementById("in").value;
    console.log(usnam)
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