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
    }
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
    return course.concat(i)
},[])
console.log( array)