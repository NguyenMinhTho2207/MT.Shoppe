var coursesApi = 'http://localhost:3000/course'

function start() {
    getCourses(renderCourses)
}

start();

function getCourses(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}
function renderCourses(courses) {
    
   var htmls = courses.map(function(course) {
        return `<li>${course.name} ${course.age}</li>`
    })
    document.querySelector('#element').innerHTML = htmls.join('')
}
function handlCreateCourses() {
    var createCourse = document.querySelector('#element')
    
}