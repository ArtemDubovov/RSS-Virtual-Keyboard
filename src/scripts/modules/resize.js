export function resize(parent, sizeAndFormatLanguage, checkRegExp = false, regExp = '/.+/gi'){
    for(let el of parent){
        if(!el.dataValues){
            continue;
        }
        if(checkRegExp){
            if(!regExp.test(el.dataset.value)) continue;} 
        if(sizeAndFormatLanguage.size == 0 && sizeAndFormatLanguage.lang == 0){
            el.textContent = el.dataValues[1];
        } else if(sizeAndFormatLanguage.size == 1 && sizeAndFormatLanguage.lang == 0){
            el.textContent = el.dataValues[0];
        } else if(sizeAndFormatLanguage.size == 0 && sizeAndFormatLanguage.lang == 1){
            el.textContent = el.dataValues[3];
        } else if(sizeAndFormatLanguage.size == 1 && sizeAndFormatLanguage.lang == 1){
            el.textContent = el.dataValues[2];
        }
    }
    if(sizeAndFormatLanguage.size == 0){
        sizeAndFormatLanguage.size = 1;
    } else {
        sizeAndFormatLanguage.size = 0;
    }
}