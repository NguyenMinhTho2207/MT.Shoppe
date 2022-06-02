var coursesApi = 'http://localhost:3000/course'

function start() {
    renderCourses(getCourse)
}

start();

function renderCourses(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}
function getCourse(courses) {
    
   var htmls = courses.map(function(course) {
        return `<li>${course.name} ${course.age}</li>`
    })
    document.querySelector('#element').innerHTML = htmls.Join()
}