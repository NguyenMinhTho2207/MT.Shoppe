var box2Element = document.querySelectorAll('h1')
box2Element.forEach(function(course){
    course.onkeydown = function(e) {
        console.log(e.target)
    }
})



