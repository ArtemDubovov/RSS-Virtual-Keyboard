import {click} from './click';

export function checkOptions(key, listButtons, resize, appConfig){
    switch(key){
        case 'CapsLock':
            if(appConfig.lang == 0){
                let regExp = /^Key/i;
                resize(listButtons, appConfig, true, regExp, true);
                break;
            } else {
                let regExp = /(^Key)|(^Bracket)|(^Semicolon)|(^Quote)|(^Comma)|(^Period)/i;
                resize(listButtons, appConfig, true, regExp, true);
                break;
            }
        case 'ShiftRight':
        case 'ShiftLeft':
            resize(listButtons, appConfig, false, '',  true);
            break;
        case 'Tab':
            click('optional', `    `);
            break;
        case 'ArrowLeft':
            click('optional', `◄`);
            break;
        case 'ArrowUp':
            click('optional', `▲`);
            break;
        case 'ArrowRight':
            click('optional', `►`);
            break;
        case 'ArrowDown':
            click('optional', `▼`);
            break;
        case 'Space':
            click('optional', ` `);
            break;
        case 'Enter':
            click('optional', '\n');
            break;
        case 'Backspace':
            click('optional', 'Backspace');
            break;
        case 'Delete':
            console.log('del')
            click('optional', 'Delete');
            break;
    }
}
