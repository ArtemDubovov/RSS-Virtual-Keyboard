import { BUTTONS } from "./data/buttons";
console.log(BUTTONS);

export function resize(parent, appConfig, checkRegExp = false, regExp = '/.+/gi', lowerUpper = false){
    for(let el of parent){
        if(!el.dataValues){
            continue;
        }
        if(checkRegExp){
            if(!regExp.test(el.dataset.value)) continue;} 
        if(appConfig.size == 0 && appConfig.lang == 0){
            el.textContent = el.dataValues[1];
        } else if(appConfig.size == 1 && appConfig.lang == 0){
            el.textContent = el.dataValues[0];
        } else if(appConfig.size == 0 && appConfig.lang == 1){
            el.textContent = el.dataValues[3];
        } else if(appConfig.size == 1 && appConfig.lang == 1){
            el.textContent = el.dataValues[2];
        }
    }
    if(lowerUpper){
        console.log('смена высоты')
        if(appConfig.size == 0){
            appConfig.size = 1;
        } else {
            appConfig.size = 0;
        }
    }
    }
    

