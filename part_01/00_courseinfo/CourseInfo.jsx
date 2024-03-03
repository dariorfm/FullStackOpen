import React from 'react'

const Header = ({course}) => {
  
    return (
      <>
        <h1>{course.name}</h1>
      </>
    );
  }
  
  const Content = ({course}) => {
  
    return (
      <>
        {course.parts.map((part) => (
            <p key={part.name}>
            {part.name} {part.exercises}
          </p>
        ))}
      </>
    );
  }
  
  
  const Total = ({course}) => {
  
    const totalExcercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return (
      <>
        <p>Number of exercises {totalExcercises}</p>
      </>
    );
  }

const CourseInfo = () => {
    
    const course = {
        name :'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      };
      
      return (
        <div>
          <Header course={course} />
          <Content course={course}/>
          <Total course={course}/>
        </div>
      )
}

export default CourseInfo
