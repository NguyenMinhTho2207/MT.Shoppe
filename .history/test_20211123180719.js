var inputElement = document.querySelector('ul')

inputElement.addEventListener('mousedown',function(e) {
    e.preventDefault();
})
inputElement.addEventListener('mosedown',function(e) {
    console.log(e.target);
})