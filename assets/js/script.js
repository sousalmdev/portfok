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