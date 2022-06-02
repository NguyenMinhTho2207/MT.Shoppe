var box2Element = document.querySelectorAll('h1')
for(var i = 0; i < box2Element.length; i++ ){
    box2Element[i].oncroll = function(e) {
        console.log(e)
    }
}



