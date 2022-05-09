// export const appConfig = { 
//     lang : 0,                    // lang 0 - eng,   1 - rus
//     size : 0,                    // size 0 - lower, 1 - uppers
//     onShift : false,
//     onCaps : false,
// }export function click(event, el){

export function keyButton(appConfig, event, clickFunction, BUTTONS){
    let el = event.code;

    clickFunction(event, BUTTONS[el].keys[appConfig.lang][appConfig.size], appConfig);
}