var coursesApi = 'http://localhost:3000/course'

function start() {
    renderCourses()
}

start();

function renderCourses() {
    fetch(coursesApi)
        .then(function(response) {
            return response.json();
        })
        .then(function(course) {
            console.log(course)
        })
}