var coursesApi = 'http://localhost:3000/course'

function start() {
    getCourses(renderCourses);
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

function renderCourses(courses) {
    var htmls = courses.map(function (course) {
        return `<li>
        <h4>${course.name}</h4> 
        <p>${course.age}</p>
        
        </li>`
    })
    document.querySelector('#element').innerHTML = htmls.join('');
}

function handlCreateCourses() {
    var createCourse = document.querySelector('.createInfo')
}
    



   







