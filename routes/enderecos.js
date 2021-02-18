const express = require('express')
const conn = require('../conn')
const enderecos = express.Router()

// EXIBE ENDERECOS DO USUARIO
enderecos.get('/enderecos', (req, res, next)=> {
    let sql = `SELECT usuarios.id, usuarios.nome, usuarios.email, enderecos.*
    FROM usuarios 
    LEFT OUTER JOIN enderecos
    ON usuarios.id = enderecos.usuarioID`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

//BUSCA POR ENDEREÇOS
enderecos.get('/enderecos/busca', (req, res, next)=> {
    let dados = {
        cep: req.body.cep,
        estado: req.body.estado,
        bairro: req.body.bairro,
        rua: req.body.rua
    }
    let sql = `SELECT usuarios.nome, usuarios.email, enderecos.*
    FROM usuarios 
    LEFT OUTER JOIN enderecos
    ON usuarios.id = enderecos.usuarioID WHERE
    enderecos.cep LIKE "${dados.cep}%" OR
    enderecos.estado LIKE "${dados.estado}%" OR
    enderecos.bairro LIKE "${dados.bairro}%" OR
    enderecos.rua LIKE "${dados.rua}%"`
    conn.query(sql, (error, result) => {
        res.json(result)
    })
})

// CADASTRAR UM ENDEREÇO
enderecos.post('/enderecos/cad', (req, res, next) => {
    let dados = {
        usuarioID: req.body.usuarioID,
        cep: req.body.cep,
        estado: req.body.estado,
        bairro: req.body.bairro,
        rua: req.body.rua,
        num: req.body.num,
        complemento: req.body.complemento,
    }
    let sql = `INSERT INTO enderecos SET?`
    conn.query(sql, dados, (error, result)=> {
        res.json([{msg: 'endereço cadastrado!'},{dados}, {log: result}])
    })
})

// DELETAR ENDEREÇO
enderecos.delete('/enderecos/del/id=:id', (req, res, next) => {
    let dados = req.params.id
    let sql = `DELETE FROM enderecos WHERE usuarioID=${dados} `
    conn.query(sql, (error, result) => {
        res.json({msg:`registro ${dados} deletado!`, log: result})
    })
})


module.exports = enderecos