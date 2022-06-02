var inputElement = document.querySelector('input[type="text"]')
inputElement.onkeydown = function(e) {
    switch(e.which) {
        case 27:
            console.log('exit')
            break
    }
}