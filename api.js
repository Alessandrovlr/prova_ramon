import { registraLog } from "./script"
const express = require("express")

const app = express()

app.use(express.json())

app.get("/logs/:id", (req, res) =>{

})



app.post("/logs", async (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json( "Nome é obrigatório" );
    }

    try {
        const id = await registraLog(nome);
        res.status(200).json(`Log registrado para ${nome}`, id);
    } catch (err) {
        res.status(500).json("Erro ao registrar log" );
    }
});


app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
});