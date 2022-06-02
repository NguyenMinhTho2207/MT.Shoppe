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
    },
    {
        id:3,
        user_id:3,
        content: 'hi'
    }
]
//lấy comment
//từ comment lấy user_id
// Từ user_id -> name

function getComments() {
    return new Promise(
        function(resolve,reject) {
            setTimeout(function() {
                resolve(comments)
            },1000)
        }
    )
}
function getElementIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(result) {
            return userIds.includes(result.id)
        })
        setTimeout(function() {
            resolve(result)
        },1000)
    })
}
getComments()
    .then(function(comments) {
        var userIds =  comments.map(function(userIds) {
            return userIds.user_id
        })
        getElementIds(userIds)
            .then(function(result) {
                console.log(result)
            })
    })
     
