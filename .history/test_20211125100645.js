var commentApi = 'https://jsonplaceholder.typicode.com/comments'
fetch(commentApi)
    .then(function(response) {
        return response.json();
        // JSON parse -> Javascript
    })
    .then(function(comments) {
        var html = comments.map(function(comment) {
            return `${comment.id}
                    </br>
                    ${comment.postId}
            `
        })
        document.querySelector('#element').innerHTML = html
    })
