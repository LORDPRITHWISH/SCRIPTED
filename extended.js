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






let message = prompt("Enter your message", "");
let counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
let event = new InputEvent("input", { bubbles: true });
let textbox = document.getElementsByClassName("to2l77zo gfz4du6o ag5g9lrv bze30y65 kao4egtt")[1];
for (let index = 0; index < counter; index++) {
  textbox.innerHTML = message;
  textbox.dispatchEvent(event);
  document.getElementsByClassName("tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq")[0].click();
}




let mes=document.getElementsByClassName("_3Uu1_")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild
console.log(mes.textContent)





// Find the text input field using its attributes or unique identifiers
const inputField = document.querySelector('[role="textbox"]');

// Check if the input field was found
if (inputField) {
  // Focus on the input field
  inputField.focus();

  // Programmatically set the value of the input field
  inputField.value = "Text entered programmatically";

  // Dispatch an "input" event to trigger any associated listeners
  inputField.dispatchEvent(new Event('input', { bubbles: true }));
} else {
  console.error("Text input field not found.");
}





textbox = document.getElementsByClassName("to2l77zo gfz4du6o ag5g9lrv bze30y65 kao4egtt")[1];
textbox.focus();
textbox.value = "programmatically";
textbox.dispatchEvent(new Event('input', { bubbles: true }));

import { useEffect } from 'react';

useEffect(() => {
    textbox = document.getElementsByClassName("to2l77zo gfz4du6o ag5g9lrv bze30y65 kao4egtt")[1];
    textbox.focus();
    textbox.value = "programmatically";
    textbox.dispatchEvent(new Event('input', { bubbles: true }));
}, []); // Empty dependency array ensures the effect runs only once after component mount





function sendMessage(message){
  const mainEl = document.querySelector('#main')
  const textareaEl = mainEl.querySelector('div[contenteditable="true"]')

  if(!textareaEl) {
    throw new Error('There is no opened conversation')
  }

  textareaEl.focus()
  document.execCommand('insertText', false, message)
  textareaEl.dispatchEvent(new Event('change', { bubbles: true }))

  setTimeout(() => {
    (mainEl.querySelector('[data-testid="send"]') || mainEl.querySelector('[data-icon="send"]')).click()
  }, 100)
}

