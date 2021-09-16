const express = require("express") // Importando o Express
const app = express() // Inciando o express
const port = 8081

app.get("/", (req, res) =>{
    res.send('Hello World!!')
})

app.get("/blog/:artigo?", (req, res) =>{
    let artigo = req.params.artigo
    if(artigo){
        res.send(`Bem vindo. Você está acessando o artigo ${artigo}`)
    }else{
        res.send(`Bem vindo ao Blog!`)
    }    
})

app.get("/canal/youtube", (req, res) =>{
    let canal = req.query["canal"]

    if(canal){
        res.send(`Bem vindo ao canal ${canal}`)

    }else{
        res.send(`Nunhum canal fornecido!`)
    }
})

app.get("/ola/:nome/:empresa", (req, res) => {
    // REQ => Dados enviados pelo usuario
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send(`Olá ${nome} da ${empresa}`)
})

app.listen(port, erro =>{
    if(erro){
        console.log('Ocorreu um erro!')
    }else{
        console.log('Servidor iniciado com sucesso!')
    }
})
