function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    }
}
let currentIndex = 0; // Índice da imagem atual
    const images = document.querySelectorAll('.carousel-images img'); // Seleciona as imagens do carrossel
    const totalImages = images.length; // Total de imagens

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
      const carousel = document.querySelector('.carousel-images');
      const offset = -currentIndex * 100; // Desloca as imagens para a esquerda
      carousel.style.transform = `translateX(${offset}%)`;
    }

    // Função para ir para a imagem anterior
    function prevImage() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
      updateCarousel();
    }

    // Função para ir para a próxima imagem
    function nextImage() {
      currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    }

    // Event listeners para os botões de navegação
    document.querySelector('.prev').addEventListener('click', prevImage);
    document.querySelector('.next').addEventListener('click', nextImage);

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Cria um FormData com os dados do formulário
    const formData = new FormData(this);

    // Envia os dados via fetch
    fetch('https://formsubmit.co/ajax/seu_email@dominio.com', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json()) // Espera a resposta em formato JSON
    .then(data => {
        if (data.success) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('formulario').reset(); // Limpa o formulário
        } else {
            alert('Erro ao enviar a mensagem. Tente novamente.');
        }
    })
    .catch(error => {
        alert('Erro ao enviar a mensagem, tente novamente.');
        console.error('Erro:', error); // Mostra o erro no console para facilitar o diagnóstico
    });
});