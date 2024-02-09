//Accordion Opening Script
const gatilhoAccor = document.querySelectorAll('.accordion .trigger');
gatilhoAccor.forEach((trigger) => 
{
    const accordion = trigger.parentElement; 
    accordion.classList.remove('open');
});

gatilhoAccor.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const accordion = trigger.parentElement;
        accordion.classList.toggle('open');
        })});
//Dark Mode Script abaixo:
        document.addEventListener('DOMContentLoaded', () => {
            const darkModeToggle = document.getElementById('darkModeToggle');
            const container = document.querySelector('.container');
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                container.classList.remove('dark');
            }
            darkModeToggle.addEventListener('change', () => {
                container.classList.toggle('dark', darkModeToggle.checked);
            });
        });
        function showImagesWithDelay() {
            const images = document.querySelectorAll('.box img');
            const delay = 0;

            // Mostra cada imagem com um atraso gradativo
            images.forEach(function(image) {
                setTimeout(function() {
                    image.style.opacity = 1;
                }, delay);
                delay += 500; // Aumenta o atraso para a próxima imagem
            });
        }
        var box = document.querySelector('.box');
            box.classList.remove('opened')
        // Adiciona um ouvinte de evento de clique à imagem .fab
        document.querySelector('.fab').addEventListener('click', function() {
            var box = document.querySelector('.box');
         
            box.classList.toggle('opened'); // Adiciona ou remove a classe 'opened' da caixa
            if (box.classList.contains('opened')) {
                showImagesWithDelay(); // Chama a função para exibir imagens com atraso gradativo quando a caixa é aberta
            }
        });

    //HORA DO JSASIUDFAS9HGUASIBNFDG
    let menuBtns = document.querySelectorAll('.menu-btn');
        let container2 = document.querySelector('.container')
    menuBtns.forEach(function(btn) {
    btn.classList.remove('active');
    btn.addEventListener('click', function(e) {
        btn.classList.toggle('active'); 
    })})
 
    ;
    