var inputElement = document.querySelector('ul')
function viec(e) {
    e.preventDefault();
}
function viec2(e) {
    console.log(e.target);
}
inputElement.addEventListener('mousedown',viec) 
inputElement.addEventListener('click',viec2 )
