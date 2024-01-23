const RB = document.getElementById('roll');
const RL = document.getElementById('show');

RB.onclick = function(){
    RL.textContent = Math.floor(Math.random()*7)
}