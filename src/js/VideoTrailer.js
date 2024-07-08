const trailer = document.querySelector(".information .videoTrailer");
const trailerVideo = document.querySelector(".information .videoTrailer video");

function abrirVideo() {
    trailer.classList.add("videoAtivo");
    trailerVideo.play();
}

function fecharVideo() {
    trailer.classList.remove("videoAtivo");
    trailerVideo.pause();
    trailerVideo.currentTime = 0;
}

document.querySelector(".abrirVideoBtn").addEventListener('click', abrirVideo);
document.querySelector(".fecharVideoBtn").addEventListener('click', fecharVideo);
