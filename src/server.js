import express from "express"
import { config } from "dotenv"

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome: "Raiva",
        cor: "Vermelho"
    },

    {
        id: 2,
        nome: "Ansiedade",
        cor: "Laranja"
    },

    {
        id: 3,
        nome: "Alegria",
        cor: "Amarelo"
    },

]

const personagens = [
    {
        id: 100,
        nome: "Totoro",
        studio: "Ghibli",
        vivo: true
    },
    {
        id: 101,
        nome: "Thanos",
        studio: "Marvel",
        vivo: false
    },
    {
        id: 102,
        nome: "Pateta",
        studio: "Disney",
        vivo: true
    },
]

app.get("/",(req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
})


app.get("/2tds2",(req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
})

app.get("/emocoes",(req, res) => {
    return res.status(200).send( emocoes )
})
app.get("/personagens",(req, res) => {
    return res.status(200).send( personagens )
})

app.post("/emocoes",(req, res) => {
    const { nome, cor } = req.body
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(novaEmocao)
    return res.status(200).send( emocoes )
})

app.listen(serverPort, () => {
    console.log(`🎃 Server started on http://localhost:${serverPort}`)
})