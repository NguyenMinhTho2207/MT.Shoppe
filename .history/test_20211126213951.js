var coursesApi = 'http://localhost:3000/course'

function start() {
    getCourses(renderCourses);
    handlCreateCourses();
    // createCourse();

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
function createCourse(data,callback) {
    var objectCourse = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi,objectCourse)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}
function handlCreateCourses() {
    var createBtn = document.querySelector('.createInfo')
    createBtn.onclick = function() {
        var name = document.querySelector('input[name = "name"]').value;
        var age = document.querySelector('input[name = "age"]').value;
        console.log(name)
        var dataForm = {
            name:name,
            age:age
        }
        createCourse(dataForm);
    }
}
    



   







