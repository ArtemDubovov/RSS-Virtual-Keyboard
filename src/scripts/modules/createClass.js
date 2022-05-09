//language - 0 : english, 1 : russian

export class Button{
    constructor(options, keys, ){
        this.options = options, 
        keys = keys;
    }

    createButton(styleButton, startValue, setAttrValue){

        let btn = document.createElement('button');
        btn.classList.add(styleButton);
        btn.textContent = startValue;
        btn.setAttribute('data-value', setAttrValue);
       
        return btn;
    }

}