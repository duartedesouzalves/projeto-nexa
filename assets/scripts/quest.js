const dados = JSON.parse(localStorage.getItem("formulario") || "{}");

async function Entre() {
  dados.insegurancas = document.querySelector("#insegurancas").value;
  dados.autoestima = document.querySelector("#autoestima").value;
  dados.confianca = document.querySelector("#confianca").value;
  dados.medos = document.querySelector("#medos").value;
  dados.avaliacao = document.querySelector("#avaliacao").value;
  dados.mudancas = document.querySelector("#mudancas").value;

  // salva
  localStorage.setItem("formulario", JSON.stringify(dados));

  try {
    const resposta = await fetch("/questionarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
      const erro = await resposta.json().catch(() => ({}));
      alert(erro.erro || "erro ao salvar as respostas");
      return;
    }

    window.location.href = "/questionario";
  } catch (e) {
    console.error(e);
    alert("erro de conexão com o servidor");
  }
}
