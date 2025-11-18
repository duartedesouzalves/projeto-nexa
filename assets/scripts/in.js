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

API_URL = "https://ltrk5t-3000.csb.app/";
const form = document.querySelector("form");
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const productGmail = document.getElementById("gmail").value;
  const productNome = document.getElementById("nome").value;
  const productSenha = document.getElementById("senha").value;

  const postData = {
    productGmail: productGmail,
    price: productPrice,
    imageUrl: "teste",
    description: productSenha,
  };

  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };
    const response = await fetch(API_URL, options);
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    const dados = await response.json();
    location.reload();
  } catch (error) {
    console.error("Erro na requisição:", error.message);
  }
});
