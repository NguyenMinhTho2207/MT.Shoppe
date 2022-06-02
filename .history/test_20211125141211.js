fetch('http://localhost:3000/course')
    .then(function(response) {
        return response.json();
    })
    .then(function(course) {
       var content = course.map(function(content) {
            return `
           <li> ${content.name}</li>
          <li>  ${content.birthDay}</li>
            `
        })
        document.querySelector('#element').innerHTML = content.join('');
    })