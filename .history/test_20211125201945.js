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
 function renderCode(courses) {
    var htmls = courses.map(function(course) {
        return `<li>${course.name} ${course.birthDay}
            <br><button>xóa</button>
            </li>`
    })
    ListCoursesBlock.innerHTML = htmls.join();
 }
 function handleCreateForm() {
    var createBtn = document.querySelector('.createInfo')
    createBtn.onclick = function() {
        alert('aaa')
    }
 }
