fetch('http://localhost:3000/course')
    .then(function(response) {
        return response.json();
    })
    .then(function(course) {
        console.log(course)
    })