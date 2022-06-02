var myArray = [
    {
        topic: "Font-end",
        course: [
            {
                id:1,
                title: "HTML, CSS"
            },
            {
                id:2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        course: [
            {
                id:1,
                title: "HTML, CSS"
            },
            {
                id:2,
                title: "Javascript"
            }
        ]
    }
]
array = myArray.reduce(function(course,i) {
    return course.concat(i.course)
},[])
htmls = array.map(function(course) {
    return `
    <div>
        <h2> ${course.title}</h2>
    </div>
    `;
});
console.log( htmls.join(''));