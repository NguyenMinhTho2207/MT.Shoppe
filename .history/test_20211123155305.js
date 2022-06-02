var inputElement = document.querySelector('input[type="text"]')
inputElement.onkeypress = function(e) {
    console.log(e.target.value)
}