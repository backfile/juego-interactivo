const conejo = document.querySelectorAll(".conejo");
const puntos = document.querySelector(".puntos");
let score = 0;

conejo.forEach((item) => {
  item.addEventListener("click", sumarPuntos);
});

function sumarPuntos() {
  score++;
  puntos.innerHTML = `Score: ${score}`;
}
