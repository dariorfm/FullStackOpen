


const Course = (props) => {
    const { courses } = props
    return (
      
        courses.map(course =>
  
          <div key={course.id}>
  
            <h1>{course.name}</h1>
  
              {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
  
              <p><b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
  
          </div>)
    )
  }

  export default Course;