var box2Element = document.querySelectorAll('h1')
box2Element.forEach(function(course,i){
    box2Element[i].onclick = function(e) {
        console.log(e.target)
    }
})



