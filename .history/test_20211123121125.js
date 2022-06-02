var inputElement = document.querySelector('input[type=text]')
inputElement.onchecked = function(e) {
    console.log(e.target.value)
}