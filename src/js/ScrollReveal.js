const animeScrollOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Function to apply ScrollReveal with a specific delay
function applyScrollReveal(selector, delay) {
    ScrollReveal().reveal(selector, {
        ...animeScrollOption,
        delay: delay,
    });
}


applyScrollReveal(".game-list img", 600);
applyScrollReveal(".information h1", 550);
applyScrollReveal(".information p", 525);
applyScrollReveal(".information .botoes", 500);


applyScrollReveal(".about-gta-v .details-gta-v .contents-gta-v img", 600);
applyScrollReveal(".about-gta-v .details-gta-v .informations-gta-v img, .about-gta-v .details-gta-v .informations-gta-v h1, .about-gta-v .details-gta-v .informations-gta-v p", 550);


applyScrollReveal(".about-gta-online .details-gta-online .contents-gta-online img", 600);
applyScrollReveal(".about-gta-online .details-gta-online .information-gta-online img, .about-gta-online .details-gta-online .information-gta-online h1, .about-gta-online .details-gta-online .information-gta-online p", 550);


applyScrollReveal(".about-gta-characters .video-gta-characters .description h3, .about-gta-characters .video-gta-characters .description p", 600);


applyScrollReveal(".to-buy-gta .title, .to-buy-gta .cards", 500);
