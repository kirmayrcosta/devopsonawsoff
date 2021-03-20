const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World! com passo manual: 337016')
})

app.get('/kirma', (req, res) => {
  res.send('Teste de pipeline')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
