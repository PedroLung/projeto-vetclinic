const express = require('express') // Importando o express
const conn = require('./db/conn') // Importando a conexão com o Banco de dados
// Configurando app e porta que vai rodar a aplicação
const app = express()
const port = 3000
// Importando os models
const Tutor = require('./models/Tutor')
const Pet = require('./models/Pet')

// Pegar os dados do body
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Rota Tutor
app.use('/tutors', require('./routes/tutors'))

// Rota Pet
app.use('/pets', require('./routes/pets'))

// Rota príncipal
app.get('/', (req, res) => {
  res.send('Rota conectada com sucesso')
})

// Conexão com o Banco de Dados
conn
  .sync()
  .then(() => {
    app.listen(port)
    console.log('Servidor conectado com sucesso')
    console.log(`Estamos rodando na porta: ${port}`)
  }).catch(err => console.log(err))