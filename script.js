document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento com a classe 'title' dentro da estrutura fornecida
    var titleElement = document.querySelector('.news .text .title');
    if (titleElement) {
        titleElement.addEventListener('click', function() {
            // URL do site para onde o usuário será redirecionado
            window.location.href = 'https://news.google.com/home?hl=pt-BR&gl=BR&ceid=BR:pt-419';
        });
    } else {
        console.error('Elemento com a classe .news .text .title não encontrado.');
    }
});