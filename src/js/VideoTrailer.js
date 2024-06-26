const trailer = document.querySelector(".information .videoTrailer");
const trailerClose = document.querySelector("video");


function abrirVideo(){
    trailer.classList.toggle("videoAtivo");
    
}


function fecharVideo(){
    trailer.classList.toggle("videoAtivo");
    trailerClose.pause();
    trailerClose.currentTime = 0;

}