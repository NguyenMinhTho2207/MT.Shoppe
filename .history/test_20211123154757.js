var inputElement = document.querySelector('select')
inputElement.oninput = function(e) {
    console.log(e.target.value)
}