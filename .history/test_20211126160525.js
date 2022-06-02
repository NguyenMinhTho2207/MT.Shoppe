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
        return `<li class ="item-${course.id}">
                <h4 class = "name-${course.id}">${course.name}</h4>
                 <p class = "age-${course.id}">${course.age}</p>
                 </li>
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
var globalId;
function handlUpdateCourses (id) {
    globalId = id;
    document.querySelector('input[name=name]').value = document.querySelector('.name-'+id).textContent;
    document.querySelector('input[name=age]').value = document.querySelector('.age-' + id).textContent;
    document.querySelector('.createInfo').style.display = 'none'
    document.querySelector('.updateInfo').style.display = 'block'
    
}

function updateCourse() {
    var saveBtn = document.querySelector('.updateInfo')
    saveBtn.onclick = function() {
        var newName = document.querySelector('input[name = "name"]')
        var newAge = document.querySelector('input[name = "age"]')
        var newFormData = {
            name: newName,
            age: newAge
          }

          var objectCourse = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        fetch(coursesApi +"/"+id,objectCourse)
            .then(function(response) {
                return response.json();
            })
            .then(callback)
          handlUpdateCourses (globalId,newFormData,function(){
            getCourses(renderCourses)
          })

          document.querySelector('#create').style.display ='block'
          document.querySelector('#update').style.display ='none'
          document.querySelector('input[name="name"]').value = ``
          document.querySelector('input[name="description"]').value = ``
    }
}


   




var globalId;
  function preHandleUpdateCourse(id){
    globalId = id
    document.querySelector('input[name="name"]').setAttribute
    ("value",document.querySelector('.course-name-'+id).textContent)
    document.querySelector('input[name="description"]').setAttribute
    ("value",document.querySelector('.course-desc-'+id).textContent)
    document.querySelector('#create').style.display ='none'
    document.querySelector('#update').style.display ='block'
  }
  function handleUpdateCourse(){
    var newName = document.querySelector('input[name="name"]').value
    var newDesc = document.querySelector('input[name="description"]').value
    var newFormData = {
      name: newName,
      description: newDesc
    }
    function updateCourse(data,id,callback){
      var options = {
        method : 'PUT',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(coursesAPI+'/'+id,options)
        .then(function(response){
          response.json();
        })
        .then(callback)
    }
    updateCourse(newFormData,globalId,function(){
      getCourses(renderCourses)
    });
    document.querySelector('#create').style.display ='block'
    document.querySelector('#update').style.display ='none'
    document.querySelector('input[name="name"]').value = ``
    document.querySelector('input[name="description"]').value = ``
  }


