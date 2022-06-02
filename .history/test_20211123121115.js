var inputElement = document.querySelector('input[type=text]')
inputElement.oncheck = function(e) {
    console.log(e.target.value)
}