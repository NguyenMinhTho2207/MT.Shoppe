
var courseApi = 'http://localhost:3000/course'
var ListCoursesBlock = document.querySelector('#element')

function start() {
    getCourse(renderCode);
    // getCourse(function(courses) {
    //     renderCode(courses)
    // })
    handleCreateForm();
}

start();

function getCourse(callback) {
    fetch(courseApi)
        .then(function(respone) {
            return respone.json()
        })
        .then(callback)
 }
 function createCourse(data,callback) {
     var options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'},
         body: JSON.stringify(data)
     }
    fetch(courseApi,options)
        .then(function(respone) {
            return respone.json();
        })
        .then(callback)
 }
 function deleteCourse(data,callback) {
    var options = {
        method: 'DELETE',
        headers: {
           'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
   fetch(courseApi,options)
       .then(function(respone) {
           return respone.json();
       })
       .then(callback)
}
 function renderCode(courses) {
    var htmls = courses.map(function(course) {
        return `<li class="item"+ ${course.id}>${course.name} ${course.birthDay}
            <br><button>xóa</button>
            </li>`
    })
    ListCoursesBlock.innerHTML = htmls.join();
 }
 function handleCreateForm() {
    var createBtn = document.querySelector('.createInfo')
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var birthDay = document.querySelector('input[name="birthDay"]').value
        var formData = {
            name:name,
            birthDay: birthDay
        }
        createCourse(formData,function() {
            getCourse(renderCode)
        });
    }
 }
 function handleDeleteForm() {

 }
