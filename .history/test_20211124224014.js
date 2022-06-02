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

getComments()
    .then(function(comments) {
        var userIds =  comments.map(function(userIds) {
            return userIds.user_id
        })
        console.log(userIds)
    })
     
