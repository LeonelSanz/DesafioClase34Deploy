import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`))

app.get('/', (req,res) => {
    res.send(`Hola Railway App`)
})

app.get('/env', (req,res) => {
    res.send(`Solicitado el entorno: ${process.env.PAPACONQUESO}`)
})

app.get('/bye', (req,res) => {
    res.send(`Adios Railway App`)
})