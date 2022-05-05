export function createKeyboard(){
    const WRAPPER = document.createElement('section');
    for(let i = 0; i < 5; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        WRAPPER.appendChild(row);
    }
    WRAPPER.classList.add('keyboard');
    document.body.appendChild(WRAPPER);
}