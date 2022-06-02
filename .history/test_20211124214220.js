var users = [
    {
        id:1,
        name: 'Minh Thọ'
    },
    {
        id:2,
        name:'Do Tham'
    },
    {
        id:3,
        name: 'AA'
    }
]
var comments = [
    {
        id:1,
        user_id:1,
        content:'Hello'
    },
    {
        id:2,
        user_id:2,
        content:'Baby'
    }
    {
        id:3,
        user_id:3,
        content:'sấâ'
    }
]
function getComments() {
    return new Promise(
        function(resolve,reject) {
            setTimeout(function() {
                resolve(comments)
            },1000)
        }
    )
}
function getUsers(userIds) {
    return new Promise(function(resolve,reject) {
        var Listusers = users.filter(function(user) {
            return userIds.includes(user.id)
        })
        setTimeout(function() {
            resolve(Listusers)
            
        },1000)
    })
}
getComments()
    .then(function() {
        var userIds = comments.map(function(course) {
            return course.user_id
        })
    return getUsers(userIds)
        .then(function(Listusers) {
            return {
                user: Listusers,
                comments: comments
            }
        })  
        
    })
    .then(function(data) {
        console.log(data)
        var blockElements = document.getElementById('element')
    var html = '';
    data.comments.forEach(function(comment) {
        var user = data.Listusers.find(function(user) {
            return user.id === comment.user_id;
        })
        html += `<li>${user.name}: ${comment.content}</li>`;
    })
    blockElements.innerHTML = html;
    })
    
     
