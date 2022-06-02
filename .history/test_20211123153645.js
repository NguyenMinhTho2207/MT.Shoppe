var inputElement = document.querySelector('input[type=text]')
inputElement.onblur = function(e) {
    console.log(e.target)
}