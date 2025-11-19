const dados = JSON.parse(localStorage.getItem("formulario"));

async function proximo() {
  dados.resposta = document.querySelector("#resposta").value;

  // salva
  localStorage.setItem("formulario", JSON.stringify(dados));

  const resposta = await fetch("/api/quest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!resposta.ok) {
    alert("erro");
    return;
  }

  window.location.href = "/questionario";
}
