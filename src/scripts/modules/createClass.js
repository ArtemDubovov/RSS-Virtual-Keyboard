export class Button{
    constructor(keys, subkeys){
        this.keys = keys;
        this.subkeys = subkeys;
    }

    createButton(styleButton, styleContent){

        let btn = document.createElement('button');
        let contetnButton = document.createElement('div');

        btn.classList.add(styleButton);
        contetnButton.classList.add(styleContent);

    }

}