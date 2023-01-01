const Person = (props) => (
  <li>
    {props.name}: {props.number}
  </li>
)

const NumberList = ({persons}) => {
  return (
    <ul>
      {persons.map(person =>
        <Person key={person.name}
                name={person.name}
                number={person.number} />
      )}
    </ul>
  )
}

export default NumberList
