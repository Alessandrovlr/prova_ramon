const {v4: uuidv4} = require("uuid")
const fs = require("fs")

function registraLog(nome) {
    return new Promise((resolve, reject) => {
        const dataHora = new Date().toLocaleString()
        const idUnico = uuidv4()
        const log = `${idUnico} - [${dataHora}] - ${nome}\n`

        fs.appendFile("logs.txt", log, (err) => {
            if (err) {
                console.log("erro ao escrever log:", err)
                reject(err)
            } else {
                console.log("log registrado")
                resolve(idUnico)
            }
        });
    });
}

module.exports = { registraLog }