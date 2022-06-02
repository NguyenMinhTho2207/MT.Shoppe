var courseApi = 'http://localhost:3000/course'
var ListCoursesBlock = document.querySelector('#element')

function start() {
    getCourse(function(course) {
        console.log(course)
    })
}

start()

function getCourse(callback) {
    fetch(courseApi)
        .then(function(respone) {
            return respone.json()
        })
        .then(callback)
 })