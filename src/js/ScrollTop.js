
const scrollAnima = document.querySelector('[data-anima="scroll"]');
const metadewindow = window.innerHeight * 2.0;


function animaScroll(){
    const itemTopo = scrollAnima.getBoundingClientRect().top;

    const itemVisivel = itemTopo - metadewindow < 0;

    if(itemVisivel){
        scrollAnima.classList.add('show-button');
    }else{
        scrollAnima.classList.remove('show-button');
    }
};



window.addEventListener('scroll', animaScroll);