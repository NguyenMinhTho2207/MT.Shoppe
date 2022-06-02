var inputElement = document.querySelector('input[type="text"]')
inputElement.onkeydown = function(e) {
    if(e.which == 29) {
        console.log('Exit')
    }
}