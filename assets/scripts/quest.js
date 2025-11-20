const dados = JSON.parse(localStorage.getItem("formulario"));

async function Entre() {
  dados.insegurancas = document.querySelector("#insegurancas").value;
  dados.autoestima = document.querySelector("#autoestima").value;
  dados.confianca = document.querySelector("#confianca").value;
  dados.medos = document.querySelector("#medos").value;
  dados.avaliacao = document.querySelector("#avaliacao").value;
  dados.mudancas = document.querySelector("#mudancas").value;

  // salva
  localStorage.setItem("formulario", JSON.stringify(dados));

  const resposta = await fetch("/questionarios", {
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




// function Entre() {
//   // salva
//   localStorage.setItem(
//     "formulario",
//     JSON.stringify({
//       senha: document.querySelector("#resposta").value;
//     })
//   );

//   window.location.href = "/questionario";
// }

// // pega
// const dados = JSON.parse(localStorage.getItem("formulario"));

