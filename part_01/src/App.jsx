import CourseInfo from "../00_courseinfo/CourseInfo"
import Unicafé from "../01_unicafe/Unicafé"
import Anecdotes from "../02_anecdotes/Anecdotes"

function App() {


  return (
    <>
      <div>
        <CourseInfo />
        <div>========== *** ============</div>
        <Unicafé />
        <div>========== *** ============</div>
        <Anecdotes />
      </div>
    </>
  )
}

export default App
