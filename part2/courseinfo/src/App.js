const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => (
  <li style={{fontWeight:"bold", paddingBottom:"8px"}}>Number of exercises {sum}</li>
)

const Part = (props) => (
  <li style={{paddingBottom:"8px"}}>
    {props.name} {props.exercises}
  </li>
)

const Parts = ( {parts} ) => {
  const sumOfExercises = (parts) => {
    const sum = parts.reduce((s, p) => s + p.exercises, 0)
    return (sum)
  }

  return (
    <ul style={{listStyleType:"none", paddingInlineStart:"0"}}>
      {parts.map(part =>
        <Part key={part.id.toString()} name={part.name} exercises={part.exercises} />
      )}
      <Total sum={sumOfExercises(parts)} />
    </ul>
  )
}

const Course = (course) => {
  return (
    <li>
      <Header course={course.name} />
      <Parts parts={course.parts} />
    </li>
  )
}

const Courses = ({courses}) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <ul style={{listStyleType:"none", paddingInlineStart:"0"}}>
        {courses.map(course =>
          <Course key={course.id.toString()} name={course.name} parts={course.parts} />
        )}
      </ul>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

export default App
