  function Iniciar() {
    var dx = 0; // taxa de variação (velocidade) horizontal do objeto
    var dy = 0; // taxa de variação (velocidade) vertical do objeto
    var x = 150; // posição horizontal do objeto (com valor inicial)
    var y = 100; // posição vertical do objeto (com valor inicial)
    var WIDTH = 1024; // largura da área retangular
    var HEIGHT = 768; // altura da área retangular
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    function Desenhar() { //codigo para desenhar o circulo azul
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2, true);
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.fill();

            let contador = 0;
            document.addEventListener("keydown", function(event) {
            if (event.key === "Enter" && x >= 50 && x < 200 && y >= 560 && y < 610 && !event.repeat) {
                openModalPista();
                contador++;
                if (contador === 5) {
                openModalContador();
                contador = 0;              
            }
            console.log(`Tecla Enter pressionada ${contador} vezes.`);
            }
          });

            document.addEventListener("keydown", function(event){
            if (event.key === "Enter" && x >= 930 && x < 1020 && y >= 440 && y < 480 && !event.repeat) {
                openModalPista2();
                contador++;
                if (contador === 5) {
                openModalContador();
                contador = 0;              
            }
            console.log(`Tecla Enter pressionada ${contador} vezes.`);
            }
          });

            document.addEventListener("keydown", function(event){
            if (event.key === "Enter" && x >= 680 && x < 740 && y >= 480 && y < 590 && !event.repeat) {
                openModalPista3();
                contador++;
                if (contador === 5) {
                openModalContador();
                contador = 0;              
            }
            console.log(`Tecla Enter pressionada ${contador} vezes.`);
            }
          });

            document.addEventListener("keydown", function(event){
            if (event.key === "Enter" && x >= 490 && x < 550 && y >= 340 && y < 470 && !event.repeat) {
                openModalPista4();
                contador++;
                if (contador === 5) {
                openModalContador();
                contador = 0;              
            }
            console.log(`Tecla Enter pressionada ${contador} vezes.`);
            }
          });
        
    }
      

    function LimparTela() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // essa linha apaga o rastro dos circulos
        ctx.fillStyle = "rgba(255, 255, 255, 0)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0)";
        ctx.beginPath();
        ctx.rect(0, 0, WIDTH, HEIGHT);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    Desenhar();
    
   

    function KeyDown(evt) {
        switch (evt.keyCode) {
            case 38: // seta para cima
                dy = -3;
                break;
            case 40: // seta para baixo
                dy = 3;
                break;
            case 37: // seta para esquerda
                dx = -3;
                break;
            case 39: // seta para direita
                dx = 3;
                break;
            case 38 + 39: // seta para cima + seta para direita
                dy = -2;
                dx = 2;
                break;
            case 38 + 37: // seta para cima + seta para esquerda
                dy = -2;
                dx = -2;
                break;
            case 40 + 39: // seta para baixo + seta para direita
                dy = 2;
                dx = 2;
                break;
            case 40 + 37: // seta para baixo + seta para esquerda
                dy = 2;
                dx = -2;
                break;
            case 32: // espaço
                dx = 0;
                dy = 0;
                break;
        }
    }
    
    function closeModal() {
        modal.style.display = "none"; // Oculta a modal
    }

    function Atualizar() {
        if (dx !== 0 || dy !== 0) {
            LimparTela();
            Desenhar();
            x += dx;
            y += dy;

            // limita a posição do objeto dentro da área retangular do canvas
            x = Math.max(0, Math.min(WIDTH, x));
            y = Math.max(0, Math.min(HEIGHT, y));
            if (x === 0 || x === WIDTH) {
                dx = 0;
            }
            if (y === 0 || y === HEIGHT) {
                dy = 0;
            }
        }
    }

    window.addEventListener('keydown', KeyDown, true);
    setInterval(Atualizar, 20);
}


Iniciar();

    var modalInicial = document.getElementById("modalInicial"); // Obtém a modal
    function openModalInicial() {
        modalInicial.style.display = "block"; // Exibe a modal
    }
    function closeModalInicial() {
        modalInicial.style.display = "none"; // Oculta a modal
    }

    var modalAjuda = document.getElementById("modalAjuda"); // Obtém a modal
    function openModalAjuda() {
        modalAjuda.style.display = "block"; // Exibe a modal
    }
    function closeModalAjuda() {
        modalAjuda.style.display = "none"; // Oculta a modal
    }

    // essa é a logica que faz o botão enter acionar o modal de pista 1
        var btnModal = document.getElementById("btnModal");
        btnModal.addEventListener("click", openModalPista);

    // essa é a logica que faz o botão enter acionar o modal de pista 2
        var btnModal2 = document.getElementById("btnModal2");
        btnModal2.addEventListener("click", openModalPista2);

    // essa é a logica que faz o botão enter acionar o modal de pista 3
        var btnModal3 = document.getElementById("btnModal3");
        btnModal3.addEventListener("click", openModalPista3);

    // essa é a logica que faz o botão enter acionar o modal de pista 4
        var btnModal4 = document.getElementById("btnModal4");
        btnModal4.addEventListener("click", openModalPista4);
    
    

// esse é a logica que inventa o modal na tela
    
    function openModalPista() {
        var modalPista = document.getElementById("modalPista"); // Obtém a modal
        modalPista.style.display = "block"; // Exibe a modal
        modalPista.focus(); // Set o focus na div da modal para permitir o evento de teclado

    }
    function closeModalPista() {
        modalPista.style.display = "none"; // Oculta a modal
    }

