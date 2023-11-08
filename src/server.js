const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json()); // dar acesso para o app usar json

let data = []; // lista em memória para armazenar dados

// DEFINIÇÃO DE ROTAS

//Criar um novo registro

app.post('/cadastro', (req, res) =>{
    const novoRegistro = req.body;
    data.push(novoRegistro)
    res.status(201).json({ message: 'Registro criado com sucesso' })
});

