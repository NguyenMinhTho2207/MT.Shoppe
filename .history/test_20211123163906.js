var inputElement = document.querySelector('ul')

inputElement.onmousedown = function(e) {
    e.preventDefault();
}
inputElement.onclick = function(e) {
    console.log(e.target)
}