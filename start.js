document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const backgroundMusic = document.getElementById('background-music');

    // Tocar música de fundo
    backgroundMusic.play();

    // Iniciar o jogo ao clicar no botão
    startButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redireciona para a tela do jogo
    });
});