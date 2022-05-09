export function chooseLang(parent, appConfig){
    appConfig.size = 0;
    for(let el of parent){
        if(!el.dataValues){
            continue;
        }
        if(appConfig.lang == 0){
            el.textContent = el.dataValues[2];
        } else if(appConfig.lang == 1){
            el.textContent = el.dataValues[0];
        } 
    }
    if(appConfig.lang == 0){
        appConfig.lang = 1;
    } else {
        appConfig.lang = 0;
    }
}
    