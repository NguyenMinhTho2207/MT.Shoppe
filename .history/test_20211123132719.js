var inputElement = document.querySelector('input[type=checkbox]')
inputElement.onchange = function(e) {
    console.log(e.target.value)
}