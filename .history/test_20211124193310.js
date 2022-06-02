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
            resolve(comments)
        }
    )
}
getComments()
    .then(function() {
        console.log(comments)
    })