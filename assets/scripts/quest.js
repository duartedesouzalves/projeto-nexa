const dados = JSON.parse(localStorage.getItem("formulario"));

function proximo() {
  dados.resposta = document.querySelector("#resposta").value;

  // salva
  localStorage.setItem("formulario", JSON.stringify(dados));

  window.location.href = "/questionario";
}
