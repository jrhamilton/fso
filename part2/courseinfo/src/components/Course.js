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

export default Course
