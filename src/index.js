const express = require("express");
const { db } = require("./db");
const { rotaUsuario } = require("./controllers/usuario");
// const { rotaQuestionario } = require("./controllers/quest");
// const { rotaResposta } = require("./controllers/resp");
const { rotaChat } = require("./controllers/chat");
const { rotaProfissional } = require("./controllers/profissionais");
const { rotaMensagens } = require("./controllers/mens");
const { rotaPaginas } = require("./controllers/Paginas");
const server = express();

server.use(express.json());
server.use(express.static("assets"));
server.use(rotaPaginas);
server.use(rotaUsuario);
server.use(rotaChat);
server.use(rotaProfissional);
server.use(rotaMensagens);

server.listen(3000, () => console.log("Rodando"));
