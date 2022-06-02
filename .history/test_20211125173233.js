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
           var html = courses.map(function(course) {
                return `<li>${course.name} ${course.birthDay}</li>`
            })
            console.log(html)
            ListCoursesBlock.innerHTML = html.join();
        })
}