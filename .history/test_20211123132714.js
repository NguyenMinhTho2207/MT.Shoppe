var inputElement = document.querySelector('input[type=checkbox]')
inputElement.oninput = function(e) {
    console.log(e.target.value)
}