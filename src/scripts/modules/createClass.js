//language - 0 : english, 1 : russian

export class Button{
    constructor(options, keys, ){
        this.options = options, 
        keys = keys;
    }

    createButton(styleButton, styleContent, language = 0){

        let btn = document.createElement('button');
        let contetnButton = document.createElement('div');

        btn.classList.add(styleButton);

        contetnButton.classList.add(styleContent);
    }

}