const express = require('express')
var morgan = require('morgan')
const app = express()

morgan.token('postparams', function(req, res) {
  return JSON.stringify(req.body)
});

app.use(morgan(':url :method :status :res[content-length] - :response-time ms :postparams'))

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

const info_text = (count) => {
  const date = new Date()
  const text = `Phonebook has info for ${count} people. ${date}`
  return text
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

// *** METHODS ***

app.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/html')
  response.send('<h1>PhoneBook</h1>')
})

app.get('/info', (request, response) => {
  const person_count = persons.length
  const html = info_text(person_count)
  response.setHeader('Content-Type', 'text/plain')
  response.send(html)
})

app.get('/api/persons', (request, response) => {
  response.setHeader('Content-Type', 'application/json')
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end('Person Not Found')
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
    response.setHeader('Content-Type', 'text/plain')
    response.status(404).end('ERROR: Person does not exist')
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Phonebook server running on port ${PORT}`)
})
