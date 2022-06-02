var commentApi = 'https://jsonplaceholder.typicode.com/comments'
fetch(commentApi);
    .then(function(response) {
        return response.JSON();
        // JSON parse -> Javascript
    })
    .then(function(comments) {
        console.log(comments)
    })
