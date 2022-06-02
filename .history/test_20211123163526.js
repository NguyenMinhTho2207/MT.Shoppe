var inputElement = document.querySelector('ul')
inputElement.onkeydown = function(e) {
    switch(e.which) {
        case 27:
            console.log('exit');
            break;
    }
}