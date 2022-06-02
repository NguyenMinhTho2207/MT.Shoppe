var inputElement = document.querySelector('input[type="text"]')
inputElement.onkeydown = function(e) {
    if(e.which == 27) {
        console.log('Exit')
    }
}