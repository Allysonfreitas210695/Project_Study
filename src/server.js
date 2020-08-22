
//servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurando o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

//inicio e configuraçao do servidor
 server
 //receber so dados do req.body
 .use(express.urlencoded({extended: true}))
//configurar arquivos estaticos (css, script, imagem)
.use(express.static("public"))
//rotas de aplicaçao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(3000)

