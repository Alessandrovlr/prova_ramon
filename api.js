const { registraLog } = require("./script")
const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())

app.get("/logs/:id", (req, res) => {
    const { id } = req.params

    if(id.length !== 36){
        return res.status(404).json( "Log não encontrado")

    }else{
        fs.readFile("logs.txt", "utf-8", (err, data) => {
            if (err) {
                return res.status(500).json("Erro ao ler o arquivo de logs" )
            }
    
            const linhas = data.split("\n")
            const logEncontrado = linhas.find((linha) => linha.startsWith(id))
    
            if (!logEncontrado) {
                return res.status(404).json( "Log não encontrado")
            }
    
            res.status(200).json( logEncontrado )
        });
    }
});



app.post("/logs", async (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json( "Nome é obrigatório" );
    }

    try {
        const id = await registraLog(nome);
        res.status(200).json(`Log registrado com chave unica: ${id}`);
    } catch (err) {
        res.status(500).json("Erro ao registrar log" );
    }
});


app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
});