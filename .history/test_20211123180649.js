var inputElement = document.querySelector('ul')

inputElement.addEventListener('mousedown',function(e) {
    e.preventDefault();
})
inputElement.addEventListener('onclick',function(e) {
    console.log(e)
})