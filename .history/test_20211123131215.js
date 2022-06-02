var inputElement = document.querySelector('input[type=text]')
inputElement.oninput = function(e) {
    console.log(e.target.value)
}