var inputElement = document.querySelector('input[type=checkbox]')
inputElement.onblur = function(e) {
    console.log(e.target)
}