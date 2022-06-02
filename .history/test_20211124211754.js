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
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        })
        setTimeout(function() {
            resolve(result)
            
        },1000)
    })
}
getComments()
    .then(function() {
        var userIds = comments.map(function(course) {
            return course.user_id
        })
    return getUsers(userIds)
        .then(function(result) {
            return {
                result: result,
                comments: comments
            }
        })  
        
    })
    .then(function(data) {
        var blockElements = document.querySelector('#element')
    var html = '';
    data.comments.forEach(function(comment) {
        var user = data.result.find(function() {
            return comment.user_id === result.id;
        })
        html += `<li>${user.name}: ${comment.content}</li>`;
    })
    
    })
    blockElements.innerHTML = html;
     
