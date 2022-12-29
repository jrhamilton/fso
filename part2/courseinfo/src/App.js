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
    const len = parts.length
    let sum = 0
    for (let i=0;i<len;i+=1) {
      sum += parts[i]['exercises']
    }
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
