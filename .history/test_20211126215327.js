var coursesApi = 'http://localhost:3000/course'
var createBtn = document.querySelector('.createInfo')
var updateInFo = document.querySelector('.updateInfo')
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
        <h4 class = "name-${course.id}">${course.name}</h4> 
        <p class ="age-${course.id}" >${course.age}</p>
    
        </li>
        <button onclick =handlRepairCourses(${course.id}) >sửa</button>`
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
    
    createBtn.onclick = function() {
        var name = document.querySelector('input[name = "name"]').value;
        var age = document.querySelector('input[name = "age"]').value;
        console.log(name)
        var dataForm = {
            name:name,
            age:age
        }
        createCourse(dataForm,getCourses(renderCourses));
    }
}
var lobalId;
function handlRepairCourses(id) {
    lobalId = id;
    document.querySelector('input[name = "name"]').value = document.querySelector('.name-'+ id).textContent;
    document.querySelector('input[name = "age"]').value = document.querySelector('.age-'+ id).textContent;
    createBtn.style.display = "none";
    updateInFo.style.display = "block"
}

updateCourse() {
    var name = document.querySelector('input[name = "name"]').value;
    var age = document.querySelector('input[name = "age"]').value;
}
    



   







