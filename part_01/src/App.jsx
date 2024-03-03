import CourseInfo from "../00_courseinfo/CourseInfo"
import Unicafé from "../01_unicafe/Unicafé"
import Anecdotes from "../02_anecdotes/Anecdotes"

function App() {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <>
      <div>
        <CourseInfo course={course} />
        <div>========== *** ============</div>
        <Unicafé />
        <div>========== *** ============</div>
        <Anecdotes />
      </div>
    </>
  )
}

export default App
