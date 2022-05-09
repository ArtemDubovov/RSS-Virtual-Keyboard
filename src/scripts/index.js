import './../styles/style.scss'
import {Button} from './modules/createClass'
import {BUTTONS} from './modules/data/buttons'
import {createKeyboard} from './modules/wrapper'
import {createArea} from './modules/area'
import {checkOptions} from './modules/optionsLogic'
import {resize} from './modules/resize'
import {click} from './modules/click'
import {keyButton} from './modules/key'
import {chooseLang} from './modules/chooseLang'


let listButtons = [];
export const appConfig = { 
    lang :  localStorage.getItem('lang') || 0,                    // lang 0 - eng,   1 - rus
    size : 0,                    // size 0 - lower, 1 - uppers
    onShift : false,
    onCaps : false,
    onLang : false,
}

// initial keyboard



let area = createArea();

document.body.appendChild(area);
let keyboard = createKeyboard();
// create buttons

for(let el in BUTTONS){
    let info = BUTTONS[el].keys;
    let button = new Button(el, BUTTONS[el].keys);
    let btn;
    if(BUTTONS[el].options){
        btn = button.createButton('button-option', BUTTONS[el].keys, el);
    } else { 
        btn = button.createButton('button', BUTTONS[el].keys[appConfig.lang][appConfig.size], el);
        btn.dataValues = [BUTTONS[el].keys[0][0], BUTTONS[el].keys[0][1], BUTTONS[el].keys[1][0], BUTTONS[el].keys[1][1]];
    }
    
    listButtons.push(btn);
    keyboard.appendChild(btn);
}

// events body

document.body.addEventListener('keydown', (event) =>{
    let listButtons = keyboard.children;
    if(event.code == 'CapsLock'){
        if(!appConfig.onCaps){
            let btn = document.querySelector(`[data-value=${event.code}]`);
            btn.classList.toggle('button-active');
            checkOptions(event.code, listButtons, resize, appConfig);
            appConfig.onCaps = !appConfig.onCaps;
            return;
        } else {
            return;
        }
        
    } else if((event.code == 'ShiftRight' || event.code == 'ShiftLeft')){
        if(!appConfig.onShift){
            checkOptions(event.code, listButtons, resize, appConfig);
            let btn = document.querySelector(`[data-value=${event.code}]`);
            btn.classList.add('button-active');
            event.target.removeEventListener('keydown', checkOptions);
            appConfig.onShift = !appConfig.onShift;
            return;
        } else {
            return;
        }
    } else if(((event.code == 'AltLeft' && event.ctrlKey) || (event.code == 'AltRight' && event.ctrlKey)) && !appConfig.onLang){
        chooseLang(listButtons, appConfig);
        let btn = document.querySelector(`[data-value=${event.code}]`);
        btn.classList.add('button-active');
        appConfig.onLang = !appConfig.onLang;
        if(appConfig.lang == 0){
            localStorage.clear();
            localStorage.setItem('lang', 0);
        } else {
            localStorage.clear();
            localStorage.setItem('lang', 1);
        }
        return;
    }
    if(BUTTONS.hasOwnProperty(event.code)){
        if(BUTTONS[event.code].options){
            event.preventDefault();
            checkOptions(event.code, listButtons, resize, appConfig);
            let btn = document.querySelector(`[data-value=${event.code}]`);
            btn.classList.add('button-active');
            return;
        }
        event.preventDefault();
        let btn = document.querySelector(`[data-value=${event.code}]`);
        btn.classList.add('button-active');
        keyButton(appConfig, event, click, BUTTONS);
    } else {
        return;
    }

    
});

document.body.addEventListener('keyup', (event) => {
    let listButtons = keyboard.children;
    if(event.code == 'CapsLock'){
        appConfig.onCaps = !appConfig.onCaps;
        return;
    } else if(event.code == 'ShiftRight' || event.code == 'ShiftLeft'){
        checkOptions(event.code, listButtons, resize, appConfig);
        let btn = document.querySelector(`[data-value=${event.code}]`);
        btn.classList.remove('button-active');
        event.target.removeEventListener('keydown', checkOptions);
        appConfig.onShift = !appConfig.onShift;
        return;
    } else if(appConfig.onLang){
        appConfig.onLang = !appConfig.onLang;
    }
    //checkOptions(event.code, listButtons, resize, appConfig);
    let btn = document.querySelector(`[data-value=${event.code}]`);
    btn.classList.remove('button-active');
})

keyboard.addEventListener('click', click);

keyboard.addEventListener('mousedown', (event) => {
    let listButtons = keyboard.children;
    if((event.target.dataset.value == 'ShiftRight' || event.target.dataset.value == 'ShiftLeft')){
        if(!appConfig.onShift){
            checkOptions(event.target.dataset.value, listButtons, resize, appConfig);
            let btn = document.querySelector(`[data-value=${event.target.dataset.value}]`);
            btn.classList.add('button-active');
            event.target.removeEventListener('keydown', checkOptions);
            appConfig.onShift = !appConfig.onShift;
            return;
        } else {
            return;
        }
    } else if(event.target.dataset.value == 'CapsLock'){
        let btn = document.querySelector(`[data-value=${event.target.dataset.value}]`);
        btn.classList.toggle('button-active');
        checkOptions(event.target.dataset.value, listButtons, resize, appConfig);
        appConfig.onCaps = !appConfig.onCaps;
        return;

    }
});
keyboard.addEventListener('mouseup', (event) => {
    let listButtons = keyboard.children;
    if((event.target.dataset.value == 'ShiftRight' || event.target.dataset.value == 'ShiftLeft')){
        checkOptions(event.target.dataset.value, listButtons, resize, appConfig);
        let btn = document.querySelector(`[data-value=${event.target.dataset.value}]`);
        btn.classList.remove('button-active');
        event.target.removeEventListener('keydown', checkOptions);
        appConfig.onShift = !appConfig.onShift;
        return;
    }
});
