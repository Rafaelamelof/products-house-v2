const fs = require('fs')
const path = require ('path')

const requestLog = (req,res,next) => {
    const dateHourRequest = new Date().toLocaleString('pt-BR')

    const logMessage = `O cliente ${req.ip} acessou a rota ${req.method}${req.url} - 
    ${res.statusCode} em ${dateHourRequest}\n`

    fs.appendFileSync(path.resolve('src', 'logs', 'requestLog.txt'), logMessage)

    return next ()
}

module.exports = requestLog