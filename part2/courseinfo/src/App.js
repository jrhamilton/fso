const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = (props) => {
  return (
  <li>
    {props.name} {props.exercises}
  </li>
)
}

const Parts = ( {parts} ) => (
  <ul style={{listStyleType:"none", paddingInlineStart:"0"}}>
    {parts.map(part =>
      <Part key={part.id.toString()} name={part.name} exercises={part.exercises} />
    )}
  </ul>
)

const Course = ({course}) => {
  const sumOfExercises = (parts) => {
    const sum = parts.reduce((s, p) => s + p.exercises, 0)
    return (sum)
  }

  return (
    <div>
      <ul style={{listStyleType:"none", paddingInlineStart:"0"}}>
        <li key={course.id}>
          <Header course={course.name} />
          <Parts parts={course.parts} />
        </li>
      </ul>
      <div>
        <Total sum={sumOfExercises(course.parts)} />
      </div>
    </div>
  )
}

const App = () => {
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

  return <Course course={course} />
}

export default App
