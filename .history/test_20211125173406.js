var courseApi = 'http://localhost:3000/course'
var ListCoursesBlock = document.querySelector('#element')

function start() {

}

start()

function getCourse() {
    fetch(courseApi)
        .then(function(respone) {
            return respone.json()
        })
        .then(function(courses) {
           
            console.log(courses)
            ListCoursesBlock.innerHTML = html.join();
        })
}