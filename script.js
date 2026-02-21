// pegar o botão
const botao = document.getElementById("toggle-theme");

// quando clicar no botão
botao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
});
