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
function getCourse(course) {
    
    course.map(function() {
        return `${course.name}`
    })
}