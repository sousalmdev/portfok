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

// Garante que a barra lateral está fechada ao iniciar a página
document.getElementById('sidebar').style.width = '0';

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = (sidebar.offsetWidth === 0) ? '120px' : '0';
}

let button = document.getElementById('toggle-btn');

button.addEventListener('click', function() {
    button.classList.toggle('moved');
});
