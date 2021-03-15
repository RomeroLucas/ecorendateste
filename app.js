const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('./build'))

//rotas
const users = require('./routes/usuarios')
app.use(users)
const enderecos = require('./routes/enderecos')
app.use(enderecos)
const agendamento=require('./routes/agendamento')
app.use(agendamento)
const aluminio = require('./routes/materiais/aluminio')
app.use(aluminio)
const cobre = require('./routes/materiais/cobre')
app.use(cobre)
const plastico = require('./routes/materiais/plastico')
app.use(plastico)
const materiais = require('./routes/materiais')
app.use(materiais)
const feedback = require('./routes/feedback')
app.use(feedback)

//VIEW PARA TESTES
app.get('/', (req, res, next) => {
    res.json({mensagem: "Olá mundo!"})
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Rodando em: http://localhost:4000/')
})
