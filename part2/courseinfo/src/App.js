const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = (props) => {
  return (
  <li>
    {props.name} {props.exercises}
  </li>
)
}

const Parts = ( {parts} ) => (
  <ul style={{listStyleType:"none"}}>
    {parts.map(part =>
      <Part key={part.id.toString()} name={part.name} exercises={part.exercises} />
    )}
  </ul>
)

const Course = (course) => {
  return (
    <li>
      <Header course={course.name} />
      <Parts parts={course.parts} />
    </li>
  )
}

const Courses = ({courses}) => {
  const sumOfPartsExercises = (parts) => {
    const sum = parts.reduce((s, p) => s + p.exercises, 0)
    return (sum)
  }

  const sumOfExercises = () => {
    const sum = courses.reduce((s, c) =>
      s + sumOfPartsExercises(c.parts), 0
    )
    return (sum)
  }

  return (
    <div>
      <ul style={{listStyleType:"none", paddingInlineStart:"0"}}>
        {courses.map(course =>
          <Course key={course.id.toString()} name={course.name} parts={course.parts} />
        )}
      </ul>
      <div>
        <Total sum={sumOfExercises(courses)} />
      </div>
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
