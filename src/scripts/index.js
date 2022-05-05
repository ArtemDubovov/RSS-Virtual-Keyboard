import "./../styles/style.scss"
import {Button} from "./../scripts/modules/createClass"
import {BUTTONS} from "./../scripts/modules/buttons"

let btn = new Button();

for(let el of BUTTONS){
    console.log(el.keys[0][0]);
}
