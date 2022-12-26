const App = () => {
  const course = {
    title: 'Half Stack application development',
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
  }

  const Header = (props) => {
    return (
      <h1>
        {props.course}
      </h1>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }

  const Content = (c) => {
    return (
      <>
        <Part part={c.parts[0]} />
        <Part part={c.parts[1]} />
        <Part part={c.parts[2]} />
      </>
    )
  }

  const Total = (t) => {
    return (
      <p>Number of exercises {t.parts[0]['exercises'] + t.parts[1]['exercises'] + t.parts[2]['exercises']}</p>
    )
  }

  return (
    <div>
      <Header course={course['title']} />
      <Content parts={course['parts']} />
      <Total parts={course['parts']} />
    </div>
  )
}

export default App
