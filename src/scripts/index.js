import "./../styles/style.scss"
import {Button} from "./../scripts/modules/createClass"
import {BUTTONS} from "./../scripts/modules/buttons"
import {createKeyboard} from "./../scripts/modules/wrapper"


// initial keyboard

createKeyboard();



for(let el of BUTTONS){
    if(!el.options){
        console.log(el.keys[0][0], el.keys[0][1], el.keys[1][0], el.keys[1][1]);
    } else{
        console.log(el.keys);
    }
    
}
