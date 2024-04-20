//temporizador slider
$(document).ready(function(){
    $('.carousel').carousel({
        interval: 3000
    });
});

//codigo enviar msg form

document.addEventListener('DOMContentLoaded', function () {
      var form = document.getElementById('formulario-contato');
      if (form) { // Verifica se o formulário foi encontrado
        form.addEventListener('submit', function (event) {
          event.preventDefault(); // Evita o envio do formulário padrão
          
          // Recupera os valores do formulário
          var nome = document.getElementById('nome').value;
          var telefone = document.getElementById('tel').value;
          var mensagem = document.getElementById('mensagem').value;
          
          // Verifica se todos os campos foram preenchidos
          if (nome && telefone && mensagem) {
            // Formata a mensagem com os valores do formulário
            var textoMensagem = encodeURIComponent('Olá, meu nome é ' + nome + '. Minha mensagem é: ' + mensagem);
            
            // Abre o WhatsApp com os dados preenchidos
            window.open('https://wa.me/' + telefone + '?text=' + textoMensagem, '_blank');
            
            // Limpa os campos do formulário após o envio
            form.reset();
          } else {
            alert('Por favor, preencha todos os campos.');
          }
          
          return false; // Impede o envio padrão do formulário
        });
      } else {
        console.error('O formulário não foi encontrado.');
      }
    });