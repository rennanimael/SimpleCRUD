const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json()); // dar acesso para o app usar json

let data = []; // lista em memória para armazenar dados

// DEFINIÇÃO DE ROTAS

// Criar um novo registro

app.post('/cadastro', (req, res) =>{
    const novoRegistro = req.body;
    data.push(novoRegistro)
    res.status(201).json({ message: 'Registro criado com sucesso' })
});

app.get('/listar', (req,res)=>{
    res.status(200).json({ mensagem: "Aqui vão os dados", data});
});

app.get('listar/:usuarioId', (req, res)=>{
    const {usuarioId} = req.params;
    const usuario = data.find(usuario => usuario.id === Number(usuarioId))

    if(usuario){
        return res.status(200).json({ mensagem:"usuario encontrado", usuario})
    }

    return res.status(401).json({mensagem: "usuario não encontrado"})
})
