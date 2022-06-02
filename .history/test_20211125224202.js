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
 function handlUpdateCourse(id,name,birthDay) {
    var options = {
        method: 'PUT',
        headers: {
           'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
   fetch(courseApi + "/" + id,options)
       .then(function(respone) {
           return respone.json();
       })
       .then(function() {
        var name = document.querySelector('input[name="name"]').value;
        var birthDay = document.querySelector('input[name="birthDay"]').value
        var formData = {
            name:name,
            birthDay: birthDay
        }
        createCourse(formData,function() {
            getCourse(renderCode)
        });
       })
}
 function handlDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
           'Content-Type': 'application/json'},
    }
   fetch(courseApi + '/' + id,options)
       .then(function(respone) {
           return respone.json();
       })
       .then(function() {
       var courseItem =  document.querySelector('.item-'+ id);
       if(courseItem){
           courseItem.remove();
       }
       })
}
 function renderCode(courses) {
    var htmls = courses.map(function(course) {
        return `<li class="item-${course.id}" >${course.name} ${course.birthDay}
            <br><button onclick ="handlDeleteCourse(${course.id})">xóa</button> 
            <button onclick = "handlUpdateCourse(${course.id},${course.name},${course.birthDay})">sửa</button>
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





 function handleRepairForm(id){
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description,
        };
        RepairCourse(formData,id,function(){
            getCourses(rennderCourses);  
        });
    };
};
function RepairCourse(data,id,callback){
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    };
    fetch(courseApi+'/'+id,options)
        .then(function(response){
            response.json();
        })
        .then(callback);
};

 



function fnSave(id){
    {
        var name = document.querySelector('input[name="Name"]').value;
        var description = document.querySelector('input[name="Description"]').value;
        var bodyReq = {name: `${name}`, description: `${description}`}
        //var bodyData = `{"name": "${name}", "description": "${description}"}`
        var request = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "PATCH",
            body: JSON.stringify(bodyReq)
            //body: bodyData
        };
        console.log(request)
        var urlUpdate = urlData + '/' + id;
        fetch(urlUpdate,request)
        .then(function(res){
            console.log(res);
            if(res.status === 200)
            {
                    // Đoạn code dùng để thêm vào sau node cuối mà không cần load lại trang;
                // var id = '';
                // var html = htmlList(id,name,description)
                // var divBlock = document.querySelector('#posts-block');
                // divBlock.insertAdjacentHTML('beforeend',html);
                document.querySelector('input[name="Name"]').value = '';
                document.querySelector('input[name="Description"]').value = '';
                getData(handleViewData);
                // Đổi tên button Từ Submit → Save
                document.querySelector('#save').innerText = 'Submit';
                // remove onclick của nút Save và đổi id của Nút Save thành id của Submit như cũ
                document.querySelector('#save').removeAttribute('onclick');
                document.querySelector('#save').setAttribute('id','submit');
                handleCreate();
            }
            else
                alert('HTTP code: ' + res.status);
            
        })
        .catch(function(err){
            console.log(err);
        })
    }
}