// esse é a logica que inventa o modal pista 2 na tela
    
    function openModalPista2() {
        var modalPista = document.getElementById("modalPista2"); // Obtém a modal
        modalPista2.style.display = "block"; // Exibe a modal
        modalPista2.focus(); // Set o focus na div da modal para permitir o evento de teclado

    }
    function closeModalPista2() {
        modalPista2.style.display = "none"; // Oculta a modal
    }

// esse é a logica que inventa o modal pista 3 na tela
        
    function openModalPista3() {
        var modalPista = document.getElementById("modalPista3"); // Obtém a modal
        modalPista3.style.display = "block"; // Exibe a modal
        modalPista3.focus(); // Set o focus na div da modal para permitir o evento de teclado

    }
    function closeModalPista3() {
        modalPista3.style.display = "none"; // Oculta a modal
    }

// esse é a logica que inventa o modal pista 4 na tela
        
    function openModalPista4() {
        var modalPista = document.getElementById("modalPista4"); // Obtém a modal
        modalPista4.style.display = "block"; // Exibe a modal
        modalPista4.focus(); // Set o focus na div da modal para permitir o evento de teclado

    }
    function closeModalPista4() {
        modalPista4.style.display = "none"; // Oculta a modal
    }



// esse é a logica que inventa o modalContador na tela
        
    function openModalContador() {
        var modalContador = document.getElementById("modalContador"); // Obtém a modal
        modalContador.style.display = "block"; // Exibe a modal
        modalContador.focus(); // Set o focus na div da modal para permitir o evento de teclado

    }
    function closeModalContador() {
        modalContador.style.display = "none"; // Oculta a modal
    }

// esse é a logica que inventa o modal do form de resposta certa
    
function openModalRespostaCerta() {
    var modalRespostaCerta = document.getElementById("modalRespostaCerta"); // Obtém a modal
    modalRespostaCerta.style.display = "block"; // Exibe a modal
    modalRespostaCerta.focus(); // Set o focus na div da modal para permitir o evento de teclado

}
function closeModalRespostaCerta() {
    modalRespostaCerta.style.display = "none"; // Oculta a modal
}

// esse é a logica que inventa o modal do form de resposta certa
    
function openModalRespostaErrada() {
    var modalRespostaErrada = document.getElementById("modalRespostaErrada"); // Obtém a modal
    modalRespostaErrada.style.display = "block"; // Exibe a modal
    modalRespostaErrada.focus(); // Set o focus na div da modal para permitir o evento de teclado

}
function closeModalRespostaErrada() {
    modalRespostaErrada.style.display = "none"; // Oculta a modal
}


// esse é a logica que inventa o modal do balão de dialogo
    
function openModalBalao() {
    var modalBalao = document.getElementById("modalBalao"); // Obtém a modal
    modalBalao.style.display = "block"; // Exibe a modal
    modalBalao.focus(); // Set o focus na div da modal para permitir o evento de teclado

}
function closeModalBalao() {
    modalBalao.style.display = "none"; // Oculta a modal
    document.removeEventListener("keydown" ,  balao)
}
// Detecta o evento de teclado
document.addEventListener("keydown",  balao);

function balao(event) {
    // Verifica se a tecla seta esta sendo pressionada
      switch (event.keyCode) {
            case 38: // seta para cima
                openModalBalao()
                break;
            case 40: // seta para baixo
                openModalBalao()
                break;
            case 37: // seta para esquerda
                openModalBalao()   
                break;
            case 39: // seta para direita
                openModalBalao()   
                break;
    }
    
}

// Detecta o evento de teclado
    document.addEventListener("keydown", function(event) {
        // Verifica se a tecla pressionada é Enter (keyCode 13)
        if (event.keyCode === 13) {
            // Verifica se o círculo está sobre a área da modal de pista
            if (isCircleOnModal(document.getElementById("circle"), document.getElementById("modalPista"))) {
                openModalPista(); // Abre a modal de pista
            }
        }
    });

// Função para verificar se o círculo está sobre a área da modal
    function isCircleOnModal(circle, modal) {
        // Verifica se a posição do círculo está dentro da área da modal
        var circleLeft = circle.offsetLeft;
        var circleTop = circle.offsetTop;
        var circleRight = circleLeft + circle.offsetWidth;
        var circleBottom = circleTop + circle.offsetHeight;

        var modalLeft = modal.offsetLeft;
        var modalTop = modal.offsetTop;
        var modalRight = modalLeft + modal.offsetWidth;
        var modalBottom = modalTop + modal.offsetHeight;

        if (circleLeft > modalRight || circleRight < modalLeft || circleTop > modalBottom || circleBottom < modalTop) {
            return false;
        }
        return true;
    }


// Selecione o botão de reiniciar pelo ID
const btnReiniciar = document.getElementById("btn-reiniciar");

// Adicione um evento de clique ao botão
btnReiniciar.addEventListener("click", reiniciar);

// Defina a função reiniciar que redefine o estado inicial da página
function reiniciar() {
  // Código para redefinir o estado inicial da página aqui
  location.reload(); // recarrega a página
}

document.getElementById("formResposta").addEventListener("submit", function(event) {
    // Impedir o envio padrão do formulário
    event.preventDefault();

    // Obter o valor da entrada de texto
    var resposta = document.getElementById("resposta").value;

    // Verificar se a resposta está correta e mostrar uma mensagem ao usuário
    if (resposta === "42") {
      openModalRespostaCerta();
    } else {
      openModalRespostaErrada();
    }
  });

var backgroundMusic = document.getElementById("background-music");
backgroundMusic.play();

const audioButton = document.getElementById("audioButton");
const backgroundAudio = document.getElementById("background-music");

audioButton.addEventListener("click", function() {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
    audioButton.textContent = "Desligar Áudio";
  } else {
    backgroundAudio.pause();
    audioButton.textContent = "Ligar Áudio";
  }
});
