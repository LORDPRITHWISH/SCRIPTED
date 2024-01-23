const dec = document.getElementById("dec")
const res = document.getElementById("res")
const inc = document.getElementById("inc")
const lco = document.getElementById("cou")

let co = 0;

inc.onclick = function(){
    co++;
    lco.textContent = co;
}
dec.onclick = function(){
    co--;
    lco.textContent = co;
}
res.onclick = function(){
    co=0;
    lco.textContent = co;
}