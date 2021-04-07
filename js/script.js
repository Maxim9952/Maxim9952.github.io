window.addEventListener('DOMContentLoaded', () => {
let one = document.querySelector('.one'),
    two = document.querySelector('.two');


function change() {

        


}

change();

setInterval(() => {
    one.style.opacity = '0';
    two.style.opacity = '1';
}, 9000);
setInterval(() => {  
    one.style.opacity = '1';
    two.style.opacity = '0';
}, 10000);







});
