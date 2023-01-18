const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  { 
    id: 1,
    name: "Arto Hellas", 
    number: "040-123456"
  },
  { 
    id: 2,
    name: "Ada Lovelace", 
    number: "39-44-5323523"
  },
  { 
    id: 3,
    name: "Dan Abramov", 
    number: "12-43-234345"
  },
  { 
    id: 4,
    name: "Mary Poppendieck", 
    number: "39-23-6423122"
  }
]

const info_html = (count) => {
  const date = new Date()
  return (
`<html>
  <body>
    <p>Phonebook has info for ${count} people</p>
    <p>${date}</p>
  </body>
</html>`
  )
}

const person_post_html = (person) => {
  return (
`<html>
  <body>
    <p>${person.name} has been added.</p>
    <p>Number: ${person.number}</p>
    <p>ID: ${person.id}</p>
  </body>
</html>`
  )
}

const person_post = (body) => {
  const person = {
    id: Math.floor(
      Math.random() * Number.MAX_SAFE_INTEGER
    ),
    name: body.name,
    number: body.number,
  }

  persons = persons.concat(person)
  const html = person_post_html(person)
  return html
}

app.get('/', (request, response) => {
  response.send('<h1>PhoneBook</h1>')
})

app.get('/info', (request, response) => {
  const person_count = persons.length
  const html = info_html(person_count)
  response.send(html)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end('<html><body><h1>Person Not Found</h1></body></html>')
  }
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'Requres name'
    })
  }

  const not_unique = persons.some(p => {
    return p.name === body.name
  })
  if (not_unique) {
    return response.status(409).json(
      { error: 'name must be unique' }
    )
  }

  const html = person_post(body)
  response.send(html)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  new_persons = persons.filter(p => p.id !== id)

  if (new_persons.length < persons.length) {
    persons = new_persons
    response.status(204).end()
  } else {
    response.status(404).end('<html><body><h1>Person Does Not Exist</h1></body></html>')
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Phonebook server running on port ${PORT}`)
})
