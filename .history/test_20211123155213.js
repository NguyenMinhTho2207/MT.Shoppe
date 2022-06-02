var inputElement = document.querySelector('select')
inputElement.onkeydown = function(e) {
    console.log(e.target.value)
}