
import {BUTTONS} from "./data/buttons"



export function click(event, el, appConfig){
    if(event == 'optional' || event.target.nodeName == 'BUTTON' || event.type == 'keydown'){
            
            let listValues = {
                'Tab' : '  ',
                'Enter' : '\n',
                'Space' : ' ',
            }
            el = el || listValues[event.target.textContent];
            let valueButton = el || event.target.textContent;
            let textArea = document.querySelector('textarea')
            let numberCaret = textArea.selectionStart;                                                     // номер каретки
            let content = textArea.value;
            textArea.selectionStart = content.length;
            let firstContent;
            let secondContent;

            function del(){
                if(content.length == numberCaret){
                    textArea.value = textArea.value;
                } else {
                    firstContent = content.slice(0,numberCaret);
                    secondContent = content.slice(numberCaret + 1, );
                    textArea.value = firstContent + secondContent;
                }
                
                textArea.selectionStart = numberCaret;
                textArea.selectionEnd = numberCaret;
                return;
            } 
            function backspace(){
                if(numberCaret == 0) return;
                if(content.length == numberCaret){
                    textArea.value = textArea.value.slice(0, textArea.value.length - 1);
                } else {
                    firstContent = content.slice(0,numberCaret - 1);
                    secondContent = content.slice(numberCaret, );
                    textArea.value = firstContent + secondContent;
                }
                console.log('delete')
                textArea.selectionStart = numberCaret - 1;
                textArea.selectionEnd = numberCaret - 1;
                return;
            }         

            if(event != undefined && event != 'optional'){                                                   // setting optional
                if(event.target.textContent == 'Backspace'){
                    
                    backspace();   
                    return;                                     // logic backspace
                    
                } else if(event.target.textContent == 'Del'){     
                                                                // logic del
                    del();
                    return;
                } else if(event.target.textContent == 'Shift' || event.target.textContent == 'CapsLock' || event.target.textContent == 'Ctrl'      // игнорирование опциональных клавиш
                || event.target.textContent == 'Alt' || event.target.textContent == 'Win'){
                    return;
                }
            } else if(event == 'optional'){
                console.log('back', el, event.code)      
                if(/(^Key)/.test(event.code)){
                    if(content.length == numberCaret){
    
                        textArea.value += valueButton;
                    } else {
                        firstContent = content.slice(0,numberCaret);
                        secondContent = content.slice(numberCaret, );
                        textArea.value = firstContent + valueButton + secondContent;
                    }            
                    textArea.selectionStart = numberCaret + valueButton.length;
                    textArea.selectionEnd = numberCaret + valueButton.length; 
                    return;
                } else if(el == 'Backspace'){
                    backspace();
                    return;
                } else if(el == 'Delete'){
                    console.log('del')
                    del();
                    return;
                }          
            } else {
                console.log('wrong');
            }
                                                                           // setting keys
            
            if(content.length == numberCaret){
                textArea.value += valueButton;
            } else {
                firstContent = content.slice(0,numberCaret);
                secondContent = content.slice(numberCaret, );
                textArea.value = firstContent + valueButton + secondContent;
            }            
            textArea.selectionStart = numberCaret + valueButton.length;
            textArea.selectionEnd = numberCaret + valueButton.length; 
    } else {
        console.error('1 if error');
    }
}