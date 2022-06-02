var coursesApi = 'http://localhost:3000/course'
function start() {
    getCourses(renderCourses);
    handlCreateCourses();
    handlUpdateCourses();
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

function handlDeleteCourses(id) {
    var ObjectCours = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'},
        
    }
    fetch(coursesApi + "/" + id,ObjectCours)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var item = document.querySelector('.item-' + id)
            if(item){
                item.remove();
            }
        })
}

function renderCourses(courses) {
    
   var htmls = courses.map(function(course) {
        return `<li class ="item-${course.id}">${course.name} ${course.age}</li>
                <button onclick = "handlDeleteCourses(${course.id})">xóa</button>
                <button onclick ="handlUpdateCourses(${course.id})">sửa</button>
                `
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
function handlUpdateCourses (id) {
    document.querySelector('input[name=name]').value = document.querySelector('.name-' + id).textContent
    document.querySelector('input[name=age]').value = document.querySelector('.age-' + id).textContent
    
}


   




function handleUpdateCourse(id) {
    document.querySelector('input[name=name]').value = document.querySelector('.name-' + id).textContent
    document.querySelector('input[name=description]').value = document.querySelector('.des-' + id).textContent

    var getBtnSave = document.querySelector('.btn-save')
    getBtnSave.style.display = 'block'
    var getBtnCreate = document.querySelector('.btn-create')
    getBtnCreate.style.display = 'none'

    getBtnSave.onclick = function() {
        var options = {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.querySelector('input[name=name]').value,
                description: document.querySelector('input[name=description]').value
            })
        }
        fetch(courseApi + '/' + id, options)
            .then(function(response) {
                return response.json()
            })
            .then(function() {
                getCourse(renderHtml)
                getBtnSave.style.display = 'none'
                getBtnCreate.style.display = 'block'
                document.querySelector('input[name=name]').value = ''
                document.querySelector('input[name=description]').value = ''
            })
    }
}


