var coursesApi = 'http://localhost:3000/course'

function start() {
    getCourses(renderCourses)
    handlCreateCourses()
}

start();

function getCourses(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}
function createCourses(data,callback) {
    var ObjectCours = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    fetch(coursesApi,ObjectCours)
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
    var createCourse = document.querySelector('.createInfo')
    createCourse.onclick = function() {
        var name = document.querySelector('input[name ="name"]').value
        var age = document.querySelector('input[name ="age"]').value
        console.log(name,age)

    }
}
