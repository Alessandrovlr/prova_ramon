import { v4 as uuidv4 } from 'uuid';
const fs = require('fs')

function registraLog(nome){
    const dataHora = new Date().toLocaleString()
    const idUnico = uuidv4();
    const log = `${idUnico} - [${dataHora}] - ${nome}\n`

    fs.appendFile("logs.txt", log, (err) =>{
        try{
            console.log("log registrado")
        }catch(err){
            console.log("erro ao escrever log:", err)
        }
    } )
}