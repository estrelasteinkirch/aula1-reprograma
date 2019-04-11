//variável que será clicada
let seta = document.querySelector(".seta-link");

//variável que irá aparecer
let textoSanfona = document.querySelector(".texto-sanfona");
let imgSeta = document.querySelector(".seta_img")

//irá clicar na seta e isso fará a classe de textoSanfona mudar de "texto-safona" para "sanfona-aberta"
seta.addEventListener("click", function(e) {
  e.preventDefault();
  textoSanfona.classList.toggle("sanfona-aberta");
  imgSeta.classList.toggle("seta-invertida")
});



