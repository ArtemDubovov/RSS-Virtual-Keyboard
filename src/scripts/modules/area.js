export function createArea(){
    let area = document.createElement('textarea');
    area.placeholder = 'Для смены языка комбинация ctrl + alt';
    area.setAttribute('autofocus', 'autofocus');
    area.addEventListener('blur', () => {
        console.log('blur');
        area.focus();
        return false;
    })
    return area;
}