const express = require("express");
const methodOverride = require('method-override')

const usersRouter = require("./routes/usersRoutes");
const path = require('path') 
const homeRouter = require('./routes/homeRouter')
const authRouter = require('./routes/authRouter')
const adminRouter = require('./routes/adminRouter')
const requestLog = require('./middlewares/requestLog')


const server = express();
const port = 4000;

server.set('view engine', 'ejs')
server.set('views', path.resolve("src", "views")) 

server.use(express.json());
server.use(express.urlencoded({ extended: false}))// permite receber as informações do formulario
server.use(methodOverride('_method'))// permite reconhecer outros métodos http além do get e post

server.use(express.static(path.resolve("src", "public")))
server.use(requestLog)


server.use(usersRouter)
server.use(homeRouter)
server.use(authRouter)
server.use(adminRouter)

server.listen(port, () =>
  console.log(`Servidor rodando no http://localhost:${port}`)
);
