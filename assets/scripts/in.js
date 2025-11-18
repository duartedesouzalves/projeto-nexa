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

// salva
localStorage.setItem(
  "formulario",
  JSON.stringify({
    senha: "123123",
    email: "",
  })
);

// pega
const dados = JSON.parse(localStorage.getItem("formulario"));
