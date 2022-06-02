var coursesApi = 'http://localhost:3000/course'

function start() {
    renderCourses(function(course) {
        console.log(course)
    })
}

start();

function renderCourses(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}