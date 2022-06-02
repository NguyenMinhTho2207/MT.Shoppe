var inputElement = document.querySelector('input[type="text"]')
inputElement.onkeydown = function(e) {
    if(e.which) {
        console.log('Exit')
    }
}