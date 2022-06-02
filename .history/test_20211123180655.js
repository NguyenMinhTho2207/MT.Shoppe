var inputElement = document.querySelector('ul')

inputElement.addEventListener('mousedown',function(e) {
    e.preventDefault();
})
inputElement.addEventListener('click',function(e) {
    console.log(e);
})