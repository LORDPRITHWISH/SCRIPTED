const TEMPBOX = document.getElementById('tempbox');
const TOFAR = document.getElementById('tofar');
const TOCEL = document.getElementById('tocel');
const RESULT =document.getElementById('result')
let temp;

function convert(){
    temp = Number(TEMPBOX.value);

    console.log(temp)
    if(TOFAR.checked){
        temp = temp*9/5 +32
        RESULT.textContent = temp.toFixed(1)+'°F'
    }
    else if(TOCEL.checked){
        temp = (temp-32)*(5/9);
        RESULT.textContent = temp.toFixed(1)+'°C'
    }
    else{
        RESULT.textContent = 'select something'
    }
}