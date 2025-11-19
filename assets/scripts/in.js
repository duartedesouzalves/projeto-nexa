let bolinha = true;
function senha() {
  if (bolinha) {
    document.querySelector("#senha").type = "text";
    bolinha = false;
  } else {
    document.querySelector("#senha").type = "password";
    bolinha = true;
  }
}

function proximo() {
  // salva
  localStorage.setItem(
    "formulario",
    JSON.stringify({
      senha: document.querySelector("senha").value,
      email: document.querySelector("email").value,
      nome: document.querySelector("nome").value,
    })
  );

  window.location.href = "/personalizar";
}

// pega
const dados = JSON.parse(localStorage.getItem("formulario"));
