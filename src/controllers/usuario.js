const { Router } = require("express");
const { db } = require("../db");
const rotaUsuario = Router();

rotaUsuario.get("/usuarios", async (req, res) => {
  const usuarios = await db.usuario.findMany();
  res.json(usuarios);
});

rotaUsuario.post("/usuarios", async (req, res) => {
  const {
    nome,
    apelido,
    email,
    senha,
    telefone,
    foto_de_perfil,
    local,
    data_nascimento,
    insegurancas,
    autoestima,
    confianca,
    medos,
    avaliacao,
    mudancas,
  } = req.body;

  await db.usuario.create({
    data: {
      nome,
      apelido,
      email,
      senha,
      telefone,
      foto_de_perfil,
      cidade: local,
      insegurancas,
      autoestima,
      confianca,
      medos,
      avaliacao,
      mudancas,
      data_nascimento: new Date(data_nascimento),
    },
  });

  res.json({ mensagem: "okay" });
});

rotaUsuario.delete("/usuarios/:id", async (req, res) => {
  const id = Number(req.params.id);
  await db.usuario.delete({
    where: { id },
  });
  res.json({ mensagem: "okay" });
});

rotaUsuario.put("/usuarios/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = {};

  if (req.body.nome) data.nome = req.body.nome;
  if (req.body.email) data.email = req.body.email;

  await db.usuario.update({
    where: { id },
    data,
  });

  res.send({ mensagem: "okay" });
});

module.exports = { rotaUsuario };
