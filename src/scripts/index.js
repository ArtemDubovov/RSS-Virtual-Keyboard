import "./../styles/style.scss"
import {Button} from "./../scripts/modules/createClass"
import {BUTTONS} from "./../scripts/modules/data/buttons"
import {createKeyboard} from "./../scripts/modules/wrapper"
import {createArea} from "./../scripts/modules/area"
import {checkOptions} from "./../scripts/modules/optionsLogic"
import {resize} from "./modules/resize"

let listButtons = [];
const sizeAndFormatLanguage = { 
    lang : 0,                    // lang 0 - eng,   1 - rus
    size : 0,                    // size 0 - lower, 1 - uppers
}

// initial keyboard



let area = createArea();

document.body.appendChild(area);
let keyboard = createKeyboard();
// create buttons

for(let el of BUTTONS){
    let button = new Button(el.options, el.keys);
    let btn;
    if(el.options){
        btn = button.createButton('button-option', el.keys, el.keycode);
    } else { 
        btn = button.createButton('button', el.keys[sizeAndFormatLanguage.lang][sizeAndFormatLanguage.size], el.keycode);
        btn.dataValues = [el.keys[0][0], el.keys[0][1], el.keys[1][0], el.keys[1][1]];
    }
    
    console.log(btn.dataValues);
    listButtons.push(btn);
    keyboard.appendChild(btn);
}

// events body

document.body.addEventListener('keydown', (event) =>{
    let listButtons = keyboard.children;
    if(event.code == 'CapsLock'){
        let btn = document.querySelector(`[data-value=${event.code}]`);
        btn.classList.toggle('button-active');
        checkOptions(event.code, listButtons, resize, sizeAndFormatLanguage);
        return;
    }
    checkOptions(event.code, listButtons, resize, sizeAndFormatLanguage);
    let btn = document.querySelector(`[data-value=${event.code}]`);
    btn.classList.add('button-active');
    event.target.removeEventListener('keydown', checkOptions);

   

});

document.body.addEventListener('keyup', (event) => {
    if(event.code == 'CapsLock'){
        return;
    }
    let listButtons = keyboard.children;
    checkOptions(event.code, listButtons, resize, sizeAndFormatLanguage);
    let btn = document.querySelector(`[data-value=${event.code}]`);
    btn.classList.remove('button-active');
})

keyboard.addEventListener('click', (event) => {
    area.textContent[]
})