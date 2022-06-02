fetch('http://localhost:3000/course')
    .then(function(response) {
        return response.json();
    })
    .then(function(course) {
       var content = course.map(function(content) {
            return `
            ${content.name}
            <br>
            ${content.birthDay}
            `
        })
        document.querySelector('#element').innerHTML = content.join('');
    })