const { Router } = require("express");
const { join } = require("path");
const rotaPaginas = Router();

rotaPaginas.get("/", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "cadastro.html"));
});

rotaPaginas.get("/cadastro", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "cadastro.html"));
});

rotaPaginas.get("/login", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "in.html"));
});

rotaPaginas.get("/personalizar", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "per.html"));
});

rotaPaginas.get("/questionario", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "quest.html"));
});

rotaPaginas.get("/tema", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "tema.html"));
});

rotaPaginas.get("/chat", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "chat.html"));
});

rotaPaginas.get("/contatos", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "ctt.html"));
});

rotaPaginas.get("/configuracoes", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "conf.html"));
});

module.exports = { rotaPaginas };
