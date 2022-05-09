export function createKeyboard(){
    const WRAPPER = document.createElement('section');
    WRAPPER.classList.add('keyboard');
    document.body.appendChild(WRAPPER);
    return WRAPPER;
}