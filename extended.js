// let a=document.querySelectorAll("._11JPr selectable-text copyable-text")
// let a=document.getElementsByClassName("_11JPr selectable-text copyable-text")
// a=Array.from(a)


let a=Array.from(document.getElementsByClassName("_11JPr selectable-text copyable-text"))
console.log(a)

// let mes=Array.from(document.getElementsByClassName("selectable-text copyable-text iq0m558w g0rxnol2"))
// let mes=document.getElementsByClassName("_3Uu1_")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild
let mes=document.getElementsByClassName("_3Uu1_")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild
console.log(mes.textContent)
mes.textContent='lol'
mes.textContent=mes.outerText='lol'



a.forEach(ele => {console.log(ele.firstElementChild)});



a.forEach(ele => {
        let chi=ele.firstElementChild
        if(chi != null)
        {   
            let inchi=chi.firstElementChild
            if(inchi == null)
            {

                let txt=chi.textContent
                txt='###'+txt
                // chi.textContent=txt
                console.log(`text =>  ${txt}`)
            }
            else if(inchi.tagName.toLowerCase() === "a")
            {
                let tx=inchi.textContent
                console.log(tx)
                tx='http://127.0.0.1:5500/page_2.html'
                inchi.href=tx
                inchi.title=tx
                inchi.textContent=tx
                console.log(chi)
            }
        }
    }
);






var message = prompt("Enter your message", "‎");
var counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
for (let index = 0; index < counter; index++) {
  textbox.innerHTML = message;
  textbox.dispatchEvent(event);
  document.getElementsByClassName("_4sWnG")[0].click();
}


