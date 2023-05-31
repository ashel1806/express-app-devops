const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Testing the CI/CD pipeline, now with Watchtower and Docker Compose!!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
