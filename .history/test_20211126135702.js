var coursesApi = 'http://localhost:3000/course'

function start() {
    getCourses(renderCourses);
    handlCreateCourses();
  
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

function deleteCourse(id,callback) {
    var ObjectCours = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'},
        
    }
    fetch(coursesApi + "/" + id,ObjectCours)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function renderCourses(courses) {
    
   var htmls = courses.map(function(course) {
        return `<li>${course.name} ${course.age}</li>
                <button class="btnDelete">xóa</button>`
    })
    document.querySelector('#element').innerHTML = htmls.join('')
}

function handlCreateCourses() {
    var createCourse = document.querySelector('.createInfo')
    createCourse.onclick = function() {
        var name = document.querySelector('input[name ="name"]').value
        var age = document.querySelector('input[name ="age"]').value
        var formData = {
            name:name,
            age:age
        }
        createCourses(formData,function() {
            getCourses(renderCourses)
        })

    }
}


    var btnDelete = document.querySelector('.btnDelete')
    btnDelete.onclick = function() {
        alert('')
    }

