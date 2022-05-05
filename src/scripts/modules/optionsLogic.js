export function checkOptions(key, listButtons, resize, sizeAndFormatLanguage){
    switch(key){
        case 'CapsLock':
            let regExp = /^Key/i;
            resize(listButtons, sizeAndFormatLanguage, true, regExp);
            break;
        case 'ShiftRight':
        case 'ShiftLeft':
            resize(listButtons, sizeAndFormatLanguage, false);
            break;
    }
}
