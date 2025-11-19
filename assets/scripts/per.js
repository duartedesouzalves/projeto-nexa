const dados = JSON.parse(localStorage.getItem("formulario"));

function proximo() {
  dados.apelido = document.querySelector("#apelido").value;
  dados.data = document.querySelector("#data_nascimeto").value;
  dados.telefone = document.querySelector("#telefone").value;
  dados.local = document.querySelector("#localização").value;

  // salva
  localStorage.setItem("formulario", JSON.stringify(dados));

  window.location.href = "/questionario";
}
