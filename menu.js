let ggmenu = document.getElementById('gg-menu');        // Botão de abrir
let menu = document.getElementById('menu-mobile');      // Menu mobile
let overlay = document.getElementById('overlay-menu');  // Fundo escuro
let fechar = document.querySelector('.gg-fechar');      // Botão de fechar dentro do menu

// Abrir menu
ggmenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

// Fechar menu ao clicar no overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});

// Fechar menu ao clicar no botão de fechar
fechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});
